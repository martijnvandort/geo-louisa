import { getPlace, placesFor, quizPlaceMode, type PlaceMode, type PlayPlace } from "@/data/catalog";
import { footballQuizCard } from "@/data/football";
import { CITIES } from "@/data/cities";
import { LANDMARKS, landmarkAllowed, type Landmark } from "@/data/landmarks";
import type { QuestionCategory } from "@/data/question-categories";
import { fill, localPlaceName, messages, type LocaleId } from "@/lib/i18n";

export type QuizKind = "province" | "state" | "country";

export type QuizCard = {
  prompt: string;
  choices: string[];
  correct: string;
  detail?: string;
};

export type QuizAsk = {
  category?: QuestionCategory;
  difficulty?: "kids" | "normal" | "hard";
  placeMode?: PlaceMode;
  region?: string;
};

/**
 * Larger cities in a province or state, biggest first.
 * The first name is the correct "largest city" answer.
 * These stay separate from countries: Georgia is both a US state and a country.
 */
const DIVISION_CITIES: Record<string, string[]> = {
  Drenthe: ["Emmen", "Assen", "Hoogeveen"],
  Flevoland: ["Almere", "Lelystad", "Dronten"],
  Friesland: ["Leeuwarden", "Drachten", "Sneek"],
  Gelderland: ["Nijmegen", "Arnhem", "Apeldoorn"],
  Groningen: ["Groningen", "Veendam", "Stadskanaal"],
  Limburg: ["Maastricht", "Venlo", "Heerlen"],
  "Noord-Brabant": ["Eindhoven", "Tilburg", "Breda"],
  "Noord-Holland": ["Amsterdam", "Haarlem", "Alkmaar"],
  Overijssel: ["Enschede", "Zwolle", "Deventer"],
  Utrecht: ["Utrecht", "Amersfoort", "Nieuwegein"],
  Zeeland: ["Middelburg", "Vlissingen", "Terneuzen"],
  "Zuid-Holland": ["Rotterdam", "Den Haag", "Leiden"],
  Alabama: ["Huntsville", "Birmingham", "Montgomery"],
  Alaska: ["Anchorage", "Fairbanks", "Juneau"],
  Arizona: ["Phoenix", "Tucson", "Mesa"],
  Arkansas: ["Little Rock", "Fayetteville", "Fort Smith"],
  California: ["Los Angeles", "San Diego", "San Jose"],
  Colorado: ["Denver", "Colorado Springs", "Aurora"],
  Connecticut: ["Bridgeport", "New Haven", "Stamford"],
  Delaware: ["Wilmington", "Dover", "Newark"],
  Florida: ["Jacksonville", "Miami", "Tampa"],
  Georgia: ["Atlanta", "Augusta", "Columbus"],
  Hawaii: ["Honolulu", "Hilo", "Kailua"],
  Idaho: ["Boise", "Meridian", "Nampa"],
  Illinois: ["Chicago", "Aurora", "Naperville"],
  Indiana: ["Indianapolis", "Fort Wayne", "Evansville"],
  Iowa: ["Des Moines", "Cedar Rapids", "Davenport"],
  Kansas: ["Wichita", "Overland Park", "Kansas City"],
  Kentucky: ["Louisville", "Lexington", "Bowling Green"],
  Louisiana: ["New Orleans", "Baton Rouge", "Shreveport"],
  Maine: ["Portland", "Lewiston", "Bangor"],
  Maryland: ["Baltimore", "Frederick", "Rockville"],
  Massachusetts: ["Boston", "Worcester", "Springfield"],
  Michigan: ["Detroit", "Grand Rapids", "Warren"],
  Minnesota: ["Minneapolis", "Saint Paul", "Rochester"],
  Mississippi: ["Jackson", "Gulfport", "Southaven"],
  Missouri: ["Kansas City", "St. Louis", "Springfield"],
  Montana: ["Billings", "Missoula", "Great Falls"],
  Nebraska: ["Omaha", "Lincoln", "Bellevue"],
  Nevada: ["Las Vegas", "Henderson", "Reno"],
  "New Hampshire": ["Manchester", "Nashua", "Concord"],
  "New Jersey": ["Newark", "Jersey City", "Paterson"],
  "New Mexico": ["Albuquerque", "Las Cruces", "Rio Rancho"],
  "New York": ["New York", "Buffalo", "Rochester"],
  "North Carolina": ["Charlotte", "Raleigh", "Greensboro"],
  "North Dakota": ["Fargo", "Bismarck", "Grand Forks"],
  Ohio: ["Columbus", "Cleveland", "Cincinnati"],
  Oklahoma: ["Oklahoma City", "Tulsa", "Norman"],
  Oregon: ["Portland", "Eugene", "Salem"],
  Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown"],
  "Rhode Island": ["Providence", "Cranston", "Warwick"],
  "South Carolina": ["Charleston", "Columbia", "Greenville"],
  "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen"],
  Tennessee: ["Nashville", "Memphis", "Knoxville"],
  Texas: ["Houston", "San Antonio", "Dallas"],
  Utah: ["Salt Lake City", "West Valley City", "Provo"],
  Vermont: ["Burlington", "South Burlington", "Rutland"],
  Virginia: ["Virginia Beach", "Norfolk", "Chesapeake"],
  Washington: ["Seattle", "Spokane", "Tacoma"],
  "West Virginia": ["Charleston", "Huntington", "Morgantown"],
  Wisconsin: ["Milwaukee", "Madison", "Green Bay"],
  Wyoming: ["Cheyenne", "Casper", "Laramie"],
};

