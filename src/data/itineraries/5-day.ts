export const fiveDayItinerary = {
  duration: 5,
  title:
    "5-Day Porto Itinerary 2026 — The Deep Dive (Beyond the Tourist Trail)",
  shortTitle: "The Deep Dive",
  subtitle:
    "Five days to discover the Porto most travelers never see — from hidden tascas to Douro Valley vineyards.",
  description:
    "The ultimate 5-day Porto itinerary for 2026. Days 1-3: historic center, wine cellars, coast. Day 4: Douro Valley day trip. Day 5: local Porto — Bonfim street art, hidden tascas, and neighborhoods tourists skip. Full content with exact times, costs, and local tips.",
  lastVerified: "March 2026",
  stats: [
    { label: "Stops", value: "28" },
    { label: "Walking", value: "~22 km" },
    { label: "Budget", value: "€200–€950" },
    { label: "Best For", value: "Deep explorers" },
  ],
  overview: [
    {
      day: 1,
      title: "Historic Center & Ribeira",
      highlights: [
        "São Bento azulejos",
        "Clérigos Tower",
        "Porto Cathedral",
        "Ribeira waterfront",
        "Sunset at Miradouro da Vitória",
      ],
    },
    {
      day: 2,
      title: "Gaia Wine Cellars & River",
      highlights: [
        "Taylor's & Graham's tastings",
        "Teleférico de Gaia",
        "Riverside walk",
        "Sunset at Jardim do Morro",
      ],
    },
    {
      day: 3,
      title: "Foz do Douro & Cedofeita",
      highlights: [
        "Tram 1 to the coast",
        "Lighthouse & ocean views",
        "Cedofeita galleries",
        "Serralves Museum",
      ],
    },
    {
      day: 4,
      title: "Douro Valley Day Trip",
      highlights: [
        "Train to Pinhão",
        "Quinta vineyard visit",
        "Douro Valley wines",
        "River viewpoints",
      ],
    },
    {
      day: 5,
      title: "Hidden Porto & Farewell",
      highlights: [
        "Bolhão Market morning",
        "Bonfim street art",
        "Fontainhas neighborhood",
        "Farewell dinner",
      ],
    },
  ],
  days: [
    {
      dayNumber: 1,
      title: "Historic Center & Ribeira",
      summary: "Porto's greatest hits — the essential first day for every visitor.",
      stops: [
        {
          time: "9:00 AM",
          period: "morning" as const,
          name: "São Bento Station",
          neighborhood: "Baixa",
          description:
            "Start at Porto's most beautiful train station, its entrance hall covered with 20,000 hand-painted azulejo tiles. Jorge Colaço spent 11 years (1905–1916) painting scenes from Portuguese history — battles, royal processions, and everyday life. Arrive before tour groups to appreciate the detail.",
          duration: "20 min",
          cost: "Free",
          tip: "The top-right panel shows the Battle of Valdevez (1140). The bottom panels depict rural Portuguese life and transportation through the ages.",
          image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "9:30 AM",
          period: "morning" as const,
          name: "Clérigos Tower",
          neighborhood: "Vitória",
          description:
            "Porto's 75-meter Baroque bell tower offers the definitive panoramic view. On clear days, the Atlantic is visible. The 240-step climb is narrow but manageable. The church below is free and features an impressive gilded altar.",
          duration: "45 min",
          cost: "€8",
          tip: "Buy online to skip the queue. Go early — by late morning the staircase queue stretches 30+ minutes.",
        },
        {
          time: "10:30 AM",
          period: "morning" as const,
          name: "Rua das Flores to Porto Cathedral",
          neighborhood: "Sé",
          description:
            "Walk through Porto's prettiest street (Rua das Flores) to the 12th-century cathedral. The Romanesque fortress-church sits on Porto's highest point. The Gothic cloister, covered in azulejo tiles, offers panoramic views. Don't miss the silver altarpiece in the chapel — 800 kg of silver.",
          duration: "1 hr",
          cost: "€3 (cloister)",
        },
        {
          time: "11:45 AM",
          period: "morning" as const,
          name: "Ribeira District",
          neighborhood: "Ribeira",
          description:
            "Descend through medieval lanes to the UNESCO-listed waterfront. The colorful townhouses stacked along the Douro are Porto's signature image. Walk the quay, watch the rabelo boats, and peek into Rua da Reboleira — one of the oldest streets in the city.",
          duration: "45 min",
          cost: "Free",
        },
      ],
      lunch: {
        name: "Taberna dos Mercadores",
        cuisine: "Traditional Portuguese",
        price: "€€",
        whatToOrder: "Slow-cooked pork cheeks or bacalhau com broa. Small Douro wine list.",
        neighborhood: "Ribeira",
        note: "Only 8 tables. Reserve for lunch.",
      },
      afternoonStops: [
        {
          time: "2:30 PM",
          period: "afternoon" as const,
          name: "Igreja de São Francisco",
          neighborhood: "Ribeira",
          description:
            "Europe's most gilded church interior — 300 kg of gold covering every surface. The Gothic exterior gives no hint of the Baroque explosion within. The catacombs below contain centuries of burials, including an eerie ossuary.",
          duration: "45 min",
          cost: "€9",
        },
        {
          time: "3:30 PM",
          period: "afternoon" as const,
          name: "Palácio da Bolsa",
          neighborhood: "Ribeira",
          description:
            "Porto's 19th-century Stock Exchange Palace features the Arab Room — 18 years of intricate Moorish-inspired decoration. Guided tours only (every 30 min). The Pátio das Nações (courtyard) is equally impressive.",
          duration: "45 min",
          cost: "€12",
        },
        {
          time: "4:30 PM",
          period: "afternoon" as const,
          name: "Dom Luís I Bridge Walk",
          neighborhood: "Ribeira → Gaia",
          description:
            "Cross the upper deck of the iconic iron bridge — the panorama is extraordinary from the middle. Walk slowly. Then take the lower deck back to Porto.",
          duration: "30 min",
          cost: "Free",
        },
      ],
      eveningStops: [
        {
          time: "5:30 PM",
          period: "evening" as const,
          name: "Miradouro da Vitória",
          neighborhood: "Vitória",
          description:
            "Porto's best-kept sunset secret — this west-facing viewpoint near Clérigos is quieter than Jardim do Morro and has equally stunning views. Grab a drink from a nearby café.",
          duration: "45 min",
          cost: "Free",
        },
      ],
      dinner: {
        name: "Cantinho do Avillez",
        cuisine: "Contemporary Portuguese",
        price: "€€–€€€",
        whatToOrder: "Anything by chef José Avillez. The tasting menu is excellent value. Superb Portuguese wine list.",
        neighborhood: "Ribeira",
        note: "Book 3-4 days ahead. The casual ground floor is more fun than the formal upstairs.",
      },
    },
    {
      dayNumber: 2,
      title: "Gaia Wine Cellars & River",
      summary: "A full day dedicated to port wine — Porto's liquid heritage.",
      stops: [
        {
          time: "9:30 AM",
          period: "morning" as const,
          name: "Taylor's Port Wine Cellar",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Begin at one of the oldest and most prestigious port houses. Taylor's self-guided audio tour walks you through centuries-old cellars explaining how port is made — from grape to glass. The tasting includes their signature LBV and aged tawnies. The terrace has the best cellar view in Gaia.",
          duration: "1.5 hrs",
          cost: "€15–€25",
          tip: "The premium tasting (€25) includes their 20-year and 30-year tawnies — vastly superior to the standard tasting.",
          image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "11:30 AM",
          period: "morning" as const,
          name: "Graham's Port Lodge",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Walk uphill to Graham's for a complementary tasting experience. Where Taylor's is refined and historical, Graham's is warmer and more intimate. Their Six Grapes Reserve is iconic. The terrace restaurant Vinum serves lunch with the best panorama in Gaia.",
          duration: "1 hr",
          cost: "€15–€20",
        },
      ],
      lunch: {
        name: "Vinum at Graham's",
        cuisine: "Modern Portuguese",
        price: "€€€",
        whatToOrder: "Tasting menu with port wine pairing. The octopus dish is legendary.",
        neighborhood: "Vila Nova de Gaia",
        note: "Reserve 3+ days ahead. Window seats go fast.",
      },
      afternoonStops: [
        {
          time: "2:30 PM",
          period: "afternoon" as const,
          name: "Teleférico de Gaia",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Take the cable car from the upper bridge level down to the riverside. Five minutes of sweeping Douro views. Then stroll along the Gaia waterfront past the remaining port lodges.",
          duration: "15 min",
          cost: "€7 one-way",
        },
        {
          time: "3:00 PM",
          period: "afternoon" as const,
          name: "Gaia Riverside Walk",
          neighborhood: "Vila Nova de Gaia",
          description:
            "Walk east along the Gaia waterfront away from the tourist center. Past the last wine lodges, the path becomes peaceful — local fishermen, quiet cafés, and views of Porto's eastern neighborhoods that most visitors never see.",
          duration: "1 hr",
          cost: "Free",
        },
        {
          time: "4:30 PM",
          period: "afternoon" as const,
          name: "Churchill's or Ramos Pinto",
          neighborhood: "Vila Nova de Gaia",
          description:
            "If you still have appetite for wine, Churchill's offers a boutique experience with excellent dry white ports. Ramos Pinto has a beautiful Art Nouveau tasting room. Both are quieter alternatives to the big names.",
          duration: "1 hr",
          cost: "€12–€18",
        },
      ],
      eveningStops: [
        {
          time: "6:00 PM",
          period: "evening" as const,
          name: "Jardim do Morro Sunset",
          neighborhood: "Vila Nova de Gaia",
          description:
            "The classic Porto sunset ritual. Locals gather on this grassy hillside above the bridge with wine, cheese, and guitars. The light hitting Porto's granite and tile facades is extraordinary.",
          duration: "1 hr",
          cost: "Free",
          tip: "Buy a bottle of vinho verde and some queijo from Mercearia das Flores beforehand.",
        },
      ],
      dinner: {
        name: "Wine Quay Bar",
        cuisine: "Petiscos (tapas)",
        price: "€€",
        whatToOrder: "Petiscos platter with local cheeses, cured meats, and whatever wine the sommelier recommends.",
        neighborhood: "Vila Nova de Gaia",
        note: "Casual riverside spot. Great for a lighter dinner after a day of tastings.",
      },
    },
    {
      dayNumber: 3,
      title: "Foz do Douro & Cedofeita",
      summary: "Ocean air, creative neighborhoods, and Porto's contemporary side.",
      stops: [
        {
          time: "9:00 AM",
          period: "morning" as const,
          name: "Tram 1 to Foz do Douro",
          neighborhood: "Ribeira → Foz",
          description:
            "Catch the vintage Tram 1 from Infante (near Ribeira) for a rattling 30-minute ride along the Douro to the coast. The old wooden tram follows the river through Miragaia and Massarelos before reaching Foz do Douro. Sit on the left for water views.",
          duration: "30 min",
          cost: "€3.50",
        },
        {
          time: "10:00 AM",
          period: "morning" as const,
          name: "Foz do Douro Promenade",
          neighborhood: "Foz do Douro",
          description:
            "Where the Douro meets the Atlantic. Walk the promenade past the Pérgola da Foz pavilion, across rocky beaches, to the Farol de Felgueiras lighthouse at the river mouth. The sea air, crashing waves, and wide horizon are the antidote to Porto's narrow streets.",
          duration: "1.5 hrs",
          cost: "Free",
          image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80",
        },
      ],
      lunch: {
        name: "Praia da Luz",
        cuisine: "Seafood",
        price: "€€",
        whatToOrder: "Grilled fish of the day or arroz de marisco (seafood rice). The terrace faces the ocean.",
        neighborhood: "Foz do Douro",
        note: "Cash and card accepted. Lunch service 12:30–15:00.",
      },
      afternoonStops: [
        {
          time: "2:00 PM",
          period: "afternoon" as const,
          name: "Serralves Museum & Gardens",
          neighborhood: "Lordelo do Ouro",
          description:
            "Porto's premier contemporary art space, designed by Álvaro Siza Vieira. The minimalist white building sits within 18 hectares of stunning gardens. The pink Art Deco Casa de Serralves is equally beautiful. The treetop walkway (Passadiço, opened 2019) offers a canopy-level perspective.",
          duration: "2 hrs",
          cost: "€20",
          tip: "The gardens are worth the visit even if you skip the museum. The Land Art installations hidden in the park are delightful.",
        },
        {
          time: "4:30 PM",
          period: "afternoon" as const,
          name: "Cedofeita & Miguel Bombarda",
          neighborhood: "Cedofeita",
          description:
            "Porto's creative quarter. Rua Miguel Bombarda is lined with art galleries, design shops, and specialty coffee. Rua de Cedofeita has vintage shops and independent boutiques. This is where Porto's creative scene lives — artists, designers, and entrepreneurs.",
          duration: "1.5 hrs",
          cost: "Free",
          tip: "Matéria Prima for Portuguese design objects. Armazém do Café for single-origin coffee. Check gallery openings on Miguel Bombarda — they often happen on Saturday afternoons.",
          image: "https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=800&q=80",
        },
      ],
      eveningStops: [
        {
          time: "6:30 PM",
          period: "evening" as const,
          name: "Craft drinks on Rua da Galeria de Paris",
          neighborhood: "Vitória",
          description:
            "Porto's nightlife street starts early. The narrow lane is packed with bars from jazz clubs to natural wine bars. Base Porto has the best cocktails. Era Uma Vez no Porto has the best atmosphere.",
          duration: "1 hr",
          cost: "€4–€10 per drink",
        },
      ],
      dinner: {
        name: "Antiqvvm",
        cuisine: "Fine dining",
        price: "€€€",
        whatToOrder: "The tasting menu — one of Porto's Michelin-starred experiences. Set in a romantic 19th-century palace overlooking the Douro.",
        neighborhood: "Massarelos",
        note: "Book well ahead. Dress code: smart casual. Worth the splurge for a special evening.",
      },
    },
    {
      dayNumber: 4,
      title: "Douro Valley Day Trip",
      summary: "Terraced vineyards, river views, and the birthplace of port wine.",
      stops: [
        {
          time: "8:15 AM",
          period: "morning" as const,
          name: "Train from São Bento to Pinhão",
          neighborhood: "Douro Valley",
          description:
            "Catch the CP train from São Bento station to Pinhão (change at Peso da Régua). The 2.5-hour journey is one of Europe's most beautiful train rides — the tracks follow the Douro river through terraced vineyards, past quintas (wine estates), and under granite cliffs. The landscape changes dramatically after Peso da Régua.",
          duration: "2.5 hrs",
          cost: "€14 each way",
          tip: "Sit on the right side heading east for the best river views. Book tickets at cp.pt — trains fill up in summer. The 8:15 departure gets you to Pinhão by 10:45.",
        },
        {
          time: "11:00 AM",
          period: "morning" as const,
          name: "Pinhão Village & Station",
          neighborhood: "Douro Valley",
          description:
            "Pinhão is the heart of the Douro wine region. Start at the train station — its walls are covered in beautiful azulejo panels depicting Douro wine production and landscapes. Walk through the tiny village center to get your bearings. The views from the bridge over the Douro are spectacular.",
          duration: "30 min",
          cost: "Free",
        },
        {
          time: "11:30 AM",
          period: "morning" as const,
          name: "Quinta de la Rosa or Quinta do Bomfim",
          neighborhood: "Douro Valley",
          description:
            "Visit a working quinta (wine estate) for a tour and tasting. Quinta de la Rosa is a family-run estate with a casual, authentic feel — you'll walk through vineyards and taste wines in a rustic cellar. Quinta do Bomfim (Symington) is larger but equally impressive, with Douro panoramas from the terrace.",
          duration: "2 hrs",
          cost: "€15–€25",
          tip: "Quinta de la Rosa is walkable from Pinhão station (1 km). Quinta do Bomfim requires a short taxi ride. Both include tastings of Douro wines AND ports.",
          image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
        },
      ],
      lunch: {
        name: "DOC by Rui Paula",
        cuisine: "Fine dining with Douro views",
        price: "€€€",
        whatToOrder: "The lunch tasting menu. The restaurant literally floats on the Douro — every table has river views.",
        neighborhood: "Douro Valley",
        note: "Book 1-2 weeks ahead. A taxi from Pinhão is ~€15. If DOC is full, Veladouro in Pinhão village is excellent and affordable.",
      },
      afternoonStops: [
        {
          time: "3:00 PM",
          period: "afternoon" as const,
          name: "São Leonardo de Galafura Viewpoint",
          neighborhood: "Douro Valley",
          description:
            "If you have a taxi arranged, this viewpoint (15 min from Pinhão) offers arguably the most dramatic panorama in the entire Douro Valley — a 180° sweep of terraced vineyards cascading down to the river. Miguel Torga, Portugal's greatest poet, called it 'the most beautiful view in the world.'",
          duration: "30 min",
          cost: "Free (taxi ~€20 round trip)",
        },
        {
          time: "4:30 PM",
          period: "afternoon" as const,
          name: "Train back to Porto",
          neighborhood: "Douro Valley → Porto",
          description:
            "Catch the afternoon train from Pinhão back to Porto. The return journey offers different light on the same dramatic scenery. Settle in with a bottle of Douro wine from the quinta and watch the landscape scroll past.",
          duration: "2.5 hrs",
          cost: "€14",
          tip: "The 16:30 or 17:00 trains work best. Check CP timetable — trains are infrequent.",
        },
      ],
      eveningStops: [],
      dinner: {
        name: "O Paparico",
        cuisine: "Traditional Portuguese fine dining",
        price: "€€€",
        whatToOrder: "Let the chef guide you — everything is seasonal and locally sourced. The wine cellar has 800+ Portuguese labels.",
        neighborhood: "Vitória",
        note: "In a converted townhouse. Very special atmosphere. Book 4-5 days ahead.",
      },
    },
    {
      dayNumber: 5,
      title: "Hidden Porto & Farewell",
      summary: "The Porto most tourists never see — street art, local tascas, and quiet neighborhoods.",
      stops: [
        {
          time: "9:00 AM",
          period: "morning" as const,
          name: "Bolhão Market",
          neighborhood: "Bolhão",
          description:
            "Start your final day at Porto's beautifully restored market. By now you know what you like — go back for that presunto, that cheese, those pastéis de nata. Buy gifts, stock up for the journey home, and say goodbye to the vendors you've befriended.",
          duration: "45 min",
          cost: "Free entry",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        },
        {
          time: "10:00 AM",
          period: "morning" as const,
          name: "Chapel of Souls (Capela das Almas)",
          neighborhood: "Bolhão",
          description:
            "If you haven't seen it yet — the largest azulejo facade in Porto. 15,947 blue-and-white tiles depicting scenes from the lives of saints. An easy stop on Rua de Santa Catarina, and one of the most photogenic buildings in the city.",
          duration: "15 min",
          cost: "Free",
        },
        {
          time: "10:30 AM",
          period: "morning" as const,
          name: "Bonfim Neighborhood & Street Art",
          neighborhood: "Bonfim",
          description:
            "Cross Praça da Batalha into Bonfim — Porto's emerging neighborhood. This is where young locals live, and the streets are covered in some of the city's best street art. Rua do Bonfim and the side streets radiating from it have murals, paste-ups, and installations that rival Cedofeita.",
          duration: "1 hr",
          cost: "Free",
          tip: "Look for work by Hazul Luzah (Porto's most famous street artist) — his geometric faces are scattered throughout Bonfim and Fontainhas.",
        },
        {
          time: "11:45 AM",
          period: "morning" as const,
          name: "Fontainhas & Escadas do Codeçal",
          neighborhood: "Fontainhas",
          description:
            "Porto's most dramatic neighborhood clings to a near-vertical cliff face above the Douro. Walk the narrow Escadas do Codeçal stairway down toward the river — the houses are painted in deep reds, yellows, and blues, and the views are staggering. This is the Porto of postcards, without the tourists.",
          duration: "45 min",
          cost: "Free",
          tip: "The best viewpoint is from the top of the stairs looking down toward the Douro and Dom Luís I Bridge.",
        },
      ],
      lunch: {
        name: "Gazela",
        cuisine: "Street food",
        price: "€",
        whatToOrder: "Cachorrinhos — Porto's legendary mini hot dogs. Two with a Super Bock is the perfect farewell lunch.",
        neighborhood: "Batalha",
        note: "Cash only. Standing room. The line moves fast. Your last chance for Porto's best cheap eat.",
      },
      afternoonStops: [
        {
          time: "1:30 PM",
          period: "afternoon" as const,
          name: "Miragaia Neighborhood Walk",
          neighborhood: "Miragaia",
          description:
            "Porto's quietest riverside neighborhood, between the Ribeira and Foz. Narrow lanes, traditional tascas (taverns), and a pace of life that feels decades behind the rest of the city. Walk along the waterfront, peek into the tiny shops, and imagine Porto before tourism arrived.",
          duration: "1 hr",
          cost: "Free",
        },
        {
          time: "3:00 PM",
          period: "afternoon" as const,
          name: "Last Port Wine & Gifts",
          neighborhood: "Baixa",
          description:
            "Head to Garrafeira do Carmo (near Carmo Church) for Porto's best selection of port wines and Portuguese wines. The staff are extremely knowledgeable and will help you choose bottles to bring home. For food gifts, Casa Chinesa on Rua de Santa Catarina has traditional Portuguese products beautifully packaged.",
          duration: "45 min",
          cost: "Varies",
          tip: "20-year tawny ports (€20-€35) are the best quality-to-price gift. White ports are lighter and less known — a great conversation starter back home.",
        },
      ],
      eveningStops: [
        {
          time: "5:00 PM",
          period: "evening" as const,
          name: "Final sunset — your favorite spot",
          neighborhood: "Your choice",
          description:
            "Return to whichever sunset spot captured your heart. Miradouro da Vitória for quiet contemplation. Jardim do Morro for the social atmosphere. The Ribeira quay for the river reflections. Porto gives you the sunset you need.",
          duration: "1 hr",
          cost: "Free",
        },
      ],
      dinner: {
        name: "A Cozinha do Manel",
        cuisine: "Traditional home cooking",
        price: "€€",
        whatToOrder: "Tripas à moda do Porto — the dish that gave Porto residents their 'tripeiros' nickname. It's a stew of tripe, beans, and chouriço. Better than it sounds. Much better.",
        neighborhood: "Miragaia",
        note: "The perfect last meal in Porto. Tiny tasca, grandma's recipes, local wines. Book ahead — only 6 tables.",
      },
    },
  ],
  budget: {
    rows: [
      { category: "Accommodation (5 nights)", budget: "€125–€200", mid: "€400–€600", luxury: "€1,000+" },
      { category: "Food & Drinks", budget: "€75–€125", mid: "€175–€250", luxury: "€400+" },
      { category: "Activities & Entrance Fees", budget: "€45", mid: "€85", luxury: "€150+" },
      { category: "Transport (incl. Douro train)", budget: "€35", mid: "€55", luxury: "€100+ (taxis)" },
    ],
    totals: { budget: "€280–€405", mid: "€715–€990", luxury: "€1,650+" },
  },
  faqs: [
    {
      question: "Is 5 days too long for Porto?",
      answer:
        "Not at all. Porto rewards slow travel. Five days lets you explore beyond the obvious — hidden neighborhoods, the Douro Valley, the coast, and the local tascas that make this city special. You'll leave feeling like a temporary local, not a tourist.",
    },
    {
      question: "Should I rent a car for 5 days?",
      answer:
        "Only if you want to explore the Douro Valley independently or visit Braga/Guimarães. Within Porto, a car is a liability — the streets are narrow, parking is scarce, and everything is walkable or metro-accessible. For the Douro day trip, the train is more scenic and stress-free.",
    },
    {
      question: "Can I swap the Douro Valley day for Braga or Guimarães?",
      answer:
        "Absolutely. Braga (Portugal's religious capital, 1 hr by train) and Guimarães (birthplace of Portugal, 1.25 hrs) are both excellent day trips. Braga has baroque churches and Bom Jesus. Guimarães has a medieval center and hilltop castle. Both are UNESCO-listed.",
    },
    {
      question: "What neighborhoods should I stay in for 5 days?",
      answer:
        "Baixa or Vitória for maximum convenience. Cedofeita for the creative scene. Bonfim for an authentic local experience. For 5 days, you might even consider splitting — 3 nights in the center, 2 in Foz do Douro for the coastal atmosphere.",
    },
    {
      question: "How do I book the Douro Valley train?",
      answer:
        "Book at cp.pt (Comboios de Portugal). The route is Porto São Bento → Peso da Régua → Pinhão. You may need to change at Régua. Trains run 3-4 times daily, less on weekends. Book at least 2 days ahead in summer. Second class is fine — the views are the same.",
    },
    {
      question: "What's the best time of year for a 5-day Porto trip?",
      answer:
        "May-June: perfect weather, fewer tourists, jacaranda trees in bloom. September-October: warm days, wine harvest season in the Douro. June 23-24: São João festival (Porto's biggest party). July-August: hottest and most crowded. Winter: mild but rainy, great food, zero crowds.",
    },
  ],
  related: [
    {
      title: "3-Day Porto Itinerary",
      description: "The classic Porto trip for most travelers.",
      href: "/3-day-porto-itinerary",
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
