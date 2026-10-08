import { booleanPointInPolygon, distance, nearestPointOnLine, point, polygonToLine } from "@turf/turf";

type CountryGeometry = GeoJSON.Polygon | GeoJSON.MultiPolygon;
type CountryFeature = GeoJSON.Feature<CountryGeometry, { name?: string }>;
type LineFeature = GeoJSON.Feature<GeoJSON.LineString | GeoJSON.MultiLineString>;

const BY_NAME = new Map<string, CountryFeature>();

/** Remember the polygons currently drawn, so a country guess uses that same outline. */
export function rememberLand(features: GeoJSON.Feature[]) {
  BY_NAME.clear();
  for (const feature of features) {
    const name = feature.properties && typeof feature.properties.name === "string" ? feature.properties.name : "";
    const geometry = feature.geometry;
    if (!name || !geometry) continue;
    if (geometry.type !== "Polygon" && geometry.type !== "MultiPolygon") continue;
    BY_NAME.set(name, feature as CountryFeature);
  }
}

export function countryOutline(name: string): CountryFeature | null {
  return BY_NAME.get(name) ?? null;
}

function bboxArea(feature: CountryFeature): number {
  let west = Infinity;
  let east = -Infinity;
  let south = Infinity;
  let north = -Infinity;
  const visit = (value: unknown) => {
    if (!Array.isArray(value) || value.length === 0) return;
    if (typeof value[0] === "number") {
      const [lng, lat] = value as [number, number];
      if (lng < west) west = lng;
      if (lng > east) east = lng;
      if (lat < south) south = lat;
      if (lat > north) north = lat;
      return;
    }
    for (const child of value) visit(child);
  };
  visit(feature.geometry.coordinates);
  if (!Number.isFinite(west)) return Infinity;
  return Math.max(0, east - west) * Math.max(0, north - south);
}

/** The drawn country under this point. A smaller country wins when two outlines overlap. */
export function drawnCountryAt(coordinates: [number, number]): string | null {
  const probe = point(coordinates);
  let best: { name: string; area: number } | null = null;
  for (const [name, feature] of BY_NAME) {
    if (!booleanPointInPolygon(probe, feature)) continue;
    const area = bboxArea(feature);
    if (!best || area < best.area) best = { name, area };
  }
  return best?.name ?? null;
}

/** Where a missed country guess should draw its line: the nearest point on that country. */
export function approachPoint(name: string, coordinates: [number, number]): [number, number] | null {
  const feature = BY_NAME.get(name);
  if (!feature) return null;
  const probe = point(coordinates);
  if (booleanPointInPolygon(probe, feature)) return null;
  const nearest = nearestPointOnLine(boundaryLine(feature), probe);
  const [lng, lat] = nearest.geometry.coordinates;
  if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null;
  return [lng, lat];
}

function boundaryLine(feature: CountryFeature): LineFeature {
  const lined = polygonToLine(feature);
  if (lined.type !== "FeatureCollection") return lined as LineFeature;
  const coordinates = lined.features.flatMap((part) => {
    if (part.geometry.type === "LineString") return [part.geometry.coordinates];
    return part.geometry.coordinates;
  });
  return {
    type: "Feature",
    properties: {},
    geometry: { type: "MultiLineString", coordinates },
  };
}

/** 0 when the pin is inside the country. Otherwise kilometres to the nearest boundary point. */
export function distanceToCountryKm(name: string, coordinates: [number, number]): number {
  const feature = BY_NAME.get(name);
  if (!feature) return Number.POSITIVE_INFINITY;
  const probe = point(coordinates);
  if (booleanPointInPolygon(probe, feature)) return 0;
  const nearest = nearestPointOnLine(boundaryLine(feature), probe);
  return distance(probe, nearest, { units: "kilometers" });
}