/** Larger cities in a country, biggest first. The first name is the correct "largest city" answer. */
const COUNTRY_CITIES: Record<string, string[]> = {
  France: ["Paris", "Lyon", "Marseille"],
  Germany: ["Berlin", "Hamburg", "Munich"],
  Spain: ["Madrid", "Barcelona", "Valencia"],
  Italy: ["Rome", "Milan", "Naples"],
  Netherlands: ["Amsterdam", "Rotterdam", "Den Haag"],
  Belgium: ["Brussels", "Antwerp", "Ghent"],
  Portugal: ["Lisbon", "Porto", "Coimbra"],
  Poland: ["Warsaw", "Kraków", "Łódź"],
  Sweden: ["Stockholm", "Gothenburg", "Malmö"],
  Austria: ["Vienna", "Graz", "Linz"],
  Greece: ["Athens", "Thessaloniki", "Patras"],
  Ireland: ["Dublin", "Cork", "Galway"],
  "United States": ["New York", "Los Angeles", "Chicago"],
  Canada: ["Toronto", "Montreal", "Vancouver"],
  Mexico: ["Mexico City", "Guadalajara", "Monterrey"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Brasília"],
  Argentina: ["Buenos Aires", "Córdoba", "Rosario"],
  China: ["Shanghai", "Beijing", "Guangzhou"],
  Japan: ["Tokyo", "Yokohama", "Osaka"],
  India: ["Mumbai", "Delhi", "Bangalore"],
  Australia: ["Sydney", "Melbourne", "Brisbane"],
  "United Kingdom": ["London", "Birmingham", "Manchester"],
};

/** A well-known city that is not the capital. Used when the capital list has no second city. */
const OTHER_CITIES: Record<string, string[]> = {
  Afghanistan: ["Kandahar"],
  Albania: ["Durrës"],
  Algeria: ["Oran"],
  Andorra: ["Encamp"],
  Angola: ["Huambo"],
  Armenia: ["Gyumri"],
  Azerbaijan: ["Ganja"],
  Bahamas: ["Freeport"],
  Bahrain: ["Muharraq"],
  Bangladesh: ["Chittagong"],
  Barbados: ["Speightstown"],
  Belarus: ["Gomel"],
  Belize: ["Belize City"],
  Benin: ["Cotonou"],
  Bhutan: ["Paro"],
  Bolivia: ["Santa Cruz"],
  "Bosnia and Herzegovina": ["Banja Luka"],
  Botswana: ["Francistown"],
  Brunei: ["Kuala Belait"],
  Bulgaria: ["Plovdiv"],
  "Burkina Faso": ["Bobo-Dioulasso"],
  Burundi: ["Bujumbura"],
  "Cabo Verde": ["Mindelo"],
  Cambodia: ["Siem Reap"],
  Cameroon: ["Douala"],
  "Central African Republic": ["Bambari"],
  Chad: ["Moundou"],
  Colombia: ["Medellín"],
  Comoros: ["Mutsamudu"],
  Congo: ["Pointe-Noire"],
  "DR Congo": ["Lubumbashi"],
  "Costa Rica": ["Alajuela"],
  "Côte d'Ivoire": ["Abidjan"],
  Cuba: ["Santiago de Cuba"],
  Cyprus: ["Limassol"],
  Czechia: ["Brno"],
  Denmark: ["Aarhus"],
  Djibouti: ["Ali Sabieh"],
  Dominica: ["Portsmouth"],
  "Dominican Republic": ["Santiago de los Caballeros"],
  Ecuador: ["Guayaquil"],
  Egypt: ["Alexandria"],
  "El Salvador": ["Santa Ana"],
  "Equatorial Guinea": ["Bata"],
  Eritrea: ["Keren"],
  Estonia: ["Tartu"],
  Eswatini: ["Manzini"],
  Ethiopia: ["Dire Dawa"],
  Fiji: ["Nadi"],
  Finland: ["Tampere"],
  Gabon: ["Port-Gentil"],
  Gambia: ["Serekunda"],
  Georgia: ["Batumi"],
  Ghana: ["Kumasi"],
  Greenland: ["Ilulissat"],
  Grenada: ["Gouyave"],
  Guatemala: ["Antigua Guatemala"],
  Guinea: ["Nzérékoré"],
  "Guinea-Bissau": ["Bafatá"],
  Guyana: ["Linden"],
  Haiti: ["Cap-Haïtien"],
  Honduras: ["San Pedro Sula"],
  Hungary: ["Debrecen"],
  Iceland: ["Akureyri"],
  Indonesia: ["Surabaya"],
  Iran: ["Mashhad"],
  Iraq: ["Basra"],
  Israel: ["Tel Aviv"],
  Jamaica: ["Montego Bay"],
  Jordan: ["Zarqa"],
  Kazakhstan: ["Almaty"],
  Kenya: ["Mombasa"],
  Kiribati: ["Betio"],
  "North Korea": ["Hamhung"],
  "South Korea": ["Busan"],
  Kuwait: ["Hawalli"],
  Kyrgyzstan: ["Osh"],
  Laos: ["Luang Prabang"],
  Latvia: ["Daugavpils"],
  Lebanon: ["Tripoli"],
  Lesotho: ["Teyateyaneng"],
  Liberia: ["Gbarnga"],
  Libya: ["Benghazi"],
  Liechtenstein: ["Schaan"],
  Lithuania: ["Kaunas"],
  Luxembourg: ["Esch-sur-Alzette"],
  Madagascar: ["Toamasina"],
  Malawi: ["Blantyre"],
  Malaysia: ["George Town"],
  Maldives: ["Addu City"],
  Malta: ["Birkirkara"],
  "Marshall Islands": ["Ebeye"],
  Mauritania: ["Nouadhibou"],
  Mauritius: ["Beau Bassin-Rose Hill"],
  Micronesia: ["Weno"],
  Moldova: ["Bălți"],
  Monaco: ["Monte Carlo"],
  Mongolia: ["Erdenet"],
  Montenegro: ["Nikšić"],
  Mozambique: ["Beira"],
  Myanmar: ["Yangon"],
  Namibia: ["Walvis Bay"],
  Nauru: ["Aiwo"],
  Nepal: ["Pokhara"],
  Nicaragua: ["León"],
  Niger: ["Zinder"],
  Nigeria: ["Lagos"],
  "North Macedonia": ["Bitola"],
  Oman: ["Salalah"],
  Pakistan: ["Karachi"],
  Palau: ["Koror"],
  Panama: ["Colón"],
  "Papua New Guinea": ["Lae"],
  Paraguay: ["Ciudad del Este"],
  Philippines: ["Cebu City"],
  Qatar: ["Al Wakrah"],
  Romania: ["Cluj-Napoca"],
  Russia: ["Saint Petersburg"],
  Rwanda: ["Huye"],
  "Saint Kitts and Nevis": ["Charlestown"],
  "Saint Lucia": ["Vieux Fort"],
  "Saint Vincent and the Grenadines": ["Layou"],
  Samoa: ["Salelologa"],
  "San Marino": ["Serravalle"],
  "São Tomé and Príncipe": ["Trindade"],
  "Saudi Arabia": ["Jeddah"],
  Senegal: ["Thiès"],
  Serbia: ["Novi Sad"],
  Seychelles: ["Anse Boileau"],
  "Sierra Leone": ["Bo"],
  Singapore: ["Jurong"],
  Slovakia: ["Košice"],
  Slovenia: ["Maribor"],
  "Solomon Islands": ["Auki"],
  Somalia: ["Hargeisa"],
  "South Sudan": ["Malakal"],
  "Sri Lanka": ["Kandy"],
  Sudan: ["Omdurman"],
  Suriname: ["Lelydorp"],
  Switzerland: ["Zurich"],
  Syria: ["Aleppo"],
  Taiwan: ["Kaohsiung"],
  Tajikistan: ["Khujand"],
  Thailand: ["Chiang Mai"],
  "Timor-Leste": ["Baucau"],
  Togo: ["Sokodé"],
  Tonga: ["Neiafu"],
  "Trinidad and Tobago": ["San Fernando"],
  Tunisia: ["Sfax"],
  Turkmenistan: ["Türkmenabat"],
  Tuvalu: ["Alapi"],
  Uganda: ["Gulu"],
  Ukraine: ["Kharkiv"],
  "United Arab Emirates": ["Dubai"],
  Uruguay: ["Salto"],
  Vanuatu: ["Luganville"],
  Venezuela: ["Maracaibo"],
  Vietnam: ["Ho Chi Minh City"],
  Yemen: ["Aden"],
  Zambia: ["Kitwe"],
  Zimbabwe: ["Bulawayo"],
};

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

function shuffle<T>(items: T[], rnd: () => number): T[] {
  const next = items.slice();
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(rnd() * (index + 1));
    const current = next[index];
    next[index] = next[swap] as T;
    next[swap] = current as T;
  }
  return next;
}

