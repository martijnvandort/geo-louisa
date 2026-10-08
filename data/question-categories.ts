import { LANDMARKS } from "@/data/landmarks";

/** Question filters in the lobby. Add a category here when a new set is ready. */
export type QuestionCategory =
  | "all"
  | "landmarks"
  | "capitals"
  | "provinces"
  | "province-capitals"
  | "states"
  | "state-capitals"
  | "football";

export const QUESTION_CATEGORY_LABEL = {
  all: "categoryAll",
  landmarks: "categoryLandmarks",
  capitals: "capitals",
  provinces: "categoryProvinces",
  "province-capitals": "categoryProvinceCapitals",
  states: "categoryStates",
  "state-capitals": "categoryStateCapitals",
  football: "categoryFootball",
} as const;

function regionHasLandmarks(region: string): boolean {
  return LANDMARKS.some((item) => item.maps.includes(region));
}

/** All is first. Every region lists Landmarks. Capitals are for regions other than the world. */
export function questionCategoriesFor(region: string): QuestionCategory[] {
  const categories: QuestionCategory[] = ["all"];
  if (regionHasLandmarks(region) || region !== "world") categories.push("landmarks");
  if (region === "netherlands") categories.push("provinces", "province-capitals");
  else if (region === "united-states") categories.push("states", "state-capitals");
  else if (region !== "world") categories.push("capitals");
  categories.push("football");
  return categories;
}

/** Keep a capitals or divisions choice when the other country has the matching set. */
export function categoryForMap(category: QuestionCategory, region: string): QuestionCategory {
  const allowed = questionCategoriesFor(region);
  if (allowed.includes(category)) return category;
  if (category === "states" && allowed.includes("provinces")) return "provinces";
  if (category === "provinces" && allowed.includes("states")) return "states";
  if (category === "state-capitals" && allowed.includes("province-capitals")) return "province-capitals";
  if (category === "province-capitals" && allowed.includes("state-capitals")) return "state-capitals";
  if ((category === "capitals" || category === "province-capitals" || category === "state-capitals") && allowed.includes("capitals")) {
    return "capitals";
  }
  if (category === "capitals" && allowed.includes("province-capitals")) return "province-capitals";
  if (category === "capitals" && allowed.includes("state-capitals")) return "state-capitals";
  return "all";
}
