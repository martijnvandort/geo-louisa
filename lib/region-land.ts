import { CONTINENT_COUNTRIES } from "@/data/regions";
import { COUNTRY_PACKS } from "@/data/countries";
import type { LngLatBounds } from "@/lib/region-frames";

type Position = [number, number];
type Ring = Position[];

type PolygonGeometry = { type: "Polygon"; coordinates: Ring[] };
type MultiPolygonGeometry = { type: "MultiPolygon"; coordinates: Ring[][] };
type LineGeometry = { type: "LineString"; coordinates: Position[] } | { type: "MultiLineString"; coordinates: Position[][] };

export type LandFeature = {
  type: "Feature";
  properties: { name?: string; fill?: string };
  geometry: PolygonGeometry | MultiPolygonGeometry;
};

export type HydroFeature = {
  type: "Feature";
  properties: Record<string, never>;
  geometry: PolygonGeometry | MultiPolygonGeometry | LineGeometry;
};

export type FeatureCollection<T> = { type: "FeatureCollection"; features: T[] };

type PreparedPolygon = {
  bbox: [number, number, number, number];
  rings: Ring[];
};

const EMPTY: FeatureCollection<HydroFeature> = { type: "FeatureCollection", features: [] };

function geoNameForPack(name: string) {
  return name.replace(/^The /, "");
}

const ISO_3166: Record<string, string> = {
  Austria: "AT",
  Belgium: "BE",
  Bulgaria: "BG",
  Croatia: "HR",
  Cyprus: "CY",
  Czechia: "CZ",
  Denmark: "DK",
  Estonia: "EE",
  Finland: "FI",
  France: "FR",
  Germany: "DE",
  Greece: "GR",
  Hungary: "HU",
  Ireland: "IE",
  Italy: "IT",
  Latvia: "LV",
  Lithuania: "LT",
  Luxembourg: "LU",
  Malta: "MT",
  Netherlands: "NL",
  Poland: "PL",
  Portugal: "PT",
  Romania: "RO",
  Slovakia: "SK",
  Slovenia: "SI",
  Spain: "ES",
  Sweden: "SE",
  Bahamas: "BS",
  Barbados: "BB",
  Belize: "BZ",
  Canada: "CA",
  "Costa Rica": "CR",
  Cuba: "CU",
  Dominica: "DM",
  "Dominican Republic": "DO",
  "El Salvador": "SV",
  Grenada: "GD",
  Guatemala: "GT",
  Haiti: "HT",
  Honduras: "HN",
  Jamaica: "JM",
  Mexico: "MX",
  Nicaragua: "NI",
  Panama: "PA",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  "Trinidad and Tobago": "TT",
  "United States": "US",
  Argentina: "AR",
  Bolivia: "BO",
  Brazil: "BR",
  Chile: "CL",
  Colombia: "CO",
  Ecuador: "EC",
  Guyana: "GY",
  Paraguay: "PY",
  Peru: "PE",
  Suriname: "SR",
  Uruguay: "UY",
  Venezuela: "VE",
};

/** Null means the whole world. Otherwise the countries this map is allowed to show. */
export function regionIsoCodes(region: string): string[] | null {
  const names = namesFor(region);
  if (!names) return null;
  return [...names].flatMap((name) => {
    const code = ISO_3166[name];
    return code ? [code] : [];
  });
}

function namesFor(region: string): Set<string> | null {
  if (region === "world") return null;
  if (region in CONTINENT_COUNTRIES) return CONTINENT_COUNTRIES[region as keyof typeof CONTINENT_COUNTRIES];
  const pack = COUNTRY_PACKS.find((item) => item.id === region);
  return new Set(pack ? [geoNameForPack(pack.name)] : []);
}

