"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Copy, Trophy, Volume2, VolumeX } from "lucide-react";
import { placeCount, quizPlaceMode, getPlace, type PlaceMode } from "@/data/catalog";
import type { QuestionCategory } from "@/data/question-categories";
import { quizCard, quizPool } from "@/data/quiz";
import { useNow } from "@/components/game/count-up";
import { Button } from "@/components/ui/button";
import type { EngineState, MapDifficulty, PlayFormat } from "@/lib/game-engine";
import { matchTotal } from "@/lib/game-engine";
import { fill, localPlaceName, LOCALE_IDS, messages, type LocaleId, type Messages } from "@/lib/i18n";
import { formatKm, formatScore, GUESS_MS } from "@/lib/geo";
import { placeNote, sameCountry } from "@/lib/place";
import { isMuted, playTick, setMuted } from "@/lib/audio";

const glass = "rounded-2xl border border-[#2f4a52]/15 bg-[#f0d8a8] text-[#2f4a52] shadow-[0_10px_28px_rgba(47,74,82,0.12)]";

function MuteButton() {
  const [muted, setMutedState] = useState(false);
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={muted ? "Unmute cues" : "Mute cues"}
      onClick={() => {
        const next = !isMuted();
        setMuted(next);
        setMutedState(next);
      }}
    >
      {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
    </Button>
  );
}

const MAP_LABEL: Record<string, keyof Messages> = {
  world: "theWorld",
  eu: "eu",
  "middle-east": "middleEast",
  "north-america": "northAmerica",
  "central-america": "centralAmerica",
  "south-america": "southAmerica",
  africa: "africa",
  asia: "asia",
  oceania: "oceania",
  netherlands: "netherlands",
  "united-states": "unitedStates",
};

const WELCOME = "Welcome to Louisa's World of knowledge, culture and fun";
const face = "[font-family:var(--font-inter),Inter,sans-serif]";

export function MapTitle({ region, locale }: { region: string; locale: LocaleId }) {
  const text = messages(locale);
  const key = MAP_LABEL[region];
  const title = key ? text[key] : region;
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center px-3">
      <div
        className={`max-w-full rounded-b-xl border border-t-0 border-[#d4c8b8] bg-[#f6f1ea] px-4 pt-[max(0.35rem,env(safe-area-inset-top))] pb-1.5 text-center shadow-sm ${face}`}
      >
        <p className="text-[12.5px] font-semibold leading-tight text-[#333333] sm:text-sm">{WELCOME}</p>
        <p className="mt-0.5 text-xs font-medium leading-tight text-[#6e655c]">{title}</p>
      </div>
    </div>
  );
}

const REGIONS: { id: string; label: keyof Messages }[] = [
  { id: "world", label: "theWorld" },
  { id: "eu", label: "eu" },
  { id: "middle-east", label: "middleEast" },
  { id: "north-america", label: "northAmerica" },
  { id: "central-america", label: "centralAmerica" },
  { id: "south-america", label: "southAmerica" },
  { id: "africa", label: "africa" },
  { id: "asia", label: "asia" },
  { id: "oceania", label: "oceania" },
];

const COUNTRIES: { id: string; label: keyof Messages }[] = [
  { id: "netherlands", label: "netherlands" },
  { id: "united-states", label: "unitedStates" },
];

const FIND_CHOICES = [
  { id: "all", label: "categoryAll" },
  { id: "landmarks", label: "categoryLandmarks" },
  { id: "divisions", label: "findDivisions" },
  { id: "division-capitals", label: "findDivisionCapitals" },
] as const;

type FindChoice = (typeof FIND_CHOICES)[number]["id"];

const menuClass = `w-full appearance-none rounded-xl border border-[#cfc3b4] bg-[#f6f1ea] py-3 pl-3 pr-10 text-base font-medium text-[#333333] shadow-sm outline-none focus:border-[#a89f91] focus:ring-2 focus:ring-[#a89f91]/40 ${face}`;

const LEVELS: { id: MapDifficulty; label: "kids" | "adults" | "smartAdults" }[] = [
  { id: "kids", label: "kids" },
  { id: "normal", label: "adults" },
  { id: "hard", label: "smartAdults" },
];

