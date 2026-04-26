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
import { transportModes, andanteCard, portoCard, gettingAroundFaqs } from "@/data/guides/getting-around";

export const metadata: Metadata = {
  title: "Getting Around Porto 2026 — Metro, Bus, Tram & Walking Guide | Porto Itinerary",
  description:
    "How to get around Porto by metro, bus, tram, and on foot. Andante card explained, Porto Card breakdown, and honest advice on when to walk vs. ride for 2026.",
  alternates: { canonical: "https://portoitinerary.com/guides/getting-around-porto" },
  openGraph: {
    title: "Getting Around Porto 2026 — Metro, Bus, Tram & Walking Guide",
    description: "Walking, metro, bus, tram, Uber — every transport option ranked with prices and tips.",
    url: "https://portoitinerary.com/guides/getting-around-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Getting Around Porto 2026 — Metro, Bus, Tram & Walking Guide",
  description: "A practical guide to Porto public transport, walking, and ride-hailing for visitors.",
  url: "https://portoitinerary.com/guides/getting-around-porto",
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

const related = [
  { title: "Porto Airport to City Center", description: "Metro, taxi, Uber — the full breakdown for arrivals.", href: "/guides/porto-airport-to-city-center", category: "Practical Guide" },
  { title: "Porto Neighborhoods Guide", description: "Understand the city layout before you start navigating it.", href: "/guides/porto-neighborhoods", category: "Practical Guide" },
  { title: "Porto on a Budget", description: "Save on transport, food, and attractions without missing out.", href: "/guides/porto-on-a-budget", category: "Practical Guide" },
];

export default function GettingAroundPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Getting Around Porto"
          subtitle="Porto is a walking city — but those hills will test your calves. Here's when to walk, ride, and call an Uber."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Getting Around" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Quick Answer */}
            <GuideSection label="Quick Answer" title="The Short Version">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">Walking + metro</strong> covers about 90% of what visitors need in Porto. The historic center is compact enough to explore on foot, the metro handles the airport, Gaia, and Matosinhos, and Uber/Bolt fills in the gaps for late nights and rainy days.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">You do not need a car.</strong> Porto&apos;s streets are narrow, parking is a nightmare, and the one-way system will break your spirit. Save the rental for a Douro Valley day trip if you really want one.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    <strong className="text-stone-800">Budget for transport:</strong> most visitors spend €10-15 total on transit over a 3-day trip (plus €0.60 for an Andante card). The biggest expense is usually the airport metro ride at €2.50 each way.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Transport Modes */}
            <GuideSection label="All Options" title="Every Way to Get Around Porto" description="Ranked from most useful to least, with real prices and honest verdicts.">
              <div className="space-y-4">
                {transportModes.map((t, i) => (
                  <ScrollReveal key={t.mode} delay={i * 0.04}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-serif text-lg text-stone-800">{t.mode}</h3>
                        <span className="text-xs font-sans font-medium tracking-wider uppercase text-terracotta whitespace-nowrap mt-1">{t.price}</span>
                      </div>
                      <div className="space-y-2 text-sm text-stone-600 leading-relaxed">
                        <p><strong className="text-stone-700">Best for:</strong> {t.bestFor}</p>
                        <p><strong className="text-stone-700">Coverage:</strong> {t.coverage}</p>
                        <p><strong className="text-stone-700">Tips:</strong> {t.tips}</p>
                        <p className="pt-1 border-t border-stone-100 text-stone-700 italic">{t.verdict}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Invest in comfortable shoes with good grip. Porto&apos;s cobblestones are beautiful but treacherous — especially wet calcada portuguesa. I watched three people slip on the Ribeira waterfront in one afternoon. Flat, grippy soles are more important than any transit card.
            </ProTip>

            {/* Andante Card */}
            <GuideSection label="Transit Cards" title="The Andante Card — Porto's Transit Pass" description="How to buy it, where to tap it, and which zones you actually need.">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    <strong className="text-stone-800">Cost:</strong> {andanteCard.cost}
                  </p>

                  <div className="mb-4">
                    <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-2">Zones & Prices</p>
                    <div className="space-y-1 text-sm text-stone-600">
                      <p><strong className="text-stone-700">Z2:</strong> {andanteCard.zones.Z2}</p>
                      <p><strong className="text-stone-700">Z4:</strong> {andanteCard.zones.Z4}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-2">How to Buy</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{andanteCard.howToBuy}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-2">How to Use</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{andanteCard.howToUse}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-2">Tips</p>
                    <ul className="space-y-2">
                      {andanteCard.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-stone-600 leading-relaxed flex items-start gap-2">
                          <span className="text-terracotta mt-0.5 flex-shrink-0">*</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </GuideSection>

            <ProTip variant="money-saver">
              The Andante 24-hour pass (€7, all zones) pays for itself if you arrive at the airport and take 2+ rides that day. Load a 24h pass for your arrival day, then switch to individual Z2 trips (€1.60 each) for the rest of your stay — most visitors only take 1-2 rides per day after that.
            </ProTip>

            {/* Porto Card */}
            <GuideSection label="Porto Card" title="Is the Porto Card Worth It?" description="Free transport + museums — but does the math add up?">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <div className="mb-4">
                    <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-2">Prices</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {Object.entries(portoCard.prices).map(([duration, price]) => (
                        <div key={duration} className="text-center py-2 border border-stone-200 rounded">
                          <p className="text-lg font-serif text-stone-800">{price}</p>
                          <p className="text-xs text-stone-500">{duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-2">What&apos;s Included</p>
                    <ul className="space-y-1">
                      {portoCard.includes.map((item, i) => (
                        <li key={i} className="text-sm text-stone-600 leading-relaxed flex items-start gap-2">
                          <span className="text-terracotta mt-0.5 flex-shrink-0">*</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-stone-100">
                    <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-2">Our Verdict</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{portoCard.worthIt}</p>
                  </div>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Tips by Area */}
            <GuideSection label="By Area" title="Getting Around Specific Areas" description="Quick transport tips for the places you'll actually go.">
              <div className="space-y-3">
                <ScrollReveal>
                  <div className="flex items-start gap-4 py-3 border-b border-stone-100">
                    <span className="font-serif text-terracotta text-sm flex-shrink-0 w-32 mt-0.5 font-medium">Ribeira to Gaia</span>
                    <p className="text-stone-600 text-sm leading-relaxed">Walk across Dom Luis I Bridge — top deck for views, bottom deck for speed. The metro also crosses to Gaia (yellow line). I always walked; it takes 5 minutes and the view is half the point.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.04}>
                  <div className="flex items-start gap-4 py-3 border-b border-stone-100">
                    <span className="font-serif text-terracotta text-sm flex-shrink-0 w-32 mt-0.5 font-medium">Center to Foz</span>
                    <p className="text-stone-600 text-sm leading-relaxed">Tram Line 1 from Ribeira is scenic (€3.50, 25 min). Bus 500 follows the same route for €1.60. Uber is €5-6. Walking takes 50+ minutes along the river — gorgeous but long.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                  <div className="flex items-start gap-4 py-3 border-b border-stone-100">
                    <span className="font-serif text-terracotta text-sm flex-shrink-0 w-32 mt-0.5 font-medium">Center to Matosinhos</span>
                    <p className="text-stone-600 text-sm leading-relaxed">Metro blue line from Trindade to Matosinhos Sul (20 min, €1.60 Z2). This is the easiest way to reach Porto&apos;s best seafood restaurants and the city beach.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <div className="flex items-start gap-4 py-3 border-b border-stone-100">
                    <span className="font-serif text-terracotta text-sm flex-shrink-0 w-32 mt-0.5 font-medium">Ribeira to Batalha</span>
                    <p className="text-stone-600 text-sm leading-relaxed">Funicular dos Guindais (€2.50, 2 min) saves the steepest climb in the city. Alternatively, walk up the stairs next to the bridge — free but brutal after a port wine tasting.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                  <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                    <span className="font-serif text-terracotta text-sm flex-shrink-0 w-32 mt-0.5 font-medium">Airport to Center</span>
                    <p className="text-stone-600 text-sm leading-relaxed">Metro violet line to Trindade (35 min, €2.50 Z4 + €0.60 card). Uber runs €12-18 and takes 20-25 min. Taxi €20-25. The metro is the best value unless you&apos;re arriving after 1 AM.</p>
                  </div>
                </ScrollReveal>
              </div>
            </GuideSection>

            <GuideCTA title="Plan Your Porto Trip" description="Now that you know how to get around, plan what to see — we have itineraries for 1, 3, and 5 days." buttonText="See Itineraries" href="/itineraries" />
            <FAQSection faqs={gettingAroundFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