function ringCenter(ring: Ring): Position {
  let west = Infinity;
  let east = -Infinity;
  let south = Infinity;
  let north = -Infinity;
  for (const [lng, lat] of ring) {
    if (lng < west) west = lng;
    if (lng > east) east = lng;
    if (lat < south) south = lat;
    if (lat > north) north = lat;
  }
  return [(west + east) / 2, (south + north) / 2];
}

/** Distant territories stay out. The test uses the polygon center, so a kept polygon is not sliced. */
function keepPolygon(region: string, country: string, center: Position): boolean {
  const [lng, lat] = center;
  if (region === "eu") {
    return lng >= -13 && lng <= 42 && lat >= 34 && lat <= 72;
  }
  if (region === "north-america") {
    if (country === "United States" && lat < 30 && lng < -145) return false;
    return true;
  }
  if (region !== "netherlands" && region !== "united-states") return true;
  const pack = COUNTRY_PACKS.find((item) => item.id === region);
  if (!pack) return false;
  const [[west, south], [east, north]] = pack.bounds;
  return lng >= west && lng <= east && lat >= south && lat <= north;
}

function polygonsOf(geometry: LandFeature["geometry"]): Ring[][] {
  if (geometry.type === "Polygon") return [geometry.coordinates];
  return geometry.coordinates;
}

function geometryFrom(polygons: Ring[][]): LandFeature["geometry"] | null {
  if (polygons.length === 0) return null;
  if (polygons.length === 1) return { type: "Polygon", coordinates: polygons[0]! };
  return { type: "MultiPolygon", coordinates: polygons };
}

/** Pieces that belong to an included country but must stay covered, such as Hawaii. */
export function coverPatches(region: string, countries: FeatureCollection<LandFeature>): FeatureCollection<LandFeature> {
  if (region !== "north-america") return { type: "FeatureCollection", features: [] };
  const features: LandFeature[] = [];
  for (const feature of countries.features) {
    const name = feature.properties.name ?? "";
    if (name !== "United States") continue;
    for (const rings of polygonsOf(feature.geometry)) {
      const outer = rings[0];
      if (!outer || outer.length === 0) continue;
      if (keepPolygon(region, name, ringCenter(outer))) continue;
      let west = Infinity;
      let east = -Infinity;
      let south = Infinity;
      let north = -Infinity;
      for (const [lng, lat] of outer) {
        if (lng < west) west = lng;
        if (lng > east) east = lng;
        if (lat < south) south = lat;
        if (lat > north) north = lat;
      }
      const pad = 0.35;
      features.push({
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [west - pad, south - pad],
              [east + pad, south - pad],
              [east + pad, north + pad],
              [west - pad, north + pad],
              [west - pad, south - pad],
            ],
          ],
        },
      });
    }
  }
  return { type: "FeatureCollection", features };
}

export function selectLand<T extends LandFeature>(
  region: string,
  countries: FeatureCollection<T>,
): FeatureCollection<T> {
  const names = namesFor(region);
  const features: T[] = [];
  for (const feature of countries.features) {
    const name = feature.properties.name ?? "";
    if (names && !names.has(name)) continue;
    const kept = polygonsOf(feature.geometry).filter((rings) => {
      const outer = rings[0];
      if (!outer || outer.length === 0) return false;
      return keepPolygon(region, name, ringCenter(outer));
    });
    const geometry = geometryFrom(kept);
    if (!geometry) continue;
    features.push({ ...feature, geometry });
  }
  return { type: "FeatureCollection", features };
}

type PolyBox = { poly: number; west: number; east: number; south: number; north: number };

function polygonBoxes(geometry: LandFeature["geometry"]): PolyBox[] {
  const polygons = polygonsOf(geometry);
  return polygons.flatMap((rings, poly) => {
    const outer = rings[0];
    if (!outer || outer.length === 0) return [];
    let west = Infinity;
    let east = -Infinity;
    let south = Infinity;
    let north = -Infinity;
    for (const [lng, lat] of outer) {
      if (lng < west) west = lng;
      if (lng > east) east = lng;
      if (lat < south) south = lat;
      if (lat > north) north = lat;
    }
    return [{ poly, west, east, south, north }];
  });
}

