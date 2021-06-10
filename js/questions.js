//creating an array and passing the number, questions, options and answers

let questions = [
  {
    numb: 1,
    question:
      "Een ... verdient zijn geld met kopen en verkopen van goederen om er winst mee te maken",
    answer: "de koopman ",
    options: ["de huisvrouw", "de visser", "de koopman", "de metselaar"],
  },
  {
    numb: 2,
    question:
      "De ... is een plek waar handelaren bij elkaar kwamen om handel te drijven",
    answer: "de handelplaats ",
    options: ["de apotheek", "de kerk", "thuis", "de handelplaats"],
  },
  {
    numb: 3,
    question: "Welke stad was de belangrijkste handelsplaats van de Friezen?",
    answer: "Dorestad ",
    options: ["Harlingen", "Dorestad", "Leeuwaarden", "Texel"],
  },
  {
    numb: 4,
    question:
      "Hoe noem je mensen die spullen met de hand maken om te verkopen, zoals stoffen, kleren, manden, vaten?",
    answer: "De handwerkslieden ",
    options: ["Verkopers", "De handwerkslieden", "De gilde", "Koekenbakkers"],
  },
  {
    numb: 5,
    question: "Hoe heet het als een weg een rivier kruist?",
    answer: "Doorwaadbare plek ",
    options: ["Doorwaadbare plek", "Kruispunt", "Delta", "Rivier monding"],
  },
  {
    numb: 6,
    question: "Een ... is een gele, rode of bruinrode halfedelsteen",
    answer: "Barnsteen ",
    options: ["Kalksteen", "Galsteen", "Goud", "Barnsteen"],
  },
  {
    numb: 7,
    question: "De ... is fabrieken en industrie",
    answer: "Nijverheid ",
    options: ["Overheid", "Nijverheid", "Onderwijs", "Werkplaats"],
  },
  {
    numb: 8,
    question:
      "Een ... is iets wat je niet echt nodig hebt, maar wat wel heel fijn of lekker is",
    answer: "Luxeproduct ",
    options: ["Voeding", "Water", "Lucht", "Luxeproduct"],
  },
  {
    numb: 9,
    question: "Wat is een plunderaar?",
    answer: "Iemand die alles uit een huis of een stad steelt ",
    options: [
      "Iemand die huizen verkoopt",
      "Verkoper van pluche dieren",
      "Iemand die eerlijk handelt",
      "Iemand die alles uit een huis of een stad steelt",
    ],
  },
  {
    numb: 10,
    question: "Wat is een Noorman?",
    answer: "Een krijger uit Scandinavië ",
    options: [
      "Een krijger uit Scandinavië",
      "Een goudzoeker uit de Noordpool",
      "Bewoner uit Groningen",
      "Limburger",
    ],
  },
  {
    numb: 11,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
  {
    numb: 12,
    question:
      "Hoe heet het als een rechter beslist of iemand zich wel of niet volgens de wet heeft gedragen en of hij straf verdient",
    answer: "De rechtspraak ",
    options: ["De afspraak", "De rechtspraak", "De uitspraak", "De beslissing"],
  },
  {
    numb: 13,
    question: "Welk recht is het om een markt te houden",
    answer: "Marktrecht ",
    options: ["Marktrecht", "Dorpsrecht", "Stadsrechten", "Primarkt"],
  },
  {
    numb: 14,
    question:
      "... is geld dat de bevolking aan de overheid betaalt voor wegen, scholen enzovoorts",
    answer: "Belasting ",
    options: ["Huur", "Vergoeding", "Tol", "Belasting"],
  },
  {
    numb: 15,
    question:
      "Hoe heet het als je het recht hebt om zelf een bestuur te kiezen?",
    answer: "Het zelfbestuur ",
    options: [
      "Het zelfbestuur",
      "Zelfstandigheid",
      "Zelfzuchtig",
      "Het Bestuursrecht",
    ],
  },
  {
    numb: 16,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
  {
    numb: 17,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
  {
    numb: 18,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
  {
    numb: 19,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
  {
    numb: 20,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
  {
    numb: 21,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
  {
    numb: 22,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
  {
    numb: 23,
    question:
      "... zijn de rechten die een stad kreeg om zelf rechtspraak te houden en belasting te heffen",
    answer: "Stadsrechten ",
    options: [
      "Aanrecht",
      "Rechtswetenschap",
      "Stadsrechten",
      "Nederlands recht",
    ],
  },
];
