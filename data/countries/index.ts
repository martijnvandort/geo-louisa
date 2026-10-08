import type { CountryPack } from "./types";
import { netherlands } from "./netherlands";
import { unitedStates } from "./united-states";

export type { BuiltinMapId, CountryPack, PlacePoint } from "./types";

/** Add a country by importing its pack and appending one line. */
export const COUNTRY_PACKS: CountryPack[] = [
  netherlands,
  unitedStates,
];
