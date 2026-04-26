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
  nataSpots,
  whatMakesGreatNata,
  tastingTips,
  faqs,
} from "@/data/guides/pasteis-de-nata";

export const metadata: Metadata = {
  title:
    "Best Past\u00E9is de Nata in Porto 2026 \u2014 6 Bakeries Ranked | Porto Itinerary",
  description:
    "We ate 20+ past\u00E9is de nata across Porto and ranked the 6 best bakeries. Manteigaria, Nata Lisboa, Confeitaria do Bolh\u00E3o and more \u2014 with prices, hours, and honest verdicts for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/best-pasteis-de-nata-porto",
  },
  openGraph: {
    title: "Best Past\u00E9is de Nata in Porto 2026 \u2014 6 Bakeries Ranked",
    description:
      "We ate our way through 20+ custard tarts to rank Porto\u2019s best nata spots. Prices, hours, and opinionated verdicts.",
    url: "https://portoitinerary.com/guides/best-pasteis-de-nata-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Past\u00E9is de Nata in Porto 2026 \u2014 6 Bakeries Ranked",
  description:
    "A ranking of the best past\u00E9is de nata bakeries in Porto, tested and compared across 20+ tastings.",
  url: "https://portoitinerary.com/guides/best-pasteis-de-nata-porto",
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
    title: "Best Francesinha in Porto",
    description:
      "Porto\u2019s other essential food experience \u2014 8 spots ranked by sauce and soul.",
    href: "/guides/best-francesinha-porto",
    category: "Food Guide",
  },
  {
    title: "Porto on a Budget",
    description:
      "How to eat, drink, and explore Porto without breaking the bank.",
    href: "/guides/porto-on-a-budget",
    category: "Planning",
  },
];

export default function PasteisDeNataPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best Past\u00E9is de Nata in Porto \u2014 Ranked",
          itemListOrder: "https://schema.org/ItemListOrderDescending",
          numberOfItems: 6,
          itemListElement: nataSpots.map((spot) => ({
            "@type": "ListItem",
            position: spot.rank,
            name: spot.name,
            url: `https://portoitinerary.com/guides/best-pasteis-de-nata-porto#${spot.name.toLowerCase().replace(/\s+/g, "-")}`,
          })),
        }}
      />
      <Navigation />
      <main>
        <GuideHero
          category="Food Guide"
          title="Best Past\u00E9is de Nata in Porto 2026"
          subtitle="We ate our way through 20+ custard tarts to make this list. Our dentist is concerned."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Best Past\u00E9is de Nata" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* What Makes a Great Nata */}
            <GuideSection
              label="The Science"
              title="What Makes a Great Pastel de Nata"
              description="Four elements separate a transcendent nata from a mediocre one. We learned this the hard way \u2014 by eating a lot of bad ones first."
            >
              <div className="space-y-5">
                {[
                  {
                    label: "The Pastry",
                    content: whatMakesGreatNata.pastry,
                  },
                  {
                    label: "The Filling",
                    content: whatMakesGreatNata.filling,
                  },
                  {
                    label: "The Temperature",
                    content: whatMakesGreatNata.temperature,
                  },
                  {
                    label: "The Extras",
                    content: whatMakesGreatNata.extras,
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5">
                      <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta mb-1.5">
                        {item.label}
                      </p>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Always eat your nata warm. The single biggest mistake tourists make
              is buying one, carrying it around for 20 minutes, then biting into
              cold pastry. Eat it at the counter, standing up, within 60 seconds
              of receiving it. That&apos;s when the contrast between crispy shell
              and creamy custard is at its peak.
            </ProTip>

            {/* Rankings */}
            <GuideSection
              label="The Rankings"
              title="6 Best Past\u00E9is de Nata in Porto"
              description="Ranked by pastry quality, custard flavor, freshness, and overall experience. We visited each spot multiple times."
            >
              <div className="space-y-6">
                {nataSpots.map((spot) => (
                  <ScrollReveal key={spot.rank} delay={spot.rank * 0.05}>
                    <div
                      className={`parchment-texture rounded-lg postcard-shadow overflow-hidden ${
                        spot.rank === 1 ? "ring-2 ring-terracotta" : ""
                      }`}
                    >
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              spot.rank === 1
                                ? "bg-terracotta"
                                : "bg-stone-200"
                            }`}
                          >
                            <span
                              className={`font-serif text-lg ${
                                spot.rank === 1
                                  ? "text-cream"
                                  : "text-stone-600"
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
                              {spot.rank === 1 && (
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
                            What Stands Out
                          </p>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {spot.standout}
                          </p>
                        </div>

                        <p className="text-stone-700 text-sm leading-relaxed mb-2">
                          {spot.verdict}
                        </p>

                        <p className="text-stone-600 text-sm">
                          <span className="font-medium">Style:</span>{" "}
                          {spot.style}
                        </p>
                      </div>

                      <div className="bg-cream px-5 sm:px-6 py-3 border-t border-stone-200/50">
                        <p className="text-stone-500 text-xs italic">
                          {spot.hours}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              Manteigaria&apos;s open kitchen isn&apos;t just for show. Stand at
              the counter and watch them fold the dough, fill the molds, and
              slide trays into the oven. When a fresh tray comes out, they&apos;ll
              serve you one that&apos;s barely 30 seconds old. That&apos;s the
              nata experience you came to Porto for.
            </ProTip>

            {/* Tasting Tips */}
            <GuideSection
              label="Practical Advice"
              title="Nata Tasting Tips"
              description="Hard-won wisdom from eating far too many custard tarts."
            >
              <div className="space-y-3">
                {tastingTips.map((tip, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="flex items-start gap-3 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif italic text-terracotta text-lg flex-shrink-0 w-6">
                        {i + 1}.
                      </span>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Nata vs Pastel de Belem */}
            <GuideSection
              label="The Debate"
              title="Nata vs. Pastel de Bel\u00E9m"
              description="Porto\u2019s custard tarts versus Lisbon\u2019s famous originals \u2014 does the distinction actually matter?"
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Every travel guide will tell you that the &ldquo;real&rdquo;
                    pastel de nata comes from Past&eacute;is de Bel&eacute;m in
                    Lisbon, where monks from Jer&oacute;nimos Monastery
                    supposedly created the original recipe before 1837. The
                    bakery still operates, still claims to use the secret
                    recipe, and still draws a line around the block.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Here&apos;s our honest take: the distinction is mostly
                    marketing. A &ldquo;pastel de Bel&eacute;m&rdquo; is a
                    pastel de nata made at one specific bakery. The recipe
                    differences are subtle at best. We&apos;ve eaten natas at
                    Past&eacute;is de Bel&eacute;m multiple times, and
                    they&apos;re excellent &mdash; but Manteigaria in Porto is
                    just as good, costs less, and has no 45-minute queue.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Porto&apos;s nata culture is less famous but more accessible.
                    You won&apos;t find a single &ldquo;nata museum&rdquo; or a
                    line of tour buses, just neighborhood bakeries doing what
                    they&apos;ve done for decades. That authenticity is worth
                    more than any secret recipe.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            <GuideCTA
              title="Fit a Nata Tour Into Your Trip"
              description="Our 1-day itinerary passes three of these bakeries \u2014 perfectly timed for mid-morning and afternoon snack stops."
              buttonText="See 1-Day Itinerary"
              href="/1-day-porto-itinerary"
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
