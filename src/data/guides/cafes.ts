export const cafes = [
  {
    name: "Caf\u00E9 Majestic",
    neighborhood: "Rua de Santa Catarina",
    style: "historic" as const,
    coffeeHighlight:
      "The coffee itself is fine \u2014 solid espresso, competent galao. You\u2019re not paying for the coffee, though. You\u2019re paying for the 1921 Belle \u00C9poque interior: carved wood, gilded mirrors, marble tables, and a sense that Pessoa might walk in any minute.",
    foodHighlight:
      "Pastries and light meals are available but overpriced. The French toast is surprisingly decent.",
    price: "\u20AC5\u20137 for coffee",
    vibe: "Grand, theatrical, unashamedly touristy. Think Viennese coffeehouse transported to northern Portugal.",
    tip: "Go once for the architecture, take your photos, then find a real caf\u00E9 for your daily coffee. The tourist premium is 3\u20134x what you\u2019d pay anywhere else in Porto.",
  },
  {
    name: "Combi Coffee Roasters",
    neighborhood: "Cedofeita",
    style: "specialty" as const,
    coffeeHighlight:
      "The best specialty coffee in Porto, and it\u2019s not even close. Single-origin pour-overs rotated weekly, perfectly dialed-in espresso, and baristas who actually know their beans. I come here almost every morning when I\u2019m in Porto.",
    foodHighlight:
      "Minimal food \u2014 a few pastries and light snacks. This is a coffee-first operation.",
    price: "\u20AC2.50\u20134",
    vibe: "Minimalist, clean, quiet. Wooden benches, white walls, the sound of a grinder. No pretension, just excellent coffee.",
    tip: "Ask what\u2019s on pour-over today. The baristas love talking about their current rotation and will happily guide you if you\u2019re not sure what to order.",
  },
  {
    name: "Bop",
    neighborhood: "Rua de Miguel Bombarda",
    style: "specialty" as const,
    coffeeHighlight:
      "Excellent flat whites and filter coffee in a space that doubles as an art gallery. The espresso blend is smooth and balanced \u2014 no harsh bitterness.",
    foodHighlight:
      "Great pastries, homemade cakes, and a small but well-curated brunch menu on weekends. The cardamom roll is exceptional.",
    price: "\u20AC2.50\u20133.50",
    vibe: "Creative, relaxed, Miguel Bombarda energy. Art on the walls rotates monthly. The kind of place where you end up staying two hours.",
    tip: "Come on a Saturday morning when the street\u2019s galleries are open. Coffee at Bop, then wander the art spaces \u2014 it\u2019s one of Porto\u2019s best low-key mornings.",
  },
  {
    name: "Mesa 325",
    neighborhood: "Cedofeita",
    style: "specialty" as const,
    coffeeHighlight:
      "Strong espresso-based drinks and a good selection of specialty blends. The cortado here is one of the best in the city.",
    foodHighlight:
      "This is where the food matches the coffee. Excellent brunch plates, creative sandwiches, and fresh juices. The avocado toast is clich\u00E9 but genuinely well-made.",
    price: "\u20AC3\u20134 for coffee",
    vibe: "Modern brunch culture meets Portuguese warmth. Busy on weekends, calmer midweek. Good for working with a laptop.",
    tip: "Come for brunch and stay for coffee, not the other way around. The food is the real draw, and the coffee keeps you there.",
  },
  {
    name: "Caf\u00E9 Progresso",
    neighborhood: "Pra\u00E7a Carlos Alberto",
    style: "historic" as const,
    coffeeHighlight:
      "A proper Portuguese caf\u00E9 since 1899. The bica (espresso) is dark, strong, and costs what coffee should cost in Porto. This is where university professors and retirees have been drinking the same coffee for decades.",
    foodHighlight:
      "Traditional pastries, simple sandwiches. The bifana (pork sandwich) is solid. Nothing fancy, everything honest.",
    price: "\u20AC1.50\u20132",
    vibe: "Time-capsule Porto. High ceilings, old tile work, the smell of roasted coffee and cigarette ghosts. Locals outnumber tourists 10 to 1.",
    tip: "Sit at the counter and order a bica. You\u2019ll pay less than at a table, and you\u2019ll feel more like a local. This is the anti-Majestic \u2014 all substance, no performance.",
  },
  {
    name: "Noshi Coffee",
    neighborhood: "Rua de S\u00E1 da Bandeira",
    style: "specialty" as const,
    coffeeHighlight:
      "Japanese-influenced precision meets Portuguese coffee culture. The pour-over technique is meticulous, the latte art is beautiful, and there\u2019s a calm intentionality to every cup. The matcha latte is also excellent if you want a break from coffee.",
    foodHighlight:
      "Small selection of Japanese-inspired pastries and light snacks. The mochi are worth trying.",
    price: "\u20AC2.50\u20133.50",
    vibe: "Zen minimalism. Small space, careful details, unhurried service. It feels like stepping out of Porto\u2019s chaos into a quiet room in Kyoto.",
    tip: "This is a tiny space \u2014 maybe 15 seats. Visit mid-afternoon on a weekday to avoid the crowd. Worth the wait if it\u2019s full.",
  },
  {
    name: "Padaria Ribeiro",
    neighborhood: "Various locations",
    style: "traditional" as const,
    coffeeHighlight:
      "No single-origin beans, no latte art, no Instagram angle. Just a proper gal\u00E3o (milky coffee in a tall glass) for about a euro, served fast. This is how most Porto locals actually drink their coffee \u2014 standing at a bakery counter at 7 AM.",
    foodHighlight:
      "The pastel de nata here is underrated \u2014 not the best in Porto, but reliable and always fresh. The gal\u00E3o + nata combo for \u20AC2 is the best breakfast deal in the city.",
    price: "\u20AC1\u20132",
    vibe: "Fluorescent lights, glass display cases, regulars who nod but don\u2019t talk. Functional, unpretentious, real.",
    tip: "Order a gal\u00E3o and a pastel de nata. Stand at the counter. Eat, drink, leave. Total time: 4 minutes. Total cost: about \u20AC2. This is Porto coffee culture at its most authentic.",
  },
  {
    name: "F\u00E1brica Coffee Roasters",
    neighborhood: "Rua das Flores",
    style: "specialty" as const,
    coffeeHighlight:
      "They roast their own beans in-house, and you can smell it from the street. The espresso is rich and nuanced, and they offer a solid range of brewing methods. The house blend is consistently excellent.",
    foodHighlight:
      "Light pastries and cakes. Simple but good \u2014 the focus is clearly on the coffee.",
    price: "\u20AC2.50\u20133.50",
    vibe: "Industrial-chic roastery on one of Porto\u2019s prettiest streets. Exposed brick, burlap sacks, the roaster humming in the corner. Smells incredible.",
    tip: "Rua das Flores is one of Porto\u2019s best walking streets. Combine F\u00E1brica with a stroll \u2014 the street is car-free and lined with azulejo facades.",
  },
];

