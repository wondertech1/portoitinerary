export const oneDayItinerary = {
  duration: 1,
  title: "1-Day Porto Itinerary 2026 — The Perfect Day (Locally Tested)",
  shortTitle: "The Perfect Day",
  subtitle:
    "Twenty-four hours, six neighborhoods, and a sunset you'll think about for weeks.",
  description:
    "Walk from São Bento to the Ribeira, cross Dom Luís I Bridge, taste port wine in Gaia, and catch sunset over the Douro. One day, eight stops, with exact times, costs, and restaurant picks.",
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
            "Your one day starts here. Walk into the entrance hall, look up, and let 20,000 blue-and-white tiles set the tone for everything Porto does best: turning the functional into the beautiful. You don't need a ticket — this is a working train station, not a museum. Give yourself 15 minutes to absorb the panels, then move on. You have a lot to see today.",
          duration: "15 min",
          cost: "Free",
          tip: "Don't linger too long here — the tiles are stunning but the city outside is better. A quick loop of the hall is enough.",
          image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "9:30 AM",
          period: "morning" as const,
          name: "Clérigos Tower (Torre dos Clérigos)",
          neighborhood: "Vitória",
          description:
            "With only one day, this is your non-negotiable panorama stop. The 240-step climb earns you the single best view in Porto — terracotta rooftops spilling toward the Douro, the Gaia hillside, and the Atlantic on clear days. Use this view to orient yourself for the rest of the day. Skip the church interior if you're short on time.",
          duration: "30 min",
          cost: "€8",
          tip: "Buy tickets online to skip the ticket counter — but you'll still queue for the staircase. Go early (9 AM) or late (after 5 PM). If the wait is 20+ minutes, Miradouro da Vitória is 5 min away and free.",
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
            "Walk east to Porto's grand market, beautifully restored in 2022. Two floors of fresh produce, cheese, cured meats, flowers, and bacalhau (dried cod). The ground floor fish and produce stalls still feel genuine; the upper floor is more artisan and tourist-facing since the 2022 renovation. Grab a pastel de nata from Confeitaria do Bolhão or sample some presunto (cured ham).",
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
            "Head downhill to the waterfront for Porto's signature view — the one you've seen on every travel poster. With one day, don't try to explore every alley. Walk the quay from end to end, take your photos, and keep moving toward the bridge. The Ribeira is for absorbing, not analyzing.",
          duration: "30 min",
          cost: "Free",
          tip: "Take Rua das Flores downhill — it's the prettiest route. At the waterfront, walk left (east) for the best bridge views and fewer crowds.",
          image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "3:00 PM",
          period: "afternoon" as const,
          name: "Dom Luís I Bridge — Upper Deck",
          neighborhood: "Ribeira → Gaia",
          description:
            "Cross the upper deck to Gaia — this is your transition from sightseeing to wine tasting. The walk takes 5 minutes but the mid-bridge panorama is the best free view in Porto. Don't stop too long; the wine cellars are waiting on the other side.",
          duration: "10 min",
          cost: "Free",
          tip: "Cross from Porto to Gaia on the upper deck. You'll return via the lower deck later — it's a completely different perspective.",
        },
        {
          time: "3:30 PM",
          period: "afternoon" as const,
          name: "Port Wine Tasting — Taylor's or Graham's",
          neighborhood: "Vila Nova de Gaia",
          description:
            "With one day, pick ONE cellar and do it properly rather than rushing through two. Taylor's is the best all-rounder: self-guided tour through atmospheric cellars, a tasting of 3-5 wines, and a terrace with the best view in Gaia. If Taylor's is booked, Graham's is equally excellent with a more intimate feel. Either way, choose the premium tasting — the €10 upgrade gets you aged tawnies that are worth the trip alone.",
          duration: "1.5 hrs",
          cost: "€15–€25",
          tip: "Book online 2-3 days ahead. One cellar done well beats two done in a rush. The premium tasting is always worth it.",
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
            "If you only see one sunset in Porto, see it here. The grassy hillside above the bridge fills with locals every evening — bottles of vinho verde, cheese, and the occasional guitar. The light on Porto's granite and tile facades is extraordinary. This is the moment that makes a one-day visit feel complete.",
          duration: "45 min",
          cost: "Free",
          tip: "Grab a €3 bottle of vinho verde from the mini-market on Avenida da República in Gaia. Sunset times: ~19:30 in summer, ~17:30 in winter.",
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
        "Budget travelers can manage on €50–€75 including hostel, meals, and a wine tasting. Mid-range travelers should budget €150–€200 for a nice hotel, sit-down meals, and premium tastings. Porto remains cheaper than Lisbon, Barcelona, or Paris, though prices have risen since 2020.",
    },
    {
      question: "What should I wear in Porto?",
      answer:
        "Comfortable walking shoes are essential — the city is hilly with cobblestone streets. Dress in layers; Porto's weather shifts quickly, especially near the river. A light jacket is useful even in summer evenings.",
    },
  ],
  related: [
    {
      title: "Port Wine for Beginners",
      description: "How to taste, what to order, and what to bring home.",
      href: "/guides/port-wine-tasting-beginners",
      category: "Wine Guide",
    },
    {
      title: "Port Wine Cellars Guide",
      description: "8 cellars compared — prices, tours, and verdicts.",
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
