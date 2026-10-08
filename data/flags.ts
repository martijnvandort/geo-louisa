/** Rectangular country flags for the countries in the city list.

Downloaded from flag-icons, 4x3 SVGs, MIT license.
Source: https://github.com/lipis/flag-icons
Copyright (c) 2013 Panayiotis Lipiridis
Files live in /public/flags and are served as /flags/{iso}.svg
*/
export type CountryFlag = {
  country: string;
  countryNl: string;
  iso: string;
  /** Public path, for an img src. */
  src: string;
  level: "Kids" | "Adults" | "Smart Adults";
};

export const COUNTRY_FLAGS: CountryFlag[] = [
  {
    "country": "Afghanistan",
    "countryNl": "Afghanistan",
    "iso": "af",
    "level": "Adults",
    "src": "/flags/af.svg"
  },
  {
    "country": "Albania",
    "countryNl": "Albanië",
    "iso": "al",
    "level": "Adults",
    "src": "/flags/al.svg"
  },
  {
    "country": "Algeria",
    "countryNl": "Algerije",
    "iso": "dz",
    "level": "Adults",
    "src": "/flags/dz.svg"
  },
  {
    "country": "Andorra",
    "countryNl": "Andorra",
    "iso": "ad",
    "level": "Smart Adults",
    "src": "/flags/ad.svg"
  },
  {
    "country": "Angola",
    "countryNl": "Angola",
    "iso": "ao",
    "level": "Adults",
    "src": "/flags/ao.svg"
  },
  {
    "country": "Argentina",
    "countryNl": "Argentinië",
    "iso": "ar",
    "level": "Kids",
    "src": "/flags/ar.svg"
  },
  {
    "country": "Armenia",
    "countryNl": "Armenië",
    "iso": "am",
    "level": "Adults",
    "src": "/flags/am.svg"
  },
  {
    "country": "Australia",
    "countryNl": "Australië",
    "iso": "au",
    "level": "Kids",
    "src": "/flags/au.svg"
  },
  {
    "country": "Austria",
    "countryNl": "Oostenrijk",
    "iso": "at",
    "level": "Kids",
    "src": "/flags/at.svg"
  },
  {
    "country": "Azerbaijan",
    "countryNl": "Azerbeidzjan",
    "iso": "az",
    "level": "Adults",
    "src": "/flags/az.svg"
  },
  {
    "country": "Bahamas",
    "countryNl": "Bahama's",
    "iso": "bs",
    "level": "Adults",
    "src": "/flags/bs.svg"
  },
  {
    "country": "Bahrain",
    "countryNl": "Bahrein",
    "iso": "bh",
    "level": "Smart Adults",
    "src": "/flags/bh.svg"
  },
  {
    "country": "Bangladesh",
    "countryNl": "Bangladesh",
    "iso": "bd",
    "level": "Adults",
    "src": "/flags/bd.svg"
  },
  {
    "country": "Barbados",
    "countryNl": "Barbados",
    "iso": "bb",
    "level": "Smart Adults",
    "src": "/flags/bb.svg"
  },
  {
    "country": "Belarus",
    "countryNl": "Belarus",
    "iso": "by",
    "level": "Adults",
    "src": "/flags/by.svg"
  },
  {
    "country": "Belgium",
    "countryNl": "België",
    "iso": "be",
    "level": "Kids",
    "src": "/flags/be.svg"
  },
  {
    "country": "Belize",
    "countryNl": "Belize",
    "iso": "bz",
    "level": "Adults",
    "src": "/flags/bz.svg"
  },
  {
    "country": "Benin",
    "countryNl": "Benin",
    "iso": "bj",
    "level": "Adults",
    "src": "/flags/bj.svg"
  },
  {
    "country": "Bhutan",
    "countryNl": "Bhutan",
    "iso": "bt",
    "level": "Adults",
    "src": "/flags/bt.svg"
  },
  {
    "country": "Bolivia",
    "countryNl": "Bolivia",
    "iso": "bo",
    "level": "Adults",
    "src": "/flags/bo.svg"
  },
  {
    "country": "Bosnia and Herzegovina",
    "countryNl": "Bosnië en Herzegovina",
    "iso": "ba",
    "level": "Adults",
    "src": "/flags/ba.svg"
  },
  {
    "country": "Botswana",
    "countryNl": "Botswana",
    "iso": "bw",
    "level": "Adults",
    "src": "/flags/bw.svg"
  },
  {
    "country": "Brazil",
    "countryNl": "Brazilië",
    "iso": "br",
    "level": "Kids",
    "src": "/flags/br.svg"
  },
  {
    "country": "Brunei",
    "countryNl": "Brunei",
    "iso": "bn",
    "level": "Adults",
    "src": "/flags/bn.svg"
  },
  {
    "country": "Bulgaria",
    "countryNl": "Bulgarije",
    "iso": "bg",
    "level": "Adults",
    "src": "/flags/bg.svg"
  },
  {
    "country": "Burkina Faso",
    "countryNl": "Burkina Faso",
    "iso": "bf",
    "level": "Adults",
    "src": "/flags/bf.svg"
  },
  {
    "country": "Burundi",
    "countryNl": "Burundi",
    "iso": "bi",
    "level": "Adults",
    "src": "/flags/bi.svg"
  },
  {
    "country": "Cabo Verde",
    "countryNl": "Kaapverdië",
    "iso": "cv",
    "level": "Smart Adults",
    "src": "/flags/cv.svg"
  },
  {
    "country": "Cambodia",
    "countryNl": "Cambodja",
    "iso": "kh",
    "level": "Adults",
    "src": "/flags/kh.svg"
  },
  {
    "country": "Cameroon",
    "countryNl": "Kameroen",
    "iso": "cm",
    "level": "Adults",
    "src": "/flags/cm.svg"
  },
  {
    "country": "Canada",
    "countryNl": "Canada",
    "iso": "ca",
    "level": "Kids",
    "src": "/flags/ca.svg"
  },
  {
    "country": "Central African Republic",
    "countryNl": "Centraal-Afrikaanse Republiek",
    "iso": "cf",
    "level": "Adults",
    "src": "/flags/cf.svg"
  },
  {
    "country": "Chad",
    "countryNl": "Tsjaad",
    "iso": "td",
    "level": "Adults",
    "src": "/flags/td.svg"
  },
  {
    "country": "Chile",
    "countryNl": "Chili",
    "iso": "cl",
    "level": "Adults",
    "src": "/flags/cl.svg"
  },
  {
    "country": "China",
    "countryNl": "China",
    "iso": "cn",
    "level": "Kids",
    "src": "/flags/cn.svg"
  },
  {
    "country": "Colombia",
    "countryNl": "Colombia",
    "iso": "co",
    "level": "Adults",
    "src": "/flags/co.svg"
  },
  {
    "country": "Comoros",
    "countryNl": "Comoren",
    "iso": "km",
    "level": "Smart Adults",
    "src": "/flags/km.svg"
  },
  {
    "country": "Congo",
    "countryNl": "Republiek Congo",
    "iso": "cg",
    "level": "Adults",
    "src": "/flags/cg.svg"
  },
  {
    "country": "Costa Rica",
    "countryNl": "Costa Rica",
    "iso": "cr",
    "level": "Adults",
    "src": "/flags/cr.svg"
  },
  {
    "country": "Croatia",
    "countryNl": "Kroatië",
    "iso": "hr",
    "level": "Adults",
    "src": "/flags/hr.svg"
  },
  {
    "country": "Cuba",
    "countryNl": "Cuba",
    "iso": "cu",
    "level": "Adults",
    "src": "/flags/cu.svg"
  },
  {
    "country": "Cyprus",
    "countryNl": "Cyprus",
    "iso": "cy",
    "level": "Adults",
    "src": "/flags/cy.svg"
  },
  {
    "country": "Czechia",
    "countryNl": "Tsjechië",
    "iso": "cz",
    "level": "Adults",
    "src": "/flags/cz.svg"
  },
  {
    "country": "Côte d'Ivoire",
    "countryNl": "Ivoorkust",
    "iso": "ci",
    "level": "Adults",
    "src": "/flags/ci.svg"
  },
  {
    "country": "DR Congo",
    "countryNl": "Democratische Republiek Congo",
    "iso": "cd",
    "level": "Adults",
    "src": "/flags/cd.svg"
  },
  {
    "country": "Denmark",
    "countryNl": "Denemarken",
    "iso": "dk",
    "level": "Kids",
    "src": "/flags/dk.svg"
  },
  {
    "country": "Djibouti",
    "countryNl": "Djibouti",
    "iso": "dj",
    "level": "Adults",
    "src": "/flags/dj.svg"
  },
  {
    "country": "Dominica",
    "countryNl": "Dominica",
    "iso": "dm",
    "level": "Smart Adults",
    "src": "/flags/dm.svg"
  },
  {
    "country": "Dominican Republic",
    "countryNl": "Dominicaanse Republiek",
    "iso": "do",
    "level": "Adults",
    "src": "/flags/do.svg"
  },
  {
    "country": "Ecuador",
    "countryNl": "Ecuador",
    "iso": "ec",
    "level": "Adults",
    "src": "/flags/ec.svg"
  },
  {
    "country": "Egypt",
    "countryNl": "Egypte",
    "iso": "eg",
    "level": "Kids",
    "src": "/flags/eg.svg"
  },
  {
    "country": "El Salvador",
    "countryNl": "El Salvador",
    "iso": "sv",
    "level": "Adults",
    "src": "/flags/sv.svg"
  },
  {
    "country": "Equatorial Guinea",
    "countryNl": "Equatoriaal-Guinea",
    "iso": "gq",
    "level": "Adults",
    "src": "/flags/gq.svg"
  },
  {
    "country": "Eritrea",
    "countryNl": "Eritrea",
    "iso": "er",
    "level": "Adults",
    "src": "/flags/er.svg"
  },
  {
    "country": "Estonia",
    "countryNl": "Estland",
    "iso": "ee",
    "level": "Adults",
    "src": "/flags/ee.svg"
  },
  {
    "country": "Eswatini",
    "countryNl": "Eswatini",
    "iso": "sz",
    "level": "Adults",
    "src": "/flags/sz.svg"
  },
  {
    "country": "Ethiopia",
    "countryNl": "Ethiopië",
    "iso": "et",
    "level": "Adults",
    "src": "/flags/et.svg"
  },
  {
    "country": "Fiji",
    "countryNl": "Fiji",
    "iso": "fj",
    "level": "Adults",
    "src": "/flags/fj.svg"
  },
  {
    "country": "Finland",
    "countryNl": "Finland",
    "iso": "fi",
    "level": "Kids",
    "src": "/flags/fi.svg"
  },
  {
    "country": "France",
    "countryNl": "Frankrijk",
    "iso": "fr",
    "level": "Kids",
    "src": "/flags/fr.svg"
  },
  {
    "country": "French Polynesia",
    "countryNl": "Frans-Polynesië",
    "iso": "pf",
    "level": "Smart Adults",
    "src": "/flags/pf.svg"
  },
  {
    "country": "Gabon",
    "countryNl": "Gabon",
    "iso": "ga",
    "level": "Adults",
    "src": "/flags/ga.svg"
  },
  {
    "country": "Gambia",
    "countryNl": "Gambia",
    "iso": "gm",
    "level": "Adults",
    "src": "/flags/gm.svg"
  },
  {
    "country": "Georgia",
    "countryNl": "Georgië",
    "iso": "ge",
    "level": "Adults",
    "src": "/flags/ge.svg"
  },
  {
    "country": "Germany",
    "countryNl": "Duitsland",
    "iso": "de",
    "level": "Kids",
    "src": "/flags/de.svg"
  },
  {
    "country": "Ghana",
    "countryNl": "Ghana",
    "iso": "gh",
    "level": "Adults",
    "src": "/flags/gh.svg"
  },
  {
    "country": "Greece",
    "countryNl": "Griekenland",
    "iso": "gr",
    "level": "Kids",
    "src": "/flags/gr.svg"
  },
  {
    "country": "Greenland",
    "countryNl": "Groenland",
    "iso": "gl",
    "level": "Adults",
    "src": "/flags/gl.svg"
  },
  {
    "country": "Grenada",
    "countryNl": "Grenada",
    "iso": "gd",
    "level": "Smart Adults",
    "src": "/flags/gd.svg"
  },
  {
    "country": "Guatemala",
    "countryNl": "Guatemala",
    "iso": "gt",
    "level": "Adults",
    "src": "/flags/gt.svg"
  },
  {
    "country": "Guinea",
    "countryNl": "Guinee",
    "iso": "gn",
    "level": "Adults",
    "src": "/flags/gn.svg"
  },
  {
    "country": "Guinea-Bissau",
    "countryNl": "Guinee-Bissau",
    "iso": "gw",
    "level": "Adults",
    "src": "/flags/gw.svg"
  },
  {
    "country": "Guyana",
    "countryNl": "Guyana",
    "iso": "gy",
    "level": "Adults",
    "src": "/flags/gy.svg"
  },
  {
    "country": "Haiti",
    "countryNl": "Haïti",
    "iso": "ht",
    "level": "Adults",
    "src": "/flags/ht.svg"
  },
  {
    "country": "Honduras",
    "countryNl": "Honduras",
    "iso": "hn",
    "level": "Adults",
    "src": "/flags/hn.svg"
  },
  {
    "country": "Hungary",
    "countryNl": "Hongarije",
    "iso": "hu",
    "level": "Adults",
    "src": "/flags/hu.svg"
  },
  {
    "country": "Iceland",
    "countryNl": "IJsland",
    "iso": "is",
    "level": "Adults",
    "src": "/flags/is.svg"
  },
  {
    "country": "India",
    "countryNl": "India",
    "iso": "in",
    "level": "Kids",
    "src": "/flags/in.svg"
  },
  {
    "country": "Indonesia",
    "countryNl": "Indonesië",
    "iso": "id",
    "level": "Adults",
    "src": "/flags/id.svg"
  },
  {
    "country": "Iran",
    "countryNl": "Iran",
    "iso": "ir",
    "level": "Adults",
    "src": "/flags/ir.svg"
  },
  {
    "country": "Iraq",
    "countryNl": "Irak",
    "iso": "iq",
    "level": "Adults",
    "src": "/flags/iq.svg"
  },
  {
    "country": "Ireland",
    "countryNl": "Ierland",
    "iso": "ie",
    "level": "Kids",
    "src": "/flags/ie.svg"
  },
  {
    "country": "Israel",
    "countryNl": "Israël",
    "iso": "il",
    "level": "Adults",
    "src": "/flags/il.svg"
  },
  {
    "country": "Italy",
    "countryNl": "Italië",
    "iso": "it",
    "level": "Kids",
    "src": "/flags/it.svg"
  },
  {
    "country": "Jamaica",
    "countryNl": "Jamaica",
    "iso": "jm",
    "level": "Adults",
    "src": "/flags/jm.svg"
  },
  {
    "country": "Japan",
    "countryNl": "Japan",
    "iso": "jp",
    "level": "Kids",
    "src": "/flags/jp.svg"
  },
  {
    "country": "Jordan",
    "countryNl": "Jordanië",
    "iso": "jo",
    "level": "Adults",
    "src": "/flags/jo.svg"
  },
  {
    "country": "Kazakhstan",
    "countryNl": "Kazachstan",
    "iso": "kz",
    "level": "Adults",
    "src": "/flags/kz.svg"
  },
  {
    "country": "Kenya",
    "countryNl": "Kenia",
    "iso": "ke",
    "level": "Adults",
    "src": "/flags/ke.svg"
  },
  {
    "country": "Kiribati",
    "countryNl": "Kiribati",
    "iso": "ki",
    "level": "Smart Adults",
    "src": "/flags/ki.svg"
  },
  {
    "country": "Kuwait",
    "countryNl": "Koeweit",
    "iso": "kw",
    "level": "Adults",
    "src": "/flags/kw.svg"
  },
  {
    "country": "Kyrgyzstan",
    "countryNl": "Kirgizië",
    "iso": "kg",
    "level": "Adults",
    "src": "/flags/kg.svg"
  },
  {
    "country": "Laos",
    "countryNl": "Laos",
    "iso": "la",
    "level": "Adults",
    "src": "/flags/la.svg"
  },
  {
    "country": "Latvia",
    "countryNl": "Letland",
    "iso": "lv",
    "level": "Adults",
    "src": "/flags/lv.svg"
  },
  {
    "country": "Lebanon",
    "countryNl": "Libanon",
    "iso": "lb",
    "level": "Adults",
    "src": "/flags/lb.svg"
  },
  {
    "country": "Lesotho",
    "countryNl": "Lesotho",
    "iso": "ls",
    "level": "Adults",
    "src": "/flags/ls.svg"
  },
  {
    "country": "Liberia",
    "countryNl": "Liberia",
    "iso": "lr",
    "level": "Adults",
    "src": "/flags/lr.svg"
  },
  {
    "country": "Libya",
    "countryNl": "Libië",
    "iso": "ly",
    "level": "Adults",
    "src": "/flags/ly.svg"
  },
  {
    "country": "Liechtenstein",
    "countryNl": "Liechtenstein",
    "iso": "li",
    "level": "Smart Adults",
    "src": "/flags/li.svg"
  },
  {
    "country": "Lithuania",
    "countryNl": "Litouwen",
    "iso": "lt",
    "level": "Adults",
    "src": "/flags/lt.svg"
  },
  {
    "country": "Luxembourg",
    "countryNl": "Luxemburg",
    "iso": "lu",
    "level": "Adults",
    "src": "/flags/lu.svg"
  },
  {
    "country": "Madagascar",
    "countryNl": "Madagaskar",
    "iso": "mg",
    "level": "Adults",
    "src": "/flags/mg.svg"
  },
  {
    "country": "Malawi",
    "countryNl": "Malawi",
    "iso": "mw",
    "level": "Adults",
    "src": "/flags/mw.svg"
  },
  {
    "country": "Malaysia",
    "countryNl": "Maleisië",
    "iso": "my",
    "level": "Adults",
    "src": "/flags/my.svg"
  },
  {
    "country": "Maldives",
    "countryNl": "Maldiven",
    "iso": "mv",
    "level": "Smart Adults",
    "src": "/flags/mv.svg"
  },
  {
    "country": "Mali",
    "countryNl": "Mali",
    "iso": "ml",
    "level": "Adults",
    "src": "/flags/ml.svg"
  },
  {
    "country": "Malta",
    "countryNl": "Malta",
    "iso": "mt",
    "level": "Adults",
    "src": "/flags/mt.svg"
  },
  {
    "country": "Marshall Islands",
    "countryNl": "Marshalleilanden",
    "iso": "mh",
    "level": "Smart Adults",
    "src": "/flags/mh.svg"
  },
  {
    "country": "Mauritania",
    "countryNl": "Mauritanië",
    "iso": "mr",
    "level": "Adults",
    "src": "/flags/mr.svg"
  },
  {
    "country": "Mauritius",
    "countryNl": "Mauritius",
    "iso": "mu",
    "level": "Smart Adults",
    "src": "/flags/mu.svg"
  },
  {
    "country": "Mexico",
    "countryNl": "Mexico",
    "iso": "mx",
    "level": "Kids",
    "src": "/flags/mx.svg"
  },
  {
    "country": "Micronesia",
    "countryNl": "Micronesië",
    "iso": "fm",
    "level": "Smart Adults",
    "src": "/flags/fm.svg"
  },
  {
    "country": "Moldova",
    "countryNl": "Moldavië",
    "iso": "md",
    "level": "Adults",
    "src": "/flags/md.svg"
  },
  {
    "country": "Monaco",
    "countryNl": "Monaco",
    "iso": "mc",
    "level": "Smart Adults",
    "src": "/flags/mc.svg"
  },
  {
    "country": "Mongolia",
    "countryNl": "Mongolië",
    "iso": "mn",
    "level": "Adults",
    "src": "/flags/mn.svg"
  },
  {
    "country": "Montenegro",
    "countryNl": "Montenegro",
    "iso": "me",
    "level": "Adults",
    "src": "/flags/me.svg"
  },
  {
    "country": "Morocco",
    "countryNl": "Marokko",
    "iso": "ma",
    "level": "Adults",
    "src": "/flags/ma.svg"
  },
  {
    "country": "Mozambique",
    "countryNl": "Mozambique",
    "iso": "mz",
    "level": "Adults",
    "src": "/flags/mz.svg"
  },
  {
    "country": "Myanmar",
    "countryNl": "Myanmar",
    "iso": "mm",
    "level": "Adults",
    "src": "/flags/mm.svg"
  },
  {
    "country": "Namibia",
    "countryNl": "Namibië",
    "iso": "na",
    "level": "Adults",
    "src": "/flags/na.svg"
  },
  {
    "country": "Nauru",
    "countryNl": "Nauru",
    "iso": "nr",
    "level": "Smart Adults",
    "src": "/flags/nr.svg"
  },
  {
    "country": "Nepal",
    "countryNl": "Nepal",
    "iso": "np",
    "level": "Adults",
    "src": "/flags/np.svg"
  },
  {
    "country": "Netherlands",
    "countryNl": "Nederland",
    "iso": "nl",
    "level": "Kids",
    "src": "/flags/nl.svg"
  },
  {
    "country": "New Zealand",
    "countryNl": "Nieuw-Zeeland",
    "iso": "nz",
    "level": "Adults",
    "src": "/flags/nz.svg"
  },
  {
    "country": "Nicaragua",
    "countryNl": "Nicaragua",
    "iso": "ni",
    "level": "Adults",
    "src": "/flags/ni.svg"
  },
  {
    "country": "Niger",
    "countryNl": "Niger",
    "iso": "ne",
    "level": "Adults",
    "src": "/flags/ne.svg"
  },
  {
    "country": "Nigeria",
    "countryNl": "Nigeria",
    "iso": "ng",
    "level": "Adults",
    "src": "/flags/ng.svg"
  },
  {
    "country": "North Korea",
    "countryNl": "Noord-Korea",
    "iso": "kp",
    "level": "Adults",
    "src": "/flags/kp.svg"
  },
  {
    "country": "North Macedonia",
    "countryNl": "Noord-Macedonië",
    "iso": "mk",
    "level": "Adults",
    "src": "/flags/mk.svg"
  },
  {
    "country": "Norway",
    "countryNl": "Noorwegen",
    "iso": "no",
    "level": "Kids",
    "src": "/flags/no.svg"
  },
  {
    "country": "Oman",
    "countryNl": "Oman",
    "iso": "om",
    "level": "Adults",
    "src": "/flags/om.svg"
  },
  {
    "country": "Pakistan",
    "countryNl": "Pakistan",
    "iso": "pk",
    "level": "Adults",
    "src": "/flags/pk.svg"
  },
  {
    "country": "Palau",
    "countryNl": "Palau",
    "iso": "pw",
    "level": "Smart Adults",
    "src": "/flags/pw.svg"
  },
  {
    "country": "Panama",
    "countryNl": "Panama",
    "iso": "pa",
    "level": "Adults",
    "src": "/flags/pa.svg"
  },
  {
    "country": "Papua New Guinea",
    "countryNl": "Papoea-Nieuw-Guinea",
    "iso": "pg",
    "level": "Adults",
    "src": "/flags/pg.svg"
  },
  {
    "country": "Paraguay",
    "countryNl": "Paraguay",
    "iso": "py",
    "level": "Adults",
    "src": "/flags/py.svg"
  },
  {
    "country": "Peru",
    "countryNl": "Peru",
    "iso": "pe",
    "level": "Adults",
    "src": "/flags/pe.svg"
  },
  {
    "country": "Philippines",
    "countryNl": "Filipijnen",
    "iso": "ph",
    "level": "Adults",
    "src": "/flags/ph.svg"
  },
  {
    "country": "Poland",
    "countryNl": "Polen",
    "iso": "pl",
    "level": "Kids",
    "src": "/flags/pl.svg"
  },
  {
    "country": "Portugal",
    "countryNl": "Portugal",
    "iso": "pt",
    "level": "Kids",
    "src": "/flags/pt.svg"
  },
  {
    "country": "Qatar",
    "countryNl": "Qatar",
    "iso": "qa",
    "level": "Adults",
    "src": "/flags/qa.svg"
  },
  {
    "country": "Romania",
    "countryNl": "Roemenië",
    "iso": "ro",
    "level": "Adults",
    "src": "/flags/ro.svg"
  },
  {
    "country": "Russia",
    "countryNl": "Rusland",
    "iso": "ru",
    "level": "Kids",
    "src": "/flags/ru.svg"
  },
  {
    "country": "Rwanda",
    "countryNl": "Rwanda",
    "iso": "rw",
    "level": "Adults",
    "src": "/flags/rw.svg"
  },
  {
    "country": "Saint Kitts and Nevis",
    "countryNl": "Saint Kitts en Nevis",
    "iso": "kn",
    "level": "Smart Adults",
    "src": "/flags/kn.svg"
  },
  {
    "country": "Saint Lucia",
    "countryNl": "Saint Lucia",
    "iso": "lc",
    "level": "Smart Adults",
    "src": "/flags/lc.svg"
  },
  {
    "country": "Saint Vincent and the Grenadines",
    "countryNl": "Saint Vincent en de Grenadines",
    "iso": "vc",
    "level": "Smart Adults",
    "src": "/flags/vc.svg"
  },
  {
    "country": "Samoa",
    "countryNl": "Samoa",
    "iso": "ws",
    "level": "Smart Adults",
    "src": "/flags/ws.svg"
  },
  {
    "country": "San Marino",
    "countryNl": "San Marino",
    "iso": "sm",
    "level": "Smart Adults",
    "src": "/flags/sm.svg"
  },
  {
    "country": "Saudi Arabia",
    "countryNl": "Saoedi-Arabië",
    "iso": "sa",
    "level": "Adults",
    "src": "/flags/sa.svg"
  },
  {
    "country": "Senegal",
    "countryNl": "Senegal",
    "iso": "sn",
    "level": "Adults",
    "src": "/flags/sn.svg"
  },
  {
    "country": "Serbia",
    "countryNl": "Servië",
    "iso": "rs",
    "level": "Adults",
    "src": "/flags/rs.svg"
  },
  {
    "country": "Seychelles",
    "countryNl": "Seychellen",
    "iso": "sc",
    "level": "Smart Adults",
    "src": "/flags/sc.svg"
  },
  {
    "country": "Sierra Leone",
    "countryNl": "Sierra Leone",
    "iso": "sl",
    "level": "Adults",
    "src": "/flags/sl.svg"
  },
  {
    "country": "Singapore",
    "countryNl": "Singapore",
    "iso": "sg",
    "level": "Adults",
    "src": "/flags/sg.svg"
  },
  {
    "country": "Slovakia",
    "countryNl": "Slowakije",
    "iso": "sk",
    "level": "Adults",
    "src": "/flags/sk.svg"
  },
  {
    "country": "Slovenia",
    "countryNl": "Slovenië",
    "iso": "si",
    "level": "Adults",
    "src": "/flags/si.svg"
  },
  {
    "country": "Solomon Islands",
    "countryNl": "Salomonseilanden",
    "iso": "sb",
    "level": "Smart Adults",
    "src": "/flags/sb.svg"
  },
  {
    "country": "Somalia",
    "countryNl": "Somalië",
    "iso": "so",
    "level": "Adults",
    "src": "/flags/so.svg"
  },
  {
    "country": "South Africa",
    "countryNl": "Zuid-Afrika",
    "iso": "za",
    "level": "Kids",
    "src": "/flags/za.svg"
  },
  {
    "country": "South Korea",
    "countryNl": "Zuid-Korea",
    "iso": "kr",
    "level": "Adults",
    "src": "/flags/kr.svg"
  },
  {
    "country": "South Sudan",
    "countryNl": "Zuid-Soedan",
    "iso": "ss",
    "level": "Adults",
    "src": "/flags/ss.svg"
  },
  {
    "country": "Spain",
    "countryNl": "Spanje",
    "iso": "es",
    "level": "Kids",
    "src": "/flags/es.svg"
  },
  {
    "country": "Sri Lanka",
    "countryNl": "Sri Lanka",
    "iso": "lk",
    "level": "Adults",
    "src": "/flags/lk.svg"
  },
  {
    "country": "Sudan",
    "countryNl": "Soedan",
    "iso": "sd",
    "level": "Adults",
    "src": "/flags/sd.svg"
  },
  {
    "country": "Suriname",
    "countryNl": "Suriname",
    "iso": "sr",
    "level": "Adults",
    "src": "/flags/sr.svg"
  },
  {
    "country": "Sweden",
    "countryNl": "Zweden",
    "iso": "se",
    "level": "Kids",
    "src": "/flags/se.svg"
  },
  {
    "country": "Switzerland",
    "countryNl": "Zwitserland",
    "iso": "ch",
    "level": "Kids",
    "src": "/flags/ch.svg"
  },
  {
    "country": "Syria",
    "countryNl": "Syrië",
    "iso": "sy",
    "level": "Adults",
    "src": "/flags/sy.svg"
  },
  {
    "country": "São Tomé and Príncipe",
    "countryNl": "Sao Tomé en Principe",
    "iso": "st",
    "level": "Smart Adults",
    "src": "/flags/st.svg"
  },
  {
    "country": "Taiwan",
    "countryNl": "Taiwan",
    "iso": "tw",
    "level": "Adults",
    "src": "/flags/tw.svg"
  },
  {
    "country": "Tajikistan",
    "countryNl": "Tadzjikistan",
    "iso": "tj",
    "level": "Adults",
    "src": "/flags/tj.svg"
  },
  {
    "country": "Tanzania",
    "countryNl": "Tanzania",
    "iso": "tz",
    "level": "Adults",
    "src": "/flags/tz.svg"
  },
  {
    "country": "Thailand",
    "countryNl": "Thailand",
    "iso": "th",
    "level": "Adults",
    "src": "/flags/th.svg"
  },
  {
    "country": "Timor-Leste",
    "countryNl": "Oost-Timor",
    "iso": "tl",
    "level": "Adults",
    "src": "/flags/tl.svg"
  },
  {
    "country": "Togo",
    "countryNl": "Togo",
    "iso": "tg",
    "level": "Adults",
    "src": "/flags/tg.svg"
  },
  {
    "country": "Tonga",
    "countryNl": "Tonga",
    "iso": "to",
    "level": "Smart Adults",
    "src": "/flags/to.svg"
  },
  {
    "country": "Trinidad and Tobago",
    "countryNl": "Trinidad en Tobago",
    "iso": "tt",
    "level": "Adults",
    "src": "/flags/tt.svg"
  },
  {
    "country": "Tunisia",
    "countryNl": "Tunesië",
    "iso": "tn",
    "level": "Adults",
    "src": "/flags/tn.svg"
  },
  {
    "country": "Turkey",
    "countryNl": "Turkije",
    "iso": "tr",
    "level": "Kids",
    "src": "/flags/tr.svg"
  },
  {
    "country": "Turkmenistan",
    "countryNl": "Turkmenistan",
    "iso": "tm",
    "level": "Adults",
    "src": "/flags/tm.svg"
  },
  {
    "country": "Tuvalu",
    "countryNl": "Tuvalu",
    "iso": "tv",
    "level": "Smart Adults",
    "src": "/flags/tv.svg"
  },
  {
    "country": "Uganda",
    "countryNl": "Oeganda",
    "iso": "ug",
    "level": "Adults",
    "src": "/flags/ug.svg"
  },
  {
    "country": "Ukraine",
    "countryNl": "Oekraïne",
    "iso": "ua",
    "level": "Adults",
    "src": "/flags/ua.svg"
  },
  {
    "country": "United Arab Emirates",
    "countryNl": "Verenigde Arabische Emiraten",
    "iso": "ae",
    "level": "Adults",
    "src": "/flags/ae.svg"
  },
  {
    "country": "United Kingdom",
    "countryNl": "Verenigd Koninkrijk",
    "iso": "gb",
    "level": "Kids",
    "src": "/flags/gb.svg"
  },
  {
    "country": "United States",
    "countryNl": "Verenigde Staten",
    "iso": "us",
    "level": "Kids",
    "src": "/flags/us.svg"
  },
  {
    "country": "Uruguay",
    "countryNl": "Uruguay",
    "iso": "uy",
    "level": "Adults",
    "src": "/flags/uy.svg"
  },
  {
    "country": "Uzbekistan",
    "countryNl": "Oezbekistan",
    "iso": "uz",
    "level": "Adults",
    "src": "/flags/uz.svg"
  },
  {
    "country": "Vanuatu",
    "countryNl": "Vanuatu",
    "iso": "vu",
    "level": "Adults",
    "src": "/flags/vu.svg"
  },
  {
    "country": "Vatican City",
    "countryNl": "Vaticaanstad",
    "iso": "va",
    "level": "Smart Adults",
    "src": "/flags/va.svg"
  },
  {
    "country": "Venezuela",
    "countryNl": "Venezuela",
    "iso": "ve",
    "level": "Adults",
    "src": "/flags/ve.svg"
  },
  {
    "country": "Vietnam",
    "countryNl": "Vietnam",
    "iso": "vn",
    "level": "Adults",
    "src": "/flags/vn.svg"
  },
  {
    "country": "Yemen",
    "countryNl": "Jemen",
    "iso": "ye",
    "level": "Adults",
    "src": "/flags/ye.svg"
  },
  {
    "country": "Zambia",
    "countryNl": "Zambia",
    "iso": "zm",
    "level": "Adults",
    "src": "/flags/zm.svg"
  },
  {
    "country": "Zimbabwe",
    "countryNl": "Zimbabwe",
    "iso": "zw",
    "level": "Adults",
    "src": "/flags/zw.svg"
  }
];

const BY_COUNTRY = new Map(COUNTRY_FLAGS.map((flag) => [flag.country, flag]));

export function flagForCountry(country: string): CountryFlag | undefined {
  return BY_COUNTRY.get(country);
}
