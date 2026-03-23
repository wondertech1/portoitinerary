import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import GuideCTA from "@/components/shared/GuideCTA";
import ProTip from "@/components/shared/ProTip";
import JsonLd from "@/components/shared/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import {
  francesinhaHistory,
  francesinhaSpots,
  francesinhaFaqs,
} from "@/data/guides/francesinha-spots";

export const metadata: Metadata = {
  title:
    "Best Francesinha in Porto 2026 — 8 Spots Ranked (We Ate Them All) | Porto Itinerary",
  description:
    "We ate francesinhas at 8 Porto restaurants and ranked them. Café Santiago, Bufete Fase, Lado B and more — with sauce reviews, prices, and what to order in 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/best-francesinha-porto",
  },
  openGraph: {
    title: "Best Francesinha in Porto 2026 — 8 Spots Ranked",
    description:
      "We ate them all. 8 francesinhas ranked by sauce, meat quality, and overall experience.",
    url: "https://portoitinerary.com/guides/best-francesinha-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Francesinha in Porto 2026 — 8 Spots Ranked",
  description:
    "A ranking of Porto's best francesinha restaurants, tested and compared.",
  url: "https://portoitinerary.com/guides/best-francesinha-porto",
  publisher: {
    "@type": "Organization",
    name: "Porto Itinerary",
    url: "https://portoitinerary.com",
  },
};

const related = [
  {
    title: "Where to Eat in Porto",
    description: "A local's guide to the best food across every neighborhood.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
  {
    title: "1-Day Porto Itinerary",
    description: "Hit every essential including a francesinha stop.",
    href: "/1-day-porto-itinerary",
    category: "Itinerary",
  },
  {
    title: "Port Wine Cellars Guide",
    description: "Complete guide to Gaia's best tours and tastings.",
    href: "/guides/port-wine-cellars-guide",
    category: "Wine Guide",
  },
];

export default function FrancesinhaPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Food Guide"
          title="Best Francesinha in Porto 2026"
          subtitle="8 spots ranked — we ate them all so you don't have to. (Though you should.)"
          lastVerified="March 2026"
          breadcrumbItems={[
            { label: "Guides", href: "/guides/where-to-eat-porto" },
            { label: "Best Francesinha" },
          ]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* History section */}
            <GuideSection title={francesinhaHistory.title}>
              <div className="space-y-4">
                {francesinhaHistory.content.map((p, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {p}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="warning">
              A francesinha is easily 1,500+ calories. Do not eat one before a
              wine tasting, a walking tour, or any activity that involves moving.
              Plan your francesinha lunch, then plan to sit still for 2 hours
              afterward.
            </ProTip>

            {/* Rankings */}
            <GuideSection
              label="The Rankings"
              title="8 Best Francesinhas in Porto"
              description="Ranked by sauce quality, meat, and overall experience. We ate at each spot at least twice."
            >
              <div className="space-y-6">
                {francesinhaSpots.map((spot) => (
                  <ScrollReveal key={spot.rank} delay={spot.rank * 0.05}>
                    <div
                      className={`parchment-texture rounded-lg postcard-shadow overflow-hidden ${
                        spot.isWinner ? "ring-2 ring-terracotta" : ""
                      }`}
                    >
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              spot.isWinner
                                ? "bg-terracotta"
                                : "bg-stone-200"
                            }`}
                          >
                            <span
                              className={`font-serif text-lg ${
                                spot.isWinner ? "text-cream" : "text-stone-600"
                              }`}
                            >
                              {spot.rank}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <h3 className="font-serif text-xl text-stone-800">
                                {spot.name}
                              </h3>
                              {spot.isWinner && (
                                <span className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase bg-terracotta text-cream px-2 py-0.5 rounded-sm">
                                  Winner
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                              {spot.neighborhood} &middot; {spot.price}
                            </p>
                          </div>
                        </div>

                        <div className="mb-3">
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                            The Sauce
                          </p>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {spot.sauce}
                          </p>
                        </div>

                        <p className="text-stone-700 text-sm leading-relaxed mb-2">
                          {spot.verdict}
                        </p>

                        <p className="text-stone-600 text-sm">
                          <span className="font-medium">Order:</span>{" "}
                          {spot.whatToOrder}
                        </p>
                      </div>

                      {spot.tip && (
                        <div className="bg-cream px-5 sm:px-6 py-3 border-t border-stone-200/50">
                          <p className="text-stone-500 text-xs italic">
                            {spot.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              If Café Santiago has a long queue, walk 2 minutes to Santiago F on
              Rua Passos Manuel — it&apos;s run by the same family with the same
              sauce recipe.
            </ProTip>

            {/* How to order */}
            <GuideSection
              label="Ordering Tips"
              title="How to Order Like a Local"
            >
              <div className="space-y-3">
                {[
                  {
                    tip: "Francesinha simples",
                    detail:
                      "The basic version with all the meats but no egg. This is the purist's choice.",
                  },
                  {
                    tip: "Francesinha especial",
                    detail:
                      "With a fried egg on top. The runny yolk mixes with the sauce — highly recommended.",
                  },
                  {
                    tip: "Com batatas fritas",
                    detail:
                      "With fries. Always order fries — they're for soaking up the sauce.",
                  },
                  {
                    tip: "Super Bock",
                    detail:
                      "The local beer. The only appropriate drink with a francesinha. Wine is wrong. Water is acceptable. Beer is correct.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="flex items-start gap-3 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif italic text-terracotta text-lg flex-shrink-0 w-44">
                        &ldquo;{item.tip}&rdquo;
                      </span>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <GuideCTA
              title="Include a Francesinha in Your Itinerary"
              description="Our Porto itineraries include francesinha stops timed perfectly in your day."
              buttonText="See Itineraries"
              href="/itineraries"
            />

            <FAQSection faqs={francesinhaFaqs} />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