export const coffeeGlossary = [
  {
    term: "Bica",
    description:
      "A straight espresso. In Porto, you\u2019ll hear \u201Cum caf\u00E9\u201D more than \u201Cbica\u201D (that\u2019s more of a Lisbon term), but both work. Small, strong, dark \u2014 the default Portuguese coffee.",
  },
  {
    term: "Gal\u00E3o",
    description:
      "Milky coffee served in a tall glass \u2014 roughly 1/4 espresso, 3/4 steamed milk. The closest thing to a latte in traditional Portuguese coffee. What most locals drink in the morning.",
  },
  {
    term: "Meia de Leite",
    description:
      "Half coffee, half milk, served in a cup rather than a glass. Stronger than a gal\u00E3o, less intense than a bica. A good middle ground if you want milk but not too much.",
  },
  {
    term: "Abatanado",
    description:
      "A longer, weaker espresso \u2014 more water, same amount of coffee. Similar to an americano but pulled differently. Order this if you find a bica too intense.",
  },
  {
    term: "Caf\u00E9 Cheio",
    description:
      "Literally \u201Cfull coffee.\u201D An espresso with extra water added after extraction. Slightly different from an abatanado \u2014 think of it as a topped-up espresso rather than a diluted one.",
  },
];

export const faqs = [
  {
    question: "What\u2019s the difference between specialty and traditional coffee in Porto?",
    answer:
      "Traditional Porto caf\u00E9s serve dark-roasted espresso (bica) and milky gal\u00E3os \u2014 strong, simple, cheap. Specialty shops like Combi and F\u00E1brica use lighter roasts, single-origin beans, and modern brewing methods. Both are worth experiencing, but they\u2019re almost different drinks entirely.",
  },
  {
    question: "How much does coffee cost in Porto?",
    answer:
      "At a traditional caf\u00E9 or bakery, an espresso costs \u20AC0.70\u2013\u20AC1.20 and a gal\u00E3o around \u20AC1\u2013\u20AC1.50. Specialty coffee shops charge \u20AC2.50\u2013\u20AC4 for espresso-based drinks and \u20AC3.50\u2013\u20AC5 for pour-overs. Caf\u00E9 Majestic is the outlier at \u20AC5\u2013\u20AC7.",
  },
  {
    question: "Do Porto caf\u00E9s have WiFi for working?",
    answer:
      "Most specialty caf\u00E9s (Combi, Mesa 325, F\u00E1brica) have WiFi and welcome laptops during quieter hours. Traditional caf\u00E9s generally don\u2019t have WiFi and aren\u2019t designed for lingering. If you need to work, Cedofeita has the highest concentration of laptop-friendly spots.",
  },
  {
    question: "What should I order if I just want a \u2018normal coffee\u2019?",
    answer:
      "Ask for \u201Cum caf\u00E9\u201D for an espresso, or \u201Cum gal\u00E3o\u201D if you want something milky and mild. At specialty shops, a flat white or cortado will feel most familiar to anyone used to modern coffee culture.",
  },
  {
    question: "Is Caf\u00E9 Majestic worth the price?",
    answer:
      "For the coffee alone? No. For the experience of sitting in a 1921 Belle \u00C9poque interior with gilded mirrors and carved wood? Once, yes. Treat it as a cultural visit rather than your morning caf\u00E9 and you won\u2019t be disappointed. Just don\u2019t go back the next day \u2014 spend that money at Combi instead.",
  },
  {
    question: "What is a pastel de nata and where should I eat one with coffee?",
    answer:
      "A pastel de nata is a Portuguese custard tart \u2014 flaky pastry filled with creamy, slightly caramelized egg custard. The classic pairing is a bica + nata at the counter of any bakery. Padaria Ribeiro does the combo for about \u20AC2. For our full rankings, see our past\u00E9is de nata guide.",
  },
];
