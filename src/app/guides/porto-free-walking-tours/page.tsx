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
import { organizedTours, selfGuidedRoutes, walkingTourFaqs } from "@/data/guides/walking-tours";

export const metadata: Metadata = {
  title: "Porto Walking Tours 2026 — Free Tours & Self-Guided Routes | Porto Itinerary",
  description:
    "Honest guide to Porto's best walking tours — free tip-based tours, food tours, alternative tours, and 5 self-guided routes with stops, distances, and timing.",
  alternates: { canonical: "https://portoitinerary.com/guides/porto-free-walking-tours" },
  openGraph: {
    title: "Porto Walking Tours 2026 — Free Tours & Self-Guided Routes",
    description: "Free tours, food tours, self-guided routes, and practical walking tips for Porto.",
    url: "https://portoitinerary.com/guides/porto-free-walking-tours",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Porto Walking Tours 2026 — Free Tours & Self-Guided Routes",
  description: "Guide to Porto's best walking tours including free tip-based tours, paid food tours, and 5 self-guided walking routes.",
  url: "https://portoitinerary.com/guides/porto-free-walking-tours",
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

const related = [
  { title: "Porto Neighborhoods Guide", description: "Understand the layout before you walk it.", href: "/guides/porto-neighborhoods", category: "Practical Guide" },
  { title: "Best Azulejo Tiles in Porto", description: "The tile facades you'll pass on every route.", href: "/guides/best-azulejo-tiles-porto", category: "Culture Guide" },
  { title: "Best Viewpoints in Porto", description: "Miradouros along every walking route.", href: "/guides/best-viewpoints-porto", category: "Practical Guide" },
];

export default function WalkingToursPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Porto Walking Tours 2026"
          subtitle="Free tours, food tours, and 5 self-guided routes — because Porto makes more sense on foot."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Walking Tours" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">

            {/* Intro */}
            <GuideSection label="Overview" title="Why Walk Porto?" description="Porto is a walking city. The center is compact, the hills reward you with views, and the best discoveries happen on foot between the planned stops.">
              <ScrollReveal>
                <p className="text-stone-600 text-sm leading-relaxed">
                  I&apos;ve tried every mode of transport in Porto — trams, tuk-tuks, the metro, even the Gaia cable car — and walking remains the only way to actually understand this city. The alleys are too narrow for cars, the staircases too steep for bikes, and the azulejo facades too beautiful to pass at speed. Below are the organized tours worth joining, plus five self-guided routes I walk regularly when friends visit.
                </p>
              </ScrollReveal>
            </GuideSection>

            {/* Organized Tours */}
            <GuideSection label="Guided Options" title="Organized Walking Tours" description="Four tours, two free, two paid. Each covers different ground.">
              {organizedTours.map((tour, i) => (
                <ScrollReveal key={tour.name} delay={i * 0.05}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6 mb-5">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="font-serif text-lg text-stone-800">{tour.name}</h3>
                      <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                        {tour.style}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-1 mb-3 text-xs text-stone-500">
                      <span>{tour.duration}</span>
                      <span>{tour.meetingPoint}</span>
                    </div>

                    <div className="mb-4">
                      <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-2">Highlights</p>
                      <ul className="space-y-1">
                        {tour.highlights.map((h) => (
                          <li key={h} className="text-stone-600 text-sm flex gap-2">
                            <span className="text-terracotta/50">›</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3">
                      <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">Best For</p>
                      <p className="text-stone-600 text-sm leading-relaxed">{tour.bestFor}</p>
                    </div>

                    <div className="bg-cream rounded px-3 py-2.5 border-l-2 border-ochre">
                      <p className="text-stone-600 text-xs leading-relaxed">
                        <span className="font-medium text-stone-700">Note: </span>{tour.tip}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </GuideSection>

            <ProTip variant="tip">
              Free walking tours are tip-based — the guides work entirely on what you give them at the end. EUR 5-10 per person is standard for a good tour. If the guide was exceptional, EUR 10-15 is well deserved. Bring cash in small bills; most guides can&apos;t take card.
            </ProTip>

            {/* Self-Guided Routes */}
            <GuideSection label="Go Your Own Way" title="Self-Guided Walking Routes" description="Five routes I've mapped from years of walking this city. Each one works as a standalone half-day or combines with another.">
              {selfGuidedRoutes.map((route, i) => (
                <ScrollReveal key={route.name} delay={i * 0.05}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6 mb-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-2">{route.name}</h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                      <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                        {route.duration}
                      </span>
                      <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                        {route.distance}
                      </span>
                      <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                        {route.bestTime}
                      </span>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed mb-4">{route.description}</p>

                    <div className="mb-3">
                      <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-2">Stops</p>
                      <ol className="space-y-1">
                        {route.stops.map((stop, j) => (
                          <li key={stop} className="text-stone-600 text-sm flex gap-2">
                            <span className="text-terracotta/60 font-sans text-xs font-medium w-4 text-right flex-shrink-0">{j + 1}.</span> {stop}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <p className="text-stone-500 text-xs">
                      <span className="font-medium">Start:</span> {route.startPoint}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </GuideSection>

            <ProTip variant="local-secret">
              The Ribeira-to-Foz riverside walk is the most underrated experience in Porto. Tourists crowd Ribeira and the bridge, but almost nobody walks west along the river. By the 15-minute mark, you&apos;ll have the path to yourself — old fishermen, river views, and the sound of the Atlantic growing louder. End at Farol de Felgueiras for sunset and you&apos;ll understand why I keep coming back.
            </ProTip>

            {/* Walking Tips */}
            <GuideSection label="Practical" title="Walking Tips for Porto" description="Porto rewards walkers but punishes the unprepared. A few things worth knowing.">
              <ScrollReveal>
                <div className="space-y-4">
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-base text-stone-800 mb-2">Shoes Matter</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Porto&apos;s cobblestones (calcada portuguesa) are beautiful and treacherous. They get slippery when wet, and the hills amplify every wrong step. Wear shoes with good grip and cushioning — your knees will thank you by day three. I&apos;ve seen more tourists limping in Porto than any other city.
                    </p>
                  </div>

                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-base text-stone-800 mb-2">Water & Shade</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Summer Porto is hotter than people expect — 35°C in July and August with no shade on exposed streets. Carry a water bottle, take breaks in churches (free air conditioning since the 12th century), and save the steep climbs for morning or late afternoon.
                    </p>
                  </div>

                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-base text-stone-800 mb-2">The Hills Are Real</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Porto is built on hillsides. The climb from Ribeira to the Se Cathedral gains 60 meters in about 300 meters of walking. Plan your routes downhill when possible — walk from Clerigos down to Ribeira, not the other way around. The Funicular dos Guindais (EUR 2.50) can save your legs on the steepest section.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </GuideSection>

            <GuideCTA
              title="Walk Porto in 3 Days"
              description="Our 3-day itinerary covers all five self-guided routes — Historic Center, Azulejos, Riverside, Gaia, and Cedofeita."
              buttonText="See 3-Day Itinerary"
              href="/3-day-porto-itinerary"
            />
            <FAQSection faqs={walkingTourFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
