export const essentialDishes = [
  {
    name: "Francesinha",
    description:
      "Porto's signature sandwich: layers of ham, steak, and sausage wrapped in bread, covered in melted cheese, and drowned in a spicy beer-and-tomato sauce. It's outrageous, it's heavy, and it's the single thing you must eat in Porto.",
    where: "Café Santiago, Bufete Fase, Lado B",
  },
  {
    name: "Bacalhau (Salt Cod)",
    description:
      "Portugal claims 365 ways to cook bacalhau — one for every day. In Porto, try bacalhau à Brás (shredded with eggs and crispy potatoes), bacalhau com broa (with cornbread crust), or bacalhau à Gomes de Sá (with potatoes, onions, and olives).",
    where: "Adega São Nicolau, Taberna dos Mercadores",
  },
  {
    name: "Tripas à Moda do Porto",
    description:
      "The dish that gave Porto locals their nickname 'tripeiros' (tripe-eaters). A hearty stew of tripe, white beans, chouriço, and vegetables. It's an acquired taste, but eating it is a rite of passage.",
    where: "A Cozinha do Manel, O Gaveto",
  },
  {
    name: "Bifana",
    description:
      "A thin marinated pork steak slapped in a crusty roll. The marinade (white wine, garlic, paprika) is everything. Simple, cheap, and one of Portugal's best street foods.",
    where: "Conga, Casa Guedes",
  },
  {
    name: "Pastel de Nata",
    description:
      "The custard tart that needs no introduction. Porto's version is slightly less famous than Lisbon's Pastéis de Belém, but just as good. Eat them warm, dusted with cinnamon.",
    where: "Manteigaria, Confeitaria do Bolhão, Fabrica da Nata",
  },
  {
    name: "Caldo Verde",
    description:
      "A comforting soup of potato, shredded kale (couve galega), olive oil, and chouriço. It's served everywhere in Porto, especially in winter. The simplest version is often the best.",
    where: "Any traditional tasca",
  },
  {
    name: "Sardinhas Assadas",
    description:
      "Grilled sardines are a summer tradition, especially during São João (June 23-24) when the entire city smells of charcoal and fish. Served whole on bread with roasted peppers.",
    where: "Adega São Nicolau, any Ribeira restaurant (June-September)",
  },
  {
    name: "Polvo à Lagareiro",
    description:
      "Roasted octopus drizzled with the best olive oil Portugal can produce, served with small roasted potatoes. When it's good, the octopus is crispy outside and tender inside.",
    where: "Cantinho do Avillez, Pedro Lemos",
  },
];

