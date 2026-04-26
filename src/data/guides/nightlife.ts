export const nightlifeAreas = [
  {
    name: "Galerias de Paris / Rua de Candido dos Reis",
    vibe: "Loud, energetic, young crowd",
    bestFor: "Bar-hopping and late-night dancing",
    description:
      "Porto's main nightlife strip — two parallel streets packed with bars that spill out onto the pavement every Thursday through Saturday. The crowd is mostly 20s-30s, the drinks are cheap, and the energy builds from 11 PM until well past 3 AM. Some bars lean cocktail, others are just beer-and-shots joints with good music. It's messy, fun, and completely unpretentious.",
    spots: [
      { name: "Galeria de Paris", type: "bar", highlight: "The namesake spot — cocktails and a creative crowd" },
      { name: "Cafe au Lait", type: "bar", highlight: "Tiny, packed, great music on weekends" },
      { name: "Pipa Velha", type: "bar", highlight: "Cheap drinks and a chaotic dance floor after midnight" },
      { name: "Plano B", type: "club", highlight: "Live music and DJ sets in a converted warehouse" },
    ],
  },
  {
    name: "Ribeira",
    vibe: "Tourist-friendly, scenic, relaxed",
    bestFor: "Cocktails with a river view",
    description:
      "The waterfront bars along the Douro cater to visitors and couples. Drinks are pricier and the vibe is more sit-down-and-sip than stand-up-and-shout. It's not where locals go out, but a sundowner on the Ribeira before heading uphill to Galerias is a perfectly good way to start the night.",
    spots: [
      { name: "Praia da Luz", type: "bar", highlight: "Terrace right on the river, good for sunset" },
      { name: "Base Porto", type: "cocktail-bar", highlight: "Port wine cocktails done right" },
      { name: "Gin House", type: "bar", highlight: "100+ gins, terrace with views" },
    ],
  },
  {
    name: "Cedofeita / Miguel Bombarda",
    vibe: "Artsy, chill, craft-forward",
    bestFor: "Craft beer, natural wine, conversation",
    description:
      "Porto's creative quarter draws a crowd that wants good drinks without the chaos. Street art on the walls, vinyl on the turntable, and nobody's in a rush. This is where you go when you want a proper craft beer or a glass of natural wine without shouting over music. Bars close earlier here — by 1 AM most places are winding down.",
    spots: [
      { name: "Armazem do Chá", type: "wine-bar", highlight: "Cozy tea-house-turned-wine-bar with a garden" },
      { name: "Cervejaria do Carmo", type: "craft-beer", highlight: "Local brews on tap, relaxed terrace" },
      { name: "Maus Habitos", type: "cultural-bar", highlight: "Art gallery, rooftop, live music, restaurant — all in one" },
    ],
  },
  {
    name: "Rua das Flores",
    vibe: "Intimate, wine-focused, romantic",
    bestFor: "Wine bars and cocktail bars for couples",
    description:
      "This narrow pedestrian street has quietly become one of Porto's best bar streets. The wine bars here are serious but unpretentious, the cocktail bars are inventive, and the atmosphere is intimate enough for a date but lively enough that you won't feel like you're in a library. Most spots have 30-40 seats max.",
    spots: [
      { name: "Prova", type: "wine-bar", highlight: "Tiny wine bar run by a passionate owner — best port education in the city" },
      { name: "Flor dos Aliados", type: "cocktail-bar", highlight: "Inventive cocktails in a beautifully tiled room" },
      { name: "Cafe Candelabro", type: "bookshop-bar", highlight: "Half bookshop, half bar — literary crowd, good wine" },
    ],
  },
  {
    name: "Vila Nova de Gaia",
    vibe: "Mellow, scenic, port-focused",
    bestFor: "Sunset port wine drinks on the waterfront",
    description:
      "Across the bridge from Porto proper, the Gaia side is all about port wine terraces at sunset. Most of the cellar brands have tasting bars that stay open into the evening. It's not nightlife in the traditional sense — more like the best pre-game in Europe. Have a 20-year tawny as the sun drops behind the Luis I Bridge, then cross back to Porto for the rest of the night.",
    spots: [
      { name: "Espaco Porto Cruz", type: "wine-bar", highlight: "Rooftop terrace with direct bridge views" },
      { name: "Wine Quay Bar", type: "wine-bar", highlight: "Sommelier-run, serious port list, great petiscos" },
      { name: "Mistu Bar", type: "cocktail-bar", highlight: "Modern cocktails using port as a base ingredient" },
    ],
  },
];

