const $bodyTable = document.querySelector("#datalist");
const $calcScreen = document.querySelector("#calcscreen");
const $depth = document.querySelector("#depth");
const $cultivo = document.querySelector("#cultivo");
const $rendimiento = document.querySelector("#rendimiento");
const $precio = document.querySelector("#precio");
const $precioRes = document.querySelector("#precioRes");
const $amountResultPanel = document.querySelector("#amountResultPanel");
const $nutrientsReqResultPanel = document.querySelector("#nutrientsReqResultPanel");
const $srcnsolid = document.querySelector("#src-n-solid");
const $srcfosforo = document.querySelector("#src-fosforo");
const $srcpotasio = document.querySelector("#src-potasio");
const $srcazufre = document.querySelector("#src-azufre");
const $srczinc = document.querySelector("#src-zinc");


const $sourceResults = document.querySelector("#sourceResults");
const $nSourceResult = document.querySelector("#nSourceResult");
const $pSourceResult = document.querySelector("#pSourceResult");
const $kSourceResult = document.querySelector("#kSourceResult");
const $sSourceResult = document.querySelector("#sSourceResult");
const $znSourceResult = document.querySelector("#znSourceResult");

//TODO calc nitrogen with nitrato value
const clients = [
  {
    "id": 1,
    "name":	"AGROESTRATEGIAS",
  },
  {
    "id": 2,
    "name":	"CRESUD",
  },
  {
    "id": 3,
    "name":	"CRESUD AGRORRIEGO",
  },
  {
    "id": 4,
    "name":	"CRESUD SALTA",
  },
  {
    "id": 5,
    "name":	"GROBOCOPATEL HNOS",
  },
  {
    "id": 6,
    "name":	"FINE AGROCHEMICALS",
  },
  {
    "id": 7,
    "name":	"CHIARAVIGLIO HNOS",
  },
  {
    "id": 8,
    "name":	"STOLLER ARGENTINA",
  },
  {
    "id": 9,
    "name":	"CRESUD SAN PEDRO",
  },
  {
    "id": 12,
    "name": "CRESUD EL TIGRE TRENEL",
  },
  {
    "id": 13,
    "name": "CRESUD RIO CUARTO",
  },
  {
    "id": 14,
    "name": "CRESUD VILLA ANGELA",
  },
  {
    "id": 15,
    "name": "AAGSA",
  },
  {
    "id": 16,
    "name": "FONDOMONTE",
  },
  {
    "id": 17,
    "name": "PROVINVEST",
  },
  {
    "id": 18,
    "name": "GARCIA DANIEL",
  },
  {
    "id": 19,
    "name": "STOLLER SANTA FE",
  },
  {
    "id": 20,
    "name": "STOLLER JUJUY",
  },
  {
    "id": 21,
    "name": "COLAREDA GUILLERMO",
  },
  {
    "id": 22,
    "name": "STOLLER ENTRE RIOS",
  },
  {
    "id": 23,
    "name": "CANALIS ARIEL",
  },
  {
    "id": 24,
    "name": "STOLLER CORDOBA",
  },
  {
    "id": 25,
    "name": "STOLLER MAMANI CLAUDIA",
  },
  {
    "id": 26,
    "name": "CULACCIATTI BELEN",
  },
  {
    "id": 27,
    "name": "DERUSCIO CRISTIAN SM",
  },
  {
    "id": 28,
    "name": "FERRERI FERNANDO",
  },
  {
    "id": 29,
    "name": "FERRERI JORGE ALBERTO",
  },
  {
    "id": 30,
    "name": "FUCA ADRIAN",
  },
  {
    "id": 31,
    "name": "GARNERO AGUSTIN",
  },
  {
    "id": 32,
    "name": "GASPARONI EMANUEL",
  },
  {
    "id": 33,
    "name": "GOMEZ CASAS JUAN IGNACIO",
  },
  {
    "id": 34,
    "name": "GORGNI ANDRES",
  },
  {
    "id": 35,
    "name": "INTA SAN PEDRO",
  },
  {
    "id": 36,
    "name": "NAYA MAURICIO",
  },
  {
    "id": 37,
    "name": "OLIVIERI FRANCO",
  },
  {
    "id": 38,
    "name": "PELLINI ALEJANDRO",
  },
  {
    "id": 39,
    "name": "RETAMAL GERONIMO",
  },
  {
    "id": 40,
    "name": "SAN MARAGUSTO SA",
  },
  {
    "id": 41,
    "name": "SYMBORG",
  },
  {
    "id": 42,
    "name": "TASSO SERGIO",
  },
  {
    "id": 43,
    "name": "MIGLIORATI MARTIN",
  },
  {
    "id": 44,
    "name": "AGROP. LOS ABUELOS DE SASTRE",
  },
  {
    "id": 45,
    "name": "PASMAN MARTIN",
  },
  {
    "id": 46,
    "name": "RAFAGOS SA",
  },
  {
    "id": 47,
    "name": "STOLLER PISSINIS JUAN AGUSTIN",
  },
  {
    "id": 48,
    "name": "DELYAR",
  },
  {
    "id": 49,
    "name": "SANCHEZ LUCAS",
  },
  {
    "id": 50,
    "name": "CRESUD ODERIZ",
  },
  {
    "id": 51,
    "name": "AGRIGLOBAL",
  },
  {
    "id": 52,
    "name": "GIORDANO SEBASTIAN",
  },
  {
    "id": 53,
    "name": "PITA MARCOS",
  },
  {
    "id": 54,
    "name": "ALDA GUILLERMO",
  },
  {
    "id": 55,
    "name": "MONTANGIE GISELA",
  },
  {
    "id": 56,
    "name": "MONTANGIE GISELA",
  },
  {
    "id": 57,
    "name": "MARCANTONI ANDRES",
  },
  {
    "id": 58,
    "name": "AGROALLIANCE",
  },
  {
    "id": 59,
    "name": "CKOOS",
  },
  {
    "id": 60,
    "name": "CHIAPPERO NICOLAS",
  },
  {
    "id": 61,
    "name": "UPL",
  },
  {
    "id": 62,
    "name": "MASSOLA MARCELO",
  },
  {
    "id": 63,
    "name": "EL CARDO",
  },
  {
    "id": 64,
    "name": "STOLLER CEJAS SANTIAGO",
  },
  {
    "id": 65,
    "name": "STOLLER ARRIETA FACUNDO",
  },
  {
    "id": 66,
    "name": "STOLLER GRIPPA JONATHAN",
  },
  {
    "id": 67,
    "name": "STOLLER NICOLAS MONTERO",
  },
  {
    "id": 68,
    "name": "STOLLER MERKI RODRIGO",
  },
  {
    "id": 69,
    "name": "STOLLER MARINZALDA JUAN",
  },
  {
    "id": 70,
    "name": "MEDIA LUNA SRL",
  },
  {
    "id": 71,
    "name": "STOLLER GUEVARA GERARDO",
  },
  {
    "id": 72,
    "name": "STOLLER CAMPI ANDRES",
  },
  {
    "id": 73,
    "name": "STOLLER GARNERO AGUSTIN",
  },
  {
    "id": 74,
    "name": "STOLLER RODRIGUEZ FRANCO",
  },
  {
    "id": 75,
    "name": "STOLLER SICUELO LEANDRO",
  },
  {
    "id": 76,
    "name": "STOLLER VIGNOLO EMILIANO",
  },
  {
    "id": 77,
    "name": "MOSCHEN ANIBAL HNOS SA",
  },
  {
    "id": 78,
    "name": "STOLLER LEGA MATIAS",
  },
  {
    "id": 79,
    "name": "STOLLER SPICCHIALI GUSTAVO",
  },
  {
    "id": 80,
    "name": "CRESUD LOS POZOS",
  },
  {
    "id": 81,
    "name": "STOLLER OLIVELLA RAFAEL",
  },
  {
    "id": 82,
    "name": "CAMP MAXIMILIANO",
  },
  {
    "id": 83,
    "name": "STOLLER BARBUY VIRGINIA",
  },
  {
    "id": 84,
    "name": "STOLLER CALDERONI AGUSTIN",
  },
  {
    "id": 85,
    "name": "NORES FEDERICO",
  },
  {
    "id": 86,
    "name": "TRUCCO HECTOR EDUARDO",
  },
  {
    "id": 87,
    "name": "STOLLER ORLANDO FRANCISCO",
  },
  {
    "id": 88,
    "name": "TUTORIAL",
  },
  {
    "id": 89,
    "name": "STOLLER DI GERONIMO PAULA",
  },
  {
    "id": 90,
    "name": "GARRONE LUCAS",
  },
  {
    "id": 91,
    "name": "LABORATORIO AGROINTEGRAL",
  },
  {
    "id": 92,
    "name": "GORGNI ALEJANDRO",
  },
  {
    "id": 93,
    "name": "VATTIER MARTA SUSANA",
  },
  {
    "id": 94,
    "name": "CIUFFOLI FEDERICO",
  },
  {
    "id": 95,
    "name": "FRANCISCO LUCAS",
  },
  {
    "id": 96,
    "name": "ABRAHAM JUAN MANUEL",
  },
  {
    "id": 97,
    "name": "POLI LUIS FERNANDO",
  },
  {
    "id": 98,
    "name": "DARRIGAND MANUEL",
  },
  {
    "id": 99,
    "name": "AGROPEMAR",
  },
  {
    "id": 100,
    "name":	"SAN FRANCISCO DE ASIS",
  },
  {
    "id": 101,
    "name":	"ANTONIJEVICH JUAN",
  },
  {
    "id": 102,
    "name":	"BEDAGLIA GASTON",
  },
  {
    "id": 103,
    "name":	"CAMEL AGRO",
  },
  {
    "id": 104,
    "name":	"RUBIO IRUPE",
  },
  {
    "id": 105,
    "name":	"GRUPO CKOOS",
  },
  {
    "id": 105,
    "name":	"GRUPO CKOOS PUSSETTO FRANCO",
  },
  {
    "id": 107,
    "name":	"KOCH EDUARDO",
  },
  {
    "id": 108,
    "name":	"TRAPEZ ADRIAN",
  },
];

