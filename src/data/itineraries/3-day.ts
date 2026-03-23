export const threeDayItinerary = {
  duration: 3,
  title: "3-Day Porto Itinerary 2026 — The Classic Route (Tested by Locals)",
  shortTitle: "The Classic Route",
  subtitle:
    "Three days to fall in love with Porto — from azulejo lanes to Douro sunsets.",
  description:
    "The ideal 3-day Porto itinerary for 2026. Day 1: historic center and Ribeira. Day 2: Gaia wine cellars and Foz do Douro coast. Day 3: Bolhão Market, Cedofeita, and local gems. Tested by locals with exact times, restaurants, and budget tips.",
  lastVerified: "March 2026",
  stats: [
    { label: "Stops", value: "18" },
    { label: "Walking", value: "~14 km" },
    { label: "Budget", value: "€120–€550" },
    { label: "Best For", value: "Most travelers" },
  ],
  overview: [
    {
      day: 1,
      title: "Historic Center & Ribeira",
      highlights: [
        "São Bento Station azulejos",
        "Clérigos Tower panorama",
        "Ribeira waterfront",
        "Porto Cathedral",
        "Sunset at Miradouro da Vitória",
      ],
    },
    {
      day: 2,
      title: "Gaia Wine Cellars & Foz Coast",
      highlights: [
        "Port wine tasting at Taylor's",
        "Teleférico de Gaia cable car",
        "Tram 1 to Foz do Douro",
        "Farol de Felgueiras lighthouse",
        "Seafood dinner by the ocean",
      ],
    },
    {
      day: 3,
      title: "Markets, Art & Cedofeita",
      highlights: [
        "Bolhão Market morning",
        "Rua de Santa Catarina shops",
        "Cedofeita street art",
        "Serralves contemporary art",
        "Farewell dinner at a tasca",
      ],
    },
  ],
  days: [
    {
      dayNumber: 1,
      title: "Historic Center & Ribeira",
      summary: "Porto's greatest hits — azulejo stations, medieval lanes, and the iconic waterfront.",
      stops: [
        {
          time: "9:00 AM",
          period: "morning" as const,
          name: "São Bento Station",
          neighborhood: "Baixa",
          description:
            "Begin where every Porto story starts — in the entrance hall of São Bento, covered with 20,000 azulejo tiles depicting Portuguese history. The tilework by Jorge Colaço took 11 years to complete. Arrive early to appreciate the details without crowds.",
          duration: "20 min",
          cost: "Free",
          tip: "Stand in the center and slowly turn — each wall tells a different chapter of Portuguese history.",
          image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "9:30 AM",
          period: "morning" as const,
          name: "Clérigos Tower",
          neighborhood: "Vitória",
          description:
            "Climb 240 steps to the top of Porto's 75-meter Baroque bell tower for the best panoramic view of the city. On clear days, you can see the Douro estuary meeting the Atlantic. The church at the base is free and features a stunning gilded interior.",
          duration: "45 min",
          cost: "€8",
          tip: "Go first thing in the morning — by 11 AM, the staircase queue can be 30+ minutes.",
        },
        {
          time: "10:30 AM",
          period: "morning" as const,
          name: "Rua das Flores & Porto Cathedral",
          neighborhood: "Sé",
          description:
            "Walk through Porto's prettiest pedestrian street, Rua das Flores, with its Art Nouveau facades and artisan shops. Continue uphill to the Sé do Porto (cathedral), a Romanesque fortress-church dating to the 12th century. The gothic cloister, decorated with azulejos, offers views over the old city.",
          duration: "1 hr",
          cost: "€3 (cloister)",
          tip: "The terrace in front of the cathedral (Terreiro da Sé) has one of the best viewpoints in Porto — and it's free.",
        },
        {
          time: "11:45 AM",
          period: "morning" as const,
          name: "Ribeira District",
          neighborhood: "Ribeira",
          description:
            "Descend through the narrow medieval alleys to the Cais da Ribeira, Porto's UNESCO-listed waterfront. The colorful houses stacked along the Douro are the city's signature image. Walk along the quay, watch the rabelo boats, and soak in the atmosphere.",
          duration: "45 min",
          cost: "Free",
          image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
      ],
      lunch: {
        name: "Jimão",
        cuisine: "Modern Portuguese",
        price: "€€",
        whatToOrder: "The daily fish or the petiscos (small plates) — everything is fresh and seasonal.",
        neighborhood: "Ribeira",
        note: "Small space, reserve for lunch if going on weekends.",
      },
      afternoonStops: [
        {
          time: "2:30 PM",
          period: "afternoon" as const,
          name: "Igreja de São Francisco",
          neighborhood: "Ribeira",
          description:
            "Step inside one of Europe's most jaw-dropping church interiors. The 14th-century Gothic exterior gives no hint of the 300 kg of gold covering every surface inside. The catacombs beneath contain centuries of burials. This is the most gilded church in Portugal.",
          duration: "45 min",
          cost: "€9",
          tip: "No photos allowed inside, but trust us — the gold-covered wood carvings will stay burned in your memory.",
        },
        {
          time: "3:30 PM",
          period: "afternoon" as const,
          name: "Palácio da Bolsa",
          neighborhood: "Ribeira",
          description:
            "The 19th-century Stock Exchange Palace is Porto's most opulent building. The Arab Room, inspired by the Alhambra, took 18 years to decorate. Visits are by guided tour only (every 30 min) and well worth the wait.",
          duration: "45 min",
          cost: "€12",
        },
        {
          time: "4:30 PM",
          period: "afternoon" as const,
          name: "Dom Luís I Bridge Walk",
          neighborhood: "Ribeira → Gaia",
          description:
            "Cross the upper deck of the iconic iron bridge for the best views of both cities. Designed by Théophile Seyrig, a collaborator of Gustave Eiffel. Walk slowly, the view is extraordinary from the middle. Then take the lower deck back to Porto.",
          duration: "30 min",
          cost: "Free",
        },
      ],
      eveningStops: [
        {
          time: "5:30 PM",
          period: "evening" as const,
          name: "Miradouro da Vitória — Sunset",
          neighborhood: "Vitória",
          description:
            "This lesser-known viewpoint near the Clérigos area offers a stunning west-facing panorama — perfect for sunset. Much quieter than Jardim do Morro. Grab a drink from a nearby café and watch the sky turn golden over the rooftops.",
          duration: "45 min",
          cost: "Free",
          tip: "Most tourists go to Jardim do Morro. This viewpoint is Porto's best-kept sunset secret.",
        },
      ],
      dinner: {
        name: "Taberna dos Mercadores",
        cuisine: "Traditional Portuguese",
        price: "€€",
        whatToOrder: "Slow-cooked pork cheeks or the bacalhau com broa (cod with cornbread crust).",
        neighborhood: "Ribeira",
        note: "Book ahead — only 8 tables. The wine list focuses on small Douro producers.",
      },
    },
    {
      dayNumber: 2,
      title: "Gaia Wine Cellars & Foz Coast",
      summary: "Port wine, cable cars, and the Atlantic — Porto's riverside-to-ocean day.",
      stops: [
        {
          time: "9:30 AM",
          period: "morning" as const,
          name: "Taylor's Port Wine Cellar",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Cross to Gaia for a morning tour of one of the most prestigious port houses. Taylor's offers a self-guided audio tour through centuries-old cellars, followed by a tasting of their finest ports. The terrace overlooks the Douro and Porto's skyline — arguably the best view paired with the best wine.",
          duration: "1.5 hrs",
          cost: "€15–€25",
          tip: "Book the premium tasting (€25) for aged tawnies and vintage ports you can't get elsewhere. Morning tours are less crowded.",
          image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "11:30 AM",
          period: "morning" as const,
          name: "Graham's Port Lodge",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Walk 10 minutes uphill to Graham's for a second tasting — their style is different from Taylor's (richer, more full-bodied). The terrace restaurant Vinum is one of the best lunch spots in Gaia, with a Douro panorama that justifies every euro.",
          duration: "1 hr",
          cost: "€15–€20",
          tip: "Graham's and Taylor's are the two most worthwhile cellars. Skip Sandeman (too touristy) unless you love the cape branding.",
        },
      ],
      lunch: {
        name: "Vinum at Graham's",
        cuisine: "Modern Portuguese",
        price: "€€€",
        whatToOrder: "The tasting menu paired with Graham's ports. The roasted octopus is exceptional.",
        neighborhood: "Vila Nova de Gaia",
        note: "Reserve 2-3 days ahead. Window seats with river views go first.",
      },
      afternoonStops: [
        {
          time: "2:30 PM",
          period: "afternoon" as const,
          name: "Teleférico de Gaia",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Take the Gaia cable car from the upper level (near the bridge) down to the riverside. It's a 5-minute ride with sweeping views of the Douro, the bridge, and Porto's skyline. Touristy? Yes. Worth it? Also yes.",
          duration: "15 min",
          cost: "€7 one-way",
        },
        {
          time: "3:00 PM",
          period: "afternoon" as const,
          name: "Tram 1 to Foz do Douro",
          neighborhood: "Ribeira → Foz",
          description:
            "Cross back to Porto via the lower bridge deck and catch historic Tram 1 from Infante. This rattling vintage tram follows the Douro river all the way west to Foz do Douro, where the river meets the Atlantic Ocean. The 30-minute ride is a journey through time.",
          duration: "30 min",
          cost: "€3.50",
          tip: "Sit on the left side for river views. The tram runs every 30 min — don't rely on it for tight schedules.",
        },
        {
          time: "4:00 PM",
          period: "afternoon" as const,
          name: "Foz do Douro & Farol de Felgueiras",
          neighborhood: "Foz do Douro",
          description:
            "Where the Douro meets the Atlantic — Foz is Porto's seaside neighborhood, with a long promenade, rocky beaches, and a lighthouse (Farol de Felgueiras) at the river mouth. Walk along Avenida do Brasil past the Pérgola da Foz pavilion and breathe in the salt air.",
          duration: "1.5 hrs",
          cost: "Free",
          tip: "The Pérgola da Foz is beautiful at golden hour. Grab a coffee at Praia da Luz — the terrace faces the ocean.",
          image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80",
        },
      ],
      eveningStops: [
        {
          time: "6:00 PM",
          period: "evening" as const,
          name: "Sunset at Jardim do Morro",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Take the bus or metro back toward Gaia to catch sunset at the garden above the bridge. Locals bring wine, guitars, and blankets. This is Porto at its most authentic — no filter needed.",
          duration: "1 hr",
          cost: "Free",
        },
      ],
      dinner: {
        name: "Cafeína",
        cuisine: "Contemporary Portuguese",
        price: "€€–€€€",
        whatToOrder: "Grilled fish of the day or the tasting menu. Excellent wine list with Douro focus.",
        neighborhood: "Foz do Douro",
        note: "If you stay in Foz for dinner instead of going back to Gaia, Cafeína is the best pick. Chic but unpretentious.",
      },
    },
    {
      dayNumber: 3,
      title: "Markets, Art & Cedofeita",
      summary: "The Porto that locals love — markets, street art, and creative neighborhoods.",
      stops: [
        {
          time: "9:00 AM",
          period: "morning" as const,
          name: "Bolhão Market",
          neighborhood: "Bolhão",
          description:
            "Start your last day at Porto's grand market, beautifully restored in 2022. Two floors of fresh produce, flowers, cured meats, cheeses, and the freshest fish you'll see outside a dock. This is where Porto feeds itself — follow the locals to the best stalls.",
          duration: "1 hr",
          cost: "Free entry",
          tip: "Try the pastel de nata at Confeitaria do Bolhão (stall on the ground floor). Buy some presunto or queijo to take home.",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "10:15 AM",
          period: "morning" as const,
          name: "Rua de Santa Catarina & Majestic Café",
          neighborhood: "Bolhão",
          description:
            "Porto's main shopping street is a mix of international brands and local shops. The star attraction is Café Majestic — an Art Nouveau masterpiece from 1921 where JK Rowling reportedly wrote early Harry Potter chapters. Even if you don't go in (it's pricey), admire the facade.",
          duration: "45 min",
          cost: "Free (window shopping)",
        },
        {
          time: "11:15 AM",
          period: "morning" as const,
          name: "Chapel of Souls (Capela das Almas)",
          neighborhood: "Bolhão",
          description:
            "On the corner of Santa Catarina, this small church is covered entirely in blue-and-white azulejo tiles — the largest tiled facade in Porto. The 15,947 tiles depict scenes from the lives of saints. It's easy to miss in the commercial bustle, but don't.",
          duration: "15 min",
          cost: "Free",
        },
      ],
      lunch: {
        name: "Gazela",
        cuisine: "Street food",
        price: "€",
        whatToOrder: "Cachorrinhos — Porto's famous mini hot dogs with spicy sauce and melted cheese. Pair with a Super Bock beer.",
        neighborhood: "Batalha",
        note: "Standing room only, cash preferred. Two cachorrinhos = one meal. The line moves fast.",
      },
      afternoonStops: [
        {
          time: "1:30 PM",
          period: "afternoon" as const,
          name: "Cedofeita Creative Quarter",
          neighborhood: "Cedofeita",
          description:
            "Porto's creative heart is centered around Rua de Cedofeita and Rua Miguel Bombarda. Independent galleries, vintage shops, design studios, and specialty coffee. This is the anti-tourist Porto — where young artists and entrepreneurs are shaping the city's future.",
          duration: "1.5 hrs",
          cost: "Free",
          tip: "Must-visits: Matéria Prima (design shop), Armazém do Café (coffee), and whatever gallery opening is happening on Miguel Bombarda.",
          image: "https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "3:30 PM",
          period: "afternoon" as const,
          name: "Serralves Museum & Gardens",
          neighborhood: "Lordelo do Ouro",
          description:
            "Porto's contemporary art museum, designed by Álvaro Siza Vieira, set within 18 hectares of stunning gardens. Even if contemporary art isn't your thing, the pink Art Deco villa and the sweeping gardens are worth the trip alone. The treetop walk opened in 2019.",
          duration: "2 hrs",
          cost: "€20 (museum + gardens)",
          tip: "The gardens alone are worth the visit. If short on time, skip the main museum and explore the park and Art Deco villa.",
        },
      ],
      eveningStops: [
        {
          time: "6:00 PM",
          period: "evening" as const,
          name: "Farewell drinks on Rua da Galeria de Paris",
          neighborhood: "Vitória",
          description:
            "Porto's nightlife street comes alive from early evening. The narrow lane is lined with bars, each with its own personality — from jazz clubs to craft cocktail bars. It's the perfect place for a farewell drink before dinner.",
          duration: "1 hr",
          cost: "€3–€8 per drink",
        },
      ],
      dinner: {
        name: "A Cozinha do Manel",
        cuisine: "Traditional home cooking",
        price: "€€",
        whatToOrder: "Tripas à moda do Porto — the signature tripe stew that gives Porto residents their nickname 'tripeiros'. It's better than it sounds.",
        neighborhood: "Miragaia",
        note: "Tiny neighborhood tasca. Reserve ahead. This is how Porto's grandmothers cook.",
      },
    },
  ],
  budget: {
    rows: [
      { category: "Accommodation (3 nights)", budget: "€75–€120", mid: "€240–€360", luxury: "€600+" },
      { category: "Food & Drinks", budget: "€45–€75", mid: "€105–€150", luxury: "€250+" },
      { category: "Activities & Entrance Fees", budget: "€30", mid: "€55", luxury: "€100+" },
      { category: "Transport", budget: "€5 (walk + metro)", mid: "€15", luxury: "€45 (taxis)" },
    ],
    totals: { budget: "€155–€230", mid: "€415–€580", luxury: "€995+" },
  },
  faqs: [
    {
      question: "Is 3 days enough for Porto?",
      answer:
        "Three days is the sweet spot for most travelers. You'll cover the historic center, wine cellars, the coast, and have time for markets and creative neighborhoods. You'll leave feeling like you truly experienced Porto, not just rushed through it.",
    },
    {
      question: "What's the best area to stay for 3 days?",
      answer:
        "Baixa or Vitória are ideal — central, walkable to everything, and close to restaurants. Ribeira is more scenic but touristy. Cedofeita is hip but slightly further from the waterfront. Avoid staying in Gaia unless you specifically want wine lodge views.",
    },
    {
      question: "Do I need to book wine cellars in advance?",
      answer:
        "Yes, especially for Graham's and Taylor's premium tastings. Standard tastings at most cellars can be booked same-day, but premium experiences and weekend slots fill up 2-3 days ahead. Booking online also saves 10-15% at most places.",
    },
    {
      question: "Is Porto walkable?",
      answer:
        "Very walkable, but very hilly. Porto is built on steep granite hillsides — comfortable shoes are non-negotiable. The metro is excellent for longer distances (airport, Serralves, Foz). Walking from Ribeira to Clérigos involves serious uphill climbing.",
    },
    {
      question: "Should I get the Porto Card?",
      answer:
        "The Porto Card (3-day: €25 with transport) gives free public transport and discounts at museums. It's worth it if you plan to use the metro frequently and visit 3+ paid attractions. Skip it if you prefer walking and only visiting 1-2 sites.",
    },
    {
      question: "What's the best time of year for 3 days in Porto?",
      answer:
        "May-June and September-October are ideal — warm weather, fewer crowds, and lower prices than July-August. Porto's São João festival (June 23-24) is unforgettable if you don't mind the chaos. Winter is mild but rainy.",
    },
    {
      question: "Can I add a day trip to the Douro Valley?",
      answer:
        "You'd need at least 4 days. A proper Douro Valley day trip takes 8-10 hours. If you have 3 days, focus on Porto itself — save the Douro for a longer trip. Our 5-day itinerary includes a Douro day trip.",
    },
  ],
  related: [
    {
      title: "1-Day Porto Itinerary",
      description: "Short on time? Hit every essential in 24 hours.",
      href: "/1-day-porto-itinerary",
      category: "Itinerary",
    },
    {
      title: "Port Wine Cellars Guide",
      description: "Complete guide to Gaia's best tours and tastings.",
      href: "/guides/port-wine-cellars-guide",
      category: "Wine Guide",
    },
    {
      title: "Where to Eat in Porto",
      description: "A local's guide to the best food across every neighborhood.",
      href: "/guides/where-to-eat-porto",
      category: "Food Guide",
    },
  ],
};