export const restaurantsByNeighborhood = {
  ribeira: {
    name: "Ribeira",
    description:
      "The waterfront is touristy but has genuine gems hidden in the back streets.",
    restaurants: [
      {
        name: "Taberna dos Mercadores",
        cuisine: "Traditional Portuguese",
        price: "€€",
        whatToOrder:
          "Slow-cooked pork cheeks, bacalhau com broa. Small but excellent Douro wine list.",
        tip: "Only 8 tables — reserve ahead. The owner picks wines personally from small Douro producers.",
        highlight: true,
      },
      {
        name: "Cantinho do Avillez",
        cuisine: "Contemporary Portuguese",
        price: "€€–€€€",
        whatToOrder:
          "Chef José Avillez's tasting menu. The polvo is exceptional. Superb Portuguese wine list.",
        tip: "Book 3-4 days ahead. The casual ground floor is more fun than the formal upstairs.",
      },
      {
        name: "Adega São Nicolau",
        cuisine: "Seafood, Traditional",
        price: "€€",
        whatToOrder:
          "Grilled sardines (summer), bacalhau à Gomes de Sá, or the catch of the day.",
        tip: "Touristy location but genuine food. Skip the riverfront restaurants and walk one street back.",
      },
      {
        name: "Jimão",
        cuisine: "Modern Portuguese",
        price: "€€",
        whatToOrder:
          "The daily fish, petiscos (small plates). Everything seasonal.",
        tip: "Small space. Reserve for weekend lunches.",
      },
    ],
  },
  bolhao: {
    name: "Bolhão & Baixa",
    description:
      "The commercial heart — best for quick bites, street food, and market eating.",
    restaurants: [
      {
        name: "Café Santiago",
        cuisine: "Traditional — Francesinhas",
        price: "€€",
        whatToOrder:
          "The francesinha. Period. Share one if it's your first time — they're enormous.",
        tip: "Cash preferred. Go before 12:30 or after 14:00.",
        highlight: true,
      },
      {
        name: "Gazela",
        cuisine: "Street food",
        price: "€",
        whatToOrder:
          "Cachorrinhos — mini hot dogs with spicy sauce and melted cheese. Two = one meal.",
        tip: "Standing room only, cash preferred. The line moves fast.",
      },
      {
        name: "Confeitaria do Bolhão",
        cuisine: "Pastries & Coffee",
        price: "€",
        whatToOrder:
          "Pastel de nata (warm), bola de Berlim (custard donut), espresso.",
        tip: "Inside Bolhão Market. Grab pastries to eat on the move.",
      },
      {
        name: "Casa Guedes",
        cuisine: "Sandwiches",
        price: "€",
        whatToOrder:
          "The pernil (roasted pork leg) sandwich with queijo da Serra cheese. A local institution.",
        tip: "Order at the counter, eat standing. Perfect quick lunch.",
      },
    ],
  },
  cedofeita: {
    name: "Cedofeita",
    description:
      "Porto's creative quarter — specialty coffee, natural wine bars, and chef-driven restaurants.",
    restaurants: [
      {
        name: "Flow",
        cuisine: "Brunch & Contemporary",
        price: "€€",
        whatToOrder:
          "Weekend brunch (açaí bowls, eggs any style). The coffee program is one of Porto's best.",
        tip: "Reserve for weekend brunch. Weekday mornings are quieter.",
      },
      {
        name: "Lado B",
        cuisine: "Francesinhas & Craft Beer",
        price: "€€",
        whatToOrder:
          "Their creative francesinha is controversial but brilliant. Great craft beer selection.",
        tip: "The 'original' francesinha debate in Porto is fierce. Lado B's version divides opinion — try it.",
        highlight: true,
      },
      {
        name: "Euskalduna Studio",
        cuisine: "Fine dining",
        price: "€€€€",
        whatToOrder:
          "The multi-course tasting menu by Vasco Coelho Santos. One of Porto's Michelin-starred experiences.",
        tip: "Book weeks ahead. 12-seat counter format, open kitchen. This is Porto's most exciting restaurant.",
      },
    ],
  },
  foz: {
    name: "Foz do Douro",
    description:
      "Porto's seaside neighborhood — fresh seafood and ocean views.",
    restaurants: [
      {
        name: "Cafeína",
        cuisine: "Contemporary Portuguese",
        price: "€€–€€€",
        whatToOrder:
          "Grilled fish of the day, tasting menu. Excellent Douro wine list.",
        tip: "Chic but unpretentious. Reserve for dinner.",
        highlight: true,
      },
      {
        name: "Praia da Luz",
        cuisine: "Seafood",
        price: "€€",
        whatToOrder:
          "Arroz de marisco (seafood rice), grilled fish. The terrace faces the ocean.",
        tip: "Lunch service 12:30–15:00. Cash and card accepted.",
      },
      {
        name: "Pedro Lemos",
        cuisine: "Fine dining",
        price: "€€€€",
        whatToOrder:
          "The tasting menu. Michelin-starred chef using the finest Portuguese ingredients.",
        tip: "Book 1-2 weeks ahead. This is Porto's most refined dining experience.",
      },
    ],
  },
  gaia: {
    name: "Vila Nova de Gaia",
    description: "The port wine side of the river — cellar restaurants and terraces.",
    restaurants: [
      {
        name: "Vinum at Graham's",
        cuisine: "Modern Portuguese",
        price: "€€€",
        whatToOrder:
          "Tasting menu paired with Graham's ports. The octopus is legendary.",
        tip: "Reserve 3+ days ahead. Window seats with river views go first.",
        highlight: true,
      },
      {
        name: "Wine Quay Bar",
        cuisine: "Petiscos (tapas)",
        price: "€€",
        whatToOrder:
          "Petiscos platter with cheeses, cured meats. Let the sommelier pick the wine.",
        tip: "Casual riverside spot. Great for lighter dining after a day of tastings.",
      },
    ],
  },
};

export const budgetTips = [
  "The daily 'prato do dia' (dish of the day) at traditional tascas is usually €7–€10 for a full meal with drink.",
  "Bolhão Market is cheaper than restaurants for pastries, sandwiches, and fresh fruit.",
  "Lunch menus (ementa do dia) offer the best value — many restaurants serve a full meal for €8–€12.",
  "Super Bock (local beer) costs €1–€2 at bars, vs. €4–€5 for craft beers.",
  "Skip any restaurant that has photos on the menu and staff standing outside trying to pull you in.",
  "Porto tap water is safe and free — order 'água da torneira' to save on bottled water.",
];