const materialsList = [
  {
    "material": {
      "name": "nitrogen",
      "abbrv": "NO3",
      "value": 0,
      "efficiency": 0.5,
      "soilRequested": [],
      "checked": true,
      "amountMarkup": document.querySelector("#nAmountResult"),
      "yieldTarget": 0,
      "yieldMarkup": document.querySelector("#nNutrientsReqResult")
    }
  },  
  {
    "material": {
      "name": "phosphorus",
      "abbrv": "PBray",
      "value": 0,
      "efficiency": 0.3,
      "soilRequested": [],
      "checked": true,
      "amountMarkup": document.querySelector("#pAmountResult"),
      "yieldTarget": 0,
      "yieldMarkup": document.querySelector("#pNutrientsReqResult")
    }
  },
  {
    "material": {
      "name" : "potassium",
      "abbrv": "K",
      "value": 0,
      "efficiency": 0.25,
      "soilRequested": [],
      "checked": true,
      "amountMarkup": document.querySelector("#kAmountResult"),
      "yieldTarget": 0,
      "yieldMarkup": document.querySelector("#kNutrientsReqResult")
    },
  },
  {
    "material": {
      "name" : "sulfur",
      "abbrv": "S",
      "value": 0,
      "efficiency": 0.4,
      "soilRequested": [],
      "checked": true,
      "amountMarkup": document.querySelector("#sAmountResult"),
      "yieldTarget": 0,
      "yieldMarkup": document.querySelector("#sNutrientsReqResult")
    },
  },
  {
    "material": {
      "name" : "zinc",
      "abbrv": "Zn",
      "value": 0,
      "efficiency": 0.05,
      "soilRequested": [],
      "checked": true,
      "amountMarkup": document.querySelector("#znAmountResult"),
      "yieldTarget": 0,
      "yieldMarkup": document.querySelector("#znNutrientsReqResult")
    },
  }
  /* "boron": 0,
  "cationCapacity": 0,
  "calcium": 0,
  "cerium": 0,
  "chlorine": 0,
  "copper": 0,
  "iron": 0,
  "molybdenum": 0,
  "magnesium": 0,
  "manganese": 0,
  "potassium2": 0,
  "sodium": 0,
  "caSaturation": 0,
  "kSaturation": 0,
  "mgSaturation": 0,
  "pHacidity": 0, */
];

