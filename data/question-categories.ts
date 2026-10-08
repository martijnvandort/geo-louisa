/** Question filters in the lobby. Add a category here when a new set is ready. */
export type QuestionCategory =
  | "all"
  | "landmarks"
  | "provinces"
  | "province-capitals"
  | "states"
  | "state-capitals";

export const QUESTION_CATEGORY_LABEL = {
  all: "categoryAll",
  landmarks: "categoryLandmarks",
  provinces: "categoryProvinces",
  "province-capitals": "categoryProvinceCapitals",
  states: "categoryStates",
  "state-capitals": "categoryStateCapitals",
} as const;

/** All is always first. The rest are the categories that map has questions for. */
export function questionCategoriesFor(region: string): QuestionCategory[] {
  if (region === "netherlands") return ["all", "landmarks", "provinces", "province-capitals"];
  if (region === "united-states") return ["all", "landmarks", "states", "state-capitals"];
  return ["all", "landmarks"];
}