export const bestBars = [
  {
    name: "Aduela",
    neighborhood: "Cedofeita",
    type: "wine" as const,
    highlight: "A neighborhood petisco bar that hasn't changed in decades. Cheap wine, canned fish, real Porto atmosphere. The kind of place where the regulars have their own stool.",
    priceRange: "€2-6",
    bestTime: "Early evening (19:00-22:00)",
  },
  {
    name: "Galeria de Paris",
    neighborhood: "Galerias de Paris",
    type: "cocktail" as const,
    highlight: "The bar that gave the street its reputation. Creative cocktails, an artsy interior, and a crowd that ranges from students to gallery owners. Terrace seats are gold on warm nights.",
    priceRange: "€6-10",
    bestTime: "Late night (23:00+)",
  },
  {
    name: "Maus Habitos",
    neighborhood: "Cedofeita",
    type: "club" as const,
    highlight: "Part gallery, part restaurant, part bar, part club — and somehow all of it works. The rooftop is the real draw: open-air drinks overlooking the city with DJ sets on weekends. Porto's most interesting night out.",
    priceRange: "€5-10",
    bestTime: "Any time — different energy at every hour",
  },
  {
    name: "Calem Fado Night",
    neighborhood: "Vila Nova de Gaia",
    type: "fado" as const,
    highlight: "A proper fado performance inside the historic Calem cellar. Two fadistas, two guitarists, and a glass of port included. Touristy? Yes. Moving? Also yes. Book ahead.",
    priceRange: "€22-28 (incl. port)",
    bestTime: "Evening shows (18:00 or 21:00)",
  },
  {
    name: "Guindalense",
    neighborhood: "Guindais",
    type: "wine" as const,
    highlight: "A locals-only sports club turned bar with one of the best terraces in Porto. Perched on the hillside below the bridge, the views are staggering and the beers cost €1.50. No tourists, no pretension, just football on TV and cheap drinks.",
    priceRange: "€1.50-4",
    bestTime: "Late afternoon (16:00-19:00)",
  },
  {
    name: "Letraria",
    neighborhood: "Aliados",
    type: "craft-beer" as const,
    highlight: "Porto's best craft beer bar. 30 taps rotating local and European brews, knowledgeable staff, and a location right on Aliados. The beer nerd's answer to port wine fatigue.",
    priceRange: "€4-7",
    bestTime: "Evening (19:00-23:00)",
  },
  {
    name: "Prova",
    neighborhood: "Rua das Flores",
    type: "wine" as const,
    highlight: "Serious wine education in a casual setting. The owner walks you through every glass with the enthusiasm of someone who's been doing this for years and still isn't bored. Best port tasting outside a cellar.",
    priceRange: "€3-8",
    bestTime: "Afternoon (15:00-18:00)",
  },
  {
    name: "Base Porto",
    neighborhood: "Galerias de Paris",
    type: "cocktail" as const,
    highlight: "Port wine cocktails that actually work — tawny old-fashioneds, white port spritzes, ruby negronis. A cocktail bar that respects Porto's wine heritage while doing something new with it.",
    priceRange: "€7-12",
    bestTime: "Late evening (22:00-01:00)",
  },
];

