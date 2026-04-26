import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import RestaurantCard from "@/components/guides/RestaurantCard";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import GuideCTA from "@/components/shared/GuideCTA";
import ProTip from "@/components/shared/ProTip";
import JsonLd from "@/components/shared/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import {
  essentialDishes,
  restaurantsByNeighborhood,
  budgetTips,
} from "@/data/guides/restaurants";

export const metadata: Metadata = {
  title:
    "Where to Eat in Porto 2026 — A Local's Guide to the Best Food | Porto Itinerary",
  description:
    "The best restaurants in Porto, organized by neighborhood. From francesinha spots to Michelin-starred dining, with what to order at each place and what to skip.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/where-to-eat-porto",
  },
  openGraph: {
    title: "Where to Eat in Porto 2026 — A Local's Guide",
    description:
      "From €5 cachorrinhos to Michelin stars. Best restaurants by neighborhood with exact orders and local tips.",
    url: "https://portoitinerary.com/guides/where-to-eat-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Where to Eat in Porto 2026 — A Local's Guide to the Best Food",
  description:
    "Best restaurants in Porto organized by neighborhood, with what to order at each place.",
  url: "https://portoitinerary.com/guides/where-to-eat-porto",
  datePublished: "2026-03-22",
  dateModified: "2026-04-23",
  author: {
    "@type": "Person",
    name: "Porto Itinerary",
    url: "https://portoitinerary.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Porto Itinerary",
    url: "https://portoitinerary.com",
  },
};

const faqs = [
  {
    question: "What food is Porto famous for?",
    answer:
      "Porto is famous for the francesinha (a meat-and-cheese sandwich in spicy sauce), bacalhau (salt cod prepared 365 ways), tripas à moda do Porto (tripe stew), pastéis de nata (custard tarts), and of course, port wine. The city also has excellent fresh seafood, especially grilled sardines in summer.",
  },
  {
    question: "Is Porto cheap to eat?",
    answer:
      "Yes — Porto is one of the most affordable food cities in Western Europe. A daily lunch menu (prato do dia) costs €7–€10. Street food like bifanas and cachorrinhos are €3–€5. Even mid-range restaurants with wine rarely exceed €25–€30 per person.",
  },
  {
    question: "Where do locals actually eat in Porto?",
    answer:
      "Locals eat at neighborhood tascas (taverns) away from the Ribeira waterfront. Bolhão Market for market food, Cedofeita for trendy spots, Miragaia for traditional cooking. The general rule: if staff are trying to pull you in from the street, the food is mediocre.",
  },
  {
    question: "Do I need reservations in Porto?",
    answer:
      "For casual restaurants and tascas, no. For popular spots like Café Santiago (francesinhas) or Graham's Vinum, book 2-3 days ahead. For fine dining (Euskalduna, Pedro Lemos, Antiqvvm), book 1-2 weeks ahead, especially on weekends.",
  },
  {
    question: "What time do people eat in Porto?",
    answer:
      "Lunch: 12:30–14:30 (kitchen closes at 15:00). Dinner: 19:30–22:00 (later on weekends). Porto eats later than most European cities. Arriving at 19:00 for dinner means you'll have the restaurant to yourself — locals appear around 20:30.",
  },
];

const related = [
  {
    title: "Best Francesinha in Porto",
    description: "8 spots ranked — we ate them all.",
    href: "/guides/best-francesinha-porto",
    category: "Food Guide",
  },
  {
    title: "Port Wine for Beginners",
    description: "How to taste, what to order, and what to bring home.",
    href: "/guides/port-wine-tasting-beginners",
    category: "Wine Guide",
  },
  {
    title: "3-Day Porto Itinerary",
    description: "The ideal trip with restaurant picks for every meal.",
    href: "/3-day-porto-itinerary",
    category: "Itinerary",
  },
];

export default function WhereToEatPage() {
  const neighborhoods = Object.values(restaurantsByNeighborhood);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Food Guide"
          title="Where to Eat in Porto 2026"
          subtitle="A local's guide to the best food — from standing-room street stalls to Michelin-starred tables."
          lastVerified="March 2026"
          breadcrumbItems={[
            { label: "Where to Eat" },
          ]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Essential dishes */}
            <GuideSection
              label="Must Eat"
              title="8 Essential Porto Dishes"
              description="Before you choose a restaurant, know what you're eating. These are the dishes that define Porto's kitchen."
            >
              <div className="space-y-4">
                {essentialDishes.map((dish, i) => (
                  <ScrollReveal key={dish.name} delay={i * 0.05}>
                    <div className="py-4 border-b border-stone-200 last:border-0">
                      <h3 className="font-serif text-lg text-stone-800 mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-1">
                        {dish.description}
                      </p>
                      <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                        Best at: {dish.where}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              The francesinha is Porto&apos;s most iconic dish — and the
              differences between restaurants are huge. We ate at 8 spots and
              ranked them in our{" "}
              <a href="/guides/best-francesinha-porto" className="text-terracotta underline">
                best francesinha guide
              </a>.
              Pair your meals with port wine — our{" "}
              <a href="/guides/port-wine-tasting-beginners" className="text-terracotta underline">
                beginner&apos;s tasting guide
              </a>{" "}
              explains which styles go with which dishes.
            </ProTip>

            {/* Restaurants by neighborhood */}
            {neighborhoods.map((hood) => (
              <GuideSection
                key={hood.name}
                label={hood.name}
                title={`Best Restaurants in ${hood.name}`}
                description={hood.description}
              >
                <div className="space-y-4">
                  {hood.restaurants.map((r) => (
                    <RestaurantCard
                      key={r.name}
                      name={r.name}
                      cuisine={r.cuisine}
                      price={r.price}
                      neighborhood={hood.name}
                      whatToOrder={r.whatToOrder}
                      tip={r.tip}
                      highlight={r.highlight}
                    />
                  ))}
                </div>
              </GuideSection>
            ))}

            {/* Budget tips */}
            <GuideSection
              label="Save Money"
              title="Budget Eating Tips"
              description="Porto is affordable, but these tricks make it even cheaper."
            >
              <div className="space-y-2">
                {budgetTips.map((tip, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="flex items-start gap-2 py-2">
                      <span className="text-terracotta mt-0.5">&#8250;</span>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              The best meal in Porto might be a €8 prato do dia at a
              neighborhood tasca you&apos;ve never heard of. Walk into any place
              where you see workers eating lunch — the food will be honest, cheap,
              and generous.
            </ProTip>

            <GuideCTA
              title="Plan Your Food Tour"
              description="Our itineraries include restaurant picks for every meal — breakfast, lunch, and dinner."
              buttonText="See Itineraries"
              href="/itineraries"
            />

            <FAQSection faqs={faqs} />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
