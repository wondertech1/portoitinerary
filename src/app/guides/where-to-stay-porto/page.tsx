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
import { accommodationByArea, stayFaqs } from "@/data/guides/where-to-stay";

export const metadata: Metadata = {
  title: "Where to Stay in Porto 2026 — Best Neighborhoods & Hotels | Porto Itinerary",
  description:
    "Where to stay in Porto by neighborhood and budget. Vitória for first-timers, Cedofeita for creatives, Gaia for wine lovers — with hotel picks at every price point for 2026.",
  alternates: { canonical: "https://portoitinerary.com/guides/where-to-stay-porto" },
  openGraph: {
    title: "Where to Stay in Porto 2026 — Best Neighborhoods & Hotels",
    description: "6 neighborhoods, 3 budget tiers, 18 hotel picks. Find your perfect Porto base.",
    url: "https://portoitinerary.com/guides/where-to-stay-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Where to Stay in Porto 2026 — Best Neighborhoods & Hotels",
  description: "A guide to Porto accommodation by neighborhood and budget tier.",
  url: "https://portoitinerary.com/guides/where-to-stay-porto",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

const related = [
  { title: "Porto Neighborhoods Guide", description: "Deep dive into each neighborhood — beyond accommodation.", href: "/guides/porto-neighborhoods", category: "Practical Guide" },
  { title: "Best Time to Visit Porto", description: "When to come affects where to stay — and how much it costs.", href: "/guides/best-time-to-visit-porto", category: "Practical Guide" },
  { title: "3-Day Porto Itinerary", description: "Plan your days once you've picked your base.", href: "/3-day-porto-itinerary", category: "Itinerary" },
];

export default function WhereToStayPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Where to Stay in Porto 2026"
          subtitle="6 neighborhoods, 3 budget tiers, and honest advice on where to base yourself."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Where to Stay" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Quick recommendation */}
            <GuideSection label="Quick Answer" title="The Short Version">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">First visit?</strong> Stay in <strong className="text-stone-800">Vitória/Clérigos</strong>. It&apos;s central, walkable to everything, and has Porto&apos;s best concentration of hotels, restaurants, and nightlife.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">On a budget?</strong> <strong className="text-stone-800">Baixa/Bolhão</strong> has the cheapest central accommodation and the best transport links.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    <strong className="text-stone-800">Been before?</strong> Try <strong className="text-stone-800">Cedofeita</strong> for Porto&apos;s creative side or <strong className="text-stone-800">Foz do Douro</strong> for ocean air. See our{" "}
                    <a href="/guides/porto-neighborhoods" className="text-terracotta underline">neighborhoods guide</a> for the full picture.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            <ProTip variant="money-saver">
              Porto hotel prices drop 40-50% from November to February. A €150/night boutique hotel in July costs €80 in January. The city is quieter, rainier, but just as beautiful — and the food tastes better when it&apos;s cold outside.
            </ProTip>

            {/* By neighborhood */}
            {accommodationByArea.map((area) => (
              <GuideSection key={area.neighborhood} label={area.verdict} title={area.neighborhood}>
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <p className="text-stone-600 text-sm leading-relaxed mb-5">{area.whyStayHere}</p>

                    <div className="space-y-4">
                      {[area.budget, area.mid, area.luxury].map((tier) => (
                        <div key={tier.tier} className="py-3 border-b border-stone-100 last:border-0">
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-1">
                            {tier.tier}
                          </p>
                          <h4 className="font-serif text-base text-stone-800 mb-1">
                            {tier.pick}
                          </h4>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {tier.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </GuideSection>
            ))}

            <ProTip variant="tip">
              Book directly with hotels when possible — many Porto boutique hotels offer 5-10% lower rates on their own websites compared to Booking.com. The Yeatman and InterContinental often have exclusive packages with wine tastings included.
            </ProTip>

            <GuideCTA title="Now Plan Your Days" description="Once you've picked your base, plan what to do — our itineraries start from wherever you're staying." buttonText="See Itineraries" href="/itineraries" />
            <FAQSection faqs={stayFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
