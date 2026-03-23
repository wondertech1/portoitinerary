export const oneDayItinerary = {
  duration: 1,
  title: "1-Day Porto Itinerary 2026 — The Perfect Day (Locally Tested)",
  shortTitle: "The Perfect Day",
  subtitle:
    "Twenty-four hours, six neighborhoods, one unforgettable day in Porto.",
  description:
    "The perfect 1-day Porto itinerary for 2026. Walk from São Bento to the Ribeira, cross Dom Luís I Bridge, taste port wine in Gaia, and catch sunset over the Douro. Locally tested route with exact times, costs, and restaurant picks.",
  lastVerified: "March 2026",
  stats: [
    { label: "Stops", value: "8" },
    { label: "Walking", value: "~5 km" },
    { label: "Budget", value: "€40–€180" },
    { label: "Best For", value: "First-timers" },
  ],
  overview: [
    {
      day: 1,
      title: "Historic Porto & Gaia",
      highlights: [
        "São Bento Station azulejos",
        "Clérigos Tower panorama",
        "Ribeira waterfront lunch",
        "Port wine tasting in Gaia",
        "Sunset at Jardim do Morro",
      ],
    },
  ],
  days: [
    {
      dayNumber: 1,
      title: "Historic Porto & Gaia",
      summary:
        "From azulejo-covered train stations to port wine cellars across the river.",
      stops: [
        {
          time: "9:00 AM",
          period: "morning" as const,
          name: "São Bento Station",
          neighborhood: "Baixa",
          description:
            "Start your day at Porto's most beautiful train station. The entrance hall is covered with 20,000 hand-painted azulejo tiles depicting scenes from Portuguese history. You don't need a ticket — just walk in and look up. The tilework by Jorge Colaço took 11 years to complete (1905–1916) and tells the story of Portugal from ancient times through the Age of Discovery.",
          duration: "20 min",
          cost: "Free",
          tip: "Arrive before 9:30 to beat the tour groups. The best light hits the tiles from the south-facing windows in the morning.",
          image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "9:30 AM",
          period: "morning" as const,
          name: "Clérigos Tower (Torre dos Clérigos)",
          neighborhood: "Vitória",
          description:
            "Walk 5 minutes uphill to Porto's most iconic landmark. The 75-meter Baroque tower offers the best 360° panorama of the city. Yes, it's 240 steps — but the view of terracotta rooftops tumbling toward the Douro is worth every one. The church below is free to enter and often overlooked.",
          duration: "45 min",
          cost: "€8",
          tip: "Buy tickets online to skip the queue. The tower is narrowest at the top — if you're claustrophobic, the church interior is equally impressive.",
          image:
            "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "10:30 AM",
          period: "morning" as const,
          name: "Livraria Lello & Rua das Carmelitas",
          neighborhood: "Vitória",
          description:
            "Stroll down Rua das Carmelitas toward the famous Livraria Lello bookshop. Even if you skip the interior (€8 entry, redeemable on book purchases), the ornate neo-Gothic facade is worth admiring. Continue past the Carmo Church — its entire side wall is one massive azulejo panel.",
          duration: "30 min",
          cost: "Free–€8",
          tip: "Skip Lello if the queue is long — it's stunning but tiny and packed. The Carmo Church side wall is a better photo op anyway.",
        },
        {
          time: "11:15 AM",
          period: "morning" as const,
          name: "Bolhão Market (Mercado do Bolhão)",
          neighborhood: "Bolhão",
          description:
            "Walk east to Porto's grand market, beautifully restored in 2022. Two floors of fresh produce, cheese, cured meats, flowers, and bacalhau (dried cod). This is where Porto locals actually shop. Grab a pastel de nata from Confeitaria do Bolhão or sample some presunto (cured ham).",
          duration: "45 min",
          cost: "Free entry",
          tip: "The ground floor has the freshest produce; the upper floor has more artisan food shops and cafes with balcony seating.",
        },
      ],
      lunch: {
        name: "Café Santiago",
        cuisine: "Traditional Portuguese",
        price: "€€",
        whatToOrder:
          "The francesinha — Porto's iconic meat-and-cheese-smothered sandwich drowned in spicy beer sauce. Share one if it's your first time.",
        neighborhood: "Baixa",
        note: "Cash preferred. Get there before 12:30 or after 14:00 to avoid the worst queues.",
      },
      afternoonStops: [
        {
          time: "2:00 PM",
          period: "afternoon" as const,
          name: "Ribeira District & Cais da Ribeira",
          neighborhood: "Ribeira",
          description:
            "Walk downhill through narrow medieval lanes to the Ribeira waterfront — Porto's UNESCO-listed heart. The colorful townhouses stacked along the Douro are the city's most photographed scene. Wander the alleyways, peek into tiny shops, and soak in the atmosphere of Porto's oldest neighborhood.",
          duration: "45 min",
          cost: "Free",
          tip: "Walk down Rua das Flores — it's the prettiest street in Porto, lined with azulejo facades and local boutiques.",
          image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "3:00 PM",
          period: "afternoon" as const,
          name: "Dom Luís I Bridge — Upper Deck",
          neighborhood: "Ribeira → Gaia",
          description:
            "Cross the iconic double-decker iron bridge on the upper level for the best views of both Porto and Gaia. Designed by a student of Gustave Eiffel, the bridge connects Porto's historic center to the port wine cellars of Vila Nova de Gaia. The walk takes 5 minutes but you'll stop for photos at least three times.",
          duration: "15 min",
          cost: "Free",
          tip: "The upper deck can be windy. Cross from Porto to Gaia (east to west) in the afternoon for the best light on Porto's skyline.",
        },
        {
          time: "3:30 PM",
          period: "afternoon" as const,
          name: "Port Wine Tasting — Taylor's or Graham's",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Welcome to the reason Porto is famous. Vila Nova de Gaia's hillside is lined with port wine cellars (lodges), most offering tastings and tours. Taylor's has the most impressive cellars and a stunning terrace. Graham's offers a more intimate experience with river views. Both include guided tours explaining how port wine is made, followed by tastings of 3-5 wines.",
          duration: "1.5 hrs",
          cost: "€15–€25",
          tip: "Book online 2-3 days ahead, especially for Graham's. Ask for the premium tasting — the difference between a €15 and €25 tasting is significant.",
          image:
            "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
        },
      ],
      eveningStops: [
        {
          time: "5:30 PM",
          period: "evening" as const,
          name: "Jardim do Morro — Sunset",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Walk up to the garden at the Gaia end of the Dom Luís I Bridge upper deck. This grassy hillside is Porto's best sunset spot — locals gather here every evening with wine, snacks, and guitars. Watch the golden light paint Porto's skyline pink and orange as the sun drops behind the Douro.",
          duration: "45 min",
          cost: "Free",
          tip: "Grab a bottle of vinho verde and some queijo from a nearby shop. Sunset is around 19:30 in summer, 17:30 in winter.",
        },
        {
          time: "7:30 PM",
          period: "evening" as const,
          name: "Dinner in Ribeira",
          neighborhood: "Ribeira",
          description:
            "Cross back to Porto on the lower deck of Dom Luís I and find a riverside table for dinner. The Ribeira waterfront restaurants are touristy but magical at night — the reflections on the Douro, the rabelo boats, the lit-up Gaia hillside across the river.",
          duration: "1.5 hrs",
          cost: "€20–€50",
        },
      ],
      dinner: {
        name: "Bacalhau",
        cuisine: "Portuguese seafood",
        price: "€€",
        whatToOrder:
          "Bacalhau à Brás (shredded cod with eggs, onions, and crispy potatoes) or polvo à lagareiro (roasted octopus with olive oil and garlic).",
        neighborhood: "Ribeira",
        note: "For a less touristy option, walk 5 minutes uphill to Cantinho do Avillez by chef José Avillez.",
      },
    },
  ],
  budget: {
    rows: [
      {
        category: "Accommodation",
        budget: "€25–€40",
        mid: "€80–€120",
        luxury: "€200+",
      },
      {
        category: "Food & Drinks",
        budget: "€15–€25",
        mid: "€35–€50",
        luxury: "€80+",
      },
      {
        category: "Activities",
        budget: "€8",
        mid: "€25",
        luxury: "€50+",
      },
      {
        category: "Transport",
        budget: "€0 (walk)",
        mid: "€5 (metro)",
        luxury: "€15 (taxi)",
      },
    ],
    totals: { budget: "€48–€73", mid: "€145–€200", luxury: "€345+" },
  },
  faqs: [
    {
      question: "Is 1 day enough for Porto?",
      answer:
        "One day is enough to see Porto's highlights — São Bento, Clérigos Tower, the Ribeira waterfront, and a port wine tasting in Gaia. You'll miss deeper neighborhoods like Cedofeita and Foz do Douro, but you'll leave with a real taste of the city. If possible, spend at least 2-3 days.",
    },
    {
      question: "What's the best day of the week to visit Porto?",
      answer:
        "Tuesday to Thursday are ideal — fewer tourists, all attractions open. Avoid Mondays when many museums are closed. Weekends are busier but have a livelier atmosphere, especially in Ribeira.",
    },
    {
      question: "Can I do this itinerary without a car?",
      answer:
        "Absolutely. This entire itinerary is walkable — about 5 km total. Porto is compact and best explored on foot. The only transport you might want is the metro from the airport to downtown (Line E, ~30 min, €2.50).",
    },
    {
      question: "How much money do I need for 1 day in Porto?",
      answer:
        "Budget travelers can manage on €50–€75 including hostel, meals, and a wine tasting. Mid-range travelers should budget €150–€200 for a nice hotel, sit-down meals, and premium tastings. Porto is one of Western Europe's most affordable cities.",
    },
    {
      question: "What should I wear in Porto?",
      answer:
        "Comfortable walking shoes are essential — the city is hilly with cobblestone streets. Dress in layers; Porto's weather shifts quickly, especially near the river. A light jacket is useful even in summer evenings.",
    },
  ],
  related: [
    {
      title: "Where to Eat in Porto",
      description: "A local's guide to the best food across every neighborhood.",
      href: "/guides/where-to-eat-porto",
      category: "Food Guide",
    },
    {
      title: "Port Wine Cellars Guide",
      description: "Complete guide to Gaia's best tours and tastings.",
      href: "/guides/port-wine-cellars-guide",
      category: "Wine Guide",
    },
    {
      title: "Best Francesinha in Porto",
      description: "8 spots ranked — we ate them all.",
      href: "/guides/best-francesinha-porto",
      category: "Food Guide",
    },
  ],
};
