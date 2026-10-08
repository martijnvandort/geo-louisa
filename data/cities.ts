import type { PlayRegion } from "@/data/regions";
import {
  AFRICA_COUNTRIES,
  ASIA_COUNTRIES,
  CENTRAL_AMERICA_COUNTRIES,
  CONTINENT_COUNTRIES,
  EU_COUNTRIES,
  MIDDLE_EAST_COUNTRIES,
  NORTH_AMERICA_COUNTRIES,
  OCEANIA_COUNTRIES,
  SOUTH_AMERICA_COUNTRIES,
} from "@/data/regions";

export type { PlayRegion };
export type CityPool = Exclude<PlayRegion, "world">;

export interface TargetCity {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [lng, lat]
  difficulty: "easy" | "medium" | "hard";
  /** First city listed for a country. Regional matches use these only. */
  capital: boolean;
  pools: CityPool[];
}

export {
  AFRICA_COUNTRIES,
  ASIA_COUNTRIES,
  CENTRAL_AMERICA_COUNTRIES,
  EU_COUNTRIES,
  MIDDLE_EAST_COUNTRIES,
  NORTH_AMERICA_COUNTRIES,
  OCEANIA_COUNTRIES,
  SOUTH_AMERICA_COUNTRIES,
};

function poolsFor(country: string, capital: boolean): CityPool[] {
  if (!capital) return [];
  const pools: CityPool[] = [];
  for (const [id, names] of Object.entries(CONTINENT_COUNTRIES) as [CityPool, Set<string>][]) {
    if (names.has(country)) pools.push(id);
  }
  return pools;
}

type CityRow = [
  id: string,
  name: string,
  country: string,
  lng: number,
  lat: number,
  difficulty: TargetCity["difficulty"],
];

