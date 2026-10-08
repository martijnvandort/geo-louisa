import { en } from "./en";
import { nl } from "./nl";
import { NL_PLACE_NAMES } from "./nl-names";
import type { Messages } from "./types";

const COUNTRIES_WITH_THE = new Set([
  "Bahamas",
  "Comoros",
  "Dominican Republic",
  "Gambia",
  "Maldives",
  "Marshall Islands",
  "Netherlands",
  "Philippines",
  "Solomon Islands",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
]);

/**
 * Add a language in three steps:
 * 1. Add its id here.
 * 2. Create a Messages object (copy en.ts).
 * 3. Register it in `catalog` below.
 */
export const LOCALE_IDS = ["en", "nl"] as const;

export type LocaleId = (typeof LOCALE_IDS)[number];

const catalog: Record<LocaleId, Messages> = { en, nl };

export function messages(locale: LocaleId): Messages {
  return catalog[locale];
}

export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

/** Country and region names inside a sentence. Province and state names stay as written. */
export function localPlaceName(locale: LocaleId, name: string): string {
  const plain = name.replace(/^The /, "");
  if (locale === "nl") return NL_PLACE_NAMES[name] ?? NL_PLACE_NAMES[plain] ?? name;
  if (name.startsWith("The ")) return name;
  return COUNTRIES_WITH_THE.has(plain) ? `the ${plain}` : name;
}

export type { Messages };
