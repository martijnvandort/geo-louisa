import { landmarkAllowed, type LandmarkLevel } from "@/data/landmarks";

/** World questions that also belong on the region, or on the Netherlands or the United States. */
export type PlacedQuestion = {
  id: string;
  country: string;
  level: LandmarkLevel;
  maps: string[];
  promptEn: string;
  promptNl: string;
  answerEn: string;
  answerNl: string;
  choicesEn: string[];
  choicesNl: string[];
  detailEn: string;
  detailNl: string;
};

export const PLACED_QUESTIONS: PlacedQuestion[] = [
  {
    "id": "W003",
    "country": "Egypt",
    "level": "Kids",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "In which country are the Pyramids of Giza?",
    "promptNl": "In welk land staan de piramiden van Gizeh?",
    "answerEn": "Egypt",
    "answerNl": "Egypte",
    "choicesEn": [
      "Egypt",
      "Canada",
      "Sweden"
    ],
    "choicesNl": [
      "Egypte",
      "Canada",
      "Zweden"
    ],
    "detailEn": "The Pyramids of Giza stand on the edge of Cairo. The Great Pyramid was built for the pharaoh Khufu around 2560 BC and was originally about 146 metres tall. It is the only one of the Seven Wonders of the Ancient World that is still standing.",
    "detailNl": "De piramiden van Gizeh staan aan de rand van Caïro. De Grote Piramide is rond 2560 v.Chr. gebouwd voor farao Cheops en was oorspronkelijk ongeveer 146 meter hoog. Het is het enige van de zeven wereldwonderen van de oudheid dat nog overeind staat."
  },
  {
    "id": "W004",
    "country": "China",
    "level": "Kids",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "In which country is the Great Wall?",
    "promptNl": "In welk land staat de Chinese Muur?",
    "answerEn": "China",
    "answerNl": "China",
    "choicesEn": [
      "France",
      "China",
      "Brazil"
    ],
    "choicesNl": [
      "Frankrijk",
      "China",
      "Brazilië"
    ],
    "detailEn": "The Great Wall is not one single wall. A Chinese survey put the full system of walls, trenches and natural barriers at more than 21,000 km, built across many dynasties.",
    "detailNl": "De Chinese Muur is niet één doorlopende muur. Een Chinees onderzoek schatte het hele stelsel van muren, greppels en natuurlijke barrières op meer dan 21.000 km, gebouwd over veel dynastieën."
  },
  {
    "id": "W005",
    "country": "India",
    "level": "Kids",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "In which country is the Taj Mahal?",
    "promptNl": "In welk land staat de Taj Mahal?",
    "answerEn": "India",
    "answerNl": "India",
    "choicesEn": [
      "India",
      "Spain",
      "Norway"
    ],
    "choicesNl": [
      "India",
      "Spanje",
      "Noorwegen"
    ],
    "detailEn": "The Taj Mahal is in Agra. Emperor Shah Jahan had it built between 1632 and 1653 as a tomb for his wife Mumtaz Mahal.",
    "detailNl": "De Taj Mahal staat in Agra. Keizer Shah Jahan liet hem tussen 1632 en 1653 bouwen als graf voor zijn vrouw Mumtaz Mahal."
  },
  {
    "id": "W006",
    "country": "France",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "In which country is the Eiffel Tower?",
    "promptNl": "In welk land staat de Eiffeltoren?",
    "answerEn": "France",
    "answerNl": "Frankrijk",
    "choicesEn": [
      "Japan",
      "Australia",
      "France"
    ],
    "choicesNl": [
      "Japan",
      "Australië",
      "Frankrijk"
    ],
    "detailEn": "The Eiffel Tower was built for the 1889 World's Fair in Paris. With its antenna it is 330 metres tall.",
    "detailNl": "De Eiffeltoren is gebouwd voor de wereldtentoonstelling van 1889 in Parijs. Met de antenne is hij 330 meter hoog."
  },
  {
    "id": "W007",
    "country": "Italy",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is shaped like a boot and is home to the Colosseum?",
    "promptNl": "Welk land heeft de vorm van een laars en is de thuisbasis van het Colosseum?",
    "answerEn": "Italy",
    "answerNl": "Italië",
    "choicesEn": [
      "Italy",
      "Canada",
      "Egypt"
    ],
    "choicesNl": [
      "Italië",
      "Canada",
      "Egypte"
    ],
    "detailEn": "The Colosseum in Rome opened in AD 80 and could hold about 50,000 spectators. On a map, Italy is often compared to a boot.",
    "detailNl": "Het Colosseum in Rome opende in het jaar 80 en kon ongeveer 50.000 toeschouwers houden. Op de kaart lijkt Italië vaak op een laars."
  },
  {
    "id": "W008",
    "country": "Peru",
    "level": "Kids",
    "maps": [
      "world",
      "south-america"
    ],
    "promptEn": "In which country is Machu Picchu?",
    "promptNl": "In welk land ligt Machu Picchu?",
    "answerEn": "Peru",
    "answerNl": "Peru",
    "choicesEn": [
      "Mexico",
      "Peru",
      "Egypt"
    ],
    "choicesNl": [
      "Mexico",
      "Peru",
      "Egypte"
    ],
    "detailEn": "Machu Picchu is an Inca city in the Andes, about 2,430 metres above sea level. It was built in the 15th century and sits above the Urubamba valley.",
    "detailNl": "Machu Picchu is een Incastad in de Andes, op ongeveer 2.430 meter hoogte. De stad is in de 15e eeuw gebouwd en ligt boven de Urubamba-vallei."
  },
  {
    "id": "W009",
    "country": "Brazil",
    "level": "Kids",
    "maps": [
      "world",
      "south-america"
    ],
    "promptEn": "In which country does Christ the Redeemer look over Rio de Janeiro?",
    "promptNl": "In welk land kijkt Christus de Verlosser uit over Rio de Janeiro?",
    "answerEn": "Brazil",
    "answerNl": "Brazilië",
    "choicesEn": [
      "Brazil",
      "Portugal",
      "Japan"
    ],
    "choicesNl": [
      "Brazilië",
      "Portugal",
      "Japan"
    ],
    "detailEn": "Christ the Redeemer stands on Corcovado mountain above Rio de Janeiro. The statue itself is 30 metres tall and was completed in 1931.",
    "detailNl": "Christus de Verlosser staat op de berg Corcovado boven Rio de Janeiro. Het beeld zelf is 30 meter hoog en werd in 1931 voltooid."
  },
  {
    "id": "W010",
    "country": "United States",
    "level": "Kids",
    "maps": [
      "world",
      "north-america",
      "united-states"
    ],
    "promptEn": "In which country does the Statue of Liberty stand?",
    "promptNl": "In welk land staat het Vrijheidsbeeld?",
    "answerEn": "United States",
    "answerNl": "de Verenigde Staten",
    "choicesEn": [
      "France",
      "United States",
      "China"
    ],
    "choicesNl": [
      "Frankrijk",
      "Verenigde Staten",
      "China"
    ],
    "detailEn": "The Statue of Liberty stands in New York Harbor. France gave it to the United States, and it was dedicated in 1886. From the ground to the torch it is about 93 metres.",
    "detailNl": "Het Vrijheidsbeeld staat in de haven van New York. Frankrijk gaf het aan de Verenigde Staten, en het werd in 1886 onthuld. Van de grond tot de toorts is het ongeveer 93 meter."
  },
  {
    "id": "W013",
    "country": "Australia",
    "level": "Kids",
    "maps": [
      "world",
      "oceania"
    ],
    "promptEn": "Which country is also a continent and is home to kangaroos?",
    "promptNl": "Welk land is ook een continent en het thuisland van kangoeroes?",
    "answerEn": "Australia",
    "answerNl": "Australië",
    "choicesEn": [
      "Australia",
      "Brazil",
      "Canada"
    ],
    "choicesNl": [
      "Australië",
      "Brazilië",
      "Canada"
    ],
    "detailEn": "Australia is the only country that is also a continent. It covers about 7.7 million km², which makes it the sixth-largest country in the world.",
    "detailNl": "Australië is het enige land dat ook een continent is. Het beslaat ongeveer 7,7 miljoen km² en is daarmee het zesde land ter wereld qua oppervlakte."
  },
  {
    "id": "W014",
    "country": "Japan",
    "level": "Kids",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which country is famous for Mount Fuji and sushi?",
    "promptNl": "Welk land is beroemd om de berg Fuji en sushi?",
    "answerEn": "Japan",
    "answerNl": "Japan",
    "choicesEn": [
      "Japan",
      "Brazil",
      "Egypt"
    ],
    "choicesNl": [
      "Japan",
      "Brazilië",
      "Egypte"
    ],
    "detailEn": "Mount Fuji is Japan's highest mountain, at 3,776 metres. It last erupted in 1707.",
    "detailNl": "De berg Fuji is met 3.776 meter de hoogste berg van Japan. De laatste uitbarsting was in 1707."
  },
  {
    "id": "W015",
    "country": "Netherlands",
    "level": "Kids",
    "maps": [
      "world",
      "eu",
      "netherlands"
    ],
    "promptEn": "Which kingdom is famous for tulips, windmills, and bicycles?",
    "promptNl": "Welk koninkrijk is beroemd om tulpen, molens en fietsen?",
    "answerEn": "Netherlands",
    "answerNl": "Nederland",
    "choicesEn": [
      "Netherlands",
      "Spain",
      "Brazil"
    ],
    "choicesNl": [
      "Nederland",
      "Spanje",
      "Brazilië"
    ],
    "detailEn": "The Netherlands is a kingdom of about 18.4 million people. Much of the country lies below sea level and is kept dry by dikes and pumps.",
    "detailNl": "Nederland is een koninkrijk met ongeveer 18,4 miljoen inwoners. Een groot deel van het land ligt onder zeeniveau en wordt drooggehouden met dijken en gemalen."
  },
  {
    "id": "W016",
    "country": "Denmark",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country invented Lego?",
    "promptNl": "Welk land heeft Lego uitgevonden?",
    "answerEn": "Denmark",
    "answerNl": "Denemarken",
    "choicesEn": [
      "Denmark",
      "Brazil",
      "Egypt"
    ],
    "choicesNl": [
      "Denemarken",
      "Brazilië",
      "Egypte"
    ],
    "detailEn": "Ole Kirk Christiansen started the company in Billund in 1932. The name Lego comes from the Danish words leg godt, which mean play well.",
    "detailNl": "Ole Kirk Christiansen begon het bedrijf in 1932 in Billund. De naam Lego komt van de Deense woorden leg godt, wat speel goed betekent."
  },
  {
    "id": "W017",
    "country": "Sweden",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is the home of IKEA?",
    "promptNl": "Welk land is de thuisbasis van IKEA?",
    "answerEn": "Sweden",
    "answerNl": "Zweden",
    "choicesEn": [
      "Sweden",
      "Spain",
      "Canada"
    ],
    "choicesNl": [
      "Zweden",
      "Spanje",
      "Canada"
    ],
    "detailEn": "Ingvar Kamprad founded IKEA in 1943 in Älmhult, in southern Sweden. The name uses his initials and the places Elmtaryd and Agunnaryd.",
    "detailNl": "Ingvar Kamprad richtte IKEA in 1943 op in Älmhult, in het zuiden van Zweden. De naam gebruikt zijn initialen en de plaatsen Elmtaryd en Agunnaryd."
  },
  {
    "id": "W018",
    "country": "Greece",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country began the ancient Olympic Games and is home to the Acropolis?",
    "promptNl": "Welk land begon de Olympische Spelen in de oudheid en is de thuisbasis van de Akropolis?",
    "answerEn": "Greece",
    "answerNl": "Griekenland",
    "choicesEn": [
      "Greece",
      "Brazil",
      "Canada"
    ],
    "choicesNl": [
      "Griekenland",
      "Brazilië",
      "Canada"
    ],
    "detailEn": "The first recorded Olympic Games were held in Olympia in 776 BC. The Acropolis, with the Parthenon, stands above Athens.",
    "detailNl": "De eerste vastgelegde Olympische Spelen waren in 776 v.Chr. in Olympia. De Akropolis, met het Parthenon, ligt boven Athene."
  },
  {
    "id": "W020",
    "country": "Spain",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which kingdom is famous for flamenco and paella?",
    "promptNl": "Welk koninkrijk is beroemd om flamenco en paella?",
    "answerEn": "Spain",
    "answerNl": "Spanje",
    "choicesEn": [
      "Spain",
      "Sweden",
      "Canada"
    ],
    "choicesNl": [
      "Spanje",
      "Zweden",
      "Canada"
    ],
    "detailEn": "Spain is a kingdom of about 48 million people. Flamenco grew up in Andalusia, in the south.",
    "detailNl": "Spanje is een koninkrijk met ongeveer 48 miljoen inwoners. Flamenco is ontstaan in Andalusië, in het zuiden."
  },
  {
    "id": "W021",
    "country": "Ireland",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is famous for St Patrick's Day?",
    "promptNl": "Welk land is beroemd om Sint-Patricksdag?",
    "answerEn": "Ireland",
    "answerNl": "Ierland",
    "choicesEn": [
      "Ireland",
      "Brazil",
      "Japan"
    ],
    "choicesNl": [
      "Ierland",
      "Brazilië",
      "Japan"
    ],
    "detailEn": "Saint Patrick is the patron saint of Ireland, and the day is 17 March.",
    "detailNl": "Sint Patrick is de beschermheilige van Ierland, en de dag is 17 maart."
  },
  {
    "id": "W022",
    "country": "Mexico",
    "level": "Kids",
    "maps": [
      "world",
      "north-america"
    ],
    "promptEn": "In which country is the ancient city of Chichen Itza?",
    "promptNl": "In welk land ligt de oude stad Chichen Itza?",
    "answerEn": "Mexico",
    "answerNl": "Mexico",
    "choicesEn": [
      "Mexico",
      "Egypt",
      "Greece"
    ],
    "choicesNl": [
      "Mexico",
      "Egypte",
      "Griekenland"
    ],
    "detailEn": "Chichen Itza was a major Maya city in Yucatán. Its step pyramid, El Castillo, was built between about the 9th and the 12th century.",
    "detailNl": "Chichen Itza was een belangrijke Mayastad in Yucatán. De trappiramide El Castillo is gebouwd tussen ongeveer de 9e en de 12e eeuw."
  },
  {
    "id": "W023",
    "country": "Canada",
    "level": "Kids",
    "maps": [
      "world",
      "north-america"
    ],
    "promptEn": "Which country has a maple leaf on its flag?",
    "promptNl": "Welk land heeft een esdoornblad op de vlag?",
    "answerEn": "Canada",
    "answerNl": "Canada",
    "choicesEn": [
      "Canada",
      "Japan",
      "Brazil"
    ],
    "choicesNl": [
      "Canada",
      "Japan",
      "Brazilië"
    ],
    "detailEn": "Canada put the maple leaf on its flag on 15 February 1965. Canada is also the second-largest country in the world, at about 9.98 million km².",
    "detailNl": "Canada zette op 15 februari 1965 het esdoornblad op de vlag. Canada is ook het op één na grootste land ter wereld, met ongeveer 9,98 miljoen km²."
  },
  {
    "id": "W024",
    "country": "Belgium",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is famous for waffles and chocolate?",
    "promptNl": "Welk land is beroemd om wafels en chocolade?",
    "answerEn": "Belgium",
    "answerNl": "België",
    "choicesEn": [
      "Belgium",
      "Japan",
      "Brazil"
    ],
    "choicesNl": [
      "België",
      "Japan",
      "Brazilië"
    ],
    "detailEn": "Belgium is known for chocolate and waffles. Brussels is also the seat of the main European Union institutions.",
    "detailNl": "België staat bekend om chocolade en wafels. Brussel is ook de zetel van de belangrijkste instellingen van de Europese Unie."
  },
  {
    "id": "W025",
    "country": "Germany",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is famous for Oktoberfest and the Brandenburg Gate?",
    "promptNl": "Welk land is beroemd om het Oktoberfest en de Brandenburger Tor?",
    "answerEn": "Germany",
    "answerNl": "Duitsland",
    "choicesEn": [
      "Germany",
      "Brazil",
      "Australia"
    ],
    "choicesNl": [
      "Duitsland",
      "Brazilië",
      "Australië"
    ],
    "detailEn": "Oktoberfest is held in Munich and began in 1810 as a royal wedding celebration. The Brandenburg Gate has stood in Berlin since 1791.",
    "detailNl": "Oktoberfest is in München en begon in 1810 als een koninklijk huwelijksfeest. De Brandenburger Tor staat sinds 1791 in Berlijn."
  },
  {
    "id": "W026",
    "country": "Morocco",
    "level": "Kids",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "In which country is the city of Marrakech?",
    "promptNl": "In welk land ligt de stad Marrakech?",
    "answerEn": "Morocco",
    "answerNl": "Marokko",
    "choicesEn": [
      "Morocco",
      "Brazil",
      "Japan"
    ],
    "choicesNl": [
      "Marokko",
      "Brazilië",
      "Japan"
    ],
    "detailEn": "Marrakech was founded around 1070 and is one of Morocco's four imperial cities. The old city, the medina, is a UNESCO World Heritage Site.",
    "detailNl": "Marrakech is rond 1070 gesticht en is een van de vier koningssteden van Marokko. De oude stad, de medina, staat op de Werelderfgoedlijst van UNESCO."
  },
  {
    "id": "W027",
    "country": "South Korea",
    "level": "Kids",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which country is famous for K-pop?",
    "promptNl": "Welk land is beroemd om K-pop?",
    "answerEn": "South Korea",
    "answerNl": "Zuid-Korea",
    "choicesEn": [
      "South Korea",
      "Brazil",
      "Egypt"
    ],
    "choicesNl": [
      "Zuid-Korea",
      "Brazilië",
      "Egypte"
    ],
    "detailEn": "K-pop grew out of South Korea from the 1990s. The country has about 52 million people, and Seoul is the capital.",
    "detailNl": "K-pop is vanaf de jaren negentig in Zuid-Korea ontstaan. Het land heeft ongeveer 52 miljoen inwoners, en Seoel is de hoofdstad."
  },
  {
    "id": "W028",
    "country": "New Zealand",
    "level": "Kids",
    "maps": [
      "world",
      "oceania"
    ],
    "promptEn": "Which country is famous for the kiwi bird and for filming The Lord of the Rings?",
    "promptNl": "Welk land is beroemd om de kiwi en om de opnames van The Lord of the Rings?",
    "answerEn": "New Zealand",
    "answerNl": "Nieuw-Zeeland",
    "choicesEn": [
      "New Zealand",
      "Egypt",
      "Mexico"
    ],
    "choicesNl": [
      "Nieuw-Zeeland",
      "Egypte",
      "Mexico"
    ],
    "detailEn": "The kiwi is a flightless bird that lives only in New Zealand. The Lord of the Rings films were shot there between 1999 and 2003.",
    "detailNl": "De kiwi is een loopvogel die alleen in Nieuw-Zeeland leeft. De Lord of the Rings-films zijn daar tussen 1999 en 2003 opgenomen."
  },
  {
    "id": "W029",
    "country": "Finland",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "From which country are many letters to Santa answered, in Lapland?",
    "promptNl": "Vanuit welk land worden veel brieven aan de Kerstman beantwoord, in Lapland?",
    "answerEn": "Finland",
    "answerNl": "Finland",
    "choicesEn": [
      "Finland",
      "Spain",
      "Brazil"
    ],
    "choicesNl": [
      "Finland",
      "Spanje",
      "Brazilië"
    ],
    "detailEn": "Letters to Santa Claus are answered from Rovaniemi, in Finnish Lapland, near the Arctic Circle.",
    "detailNl": "Brieven aan de Kerstman worden beantwoord vanuit Rovaniemi, in Fins Lapland, vlak bij de poolcirkel."
  },
  {
    "id": "W030",
    "country": "Jordan",
    "level": "Kids",
    "maps": [
      "world",
      "middle-east"
    ],
    "promptEn": "In which country is the ancient city of Petra?",
    "promptNl": "In welk land ligt de oude stad Petra?",
    "answerEn": "Jordan",
    "answerNl": "Jordanië",
    "choicesEn": [
      "Jordan",
      "Brazil",
      "Canada"
    ],
    "choicesNl": [
      "Jordanië",
      "Brazilië",
      "Canada"
    ],
    "detailEn": "Petra was the capital of the Nabataean kingdom, carved into rose-coloured rock from about the 4th century BC. It is in southern Jordan.",
    "detailNl": "Petra was de hoofdstad van het Nabateese rijk en is vanaf ongeveer de 4e eeuw v.Chr. uit roze rots gehouwen. De stad ligt in het zuiden van Jordanië."
  },
  {
    "id": "W031",
    "country": "Cambodia",
    "level": "Kids",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "In which country is the temple of Angkor Wat?",
    "promptNl": "In welk land staat de tempel Angkor Wat?",
    "answerEn": "Cambodia",
    "answerNl": "Cambodja",
    "choicesEn": [
      "Cambodia",
      "Brazil",
      "Canada"
    ],
    "choicesNl": [
      "Cambodja",
      "Brazilië",
      "Canada"
    ],
    "detailEn": "Angkor Wat was built in the 12th century for King Suryavarman II. It began as a Hindu temple and later became Buddhist. It is the largest religious monument in the world.",
    "detailNl": "Angkor Wat is in de 12e eeuw gebouwd voor koning Suryavarman II. Het begon als een hindoetempel en werd later boeddhistisch. Het is het grootste religieuze bouwwerk ter wereld."
  },
  {
    "id": "W032",
    "country": "Jamaica",
    "level": "Kids",
    "maps": [
      "world",
      "central-america"
    ],
    "promptEn": "Which country is the home of reggae music?",
    "promptNl": "Welk land is de thuisbasis van reggaemuziek?",
    "answerEn": "Jamaica",
    "answerNl": "Jamaica",
    "choicesEn": [
      "Jamaica",
      "Brazil",
      "Japan"
    ],
    "choicesNl": [
      "Jamaica",
      "Brazilië",
      "Japan"
    ],
    "detailEn": "Reggae grew up in Jamaica in the late 1960s. Bob Marley, born in 1945 in Saint Ann, made it famous around the world.",
    "detailNl": "Reggae is eind jaren zestig in Jamaica ontstaan. Bob Marley, geboren in 1945 in Saint Ann, maakte de muziek wereldberoemd."
  },
  {
    "id": "W033",
    "country": "United Arab Emirates",
    "level": "Kids",
    "maps": [
      "world",
      "middle-east"
    ],
    "promptEn": "Which country is famous for Dubai and the Burj Khalifa?",
    "promptNl": "Welk land is beroemd om Dubai en de Burj Khalifa?",
    "answerEn": "United Arab Emirates",
    "answerNl": "de Verenigde Arabische Emiraten",
    "choicesEn": [
      "United Arab Emirates",
      "Brazil",
      "Canada"
    ],
    "choicesNl": [
      "Verenigde Arabische Emiraten",
      "Brazilië",
      "Canada"
    ],
    "detailEn": "The Burj Khalifa in Dubai is the world's tallest building, at 828 metres. It opened in 2010.",
    "detailNl": "De Burj Khalifa in Dubai is met 828 meter het hoogste gebouw ter wereld. Hij opende in 2010."
  },
  {
    "id": "W034",
    "country": "United States",
    "level": "Kids",
    "maps": [
      "world",
      "north-america",
      "united-states"
    ],
    "promptEn": "In which country is the Grand Canyon?",
    "promptNl": "In welk land ligt de Grand Canyon?",
    "answerEn": "United States",
    "answerNl": "de Verenigde Staten",
    "choicesEn": [
      "United States",
      "Australia",
      "Brazil"
    ],
    "choicesNl": [
      "Verenigde Staten",
      "Australië",
      "Brazilië"
    ],
    "detailEn": "The Grand Canyon is in Arizona. It is about 446 km long and in places about 1.8 km deep. The Colorado River cut most of it.",
    "detailNl": "De Grand Canyon ligt in Arizona. Hij is ongeveer 446 km lang en op sommige plekken ongeveer 1,8 km diep. De Colorado heeft het grootste deel uitgesleten."
  },
  {
    "id": "W035",
    "country": "China",
    "level": "Kids",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which country is famous for giant pandas?",
    "promptNl": "Welk land is beroemd om reuzenpanda's?",
    "answerEn": "China",
    "answerNl": "China",
    "choicesEn": [
      "China",
      "Japan",
      "Australia"
    ],
    "choicesNl": [
      "China",
      "Japan",
      "Australië"
    ],
    "detailEn": "Wild giant pandas live only in mountain forests in central China. There are fewer than 2,000 of them in the wild.",
    "detailNl": "Wilde reuzenpanda's leven alleen in bergbossen in het midden van China. Er zijn er minder dan 2.000 in het wild."
  },
  {
    "id": "W036",
    "country": "Italy",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "In which country is Venice, the city of canals?",
    "promptNl": "In welk land ligt Venetië, de stad van de grachten?",
    "answerEn": "Italy",
    "answerNl": "Italië",
    "choicesEn": [
      "Italy",
      "Brazil",
      "Japan"
    ],
    "choicesNl": [
      "Italië",
      "Brazilië",
      "Japan"
    ],
    "detailEn": "Venice is built on about 100 small islands in a lagoon, and it has about 400 bridges. The Grand Canal is the main water street.",
    "detailNl": "Venetië is gebouwd op ongeveer 100 kleine eilanden in een lagune en heeft ongeveer 400 bruggen. Het Canal Grande is de belangrijkste waterstraat."
  },
  {
    "id": "W037",
    "country": "Austria",
    "level": "Kids",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is the home of Mozart and the city of Vienna?",
    "promptNl": "Welk land is het thuisland van Mozart en de stad Wenen?",
    "answerEn": "Austria",
    "answerNl": "Oostenrijk",
    "choicesEn": [
      "Austria",
      "Brazil",
      "Canada"
    ],
    "choicesNl": [
      "Oostenrijk",
      "Brazilië",
      "Canada"
    ],
    "detailEn": "Wolfgang Amadeus Mozart was born in Salzburg in 1756. Vienna was the capital of the Habsburg empire and is still Austria's capital.",
    "detailNl": "Wolfgang Amadeus Mozart is in 1756 in Salzburg geboren. Wenen was de hoofdstad van het Habsburgse rijk en is nog steeds de hoofdstad van Oostenrijk."
  },
  {
    "id": "W039",
    "country": "Australia",
    "level": "Kids",
    "maps": [
      "world",
      "oceania"
    ],
    "promptEn": "In which country is the Sydney Opera House?",
    "promptNl": "In welk land staat het Sydney Opera House?",
    "answerEn": "Australia",
    "answerNl": "Australië",
    "choicesEn": [
      "Australia",
      "Brazil",
      "Egypt"
    ],
    "choicesNl": [
      "Australië",
      "Brazilië",
      "Egypte"
    ],
    "detailEn": "The Sydney Opera House opened in 1973. The Danish architect Jørn Utzon designed the shell roofs. It stands on Bennelong Point in Sydney Harbour.",
    "detailNl": "Het Sydney Opera House opende in 1973. De Deense architect Jørn Utzon ontwierp de schelpvormige daken. Het gebouw staat op Bennelong Point in de haven van Sydney."
  },
  {
    "id": "W040",
    "country": "Brazil",
    "level": "Kids",
    "maps": [
      "world",
      "south-america"
    ],
    "promptEn": "Which country is famous for Carnival in Rio and for samba?",
    "promptNl": "Welk land is beroemd om het carnaval in Rio en om samba?",
    "answerEn": "Brazil",
    "answerNl": "Brazilië",
    "choicesEn": [
      "Brazil",
      "Spain",
      "Mexico"
    ],
    "choicesNl": [
      "Brazilië",
      "Spanje",
      "Mexico"
    ],
    "detailEn": "Rio de Janeiro's Carnival is one of the largest festivals in the world and takes place in the days before Lent. Samba schools parade in the Sambadrome.",
    "detailNl": "Het carnaval van Rio de Janeiro is een van de grootste festivals ter wereld en valt in de dagen voor de vastentijd. Sambascholen paraderen in het Sambadrome."
  },
  {
    "id": "W047",
    "country": "India",
    "level": "Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "In which country is Hindi one of the main languages?",
    "promptNl": "In welk land is Hindi een van de belangrijkste talen?",
    "answerEn": "India",
    "answerNl": "India",
    "choicesEn": [
      "India",
      "Pakistan",
      "Nepal"
    ],
    "choicesNl": [
      "India",
      "Pakistan",
      "Nepal"
    ],
    "detailEn": "Hindi is one of the official languages of India and is spoken mainly in the north, by hundreds of millions of people. English is also an official language.",
    "detailNl": "Hindi is een van de officiële talen van India en wordt vooral in het noorden gesproken, door honderden miljoenen mensen. Engels is ook een officiële taal."
  },
  {
    "id": "W051",
    "country": "Japan",
    "level": "Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which country has an emperor as its head of state?",
    "promptNl": "Welk land heeft een keizer als staatshoofd?",
    "answerEn": "Japan",
    "answerNl": "Japan",
    "choicesEn": [
      "Japan",
      "United Kingdom",
      "Thailand"
    ],
    "choicesNl": [
      "Japan",
      "Verenigd Koninkrijk",
      "Thailand"
    ],
    "detailEn": "Japan is a constitutional monarchy, and Emperor Naruhito has been head of state since 2019. The role is ceremonial. Japan is the only country that still has an emperor.",
    "detailNl": "Japan is een constitutionele monarchie, en keizer Naruhito is sinds 2019 staatshoofd. De rol is ceremonieel. Japan is het enige land dat nog een keizer heeft."
  },
  {
    "id": "W052",
    "country": "Saudi Arabia",
    "level": "Adults",
    "maps": [
      "world",
      "middle-east"
    ],
    "promptEn": "Which kingdom is home to Mecca and Medina?",
    "promptNl": "Welk koninkrijk is de thuisbasis van Mekka en Medina?",
    "answerEn": "Saudi Arabia",
    "answerNl": "Saoedi-Arabië",
    "choicesEn": [
      "Saudi Arabia",
      "United Arab Emirates",
      "Jordan"
    ],
    "choicesNl": [
      "Saoedi-Arabië",
      "Verenigde Arabische Emiraten",
      "Jordanië"
    ],
    "detailEn": "Mecca and Medina, in Saudi Arabia, are the two holiest cities in Islam. Only Muslims may enter Mecca. Muslims face Mecca when they pray.",
    "detailNl": "Mekka en Medina, in Saoedi-Arabië, zijn de twee heiligste steden van de islam. Alleen moslims mogen Mekka in. Moslims bidden in de richting van Mekka."
  },
  {
    "id": "W055",
    "country": "Tanzania",
    "level": "Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "Which country is home to the Serengeti?",
    "promptNl": "Welk land is de thuisbasis van de Serengeti?",
    "answerEn": "Tanzania",
    "answerNl": "Tanzania",
    "choicesEn": [
      "Tanzania",
      "Kenya",
      "South Africa"
    ],
    "choicesNl": [
      "Tanzania",
      "Kenia",
      "Zuid-Afrika"
    ],
    "detailEn": "The Serengeti ecosystem covers about 30,000 km², mostly in northern Tanzania. The great migration of wildebeest continues into Kenya's Maasai Mara.",
    "detailNl": "Het ecosysteem van de Serengeti beslaat ongeveer 30.000 km², vooral in het noorden van Tanzania. De grote trek van gnoes loopt door tot in de Maasai Mara in Kenia."
  },
  {
    "id": "W056",
    "country": "Kenya",
    "level": "Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "Which country is famous for safaris in the Maasai Mara?",
    "promptNl": "Welk land is beroemd om safari's in de Masai Mara?",
    "answerEn": "Kenya",
    "answerNl": "Kenia",
    "choicesEn": [
      "Kenya",
      "Tanzania",
      "South Africa"
    ],
    "choicesNl": [
      "Kenia",
      "Tanzania",
      "Zuid-Afrika"
    ],
    "detailEn": "The Maasai Mara is a reserve in south-western Kenya, about 1,500 km². It continues the Serengeti ecosystem across the border from Tanzania.",
    "detailNl": "De Maasai Mara is een reservaat in het zuidwesten van Kenia, ongeveer 1.500 km². Het zet het ecosysteem van de Serengeti voort over de grens met Tanzania."
  },
  {
    "id": "W057",
    "country": "Australia",
    "level": "Adults",
    "maps": [
      "world",
      "oceania"
    ],
    "promptEn": "Which country is home to the Great Barrier Reef?",
    "promptNl": "Welk land is de thuisbasis van het Great Barrier Reef?",
    "answerEn": "Australia",
    "answerNl": "Australië",
    "choicesEn": [
      "Australia",
      "Indonesia",
      "Philippines"
    ],
    "choicesNl": [
      "Australië",
      "Indonesië",
      "Filipijnen"
    ],
    "detailEn": "The Great Barrier Reef runs for about 2,300 km along the coast of Queensland. It is the largest coral reef system in the world.",
    "detailNl": "Het Great Barrier Reef loopt ongeveer 2.300 km langs de kust van Queensland. Het is het grootste koraalrif ter wereld."
  },
  {
    "id": "W059",
    "country": "Egypt",
    "level": "Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "In which country does the Nile reach the sea?",
    "promptNl": "In welk land stroomt de Nijl de zee in?",
    "answerEn": "Egypt",
    "answerNl": "Egypte",
    "choicesEn": [
      "Egypt",
      "Sudan",
      "Ethiopia"
    ],
    "choicesNl": [
      "Egypte",
      "Soedan",
      "Ethiopië"
    ],
    "detailEn": "The Nile is about 6,650 km long and is usually counted as the longest river in the world. It flows north through several countries and reaches the Mediterranean in Egypt.",
    "detailNl": "De Nijl is ongeveer 6.650 km lang en geldt meestal als de langste rivier ter wereld. Hij stroomt naar het noorden door meerdere landen en bereikt de Middellandse Zee in Egypte."
  },
  {
    "id": "W063",
    "country": "Panama",
    "level": "Adults",
    "maps": [
      "world",
      "central-america"
    ],
    "promptEn": "In which country is the Panama Canal?",
    "promptNl": "In welk land ligt het Panamakanaal?",
    "answerEn": "Panama",
    "answerNl": "Panama",
    "choicesEn": [
      "Panama",
      "Egypt",
      "Nicaragua"
    ],
    "choicesNl": [
      "Panama",
      "Egypte",
      "Nicaragua"
    ],
    "detailEn": "The Panama Canal opened in 1914 and is about 82 km long. It links the Atlantic and the Pacific, so ships do not have to sail around South America.",
    "detailNl": "Het Panamakanaal opende in 1914 en is ongeveer 82 km lang. Het verbindt de Atlantische Oceaan met de Stille Oceaan, zodat schepen niet om Zuid-Amerika hoeven te varen."
  },
  {
    "id": "W064",
    "country": "Egypt",
    "level": "Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "In which country is the Suez Canal?",
    "promptNl": "In welk land ligt het Suezkanaal?",
    "answerEn": "Egypt",
    "answerNl": "Egypte",
    "choicesEn": [
      "Egypt",
      "Panama",
      "Saudi Arabia"
    ],
    "choicesNl": [
      "Egypte",
      "Panama",
      "Saoedi-Arabië"
    ],
    "detailEn": "The Suez Canal opened in 1869 and is about 193 km long. It links the Mediterranean and the Red Sea, so ships can pass between Europe and Asia without sailing around Africa.",
    "detailNl": "Het Suezkanaal opende in 1869 en is ongeveer 193 km lang. Het verbindt de Middellandse Zee met de Rode Zee, zodat schepen tussen Europa en Azië kunnen varen zonder Afrika te ronden."
  },
  {
    "id": "W066",
    "country": "Ethiopia",
    "level": "Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "Which country is famous as the birthplace of coffee?",
    "promptNl": "Welk land is beroemd als de geboorteplaats van koffie?",
    "answerEn": "Ethiopia",
    "answerNl": "Ethiopië",
    "choicesEn": [
      "Ethiopia",
      "Brazil",
      "Yemen"
    ],
    "choicesNl": [
      "Ethiopië",
      "Brazilië",
      "Jemen"
    ],
    "detailEn": "Arabica coffee comes from the highlands of Ethiopia. Ethiopia is still a major grower, about fifth in the world, but Brazil grows the most.",
    "detailNl": "Arabicakoffie komt uit de hooglanden van Ethiopië. Ethiopië is nog steeds een grote teler, ongeveer de vijfde ter wereld, maar Brazilië teelt de meeste."
  },
  {
    "id": "W068",
    "country": "Colombia",
    "level": "Adults",
    "maps": [
      "world",
      "south-america"
    ],
    "promptEn": "Which South American country is especially famous for its coffee?",
    "promptNl": "Welk Zuid-Amerikaans land is extra beroemd om zijn koffie?",
    "answerEn": "Colombia",
    "answerNl": "Colombia",
    "choicesEn": [
      "Colombia",
      "Brazil",
      "Ethiopia"
    ],
    "choicesNl": [
      "Colombia",
      "Brazilië",
      "Ethiopië"
    ],
    "detailEn": "Colombia is the third-largest coffee grower, with about 13 million 60-kg bags in 2025/26, behind Brazil and Vietnam. It is known for washed arabica.",
    "detailNl": "Colombia is de op twee na grootste koffieteler, met ongeveer 13 miljoen zakken van 60 kg in 2025/26, na Brazilië en Vietnam. Het land staat bekend om gewassen arabica."
  },
  {
    "id": "W069",
    "country": "Chile",
    "level": "Smart Adults",
    "maps": [
      "world",
      "south-america"
    ],
    "promptEn": "Which country does Easter Island belong to?",
    "promptNl": "Bij welk land hoort Paaseiland?",
    "answerEn": "Chile",
    "answerNl": "Chili",
    "choicesEn": [
      "Chile",
      "Peru",
      "Ecuador",
      "France",
      "New Zealand"
    ],
    "choicesNl": [
      "Chili",
      "Peru",
      "Ecuador",
      "Frankrijk",
      "Nieuw-Zeeland"
    ],
    "detailEn": "Easter Island, or Rapa Nui, has been part of Chile since 1888. It lies about 3,700 km west of the Chilean mainland. The stone figures are called moai.",
    "detailNl": "Paaseiland, of Rapa Nui, hoort sinds 1888 bij Chili. Het ligt ongeveer 3.700 km ten westen van het Chileense vasteland. De stenen beelden heten moai."
  },
  {
    "id": "W070",
    "country": "Ecuador",
    "level": "Adults",
    "maps": [
      "world",
      "south-america"
    ],
    "promptEn": "Which country do the Galapagos Islands belong to?",
    "promptNl": "Bij welk land horen de Galapagoseilanden?",
    "answerEn": "Ecuador",
    "answerNl": "Ecuador",
    "choicesEn": [
      "Ecuador",
      "Chile",
      "Peru"
    ],
    "choicesNl": [
      "Ecuador",
      "Chili",
      "Peru"
    ],
    "detailEn": "The Galápagos Islands belong to Ecuador and lie about 1,000 km off the coast. Charles Darwin visited them in 1835, and the animals there helped shape his ideas about evolution.",
    "detailNl": "De Galapagoseilanden horen bij Ecuador en liggen ongeveer 1.000 km uit de kust. Charles Darwin bezocht ze in 1835, en de dieren daar hielpen zijn ideeën over evolutie vormen."
  },
  {
    "id": "W071",
    "country": "Madagascar",
    "level": "Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "Which island country is the only place where lemurs live in the wild?",
    "promptNl": "Welk eilandland is de enige plek waar maki's in het wild leven?",
    "answerEn": "Madagascar",
    "answerNl": "Madagaskar",
    "choicesEn": [
      "Madagascar",
      "Indonesia",
      "Australia"
    ],
    "choicesNl": [
      "Madagaskar",
      "Indonesië",
      "Australië"
    ],
    "detailEn": "Lemurs live in the wild only on Madagascar. There are about 100 living species, and almost all of them are threatened.",
    "detailNl": "Maki's leven in het wild alleen op Madagaskar. Er zijn ongeveer 100 levende soorten, en bijna allemaal worden ze bedreigd."
  },
  {
    "id": "W072",
    "country": "Qatar",
    "level": "Adults",
    "maps": [
      "world",
      "middle-east"
    ],
    "promptEn": "Which country hosted the 2022 football World Cup?",
    "promptNl": "Welk land organiseerde het wereldkampioenschap voetbal van 2022?",
    "answerEn": "Qatar",
    "answerNl": "Qatar",
    "choicesEn": [
      "Qatar",
      "Russia",
      "Brazil"
    ],
    "choicesNl": [
      "Qatar",
      "Rusland",
      "Brazilië"
    ],
    "detailEn": "Qatar hosted the men's World Cup in November and December 2022, the first World Cup in the Middle East. Argentina won the final against France.",
    "detailNl": "Qatar organiseerde het wereldkampioenschap voetbal voor mannen in november en december 2022, het eerste WK in het Midden-Oosten. Argentinië won de finale van Frankrijk."
  },
  {
    "id": "W073",
    "country": "Malaysia",
    "level": "Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "In which country are the Petronas Towers?",
    "promptNl": "In welk land staan de Petronas Towers?",
    "answerEn": "Malaysia",
    "answerNl": "Maleisië",
    "choicesEn": [
      "Malaysia",
      "Singapore",
      "United Arab Emirates"
    ],
    "choicesNl": [
      "Maleisië",
      "Singapore",
      "Verenigde Arabische Emiraten"
    ],
    "detailEn": "The Petronas Towers in Kuala Lumpur are 452 metres tall and were completed in 1998. From 1998 to 2004 they were the tallest buildings in the world.",
    "detailNl": "De Petronas Towers in Kuala Lumpur zijn 452 meter hoog en werden in 1998 voltooid. Van 1998 tot 2004 waren ze de hoogste gebouwen ter wereld."
  },
  {
    "id": "W074",
    "country": "Vietnam",
    "level": "Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which country is home to Ha Long Bay?",
    "promptNl": "Welk land is de thuisbasis van de Ha Longbaai?",
    "answerEn": "Vietnam",
    "answerNl": "Vietnam",
    "choicesEn": [
      "Vietnam",
      "Thailand",
      "Philippines"
    ],
    "choicesNl": [
      "Vietnam",
      "Thailand",
      "Filipijnen"
    ],
    "detailEn": "Ha Long Bay, in northern Vietnam, has roughly 1,600 limestone islands and islets rising from the sea. It is a UNESCO World Heritage Site.",
    "detailNl": "De baai van Ha Long, in het noorden van Vietnam, heeft ongeveer 1.600 kalksteeneilanden en rotspunten in zee. De baai staat op de Werelderfgoedlijst van UNESCO."
  },
  {
    "id": "W075",
    "country": "Myanmar",
    "level": "Smart Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which country is home to the temples of Bagan?",
    "promptNl": "Welk land is de thuisbasis van de tempels van Bagan?",
    "answerEn": "Myanmar",
    "answerNl": "Myanmar",
    "choicesEn": [
      "Myanmar",
      "Cambodia",
      "Thailand",
      "Laos",
      "Indonesia"
    ],
    "choicesNl": [
      "Myanmar",
      "Cambodja",
      "Thailand",
      "Laos",
      "Indonesië"
    ],
    "detailEn": "Bagan, on a plain in Myanmar, has more than 2,000 Buddhist temples and stupas. Most were built between the 11th and 13th centuries.",
    "detailNl": "Bagan, op een vlakte in Myanmar, heeft meer dan 2.000 boeddhistische tempels en stoepa's. De meeste zijn gebouwd tussen de 11e en de 13e eeuw."
  },
  {
    "id": "W076",
    "country": "Thailand",
    "level": "Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which country is a kingdom famous for Buddhist temples and the city of Bangkok?",
    "promptNl": "Welk koninkrijk is beroemd om boeddhistische tempels en de stad Bangkok?",
    "answerEn": "Thailand",
    "answerNl": "Thailand",
    "choicesEn": [
      "Thailand",
      "Cambodia",
      "Myanmar"
    ],
    "choicesNl": [
      "Thailand",
      "Cambodja",
      "Myanmar"
    ],
    "detailEn": "Thailand is a kingdom, and Bangkok is the capital. More than 90% of the population is Buddhist.",
    "detailNl": "Thailand is een koninkrijk, en Bangkok is de hoofdstad. Meer dan 90% van de bevolking is boeddhistisch."
  },
  {
    "id": "W078",
    "country": "Sweden",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country awards the Nobel Prizes in physics, chemistry, and literature?",
    "promptNl": "Welk land reikt de Nobelprijzen voor natuurkunde, scheikunde en literatuur uit?",
    "answerEn": "Sweden",
    "answerNl": "Zweden",
    "choicesEn": [
      "Sweden",
      "Norway",
      "Switzerland"
    ],
    "choicesNl": [
      "Zweden",
      "Noorwegen",
      "Zwitserland"
    ],
    "detailEn": "The Nobel Prizes in physics, chemistry, medicine and literature are awarded in Stockholm. The peace prize is the exception and is awarded in Oslo. Alfred Nobel was a Swedish chemist and inventor.",
    "detailNl": "De Nobelprijzen voor natuurkunde, scheikunde, geneeskunde en literatuur worden in Stockholm uitgereikt. De vredesprijs is de uitzondering en wordt in Oslo uitgereikt. Alfred Nobel was een Zweedse scheikundige en uitvinder."
  },
  {
    "id": "W080",
    "country": "Hungary",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is famous for goulash and the city of Budapest?",
    "promptNl": "Welk land is beroemd om goulash en de stad Boedapest?",
    "answerEn": "Hungary",
    "answerNl": "Hongarije",
    "choicesEn": [
      "Hungary",
      "Austria",
      "Czechia"
    ],
    "choicesNl": [
      "Hongarije",
      "Oostenrijk",
      "Tsjechië"
    ],
    "detailEn": "Goulash is a paprika stew from Hungary. Budapest is split by the Danube into Buda and Pest, which were joined as one city in 1873.",
    "detailNl": "Goulash is een paprikastoofpot uit Hongarije. Boedapest wordt door de Donau verdeeld in Boeda en Pest, die in 1873 één stad werden."
  },
  {
    "id": "W081",
    "country": "Czechia",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is home to Prague Castle?",
    "promptNl": "Welk land is de thuisbasis van de Praagse Burcht?",
    "answerEn": "Czechia",
    "answerNl": "Tsjechië",
    "choicesEn": [
      "Czechia",
      "Austria",
      "Hungary"
    ],
    "choicesNl": [
      "Tsjechië",
      "Oostenrijk",
      "Hongarije"
    ],
    "detailEn": "Prague Castle has been the seat of Czech rulers for more than a thousand years. Guinness World Records calls it the largest ancient castle complex, at about 70,000 m².",
    "detailNl": "De Praagse Burcht is al meer dan duizend jaar de zetel van Tsjechische heersers. Guinness World Records noemt het de grootste oude burcht, met ongeveer 70.000 m²."
  },
  {
    "id": "W082",
    "country": "Romania",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is associated with the Dracula stories and Transylvania?",
    "promptNl": "Welk land hoort bij de Dracula-verhalen en Transsylvanië?",
    "answerEn": "Romania",
    "answerNl": "Roemenië",
    "choicesEn": [
      "Romania",
      "Hungary",
      "Bulgaria"
    ],
    "choicesNl": [
      "Roemenië",
      "Hongarije",
      "Bulgarije"
    ],
    "detailEn": "Transylvania is a region in central Romania. The Dracula stories draw on Vlad the Impaler, a 15th-century ruler of Wallachia, the region next to Transylvania.",
    "detailNl": "Transsylvanië is een streek in het midden van Roemenië. De Draculaverhalen leunen op Vlad de Spietser, een 15e-eeuwse heerser van Walachije, de streek naast Transsylvanië."
  },
  {
    "id": "W083",
    "country": "Croatia",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country is home to Dubrovnik, the walled city on the Adriatic?",
    "promptNl": "Welk land is de thuisbasis van Dubrovnik, de ommuurde stad aan de Adriatische Zee?",
    "answerEn": "Croatia",
    "answerNl": "Kroatië",
    "choicesEn": [
      "Croatia",
      "Italy",
      "Greece"
    ],
    "choicesNl": [
      "Kroatië",
      "Italië",
      "Griekenland"
    ],
    "detailEn": "Dubrovnik's city walls run for about 2 km around the old town. The city stands on the Adriatic coast of Croatia.",
    "detailNl": "De stadsmuren van Dubrovnik lopen ongeveer 2 km rond de oude stad. De stad ligt aan de Adriatische kust van Kroatië."
  },
  {
    "id": "W086",
    "country": "Denmark",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country has the Little Mermaid statue in its capital?",
    "promptNl": "Welk land heeft het beeld van de Kleine Zeemeermin in de hoofdstad?",
    "answerEn": "Denmark",
    "answerNl": "Denemarken",
    "choicesEn": [
      "Denmark",
      "Netherlands",
      "Sweden"
    ],
    "choicesNl": [
      "Denemarken",
      "Nederland",
      "Zweden"
    ],
    "detailEn": "The Little Mermaid sits on a rock in Copenhagen harbour. The bronze statue was unveiled in 1913 and is based on the fairy tale by Hans Christian Andersen.",
    "detailNl": "De Kleine Zeemeermin zit op een rots in de haven van Kopenhagen. Het bronzen beeld werd in 1913 onthuld en is gebaseerd op het sprookje van Hans Christian Andersen."
  },
  {
    "id": "W087",
    "country": "Botswana",
    "level": "Smart Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "Which country is home to the Okavango Delta?",
    "promptNl": "Welk land is de thuisbasis van de Okavango-delta?",
    "answerEn": "Botswana",
    "answerNl": "Botswana",
    "choicesEn": [
      "Botswana",
      "Namibia",
      "Zambia",
      "Angola",
      "Zimbabwe"
    ],
    "choicesNl": [
      "Botswana",
      "Namibië",
      "Zambia",
      "Angola",
      "Zimbabwe"
    ],
    "detailEn": "The Okavango Delta is a huge inland delta in northern Botswana. The river does not reach the sea. It floods the desert in the dry season, when rain from Angola arrives.",
    "detailNl": "De Okavango-delta is een enorme binnenlandse delta in het noorden van Botswana. De rivier bereikt de zee niet. Hij zet de woestijn onder water in het droge seizoen, als de regen uit Angola aankomt."
  },
  {
    "id": "W088",
    "country": "Tunisia",
    "level": "Smart Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "In which country is the ancient city of Carthage?",
    "promptNl": "In welk land ligt de oude stad Carthago?",
    "answerEn": "Tunisia",
    "answerNl": "Tunesië",
    "choicesEn": [
      "Tunisia",
      "Italy",
      "Lebanon",
      "Libya",
      "Egypt"
    ],
    "choicesNl": [
      "Tunesië",
      "Italië",
      "Libanon",
      "Libië",
      "Egypte"
    ],
    "detailEn": "Carthage was a great Phoenician city, founded in the 9th century BC, and later Rome's rival. Its ruins are now a suburb of Tunis.",
    "detailNl": "Carthago was een grote Fenicische stad, gesticht in de 9e eeuw v.Chr., en later de rivaal van Rome. De ruïnes liggen nu in een voorstad van Tunis."
  },
  {
    "id": "W089",
    "country": "Iran",
    "level": "Smart Adults",
    "maps": [
      "world",
      "middle-east"
    ],
    "promptEn": "In which country is the ancient city of Persepolis?",
    "promptNl": "In welk land ligt de oude stad Persepolis?",
    "answerEn": "Iran",
    "answerNl": "Iran",
    "choicesEn": [
      "Iran",
      "Iraq",
      "Egypt",
      "Greece",
      "Turkey"
    ],
    "choicesNl": [
      "Iran",
      "Irak",
      "Egypte",
      "Griekenland",
      "Turkije"
    ],
    "detailEn": "Persepolis was a ceremonial capital of the Persian Empire. King Darius I began it around 518 BC. Alexander the Great's army burned it in 330 BC.",
    "detailNl": "Persepolis was een ceremoniële hoofdstad van het Perzische Rijk. Koning Darius I begon de bouw rond 518 v.Chr. Het leger van Alexander de Grote brandde de stad in 330 v.Chr. plat."
  },
  {
    "id": "W090",
    "country": "Iraq",
    "level": "Smart Adults",
    "maps": [
      "world",
      "middle-east"
    ],
    "promptEn": "Which country is home to ancient Babylon and the city of Baghdad?",
    "promptNl": "Welk land is de thuisbasis van het oude Babylon en de stad Bagdad?",
    "answerEn": "Iraq",
    "answerNl": "Irak",
    "choicesEn": [
      "Iraq",
      "Iran",
      "Syria",
      "Egypt",
      "Israel"
    ],
    "choicesNl": [
      "Irak",
      "Iran",
      "Syrië",
      "Egypte",
      "Israël"
    ],
    "detailEn": "Babylon was one of the great cities of ancient Mesopotamia. Its ruins lie about 85 km south of Baghdad, near the modern town of Hillah.",
    "detailNl": "Babylon was een van de grote steden van het oude Mesopotamië. De ruïnes liggen ongeveer 85 km ten zuiden van Bagdad, bij de huidige stad Hillah."
  },
  {
    "id": "W091",
    "country": "Lebanon",
    "level": "Smart Adults",
    "maps": [
      "world",
      "middle-east"
    ],
    "promptEn": "Which country has a cedar tree on its flag and the city of Beirut?",
    "promptNl": "Welk land heeft een cederboom op de vlag en de stad Beiroet?",
    "answerEn": "Lebanon",
    "answerNl": "Libanon",
    "choicesEn": [
      "Lebanon",
      "Syria",
      "Cyprus",
      "Turkey",
      "Israel"
    ],
    "choicesNl": [
      "Libanon",
      "Syrië",
      "Cyprus",
      "Turkije",
      "Israël"
    ],
    "detailEn": "The cedar of Lebanon is on the national flag. The tree once covered the mountains and is now rare. Beirut is the capital.",
    "detailNl": "De ceder van Libanon staat op de nationale vlag. De boom bedekte ooit de bergen en is nu zeldzaam. Beiroet is de hoofdstad."
  },
  {
    "id": "W092",
    "country": "Israel",
    "level": "Adults",
    "maps": [
      "world",
      "middle-east"
    ],
    "promptEn": "In which country is the Western Wall in Jerusalem?",
    "promptNl": "In welk land staat de Klaagmuur in Jeruzalem?",
    "answerEn": "Israel",
    "answerNl": "Israël",
    "choicesEn": [
      "Israel",
      "Jordan",
      "Egypt"
    ],
    "choicesNl": [
      "Israël",
      "Jordanië",
      "Egypte"
    ],
    "detailEn": "The Western Wall in Jerusalem is a remaining section of the retaining wall of the Second Temple, expanded by Herod in the 1st century BC. It is the holiest place where Jews may pray.",
    "detailNl": "De Klaagmuur in Jeruzalem is een restant van de keermuur van de Tweede Tempel, uitgebreid door Herodes in de 1e eeuw v.Chr. Het is de heiligste plek waar joden mogen bidden."
  },
  {
    "id": "W093",
    "country": "South Africa",
    "level": "Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "Which country is home to Table Mountain and Kruger National Park?",
    "promptNl": "Welk land is de thuisbasis van de Tafelberg en het Krugerpark?",
    "answerEn": "South Africa",
    "answerNl": "Zuid-Afrika",
    "choicesEn": [
      "South Africa",
      "Kenya",
      "Tanzania"
    ],
    "choicesNl": [
      "Zuid-Afrika",
      "Kenia",
      "Tanzania"
    ],
    "detailEn": "Table Mountain rises 1,085 metres above Cape Town. Kruger National Park, in the north-east, is one of Africa's largest game reserves, at about 20,000 km².",
    "detailNl": "De Tafelberg rijst 1.085 meter op boven Kaapstad. Het Krugerpark, in het noordoosten, is een van de grootste wildparken van Afrika, ongeveer 20.000 km²."
  },
  {
    "id": "W094",
    "country": "Ghana",
    "level": "Smart Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "Which West African country was once called the Gold Coast?",
    "promptNl": "Welk West-Afrikaans land heette vroeger de Goudkust?",
    "answerEn": "Ghana",
    "answerNl": "Ghana",
    "choicesEn": [
      "Ghana",
      "Nigeria",
      "Côte d'Ivoire",
      "Senegal",
      "Mali"
    ],
    "choicesNl": [
      "Ghana",
      "Nigeria",
      "Ivoorkust",
      "Senegal",
      "Mali"
    ],
    "detailEn": "European traders called the coast the Gold Coast because of its gold. The British colony became independent as Ghana on 6 March 1957, the first country in sub-Saharan Africa to do so.",
    "detailNl": "Europese handelaren noemden de kust de Goudkust vanwege het goud. De Britse kolonie werd op 6 maart 1957 onafhankelijk als Ghana, als eerste land in Afrika ten zuiden van de Sahara."
  },
  {
    "id": "W095",
    "country": "Philippines",
    "level": "Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which Asian country is made up of more than 7,000 islands and has Manila as its capital?",
    "promptNl": "Welk Aziatisch land bestaat uit meer dan 7.000 eilanden en heeft Manilla als hoofdstad?",
    "answerEn": "Philippines",
    "answerNl": "Filipijnen",
    "choicesEn": [
      "Philippines",
      "Indonesia",
      "Japan"
    ],
    "choicesNl": [
      "Filipijnen",
      "Indonesië",
      "Japan"
    ],
    "detailEn": "The Philippines is an archipelago of about 7,600 islands. Manila, on Luzon, is the capital, and the country has about 118 million people.",
    "detailNl": "De Filipijnen zijn een eilandengroep van ongeveer 7.600 eilanden. Manilla, op Luzon, is de hoofdstad, en het land heeft ongeveer 118 miljoen inwoners."
  },
  {
    "id": "W175",
    "country": "Egypt",
    "level": "Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "In which country are the Pyramids of Giza?",
    "promptNl": "In welk land staan de piramiden van Gizeh?",
    "answerEn": "Egypt",
    "answerNl": "Egypte",
    "choicesEn": [
      "Egypt",
      "Sudan",
      "Mexico"
    ],
    "choicesNl": [
      "Egypte",
      "Soedan",
      "Mexico"
    ],
    "detailEn": "The Pyramids of Giza stand on the edge of Cairo. Sudan has more pyramids, at Nubian sites, and Mexico has Maya pyramids, but the Great Pyramid of Khufu is in Egypt.",
    "detailNl": "De piramiden van Gizeh staan aan de rand van Caïro. Soedan heeft meer piramiden, op Nubische plekken, en Mexico heeft Mayapiramiden, maar de Grote Piramide van Cheops staat in Egypte."
  },
  {
    "id": "W176",
    "country": "Egypt",
    "level": "Smart Adults",
    "maps": [
      "world",
      "africa"
    ],
    "promptEn": "Which country is home to the Great Pyramid of Khufu?",
    "promptNl": "Welk land heeft de Grote Piramide van Cheops?",
    "answerEn": "Egypt",
    "answerNl": "Egypte",
    "choicesEn": [
      "Egypt",
      "Sudan",
      "Mexico",
      "Peru",
      "Guatemala"
    ],
    "choicesNl": [
      "Egypte",
      "Soedan",
      "Mexico",
      "Peru",
      "Guatemala"
    ],
    "detailEn": "The Great Pyramid was built for Khufu around 2560 BC and was originally about 146 metres tall. It stands at Giza, in Egypt.",
    "detailNl": "De Grote Piramide is rond 2560 v.Chr. gebouwd voor Cheops en was oorspronkelijk ongeveer 146 meter hoog. Hij staat in Gizeh, in Egypte."
  },
  {
    "id": "W177",
    "country": "France",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "In which country is the Eiffel Tower?",
    "promptNl": "In welk land staat de Eiffeltoren?",
    "answerEn": "France",
    "answerNl": "Frankrijk",
    "choicesEn": [
      "France",
      "Belgium",
      "Italy"
    ],
    "choicesNl": [
      "Frankrijk",
      "België",
      "Italië"
    ],
    "detailEn": "The Eiffel Tower was built for the 1889 World's Fair in Paris. With its antenna it is 330 metres tall.",
    "detailNl": "De Eiffeltoren is gebouwd voor de wereldtentoonstelling van 1889 in Parijs. Met de antenne is hij 330 meter hoog."
  },
  {
    "id": "W178",
    "country": "France",
    "level": "Smart Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "In which country was the Eiffel Tower built for the 1889 World's Fair?",
    "promptNl": "In welk land is de Eiffeltoren voor de wereldtentoonstelling van 1889 gebouwd?",
    "answerEn": "France",
    "answerNl": "Frankrijk",
    "choicesEn": [
      "France",
      "Belgium",
      "United Kingdom",
      "Italy",
      "Germany"
    ],
    "choicesNl": [
      "Frankrijk",
      "België",
      "Verenigd Koninkrijk",
      "Italië",
      "Duitsland"
    ],
    "detailEn": "The Eiffel Tower was built for the 1889 World's Fair in Paris. With its antenna it is 330 metres tall.",
    "detailNl": "De Eiffeltoren is gebouwd voor de wereldtentoonstelling van 1889 in Parijs. Met de antenne is hij 330 meter hoog."
  },
  {
    "id": "W179",
    "country": "Italy",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "In which country is the Colosseum?",
    "promptNl": "In welk land staat het Colosseum?",
    "answerEn": "Italy",
    "answerNl": "Italië",
    "choicesEn": [
      "Italy",
      "Greece",
      "Spain"
    ],
    "choicesNl": [
      "Italië",
      "Griekenland",
      "Spanje"
    ],
    "detailEn": "The Colosseum in Rome opened in AD 80 and could hold about 50,000 spectators.",
    "detailNl": "Het Colosseum in Rome opende in het jaar 80 en kon ongeveer 50.000 toeschouwers houden."
  },
  {
    "id": "W180",
    "country": "Italy",
    "level": "Smart Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "In which country is the Colosseum?",
    "promptNl": "In welk land staat het Colosseum?",
    "answerEn": "Italy",
    "answerNl": "Italië",
    "choicesEn": [
      "Italy",
      "Greece",
      "Tunisia",
      "Spain",
      "Turkey"
    ],
    "choicesNl": [
      "Italië",
      "Griekenland",
      "Tunesië",
      "Spanje",
      "Turkije"
    ],
    "detailEn": "The Colosseum in Rome opened in AD 80 and could hold about 50,000 spectators.",
    "detailNl": "Het Colosseum in Rome opende in het jaar 80 en kon ongeveer 50.000 toeschouwers houden."
  },
  {
    "id": "W181",
    "country": "Peru",
    "level": "Adults",
    "maps": [
      "world",
      "south-america"
    ],
    "promptEn": "In which country is Machu Picchu?",
    "promptNl": "In welk land ligt Machu Picchu?",
    "answerEn": "Peru",
    "answerNl": "Peru",
    "choicesEn": [
      "Peru",
      "Bolivia",
      "Ecuador"
    ],
    "choicesNl": [
      "Peru",
      "Bolivia",
      "Ecuador"
    ],
    "detailEn": "Machu Picchu is an Inca city in the Andes of Peru, about 2,430 metres above sea level. It was built in the 15th century.",
    "detailNl": "Machu Picchu is een Incastad in de Andes van Peru, op ongeveer 2.430 meter hoogte. De stad is in de 15e eeuw gebouwd."
  },
  {
    "id": "W182",
    "country": "Peru",
    "level": "Smart Adults",
    "maps": [
      "world",
      "south-america"
    ],
    "promptEn": "In which country is the Inca city of Machu Picchu?",
    "promptNl": "In welk land ligt de Incastad Machu Picchu?",
    "answerEn": "Peru",
    "answerNl": "Peru",
    "choicesEn": [
      "Peru",
      "Bolivia",
      "Ecuador",
      "Chile",
      "Colombia"
    ],
    "choicesNl": [
      "Peru",
      "Bolivia",
      "Ecuador",
      "Chili",
      "Colombia"
    ],
    "detailEn": "Machu Picchu is an Inca city in the Andes of Peru, about 2,430 metres above sea level.",
    "detailNl": "Machu Picchu is een Incastad in de Andes van Peru, op ongeveer 2.430 meter hoogte."
  },
  {
    "id": "W183",
    "country": "China",
    "level": "Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "In which country is the Great Wall?",
    "promptNl": "In welk land staat de Grote Muur?",
    "answerEn": "China",
    "answerNl": "China",
    "choicesEn": [
      "China",
      "Mongolia",
      "North Korea"
    ],
    "choicesNl": [
      "China",
      "Mongolië",
      "Noord-Korea"
    ],
    "detailEn": "The Great Wall is not one single wall. A Chinese survey put the full system at more than 21,000 km. Parts run near Mongolia and towards the Korean peninsula, but the wall is in China.",
    "detailNl": "De Grote Muur is niet één doorlopende muur. Een Chinees onderzoek schatte het hele stelsel op meer dan 21.000 km. Delen lopen bij Mongolië en richting het Koreaanse schiereiland, maar de muur ligt in China."
  },
  {
    "id": "W184",
    "country": "China",
    "level": "Smart Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "Which country built the wall system of more than 21,000 km that people call the Great Wall?",
    "promptNl": "Welk land bouwde het muurstel van meer dan 21.000 km dat de Grote Muur wordt genoemd?",
    "answerEn": "China",
    "answerNl": "China",
    "choicesEn": [
      "China",
      "Mongolia",
      "North Korea",
      "India",
      "Vietnam"
    ],
    "choicesNl": [
      "China",
      "Mongolië",
      "Noord-Korea",
      "India",
      "Vietnam"
    ],
    "detailEn": "A Chinese survey put the full system of walls, trenches and natural barriers at more than 21,000 km, built across many dynasties.",
    "detailNl": "Een Chinees onderzoek schatte het hele stelsel van muren, greppels en natuurlijke barrières op meer dan 21.000 km, gebouwd over veel dynastieën."
  },
  {
    "id": "W185",
    "country": "Greece",
    "level": "Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country began the ancient Olympic Games?",
    "promptNl": "Welk land begon de Olympische Spelen in de oudheid?",
    "answerEn": "Greece",
    "answerNl": "Griekenland",
    "choicesEn": [
      "Greece",
      "Italy",
      "France"
    ],
    "choicesNl": [
      "Griekenland",
      "Italië",
      "Frankrijk"
    ],
    "detailEn": "The first recorded Olympic Games were held in Olympia in 776 BC.",
    "detailNl": "De eerste vastgelegde Olympische Spelen waren in 776 v.Chr. in Olympia."
  },
  {
    "id": "W186",
    "country": "Greece",
    "level": "Smart Adults",
    "maps": [
      "world",
      "eu"
    ],
    "promptEn": "Which country held the first recorded Olympic Games, in 776 BC?",
    "promptNl": "Welk land hield de eerste vastgelegde Olympische Spelen, in 776 v.Chr.?",
    "answerEn": "Greece",
    "answerNl": "Griekenland",
    "choicesEn": [
      "Greece",
      "Italy",
      "France",
      "United Kingdom",
      "Japan"
    ],
    "choicesNl": [
      "Griekenland",
      "Italië",
      "Frankrijk",
      "Verenigd Koninkrijk",
      "Japan"
    ],
    "detailEn": "The first recorded Olympic Games were held in Olympia, in Greece, in 776 BC. Italy, France, the United Kingdom and Japan have hosted modern Games.",
    "detailNl": "De eerste vastgelegde Olympische Spelen waren in 776 v.Chr. in Olympia, in Griekenland. Italië, Frankrijk, het Verenigd Koninkrijk en Japan hebben moderne Spelen georganiseerd."
  },
  {
    "id": "W187",
    "country": "Australia",
    "level": "Adults",
    "maps": [
      "world",
      "oceania"
    ],
    "promptEn": "Which country is also a continent and is home to kangaroos?",
    "promptNl": "Welk land is ook een continent en is het thuis van kangoeroes?",
    "answerEn": "Australia",
    "answerNl": "Australië",
    "choicesEn": [
      "Australia",
      "Papua New Guinea",
      "New Zealand"
    ],
    "choicesNl": [
      "Australië",
      "Papoea-Nieuw-Guinea",
      "Nieuw-Zeeland"
    ],
    "detailEn": "Australia is the only country that is also a continent, and it covers about 7.7 million km². Tree-kangaroos also live on the island of New Guinea.",
    "detailNl": "Australië is het enige land dat ook een continent is, en het beslaat ongeveer 7,7 miljoen km². Boomkangoeroes leven ook op het eiland Nieuw-Guinea."
  },
  {
    "id": "W188",
    "country": "Australia",
    "level": "Smart Adults",
    "maps": [
      "world",
      "oceania"
    ],
    "promptEn": "Which country is both a continent and the main home of kangaroos?",
    "promptNl": "Welk land is zowel een continent als het belangrijkste thuis van kangoeroes?",
    "answerEn": "Australia",
    "answerNl": "Australië",
    "choicesEn": [
      "Australia",
      "Papua New Guinea",
      "Indonesia",
      "New Zealand",
      "Madagascar"
    ],
    "choicesNl": [
      "Australië",
      "Papoea-Nieuw-Guinea",
      "Indonesië",
      "Nieuw-Zeeland",
      "Madagaskar"
    ],
    "detailEn": "Australia is the only country that is also a continent. It covers about 7.7 million km². Tree-kangaroos also live on New Guinea, which belongs to Papua New Guinea and Indonesia.",
    "detailNl": "Australië is het enige land dat ook een continent is. Het beslaat ongeveer 7,7 miljoen km². Boomkangoeroes leven ook op Nieuw-Guinea, dat bij Papoea-Nieuw-Guinea en Indonesië hoort."
  },
  {
    "id": "W189",
    "country": "United States",
    "level": "Adults",
    "maps": [
      "world",
      "north-america",
      "united-states"
    ],
    "promptEn": "In which country does the Statue of Liberty stand?",
    "promptNl": "In welk land staat het Vrijheidsbeeld?",
    "answerEn": "United States",
    "answerNl": "Verenigde Staten",
    "choicesEn": [
      "United States",
      "France",
      "United Kingdom"
    ],
    "choicesNl": [
      "Verenigde Staten",
      "Frankrijk",
      "Verenigd Koninkrijk"
    ],
    "detailEn": "The Statue of Liberty stands in New York Harbor. France gave it to the United States, and it was dedicated in 1886.",
    "detailNl": "Het Vrijheidsbeeld staat in de haven van New York. Frankrijk gaf het aan de Verenigde Staten, en het werd in 1886 onthuld."
  },
  {
    "id": "W190",
    "country": "India",
    "level": "Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "In which country is the Taj Mahal?",
    "promptNl": "In welk land staat de Taj Mahal?",
    "answerEn": "India",
    "answerNl": "India",
    "choicesEn": [
      "India",
      "Pakistan",
      "Bangladesh"
    ],
    "choicesNl": [
      "India",
      "Pakistan",
      "Bangladesh"
    ],
    "detailEn": "The Taj Mahal is in Agra, in India. Emperor Shah Jahan had it built between 1632 and 1653.",
    "detailNl": "De Taj Mahal staat in Agra, in India. Keizer Shah Jahan liet hem tussen 1632 en 1653 bouwen."
  },
  {
    "id": "W191",
    "country": "India",
    "level": "Smart Adults",
    "maps": [
      "world",
      "asia"
    ],
    "promptEn": "In which country did Shah Jahan build the Taj Mahal?",
    "promptNl": "In welk land liet Shah Jahan de Taj Mahal bouwen?",
    "answerEn": "India",
    "answerNl": "India",
    "choicesEn": [
      "India",
      "Pakistan",
      "Bangladesh",
      "Iran",
      "Turkey"
    ],
    "choicesNl": [
      "India",
      "Pakistan",
      "Bangladesh",
      "Iran",
      "Turkije"
    ],
    "detailEn": "The Taj Mahal is in Agra, in India. It was built between 1632 and 1653 as a tomb for Mumtaz Mahal.",
    "detailNl": "De Taj Mahal staat in Agra, in India. Hij is tussen 1632 en 1653 gebouwd als graf voor Mumtaz Mahal."
  },
  {
    "id": "W670",
    "country": "Netherlands",
    "level": "Kids",
    "maps": [
      "world",
      "eu",
      "netherlands"
    ],
    "promptEn": "What is the capital of the Netherlands?",
    "promptNl": "Wat is de hoofdstad van Nederland?",
    "answerEn": "Amsterdam",
    "answerNl": "Amsterdam",
    "choicesEn": [
      "Moscow",
      "Amsterdam",
      "Bern"
    ],
    "choicesNl": [
      "Moskou",
      "Amsterdam",
      "Bern"
    ],
    "detailEn": "Amsterdam is the capital of the Netherlands.",
    "detailNl": "Amsterdam is de hoofdstad van Nederland."
  },
  {
    "id": "W734",
    "country": "United States",
    "level": "Kids",
    "maps": [
      "world",
      "north-america",
      "united-states"
    ],
    "promptEn": "What is the capital of the United States?",
    "promptNl": "Wat is de hoofdstad van de Verenigde Staten?",
    "answerEn": "Washington",
    "answerNl": "Washington",
    "choicesEn": [
      "Copenhagen",
      "Brussels",
      "Washington"
    ],
    "choicesNl": [
      "Kopenhagen",
      "Brussel",
      "Washington"
    ],
    "detailEn": "Washington is the capital of the United States.",
    "detailNl": "Washington is de hoofdstad van de Verenigde Staten."
  },
  {
    "id": "W1127",
    "country": "United States",
    "level": "Adults",
    "maps": [
      "world",
      "north-america",
      "united-states"
    ],
    "promptEn": "In which country would you find the Lincoln Memorial?",
    "promptNl": "In welk land vind je het Lincoln Memorial?",
    "answerEn": "United States",
    "answerNl": "de Verenigde Staten",
    "choicesEn": [
      "United States",
      "Malaysia",
      "Brazil"
    ],
    "choicesNl": [
      "de Verenigde Staten",
      "Malaysia",
      "Brazilië"
    ],
    "detailEn": "The memorial stands in Washington, D.C., which is not a state.",
    "detailNl": "Het monument staat in Washington D.C., en dat is geen staat."
  },
  {
    "id": "W1128",
    "country": "United States",
    "level": "Adults",
    "maps": [
      "world",
      "north-america",
      "united-states"
    ],
    "promptEn": "In which city would you find the Lincoln Memorial?",
    "promptNl": "In welke stad vind je het Lincoln Memorial?",
    "answerEn": "Washington",
    "answerNl": "Washington",
    "choicesEn": [
      "Moscow",
      "Washington",
      "Jerusalem"
    ],
    "choicesNl": [
      "Moskou",
      "Washington",
      "Jeruzalem"
    ],
    "detailEn": "The memorial stands in Washington, D.C., which is not a state.",
    "detailNl": "Het monument staat in Washington D.C., en dat is geen staat."
  }
];

