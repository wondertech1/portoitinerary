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
import { cafes, coffeeGlossary, faqs } from "@/data/guides/cafes";

export const metadata: Metadata = {
  title:
    "Best Cafes in Porto 2026 \u2014 From Historic to Specialty Coffee | Porto Itinerary",
  description:
    "The best cafes in Porto for 2026, from Belle \u00C9poque landmarks to specialty roasters. With coffee glossary, prices, and honest opinions on what\u2019s worth your time.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/best-cafes-porto",
  },
  openGraph: {
    title: "Best Cafes in Porto 2026 \u2014 From Historic to Specialty Coffee",
    description:
      "8 cafes worth your time \u2014 from \u20AC1.50 bakery counters to specialty pour-overs. With a coffee glossary so you know what to order.",
    url: "https://portoitinerary.com/guides/best-cafes-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Cafes in Porto 2026 \u2014 From Historic to Specialty Coffee",
  description:
    "A guide to the best cafes in Porto, covering historic coffeehouses, specialty roasters, and traditional bakeries.",
  url: "https://portoitinerary.com/guides/best-cafes-porto",
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
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

const related = [
  {
    title: "Where to Eat in Porto",
    description:
      "Every restaurant, caf\u00E9, and market stall worth your time \u2014 neighborhood by neighborhood.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
  {
    title: "Best Past\u00E9is de Nata in Porto",
    description:
      "6 bakeries ranked \u2014 the perfect pairing for your morning coffee.",
    href: "/guides/best-pasteis-de-nata-porto",
    category: "Food Guide",
  },
  {
    title: "Porto Neighborhoods",
    description:
      "Where to stay, eat, and wander \u2014 each neighborhood has its own caf\u00E9 culture.",
    href: "/guides/porto-neighborhoods",
    category: "Planning",
  },
];

const styleLabels: Record<string, string> = {
  historic: "Historic Coffeehouses",
  specialty: "Specialty Coffee",
  traditional: "Traditional & Bakeries",
};

const styleDescriptions: Record<string, string> = {
  historic:
    "Grand interiors, decades (or centuries) of history, and the kind of coffee culture that predates latte art by a hundred years.",
  specialty:
    "Single-origin beans, precise brewing, and baristas who can tell you the elevation of the farm their coffee came from. Porto\u2019s specialty scene is small but excellent.",
  traditional:
    "No pretension, no Instagram angle. Just a counter, a coffee machine, and locals who\u2019ve been coming here since before you were born.",
};

const styleOrder = ["historic", "specialty", "traditional"];

export default function BestCafesPage() {
  const cafesByStyle = styleOrder.map((style) => ({
    style,
    label: styleLabels[style],
    description: styleDescriptions[style],
    items: cafes.filter((c) => c.style === style),
  }));

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best Cafes in Porto 2026",
          itemListOrder: "https://schema.org/ItemListUnordered",
          numberOfItems: cafes.length,
          itemListElement: cafes.map((cafe, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: cafe.name,
            url: `https://portoitinerary.com/guides/best-cafes-porto#${cafe.name.toLowerCase().replace(/\s+/g, "-")}`,
          })),
        }}
      />
      <Navigation />
      <main>
        <GuideHero
          category="Food Guide"
          title="Best Cafes in Porto 2026"
          subtitle="From gilded Belle \u00C9poque halls to minimalist roasteries \u2014 where to drink coffee in a city that takes it seriously."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Best Cafes" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* How to Order Coffee */}
            <GuideSection
              label="Coffee 101"
              title="How to Order Coffee in Porto"
              description="Walk into any caf\u00E9 in Porto and the menu won\u2019t look like Starbucks. Here\u2019s what the words mean."
            >
              <div className="space-y-4">
                {coffeeGlossary.map((item, i) => (
                  <ScrollReveal key={item.term} delay={i * 0.05}>
                    <div className="flex items-start gap-3 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif italic text-terracotta text-lg flex-shrink-0 w-36">
                        {item.term}
                      </span>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              If you just say &ldquo;um caf&eacute;&rdquo; at any caf&eacute;
              in Porto, you&apos;ll get an espresso. That&apos;s the default.
              No need to say &ldquo;bica&rdquo; or &ldquo;espresso&rdquo;
              &mdash; just &ldquo;um caf&eacute;, por favor&rdquo; and
              you&apos;re done.
            </ProTip>

            {/* Cafes grouped by style */}
            {cafesByStyle.map((group) => (
              <GuideSection
                key={group.style}
                label={group.label}
                title={`Best ${group.label} in Porto`}
                description={group.description}
              >
                <div className="space-y-6">
                  {group.items.map((cafe, i) => (
                    <ScrollReveal key={cafe.name} delay={i * 0.05}>
                      <div className="parchment-texture rounded-lg postcard-shadow overflow-hidden">
                        <div className="p-5 sm:p-6">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="flex-1">
                              <h3 className="font-serif text-xl text-stone-800">
                                {cafe.name}
                              </h3>
                              <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                                {cafe.neighborhood} &middot; {cafe.price}
                              </p>
                            </div>
                          </div>

                          <div className="mb-3">
                            <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta mb-1">
                              The Coffee
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed">
                              {cafe.coffeeHighlight}
                            </p>
                          </div>

                          <div className="mb-3">
                            <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-stone-400 mb-1">
                              The Food
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed">
                              {cafe.foodHighlight}
                            </p>
                          </div>

                          <p className="text-stone-700 text-sm leading-relaxed">
                            <span className="font-medium">Vibe:</span>{" "}
                            {cafe.vibe}
                          </p>
                        </div>

                        <div className="bg-cream px-5 sm:px-6 py-3 border-t border-stone-200/50">
                          <p className="text-stone-500 text-xs italic">
                            {cafe.tip}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </GuideSection>
            ))}

            <ProTip variant="money-saver">
              Standing at the bar (ao balc&atilde;o) is almost always cheaper
              than sitting at a table in Porto. At traditional caf&eacute;s,
              the difference can be 30&ndash;50%. At Caf&eacute; Progresso,
              a bica at the counter is about &euro;0.80. At a table,
              it&apos;s &euro;1.50. Same coffee, different price.
            </ProTip>

            {/* Coffee Tips */}
            <GuideSection
              label="Practical"
              title="Coffee Tips for Porto"
              description="A few things I wish someone had told me before my first coffee in Porto."
            >
              <div className="space-y-2">
                {[
                  "Caf\u00E9 Majestic is worth seeing once \u2014 but I drink my daily coffee at Combi. The tourist premium at Majestic is steep, and the coffee itself isn\u2019t special. Go for the architecture, then move on.",
                  "Cedofeita is Porto\u2019s coffee neighborhood. Combi, Mesa 325, and several other good spots are within a 5-minute walk of each other. If you only have one morning for caf\u00E9 hopping, spend it here.",
                  "Breakfast in Porto means coffee and a pastel de nata, eaten standing up at a bakery counter. It takes 4 minutes and costs \u20AC2. This is not a culture of long brunch tables \u2014 unless you seek out the specialty spots.",
                  "Tipping isn\u2019t expected at caf\u00E9s. Some people leave small change on the counter, but it\u2019s not required or even particularly common.",
                  "Specialty coffee culture arrived in Porto around 2015 and has grown steadily. But traditional caf\u00E9s still outnumber specialty shops 50 to 1. Both are worth your time \u2014 they\u2019re just different experiences entirely.",
                ].map((tip, i) => (
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

            <GuideCTA
              title="Plan Your Porto Mornings"
              description="Our itineraries include caf\u00E9 recommendations for every morning \u2014 matched to whatever neighborhood you\u2019re exploring that day."
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
