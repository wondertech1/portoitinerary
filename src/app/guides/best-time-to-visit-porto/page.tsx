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
import { months, bestTimeFaqs } from "@/data/guides/best-time";

export const metadata: Metadata = {
  title: "Best Time to Visit Porto 2026 — Month-by-Month Guide | Porto Itinerary",
  description:
    "When is the best time to visit Porto? Month-by-month breakdown of weather, crowds, prices, and festivals. May and September are best — here's why.",
  alternates: { canonical: "https://portoitinerary.com/guides/best-time-to-visit-porto" },
  openGraph: {
    title: "Best Time to Visit Porto 2026 — Month-by-Month Guide",
    description: "Weather, crowds, prices, and festivals for every month. Plan your Porto trip perfectly.",
    url: "https://portoitinerary.com/guides/best-time-to-visit-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Time to Visit Porto 2026 — Month-by-Month Guide",
  description: "A month-by-month guide to weather, crowds, and prices in Porto.",
  url: "https://portoitinerary.com/guides/best-time-to-visit-porto",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

const related = [
  { title: "3-Day Porto Itinerary", description: "The ideal trip length for most travelers.", href: "/3-day-porto-itinerary", category: "Itinerary" },
  { title: "Where to Stay in Porto", description: "Best neighborhoods and hotels for every budget.", href: "/guides/where-to-stay-porto", category: "Practical Guide" },
  { title: "Douro Valley Day Trip", description: "Harvest season (Sep-Oct) makes the valley magical.", href: "/guides/douro-valley-day-trip", category: "Wine Guide" },
];

export default function BestTimePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Best Time to Visit Porto"
          subtitle="May and September are the sweet spots — but every month has its charm."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Best Time to Visit" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Quick answer */}
            <GuideSection label="Quick Answer" title="The Short Version">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">May</strong> and <strong className="text-stone-800">September</strong> are the best months. Warm weather (20-25°C), low rain, moderate crowds, and reasonable prices. May has blooming jacarandas. September has the Douro Valley grape harvest.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">June</strong> is excellent if you time it for São João (June 23-24) — Porto&apos;s wildest festival. <strong className="text-stone-800">October</strong> is underrated — beautiful autumn light and Douro Valley colors.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    <strong className="text-stone-800">Avoid July-August</strong> if you dislike heat and crowds. <strong className="text-stone-800">Winter (Nov-Feb)</strong> is rainy but atmospheric, uncrowded, and 40-50% cheaper.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Month by month */}
            <GuideSection label="Month by Month" title="Porto Weather & Crowds by Month" description="Every month at a glance.">
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-xs font-sans border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-stone-200">
                      <th className="text-left py-3 pr-3 text-stone-500 font-medium tracking-wider uppercase">Month</th>
                      <th className="text-center py-3 px-2 text-stone-500 font-medium tracking-wider uppercase">Temp</th>
                      <th className="text-center py-3 px-2 text-stone-500 font-medium tracking-wider uppercase">Rain</th>
                      <th className="text-center py-3 px-2 text-stone-500 font-medium tracking-wider uppercase">Crowds</th>
                      <th className="text-center py-3 px-2 text-stone-500 font-medium tracking-wider uppercase">Prices</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-600">
                    {months.map((m) => (
                      <tr key={m.month} className="border-b border-stone-100">
                        <td className="py-2 pr-3 font-medium text-stone-700">{m.month}</td>
                        <td className="py-2 px-2 text-center">{m.temp}</td>
                        <td className="py-2 px-2 text-center">{m.rain}</td>
                        <td className="py-2 px-2 text-center">{m.crowds}</td>
                        <td className="py-2 px-2 text-center">{m.prices}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GuideSection>

            {/* Detailed months */}
            <GuideSection label="Details" title="What Each Month Is Actually Like" description="Beyond the numbers — what to expect when you're there.">
              <div className="space-y-3">
                {months.map((m, i) => (
                  <ScrollReveal key={m.month} delay={i * 0.03}>
                    <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif text-terracotta text-sm flex-shrink-0 w-24 mt-0.5 font-medium">{m.month}</span>
                      <p className="text-stone-600 text-sm leading-relaxed">{m.verdict}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              If you&apos;re visiting for <strong>port wine</strong>, September-October is ideal — the Douro Valley harvest is underway and quintas are buzzing with activity. If you&apos;re visiting for <strong>food</strong>, June has the São João sardine festival. For <strong>budget travel</strong>, January-February is unbeatable.
            </ProTip>

            <GuideCTA title="Plan Your Trip" description="Pick your dates, then pick your itinerary — we have plans for 1, 3, and 5 days." buttonText="See Itineraries" href="/itineraries" />
            <FAQSection faqs={bestTimeFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
