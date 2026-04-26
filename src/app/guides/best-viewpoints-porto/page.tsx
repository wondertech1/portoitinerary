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
import { viewpoints, viewpointFaqs } from "@/data/guides/viewpoints";

export const metadata: Metadata = {
  title: "7 Best Viewpoints in Porto 2026 — Miradouros Ranked | Porto Itinerary",
  description:
    "The best viewpoints and miradouros in Porto, ranked. Clérigos Tower, Miradouro da Vitória, Jardim do Morro, Serra do Pilar and more — with best times, photo tips, and access info for 2026.",
  alternates: { canonical: "https://portoitinerary.com/guides/best-viewpoints-porto" },
  openGraph: {
    title: "7 Best Viewpoints in Porto 2026 — Miradouros Ranked",
    description: "From Clérigos Tower to hidden Fontainhas — Porto's best views ranked with photo tips.",
    url: "https://portoitinerary.com/guides/best-viewpoints-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 Best Viewpoints in Porto 2026 — Miradouros Ranked",
  description: "A ranked guide to Porto's best viewpoints with photo tips and access information.",
  url: "https://portoitinerary.com/guides/best-viewpoints-porto",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

const related = [
  { title: "Porto Neighborhoods Guide", description: "What to see in each neighborhood beyond the viewpoints.", href: "/guides/porto-neighborhoods", category: "Practical Guide" },
  { title: "1-Day Porto Itinerary", description: "Hit Clérigos, Ribeira, and Jardim do Morro in one day.", href: "/1-day-porto-itinerary", category: "Itinerary" },
  { title: "Best Time to Visit Porto", description: "When the light and weather are best for photos.", href: "/guides/best-time-to-visit-porto", category: "Practical Guide" },
];

export default function ViewpointsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best Viewpoints in Porto",
          itemListOrder: "https://schema.org/ItemListOrderDescending",
          numberOfItems: viewpoints.length,
          itemListElement: viewpoints.map((v) => ({
            "@type": "ListItem",
            position: v.rank,
            name: v.name,
          })),
        }}
      />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="7 Best Viewpoints in Porto"
          subtitle="Where to find Porto's best views — from 240-step towers to hidden cliffside stairways."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Viewpoints" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <GuideSection label="The Views" title="Porto's Best Miradouros, Ranked" description="Ranked by view quality, accessibility, and the overall experience.">
              <div className="space-y-6">
                {viewpoints.map((v, i) => (
                  <ScrollReveal key={v.name} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${v.rank <= 3 ? "bg-terracotta" : "bg-stone-200"}`}>
                          <span className={`font-serif text-lg ${v.rank <= 3 ? "text-cream" : "text-stone-600"}`}>{v.rank}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-xl text-stone-800">{v.name}</h3>
                          <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                            {v.neighborhood} · {v.type}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">Best: {v.bestTime}</span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">{v.bestFor}</span>
                      </div>

                      <p className="text-stone-600 text-sm leading-relaxed mb-3">{v.description}</p>

                      <div className="bg-cream rounded px-3 py-2.5 border-l-2 border-ochre">
                        <p className="text-stone-600 text-xs leading-relaxed">
                          <span className="font-medium text-stone-700">Photo tip: </span>{v.photoTip}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              For the best photos, visit viewpoints at two times: <strong>morning</strong> (9-10 AM, soft light on eastern facades) and <strong>sunset</strong> (golden hour on the western skyline). Midday light flattens everything.
            </ProTip>

            <GuideCTA title="See All the Views in Order" description="Our itineraries route you past the best viewpoints at the right time of day — no backtracking." buttonText="See Itineraries" href="/itineraries" />
            <FAQSection faqs={viewpointFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
