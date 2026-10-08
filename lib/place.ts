import { booleanPointInPolygon, point } from "@turf/turf";
import { drawnCountryAt } from "@/lib/country-shapes";

interface CountryShape {
  name: string;
  bbox: [number, number, number, number];
  geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon;
}

let loading: Promise<CountryShape[]> | null = null;

function walkCoords(coords: unknown, visit: (lng: number, lat: number) => void) {
  if (Array.isArray(coords) && typeof coords[0] === "number") {
    visit(coords[0], coords[1] as number);
    return;
  }
  if (Array.isArray(coords)) coords.forEach((child) => walkCoords(child, visit));
}

function bboxOf(geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon): [number, number, number, number] {
  let west = 180;
  let south = 90;
  let east = -180;
  let north = -90;
  walkCoords(geometry.coordinates, (lng, lat) => {
    west = Math.min(west, lng);
    east = Math.max(east, lng);
    south = Math.min(south, lat);
    north = Math.max(north, lat);
  });
  return [west, south, east, north];
}

export function loadCountries(): Promise<CountryShape[]> {
  if (typeof window === "undefined") return Promise.resolve([]);
  if (!loading) {
    loading = fetch("/countries.geojson")
      .then((response) => response.json() as Promise<{ features: { properties?: { name?: string }; geometry: CountryShape["geometry"] }[] }>)
      .then((collection) =>
        collection.features
          .filter((feature) => feature.geometry && feature.properties?.name)
          .map((feature) => ({
            name: feature.properties?.name || "Unknown",
            bbox: bboxOf(feature.geometry),
            geometry: feature.geometry,
          })),
      );
  }
  return loading;
}

export async function countryAt(coordinates: [number, number]): Promise<string | null> {
  const drawn = drawnCountryAt(coordinates);
  if (drawn) return drawn;
  const countries = await loadCountries();
  const [lng, lat] = coordinates;
  const probe = point(coordinates);
  for (const country of countries) {
    const [west, south, east, north] = country.bbox;
    const crosses = east - west > 180;
    if (!crosses && (lng < west || lng > east || lat < south || lat > north)) continue;
    const feature = { type: "Feature" as const, properties: {}, geometry: country.geometry };
    if (booleanPointInPolygon(probe, feature)) return country.name;
  }
  return null;
}

export function sameCountry(a: string, b: string): boolean {
  const normalize = (name: string) =>
    name
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/^the /, "");
  return normalize(a) === normalize(b);
}

export function placeNote(place: string | null, confirmed: boolean, targetCountry: string): string | null {
  if (!confirmed) return null;
  if (!place) return "In the ocean";
  if (!sameCountry(place, targetCountry)) return place;
  return null;
}