function placeOptions(region: string): { id: PlaceMode; label: "countries" | "capitals" | "provinces" | "states" | "stateCapitals" }[] {
  if (region === "netherlands") {
    return [
      { id: "provinces", label: "provinces" },
      { id: "division-capitals", label: "capitals" },
    ];
  }
  if (region === "united-states") {
    return [
      { id: "provinces", label: "states" },
      { id: "capitals", label: "stateCapitals" },
    ];
  }
  if (region === "world") return [{ id: "countries", label: "countries" }];
  return [
    { id: "countries", label: "countries" },
    { id: "capitals", label: "capitals" },
  ];
}

function coercePlace(region: string, mode: PlaceMode): PlaceMode {
  const options = placeOptions(region);
  return options.some((option) => option.id === mode) ? mode : options[0].id;
}

function currentFind(category: QuestionCategory): FindChoice {
  if (category === "landmarks") return "landmarks";
  if (category === "provinces" || category === "states") return "divisions";
  if (category === "province-capitals" || category === "state-capitals") return "division-capitals";
  return "all";
}

export function LobbyScreen({
  state,
  onDifficulty,
  onRegion,
  onPlaceMode,
  onQuestionCategory,
  onNickname,
  onLocale,
  onPlay,
}: {
  state: EngineState;
  onDifficulty: (difficulty: MapDifficulty) => void;
  onRegion: (region: string) => void;
  onPlaceMode: (placeMode: PlaceMode) => void;
  onQuestionCategory: (questionCategory: QuestionCategory) => void;
  onNickname: (nickname: string) => void;
  onLocale: (locale: LocaleId) => void;
  onPlay: (format: PlayFormat) => void;
  onCreate: () => void;
  onJoin: (code: string) => void;
}) {
  const text = messages(state.locale);
  const quizAvailable = placeCount(state.region, quizPlaceMode(state.region)) > 0;
  const locale = state.locale === "nl" ? "nl" : "en";
  const byName = (a: { label: keyof Messages }, b: { label: keyof Messages }) =>
    text[a.label].localeCompare(text[b.label], locale);
  const regions = REGIONS.slice().sort(byName);
  const countries = COUNTRIES.slice().sort(byName);
  const finds = FIND_CHOICES.slice().sort(byName);
  const regionValue = REGIONS.some((choice) => choice.id === state.region) ? state.region : "";
  const countryValue = COUNTRIES.some((choice) => choice.id === state.region) ? state.region : "";
  const findValue = currentFind(state.questionCategory);

  useEffect(() => {
    const next = coercePlace(state.region, state.placeMode);
    if (next !== state.placeMode && findValue !== "divisions" && findValue !== "division-capitals") onPlaceMode(next);
  }, [findValue, onPlaceMode, state.placeMode, state.region]);

  function applyFind(choice: FindChoice, region: string) {
    if (choice === "landmarks") {
      onQuestionCategory("landmarks");
      const next = coercePlace(region, state.placeMode);
      if (next !== state.placeMode) onPlaceMode(next);
      return;
    }
    if (choice === "divisions") {
      onQuestionCategory(region === "united-states" ? "states" : "provinces");
      onPlaceMode(region === "netherlands" || region === "united-states" ? "provinces" : coercePlace(region, "countries"));
      return;
    }
    if (choice === "division-capitals") {
      if (region === "united-states") {
        onQuestionCategory("state-capitals");
        onPlaceMode("capitals");
      } else if (region === "netherlands") {
        onQuestionCategory("province-capitals");
        onPlaceMode("division-capitals");
      } else {
        onQuestionCategory("province-capitals");
        onPlaceMode(coercePlace(region, "capitals"));
      }
      return;
    }
    onQuestionCategory("all");
    const next = coercePlace(region, "countries");
    if (next !== state.placeMode) onPlaceMode(next);
  }

  function chooseMap(id: string) {
    onRegion(id);
    applyFind(findValue, id);
  }

  return (
    <div className="pointer-events-none absolute top-[4.75rem] left-3 z-20 w-[min(16.5rem,calc(100%-1.5rem))]">
      <section className="pointer-events-auto max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-2xl border border-[#d4d4d4] bg-[#f3f3f3] p-3 text-[#1a1a1a] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
        <Header>{text.language}</Header>
        <div className="mt-1.5 grid grid-cols-2 gap-1.5" role="radiogroup" aria-label={text.language}>
          {LOCALE_IDS.map((id) => (
            <Pill key={id} active={state.locale === id} title={id.toUpperCase()} onClick={() => onLocale(id)} />
          ))}
        </div>
        <FieldLabel>{text.continents}</FieldLabel>
        <MenuSelect
          label={text.continents}
          value={regionValue}
          onChange={(value) => {
            if (value) chooseMap(value);
          }}
        >
          {regionValue === "" ? <option value=""> </option> : null}
          {regions.map((choice) => (
            <option key={choice.id} value={choice.id}>
              {text[choice.label]}
            </option>
          ))}
        </MenuSelect>
        <FieldLabel>{text.individualCountries}</FieldLabel>
        <MenuSelect
          label={text.individualCountries}
          value={countryValue}
          onChange={(value) => {
            if (value) chooseMap(value);
          }}
        >
          {countryValue === "" ? <option value=""> </option> : null}
          {countries.map((choice) => (
            <option key={choice.id} value={choice.id}>
              {text[choice.label]}
            </option>
          ))}
        </MenuSelect>
        <FieldLabel>{text.whatFind}</FieldLabel>
        <MenuSelect label={text.whatFind} value={findValue} onChange={(value) => applyFind(value as FindChoice, state.region)}>
          {finds.map((choice) => (
            <option key={choice.id} value={choice.id}>
              {text[choice.label]}
            </option>
          ))}
        </MenuSelect>
        <FieldLabel>{text.whatLevel}</FieldLabel>
        <MenuSelect
          label={text.whatLevel}
          value={state.mapDifficulty}
          onChange={(value) => onDifficulty(value as MapDifficulty)}
        >
          {LEVELS.map((choice) => (
            <option key={choice.id} value={choice.id}>
              {text[choice.label]}
            </option>
          ))}
        </MenuSelect>
        <Header>{text.whatName}</Header>
        <input
          id="nickname"
          aria-label={text.whatName}
          value={state.nickname}
          maxLength={18}
          placeholder={text.whatName}
          className="mt-1.5 h-8 w-full rounded-full border border-[#d0d0d0] bg-white px-3 text-sm text-[#1a1a1a] outline-none placeholder:text-[#888]"
          onChange={(event) => onNickname(event.target.value)}
        />
        <button
          type="button"
          className="mt-3 h-9 w-full rounded-full bg-[#f0b478] text-sm font-medium text-[#2f4a52] disabled:opacity-40"
          disabled={!quizAvailable}
          onClick={() => onPlay("quiz")}
        >
          {text.playQuiz}
        </button>
      </section>
    </div>
  );
}

