/**
 * A landmark can be asked as a country, a city, and sometimes a province or state.
 * The same record feeds both questions. City is empty when no single city is a fair answer.
 */
export type LandmarkLevel = "Kids" | "Adults" | "Smart Adults";

export type Landmark = {
  id: string;
  nameEn: string;
  nameNl: string;
  country: string;
  city: string | null;
  cityNl: string | null;
  division: string | null;
  divisionKind: "province" | "state" | null;
  level: LandmarkLevel;
  /** World, a continent id, netherlands, or united-states. */
  maps: string[];
  detailEn: string;
  detailNl: string;
};

const LEVEL_RANK: Record<LandmarkLevel, number> = { Kids: 0, Adults: 1, "Smart Adults": 2 };

export function landmarkAllowed(level: LandmarkLevel, difficulty: "kids" | "normal" | "hard"): boolean {
  if (difficulty === "kids") return level === "Kids";
  if (difficulty === "normal") return LEVEL_RANK[level] <= 1;
  return true;
}

export const LANDMARKS: Landmark[] = [
  landmark("pyramids-of-giza", "the Pyramids of Giza", "de piramiden van Gizeh", "Egypt", "Giza", "Gizeh", null, null, "Kids", ["world", "africa"], "The pyramids stand in Giza, on the edge of Cairo.", "De piramiden staan in Gizeh, aan de rand van Caïro."),
  landmark("great-wall", "the Great Wall", "de Chinese Muur", "China", null, null, null, null, "Kids", ["world", "asia"], "The wall runs for thousands of kilometres, so it does not belong to one city.", "De muur loopt duizenden kilometers, dus hij hoort niet bij één stad."),
  landmark("taj-mahal", "the Taj Mahal", "de Taj Mahal", "India", "Agra", null, null, null, "Kids", ["world", "asia"], "Shah Jahan built the Taj Mahal in Agra.", "Shah Jahan liet de Taj Mahal bouwen in Agra."),
  landmark("eiffel-tower", "the Eiffel Tower", "de Eiffeltoren", "France", "Paris", "Parijs", null, null, "Kids", ["world", "eu"], "The Eiffel Tower has stood in Paris since the 1889 World's Fair.", "De Eiffeltoren staat sinds de wereldtentoonstelling van 1889 in Parijs."),
  landmark("colosseum", "the Colosseum", "het Colosseum", "Italy", "Rome", "Rome", null, null, "Kids", ["world", "eu"], "The Colosseum is the ancient amphitheatre in Rome.", "Het Colosseum is het antieke amfitheater in Rome."),
  landmark("machu-picchu", "Machu Picchu", "Machu Picchu", "Peru", null, null, null, null, "Kids", ["world", "south-america"], "The Inca site sits in the mountains. Travellers usually come through Cusco.", "De Incasite ligt in de bergen. Reizigers komen meestal via Cusco."),
  landmark("christ-the-redeemer", "Christ the Redeemer", "Christus de Verlosser", "Brazil", "Rio de Janeiro", null, null, null, "Kids", ["world", "south-america"], "The statue looks over Rio de Janeiro from Corcovado.", "Het beeld kijkt uit over Rio de Janeiro vanaf de Corcovado."),
  landmark("statue-of-liberty", "the Statue of Liberty", "het Vrijheidsbeeld", "United States", "New York", null, "New York", "state", "Kids", ["world", "north-america", "united-states"], "The statue stands on Liberty Island in New York Harbor.", "Het beeld staat op Liberty Island in de haven van New York."),
  landmark("big-ben", "Big Ben", "Big Ben", "United Kingdom", "London", "Londen", null, null, "Kids", ["world"], "Big Ben is the great bell in the Elizabeth Tower at the Palace of Westminster in London.", "Big Ben is de grote klok in de Elizabeth Tower bij het Palace of Westminster in Londen."),
  landmark("acropolis", "the Acropolis", "de Akropolis", "Greece", "Athens", "Athene", null, null, "Kids", ["world", "eu"], "The Acropolis is the ancient citadel above Athens.", "De Akropolis is de antieke burcht boven Athene."),
  landmark("leaning-tower", "the Leaning Tower of Pisa", "de Scheve Toren van Pisa", "Italy", "Pisa", null, null, null, "Kids", ["world", "eu"], "The bell tower leans in Pisa.", "De klokkentoren helt over in Pisa."),
  landmark("sydney-opera-house", "the Sydney Opera House", "het Sydney Opera House", "Australia", "Sydney", null, null, null, "Kids", ["world", "oceania"], "The Opera House stands on Sydney Harbour.", "Het Opera House staat aan de haven van Sydney."),
  landmark("burj-khalifa", "the Burj Khalifa", "de Burj Khalifa", "United Arab Emirates", "Dubai", null, null, null, "Kids", ["world", "middle-east"], "The Burj Khalifa is the tall tower in Dubai.", "De Burj Khalifa is de hoge toren in Dubai."),
  landmark("petra", "Petra", "Petra", "Jordan", null, null, null, null, "Kids", ["world", "middle-east"], "Petra is the rock-cut city in Jordan. The town beside it is Wadi Musa.", "Petra is de rotstad in Jordanië. De plaats ernaast is Wadi Musa."),
  landmark("stonehenge", "Stonehenge", "Stonehenge", "United Kingdom", "Salisbury", null, null, null, "Adults", ["world"], "Stonehenge stands on Salisbury Plain. The nearest town is Amesbury, and Salisbury is the city people name.", "Stonehenge staat op Salisbury Plain. De dichtstbijzijnde plaats is Amesbury, en Salisbury is de stad die mensen noemen."),
  landmark("angkor-wat", "Angkor Wat", "Angkor Wat", "Cambodia", "Siem Reap", null, null, null, "Adults", ["world", "asia"], "Angkor Wat stands just outside Siem Reap.", "Angkor Wat staat net buiten Siem Reap."),
  landmark("sagrada-familia", "the Sagrada Família", "de Sagrada Família", "Spain", "Barcelona", null, null, null, "Adults", ["world", "eu"], "Gaudí's basilica is in Barcelona.", "De basiliek van Gaudí staat in Barcelona."),
  landmark("brandenburg-gate", "the Brandenburg Gate", "de Brandenburger Tor", "Germany", "Berlin", "Berlijn", null, null, "Adults", ["world", "eu"], "The Brandenburg Gate stands in Berlin.", "De Brandenburger Tor staat in Berlijn."),
  landmark("kremlin", "the Kremlin", "het Kremlin", "Russia", "Moscow", "Moskou", null, null, "Adults", ["world", "asia"], "The Kremlin is the fortified centre of Moscow.", "Het Kremlin is het versterkte centrum van Moskou."),
  landmark("table-mountain", "Table Mountain", "de Tafelberg", "South Africa", "Cape Town", "Kaapstad", null, null, "Adults", ["world", "africa"], "Table Mountain rises above Cape Town.", "De Tafelberg rijst op boven Kaapstad."),
  landmark("cn-tower", "the CN Tower", "de CN Tower", "Canada", "Toronto", null, null, null, "Adults", ["world", "north-america"], "The CN Tower stands in Toronto.", "De CN Tower staat in Toronto."),
  landmark("alhambra", "the Alhambra", "het Alhambra", "Spain", "Granada", null, null, null, "Adults", ["world", "eu"], "The Alhambra is the palace in Granada.", "Het Alhambra is het paleis in Granada."),
  landmark("forbidden-city", "the Forbidden City", "de Verboden Stad", "China", "Beijing", "Peking", null, null, "Adults", ["world", "asia"], "The Forbidden City is the imperial palace in Beijing.", "De Verboden Stad is het keizerlijk paleis in Peking."),
  landmark("hagia-sophia", "the Hagia Sophia", "de Hagia Sophia", "Turkey", "Istanbul", null, null, null, "Adults", ["world", "middle-east"], "The Hagia Sophia stands in Istanbul.", "De Hagia Sophia staat in Istanboel."),
  landmark("prague-castle", "Prague Castle", "de Praagse Burcht", "Czechia", "Prague", "Praag", null, null, "Adults", ["world", "eu"], "Prague Castle looks over Prague.", "De Praagse Burcht kijkt uit over Praag."),
  landmark("little-mermaid", "the Little Mermaid", "de Kleine Zeemeermin", "Denmark", "Copenhagen", "Kopenhagen", null, null, "Adults", ["world", "eu"], "The statue sits on a rock in Copenhagen harbour.", "Het beeld zit op een rots in de haven van Kopenhagen."),
  landmark("petronas-towers", "the Petronas Towers", "de Petronas Towers", "Malaysia", "Kuala Lumpur", null, null, null, "Adults", ["world", "asia"], "The twin towers stand in Kuala Lumpur.", "De twee torens staan in Kuala Lumpur."),
  landmark("atomium", "the Atomium", "het Atomium", "Belgium", "Brussels", "Brussel", null, null, "Adults", ["world", "eu"], "The Atomium stands in Brussels.", "Het Atomium staat in Brussel."),
  landmark("western-wall", "the Western Wall", "de Klaagmuur", "Israel", "Jerusalem", "Jeruzalem", null, null, "Adults", ["world", "middle-east"], "The Western Wall is in the Old City of Jerusalem.", "De Klaagmuur staat in de oude stad van Jeruzalem."),
  landmark("ha-long-bay", "Ha Long Bay", "de Ha Longbaai", "Vietnam", "Ha Long", null, null, null, "Adults", ["world", "asia"], "Ha Long Bay opens beside the city of Ha Long.", "De Ha Longbaai ligt bij de stad Ha Long."),
  landmark("chichen-itza", "Chichen Itza", "Chichen Itza", "Mexico", null, null, null, null, "Adults", ["world", "north-america"], "Chichen Itza is the Maya city in Yucatán. It does not sit inside Mérida or Valladolid.", "Chichen Itza is de Mayastad in Yucatán. De stad ligt niet in Mérida of Valladolid."),
  landmark("anne-frank-house", "the Anne Frank House", "het Anne Frank Huis", "Netherlands", "Amsterdam", null, "Noord-Holland", "province", "Kids", ["world", "eu", "netherlands"], "The Anne Frank House is on the Prinsengracht in Amsterdam, in Noord-Holland.", "Het Anne Frank Huis staat aan de Prinsengracht in Amsterdam, in Noord-Holland."),
  landmark("neuschwanstein", "Neuschwanstein Castle", "slot Neuschwanstein", "Germany", "Füssen", null, null, null, "Smart Adults", ["world", "eu"], "The castle stands above Hohenschwangau. Füssen is the nearby city.", "Het slot staat boven Hohenschwangau. Füssen is de stad in de buurt."),
  landmark("bagan", "the temples of Bagan", "de tempels van Bagan", "Myanmar", "Bagan", null, null, null, "Smart Adults", ["world", "asia"], "Thousands of temples stand on the plain of Bagan.", "Duizenden tempels staan op de vlakte van Bagan."),
  landmark("carthage", "Carthage", "Carthago", "Tunisia", "Tunis", null, null, null, "Smart Adults", ["world", "africa"], "The ruins of Carthage lie on the coast of Tunis.", "De ruïnes van Carthago liggen aan de kust van Tunis."),
  landmark("persepolis", "Persepolis", "Persepolis", "Iran", null, null, null, null, "Smart Adults", ["world", "middle-east"], "Persepolis is the ancient Persian capital. Shiraz is about 60 km away, so this question does not ask for a city.", "Persepolis is de oude Perzische hoofdstad. Shiraz ligt ongeveer 60 km verder, dus deze vraag vraagt niet naar een stad."),
  landmark("easter-island", "the moai of Easter Island", "de moai van Paaseiland", "Chile", "Hanga Roa", null, null, null, "Smart Adults", ["world", "south-america"], "Easter Island belongs to Chile. Hanga Roa is its town.", "Paaseiland hoort bij Chili. Hanga Roa is de plaats daar."),
  landmark("golden-gate", "the Golden Gate Bridge", "de Golden Gate Bridge", "United States", "San Francisco", null, "California", "state", "Adults", ["world", "north-america", "united-states"], "The bridge crosses the Golden Gate at San Francisco.", "De brug ligt over de Golden Gate bij San Francisco."),
  landmark("grand-canyon", "the Grand Canyon", "de Grand Canyon", "United States", null, null, "Arizona", "state", "Adults", ["world", "north-america", "united-states"], "The canyon is in Arizona. No single city owns it.", "De kloof ligt in Arizona. Geen enkele stad is de eigenaar."),
  landmark("mount-rushmore", "Mount Rushmore", "Mount Rushmore", "United States", "Keystone", null, "South Dakota", "state", "Adults", ["world", "north-america", "united-states"], "The carved mountain is beside Keystone in South Dakota.", "De berg met de gezichten ligt bij Keystone in South Dakota."),
  landmark("gateway-arch", "the Gateway Arch", "de Gateway Arch", "United States", "St. Louis", null, "Missouri", "state", "Adults", ["united-states"], "The arch stands on the Mississippi riverfront in St. Louis.", "De boog staat aan de Mississippi in St. Louis."),
  landmark("space-needle", "the Space Needle", "de Space Needle", "United States", "Seattle", null, "Washington", "state", "Adults", ["united-states"], "The tower stands in Seattle.", "De toren staat in Seattle."),
  landmark("french-quarter", "the French Quarter", "de French Quarter", "United States", "New Orleans", null, "Louisiana", "state", "Adults", ["united-states"], "The French Quarter is the old centre of New Orleans.", "De French Quarter is het oude centrum van New Orleans."),
  landmark("walt-disney-world", "Walt Disney World", "Walt Disney World", "United States", "Orlando", null, "Florida", "state", "Kids", ["united-states"], "The parks sit southwest of Orlando, in Bay Lake and Lake Buena Vista.", "De parken liggen ten zuidwesten van Orlando, in Bay Lake en Lake Buena Vista."),
  landmark("alamo", "the Alamo", "de Alamo", "United States", "San Antonio", null, "Texas", "state", "Adults", ["united-states"], "The Alamo is the old mission in San Antonio.", "De Alamo is de oude missie in San Antonio."),
  landmark("lincoln-memorial", "the Lincoln Memorial", "het Lincoln Memorial", "United States", "Washington", null, null, null, "Adults", ["world", "north-america"], "The memorial stands in Washington, D.C., which is not a state.", "Het monument staat in Washington D.C., en dat is geen staat."),
  landmark("hunebedden", "the hunebedden", "de hunebedden", "Netherlands", "Borger", null, "Drenthe", "province", "Kids", ["netherlands"], "The hunebedden are dolmens across Drenthe. The best-known centre is in Borger.", "De hunebedden liggen verspreid door Drenthe. Het bekendste centrum staat in Borger."),
  landmark("kolonien-van-weldadigheid", "the Colonies of Benevolence", "de Koloniën van Weldadigheid", "Netherlands", "Frederiksoord", null, "Drenthe", "province", "Smart Adults", ["netherlands"], "Frederiksoord and Veenhuizen are in Drenthe. A few of the colonies are in Overijssel.", "Frederiksoord en Veenhuizen liggen in Drenthe. Een paar kolonies liggen in Overijssel."),
  landmark("schokland", "Schokland", "Schokland", "Netherlands", "Schokland", null, "Flevoland", "province", "Adults", ["netherlands"], "Schokland was an island. It is now part of the Noordoostpolder in Flevoland.", "Schokland was een eiland. Het hoort nu bij de Noordoostpolder in Flevoland."),
  landmark("batavia", "the Batavia ship", "het schip de Batavia", "Netherlands", "Lelystad", null, "Flevoland", "province", "Adults", ["netherlands"], "The replica of the Batavia is at Batavialand in Lelystad.", "De replica van de Batavia staat in Batavialand in Lelystad."),
  landmark("elfstedentocht", "the Elfstedentocht", "de Elfstedentocht", "Netherlands", "Leeuwarden", null, "Friesland", "province", "Kids", ["netherlands"], "The tour of eleven Frisian cities starts and finishes in Leeuwarden.", "De tocht langs elf Friese steden start en finisht in Leeuwarden."),
  landmark("woudagemaal", "the Woudagemaal", "het Woudagemaal", "Netherlands", "Lemmer", null, "Friesland", "province", "Smart Adults", ["netherlands"], "The Ir. D.F. Woudagemaal is the steam pumping station in Lemmer.", "Het Woudagemaal is het stoomgemaal in Lemmer."),
  landmark("het-loo", "Paleis Het Loo", "Paleis Het Loo", "Netherlands", "Apeldoorn", null, "Gelderland", "province", "Adults", ["netherlands"], "The palace stands at the edge of Apeldoorn.", "Het paleis staat aan de rand van Apeldoorn."),
  landmark("kroller-muller", "the Kröller-Müller Museum", "het Kröller-Müller Museum", "Netherlands", "Otterlo", null, "Gelderland", "province", "Adults", ["netherlands"], "The museum sits in the Hoge Veluwe, at Otterlo.", "Het museum ligt in de Hoge Veluwe, bij Otterlo."),
  landmark("john-frost-bridge", "the John Frost Bridge", "de John Frostbrug", "Netherlands", "Arnhem", null, "Gelderland", "province", "Adults", ["netherlands"], "The bridge crosses the Rhine in Arnhem.", "De brug ligt over de Rijn in Arnhem."),
  landmark("martinitoren", "the Martinitoren", "de Martinitoren", "Netherlands", "Groningen", null, "Groningen", "province", "Kids", ["netherlands"], "The tower belongs to the Martinikerk in the city of Groningen.", "De toren hoort bij de Martinikerk in de stad Groningen."),
  landmark("forum-groningen", "Forum Groningen", "Forum Groningen", "Netherlands", "Groningen", null, "Groningen", "province", "Adults", ["netherlands"], "Forum Groningen is the cultural building on the Grote Markt.", "Forum Groningen is het cultuurgebouw aan de Grote Markt."),
  landmark("sint-servaas", "the Basilica of Saint Servatius", "de Sint-Servaasbasiliek", "Netherlands", "Maastricht", null, "Limburg", "province", "Adults", ["netherlands"], "The basilica stands on the Vrijthof in Maastricht.", "De basiliek staat aan het Vrijthof in Maastricht."),
  landmark("sint-pietersberg", "the caves of Sint-Pietersberg", "de grotten van de Sint-Pietersberg", "Netherlands", "Maastricht", null, "Limburg", "province", "Adults", ["netherlands"], "The marl caves run under the Sint-Pietersberg in Maastricht.", "De mergelgrotten lopen onder de Sint-Pietersberg in Maastricht."),
  landmark("margraten", "the Netherlands American Cemetery", "de Amerikaanse Begraafplaats Margraten", "Netherlands", "Margraten", null, "Limburg", "province", "Adults", ["netherlands"], "The cemetery is in Margraten, south of Maastricht.", "De begraafplaats ligt in Margraten, ten zuiden van Maastricht."),
  landmark("efteling", "the Efteling", "de Efteling", "Netherlands", "Kaatsheuvel", null, "Noord-Brabant", "province", "Kids", ["netherlands"], "The Efteling is the fairytale park in Kaatsheuvel.", "De Efteling is het sprookjespark in Kaatsheuvel."),
  landmark("van-gogh-nuenen", "Van Gogh's home in Nuenen", "Van Goghs huis in Nuenen", "Netherlands", "Nuenen", null, "Noord-Brabant", "province", "Adults", ["netherlands"], "Vincent van Gogh lived in the vicarage in Nuenen. He was born in Zundert.", "Vincent van Gogh woonde in de pastorie in Nuenen. Hij is geboren in Zundert."),
  landmark("keukenhof", "the Keukenhof", "de Keukenhof", "Netherlands", "Lisse", null, "Noord-Holland", "province", "Kids", ["netherlands", "eu"], "The bulb gardens are in Lisse, in Noord-Holland.", "De bollentuinen liggen in Lisse, in Noord-Holland."),
  landmark("zaanse-schans", "the Zaanse Schans", "de Zaanse Schans", "Netherlands", "Zaandam", null, "Noord-Holland", "province", "Adults", ["netherlands"], "The windmills stand at the Zaanse Schans in Zaandam.", "De molens staan aan de Zaanse Schans in Zaandam."),
  landmark("giethoorn", "Giethoorn", "Giethoorn", "Netherlands", "Giethoorn", null, "Overijssel", "province", "Kids", ["netherlands"], "Giethoorn is the village of canals in Overijssel.", "Giethoorn is het dorp met de grachten in Overijssel."),
  landmark("lebuinuskerk", "the Lebuïnuskerk", "de Lebuïnuskerk", "Netherlands", "Deventer", null, "Overijssel", "province", "Smart Adults", ["netherlands"], "The church stands on the square in Deventer.", "De kerk staat aan het plein in Deventer."),
  landmark("domtoren", "the Domtoren", "de Domtoren", "Netherlands", "Utrecht", null, "Utrecht", "province", "Kids", ["netherlands"], "The tower of the Dom stands in the city of Utrecht.", "De toren van de Dom staat in de stad Utrecht."),
  landmark("kasteel-de-haar", "Kasteel de Haar", "Kasteel de Haar", "Netherlands", "Haarzuilens", null, "Utrecht", "province", "Adults", ["netherlands"], "The castle stands in Haarzuilens, just west of the city of Utrecht.", "Het kasteel staat in Haarzuilens, net ten westen van de stad Utrecht."),
  landmark("rietveld-schroder", "the Rietveld Schröder House", "het Rietveld Schröderhuis", "Netherlands", "Utrecht", null, "Utrecht", "province", "Smart Adults", ["netherlands"], "The house is a UNESCO site in the city of Utrecht.", "Het huis is een UNESCO-plek in de stad Utrecht."),
  landmark("oosterscheldekering", "the Oosterschelde barrier", "de Oosterscheldekering", "Netherlands", "Neeltje Jans", null, "Zeeland", "province", "Kids", ["netherlands"], "This is the famous part of the Delta Works, between Schouwen-Duiveland and Noord-Beveland.", "Dit is het bekende deel van de Deltawerken, tussen Schouwen-Duiveland en Noord-Beveland."),
  landmark("watersnoodmuseum", "the Watersnoodmuseum", "het Watersnoodmuseum", "Netherlands", "Ouwerkerk", null, "Zeeland", "province", "Adults", ["netherlands"], "The museum of the 1953 flood is in the caissons at Ouwerkerk.", "Het museum van de watersnood van 1953 zit in de caissons bij Ouwerkerk."),
  landmark("kinderdijk", "Kinderdijk", "Kinderdijk", "Netherlands", "Kinderdijk", null, "Zuid-Holland", "province", "Kids", ["netherlands", "eu"], "The windmills of Kinderdijk stand in Zuid-Holland, southeast of Rotterdam.", "De molens van Kinderdijk staan in Zuid-Holland, ten zuidoosten van Rotterdam."),
  landmark("binnenhof", "the Binnenhof", "het Binnenhof", "Netherlands", "Den Haag", null, "Zuid-Holland", "province", "Adults", ["netherlands"], "Parliament meets at the Binnenhof in The Hague.", "Het parlement vergadert in het Binnenhof in Den Haag."),
  landmark("erasmusbrug", "the Erasmus Bridge", "de Erasmusbrug", "Netherlands", "Rotterdam", null, "Zuid-Holland", "province", "Adults", ["netherlands"], "The bridge crosses the Nieuwe Maas in Rotterdam.", "De brug ligt over de Nieuwe Maas in Rotterdam."),
  landmark("maeslantkering", "the Maeslant barrier", "de Maeslantkering", "Netherlands", "Hoek van Holland", null, "Zuid-Holland", "province", "Smart Adults", ["netherlands"], "This Delta Works barrier closes the Nieuwe Waterweg at Hoek van Holland.", "Deze Deltawerkkering sluit de Nieuwe Waterweg bij Hoek van Holland."),
];

function landmark(
  id: string,
  nameEn: string,
  nameNl: string,
  country: string,
  city: string | null,
  cityNl: string | null,
  division: string | null,
  divisionKind: "province" | "state" | null,
  level: LandmarkLevel,
  maps: string[],
  detailEn: string,
  detailNl: string,
): Landmark {
  return { id, nameEn, nameNl, country, city, cityNl, division, divisionKind, level, maps, detailEn, detailNl };
}