function shiftRings(rings: Ring[], delta: number): Ring[] {
  return rings.map((ring) => ring.map(([lng, lat]) => [lng + delta, lat]));
}

/**
 * A country split by the date line otherwise forces the camera across the whole world.
 * The smaller side moves by 360° so it stays beside the rest of that country.
 */
export function settleDateline<T extends LandFeature>(collection: FeatureCollection<T>): FeatureCollection<T> {
  const features = collection.features.map((feature) => {
    const boxes = polygonBoxes(feature.geometry);
    if (boxes.length === 0) return feature;
    const west = Math.min(...boxes.map((box) => box.west));
    const east = Math.max(...boxes.map((box) => box.east));
    if (east - west <= 180) return feature;
    const negative = boxes.filter((box) => (box.west + box.east) / 2 < 0);
    const positive = boxes.filter((box) => (box.west + box.east) / 2 >= 0);
    if (negative.length === 0 || positive.length === 0) return feature;
    const area = (box: PolyBox) => (box.east - box.west) * (box.north - box.south);
    const shiftNegative = positive.reduce((sum, box) => sum + area(box), 0) >= negative.reduce((sum, box) => sum + area(box), 0);
    const delta = shiftNegative ? 360 : -360;
    const moving = new Set((shiftNegative ? negative : positive).map((box) => box.poly));
    const polygons = polygonsOf(feature.geometry).map((rings, poly) => (moving.has(poly) ? shiftRings(rings, delta) : rings));
    const geometry = geometryFrom(polygons);
    if (!geometry) return feature;
    return { ...feature, geometry };
  });
  return { ...collection, features };
}

export function boundsOf(features: { geometry: LandFeature["geometry"] | HydroFeature["geometry"] }[]): LngLatBounds | null {
  let west = Infinity;
  let east = -Infinity;
  let south = Infinity;
  let north = -Infinity;
  const visit = (value: unknown) => {
    if (!Array.isArray(value) || value.length === 0) return;
    if (typeof value[0] === "number") {
      const [lng, lat] = value as Position;
      if (lng < west) west = lng;
      if (lng > east) east = lng;
      if (lat < south) south = lat;
      if (lat > north) north = lat;
      return;
    }
    for (const child of value) visit(child);
  };
  for (const feature of features) visit(feature.geometry.coordinates);
  if (!Number.isFinite(west)) return null;
  return [
    [west, south],
    [east, north],
  ];
}

function prepare(features: LandFeature[]): PreparedPolygon[] {
  const prepared: PreparedPolygon[] = [];
  for (const feature of features) {
    for (const rings of polygonsOf(feature.geometry)) {
      const outer = rings[0];
      if (!outer) continue;
      let west = Infinity;
      let east = -Infinity;
      let south = Infinity;
      let north = -Infinity;
      for (const [lng, lat] of outer) {
        if (lng < west) west = lng;
        if (lng > east) east = lng;
        if (lat < south) south = lat;
        if (lat > north) north = lat;
      }
      prepared.push({ bbox: [west, south, east, north], rings });
    }
  }
  return prepared;
}

