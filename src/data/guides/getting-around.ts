export const transportModes = [
  {
    mode: "Walking",
    price: "Free",
    bestFor: "Exploring the historic center, Ribeira, Vitória, Cedofeita",
    coverage: "Most of central Porto is walkable within 20-30 minutes",
    tips: "Wear shoes with grip — cobblestones are slippery when wet. The hills between Ribeira and Batalha will humble you. Stick to shaded streets in summer.",
    verdict:
      "Porto is a walking city at heart. I spent most of my time on foot and never regretted it — the best azulejo facades, hidden cafés, and river views are found between the main attractions, not at them. Just be honest about those hills.",
  },
  {
    mode: "Metro",
    price: "€1.60 (Z2) – €2.50 (Z4)",
    bestFor: "Airport, Vila Nova de Gaia, Matosinhos beach, Estádio do Dragão",
    coverage: "6 lines covering Porto, Gaia, Matosinhos, and the airport",
    tips: "Always validate your Andante card before boarding — inspectors are common and fines are €100+. The airport is on the violet line (Z4). Trindade is the main interchange.",
    verdict:
      "The metro is clean, reliable, and covers the places walking doesn't reach. You'll use it for the airport (35 min to center), Matosinhos seafood lunches, and crossing to Gaia without walking the bridge. Runs 6 AM–1 AM.",
  },
  {
    mode: "Bus (STCP)",
    price: "€1.60 single (Andante) / €2 bought on bus",
    bestFor: "Foz do Douro, Serralves, areas between metro lines",
    coverage: "Extensive network filling gaps the metro misses",
    tips: "Use an Andante card — buying on bus costs more. Bus 500 runs along the river from Ribeira to Foz (scenic ride). Bus 200 connects the airport to the center if you want a cheaper alternative to metro.",
    verdict:
      "Honestly, you probably won't use buses much unless you're heading to Foz or Serralves. The metro and walking cover 90% of what visitors need. But bus 500 along the Douro is a genuinely lovely ride.",
  },
  {
    mode: "Tram",
    price: "€3.50 single / free with Porto Card",
    bestFor: "Scenic rides, Line 1 from Ribeira to Foz do Douro",
    coverage: "3 heritage lines — Line 1 (Ribeira–Foz), Line 18 (Carmo loop), Line 22 (city center loop)",
    tips: "These are vintage wooden trams — charming but slow. Line 1 along the river to Foz is the one worth taking. Lines 18 and 22 are short tourist loops. Cash only if buying on board.",
    verdict:
      "Line 1 to Foz is genuinely scenic and worth the €3.50 — the Douro estuary views as you rattle toward the ocean are hard to beat. The other two lines are fun once but not essential. Skip them if you have the Porto Card (they're free with it anyway).",
  },
  {
    mode: "Funicular dos Guindais",
    price: "€2.50 single / free with Porto Card",
    bestFor: "Connecting Ribeira waterfront to Batalha (upper town)",
    coverage: "Single route: Ribeira ↔ Batalha",
    tips: "Runs every 8 minutes, 8 AM–10 PM (later in summer). Andante card not accepted — pay at the booth or use Porto Card. The walk up is brutal in summer heat.",
    verdict:
      "A two-minute ride that saves a genuinely punishing climb. After a long lunch in Ribeira, the funicular back up to Batalha is worth every cent. I walked it once, took the funicular every time after.",
  },
  {
    mode: "Uber / Bolt",
    price: "€3–8 within the center",
    bestFor: "Late nights, rain, luggage, groups of 2-4 splitting fares",
    coverage: "City-wide, including airport",
    tips: "Both apps work well in Porto. Airport to center runs €12-18 (vs €2.50 metro). Surge pricing kicks in after midnight and during São João. Bolt is often slightly cheaper than Uber.",
    verdict:
      "Reliable and reasonably priced. I used Uber/Bolt maybe 3-4 times in a week — mostly late at night or when it was pouring. A ride from Ribeira to Cedofeita is about €4. Split between two people, it's barely worth debating vs. the metro.",
  },
  {
    mode: "Taxi",
    price: "Metered from €3.25 base fare",
    bestFor: "Late night when ride-hailing surges, heavy luggage, older travelers",
    coverage: "City-wide, ranks at major stations and hotels",
    tips: "Insist on the meter. Night surcharge (21:00–06:00) adds ~20%. Luggage surcharge of €1.60. From the airport, a taxi should cost €20-25 to the center — agree beforehand or use the meter.",
    verdict:
      "Fine for what it is, but Uber/Bolt are almost always cheaper and more convenient. I'd only grab a taxi from a rank when my phone was dead or ride-hailing was surging at 2 AM.",
  },
];