const nutrientsAmountTable = {
  "alfalfa": {
    "NO3": 27,
    "PBray": 2.5,
    "K": 21,
    "S": 3.5,
    "Zn": 0.025
  },
  "algodon": {
    "NO3": 62.4,
    "PBray": 7.2,
    "K": 35,
    "S": 7.9,
    "Zn": 0.046
  },
  "arroz": {
    "NO3": 22.2,
    "PBray": 3.1,
    "K": 26.2,
    "S": 0.9,
    "Zn": 0.04
  },
  "arveja": {
    "NO3": 42,
    "PBray": 5,
    "K": 24,
    "S": 4,
    "Zn": 0
  },
  "azucar": {
    "NO3": 0.93,
    "PBray": 0.27,
    "K": 1.65,
    "S": 0.29,
    "Zn": 0
  },
  "garvanzo": {
    "NO3": 60.7,
    "PBray": 9.3,
    "K": 40,
    "S": 6.0,
    "Zn": 0.038
  },
  "girasol": {
    "NO3": 60,
    "PBray": 5,
    "K": 28,
    "S": 5,
    "Zn": 0.099
  },
  "lenteja": {
    "NO3": 43,
    "PBray": 5,
    "K": 11.7,
    "S": 2,
    "Zn": 0
  },
  "maiz": {
    "NO3": 20,
    "PBray": 6.1,
    "K": 29.3,
    "S": 2.5,
    "Zn": 0.052
  },
  "mani": {
    "NO3": 55,
    "PBray": 89,
    "K": 38.75,
    "S": 4.7,
    "Zn": 0.063
  },
  "papa": {
    "NO3": 3.5,
    "PBray": 0.8,
    "K": 5,
    "S": 0.5,
    "Zn": 0.02
  },
  "poroto": {
    "NO3": 77.7,
    "PBray": 6.9,
    "K": 70.8,
    "S": 19.2,
    "Zn": 0.74
  },
  "soja": {
    "NO3": 80,
    "PBray": 11,
    "K": 68.8,
    "S": 6.6,
    "Zn": 0.08
  },
  "sorgo": {
    "NO3": 30.4,
    "PBray": 4.8,
    "K": 19.2,
    "S": 3.8,
    "Zn": 0.038
  },
  "tabaco": {
    "NO3": 36.3,
    "PBray": 35,
    "K": 37.5,
    "S": 6,
    "Zn": 0
  },
  "trigo": {
    "NO3": 30,
    "PBray": 5.9,
    "K": 32.3,
    "S": 4.5,
    "Zn": 0.065
  }
  
}

