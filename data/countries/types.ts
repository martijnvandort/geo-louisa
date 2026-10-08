/** A point the player is asked to find. Coordinates are [longitude, latitude]. */
export type PlacePoint = {
  name: string;
  coordinates: [number, number];
  /** City name when `name` is a province or state. */
  capital?: string;
};

export type BuiltinMapId =
  | "world"
  | "eu"
  | "middle-east"
  | "north-america"
  | "central-america"
  | "south-america"
  | "africa"
  | "asia"
  | "oceania";

/**
 * One country. Register it in `data/countries/index.ts`.
 * That adds its own map and fills Capitals, Provinces, and Top 50 cities.
 * `maps` lists the multi-country maps this pack belongs to.
 */
export type CountryPack = {
  id: string;
  name: string;
  maps: BuiltinMapId[];
  bounds: [[number, number], [number, number]];
  capitals: PlacePoint[];
  provinces: PlacePoint[];
  topCities: PlacePoint[];
};