export const andanteCard = {
  cost: "€0.60 for the reusable card, then load trips on top",
  zones: {
    Z2: "€1.60 — covers all of Porto center, Gaia wine cellars, Matosinhos",
    Z4: "€2.50 — needed for the airport",
  },
  howToBuy:
    "Buy at yellow Andante machines in any metro station. The machine interface has an English option. Pay with card or coins. The card itself costs €0.60, then you load individual trips (Z2 or Z4) or a 24-hour pass (€7 for all zones).",
  howToUse:
    "Tap the card on the yellow validator before every journey — metro platforms, bus entry, and tram entry. Each Z2 trip is valid for 1 hour across metro, bus, and tram (you can transfer within the hour). Always validate, even when transferring.",
  tips: [
    "A single Z2 trip lets you transfer between metro, bus, and tram within 1 hour — so plan connections wisely.",
    "The 24-hour Andante pass (€7, all zones) pays for itself if you take 3+ rides including the airport.",
    "Keep the card for your whole trip — you can reload it at any machine. Don't throw it away after one ride.",
    "The Andante card does NOT work on the Funicular dos Guindais or heritage trams bought at the tram stop.",
  ],
};

export const portoCard = {
  prices: {
    "1 day": "€13",
    "2 days": "€20",
    "3 days": "€25",
    "4 days": "€33",
  },
  includes: [
    "Unlimited public transport (metro, bus, tram, funicular) for the card duration",
    "Free entry to 6 museums (Soares dos Reis, Casa da Música tour, Romantic Museum, and more)",
    "Free heritage tram rides (Lines 1, 18, 22)",
    "Free Funicular dos Guindais",
    "Discounts (10-50%) at wine cellars, boat cruises, and other attractions",
  ],
  worthIt:
    "The Porto Card makes sense if you plan to visit 3+ museums AND use public transport heavily. For most visitors spending 2-3 days focused on food, wine, and walking the center, it doesn't pay for itself. Do the math for your specific plans. A 2-day card (€20) needs about €8-10 of transport plus 2 museum entries to break even — achievable but not automatic.",
};

export const gettingAroundFaqs = [
  {
    question: "Do I need a car in Porto?",
    answer:
      "No. A car is more hassle than help in central Porto — the streets are narrow, parking is scarce and expensive (€15-25/day), and the one-way system is confusing. Walking, metro, and occasional Uber will cover everything. Only rent a car if you're doing a Douro Valley road trip or heading to northern Portugal.",
  },
  {
    question: "How do I get from Porto airport to the city center?",
    answer:
      "The metro violet line runs from the airport to Trindade (city center) in 35 minutes for €2.50 (Z4 Andante ticket, plus €0.60 for the card). Trains run every 20-30 minutes from 6 AM to 1 AM. An Uber costs €12-18 and takes 20-25 minutes. A taxi runs €20-25.",
  },
  {
    question: "Is Porto walkable?",
    answer:
      "Very walkable — but very hilly. The historic center from Ribeira to Clérigos to Cedofeita is all within a 20-minute walk. The catch is elevation: walking from the waterfront to the upper town involves serious hills. Comfortable shoes with grip are non-negotiable on the cobblestones.",
  },
  {
    question: "What is the Andante card and do I need one?",
    answer:
      "The Andante is Porto's rechargeable transit card (€0.60). You load trips onto it and tap before every journey. You need one for the metro, and it saves money on buses (€1.60 vs €2 cash). Buy it at any metro station machine. One card can be shared between travelers if you're always together.",
  },
  {
    question: "Is the Porto Card worth buying?",
    answer:
      "For most visitors, no. It's worth it only if you plan to visit 3+ museums and use transport heavily. Most travelers spend their time walking, eating, and drinking wine — activities the card doesn't cover. Do the math for your specific itinerary before buying.",
  },
  {
    question: "How do I get from Porto to Vila Nova de Gaia?",
    answer:
      "Walk across the top deck of Dom Luís I Bridge (5 minutes, great views) or the lower deck (also 5 minutes, closer to the water). The metro yellow line also crosses to Gaia. Most wine cellars are a 10-15 minute walk from the Gaia side of the bridge.",
  },
  {
    question: "Is Uber available in Porto?",
    answer:
      "Yes, both Uber and Bolt work well in Porto. Rides within the center cost €3-8. Airport to center is €12-18. Both are almost always cheaper than taxis. Wait times are usually under 5 minutes in central Porto.",
  },
];