const sourcesTable = {
  "srcnsolid": {
    "urea": {
      "eff": 50,
      "prod": 1,
      "N": 46,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,    
    },
    "ansca": {
      "eff": 70,
      "prod": 1,
      "N": 28,
      "P205": null,
      "OK2": null,
      "OCa": 5,
      "OMg": null,
      "SO4-2": 4,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,    
    },
    "namonio": {
      "eff": 60,
      "prod": 1,
      "N": 34,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,    
    },
    "ansul": {
      "eff": 70,
      "prod": 1,
      "N": 30,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": 8,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,    
    },
    "can": {
      "eff": 50,
      "prod": 1,
      "N": 27,
      "P205": null,
      "OK2": null,
      "OCa": 11,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,    
    },
    "sulfamonio": {
      "eff": 50,
      "prod": 1,
      "N": 21,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": 24,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "zurko": {
      "eff": 70,
      "prod": 1.27,
      "N": 27,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": 3,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "solmix285": {
      "eff": 70,
      "prod": 1.32,
      "N": 28,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": 5,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "solmix259": {
      "eff": 70,
      "prod": 1.32,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": 9,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    }
  },
  "srcfosforo": {
    "supertrip": {
      "eff": 25,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    }, 
    "supersim": {
      "eff": 30,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "dap": {
      "eff": 25,
      "prod": 1,
      "N": 30,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "map": {
      "eff": 30,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "micromag": {
      "eff": 100,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "maps": {
      "eff": 30,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "rocafos": {
      "eff": 10,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "monok": {
      "eff": 30,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "acfosf": {
      "eff": 85,
      "prod": 1.58,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    }
  },
  "srcpotasio": {
    "nitpotasio": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "sulfpotasio": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "clopotasio": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "sulpomag": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    } 
  },
  "srcazufre": {
    "ansul": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "sulfamonio": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "azelemental": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "tiosulfamonio": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "yeso": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "ansca": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "sulfpotasio": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "solmix285": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "solmix259": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
  },
  "srczinc": {
    "stollerzn": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "zintrac": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "zurconszn": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "sulfzinc": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
    "valagrozn": {
      "eff": 70,
      "prod": 1,
      "N": 25,
      "P205": null,
      "OK2": null,
      "OCa": null,
      "OMg": null,
      "SO4-2": null,
      "Fe": null,
      "Mn": null,
      "Zn": null,
      "Cu": null,
      "B": null,
      "Mo": null,
      "Cl": null,
      "usd": null,
    },
  }
}

const selectCli = document.querySelector("#clientslist");

//Iterate list clientes
clients.forEach(element => {
  const option = document.createElement("option");
  option.value = element.id;
  option.text = element.name;
  selectCli.appendChild(option);
});

const getSamples = async () => {
  const response = await fetch("get-samples.php");
  const samples = await response.json();

  $bodyTable.innerHTML = "";
  for (const sample of samples) {
      const $fila = document.createElement("tr");
      
      const $name = document.createElement("td");
      $name.innerText = sample.nommuestra;
      $fila.appendChild($name);
      
      const $ingreso = document.createElement("td");
      $ingreso.innerText = sample.fechaing;
      $fila.appendChild($ingreso);
      
      const $cliente = document.createElement("td");
      $cliente.innerText = sample.idcliente;
      $fila.appendChild($cliente);

      const $campo = document.createElement("td");
      $campo.innerText = sample.campo;
      $fila.appendChild($campo);
      
      const $identificacion = document.createElement("td");
      $identificacion.innerText = sample.identificacion;
      $fila.appendChild($identificacion);

      const $profundidad = document.createElement("td");
      $profundidad.innerText = sample.profundidad;
      $fila.appendChild($profundidad);

      const $addBtn = document.createElement("button");
      $addBtn.innerHTML = `<i class="fa fa-plus"></i>`;
      $addBtn.classList.add("pill-transparent");
      $addBtn.onclick = function(){ addToCalc(sample); } ;
      const $sendToCalc = document.createElement("td");
      $sendToCalc.appendChild($addBtn);
      $fila.appendChild($sendToCalc);
      $bodyTable.appendChild($fila);
    }
};

const getSamplesByClient = async () => {
  const response = await fetch("get-samples.php");
  const samples = await response.json();

  $bodyTable.innerHTML = "";
  for (const sample of samples) {
      const $fila = document.createElement("tr");
      
      const $name = document.createElement("td");
      $name.innerText = sample.nommuestra;
      $fila.appendChild($name);
      
      const $ingreso = document.createElement("td");
      $ingreso.innerText = sample.fechaing;
      $fila.appendChild($ingreso);
      
      const $cliente = document.createElement("td");
      $cliente.innerText = sample.idcliente;
      $fila.appendChild($cliente);

      const $campo = document.createElement("td");
      $campo.innerText = sample.campo;
      $fila.appendChild($campo);
      
      const $identificacion = document.createElement("td");
      $identificacion.innerText = sample.identificacion;
      $fila.appendChild($identificacion);

      const $profundidad = document.createElement("td");
      $profundidad.innerText = sample.profundidad;
      $fila.appendChild($profundidad);

      const $addBtn = document.createElement("button");
      $addBtn.innerHTML = `<i class="fa fa-plus"></i>`;
      $addBtn.classList.add("pill-transparent");
      $addBtn.onclick = function(){ addToCalc(sample); } ;
      const $sendToCalc = document.createElement("td");
      $sendToCalc.appendChild($addBtn);
      $fila.appendChild($sendToCalc);
      $bodyTable.appendChild($fila);
    }
};

//getSamples();
getSamplesByClient(2);
calcSamples = [];
$depth.value = 30;

function clearInputData() {
  cleanAmountResults();
  cleanNutrientsRequirement();
}
   
function addToCalc(sample) {
  if (calcSamples.length < 3) {
    if (!calcSamples.find(el => el.idmuestra == sample.idmuestra)) {
      calcSamples.push(sample);
      const $name = document.createElement("span");
      $name.innerText = sample.nommuestra;
      $calcScreen.appendChild($name);
      if(calcSamples.length >= 2) {
        $depth.value = 20;
        $depth.innerText = 20;
      }
    } else {
      alert('Esta muestra ya fue agregada');
    }
  } else {
    alert('No puedes agregar mas de 3 muestras a la calculadora');
  }
}

function cleanAmountResults() {
  $amountResultPanel.hidden = true;
  calcSamples = [];
  $calcScreen.innerHTML = '';
  $depth.value = 300;
  $depth.innerText = 30;
  materialsList.forEach(element => {
    element.material.value = 0;
    element.material.soilRequested = [];
  })
}

function getAmountResults() {
  if (calcSamples.length !== 0) {
    calcSamples.forEach(sample => {
      runCalc(sample);
    });
    
    showAmountResults();
    $amountResultPanel.hidden = false;
  } else {
    alert('Debes agregar al menos una Muestra');
  }
}

function runCalc(sample) {
  materialsList.forEach(element => {
    joinResults(getSoilAmount(element.material.name, parseFloat(sample[element.material.abbrv]), parseFloat(sample.densidadap)), element.material.name);
  });
}

// CANTIDAD EN SUELO 
function getSoilAmount(name, elementValue, density) {
  // EJMPLO ZINC
  // ZN * DENSIDAD * PROFUNDIDAD (20 O 30) = RESULTADO
  stage1 = elementValue * density * $depth.value;
  // RESULTADO / 10 * 0.05 (EFICIENCIA)
  stage2 = stage1 / 10 * getEfficiency(name);
  
  // SE SUMAN LOS RESULTADOS FINALES => VER JOIN RESULTS
  return stage2;
}

function getEfficiency(name) {
  let eff = materialsList.filter(element => element.material.name === name);

  return eff[0].material.efficiency;
}

function joinResults(result, name) {
  let soilReq = materialsList.filter(element => element.material.name === name); 
  
  return soilReq[0].material.soilRequested.push(result);  
}

function showAmountResults() {
  materialsList.forEach(element => {
    element.material.value = element.material.soilRequested.reduce((a, b) => a + b, 0);
    element.material.amountMarkup.innerText = element.material.value.toFixed(2);
  });
}

function cleanNutrientsRequirement() {
  $nutrientsReqResultPanel.hidden = true;
  $rendimiento.value = '';
  $precio.value = '';
  materialsList.forEach(element => {
    element.material.yieldTarget = 0;
  });
}

function getNutrientsRequirement() {
  materialsList.forEach(element => {
    element.material.yieldTarget = nutrientsCalc(element.material.abbrv);
    element.material.yieldMarkup.innerText = element.material.yieldTarget.toFixed(2);
  });
  $nutrientsReqResultPanel.hidden = false;
}

// REQUERIMIENTO NUTRIENTES
function nutrientsCalc(nutrient) {
  // RINDE OBJETIVO / 1000 * CANTIDAD DE NUTRIENTES (TABLA)
  let yieldTarget = parseFloat($rendimiento.value) / 1000;
  let nutrientsAmount = nutrientsAmountTable[$cultivo.value][nutrient];

  return yieldTarget * nutrientsAmount;
}

// FUENTES DE FERTILIZACION
function fuentesCalc() {
  let ni = materialsList[0].material.value / getAverage(parseFloat(sourcesTable['srcnsolid'][$srcnsolid.value]['N'])) / getAverage(parseFloat(sourcesTable['srcnsolid'][$srcnsolid.value]['eff']));
  let p = materialsList[1].material.value / getAverage(parseFloat(sourcesTable['srcfosforo'][$srcfosforo.value]['P205'])) / getAverage(parseFloat(sourcesTable['srcfosforo'][$srcfosforo.value]['eff']));
  let k = materialsList[2].material.value / getAverage(parseFloat(sourcesTable['srcpotasio'][$srcpotasio.value]['OK2'])) / getAverage(parseFloat(sourcesTable['srcpotasio'][$srcpotasio.value]['eff']));
  let s = materialsList[3].material.value / getAverage(parseFloat(sourcesTable['srcazufre'][$srcazufre.value]['SO4-2'])) / getAverage(parseFloat(sourcesTable['srcazufre'][$srcazufre.value]['eff']));
  let zn = materialsList[4].material.value / getAverage(parseFloat(sourcesTable['srczinc'][$srczinc.value]['Zn'])) / getAverage(parseFloat(sourcesTable['srczinc'][$srczinc.value]['eff']));
  
  let precioRes = parseFloat($precio.value) * parseFloat($rendimiento.value);
  $precioRes.innerHTML = precioRes / 1000;
  $nSourceResult.innerHTML = ni.toFixed(2);
  $sourceResults.hidden = false;

}

function getAverage(num) {
  return num / 100;
}