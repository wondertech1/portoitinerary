export const organizedTours = [
  {
    name: "Porto Walkers",
    duration: "3 hours",
    meetingPoint: "Praca da Liberdade (by the statue of Dom Pedro IV)",
    style: "Free (tips-based)",
    highlights: [
      "Covers Aliados, Clerigos, Se Cathedral, Ribeira, and the bridge",
      "Daily departures at 10:15 AM and 2:45 PM",
      "Small groups with local, English-speaking guides",
      "Great overview of Porto's history, from medieval walls to port wine trade",
    ],
    tip: "The morning tour is smaller and more conversational. The afternoon one draws bigger crowds, especially in summer. I've done both and would pick 10:15 AM every time.",
    bestFor: "First-time visitors who want context before exploring on their own",
  },
  {
    name: "Porto Free Walking Tour",
    duration: "2.5 hours",
    meetingPoint: "Avenida dos Aliados (near the McDonald's building — yes, the fancy one)",
    style: "Free (tips-based)",
    highlights: [
      "Similar route to Porto Walkers — Aliados, Sao Bento, Se, Ribeira",
      "More focus on azulejos and architecture than history",
      "Daily at 10:00 AM and 3:00 PM",
      "Guides are young locals, often university students with strong opinions",
    ],
    tip: "The guides here vary more in quality than Porto Walkers. When you get a good one, it's the best tour in the city. When you don't, it's still decent.",
    bestFor: "Architecture lovers and anyone who wants a faster-paced walk",
  },
  {
    name: "Taste Porto Food Tours",
    duration: "3.5 hours",
    meetingPoint: "Varies by tour (confirmed by email after booking)",
    style: "Paid (EUR 55-65 per person)",
    highlights: [
      "6-8 food stops including francesinha, pasteis de nata, petiscos, and local wine",
      "Small groups (max 12 people)",
      "Covers neighborhoods most tourists miss — Bolhao Market area, Cedofeita backstreets",
      "Includes enough food to replace lunch entirely",
    ],
    tip: "This is the one paid tour I tell everyone to book. The food alone is worth more than the ticket price, and the guide context changes how you eat for the rest of your trip. Book at least 3 days ahead — they sell out.",
    bestFor: "Food lovers who want to eat like a local, not like a tourist",
  },
  {
    name: "We Hate Tourism Tours",
    duration: "2.5-3 hours",
    meetingPoint: "Varies by tour (multiple route options)",
    style: "Paid (EUR 25-35 per person)",
    highlights: [
      "Alternative Porto — street art, hidden courtyards, graffiti-covered staircases",
      "Routes through Fontainhas, Bonfim, and Miguel Bombarda",
      "Guides are artists, musicians, and longtime residents",
      "Anti-tourist-trap philosophy — they actively steer you away from overpriced spots",
    ],
    tip: "This is a second-day tour. Do a free walking tour first for the basics, then book this one to see the Porto that doesn't appear on Instagram. Their Bonfim route is my favorite.",
    bestFor: "Repeat visitors, street art enthusiasts, anyone tired of tourist checklists",
  },
];