export function quizKind(place: PlayPlace): QuizKind {
  if (place.id.startsWith("united-states:province:")) return "state";
  if (place.id.includes(":province:")) return "province";
  return "country";
}

const COUNTRIES_WITH_THE = new Set([
  "Bahamas",
  "Comoros",
  "Dominican Republic",
  "Gambia",
  "Maldives",
  "Marshall Islands",
  "Netherlands",
  "Philippines",
  "Solomon Islands",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
]);

/** "the Netherlands" reads as a normal sentence. "France" does not take an article. */
export function countryPhrase(name: string): string {
  return COUNTRIES_WITH_THE.has(name) ? `the ${name}` : name;
}

/** The place kind is always named, so Utrecht the province is not Utrecht the city, and Georgia the state is not Georgia the country. */
function cityPlaceLabel(kind: QuizKind, name: string, locale: LocaleId): string {
  if (kind === "province") return locale === "nl" ? `de provincie ${name}` : `the province of ${name}`;
  if (kind === "state") return locale === "nl" ? `de staat ${name}` : `the state of ${name}`;
  const country = localPlaceName(locale, name);
  return locale === "nl" ? `het land ${country}` : `the country of ${country}`;
}

export function capitalQuestion(kind: QuizKind, name: string, locale: LocaleId = "en"): string {
  const text = messages(locale);
  if (kind === "province") return fill(text.provinceCapital, { name });
  if (kind === "state") return fill(text.stateCapital, { name });
  return fill(text.countryCapital, { name: cityPlaceLabel("country", name, locale) });
}