function pointInRing(lng: number, lat: number, ring: Ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]!;
    const [xj, yj] = ring[j]!;
    const crosses = yi > lat !== yj > lat;
    if (crosses && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

function pointInPolygon(lng: number, lat: number, rings: Ring[]) {
  const outer = rings[0];
  if (!outer || !pointInRing(lng, lat, outer)) return false;
  for (let i = 1; i < rings.length; i += 1) {
    const hole = rings[i];
    if (hole && pointInRing(lng, lat, hole)) return false;
  }
  return true;
}

function buildIndex(polygons: PreparedPolygon[], cell = 10) {
  const grid = new Map<string, number[]>();
  for (let index = 0; index < polygons.length; index += 1) {
    const [west, south, east, north] = polygons[index]!.bbox;
    const x0 = Math.floor(west / cell);
    const x1 = Math.floor(east / cell);
    const y0 = Math.floor(south / cell);
    const y1 = Math.floor(north / cell);
    for (let x = x0; x <= x1; x += 1) {
      for (let y = y0; y <= y1; y += 1) {
        const key = `${x},${y}`;
        const bucket = grid.get(key);
        if (bucket) bucket.push(index);
        else grid.set(key, [index]);
      }
    }
  }
  return {
    contains(lng: number, lat: number) {
      const bucket = grid.get(`${Math.floor(lng / cell)},${Math.floor(lat / cell)}`);
      if (!bucket) return false;
      for (const index of bucket) {
        const polygon = polygons[index]!;
        const [west, south, east, north] = polygon.bbox;
        if (lng < west || lng > east || lat < south || lat > north) continue;
        if (pointInPolygon(lng, lat, polygon.rings)) return true;
      }
      return false;
    },
  };
}

function lineParts(geometry: LineGeometry): Position[][] {
  if (geometry.type === "LineString") return [geometry.coordinates];
  return geometry.coordinates;
}

function clipLine(coords: Position[], contains: (lng: number, lat: number) => boolean): Position[][] {
  const parts: Position[][] = [];
  let current: Position[] = [];
  for (const point of coords) {
    if (contains(point[0], point[1])) current.push(point);
    else if (current.length > 1) {
      parts.push(current);
      current = [];
    } else {
      current = [];
    }
  }
  if (current.length > 1) parts.push(current);
  return parts;
}

function bboxHits(geometry: HydroFeature["geometry"], bounds: LngLatBounds) {
  const [[west, south], [east, north]] = bounds;
  let hit = false;
  const visit = (value: unknown) => {
    if (hit || !Array.isArray(value) || value.length === 0) return;
    if (typeof value[0] === "number") {
      const [lng, lat] = value as Position;
      if (lng >= west && lng <= east && lat >= south && lat <= north) hit = true;
      return;
    }
    for (const child of value) visit(child);
  };
  visit(geometry.coordinates);
  return hit;
}

export function selectHydro(
  land: FeatureCollection<LandFeature>,
  rivers: FeatureCollection<HydroFeature>,
  lakes: FeatureCollection<HydroFeature>,
): { rivers: FeatureCollection<HydroFeature>; lakes: FeatureCollection<HydroFeature> } {
  const bounds = boundsOf(land.features);
  if (!bounds || land.features.length === 0) return { rivers: EMPTY, lakes: EMPTY };
  const index = buildIndex(prepare(land.features));
  const lakeFeatures: HydroFeature[] = [];
  for (const feature of lakes.features) {
    if (feature.geometry.type !== "Polygon" && feature.geometry.type !== "MultiPolygon") continue;
    if (!bboxHits(feature.geometry, bounds)) continue;
    const polygons = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
    const kept = polygons.filter((rings) => {
      const outer = rings[0];
      if (!outer) return false;
      const [lng, lat] = ringCenter(outer);
      return index.contains(lng, lat);
    });
    const geometry = geometryFrom(kept);
    if (!geometry) continue;
    lakeFeatures.push({ type: "Feature", properties: {}, geometry });
  }
  const riverFeatures: HydroFeature[] = [];
  for (const feature of rivers.features) {
    if (feature.geometry.type !== "LineString" && feature.geometry.type !== "MultiLineString") continue;
    if (!bboxHits(feature.geometry, bounds)) continue;
    for (const line of lineParts(feature.geometry)) {
      for (const part of clipLine(line, index.contains)) {
        riverFeatures.push({
          type: "Feature",
          properties: {},
          geometry: { type: "LineString", coordinates: part },
        });
      }
    }
  }
  return {
    rivers: { type: "FeatureCollection", features: riverFeatures },
    lakes: { type: "FeatureCollection", features: lakeFeatures },
  };
}
