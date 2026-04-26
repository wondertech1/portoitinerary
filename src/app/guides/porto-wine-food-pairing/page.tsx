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
import { pairings, pairingFaqs } from "@/data/guides/wine-food-pairing";

export const metadata: Metadata = {
  title:
    "Porto Wine & Food Pairing Guide 2026 — What to Drink with What You Eat | Porto Itinerary",
  description:
    "Which wine goes with which Porto dish? Port wine with chocolate, vinho verde with sardines, and why you should never pair port with a francesinha. Complete pairing guide for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/porto-wine-food-pairing",
  },
  openGraph: {
    title: "Porto Wine & Food Pairing Guide 2026",
    description:
      "8 classic Porto dishes matched with their ideal wine. From bacalhau to pastel de nata.",
    url: "https://portoitinerary.com/guides/porto-wine-food-pairing",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Porto Wine & Food Pairing Guide 2026 — What to Drink with What You Eat",
  description:
    "A guide to pairing Porto's signature dishes with the right wines — port, Douro reds, and vinho verde.",
  url: "https://portoitinerary.com/guides/porto-wine-food-pairing",
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
    title: "Where to Eat in Porto",
    description: "16 restaurants by neighborhood — now you know what to drink.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
  {
    title: "Port Wine for Beginners",
    description: "Ruby vs Tawny, how to taste, and what to bring home.",
    href: "/guides/port-wine-tasting-beginners",
    category: "Wine Guide",
  },
  {
    title: "Best Port Wine Bars",
    description: "Where to practice these pairings — 6 bars, no tour required.",
    href: "/guides/best-port-wine-bars",
    category: "Wine Guide",
  },
];

const wineTypeColors: Record<string, string> = {
  Tawny: "bg-amber-100 text-amber-700",
  Ruby: "bg-red-100 text-red-700",
  White: "bg-yellow-50 text-yellow-700",
  Red: "bg-red-50 text-red-800",
  Beer: "bg-stone-100 text-stone-600",
};

export default function WineFoodPairingPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Wine Guide"
          title="Porto Wine & Food Pairing Guide"
          subtitle="What to drink with what you eat — 8 classic Porto dishes matched with their ideal wine."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Wine & Food Pairing" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <GuideSection
              label="Why This Matters"
              title="Porto's Food Deserves the Right Glass"
              description="You wouldn't eat bacalhau without olive oil. Don't drink the wrong wine with it either."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Porto is one of the few cities where the food and wine are so locally
                    intertwined that pairing them correctly isn&apos;t pretentious — it&apos;s
                    common sense. The sardines were grilled 10 minutes from where the vinho
                    verde was bottled. The port was aged across the river from where you&apos;re
                    eating chocolate. Geography does the pairing work for you.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Most restaurants in Porto will suggest the right wine if you ask — but
                    knowing the basics yourself means you can order confidently, spot when a
                    restaurant is pushing expensive bottles instead of appropriate ones, and
                    bring the right wines home as gifts.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Three wines cover 90% of Porto&apos;s food: <strong>vinho verde</strong> for
              seafood and light dishes, <strong>Douro red</strong> for meat,
              and <strong>tawny port</strong> for cheese and dessert. Learn
              these three and you&apos;ll never order wrong.
            </ProTip>

            {/* Pairings */}
            <GuideSection
              label="The Pairings"
              title="8 Porto Dishes, Perfectly Paired"
              description="Each dish matched with the wine (or beer) it was born to meet."
            >
              <div className="space-y-6">
                {pairings.map((pair, i) => (
                  <ScrollReveal key={pair.dish} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-serif text-xl text-stone-800">
                          {pair.dish}
                        </h3>
                        <span
                          className={`text-[10px] font-sans font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm flex-shrink-0 ${
                            wineTypeColors[pair.wineType] || "bg-stone-100 text-stone-500"
                          }`}
                        >
                          {pair.wineType}
                        </span>
                      </div>
                      <p className="font-serif text-base text-terracotta mb-2">
                        {pair.wine}
                      </p>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {pair.explanation}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              At traditional tascas, skip the wine list and say &ldquo;vinho da
              casa&rdquo; (house wine). It&apos;s usually a decent Douro red for
              €2-3 per glass. The markup on listed wines at tascas is often
              higher than the house pour is worth.
            </ProTip>

            {/* Where to pair */}
            <GuideSection
              label="Where to Pair"
              title="Restaurants with Great Wine Pairing"
              description="Three restaurants where the wine program matches the food."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Vinum at Graham&apos;s
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Vila Nova de Gaia &middot; €€€
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      The tasting menu paired with Graham&apos;s ports is the definitive Porto wine-and-food experience. Each course is designed around a specific port style — from dry white aperitif to aged tawny with dessert. The river-view terrace elevates everything.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Antiqvvm
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Massarelos &middot; €€€€
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Michelin-starred dining in a 19th-century palace. The sommelier&apos;s pairing covers Douro reds, aged ports, and rare Portuguese whites. Expensive but exceptional — this is Porto&apos;s most complete wine-and-food experience.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Taberna dos Mercadores
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Ribeira &middot; €€
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      The affordable pairing option. Only 8 tables, but the owner personally selects wines from small Douro producers and pairs them with traditional dishes. Ask him to choose — he&apos;ll match your food better than any algorithm.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </GuideSection>

            <FAQSection faqs={pairingFaqs} />

            <GuideCTA
              title="Eat and Drink Your Way Through Porto"
              description="Our itineraries include restaurant and wine picks for every meal — breakfast through nightcap."
              buttonText="See Itineraries"
              href="/itineraries"
            />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
