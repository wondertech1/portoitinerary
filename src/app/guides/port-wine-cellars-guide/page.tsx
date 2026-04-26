import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import WineCellarCard from "@/components/guides/WineCellarCard";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import GuideCTA from "@/components/shared/GuideCTA";
import ProTip from "@/components/shared/ProTip";
import JsonLd from "@/components/shared/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { wineCellars, wineCellarFaqs } from "@/data/guides/wine-cellars";

export const metadata: Metadata = {
  title:
    "Port Wine Cellars in Porto 2026 — Complete Guide to Gaia's Best Tours | Porto Itinerary",
  description:
    "Complete guide to port wine cellars in Vila Nova de Gaia for 2026. Taylor's, Graham's, Ferreira & more — tour prices, what's included, and which cellar is best for you.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/port-wine-cellars-guide",
  },
  openGraph: {
    title: "Port Wine Cellars in Porto 2026 — Complete Guide",
    description:
      "8 cellars compared: prices, tours, tastings, and verdicts. Find the perfect port wine experience in Gaia.",
    url: "https://portoitinerary.com/guides/port-wine-cellars-guide",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Port Wine Cellars in Porto 2026 — Complete Guide to Gaia's Best Tours",
  description:
    "A comprehensive guide to port wine cellars in Vila Nova de Gaia, with tour comparisons and recommendations.",
  url: "https://portoitinerary.com/guides/port-wine-cellars-guide",
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

const related = [
  {
    title: "Best Port Wine Bars",
    description: "Prefer tasting without a tour? 6 bars ranked.",
    href: "/guides/best-port-wine-bars",
    category: "Wine Guide",
  },
  {
    title: "Douro Valley Day Trip",
    description: "Visit the vineyards where port grapes grow.",
    href: "/guides/douro-valley-day-trip",
    category: "Wine Guide",
  },
  {
    title: "Port Wine for Beginners",
    description: "Ruby vs Tawny, how to taste, and what to buy.",
    href: "/guides/port-wine-tasting-beginners",
    category: "Wine Guide",
  },
];

export default function WineCellarsGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best Port Wine Cellars in Porto — Ranked",
          itemListOrder: "https://schema.org/ItemListOrderDescending",
          numberOfItems: 8,
          itemListElement: wineCellars.map((cellar) => ({
            "@type": "ListItem",
            position: cellar.rank,
            name: cellar.name,
            url: `https://portoitinerary.com/guides/port-wine-cellars-guide#${cellar.name.toLowerCase().replace(/['\s]+/g, "-")}`,
          })),
        }}
      />
      <Navigation />
      <main>
        <GuideHero
          category="Wine Guide"
          title="Port Wine Cellars in Porto 2026"
          subtitle="Complete guide to Gaia's best tours — 8 cellars compared so you can pick the right one."
          lastVerified="March 2026"
          breadcrumbItems={[
            { label: "Wine Cellars" },
          ]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* How port wine is made */}
            <GuideSection
              label="Background"
              title="How Port Wine Is Made"
              description="A quick primer before you step into the cellars."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Port wine starts in the Douro Valley — 100 km east of Porto
                    — where grapes grow on terraced hillsides of schist (slate)
                    soil. During fermentation, grape spirit (aguardente) is
                    added, which kills the yeast, stops fermentation, and
                    preserves the natural grape sugar. This is what makes port
                    sweet and fortified (19-22% alcohol).
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The young wine is then transported to Vila Nova de Gaia —
                    across the river from Porto — where it ages in the cool,
                    humid cellars (lodges). The style of port depends on how long
                    and in what type of vessel it ages: large wooden vats
                    (Ruby/Vintage), smaller barrels (Tawny), or bottles (LBV).
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The cellars you visit in Gaia are where the magic of aging
                    happens — centuries-old buildings where thousands of barrels
                    sit in darkness, slowly developing the complex flavors that
                    make port wine unique.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Visit two cellars maximum in a day. One for a full tour
              (Taylor&apos;s or Graham&apos;s), and one for a different style
              (Churchill&apos;s for dry whites, Cálem for Fado). Your palate
              will thank you. New to port wine? Read our{" "}
              <a href="/guides/port-wine-tasting-beginners" className="text-terracotta underline">
                beginner&apos;s tasting guide
              </a>{" "}
              first — it covers Ruby vs Tawny, how to taste, and what to buy.
            </ProTip>

            {/* Cellar rankings */}
            <GuideSection
              label="The Cellars"
              title="8 Best Port Wine Cellars Compared"
              description="Ranked by overall experience, wine quality, and value. We've visited each multiple times."
            >
              <div className="space-y-6">
                {wineCellars.map((cellar) => (
                  <WineCellarCard key={cellar.rank} {...cellar} />
                ))}
              </div>
            </GuideSection>

            {/* Getting there */}
            <GuideSection
              label="Getting There"
              title="How to Get to Vila Nova de Gaia"
            >
              <div className="space-y-3">
                {[
                  {
                    method: "Walk across Dom Luís I Bridge",
                    detail:
                      "5 minutes from Ribeira. Upper deck for views, lower deck for speed. Most cellars are 5-10 min walk from the Gaia side.",
                  },
                  {
                    method: "Metro to Jardim do Morro",
                    detail:
                      "Line D (yellow). The station is at the top of the hill — walk downhill to the cellars.",
                  },
                  {
                    method: "Teleférico (Cable Car)",
                    detail:
                      "€7 one-way. Runs from the upper bridge level down to the riverside. Fun but not essential.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="flex items-start gap-3 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif text-terracotta font-medium flex-shrink-0 w-52">
                        {item.method}
                      </span>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Tips */}
            <GuideSection label="Tips" title="Tips for Visiting Wine Cellars">
              <div className="space-y-2">
                {[
                  "Book online 1-2 weeks ahead in summer, 2-3 days otherwise — saves money and guarantees your slot.",
                  "Go in the morning — cellars are less crowded and your palate is fresher.",
                  "The premium tasting (€20-€25) is always worth the upgrade over standard (€12-€15).",
                  "Don't visit on an empty stomach. Eat breakfast first, or the alcohol hits harder.",
                  "Wear comfortable shoes — the cobblestone streets in Gaia are steep and uneven.",
                  "Buy wine directly from the cellar — prices are similar to shops but you can taste first.",
                  "Ask about cellar-exclusive bottlings — many cellars have wines you can't find in stores.",
                ].map((tip, i) => (
                  <ScrollReveal key={i} delay={i * 0.04}>
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

            <ProTip variant="money-saver">
              Skip the cable car (€7) unless you love the view. Walking
              downhill from Jardim do Morro to the cellars takes 5 minutes and
              the panorama along the way is just as good.
            </ProTip>

            <GuideCTA
              title="Add a Wine Day to Your Itinerary"
              description="Day 2 of our 3-day itinerary is a full Gaia wine day with Taylor's, Graham's, and sunset at Jardim do Morro."
              buttonText="See 3-Day Itinerary"
              href="/3-day-porto-itinerary"
            />

            <FAQSection faqs={wineCellarFaqs} />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
