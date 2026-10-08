"use client";

import { useEffect, useRef } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import type { Action, EngineState, GuessWire, LockNotice, PlaceMode, PlayerPresence, PublicSnapshot } from "@/lib/game-engine";
import { displayName } from "@/lib/room";
import { getSupabase } from "@/lib/supabase";

interface PresencePayload {
  playerId: string;
  name: string;
  role: "host" | "guest";
}

function flattenPresence(raw: Record<string, PresencePayload[]>): PlayerPresence[] {
  const byId = new Map<string, PlayerPresence>();
  for (const entries of Object.values(raw)) {
    for (const entry of entries) {
      if (!entry?.playerId) continue;
      byId.set(entry.playerId, {
        id: entry.playerId,
        name: entry.name || "Player",
        role: entry.role === "host" ? "host" : "guest",
      });
    }
  }
  return [...byId.values()];
}

export function useRoom(state: EngineState, dispatch: (action: Action) => void) {
  const channelRef = useRef<RealtimeChannel | null>(null);
  const stateRef = useRef(state);
  const sendRef = useRef<(event: string, payload: Record<string, unknown>) => void>(() => {});

  const send = (event: string, payload: Record<string, unknown>) => {
    const channel = channelRef.current;
    if (!channel) return;
    void channel.send({ type: "broadcast", event, payload });
  };

  useEffect(() => {
    stateRef.current = state;
    sendRef.current = send;
  });

  useEffect(() => {
    if (state.mode !== "multi" || !state.roomCode || !state.playerId) return;
    const supabase = getSupabase();
    if (!supabase) {
      dispatch({
        type: "CONNECTION",
        status: "error",
        error: "Supabase keys are not set. Solo play still works from the lobby.",
      });
      return;
    }

    let active = true;
    const roomCode = state.roomCode;
    const channel = supabase.channel(`geosense:${roomCode}`, {
      config: {
        broadcast: { self: false },
        presence: { key: state.playerId },
      },
    });

    const timer = window.setTimeout(() => {
      if (!active) return;
      channelRef.current = channel;
      channel
        .on("broadcast", { event: "match_start" }, ({ payload }) => {
          const message = payload as {
            seed: number;
            difficulty: "normal" | "hard";
            region?: string;
            placeMode?: PlaceMode;
            previewStartedAt: number;
            rosterIds: string[];
          };
          dispatch({
            type: "MATCH_START",
            seed: message.seed,
            difficulty: message.difficulty,
            region: message.region ?? "world",
            placeMode: message.placeMode ?? "capitals",
            previewStartedAt: message.previewStartedAt,
            rosterIds: message.rosterIds,
          });
        })
        .on("broadcast", { event: "locked" }, ({ payload }) => {
          dispatch({ type: "REMOTE_LOCK", lock: payload as LockNotice });
        })
        .on("broadcast", { event: "reveal" }, ({ payload }) => {
          dispatch({ type: "REMOTE_REVEAL", guess: payload as GuessWire, now: Date.now() });
        })
        .on("broadcast", { event: "round_preview" }, ({ payload }) => {
          const message = payload as { roundIndex: number; previewStartedAt: number };
          dispatch({ type: "NEXT_ROUND", ...message });
        })
        .on("broadcast", { event: "match_end" }, () => {
          dispatch({ type: "FINAL" });
        })
        .on("broadcast", { event: "snapshot" }, ({ payload }) => {
          dispatch({ type: "SNAPSHOT", snapshot: payload as unknown as PublicSnapshot });
        })
        .on("broadcast", { event: "hello" }, () => {
          const current = stateRef.current;
          if (!current.isHost || current.seed == null || current.phase === "WAITING_PLAYER") return;
          const snapshot = {
            seed: current.seed,
            difficulty: current.mapDifficulty,
            region: current.region,
            placeMode: current.placeMode,
            rosterIds: current.rosterIds,
            phase: current.phase,
            roundIndex: current.roundIndex,
            previewStartedAt: current.previewStartedAt,
            guessingEndsAt: current.guessingEndsAt,
            resultStartedAt: current.resultStartedAt,
            history: current.history,
          };
          void channel.send({ type: "broadcast", event: "snapshot", payload: snapshot });
        })
        .on("presence", { event: "sync" }, () => {
          dispatch({
            type: "PRESENCE",
            players: flattenPresence(channel.presenceState<PresencePayload>()),
          });
        })
        .subscribe((status) => {
          if (!active) return;
          if (status === "SUBSCRIBED") {
            const current = stateRef.current;
            dispatch({ type: "CONNECTION", status: "live", error: null });
            void channel.track({
              playerId: current.playerId,
              name: displayName(current.nickname, current.isHost ? "Host" : "Guest"),
              role: current.isHost ? "host" : "guest",
            } satisfies PresencePayload);
            void channel.send({
              type: "broadcast",
              event: "hello",
              payload: { playerId: current.playerId },
            });
            return;
          }
          if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
            dispatch({
              type: "CONNECTION",
              status: "error",
              error: "Could not join that room. Check the Supabase URL and key, and confirm Realtime is enabled.",
            });
          }
        });
    }, 0);

    return () => {
      active = false;
      window.clearTimeout(timer);
      if (channelRef.current === channel) channelRef.current = null;
      void supabase.removeChannel(channel);
    };
  }, [dispatch, state.isHost, state.mode, state.playerId, state.roomCode]);

  return { send: (event: string, payload: Record<string, unknown>) => sendRef.current(event, payload) };
}