const ROWS: CityRow[] = [
  ["kabul", "Kabul", "Afghanistan", 69.1723, 34.5281, "medium"],
  ["tirana", "Tirana", "Albania", 19.8187, 41.3275, "medium"],
  ["algiers", "Algiers", "Algeria", 3.0588, 36.7538, "medium"],
  ["andorra-la-vella", "Andorra la Vella", "Andorra", 1.5218, 42.5063, "hard"],
  ["luanda", "Luanda", "Angola", 13.2343, -8.8368, "medium"],
  ["buenos-aires", "Buenos Aires", "Argentina", -58.3816, -34.6037, "easy"],
  ["yerevan", "Yerevan", "Armenia", 44.5152, 40.1872, "medium"],
  ["canberra", "Canberra", "Australia", 149.13, -35.2809, "medium"],
  ["vienna", "Vienna", "Austria", 16.3738, 48.2082, "easy"],
  ["baku", "Baku", "Azerbaijan", 49.8671, 40.4093, "medium"],
  ["nassau", "Nassau", "Bahamas", -77.3554, 25.0443, "hard"],
  ["manama", "Manama", "Bahrain", 50.586, 26.2285, "hard"],
  ["dhaka", "Dhaka", "Bangladesh", 90.4125, 23.8103, "medium"],
  ["bridgetown", "Bridgetown", "Barbados", -59.6132, 13.0975, "hard"],
  ["minsk", "Minsk", "Belarus", 27.5615, 53.9045, "medium"],
  ["brussels", "Brussels", "Belgium", 4.3517, 50.8503, "easy"],
  ["belmopan", "Belmopan", "Belize", -88.7708, 17.251, "hard"],
  ["porto-novo", "Porto-Novo", "Benin", 2.6289, 6.4969, "hard"],
  ["thimphu", "Thimphu", "Bhutan", 89.639, 27.4728, "hard"],
  ["la-paz", "La Paz", "Bolivia", -68.1193, -16.4897, "medium"],
  ["sarajevo", "Sarajevo", "Bosnia and Herzegovina", 18.4131, 43.8563, "medium"],
  ["gaborone", "Gaborone", "Botswana", 25.9231, -24.6282, "hard"],
  ["brasilia", "Brasília", "Brazil", -47.8825, -15.7942, "medium"],
  ["bandar-seri-begawan", "Bandar Seri Begawan", "Brunei", 114.9398, 4.9031, "hard"],
  ["sofia", "Sofia", "Bulgaria", 23.3219, 42.6977, "medium"],
  ["ouagadougou", "Ouagadougou", "Burkina Faso", -1.5197, 12.3714, "hard"],
  ["gitega", "Gitega", "Burundi", 29.9246, -3.4264, "hard"],
  ["praia", "Praia", "Cabo Verde", -23.5133, 14.933, "hard"],
  ["phnom-penh", "Phnom Penh", "Cambodia", 104.9282, 11.5564, "medium"],
  ["yaounde", "Yaoundé", "Cameroon", 11.5021, 3.848, "medium"],
  ["ottawa", "Ottawa", "Canada", -75.6972, 45.4215, "easy"],
  ["bangui", "Bangui", "Central African Republic", 18.5582, 4.3947, "hard"],
  ["ndjamena", "N'Djamena", "Chad", 15.0444, 12.1348, "hard"],
  ["santiago", "Santiago", "Chile", -70.6693, -33.4489, "medium"],
  ["beijing", "Beijing", "China", 116.4074, 39.9042, "easy"],
  ["bogota", "Bogotá", "Colombia", -74.0721, 4.711, "medium"],
  ["moroni", "Moroni", "Comoros", 43.2551, -11.7172, "hard"],
  ["brazzaville", "Brazzaville", "Congo", 15.2429, -4.2634, "hard"],
  ["kinshasa", "Kinshasa", "DR Congo", 15.2663, -4.4419, "medium"],
  ["san-jose-cr", "San José", "Costa Rica", -84.0907, 9.9281, "medium"],
  ["yamoussoukro", "Yamoussoukro", "Côte d'Ivoire", -5.2893, 6.8276, "hard"],
  ["zagreb", "Zagreb", "Croatia", 15.9819, 45.815, "medium"],
  ["havana", "Havana", "Cuba", -82.3666, 23.1136, "medium"],
  ["nicosia", "Nicosia", "Cyprus", 33.3823, 35.1856, "medium"],
  ["prague", "Prague", "Czechia", 14.4378, 50.0755, "easy"],
  ["copenhagen", "Copenhagen", "Denmark", 12.5683, 55.6761, "easy"],
  ["djibouti", "Djibouti", "Djibouti", 43.1456, 11.5721, "hard"],
  ["roseau", "Roseau", "Dominica", -61.3794, 15.301, "hard"],
  ["santo-domingo", "Santo Domingo", "Dominican Republic", -69.9312, 18.4861, "medium"],
  ["quito", "Quito", "Ecuador", -78.4678, -0.1807, "medium"],
  ["cairo", "Cairo", "Egypt", 31.2357, 30.0444, "easy"],
  ["san-salvador", "San Salvador", "El Salvador", -89.2182, 13.6929, "medium"],
  ["malabo", "Malabo", "Equatorial Guinea", 8.7817, 3.7504, "hard"],
  ["asmara", "Asmara", "Eritrea", 38.9251, 15.3229, "hard"],
  ["tallinn", "Tallinn", "Estonia", 24.7536, 59.437, "medium"],
  ["mbabane", "Mbabane", "Eswatini", 31.1367, -26.3054, "hard"],
  ["addis-ababa", "Addis Ababa", "Ethiopia", 38.7578, 9.032, "medium"],
  ["suva", "Suva", "Fiji", 178.4419, -18.1416, "hard"],
  ["helsinki", "Helsinki", "Finland", 24.9384, 60.1699, "easy"],
  ["paris", "Paris", "France", 2.3522, 48.8566, "easy"],
  ["libreville", "Libreville", "Gabon", 9.4544, 0.4162, "hard"],
  ["banjul", "Banjul", "Gambia", -16.579, 13.4549, "hard"],
  ["tbilisi", "Tbilisi", "Georgia", 44.8271, 41.7151, "medium"],
  ["berlin", "Berlin", "Germany", 13.405, 52.52, "easy"],
  ["accra", "Accra", "Ghana", -0.187, 5.6037, "medium"],
  ["athens", "Athens", "Greece", 23.7275, 37.9838, "easy"],
  ["st-georges", "St. George's", "Grenada", -61.7485, 12.0561, "hard"],
  ["guatemala-city", "Guatemala City", "Guatemala", -90.5069, 14.6349, "medium"],
  ["conakry", "Conakry", "Guinea", -13.5784, 9.6412, "hard"],
  ["bissau", "Bissau", "Guinea-Bissau", -15.5984, 11.8636, "hard"],
  ["georgetown", "Georgetown", "Guyana", -58.1551, 6.8013, "hard"],
  ["port-au-prince", "Port-au-Prince", "Haiti", -72.3074, 18.5944, "medium"],
  ["tegucigalpa", "Tegucigalpa", "Honduras", -87.2068, 14.0723, "medium"],
  ["budapest", "Budapest", "Hungary", 19.0402, 47.4979, "easy"],
  ["reykjavik", "Reykjavik", "Iceland", -21.9426, 64.1466, "medium"],
  ["new-delhi", "New Delhi", "India", 77.209, 28.6139, "easy"],
  ["jakarta", "Jakarta", "Indonesia", 106.8456, -6.2088, "medium"],
  ["tehran", "Tehran", "Iran", 51.389, 35.6892, "medium"],
  ["baghdad", "Baghdad", "Iraq", 44.3661, 33.3152, "medium"],
  ["dublin", "Dublin", "Ireland", -6.2603, 53.3498, "easy"],
  ["jerusalem", "Jerusalem", "Israel", 35.2137, 31.7683, "medium"],
  ["rome", "Rome", "Italy", 12.4964, 41.9028, "easy"],
  ["kingston", "Kingston", "Jamaica", -76.7936, 18.0179, "medium"],
  ["tokyo", "Tokyo", "Japan", 139.6917, 35.6895, "easy"],
  ["amman", "Amman", "Jordan", 35.9106, 31.9539, "medium"],
  ["astana", "Astana", "Kazakhstan", 71.4491, 51.1694, "medium"],
  ["nairobi", "Nairobi", "Kenya", 36.8219, -1.2921, "medium"],
  ["tarawa", "Tarawa", "Kiribati", 172.979, 1.3291, "hard"],
  ["pyongyang", "Pyongyang", "North Korea", 125.7625, 39.0392, "medium"],
  ["seoul", "Seoul", "South Korea", 126.978, 37.5665, "easy"],
  ["kuwait-city", "Kuwait City", "Kuwait", 47.9774, 29.3759, "medium"],
  ["bishkek", "Bishkek", "Kyrgyzstan", 74.5698, 42.8746, "hard"],
  ["vientiane", "Vientiane", "Laos", 102.6331, 17.9757, "medium"],
  ["riga", "Riga", "Latvia", 24.1052, 56.9496, "medium"],
  ["beirut", "Beirut", "Lebanon", 35.5018, 33.8938, "medium"],
  ["maseru", "Maseru", "Lesotho", 27.4833, -29.3167, "hard"],
  ["monrovia", "Monrovia", "Liberia", -10.7969, 6.3156, "hard"],
  ["tripoli", "Tripoli", "Libya", 13.1913, 32.8872, "medium"],
  ["vaduz", "Vaduz", "Liechtenstein", 9.5215, 47.141, "hard"],
  ["vilnius", "Vilnius", "Lithuania", 25.2797, 54.6872, "medium"],
  ["luxembourg", "Luxembourg", "Luxembourg", 6.1296, 49.6116, "medium"],
  ["antananarivo", "Antananarivo", "Madagascar", 47.5079, -18.8792, "hard"],
  ["lilongwe", "Lilongwe", "Malawi", 33.7741, -13.9626, "hard"],
  ["kuala-lumpur", "Kuala Lumpur", "Malaysia", 101.6869, 3.139, "medium"],
  ["male", "Malé", "Maldives", 73.5093, 4.1755, "hard"],
  ["bamako", "Bamako", "Mali", -8.0029, 12.6392, "hard"],
  ["valletta", "Valletta", "Malta", 14.5146, 35.8989, "medium"],
  ["majuro", "Majuro", "Marshall Islands", 171.3803, 7.1164, "hard"],
  ["nouakchott", "Nouakchott", "Mauritania", -15.9785, 18.0735, "hard"],
  ["port-louis", "Port Louis", "Mauritius", 57.5012, -20.1609, "hard"],
  ["mexico-city", "Mexico City", "Mexico", -99.1332, 19.4326, "easy"],
  ["palikir", "Palikir", "Micronesia", 158.161, 6.9147, "hard"],
  ["chisinau", "Chișinău", "Moldova", 28.8575, 47.0105, "medium"],
  ["monaco", "Monaco", "Monaco", 7.4246, 43.7384, "hard"],
  ["ulaanbaatar", "Ulaanbaatar", "Mongolia", 106.9057, 47.8864, "hard"],
  ["podgorica", "Podgorica", "Montenegro", 19.2636, 42.4304, "medium"],
  ["rabat", "Rabat", "Morocco", -6.8498, 34.0209, "medium"],
  ["maputo", "Maputo", "Mozambique", 32.5732, -25.9692, "medium"],
  ["naypyidaw", "Naypyidaw", "Myanmar", 96.1297, 19.7633, "hard"],
  ["windhoek", "Windhoek", "Namibia", 17.0658, -22.5609, "hard"],
  ["yaren", "Yaren", "Nauru", 166.9252, -0.5477, "hard"],
  ["kathmandu", "Kathmandu", "Nepal", 85.324, 27.7172, "medium"],
  ["amsterdam", "Amsterdam", "Netherlands", 4.9041, 52.3676, "easy"],
  ["wellington", "Wellington", "New Zealand", 174.7762, -41.2866, "medium"],
  ["managua", "Managua", "Nicaragua", -86.2362, 12.115, "medium"],
  ["niamey", "Niamey", "Niger", 2.1254, 13.5116, "hard"],
  ["abuja", "Abuja", "Nigeria", 7.4898, 9.0579, "medium"],
  ["skopje", "Skopje", "North Macedonia", 21.4254, 41.9981, "medium"],
  ["oslo", "Oslo", "Norway", 10.7522, 59.9139, "easy"],
  ["muscat", "Muscat", "Oman", 58.4059, 23.588, "medium"],
  ["islamabad", "Islamabad", "Pakistan", 73.0479, 33.6844, "medium"],
  ["ngerulmud", "Ngerulmud", "Palau", 134.6243, 7.5004, "hard"],
  ["panama-city", "Panama City", "Panama", -79.5199, 8.9824, "medium"],
  ["port-moresby", "Port Moresby", "Papua New Guinea", 147.1803, -9.4438, "hard"],
  ["asuncion", "Asunción", "Paraguay", -57.5759, -25.2637, "medium"],
  ["lima", "Lima", "Peru", -77.0428, -12.0464, "medium"],
  ["manila", "Manila", "Philippines", 120.9842, 14.5995, "medium"],
  ["warsaw", "Warsaw", "Poland", 21.0122, 52.2297, "medium"],
  ["lisbon", "Lisbon", "Portugal", -9.1393, 38.7223, "easy"],
  ["doha", "Doha", "Qatar", 51.531, 25.2854, "medium"],
  ["bucharest", "Bucharest", "Romania", 26.1025, 44.4268, "medium"],
  ["moscow", "Moscow", "Russia", 37.6173, 55.7558, "easy"],
  ["kigali", "Kigali", "Rwanda", 30.0619, -1.9441, "medium"],
  ["basseterre", "Basseterre", "Saint Kitts and Nevis", -62.7177, 17.3026, "hard"],
  ["castries", "Castries", "Saint Lucia", -60.9875, 14.0101, "hard"],
  ["kingstown", "Kingstown", "Saint Vincent and the Grenadines", -61.2248, 13.16, "hard"],
  ["apia", "Apia", "Samoa", -171.7513, -13.8506, "hard"],
  ["san-marino", "San Marino", "San Marino", 12.4578, 43.9424, "hard"],
  ["sao-tome", "São Tomé", "São Tomé and Príncipe", 6.7273, 0.3302, "hard"],
  ["riyadh", "Riyadh", "Saudi Arabia", 46.6753, 24.7136, "medium"],
  ["dakar", "Dakar", "Senegal", -17.4677, 14.7167, "medium"],
  ["belgrade", "Belgrade", "Serbia", 20.4489, 44.7866, "medium"],
  ["victoria", "Victoria", "Seychelles", 55.4513, -4.6191, "hard"],
  ["freetown", "Freetown", "Sierra Leone", -13.2317, 8.4657, "hard"],
  ["singapore", "Singapore", "Singapore", 103.8198, 1.3521, "easy"],
  ["bratislava", "Bratislava", "Slovakia", 17.1077, 48.1486, "medium"],
  ["ljubljana", "Ljubljana", "Slovenia", 14.5058, 46.0569, "medium"],
  ["honiara", "Honiara", "Solomon Islands", 159.9729, -9.4456, "hard"],
  ["mogadishu", "Mogadishu", "Somalia", 45.3182, 2.0469, "hard"],
  ["pretoria", "Pretoria", "South Africa", 28.1881, -25.7461, "medium"],
  ["juba", "Juba", "South Sudan", 31.5825, 4.8594, "hard"],
  ["madrid", "Madrid", "Spain", -3.7038, 40.4168, "easy"],
  ["colombo", "Colombo", "Sri Lanka", 79.8612, 6.9271, "medium"],
  ["khartoum", "Khartoum", "Sudan", 32.5599, 15.5007, "medium"],
  ["paramaribo", "Paramaribo", "Suriname", -55.2038, 5.852, "hard"],
  ["stockholm", "Stockholm", "Sweden", 18.0686, 59.3293, "easy"],
  ["bern", "Bern", "Switzerland", 7.4474, 46.948, "medium"],
  ["damascus", "Damascus", "Syria", 36.2765, 33.5138, "medium"],
  ["taipei", "Taipei", "Taiwan", 121.5654, 25.033, "medium"],
  ["dushanbe", "Dushanbe", "Tajikistan", 68.787, 38.5598, "hard"],
  ["dodoma", "Dodoma", "Tanzania", 35.7516, -6.163, "hard"],
  ["bangkok", "Bangkok", "Thailand", 100.5018, 13.7563, "easy"],
  ["dili", "Dili", "Timor-Leste", 125.578, -8.5569, "hard"],
  ["lome", "Lomé", "Togo", 1.2228, 6.1725, "hard"],
  ["nukualofa", "Nukuʻalofa", "Tonga", -175.2049, -21.1394, "hard"],
  ["port-of-spain", "Port of Spain", "Trinidad and Tobago", -61.5086, 10.6549, "hard"],
  ["tunis", "Tunis", "Tunisia", 10.1815, 36.8065, "medium"],
  ["ankara", "Ankara", "Turkey", 32.8597, 39.9334, "medium"],
  ["ashgabat", "Ashgabat", "Turkmenistan", 58.3833, 37.9601, "hard"],
  ["funafuti", "Funafuti", "Tuvalu", 179.1942, -8.5243, "hard"],
  ["kampala", "Kampala", "Uganda", 32.5825, 0.3476, "medium"],
  ["kyiv", "Kyiv", "Ukraine", 30.5234, 50.4501, "medium"],
  ["abu-dhabi", "Abu Dhabi", "United Arab Emirates", 54.3773, 24.4539, "medium"],
  ["london", "London", "United Kingdom", -0.1276, 51.5074, "easy"],
  ["washington", "Washington", "United States", -77.0369, 38.9072, "easy"],
  ["montevideo", "Montevideo", "Uruguay", -56.1645, -34.9011, "medium"],
  ["tashkent", "Tashkent", "Uzbekistan", 69.2401, 41.2995, "medium"],
  ["port-vila", "Port Vila", "Vanuatu", 168.3273, -17.7334, "hard"],
  ["vatican-city", "Vatican City", "Vatican City", 12.4534, 41.9029, "medium"],
  ["caracas", "Caracas", "Venezuela", -66.9036, 10.4806, "medium"],
  ["hanoi", "Hanoi", "Vietnam", 105.8342, 21.0278, "medium"],
  ["sanaa", "Sana'a", "Yemen", 44.2075, 15.3694, "hard"],
  ["lusaka", "Lusaka", "Zambia", 28.3228, -15.3875, "medium"],
  ["harare", "Harare", "Zimbabwe", 31.053, -17.8252, "medium"],
  ["kyoto", "Kyoto", "Japan", 135.7681, 35.0116, "medium"],
  ["honolulu", "Honolulu", "United States", -157.8583, 21.3069, "medium"],
  ["alice-springs", "Alice Springs", "Australia", 133.8807, -23.698, "hard"],
  ["nuuk", "Nuuk", "Greenland", -51.7214, 64.1836, "hard"],
  ["longyearbyen", "Longyearbyen", "Norway", 15.6469, 78.2232, "hard"],
  ["ushuaia", "Ushuaia", "Argentina", -68.303, -54.8019, "hard"],
  ["timbuktu", "Timbuktu", "Mali", -3.0026, 16.7666, "hard"],
  ["lhasa", "Lhasa", "China", 91.1409, 29.6525, "hard"],
  ["hanga-roa", "Hanga Roa", "Chile", -109.3497, -27.1486, "hard"],
  ["papeete", "Papeete", "French Polynesia", -149.569, -17.5516, "hard"],
  ["anchorage", "Anchorage", "United States", -149.9003, 61.2181, "medium"],
  ["queenstown", "Queenstown", "New Zealand", 168.6626, -45.0312, "hard"],
  ["cusco", "Cusco", "Peru", -71.9675, -13.5319, "medium"],
  ["marrakesh", "Marrakesh", "Morocco", -7.9811, 31.6295, "medium"],
  ["cape-town", "Cape Town", "South Africa", 18.4241, -33.9249, "easy"],
  ["istanbul", "Istanbul", "Turkey", 28.9784, 41.0082, "easy"],
  ["vancouver", "Vancouver", "Canada", -123.1207, 49.2827, "easy"],
  ["rio-de-janeiro", "Rio de Janeiro", "Brazil", -43.1729, -22.9068, "easy"],
  ["new-york", "New York", "United States", -74.006, 40.7128, "easy"],
  ["zanzibar", "Zanzibar City", "Tanzania", 39.2083, -6.1659, "hard"],
  ["samarkand", "Samarkand", "Uzbekistan", 66.9597, 39.627, "hard"],
  ["dubrovnik", "Dubrovnik", "Croatia", 18.0944, 42.6507, "medium"],
  ["fez", "Fez", "Morocco", -5.0078, 34.0331, "medium"],
];