export const selfGuidedRoutes = [
  {
    name: "Historic Center Route",
    duration: "2 hours",
    distance: "3 km",
    description:
      "The essential Porto walk. Start at the grand Aliados avenue, duck into Sao Bento station for the azulejos, climb to the Se Cathedral for rooftop views, then wind down through narrow medieval lanes to Ribeira and the river. This is the walk I recommend on everyone's first morning.",
    stops: [
      "Avenida dos Aliados",
      "Sao Bento Station",
      "Rua das Flores",
      "Se Cathedral & Terreiro da Se",
      "Escadas do Barredo",
      "Cais da Ribeira",
    ],
    startPoint: "Praca da Liberdade / Aliados",
    bestTime: "Morning (before 10 AM for fewer crowds)",
  },
  {
    name: "Azulejo Trail",
    duration: "1.5 hours",
    distance: "2.5 km",
    description:
      "Porto's blue-and-white tile facades are everywhere, but this route connects the best ones in a single walk. See our full azulejo guide for detailed descriptions of each stop — this is the walking route that links them efficiently.",
    stops: [
      "Sao Bento Station (20,000 azulejo tiles)",
      "Igreja do Carmo & Carmelitas",
      "Chapel of Souls (Capela das Almas)",
      "Igreja de Santo Ildefonso",
      "Rua de Santa Catarina facades",
    ],
    startPoint: "Sao Bento Station",
    bestTime: "Morning (best light on east-facing church facades)",
  },
  {
    name: "Riverside Walk (Ribeira to Foz)",
    duration: "1.5 hours",
    distance: "5 km",
    description:
      "The walk from Ribeira to Foz is my single favorite thing to do in Porto. You follow the Douro downstream, leaving the crowds behind within 10 minutes. The path passes under the Arrabida bridge, through the Passeio Alegre gardens, and ends at the Atlantic. By the time you reach Foz, the city feels completely different — salty air, surfers, and seafood restaurants instead of tourist menus.",
    stops: [
      "Cais da Ribeira (start)",
      "Massarelos waterfront",
      "Passeio Alegre gardens",
      "Jardim do Passeio Alegre bandstand",
      "Farol de Felgueiras (lighthouse on the breakwater)",
      "Foz do Douro promenade",
    ],
    startPoint: "Cais da Ribeira (the waterfront)",
    bestTime: "Late afternoon (the light on the river is extraordinary, and you arrive in Foz for sunset)",
  },
  {
    name: "Gaia Wine Route",
    duration: "2 hours",
    distance: "2.5 km",
    description:
      "Cross the Dom Luis I Bridge on the upper deck (a viewpoint in itself), then explore the Gaia side — port wine cellars, riverside cafes, and one of Porto's best viewpoints. You can taste wine at 3-4 cellars without a reservation if you go in the morning.",
    stops: [
      "Dom Luis I Bridge (upper deck crossing)",
      "Jardim do Morro",
      "Serra do Pilar viewpoint",
      "Cais de Gaia (riverside cellar row)",
      "Taylor's, Graham's, or Sandeman (pick one for a full tour)",
      "Teleferico de Gaia (cable car back down, optional)",
    ],
    startPoint: "Porto side of Dom Luis I Bridge",
    bestTime: "Morning (cellars are quieter, bridge is less crowded)",
  },
  {
    name: "Street Art & Cedofeita",
    duration: "1.5 hours",
    distance: "2 km",
    description:
      "Porto's creative quarter is walkable and full of surprises. Start on Rua Miguel Bombarda (galleries and street art), wander through Cedofeita's independent shops and cafes, and end at Praca Carlos Alberto. This is the neighborhood where locals actually hang out on weekends.",
    stops: [
      "Rua Miguel Bombarda (galleries and murals)",
      "Rua de Cedofeita (shops and cafes)",
      "Mercado do Bolhao (recently renovated market)",
      "Praca Carlos Alberto",
    ],
    startPoint: "Rua Miguel Bombarda",
    bestTime: "Late morning on a Saturday (galleries open, market buzzing)",
  },
];

export const walkingTourFaqs = [
  {
    question: "Are the free walking tours in Porto actually free?",
    answer:
      "Yes, there's no fixed price — you pay what you think the tour was worth at the end. That said, guides rely on tips as their income. EUR 5-10 per person is a fair tip for a 2-3 hour tour. If the guide was great, tip EUR 10-15.",
  },
  {
    question: "Do I need to book free walking tours in advance?",
    answer:
      "It's recommended. Both Porto Walkers and Porto Free Walking Tour let you reserve a spot online. You can show up without booking, but groups sometimes fill up in peak season (June-September).",
  },
  {
    question: "Which walking tour is best for first-time visitors?",
    answer:
      "Porto Walkers for a thorough overview, or the Historic Center self-guided route if you prefer going at your own pace. Do one of these on your first morning — it gives you a mental map of the city that makes everything else easier.",
  },
  {
    question: "Is Porto too hilly for walking tours?",
    answer:
      "Porto is hilly, but manageable. The steepest sections are around the Se Cathedral and Ribeira. Wear shoes with good grip (cobblestones are slippery when wet). The riverside walk to Foz is almost entirely flat if you want an easier route.",
  },
  {
    question: "Can I do a self-guided walking tour with kids?",
    answer:
      "The Riverside Walk to Foz and the Gaia Wine Route are both stroller-friendly on the flat sections. The Historic Center Route has steep stairs — use a baby carrier instead. Most kids enjoy the bridge crossing and the Gaia cable car.",
  },
  {
    question: "What should I wear on a walking tour in Porto?",
    answer:
      "Comfortable shoes with grip are essential — Porto's cobblestones and hills will punish fashion shoes. In summer, bring a hat and water. In winter, layers and a rain jacket. Sunscreen year-round — the Atlantic sun is stronger than you'd expect.",
  },
];