export const fadoSpots = [
  {
    name: "Casa da Guitarra",
    price: "€15-20",
    description:
      "An intimate fado house on Rua de Sao Joao Novo with shows most evenings. The room holds about 40 people, the performers are excellent, and the atmosphere is genuinely emotional. No dinner — just music and port. One of the few spots in Porto that feels like a Lisbon fado house.",
    bookingNeeded: true,
  },
  {
    name: "Ideal Clube de Fado",
    price: "€20-25",
    description:
      "A dedicated fado venue that takes the music seriously. Professional fadistas perform Thursday through Saturday, and the acoustics are designed for it. Port wine included in the ticket. The crowd is a mix of tourists and Portuguese visitors — a good sign.",
    bookingNeeded: true,
  },
  {
    name: "Calem Wine Cellar Fado",
    price: "€22-28",
    description:
      "Fado inside a working port wine cellar. The performance happens among the barrels, which adds atmosphere even if it's obviously staged. Two fadistas, two guitarists, and a glass of port or moscatel. The 9 PM show has better energy than the 6 PM one.",
    bookingNeeded: true,
  },
  {
    name: "Restaurante Mal Cozinhado",
    price: "Free with dinner",
    description:
      "A traditional restaurant in Ribeira that hosts live fado on weekend evenings. The food is solid (bacalhau, tripas), and the music happens between courses. Not a dedicated fado house, but the informality is part of the charm — performers wander between tables.",
    bookingNeeded: false,
  },
  {
    name: "O Fado",
    price: "€15",
    description:
      "Small, unpretentious venue near Batalha with nightly performances. The fadistas rotate, so the quality varies, but on a good night it's genuinely stirring. The room is tiny enough that you feel the music physically. BYOB is not an option — they serve port and wine.",
    bookingNeeded: false,
  },
];

export const nightlifeFaqs = [
  {
    question: "What time does nightlife start in Porto?",
    answer:
      "Late. Most bars on Galerias de Paris don't fill up until 23:00-midnight. Dinner typically runs until 22:00-22:30, then people move to bars. Clubs don't peak until 1:00-2:00 AM. If you show up at a bar at 21:00, you'll be drinking alone.",
  },
  {
    question: "Is Porto nightlife safe?",
    answer:
      "Very safe. Porto is one of the safest cities in Europe for nightlife. The main bar streets are well-lit and busy. Standard precautions apply — don't leave bags unattended, watch for pickpockets in crowded bars, and stick to well-trafficked areas. Taxis and Bolt/Uber are cheap and widely available for getting home.",
  },
  {
    question: "What's the dress code for Porto bars and clubs?",
    answer:
      "Casual. Porto nightlife is relaxed — sneakers are fine everywhere, and even the nicest cocktail bars won't turn you away for wearing jeans. The only exception is a handful of upscale clubs that prefer smart-casual. In general, dress as you would for a nice dinner and you'll be fine everywhere.",
  },
  {
    question: "How much should I budget for a night out in Porto?",
    answer:
      "Porto nightlife is affordable. Beer: €2-3. Wine by the glass: €3-6. Cocktails: €6-10. A solid night out with 4-5 drinks runs €15-25. Galerias de Paris is the cheapest area; cocktail bars and Ribeira are pricier. Most clubs have no cover charge or a small one (€5-10) that includes a drink.",
  },
  {
    question: "Is there a cover charge for Porto clubs?",
    answer:
      "Most bars have no cover. Clubs sometimes charge €5-10 on weekends, which usually includes one drink. Plano B and Maus Habitos may charge €5-8 for DJ nights or live events. Fado venues charge €15-28, usually with port wine included.",
  },
  {
    question: "Where should I go for fado music in Porto?",
    answer:
      "Porto has fewer fado houses than Lisbon, but the ones it has are excellent. Casa da Guitarra and Ideal Clube de Fado are dedicated fado venues. Calem cellar offers fado with port tasting. For a casual experience, Restaurante Mal Cozinhado has live fado with dinner on weekends. Book ahead for all dedicated venues.",
  },
];