function Header({ children }: { children: string }) {
  return <p className="mt-3 text-xs leading-snug font-medium text-[#222] first:mt-0">{children}</p>;
}

function FieldLabel({ children }: { children: string }) {
  return (
    <p className={`mt-3 mb-1.5 text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-[#6e655c] ${face}`}>
      {children}
    </p>
  );
}

function MenuSelect({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <select aria-label={label} className={menuClass} value={value} onChange={(event) => onChange(event.target.value)}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-[#6e655c]" />
    </div>
  );
}

function Pill({ active, title, onClick }: { active: boolean; title: string; onClick: () => void }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className={`min-h-8 h-auto w-full rounded-full border px-3 py-2 text-left text-xs leading-snug font-medium ${
        active ? "border-[#f0b478] bg-[#f0b478] text-[#2f4a52]" : "border-[#d0d0d0] bg-white text-[#222]"
      }`}
    >
      {title}
    </button>
  );
}

export function WaitingScreen({
  state,
  onLeave,
}: {
  state: EngineState;
  onLeave: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const others = state.players.filter((player) => player.id !== state.playerId);
  const full = !state.isHost && others.length >= 2;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
      <section className={`${glass} w-full max-w-md p-6 text-center`}>
        <p className="text-xs uppercase tracking-[0.18em] text-[#2f4a52]">
          {state.isHost ? "Room code" : "Joining"}
        </p>
        <p className="mt-2 font-mono text-5xl tracking-[0.28em] text-[#2f4a52]">{state.roomCode}</p>
        <Button
          type="button"
          variant="secondary"
          className="mt-4"
          onClick={() => {
            if (!state.roomCode) return;
            void navigator.clipboard.writeText(state.roomCode).then(() => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
            });
          }}
        >
          <Copy className="h-4 w-4" />
          {copied ? "Copied" : "Copy code"}
        </Button>
        <div className="mt-5 space-y-2 text-left">
          <PlayerRow name={state.localName} detail={state.isHost ? "Host · you" : "You"} />
          {others.length === 0 ? (
            <p className="rounded-xl border border-dashed border-[#2f4a52]/20 px-3 py-3 text-sm text-[#2f4a52]">
              {state.connection === "error"
                ? state.connectionError
                : state.connection === "connecting"
                  ? "Connecting to the room…"
                  : state.isHost
                    ? "Waiting for an opponent to join."
                    : "Waiting for the host to open this room."}
            </p>
          ) : (
            others.map((player) => (
              <PlayerRow key={player.id} name={player.name} detail={player.role === "host" ? "Host" : "Guest"} />
            ))
          )}
        </div>
        {full || state.notice ? (
          <p className="mt-3 text-sm text-[#8a3d32]">{state.notice ?? "This room already has two players."}</p>
        ) : null}
        {state.connection === "error" && others.length > 0 ? (
          <p className="mt-3 text-sm text-[#8a3d32]">{state.connectionError}</p>
        ) : null}
        <Button type="button" variant="ghost" className="mt-4" onClick={onLeave}>
          Back to lobby
        </Button>
      </section>
    </div>
  );
}

