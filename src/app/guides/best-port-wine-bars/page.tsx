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
import { wineBars, wineBarFaqs } from "@/data/guides/wine-bars";

export const metadata: Metadata = {
  title:
    "Best Port Wine Bars in Porto 2026 — 6 Spots for Tasting Without a Tour | Porto Itinerary",
  description:
    "The best wine bars in Porto for port wine tasting without a cellar tour. Prova, Wine Quay Bar, Espaço Porto Cruz and more — with prices, vibes, and what to order in 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/best-port-wine-bars",
  },
  openGraph: {
    title: "Best Port Wine Bars in Porto 2026",
    description:
      "6 wine bars for tasting port without the tour. Prices, atmosphere, and must-try pours.",
    url: "https://portoitinerary.com/guides/best-port-wine-bars",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Port Wine Bars in Porto 2026 — 6 Spots for Tasting Without a Tour",
  description:
    "The best wine bars in Porto for port wine tasting without a cellar tour.",
  url: "https://portoitinerary.com/guides/best-port-wine-bars",
  datePublished: "2026-04-23",
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

const related = [
  {
    title: "Port Wine Cellars Guide",
    description: "If you want the full cellar tour experience — 8 ranked.",
    href: "/guides/port-wine-cellars-guide",
    category: "Wine Guide",
  },
  {
    title: "Port Wine for Beginners",
    description: "Ruby vs Tawny, how to taste, and what to buy.",
    href: "/guides/port-wine-tasting-beginners",
    category: "Wine Guide",
  },
  {
    title: "Where to Eat in Porto",
    description: "Best restaurants by neighborhood — pair food with wine.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
];

export default function PortWineBarsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best Port Wine Bars in Porto",
          itemListOrder: "https://schema.org/ItemListUnordered",
          numberOfItems: wineBars.length,
          itemListElement: wineBars.map((bar, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: bar.name,
          })),
        }}
      />
      <Navigation />
      <main>
        <GuideHero
          category="Wine Guide"
          title="Best Port Wine Bars in Porto 2026"
          subtitle="Where to taste port wine without committing to a cellar tour — from riverside terraces to old-school tascas."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Wine Bars" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <GuideSection
              label="Why Wine Bars?"
              title="Cellar Tours vs Wine Bars"
              description="Both have their place. Here's when to choose a bar over a tour."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Cellar tours are educational — you walk through the cellars, learn how port
                    is made, and taste at the end. They&apos;re worth doing once. But if
                    you&apos;ve already done a tour, or you just want to taste good wine
                    without the 45-minute preamble, Porto&apos;s wine bars are the answer.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Wine bars let you taste across producers (impossible at a cellar, which
                    only pours its own), try by the glass instead of committing to a full
                    tasting, and discover Douro table wines alongside port. They&apos;re also
                    where Porto&apos;s wine professionals drink — which tells you something.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            <ProTip variant="tip">
              New to port? Read our{" "}
              <a href="/guides/port-wine-tasting-beginners" className="text-terracotta underline">
                beginner&apos;s guide
              </a>{" "}
              first — it covers the basics of Ruby vs Tawny, tasting technique,
              and what to order. Then come here to put it into practice.
            </ProTip>

            {/* The bars */}
            <GuideSection
              label="The Bars"
              title="6 Best Wine Bars in Porto"
              description="From serious tasting rooms to casual riverside terraces."
            >
              <div className="space-y-6">
                {wineBars.map((bar, i) => (
                  <ScrollReveal key={bar.name} delay={i * 0.06}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="font-serif text-xl text-stone-800">
                            {bar.name}
                          </h3>
                          <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                            {bar.neighborhood}
                          </p>
                        </div>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm flex-shrink-0">
                          {bar.price}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {bar.vibe}
                        </span>
                      </div>

                      <p className="text-stone-600 text-sm leading-relaxed mb-3">
                        {bar.description}
                      </p>

                      <div className="bg-cream rounded px-3 py-2.5 border-l-2 border-ochre">
                        <p className="text-stone-600 text-xs leading-relaxed">
                          <span className="font-medium text-stone-700">Must try: </span>
                          {bar.mustTry}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              The best time to visit any Porto wine bar is weekday afternoon
              (3-6 PM). You&apos;ll have the sommelier&apos;s full attention,
              prices are the same, and the atmosphere is unhurried.
            </ProTip>

            {/* Porto Tónico section */}
            <GuideSection
              label="The Drink"
              title="Porto Tónico — The Local Aperitif"
              description="Porto's signature cocktail is the reason dry white port exists."
            >
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Every wine bar in Porto serves Porto Tónico — dry white port over ice with
                    tonic water, a slice of orange, and a sprig of mint. It&apos;s refreshing,
                    low-effort, and the perfect aperitif before dinner. Most bars charge €5-7.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    If you want to make it at home: 60ml Churchill&apos;s Dry White Port, 120ml
                    quality tonic, ice, orange slice, and fresh mint. The bottle costs €8-10 in
                    Porto and makes 10+ drinks. It&apos;s the easiest souvenir to bring home.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            <GuideCTA
              title="Plan Your Wine Tasting Day"
              description="Combine a cellar tour in the morning with a wine bar in the evening — our 3-day itinerary shows you how."
              buttonText="See 3-Day Itinerary"
              href="/3-day-porto-itinerary"
            />

            <FAQSection faqs={wineBarFaqs} />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