function otherNames(pool: PlayPlace[], place: PlayPlace, take: number, rnd: () => number): string[] {
  const capital = place.capitalName ?? place.name;
  const names = pool
    .filter((item) => item.id !== place.id)
    .map((item) => item.capitalName ?? item.name)
    .filter((name) => !isCapitalName(name, capital));
  const unique = [...new Set(names)];
  return shuffle(unique, rnd).slice(0, take);
}

function bareName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^new /, "")
    .replace(/ city$/, "");
}

/** "Delhi" is the same answer as "New Delhi" for this quiz. */
function isCapitalName(city: string, capital: string): boolean {
  return bareName(city) === bareName(capital);
}

function capitalChoices(seed: number, roundIndex: number, place: PlayPlace, pool: PlayPlace[]): string[] {
  const rnd = mulberry32((seed + roundIndex * 17) >>> 0);
  const capital = place.capitalName ?? place.name;
  return shuffle([capital, ...otherNames(pool, place, 2, rnd)], rnd);
}

/** City lists for this place only. A shared name must not cross from a state into a country. */
function listedCities(place: PlayPlace): string[] {
  if (quizKind(place) === "country") {
    return [...(COUNTRY_CITIES[place.name] ?? []), ...(OTHER_CITIES[place.name] ?? [])];
  }
  return DIVISION_CITIES[place.name] ?? [];
}

