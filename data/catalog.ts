import { CITIES, regionCapitals, pickCityIds, type CityPool } from "@/data/cities";
import { footballPlayPlace } from "@/data/football";
import { COUNTRY_PACKS, type BuiltinMapId, type CountryPack, type PlacePoint } from "@/data/countries";
import { CONTINENT_IDS } from "@/data/regions";
import { ROUNDS } from "@/lib/geo";

export type PlaceMode = "capitals" | "countries" | "provinces" | "division-capitals" | "top-cities";

export type MapChoice = {
  id: string;
  name: string;
};

export type PlayPlace = {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  /** Capital city, when `name` is a country, province, or state. */
  capitalName?: string;
};

export const PLACE_MODES: { id: PlaceMode; name: string }[] = [
  { id: "capitals", name: "1. Capitals" },
  { id: "countries", name: "Countries" },
  { id: "provinces", name: "2. Provinces" },
  { id: "division-capitals", name: "Division capitals" },
  { id: "top-cities", name: "3. Top 50 cities" },
];

/** Islands and microstates that are not drawn on the world map. */
const ABSENT_FROM_WORLD_LAND = new Set([
  "Andorra",
  "Bahrain",
  "Barbados",
  "Cabo Verde",
  "Comoros",
  "Dominica",
  "French Polynesia",
  "Grenada",
  "Kiribati",
  "Liechtenstein",
  "Maldives",
  "Malta",
  "Marshall Islands",
  "Mauritius",
  "Micronesia",
  "Monaco",
  "Nauru",
  "Palau",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "São Tomé and Príncipe",
  "Seychelles",
  "Singapore",
  "Solomon Islands",
  "Tonga",
  "Tuvalu",
  "Vatican City",
]);

const BUILTIN_MAPS: MapChoice[] = [
  { id: "eu", name: "EU" },
  { id: "north-america", name: "North America" },
  { id: "south-america", name: "South America" },
  { id: "world", name: "The World" },
];

/** Built-in maps, then one button per registered country pack. */
export function mapChoices(): MapChoice[] {
  return [...BUILTIN_MAPS, ...COUNTRY_PACKS.map((pack) => ({ id: pack.id, name: pack.name }))];
}

const BUILTIN_IDS: readonly BuiltinMapId[] = ["world", ...CONTINENT_IDS];
const BUILTIN_SET = new Set<string>(BUILTIN_IDS);

function isBuiltin(id: string): id is BuiltinMapId {
  return BUILTIN_SET.has(id);
}

function slug(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function packPlace(
  pack: CountryPack,
  kind: "capital" | "province" | "division-capital" | "city",
  point: PlacePoint,
  capitalName?: string,
): PlayPlace {
  return {
    id: `${pack.id}:${kind}:${slug(point.name)}`,
    name: kind === "division-capital" ? (capitalName ?? point.capital ?? point.name) : point.name,
    country: pack.name,
    coordinates: point.coordinates,
    capitalName: capitalName ?? point.capital,
  };
}

function divisionCapitalName(pack: CountryPack, point: PlacePoint, index: number): string {
  if (point.capital) return point.capital;
  if (pack.capitals.length === pack.provinces.length) return pack.capitals[index]?.name ?? point.name;
  return point.name;
}

/** Packs that contribute Provinces and Top 50 cities on this map. */
function packsInMap(mapId: string): CountryPack[] {
  const own = COUNTRY_PACKS.find((pack) => pack.id === mapId);
  if (own) return [own];
  if (!isBuiltin(mapId)) return [];
  return COUNTRY_PACKS.filter((pack) => pack.maps.includes(mapId));
}

/** Provinces or states on a country map. Countries on every other map. */
export function quizPlaceMode(mapId: string): PlaceMode {
  if (mapId === "netherlands" || mapId === "united-states") return "provinces";
  return "countries";
}

export function placesFor(mapId: string, mode: PlaceMode): PlayPlace[] {
  if (mode === "capitals") {
    if (isBuiltin(mapId)) {
      return CITIES.filter((city) => mapId === "world" || city.pools.includes(mapId as CityPool)).map((city) => ({
        id: city.id,
        name: city.name,
        country: city.country,
        coordinates: city.coordinates,
        capitalName: city.name,
      }));
    }
    const pack = COUNTRY_PACKS.find((item) => item.id === mapId);
    return pack ? pack.capitals.map((point) => packPlace(pack, "capital", point, point.name)) : [];
  }
  if (mode === "countries") {
    if (!isBuiltin(mapId)) return [];
    return regionCapitals(mapId)
      .filter((city) => mapId !== "world" || !ABSENT_FROM_WORLD_LAND.has(city.country))
      .map((city) => ({
        id: `${mapId}:country:${city.id}`,
        name: city.country,
        country: city.country,
        coordinates: city.coordinates,
        capitalName: city.name,
      }));
  }
  if (mode === "division-capitals") {
    return packsInMap(mapId).flatMap((pack) =>
      pack.provinces.map((point, index) =>
        packPlace(pack, "division-capital", point, divisionCapitalName(pack, point, index)),
      ),
    );
  }
  const kind = mode === "provinces" ? "province" : "city";
  const field = mode === "provinces" ? "provinces" : "topCities";
  return packsInMap(mapId).flatMap((pack) =>
    pack[field].map((point, index) =>
      packPlace(pack, kind, point, kind === "province" ? divisionCapitalName(pack, point, index) : undefined),
    ),
  );
}

function mulberry32(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Up to ten unique places. A shorter list is played once. An empty list stays empty. */
export function pickPlaceIds(seed: number, mapId: string, mode: PlaceMode, exclude: ReadonlySet<string> = new Set()): string[] {
  if (mode === "capitals" && isBuiltin(mapId)) {
    return pickCityIds(seed, ROUNDS, mapId);
  }
  const pool = placesFor(mapId, mode)
    .map((place) => place.id)
    .filter((id) => !exclude.has(id));
  const rng = mulberry32(seed);
  const picked: string[] = [];
  const take = Math.min(ROUNDS, pool.length);
  for (let i = 0; i < take; i += 1) {
    const index = Math.floor(rng() * pool.length);
    const [id] = pool.splice(index, 1);
    if (id) picked.push(id);
  }
  return picked;
}

const BY_ID = new Map<string, PlayPlace>();
for (const mapId of [...BUILTIN_IDS, ...COUNTRY_PACKS.map((pack) => pack.id)]) {
  for (const mode of PLACE_MODES) {
    for (const place of placesFor(mapId, mode.id)) {
      BY_ID.set(place.id, place);
    }
  }
}

export function getPlace(id: string): PlayPlace {
  if (id.startsWith("football:")) {
    const football = footballPlayPlace(id);
    if (football) return football;
  }
  const place = BY_ID.get(id);
  if (!place) throw new Error(`Unknown place: ${id}`);
  return place;
}

export function placeCount(mapId: string, mode: PlaceMode): number {
  return placesFor(mapId, mode).length;
}
