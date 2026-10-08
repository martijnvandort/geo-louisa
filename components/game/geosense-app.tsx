"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { MapStage, type MapArc, type MapPin } from "@/components/map-stage";
import { approachPoint, countryOutline } from "@/lib/country-shapes";
import { approachDivision, divisionAt } from "@/lib/provinces";
import { provinceOutline } from "@/lib/provinces";
import { FinalScreen, LobbyScreen, MapTitle, PlayOverlay, QuizCard, RoundBar, WaitingScreen } from "@/components/game/screens";
import { useRoom } from "@/components/game/use-room";
import {
  buildLockGuess,
  buildMiss,
  createInitialState,
  currentCity,
  locksComplete,
  reducer,
} from "@/lib/game-engine";
import { playClick, playReveal, resumeAudio } from "@/lib/audio";
import { placesFor } from "@/data/catalog";
import { COLOR, greatCircleSegments, PREVIEW_MS, RESULT_MS } from "@/lib/geo";
import { countryAt, loadCountries } from "@/lib/place";
import type { EngineState, GuessWire, PlayFormat } from "@/lib/game-engine";
import { createRoomCode, randomSeed } from "@/lib/room";

export function GeosenseApp({ playerId }: { playerId: string }) {
  const [state, dispatch] = useReducer(reducer, playerId, createInitialState);
  const stateRef = useRef(state);
  const { send } = useRoom(state, dispatch);
  const sendRef = useRef(send);
  useEffect(() => {
    stateRef.current = state;
    sendRef.current = send;
  });
  useEffect(() => {
    void loadCountries();
  }, []);

  const startedRoom = useRef<string | null>(null);
  const revealSent = useRef(-1);
  const revealedSound = useRef(-1);
  const sawOpponent = useRef(false);

  const publishReveal = useCallback((guess: GuessWire) => {
    sendRef.current("reveal", { ...guess });
    dispatch({ type: "OPEN_REVEAL", guess, now: Date.now() });
  }, []);

  useEffect(() => {
    if (state.phase !== "ROUND_PREVIEW" || state.previewStartedAt == null) return;
    const delay = Math.max(0, state.previewStartedAt + PREVIEW_MS - Date.now());
    const timer = window.setTimeout(() => dispatch({ type: "BEGIN_GUESSING" }), delay);
    return () => window.clearTimeout(timer);
  }, [state.phase, state.previewStartedAt, state.roundIndex]);

  useEffect(() => {
    if (state.phase !== "GUESSING_ACTIVE" || state.guessingEndsAt == null) return;
    const delay = Math.max(0, state.guessingEndsAt - Date.now());
    const timer = window.setTimeout(() => {
      const current = stateRef.current;
      if (current.phase !== "GUESSING_ACTIVE") return;
      const guess =
        current.submitted && current.localGuess ? current.localGuess : buildMiss(current);
      if (current.mode === "solo") {
        dispatch({ type: "RESOLVE_SOLO", guess, now: Date.now() });
        return;
      }
      publishReveal(guess);
      window.setTimeout(() => dispatch({ type: "FORCE_REVEAL", now: Date.now() }), 800);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [publishReveal, state.guessingEndsAt, state.phase, state.roundIndex]);

  useEffect(() => {
    if (!locksComplete(state) || !state.localGuess) return;
    if (revealSent.current === state.roundIndex) return;
    revealSent.current = state.roundIndex;
    publishReveal(state.localGuess);
  }, [publishReveal, state]);

  useEffect(() => {
    if (state.phase !== "ROUND_RESULT" || state.resultStartedAt == null) return;
    const guestFallback = state.mode === "multi" && !state.isHost;
    const delay = Math.max(0, state.resultStartedAt + RESULT_MS + (guestFallback ? 2000 : 0) - Date.now());
    const timer = window.setTimeout(() => {
      const current = stateRef.current;
      if (current.phase !== "ROUND_RESULT") return;
      if (current.mode === "multi" && !current.isHost) {
        dispatch({
          type: "NEXT_ROUND",
          roundIndex: current.roundIndex + 1,
          previewStartedAt: Date.now(),
        });
        return;
      }
      // The world map stays on the country click. The capital pin returns when that country is shown on its own.
      if (current.playFormat === "quiz" && current.quizStep === 2 && current.region !== "world") {
        dispatch({ type: "QUIZ_MAP_NEXT", now: Date.now() });
        return;
      }
      if (current.roundIndex >= current.cityIds.length - 1) {
        if (current.mode === "multi") sendRef.current("match_end", { roundIndex: current.roundIndex });
        dispatch({ type: "FINAL" });
        return;
      }
      const previewStartedAt = Date.now();
      const roundIndex = current.roundIndex + 1;
      if (current.mode === "multi") sendRef.current("round_preview", { roundIndex, previewStartedAt });
      dispatch({ type: "NEXT_ROUND", roundIndex, previewStartedAt });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [state.isHost, state.mode, state.phase, state.quizStep, state.resultStartedAt, state.roundIndex]);

  useEffect(() => {
    if (state.phase !== "QUIZ_QUESTION" || state.guessingEndsAt == null) return;
    const delay = Math.max(0, state.guessingEndsAt - Date.now());
    const timer = window.setTimeout(() => {
      if (stateRef.current.phase !== "QUIZ_QUESTION") return;
      dispatch({ type: "QUIZ_TIMEOUT" });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [state.guessingEndsAt, state.phase, state.quizStep, state.roundIndex]);

  useEffect(() => {
    if (state.phase !== "QUIZ_FEEDBACK") return;
    const timer = window.setTimeout(() => dispatch({ type: "QUIZ_ADVANCE", now: Date.now() }), 1400);
    return () => window.clearTimeout(timer);
  }, [state.phase, state.quizStep, state.roundIndex]);

  useEffect(() => {
    if (state.phase !== "ROUND_RESULT") return;
    if (revealedSound.current === state.roundIndex) return;
    revealedSound.current = state.roundIndex;
    playReveal();
  }, [state.phase, state.roundIndex]);

  useEffect(() => {
    startedRoom.current = null;
    sawOpponent.current = false;
  }, [state.roomCode]);

  useEffect(() => {
    if (state.phase !== "WAITING_PLAYER" || !state.isHost || state.connection !== "live") return;
    if (state.seed != null || startedRoom.current === state.roomCode) return;
    const opponent = state.players.find((player) => player.id !== state.playerId);
    if (!opponent || !state.roomCode) return;
    startedRoom.current = state.roomCode;
    const seed = randomSeed();
    const previewStartedAt = Date.now();
    const rosterIds = [state.playerId, opponent.id];
    sendRef.current("match_start", {
      seed,
      difficulty: state.mapDifficulty,
      region: state.region,
      placeMode: state.placeMode,
      previewStartedAt,
      rosterIds,
    });
    dispatch({
      type: "MATCH_START",
      seed,
      difficulty: state.mapDifficulty,
      region: state.region,
      placeMode: state.placeMode,
      previewStartedAt,
      rosterIds,
    });
  }, [
    state.connection,
    state.isHost,
    state.mapDifficulty,
    state.placeMode,
    state.region,
    state.phase,
    state.playerId,
    state.players,
    state.roomCode,
    state.seed,
  ]);

  useEffect(() => {
    if (state.mode !== "multi") return;
    if (state.phase === "LOBBY" || state.phase === "WAITING_PLAYER" || state.phase === "FINAL_RESULTS") return;
    const opponentHere = state.players.some(
      (player) => player.id !== state.playerId && state.rosterIds.includes(player.id),
    );
    if (opponentHere) {
      sawOpponent.current = true;
      return;
    }
    if (!sawOpponent.current || state.connection !== "live") return;
    const timer = window.setTimeout(() => {
      const current = stateRef.current;
      const stillGone = !current.players.some(
        (player) => player.id !== current.playerId && current.rosterIds.includes(player.id),
      );
      if (stillGone && current.mode === "multi") dispatch({ type: "OPPONENT_LEFT", now: Date.now() });
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [state.connection, state.mode, state.phase, state.playerId, state.players, state.rosterIds]);

  const locking = useRef(false);
  useEffect(() => {
    if (state.phase !== "GUESSING_ACTIVE") locking.current = false;
  }, [state.phase, state.quizStep, state.roundIndex]);

  const onPlace = useCallback((coordinates: [number, number]) => {
    const current = stateRef.current;
    if (current.phase !== "GUESSING_ACTIVE" || current.submitted || locking.current) return;
    locking.current = true;
    resumeAudio();
    playClick();
    const now = Date.now();
    const locate = current.region === "netherlands" || current.region === "united-states"
      ? Promise.resolve(divisionAt(current.region, coordinates))
      : countryAt(coordinates);
    void locate.then((place) => {
      const latest = stateRef.current;
      if (latest.phase !== "GUESSING_ACTIVE" || latest.submitted) return;
      if (latest.playFormat === "quiz") {
        dispatch({ type: "QUIZ_PIN", coordinates, now, place });
        return;
      }
      const guess = buildLockGuess({ ...latest, pin: coordinates }, now, place);
      if (!guess) return;
      if (latest.mode === "solo") {
        dispatch({ type: "RESOLVE_SOLO", guess, now });
        return;
      }
      sendRef.current("locked", {
        playerId: guess.playerId,
        name: guess.name,
        roundIndex: guess.roundIndex,
        timeRemaining: guess.timeRemaining,
      });
      dispatch({ type: "LOCAL_LOCK", guess });
    });
  }, []);

  const startMatch = useCallback((format: PlayFormat) => {
    resumeAudio();
    dispatch({ type: "START_SOLO", now: Date.now(), seed: randomSeed(), format });
  }, []);

  const presentation = useMemo(() => presentationFrom(state), [state]);
  const lobbyMap = useRef(state.region);
  if (state.phase !== "LOBBY") lobbyMap.current = state.region;
  const mapRegion = state.phase === "LOBBY" ? lobbyMap.current : state.region;

  const playing =
    state.phase === "ROUND_PREVIEW" || state.phase === "GUESSING_ACTIVE" || state.phase === "ROUND_RESULT";
  const quizzing = state.phase === "QUIZ_QUESTION" || state.phase === "QUIZ_FEEDBACK";
  const inRound = playing || quizzing;

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#e2f6fe] text-[#2f4a52]">
      <div className={`absolute top-0 left-0 right-0 ${inRound ? "bottom-[calc(3.5rem+env(safe-area-inset-bottom))]" : "bottom-0"}`}>
      <MapStage
        difficulty={state.mapDifficulty}
        region={mapRegion}
        interactive={state.phase === "GUESSING_ACTIVE" && !state.submitted}
        pins={presentation.pins}
        arcs={presentation.arcs}
        highlight={presentation.highlight}
        onPlace={onPlace}
      />
      <MapTitle region={state.region} locale={state.locale} />
      {state.phase === "LOBBY" ? (
        <LobbyScreen
          state={state}
          onDifficulty={(difficulty) => dispatch({ type: "SET_DIFFICULTY", difficulty })}
          onRegion={(region) => dispatch({ type: "SET_REGION", region })}
          onPlaceMode={(placeMode) => dispatch({ type: "SET_PLACE_MODE", placeMode })}
          onQuestionCategory={(questionCategory) => dispatch({ type: "SET_QUESTION_CATEGORY", questionCategory })}
          onNickname={(nickname) => dispatch({ type: "SET_NICKNAME", nickname })}
          onLocale={(locale) => dispatch({ type: "SET_LOCALE", locale })}
          onPlay={startMatch}
          onCreate={() => {
            resumeAudio();
            dispatch({ type: "CREATE_ROOM", code: createRoomCode() });
          }}
          onJoin={(code) => {
            resumeAudio();
            dispatch({ type: "JOIN_ROOM", code });
          }}
        />
      ) : null}
      {state.phase === "WAITING_PLAYER" ? (
        <WaitingScreen state={state} onLeave={() => dispatch({ type: "LEAVE" })} />
      ) : null}
      {quizzing ? (
        <QuizCard
          state={state}
          onChoose={(choice) => dispatch({ type: "QUIZ_CHOOSE", choice })}
        />
      ) : null}
      {state.phase === "FINAL_RESULTS" ? (
        <FinalScreen state={state} onAgain={() => dispatch({ type: "PLAY_AGAIN" })} />
      ) : null}
      </div>
      {playing ? <PlayOverlay state={state} /> : null}
      {inRound ? <RoundBar state={state} onEnd={() => dispatch({ type: "LEAVE" })} /> : null}
    </main>
  );
}

function presentationFrom(state: EngineState): { pins: MapPin[]; arcs: MapArc[]; highlight: GeoJSON.Feature | null } {
  const city = currentCity(state);
  const pins: MapPin[] = [];
  const arcs: MapArc[] = [];
  const part = state.playFormat === "quiz" && state.quizStep === 3 ? 1 : 0;
  const areaRound =
    (state.playFormat === "quiz" && state.quizStep === 2) ||
    (state.playFormat !== "quiz" && (state.placeMode === "provinces" || state.placeMode === "countries"));
  const result = state.history.find((round) => round.roundIndex === state.roundIndex && (round.part ?? 0) === part);
  const mine = result?.guesses.find((guess) => guess.playerId === state.playerId);
  const outline =
    state.phase === "ROUND_RESULT" && areaRound && city
      ? city.id.includes(":country:")
        ? countryOutline(city.name)
        : provinceOutline(city.name)
      : null;
  const highlight = outline
    ? { ...outline, properties: { ...outline.properties, correct: mine?.distanceKm === 0 } }
    : null;

  if (state.phase === "GUESSING_ACTIVE" && state.pin) {
    pins.push({ id: "player", coordinates: state.pin, color: COLOR.player });
  }

  if (state.phase === "FINAL_RESULTS") {
    for (const place of placesFor(state.region, state.placeMode)) {
      pins.push({
        id: `capital-${place.id}`,
        coordinates: place.coordinates,
        color: COLOR.capital,
        capital: true,
      });
    }
    for (const round of state.history) {
      for (const guess of round.guesses) {
        if (!guess.confirmed || !guess.coordinates) continue;
        const mine = guess.playerId === state.playerId;
        pins.push({
          id: `guess-${guess.playerId}-${round.roundIndex}-${round.part ?? 0}`,
          coordinates: guess.coordinates,
          color: mine ? COLOR.player : COLOR.opponent,
        });
      }
    }
  }

  if (state.phase === "ROUND_RESULT" && city) {
    const record = result;
    if (!areaRound) {
      pins.push({ id: "target", coordinates: city.coordinates, color: COLOR.target, beacon: true });
    }
    for (const guess of record?.guesses ?? []) {
      if (!guess.confirmed || !guess.coordinates) continue;
      const mine = guess.playerId === state.playerId;
      pins.push({
        id: mine ? "player" : `opponent-${guess.playerId}`,
        coordinates: guess.coordinates,
        color: mine ? COLOR.player : COLOR.opponent,
      });
      const divisionArea = areaRound && city.id.includes(":province:");
      if (divisionArea) continue;
      const area = city.id.includes(":country:") || city.id.includes(":province:");
      const borderPoint =
        area && (guess.distanceKm ?? 0) > 0
          ? city.id.includes(":province:")
            ? approachDivision(city.name, guess.coordinates)
            : approachPoint(city.name, guess.coordinates)
          : null;
      arcs.push({
        id: `${guess.playerId}-${state.roundIndex}`,
        color: mine ? COLOR.player : COLOR.opponent,
        segments: greatCircleSegments(guess.coordinates, borderPoint ?? city.coordinates),
      });
    }
  }

  return { pins, arcs, highlight };
}
