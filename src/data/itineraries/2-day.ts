export const twoDayItinerary = {
  duration: 2,
  title: "2-Day Porto Itinerary 2026 — The Perfect Weekend (Locally Tested)",
  shortTitle: "The Perfect Weekend",
  subtitle: "Forty-eight hours, two sides of the Douro, and the version of Porto you'll tell people about.",
  description:
    "Day 1: historic center, Ribeira waterfront, and your first port wine tasting. Day 2: Gaia cellars deep-dive, Foz do Douro coast, and a sunset you'll want to photograph. With exact times, costs, and restaurant picks for each meal.",
  lastVerified: "April 2026",
  stats: [
    { label: "Stops", value: "14" },
    { label: "Walking", value: "~10 km" },
    { label: "Budget", value: "€80–€350" },
    { label: "Best For", value: "Weekend trippers" },
  ],
  overview: [
    {
      day: 1,
      title: "Historic Porto & First Tastes",
      highlights: [
        "São Bento Station azulejos",
        "Clérigos Tower panorama",
        "Ribeira waterfront & bridge",
        "First port wine tasting",
        "Sunset at Jardim do Morro",
      ],
    },
    {
      day: 2,
      title: "Wine Cellars & the Coast",
      highlights: [
        "Taylor's or Graham's cellar tour",
        "Tram 1 to Foz do Douro",
        "Atlantic coast & lighthouse",
        "Bolhão Market farewell",
        "Francesinha lunch",
      ],
    },
  ],
  days: [
    {
      dayNumber: 1,
      title: "Historic Porto & First Tastes",
      summary: "The essential Porto — from azulejos to port wine, compressed into one brilliant day.",
      stops: [
        {
          time: "9:00 AM",
          period: "morning" as const,
          name: "São Bento Station",
          neighborhood: "Baixa",
          description:
            "Two days means being strategic. Start at São Bento for the azulejo tiles — 15 minutes is enough to absorb the 20,000-tile entrance hall. The key panels to notice: the Battle of Ceuta on the right (where Portugal's empire began) and the market scenes along the bottom. Then move.",
          duration: "15 min",
          cost: "Free",
          tip: "You'll pass through São Bento again tomorrow for the tram — save the deeper appreciation for then.",
          image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "9:30 AM",
          period: "morning" as const,
          name: "Clérigos Tower",
          neighborhood: "Vitória",
          description:
            "The 240-step climb earns you the only 360° panorama in Porto. From the top, you'll see everything you'll visit today: Ribeira below, Gaia across the river, and the bridge connecting them. Use this view as your mental map for the weekend.",
          duration: "30 min",
          cost: "€8",
          tip: "Buy tickets online. If the queue is long, walk 5 minutes to Miradouro da Vitória for a free sunset-facing alternative.",
        },
        {
          time: "10:15 AM",
          period: "morning" as const,
          name: "Rua das Flores to Ribeira",
          neighborhood: "Ribeira",
          description:
            "Take Porto's prettiest pedestrian street downhill to the waterfront. Rua das Flores has azulejo facades, local boutiques, and café terraces. At the bottom, the Ribeira waterfront opens up — UNESCO-listed townhouses stacked above the Douro, rabelo boats on the water, and the Dom Luís I Bridge framing everything.",
          duration: "45 min",
          cost: "Free",
          image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "11:15 AM",
          period: "morning" as const,
          name: "Igreja de São Francisco",
          neighborhood: "Ribeira",
          description:
            "Duck inside Porto's most jaw-dropping church. The 14th-century Gothic exterior conceals an interior covered in hundreds of kilograms of gold — every surface is gilded Baroque excess. The catacombs beneath add a macabre contrast. No photos allowed inside; the gold burns into memory anyway.",
          duration: "40 min",
          cost: "€9",
        },
      ],
      lunch: {
        name: "Café Santiago",
        cuisine: "Traditional — Francesinhas",
        price: "€€",
        whatToOrder: "The francesinha especial — Porto's signature sandwich with a fried egg on top. Share one if it's your first time. Super Bock beer to drink. Nothing else.",
        neighborhood: "Baixa",
        note: "Cash preferred. Go before 12:30 or after 14:00 to dodge the worst queues.",
      },
      afternoonStops: [
        {
          time: "2:30 PM",
          period: "afternoon" as const,
          name: "Dom Luís I Bridge — Upper Deck",
          neighborhood: "Ribeira → Gaia",
          description:
            "Cross the upper deck to Gaia. The mid-bridge panorama — Porto on one side, wine cellars on the other, 45 meters above the Douro — is the best free view in the city. Walk slowly; you've earned this crossing.",
          duration: "15 min",
          cost: "Free",
        },
        {
          time: "3:00 PM",
          period: "afternoon" as const,
          name: "Espaço Porto Cruz — Casual Tasting",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Save the serious cellar tour for tomorrow morning when your palate is fresh. Today, ease into port wine at this modern tasting space. The rooftop terrace serves port by the glass (€3-8) with a direct view across to Ribeira. No tour, no booking, just walk in and order. The ground floor has a free exhibition on port wine history.",
          duration: "1 hr",
          cost: "€6–€15",
          tip: "Try a Porto Tónico (dry white port with tonic) — it's the perfect afternoon aperitif and less heavy than sweet port.",
          image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
        },
      ],
      eveningStops: [
        {
          time: "5:30 PM",
          period: "evening" as const,
          name: "Jardim do Morro — Sunset",
          neighborhood: "Vila Nova de Gaia",
          description:
            "The grassy hillside above the bridge fills with locals every evening. Grab a bottle of vinho verde (€3 from any nearby mini-market), find a spot, and watch Porto's skyline turn golden. This is the moment that converts visitors into Porto lovers.",
          duration: "1 hr",
          cost: "Free",
        },
      ],
      dinner: {
        name: "Taberna dos Mercadores",
        cuisine: "Traditional Portuguese",
        price: "€€",
        whatToOrder: "Slow-cooked pork cheeks or bacalhau com broa. Let the owner pick the wine — his Douro selection is hand-picked from small producers.",
        neighborhood: "Ribeira",
        note: "Only 8 tables — reserve ahead. Worth the effort.",
      },
    },
    {
      dayNumber: 2,
      title: "Wine Cellars & the Coast",
      summary: "Port wine done properly, the Atlantic coast, and a final market morning.",
      stops: [
        {
          time: "9:00 AM",
          period: "morning" as const,
          name: "Bolhão Market",
          neighborhood: "Bolhão",
          description:
            "Start your last day at Porto's grand market, beautifully restored in 2022. Grab a warm pastel de nata from Confeitaria do Bolhão, browse the fish stalls, cheese vendors, and flower stands. Buy presunto or queijo to take home. This is Porto's kitchen — where the city feeds itself.",
          duration: "45 min",
          cost: "Free entry",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "10:00 AM",
          period: "morning" as const,
          name: "Taylor's Port Wine Cellar",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Now, with yesterday's casual tasting as context, do a proper cellar tour. Taylor's self-guided audio tour walks you through centuries of history, explains how port is made, and ends with a tasting of 3-5 wines. Book the premium tasting (€25) — the aged tawnies are vastly superior to the standard pours. The terrace afterwards has Gaia's best view.",
          duration: "1.5 hrs",
          cost: "€15–€25",
          tip: "Book online 2+ days ahead. Morning tours are less crowded and your palate is sharpest.",
          image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
        },
      ],
      lunch: {
        name: "Vinum at Graham's",
        cuisine: "Modern Portuguese",
        price: "€€€",
        whatToOrder: "The tasting menu paired with Graham's ports. The octopus is legendary. Every table has river views.",
        neighborhood: "Vila Nova de Gaia",
        note: "Reserve 2-3 days ahead. Window seats go first. Worth the splurge on your last afternoon.",
      },
      afternoonStops: [
        {
          time: "2:30 PM",
          period: "afternoon" as const,
          name: "Tram 1 to Foz do Douro",
          neighborhood: "Ribeira → Foz",
          description:
            "Cross back to Porto and catch the vintage Tram 1 from Infante. This rattling wooden tram follows the Douro west for 30 minutes, through Miragaia and Massarelos, to where the river meets the Atlantic. Sit on the left side for water views.",
          duration: "30 min",
          cost: "€3.50",
          tip: "Trams run every 30 min — don't rely on tight schedules. The ride is the experience.",
        },
        {
          time: "3:30 PM",
          period: "afternoon" as const,
          name: "Foz do Douro & Farol de Felgueiras",
          neighborhood: "Foz do Douro",
          description:
            "The Douro meets the Atlantic at this breezy seaside neighborhood. Walk the promenade past the 19th-century Pérgola da Foz, along rocky beaches, to the lighthouse at the river mouth. The sea air, crashing waves, and wide horizon are the perfect contrast to yesterday's medieval lanes.",
          duration: "1.5 hrs",
          cost: "Free",
          image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80",
        },
      ],
      eveningStops: [
        {
          time: "5:30 PM",
          period: "evening" as const,
          name: "Farewell drinks at Miradouro da Vitória",
          neighborhood: "Vitória",
          description:
            "Head back to Porto's quieter sunset viewpoint for your farewell. West-facing, uncrowded, and just as beautiful as Jardim do Morro. Different sunset spot, different perspective — a proper goodbye to a city you'll want to return to.",
          duration: "45 min",
          cost: "Free",
        },
      ],
      dinner: {
        name: "Cantinho do Avillez",
        cuisine: "Contemporary Portuguese",
        price: "€€–€€€",
        whatToOrder: "Chef José Avillez's tasting menu. Superb Portuguese wine list. The casual ground floor is more fun than the formal upstairs.",
        neighborhood: "Ribeira",
        note: "Book 3-4 days ahead. A fitting last meal in Porto.",
      },
    },
  ],
  budget: {
    rows: [
      { category: "Accommodation (2 nights)", budget: "€50–€80", mid: "€160–€240", luxury: "€400+" },
      { category: "Food & Drinks", budget: "€30–€50", mid: "€70–€100", luxury: "€180+" },
      { category: "Activities & Entrance Fees", budget: "€17", mid: "€40", luxury: "€75+" },
      { category: "Transport", budget: "€3 (walk + tram)", mid: "€10", luxury: "€25 (taxis)" },
    ],
    totals: { budget: "€100–€150", mid: "€280–€390", luxury: "€680+" },
  },
  faqs: [
    { question: "Is 2 days enough for Porto?", answer: "Two days covers Porto's essentials — the historic center, a proper wine cellar tour, the waterfront, and the coast. You'll miss deeper neighborhoods (Cedofeita, Bonfim) and the Douro Valley, but you'll leave with a genuine feel for the city. If possible, add a third day for markets and creative neighborhoods." },
    { question: "What's the difference between the 2-day and 3-day itinerary?", answer: "The 2-day covers the core highlights. The 3-day adds Cedofeita (creative quarter), Serralves Museum, a second wine cellar visit, and more time to linger. If you're choosing between them, the 3-day is the sweet spot for most travelers." },
    { question: "Where should I stay for a 2-day visit?", answer: "Vitória/Clérigos — central, walkable to everything on this itinerary. Ribeira is romantic but touristy. Avoid Gaia for a short stay — you'll waste time crossing the bridge for every meal." },
    { question: "Can I do this itinerary arriving Friday evening?", answer: "Absolutely — that's the ideal setup. Arrive Friday, settle in, have dinner in Ribeira. Saturday is Day 1 (historic center + first tasting). Sunday is Day 2 (cellars + coast). Fly out Sunday evening or Monday morning." },
    { question: "How much does a 2-day Porto trip cost?", answer: "Budget: €100-150 total (hostel, street food, free viewpoints). Mid-range: €280-390 (boutique hotel, sit-down meals, cellar tastings). Luxury: €680+ (The Yeatman, fine dining, premium everything). Porto remains cheaper than most Western European capitals, though prices have climbed since 2020." },
  ],
  related: [
    { title: "Port Wine Cellars Guide", description: "8 cellars compared — choose the right one for Day 2.", href: "/guides/port-wine-cellars-guide", category: "Wine Guide" },
    { title: "Where to Eat in Porto", description: "More restaurant picks beyond the itinerary selections.", href: "/guides/where-to-eat-porto", category: "Food Guide" },
    { title: "Best Francesinha in Porto", description: "8 spots ranked if Santiago has too long a queue.", href: "/guides/best-francesinha-porto", category: "Food Guide" },
  ],
};
