import { readFileSync, writeFileSync } from "node:fs";
import {
  AFRICA_COUNTRIES,
  ASIA_COUNTRIES,
  MIDDLE_EAST_COUNTRIES,
  OCEANIA_COUNTRIES,
} from "../data/regions";

type Feature = { type: "Feature"; properties: { name?: string; fill?: string }; geometry: unknown };
type Collection = { type: "FeatureCollection"; features: Feature[] };

const northAmerica = JSON.parse(readFileSync("public/land/north-america.geojson", "utf8")) as Collection;
const world = JSON.parse(readFileSync("public/countries.geojson", "utf8")) as Collection;
const northNames = new Set(["Canada", "United States", "Mexico"]);

function write(path: string, features: Feature[]) {
  const collection: Collection = { type: "FeatureCollection", features };
  writeFileSync(path, JSON.stringify(collection));
  console.log(path, features.map((feature) => feature.properties.name).sort().join(", "));
}

write(
  "public/land/central-america.geojson",
  northAmerica.features.filter((feature) => !northNames.has(feature.properties.name ?? "")),
);
write(
  "public/land/north-america.geojson",
  northAmerica.features.filter((feature) => northNames.has(feature.properties.name ?? "")),
);

function fromWorld(names: Set<string>) {
  return world.features.filter((feature) => names.has(feature.properties.name ?? ""));
}

write("public/land/middle-east.geojson", fromWorld(MIDDLE_EAST_COUNTRIES));
write("public/land/africa.geojson", fromWorld(AFRICA_COUNTRIES));
write("public/land/asia.geojson", fromWorld(ASIA_COUNTRIES));
write("public/land/oceania.geojson", fromWorld(OCEANIA_COUNTRIES));
