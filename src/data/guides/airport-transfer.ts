export const transferOptions = [
  {
    method: "Metro Line E (Violet)",
    price: "€2.50 (Z4 ticket) + €0.60 Andante card",
    duration: "30–40 min to Trindade/Aliados",
    frequency: "Every 20–30 min (5:30 AM – 12:30 AM)",
    pros: [
      "Cheapest option by far",
      "Direct connection to the city center",
      "No traffic delays — runs on dedicated track",
      "Andante card doubles as your city transit pass",
    ],
    cons: [
      "No service between 12:30 AM and 5:30 AM",
      "Can be crowded during rush hour",
      "No luggage racks — you hold your bags",
      "Doesn't drop you at your hotel door",
    ],
    verdict: "Best for most travelers",
    details:
      "Line E (Violet) connects the airport directly to Trindade, where you can transfer to any other metro line. The ride takes about 30 minutes. Trains are clean, safe, and air-conditioned. Buy an Andante card at the machines in the airport station — you'll use it for buses and trams too.",
  },
  {
    method: "Uber / Bolt",
    price: "€10–15",
    duration: "20–25 min",
    frequency: "On demand, 24/7",
    pros: [
      "Door-to-door — straight to your hotel",
      "Available at any hour, including late night",
      "Comfortable with luggage",
      "Fixed price shown before you book",
    ],
    cons: [
      "Surge pricing during peak hours and holidays",
      "Traffic on VCI ring road can push it to 35+ min",
      "Pickup area can be confusing at the airport",
      "Needs data/Wi-Fi to request a ride",
    ],
    verdict: "Best for late arrivals or groups",
    details:
      "Both Uber and Bolt work well in Porto. Pickup is at the departures level (upstairs) — follow signs for ride-hailing. Prices are typically €10-12 to the center, but surge pricing during peak times or São João week can push it to €20+. Split between two people, it's barely more than the metro.",
  },
  {
    method: "Taxi",
    price: "€20–25 (flat rate to center)",
    duration: "20–25 min",
    frequency: "Taxi rank outside arrivals, 24/7",
    pros: [
      "No app or data needed — just walk to the rank",
      "Flat rate to the city center (posted at the rank)",
      "Available immediately on arrival",
      "Handles large luggage easily",
    ],
    cons: [
      "Most expensive standard option",
      "Some drivers take longer routes — insist on the flat rate",
      "Night surcharge (20%) after 9 PM",
      "Credit cards not always accepted",
    ],
    verdict: "Convenient but overpriced",
    details:
      "The taxi rank is directly outside arrivals. A posted sign shows the flat rate to the city center (around €20-25). Insist on the flat rate or ensure the meter is running. Night surcharge of 20% applies after 9 PM and on weekends/holidays. Carry cash — not all taxis take cards despite the legal requirement.",
  },
  {
    method: "Airport Bus (GetBus 601 / 3M)",
    price: "€2",
    duration: "40–50 min",
    frequency: "Every 30 min",
    pros: [
      "Cheapest option available",
      "Covers stops the metro doesn't reach",
      "Accepts Andante card (Z4 zone)",
      "Good for destinations along the bus route",
    ],
    cons: [
      "Slowest option — stuck in traffic",
      "Less frequent than metro",
      "Limited luggage space during busy times",
      "Route can be confusing for first-timers",
    ],
    verdict: "Only if your hotel is on the route",
    details:
      "The 601 bus connects the airport to Cordoaria (near Clérigos Tower) via Boavista. The 3M connects to Campanhã station. Unless your accommodation is directly on one of these routes, the metro is faster, equally cheap, and more straightforward. Pay with an Andante card or buy a ticket from the driver.",
  },
  {
    method: "Private Transfer",
    price: "€25–40",
    duration: "20–25 min",
    frequency: "Pre-booked, any time",
    pros: [
      "Driver waiting with your name — zero stress",
      "Door-to-door, any hour",
      "Fixed price regardless of traffic or surcharges",
      "Ideal for families with car seats or lots of luggage",
    ],
    cons: [
      "Most expensive option",
      "Must book in advance — no spontaneity",
      "Flight delays mean waiting or rebooking",
      "Not significantly better than Uber for most travelers",
    ],
    verdict: "Worth it for families or large groups",
    details:
      "Book through Welcome Pickups or GetTransfer for reliable service. Most hotels can also arrange transfers — ask when you book. Prices are fixed at €25-40 depending on vehicle size. Useful if you're arriving very late, have small children, or want zero decisions after a long flight.",
  },
];

export const metroStepByStep = [
  "Follow the metro signs inside the airport — the station is connected to the terminal (5-min walk through the underground corridor).",
  "Buy a reusable Andante card (€0.60) from the blue ticket machines. They accept coins, notes, and contactless cards.",
  "Load a Z4 ticket (€2.50) onto your Andante card — this covers all zones between the airport and the city center.",
  "Validate your card on the yellow reader before entering the platform. Keep it handy — inspectors do check.",
  "Board Line E (Violet) heading toward Estádio do Dragão. Trains run every 20–30 minutes.",
  "Ride to Trindade station (about 25 min) — this is the main interchange for all metro lines.",
  "At Trindade, transfer if needed: Line D (Yellow) for São Bento/Ribeira, or stay on Line E for Aliados/Bolhão.",
  "Exit at your nearest station. For the center, most travelers get off at Trindade, Aliados, or Bolhão.",
];

export const airportTransferFaqs = [
  {
    question: "How far is Porto airport from the city center?",
    answer:
      "Porto airport (Francisco Sá Carneiro) is about 11 km northwest of the city center. It's one of the closest major airports to its city in Europe — 20-25 minutes by car or 30-40 minutes by metro. You won't waste half your day getting into town.",
  },
  {
    question: "What is the cheapest way to get from Porto airport to the center?",
    answer:
      "The metro (Line E, Violet) costs €2.50 for a Z4 ticket plus €0.60 for the reusable Andante card — €3.10 total. The airport bus (601/3M) is slightly cheaper at €2 but slower. Both are safe and reliable.",
  },
  {
    question: "Is there an airport train in Porto?",
    answer:
      "There's no dedicated airport train, but the metro Line E (Violet) connects the airport directly to the city center. The station is inside the airport terminal. It functions like a light rail — fast, frequent, and integrated into the city's transit network.",
  },
  {
    question: "How do I get from Porto airport to the center at night?",
    answer:
      "The metro stops running at around 12:30 AM. After that, your options are Uber/Bolt (€10-15, available 24/7), taxi (€20-25 from the rank outside arrivals), or a pre-booked private transfer. We'd recommend having Uber or Bolt installed before you land.",
  },
  {
    question: "Can I use the Andante card on buses and trams too?",
    answer:
      "Yes. The Andante card works on all STCP buses, metro lines, and some trams in Porto. Load it with credit at any metro station. It's your single transit card for the whole city — don't throw it away after the airport ride.",
  },
  {
    question: "Should I buy the Porto Card at the airport?",
    answer:
      "The Porto Card (€13 for 1 day, €33 for 4 days) includes unlimited transit and museum discounts. If you're staying 3+ days and plan to visit multiple museums, it can save money. Buy it at the airport tourist office (arrivals hall). Otherwise, the basic Andante card is all you need for transport.",
  },
];
