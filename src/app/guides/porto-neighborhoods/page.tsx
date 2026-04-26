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
import { neighborhoods, neighborhoodFaqs } from "@/data/guides/neighborhoods";

export const metadata: Metadata = {
  title: "Porto Neighborhoods Guide 2026 — Where to Go & What to Expect | Porto Itinerary",
  description:
    "A local's guide to Porto's 7 best neighborhoods. Ribeira, Cedofeita, Foz, Gaia, Bonfim and more — with what to eat, what to see, and where to stay in each.",
  alternates: { canonical: "https://portoitinerary.com/guides/porto-neighborhoods" },
  openGraph: {
    title: "Porto Neighborhoods Guide 2026",
    description: "7 neighborhoods explained — vibe, highlights, food, and honest advice on each.",
    url: "https://portoitinerary.com/guides/porto-neighborhoods",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Porto Neighborhoods Guide 2026 — Where to Go & What to Expect",
  description: "A guide to Porto's 7 best neighborhoods with highlights, restaurants, and accommodation advice.",
  url: "https://portoitinerary.com/guides/porto-neighborhoods",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

const related = [
  { title: "Where to Stay in Porto", description: "Hotels and accommodation by neighborhood and budget.", href: "/guides/where-to-stay-porto", category: "Practical Guide" },
  { title: "Where to Eat in Porto", description: "Best restaurants in every neighborhood.", href: "/guides/where-to-eat-porto", category: "Food Guide" },
  { title: "3-Day Porto Itinerary", description: "Covers 6 neighborhoods in 3 days.", href: "/3-day-porto-itinerary", category: "Itinerary" },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Porto Neighborhoods Guide 2026"
          subtitle="7 neighborhoods, 7 personalities. Where to go depends on who you are."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Neighborhoods" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <GuideSection label="Overview" title="How Porto's Neighborhoods Work" description="Porto is compact — you can walk across the city center in 30 minutes. But each neighborhood has a distinct character.">
              <ScrollReveal>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Porto is built on hillsides above the Douro river. The historic center (Ribeira, Baixa, Vitória) clusters around the waterfront and the cathedral. Cedofeita stretches north into the creative quarter. Foz spreads west along the coast. Gaia sits across the river. Understanding the neighborhoods helps you choose where to stay, where to eat, and which areas match your travel style.
                </p>
              </ScrollReveal>
            </GuideSection>

            {neighborhoods.map((n, i) => (
              <GuideSection key={n.name} label={n.tagline} title={n.name}>
                <ScrollReveal delay={0.03}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">{n.vibe}</span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">{n.description}</p>

                    <div className="mb-4">
                      <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-2">Highlights</p>
                      <ul className="space-y-1">
                        {n.highlights.map((h) => (
                          <li key={h} className="text-stone-600 text-sm flex gap-2">
                            <span className="text-terracotta/50">›</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3">
                      <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">Where to Eat</p>
                      <p className="text-stone-600 text-sm leading-relaxed">{n.eat}</p>
                    </div>

                    <div className="mb-3">
                      <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">Stay Here If...</p>
                      <p className="text-stone-600 text-sm leading-relaxed italic">{n.stayHere}</p>
                    </div>

                    <div className="bg-cream rounded px-3 py-2.5 border-l-2 border-ochre">
                      <p className="text-stone-600 text-xs leading-relaxed">
                        <span className="font-medium text-stone-700">Avoid: </span>{n.avoid}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </GuideSection>
            ))}

            <ProTip variant="tip">
              For a first visit, base yourself in <strong>Vitória/Clérigos</strong> — it&apos;s central to everything. For a second visit, try <strong>Cedofeita</strong> or <strong>Foz</strong> for a completely different Porto. See our{" "}
              <a href="/guides/where-to-stay-porto" className="text-terracotta underline">where to stay guide</a> for specific hotel picks.
            </ProTip>

            <GuideCTA title="Explore Every Neighborhood" description="Our 5-day itinerary covers all 7 neighborhoods — from Ribeira to Bonfim." buttonText="See 5-Day Itinerary" href="/5-day-porto-itinerary" />
            <FAQSection faqs={neighborhoodFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
