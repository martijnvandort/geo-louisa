/**
 * Extra words for Kids questions whose answer is not obvious.
 * The clue is true, and it is not the answer itself.
 */
const CAPITAL_TIPS: Record<string, { en: string; nl: string }> = {
  Australia: { en: "it is not Sydney", nl: "het is niet Sydney" },
  Canada: { en: "it is not Toronto", nl: "het is niet Toronto" },
  Brazil: { en: "it is not Rio de Janeiro", nl: "het is niet Rio de Janeiro" },
  Switzerland: { en: "it is not Zürich", nl: "het is niet Zürich" },
  Turkey: { en: "it is not Istanbul", nl: "het is niet Istanboel" },
  "South Africa": { en: "the government sits here, not in Cape Town", nl: "de regering zit hier, niet in Kaapstad" },
};

const PROVINCE_CAPITAL_TIPS: Record<string, { en: string; nl: string }> = {
  "Noord-Holland": { en: "it is not Amsterdam", nl: "het is niet Amsterdam" },
};

const STATE_CAPITAL_TIPS: Record<string, { en: string; nl: string }> = {
  California: { en: "it is not Los Angeles", nl: "het is niet Los Angeles" },
  Florida: { en: "it is not Miami", nl: "het is niet Miami" },
  "New York": { en: "it is not New York City", nl: "het is niet New York City" },
};

const LANDMARK_TIPS: Record<string, { country?: { en: string; nl: string }; city?: { en: string; nl: string } }> = {
  "machu-picchu": {
    country: { en: "this is the famous Inca city in the Andes", nl: "dit is de beroemde Incastrad in de Andes" },
  },
  petra: {
    country: {
      en: "it was carved into red rock and appears in an Indiana Jones film",
      nl: "de stad is uit rode rots gehouwen en komt voor in een Indiana Jones-film",
    },
  },
  efteling: {
    city: { en: "the park is in a small town in Noord-Brabant", nl: "het park ligt in een kleine plaats in Noord-Brabant" },
  },
  "rose-bowl": {
    city: { en: "it is in California, near Los Angeles", nl: "het ligt in California, vlak bij Los Angeles" },
  },
};

const CITY_PROVINCE_TIPS: Record<string, { en: string; nl: string }> = {
  Borger: { en: "the hunebedden are in this village", nl: "de hunebedden staan in dit dorp" },
  Kaatsheuvel: { en: "the Efteling is in this town", nl: "de Efteling staat in deze plaats" },
  Giethoorn: { en: "this canal village is in the same province as Zwolle", nl: "dit dorp met de grachten ligt in dezelfde provincie als Zwolle" },
  "Neeltje Jans": { en: "this island is part of the Oosterschelde barrier", nl: "dit eiland hoort bij de Oosterscheldekering" },
};

function suffix(tip: { en: string; nl: string } | undefined, locale: "en" | "nl"): string {
  if (!tip) return "";
  return locale === "nl" ? ` Tip: ${tip.nl}.` : ` Tip: ${tip.en}.`;
}

export function kidsCapitalTip(
  kind: "province" | "state" | "country",
  name: string,
  locale: "en" | "nl",
): string {
  const table = kind === "province" ? PROVINCE_CAPITAL_TIPS : kind === "state" ? STATE_CAPITAL_TIPS : CAPITAL_TIPS;
  return suffix(table[name], locale);
}

export function kidsLandmarkTip(
  id: string,
  target: "country" | "city" | "division",
  locale: "en" | "nl",
): string {
  const item = LANDMARK_TIPS[id];
  if (!item || target === "division") return "";
  return suffix(target === "city" ? item.city : item.country, locale);
}

export function kidsCityProvinceTip(city: string, locale: "en" | "nl"): string {
  return suffix(CITY_PROVINCE_TIPS[city], locale);
}

/** The city name is too obscure for Easy. The province question can stay. */
export function kidsSkipLandmarkCity(id: string): boolean {
  return id === "hunebedden" || id === "oosterscheldekering";
}
