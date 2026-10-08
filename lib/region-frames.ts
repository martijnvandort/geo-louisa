import type { PlayRegion } from "@/data/cities";
import { COUNTRY_PACKS } from "@/data/countries";

export type LngLatBounds = [[number, number], [number, number]];

/** Metropolitan EU. French Guiana, the Azores, and the Canaries stay outside. */
export const EU_BOUNDS: LngLatBounds = [
  [-12, 34],
  [35, 71],
];

/**
 * Canada through Panama, including Alaska, Mexico, Central America, and the Caribbean.
 * The south edge stops at Panama so the frame does not run down the South American continent.
 */
export const NORTH_AMERICA_BOUNDS: LngLatBounds = [
  [-168, 7],
  [-52, 75],
];

/** Colombia to Cape Horn. */
export const SOUTH_AMERICA_BOUNDS: LngLatBounds = [
  [-82, -56],
  [-34, 13],
];

export const REGION_FRAMES: Record<Exclude<PlayRegion, "world">, LngLatBounds> = {
  eu: EU_BOUNDS,
  "middle-east": [
    [25, 12],
    [63, 43],
  ],
  "north-america": NORTH_AMERICA_BOUNDS,
  "central-america": [
    [-118, 7],
    [-59, 28],
  ],
  "south-america": SOUTH_AMERICA_BOUNDS,
  africa: [
    [-26, -36],
    [52, 38],
  ],
  asia: [
    [26, -11],
    [190, 82],
  ],
  oceania: [
    [110, -48],
    [180, 0],
  ],
};

export function regionFrame(region: string): LngLatBounds | null {
  if (region === "world") return null;
  if (region in REGION_FRAMES) return REGION_FRAMES[region as Exclude<PlayRegion, "world">];
  return COUNTRY_PACKS.find((pack) => pack.id === region)?.bounds ?? null;
}