/** Cities in this province, state, or country, leaving the capital out. */
function citiesInPlace(place: PlayPlace): string[] {
  const capital = place.capitalName ?? place.name;
  const kind = quizKind(place);
  const names = new Set<string>();
  for (const name of listedCities(place)) {
    if (!isCapitalName(name, capital)) names.add(name);
  }
  if (kind === "country") {
    for (const city of CITIES) {
      if (city.country === place.name && !isCapitalName(city.name, capital)) names.add(city.name);
    }
  }
  return [...names];
}

function everyCityName(): string[] {
  const names = new Set<string>();
  for (const city of CITIES) names.add(city.name);
  for (const list of [...Object.values(DIVISION_CITIES), ...Object.values(COUNTRY_CITIES)]) {
    for (const name of list) names.add(name);
  }
  for (const list of Object.values(OTHER_CITIES)) {
    for (const name of list) names.add(name);
  }
  return [...names];
}

type LandmarkTarget = "country" | "city" | "division";

function bareCountry(name: string): string {
  return name.replace(/^The /, "");
}

function landmarkTarget(place: PlayPlace, ask: QuizAsk, step: 0 | 1): LandmarkTarget {
  if (step === 1) return "city";
  if (ask.category === "provinces" || ask.category === "states") return "division";
  const kind = quizKind(place);
  if (kind === "province" || kind === "state") {
    return ask.placeMode === "division-capitals" || ask.placeMode === "capitals" ? "city" : "division";
  }
  return ask.placeMode === "capitals" || ask.placeMode === "top-cities" ? "city" : "country";
}

function landmarkMatches(item: Landmark, place: PlayPlace, target: LandmarkTarget, region: string): boolean {
  if (!item.maps.includes(region)) return false;
  if (target === "division") return item.division === place.name;
  const country = bareCountry(place.country);
  const aboutThisCountry = item.country === place.name || item.country === country;
  if (!aboutThisCountry) return false;
  if (target === "city") {
    if (!item.city) return false;
    if (quizKind(place) !== "country" && item.division && item.division !== place.name) return false;
  }
  return true;
}

function landmarkAnswer(item: Landmark, target: LandmarkTarget, locale: LocaleId): string {
  if (target === "country") return localPlaceName(locale, item.country);
  if (target === "city") return locale === "nl" && item.cityNl ? item.cityNl : (item.city ?? "");
  return item.division ?? "";
}

function fittingLandmarks(place: PlayPlace, ask: QuizAsk, target: LandmarkTarget): Landmark[] {
  const region = ask.region ?? "world";
  const difficulty = ask.difficulty ?? "normal";
  return LANDMARKS.filter(
    (item) => landmarkAllowed(item.level, difficulty) && landmarkMatches(item, place, target, region),
  );
}

function landmarkCard(
  seed: number,
  roundIndex: number,
  step: 0 | 1,
  place: PlayPlace,
  pool: PlayPlace[],
  locale: LocaleId,
  ask: QuizAsk,
): QuizCard | null {
  const target = landmarkTarget(place, ask, step);
  const placeAnswer = quizKind(place) === "country" ? bareCountry(place.name) : place.name;
  const fits = fittingLandmarks(place, ask, target).filter((item) => {
    if (step !== 1) return true;
    const city = landmarkAnswer(item, "city", locale);
    return city !== "" && city !== placeAnswer && city !== place.name;
  });
  if (fits.length === 0) return null;
  if (step === 1 && target !== "city" && fits.length === 1) return null;
  const rnd = mulberry32((seed + roundIndex * 29 + step * 5) >>> 0);
  let index = Math.floor(rnd() * fits.length);
  if (step === 1 && fits.length > 1) {
    const first = Math.floor(mulberry32((seed + roundIndex * 29) >>> 0)() * fits.length);
    if (index === first) index = (index + 1) % fits.length;
  }
  const picked = fits[index];
  if (!picked) return null;
  const text = messages(locale);
  const name = locale === "nl" ? picked.nameNl : picked.nameEn;
  const prompt =
    target === "city"
      ? fill(text.landmarkCity, { name })
      : target === "division"
        ? fill(quizKind(place) === "state" ? text.landmarkState : text.landmarkProvince, { name })
        : fill(text.landmarkCountry, { name });
  const correct = landmarkAnswer(picked, target, locale);
  const others = new Set<string>();
  for (const item of LANDMARKS) {
    if (!landmarkAllowed(item.level, ask.difficulty ?? "normal")) continue;
    if (!item.maps.includes(ask.region ?? "world")) continue;
    const answer = landmarkAnswer(item, target, locale);
    if (answer && answer !== correct) others.add(answer);
  }
  if (others.size < 2) {
    for (const item of pool) {
      if (item.id === place.id) continue;
      const answer =
        target === "city"
          ? (item.capitalName ?? item.name)
          : target === "division"
            ? item.name
            : localPlaceName(locale, item.name);
      if (answer && answer !== correct) others.add(answer);
    }
  }
  const distractors = shuffle([...others], rnd).slice(0, 2);
  if (distractors.length < 2 || !correct) return null;
  return { prompt, choices: shuffle([correct, ...distractors], rnd), correct };
}