type Difficulty = "kids" | "normal" | "hard";

export function placedQuestionsFor(region: string, difficulty: Difficulty = "hard"): PlacedQuestion[] {
  return PLACED_QUESTIONS.filter((item) => item.maps.includes(region) && landmarkAllowed(item.level, difficulty));
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

function shuffle<T>(items: T[], rnd: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rnd() * (i + 1));
    const swap = copy[i];
    copy[i] = copy[j] as T;
    copy[j] = swap as T;
  }
  return copy;
}

/**
 * One of these questions when the map is in its list and the place is that country.
 * A province or state round still asks the province or state first.
 */
export function placedQuizCard(input: {
  country: string;
  kind: "province" | "state" | "country";
  step: 0 | 1;
  region: string;
  difficulty: Difficulty;
  locale: "en" | "nl";
  seed: number;
  roundIndex: number;
}): { prompt: string; choices: string[]; correct: string; detail: string } | null {
  if ((input.kind === "province" || input.kind === "state") && input.step === 0) return null;
  let fits = placedQuestionsFor(input.region, input.difficulty).filter((item) => item.country === input.country);
  if (input.kind === "country" && input.step === 1) {
    fits = fits.filter((item) => item.answerEn !== item.country);
  }
  if (fits.length === 0) return null;
  const rnd = mulberry32((input.seed + input.roundIndex * 53 + input.step * 11) >>> 0);
  const picked = fits[Math.floor(rnd() * fits.length)];
  if (!picked) return null;
  const choices = input.locale === "nl" ? picked.choicesNl : picked.choicesEn;
  const answer = input.locale === "nl" ? picked.answerNl : picked.answerEn;
  const enIndex = picked.choicesEn.indexOf(picked.answerEn);
  const correct = choices.includes(answer) ? answer : choices[enIndex];
  if (!correct || choices.length < 2) return null;
  return {
    prompt: input.locale === "nl" ? picked.promptNl : picked.promptEn,
    choices: shuffle(choices, rnd),
    correct,
    detail: input.locale === "nl" ? picked.detailNl : picked.detailEn,
  };
}