function worldPinLine(
  text: ReturnType<typeof messages>,
  locale: LocaleId,
  guess: { confirmed: boolean; place: string | null; distanceKm: number | null } | undefined,
  targetName: string,
): string {
  if (!guess?.confirmed) return text.noPin;
  const target = localPlaceName(locale, targetName);
  const distance = formatKm(guess.distanceKm);
  if (!guess.place) return fill(text.pinWasOcean, { distance, target });
  const place = localPlaceName(locale, guess.place);
  if (sameCountry(guess.place, targetName) || guess.distanceKm === 0) return fill(text.pinWasIn, { place });
  return fill(text.pinWasAway, { place, distance, target });
}

function PlayerRow({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#e2f6fe] px-3 py-2">
      <span className="text-sm text-[#2f4a52]">{name}</span>
      <span className="font-mono text-[11px] uppercase tracking-wider text-[#2f4a52]">{detail}</span>
    </div>
  );
}

export function PlayOverlay({
  state,
  onStop,
}: {
  state: EngineState;
  onStop: () => void;
}) {
  const cityId = state.cityIds[state.roundIndex];
  const city = cityId ? getPlace(cityId) : null;
  const part = state.playFormat === "quiz" && state.quizStep === 3 ? 1 : 0;
  const record = state.history.find((round) => round.roundIndex === state.roundIndex && (round.part ?? 0) === part);
  const showingResult = state.phase === "ROUND_RESULT" && record != null;
  const guessing = state.phase === "GUESSING_ACTIVE";
  const timed = state.mapDifficulty !== "kids";
  const quiz = state.playFormat === "quiz";
  const frozen = state.submitted ? (state.localGuess?.timeRemaining ?? 0) : null;
  const now = useNow(timed && guessing && frozen == null && state.guessingEndsAt != null);
  const remaining =
    frozen ??
    (state.guessingEndsAt == null
      ? GUESS_MS / 1000
      : Math.max(0, Math.min(GUESS_MS / 1000, (state.guessingEndsAt - now) / 1000)));
  const urgent = timed && guessing && remaining <= 2;
  const lastSecond = useRef<number | null>(null);
  const localTotal = matchTotal(state);
  const text = messages(state.locale);
  const regionLabel = city?.id.includes(":country:") ? localPlaceName(state.locale, city.name) : city?.name;
  const mapPrompt = quiz
    ? fill(text.whereIs, {
        name:
          state.quizStep === 3
            ? (city?.capitalName ?? city?.name ?? "")
            : (regionLabel ?? ""),
      })
    : null;
  const mine = record?.guesses.find((guess) => guess.playerId === state.playerId);
  const note = mine ? placeNote(mine.place, mine.confirmed, city?.country ?? "") : null;
  const worldCountry = state.region === "world" && Boolean(city?.id.includes(":country:"));
  const countryTarget = Boolean(city?.id.includes(":country:"));
  const resultLine =
    worldCountry && showingResult && city
      ? worldPinLine(text, state.locale, mine, city.name)
      : null;

  useEffect(() => {
    if (!timed || !guessing || frozen != null) return;
    const second = Math.ceil(remaining);
    if (lastSecond.current != null && second < lastSecond.current && second > 0 && second <= 3) {
      playTick();
    }
    lastSecond.current = second;
  }, [frozen, guessing, remaining, timed]);

  if (!city) return null;

  return (
    <>
      <div className="pointer-events-none absolute top-3 right-3 z-20">
        <div className="pointer-events-auto">
          <MuteButton />
        </div>
        {state.notice ? (
          <p className={`${glass} mt-2 max-w-xs px-3 py-2 text-sm text-[#2f4a52]`}>{state.notice}</p>
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center px-3 pb-[env(safe-area-inset-bottom)]">
        <div className={`${glass} pointer-events-auto flex w-full max-w-md items-center gap-3 px-3 py-2.5`}>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#2f4a52]">
              {fill(text.round, {
                current: String(state.roundIndex + 1),
                total: String(state.cityIds.length),
              })}
              <span className="text-[#2f4a52]"> · {fill(text.points, { score: formatScore(localTotal) })}</span>
            </p>
            <p className="truncate text-base font-medium text-[#2f4a52]">
              {mapPrompt ??
                (countryTarget ? (
                  localPlaceName(state.locale, city.name)
                ) : (
                  <>
                    {city.name}
                    <span className="font-normal text-[#2f4a52]">, {localPlaceName(state.locale, city.country)}</span>
                  </>
                ))}
            </p>
            {showingResult ? (
              <p className="text-sm text-[#2f4a52]">
                {resultLine ?? (
                  <>
                    <span className="font-mono">{mine?.confirmed ? formatKm(mine.distanceKm) : text.noPin}</span>
                    {note ? <span> · {note}</span> : null}
                  </>
                )}
              </p>
            ) : (
              <p className={`text-sm ${urgent ? "text-[#8a3d32]" : "text-[#2f4a52]"}`}>
                {timed && state.guessingEndsAt != null ? (
                  <span className="font-mono tabular-nums">{remaining.toFixed(1)}s</span>
                ) : null}
                <span className={timed && state.guessingEndsAt != null ? "ml-2 text-xs text-[#2f4a52]" : "text-xs text-[#2f4a52]"}>
                  {state.submitted && state.mode === "multi" ? text.waitingPin : text.clickLocks}
                </span>
              </p>
            )}
          </div>
          <Button type="button" size="sm" variant="outline" className="shrink-0" onClick={onStop}>
            {text.stop}
          </Button>
        </div>
      </div>
    </>
  );
}

export function QuizCard({
  state,
  onChoose,
  onStop,
}: {
  state: EngineState;
  onChoose: (choice: string) => void;
  onStop: () => void;
}) {
  const id = state.cityIds[state.roundIndex];
  const place = id ? getPlace(id) : null;
  const text = messages(state.locale);
  const timed = state.mapDifficulty !== "kids";
  const asking = state.phase === "QUIZ_QUESTION";
  const now = useNow(timed && asking && state.guessingEndsAt != null);
  if (!place || state.seed == null || (state.quizStep !== 0 && state.quizStep !== 1)) return null;
  const card = quizCard(state.seed, state.roundIndex, state.quizStep, place, quizPool(state.region), state.locale, {
    category: state.questionCategory,
    difficulty: state.mapDifficulty,
    placeMode: state.placeMode,
    region: state.region,
  });
  const remaining =
    state.guessingEndsAt == null
      ? null
      : Math.max(0, Math.min(GUESS_MS / 1000, (state.guessingEndsAt - now) / 1000));
  const feedback = state.phase === "QUIZ_FEEDBACK";

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
      <section className={`${glass} flex h-[24.5rem] w-full max-w-md flex-col p-5`}>
        <p className="h-5 font-mono text-[11px] leading-5 uppercase tracking-[0.16em] text-[#2f4a52] tabular-nums">
          {fill(text.round, {
            current: String(state.roundIndex + 1),
            total: String(state.cityIds.length),
          })}
          <span> · {fill(text.points, { score: formatScore(matchTotal(state)) })}</span>
        </p>
        <p className="mt-3 h-[5.25rem] text-lg leading-7 font-medium text-[#2f4a52]">{card.prompt}</p>
        <p
          className={`mt-1 h-5 font-mono text-sm leading-5 tabular-nums ${remaining != null && remaining <= 2 ? "text-[#8a3d32]" : "text-[#2f4a52]"}`}
        >
          {remaining != null && asking ? `${remaining.toFixed(1)}s` : "\u00a0"}
        </p>
        <div className="mt-4 flex flex-col gap-2" role="group" aria-label="Answers">
          {card.choices.map((choice) => {
            const chosen = state.quizChoice === choice;
            const right = feedback && choice === card.correct;
            const wrong = feedback && chosen && !state.quizCorrect;
            return (
              <button
                key={choice}
                type="button"
                disabled={feedback}
                onClick={() => onChoose(choice)}
                className={`h-10 shrink-0 truncate rounded-full border px-3 text-sm font-medium ${
                  right
                    ? "border-[#a8d48c] bg-[#a8d48c] text-[#2f4a52]"
                    : wrong
                      ? "border-[#f0a8a4] bg-[#f0a8a4] text-[#2f4a52]"
                      : "border-[#d0d0d0] bg-white text-[#2f4a52]"
                }`}
              >
                {choice}
              </button>
            );
          })}
        </div>
        <Button type="button" variant="ghost" className="mt-auto" onClick={onStop}>
          {text.stop}
        </Button>
      </section>
    </div>
  );
}

export function FinalScreen({ state, onAgain }: { state: EngineState; onAgain: () => void }) {
  const total = matchTotal(state);
  const text = messages(state.locale);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let frame = 0;
    const colors = ["#f0b478", "#84c0b4", "#fccc84", "#a8cc84"];
    void import("canvas-confetti").then(({ default: confetti }) => {
      if (cancelled) return;
      const end = Date.now() + 1400;
      const burst = () => {
        void confetti({ particleCount: 4, angle: 60, spread: 58, origin: { x: 0, y: 0.72 }, colors });
        void confetti({ particleCount: 4, angle: 120, spread: 58, origin: { x: 1, y: 0.72 }, colors });
        if (!cancelled && Date.now() < end) frame = window.requestAnimationFrame(burst);
      };
      burst();
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute top-3 right-3 left-3 z-20 sm:top-4 sm:right-auto sm:left-4 sm:w-[24rem]">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        aria-label="Match overview"
        className={`${glass} pointer-events-auto max-h-[calc(100dvh-2rem)] w-full overflow-y-auto p-4 sm:p-5`}
      >
        <div className="flex items-center gap-2 text-[#8a5a22]">
          <Trophy className="h-5 w-5" />
          <p className="text-xs uppercase tracking-[0.18em]">{text.matchComplete}</p>
        </div>
        <p className="mt-3 text-xs font-medium text-[#2f4a52]">{text.totalScore}</p>
        <p className="font-mono text-4xl tabular-nums text-[#2f4a52]">{formatScore(total)}</p>
        <ol className="mt-4 space-y-2">
          {state.history.map((round) => {
            const city = getPlace(round.cityId);
            const guess = round.guesses.find((item) => item.playerId === state.playerId);
            const title = round.label ?? city.name;
            return (
              <li key={`${round.roundIndex}-${round.part ?? 0}`} className="flex items-start justify-between gap-3 text-sm text-[#2f4a52]">
                <span>
                  {round.roundIndex + 1}. {title}
                  {state.playFormat === "pin" && !city.id.includes(":country:") ? (
                    <span className="font-normal">, {localPlaceName(state.locale, city.country)}</span>
                  ) : null}
                </span>
                <span className="shrink-0 text-right font-mono tabular-nums">
                  {guess?.confirmed ? formatKm(guess.distanceKm) : text.noPin}
                  <span> · {fill(text.points, { score: formatScore(guess?.total ?? 0) })}</span>
                </span>
              </li>
            );
          })}
        </ol>
        <Button type="button" size="lg" className="mt-5 w-full" onClick={onAgain}>
          {text.playAgain}
        </Button>
      </motion.section>
    </div>
  );
}