/** Step 0 asks for the capital. Step 1 asks about a different city, never the capital again. */
function classicQuizCard(
  seed: number,
  roundIndex: number,
  step: 0 | 1,
  place: PlayPlace,
  pool: PlayPlace[],
  locale: LocaleId,
): QuizCard {
  const rnd = mulberry32((seed + roundIndex * 17 + step * 3) >>> 0);
  const kind = quizKind(place);
  const capital = place.capitalName ?? place.name;
  const text = messages(locale);
  const label = cityPlaceLabel(kind, place.name, locale);
  if (step === 0) {
    return {
      prompt: capitalQuestion(kind, place.name, locale),
      choices: capitalChoices(seed, roundIndex, place, pool),
      correct: capital,
    };
  }
  const local = quizKind(place) === "country" ? COUNTRY_CITIES[place.name] : DIVISION_CITIES[place.name];
  if (local && local.length >= 3 && !isCapitalName(local[0] ?? "", capital)) {
    const localChoices = local.filter((name) => !isCapitalName(name, capital)).slice(0, 3);
    if (localChoices.length >= 3) {
      return {
        prompt: fill(text.largestCity, { name: label }),
        choices: shuffle(localChoices, rnd),
        correct: local[0] ?? localChoices[0] ?? "",
      };
    }
  }
  const inside = citiesInPlace(place);
  const shown = new Set(capitalChoices(seed, roundIndex, place, pool));
  const correct = inside[Math.floor(rnd() * inside.length)] ?? inside[0] ?? "";
  const banned = new Set<string>([capital, correct, ...inside, ...shown]);
  const distractors = shuffle(
    everyCityName().filter((name) => !banned.has(name) && !isCapitalName(name, capital)),
    rnd,
  ).slice(0, 2);
  return {
    prompt: fill(text.cityIn, { name: label }),
    choices: shuffle([correct, ...distractors], rnd),
    correct,
  };
}

/** Without a category, the two classic questions stay as they are. All mixes those with landmarks. */
export function quizCard(
  seed: number,
  roundIndex: number,
  step: 0 | 1,
  place: PlayPlace,
  pool: PlayPlace[],
  locale: LocaleId = "en",
  ask?: QuizAsk,
): QuizCard {
  const classic = () => classicQuizCard(seed, roundIndex, step, place, pool, locale);
  const category = ask?.category;
  if (category === "football") {
    return footballQuizCard(place.id, locale, seed, roundIndex) ?? classic();
  }
  if (!category || category === "capitals" || category === "province-capitals" || category === "state-capitals") return classic();
  if (category === "landmarks" || category === "provinces" || category === "states") {
    const card = landmarkCard(seed, roundIndex, step, place, pool, locale, ask ?? {}) ?? classic();
    if (step === 0) return card;
    const first = landmarkCard(seed, roundIndex, 0, place, pool, locale, ask ?? {}) ?? classicQuizCard(seed, roundIndex, 0, place, pool, locale);
    if (card.correct === first.correct) return classic();
    return card;
  }
  const choices = [classic()];
  const landmark = landmarkCard(seed, roundIndex, step, place, pool, locale, ask ?? {});
  if (landmark) choices.push(landmark);
  let open = choices;
  if (step === 1) {
    const previous = quizCard(seed, roundIndex, 0, place, pool, locale, ask);
    const rest = choices.filter((card) => card.prompt !== previous.prompt && card.correct !== previous.correct);
    if (rest.length > 0) open = rest;
  }
  const rnd = mulberry32((seed + roundIndex * 41 + step * 7) >>> 0);
  return open[Math.floor(rnd() * open.length)] ?? classic();
}

export function quizPool(region: string): PlayPlace[] {
  return placesFor(region, quizPlaceMode(region));
}

export function currentQuizPlace(regionIds: string[], roundIndex: number): PlayPlace | null {
  const id = regionIds[roundIndex];
  return id ? getPlace(id) : null;
}
