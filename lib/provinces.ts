import { booleanPointInPolygon, distance, nearestPointOnLine, point, polygonToLine } from "@turf/turf";
import provinces from "@/data/provinces/netherlands.json";
import states from "@/data/provinces/united-states.json";

type ProvinceGeometry = GeoJSON.Polygon | GeoJSON.MultiPolygon;
type ProvinceFeature = GeoJSON.Feature<ProvinceGeometry, { name: string }>;
type LineFeature = GeoJSON.Feature<GeoJSON.LineString | GeoJSON.MultiLineString>;
type DivisionCollection = { type: "FeatureCollection"; features: ProvinceFeature[] };

const DIVISIONS: Record<string, DivisionCollection> = {
  netherlands: provinces as DivisionCollection,
  "united-states": states as DivisionCollection,
};

const BY_NAME = new Map<string, ProvinceFeature>();
for (const collection of Object.values(DIVISIONS)) {
  for (const feature of collection.features) {
    BY_NAME.set(feature.properties.name, feature);
  }
}

export function divisionLines(region: string): DivisionCollection | null {
  return DIVISIONS[region] ?? null;
}

export function provinceOutline(name: string): ProvinceFeature | null {
  return BY_NAME.get(name) ?? null;
}

/** The province or state drawn under this point, on a country map. */
export function divisionAt(region: string, coordinates: [number, number]): string | null {
  const collection = DIVISIONS[region];
  if (!collection) return null;
  const probe = point(coordinates);
  for (const feature of collection.features) {
    if (booleanPointInPolygon(probe, feature)) return feature.properties.name;
  }
  return null;
}

/** Nearest point on the province or state. Inside the shape there is no border to meet. */
export function approachDivision(name: string, coordinates: [number, number]): [number, number] | null {
  const feature = BY_NAME.get(name);
  if (!feature) return null;
  const probe = point(coordinates);
  if (booleanPointInPolygon(probe, feature)) return null;
  const nearest = nearestPointOnLine(boundaryLine(feature), probe);
  const [lng, lat] = nearest.geometry.coordinates;
  if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null;
  return [lng, lat];
}

function boundaryLine(feature: ProvinceFeature): LineFeature {
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

/** 0 when the pin is inside the province. Otherwise kilometres to the nearest boundary point. */
export function distanceToProvinceKm(name: string, coordinates: [number, number]): number {
  const feature = BY_NAME.get(name);
  if (!feature) return Number.POSITIVE_INFINITY;
  const probe = point(coordinates);
  if (booleanPointInPolygon(probe, feature)) return 0;
  const nearest = nearestPointOnLine(boundaryLine(feature), probe);
  return distance(probe, nearest, { units: "kilometers" });
}