const seenCountries = new Set<string>();
export const CITIES: TargetCity[] = ROWS.map(([id, name, country, lng, lat, difficulty]) => {
  const capital = !seenCountries.has(country);
  seenCountries.add(country);
  return {
    id,
    name,
    country,
    coordinates: [lng, lat],
    difficulty,
    capital,
    pools: poolsFor(country, capital),
  };
});

const BY_ID = new Map(CITIES.map((city) => [city.id, city]));

export function getCity(id: string): TargetCity {
  const city = BY_ID.get(id);
  if (!city) throw new Error(`Unknown city: ${id}`);
  return city;
}

export function regionCapitals(region: PlayRegion): TargetCity[] {
  return CITIES.filter((city) => city.capital && (region === "world" || city.pools.includes(region)));
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

export function pickCityIds(seed: number, count = 10, region: PlayRegion = "world"): string[] {
  const rng = mulberry32(seed);
  const pool = CITIES.filter((city) => region === "world" || city.pools.includes(region)).map((city) => city.id);
  const picked: string[] = [];
  const take = Math.min(count, pool.length);
  for (let i = 0; i < take; i += 1) {
    const index = Math.floor(rng() * pool.length);
    const [id] = pool.splice(index, 1);
    if (id) picked.push(id);
  }
  return picked;
}
