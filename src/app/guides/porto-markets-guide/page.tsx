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
import { markets, whatToBuy, faqs } from "@/data/guides/markets";

export const metadata: Metadata = {
  title:
    "Porto Markets Guide 2026 — Bolhao, Food Halls & Flea Markets | Porto Itinerary",
  description:
    "Complete guide to Porto's best markets in 2026 — Mercado do Bolhao, Bom Sucesso food hall, Saturday flea markets, and what souvenirs to buy. With hours, tips, and first-hand recommendations.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/porto-markets-guide",
  },
  openGraph: {
    title: "Porto Markets Guide 2026 — Bolhao, Food Halls & Flea Markets",
    description:
      "From Bolhao's renovated grandeur to Vandoma's chaotic flea market. Every market in Porto with hours, tips, and what to buy.",
    url: "https://portoitinerary.com/guides/porto-markets-guide",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Porto Markets Guide 2026 — Bolhao, Food Halls & Flea Markets",
  description:
    "Complete guide to Porto's best markets — Mercado do Bolhao, Bom Sucesso food hall, Saturday flea markets, and what to buy.",
  url: "https://portoitinerary.com/guides/porto-markets-guide",
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
      "Best restaurants by neighborhood, with exact orders and local tips.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
  {
    title: "Porto on a Budget",
    description:
      "Daily budgets, free activities, and cheap eats across the city.",
    href: "/guides/porto-on-a-budget",
    category: "Practical Guide",
  },
  {
    title: "Porto Neighborhoods",
    description:
      "What each neighborhood feels like and where to base yourself.",
    href: "/guides/porto-neighborhoods",
    category: "Area Guide",
  },
];

const traditionalMarkets = markets.filter(
  (m) => m.type === "Traditional Market" || m.type === "Food Hall"
);
const fleaAndArtisanMarkets = markets.filter(
  (m) =>
    m.type === "Flea Market" ||
    m.type === "Artisan Market" ||
    m.type === "Monthly Vintage Market"
);

const typeColors: Record<string, { label: string; border: string; bg: string }> = {
  "Traditional Market": {
    label: "text-terracotta",
    border: "border-terracotta/30",
    bg: "bg-terracotta/5",
  },
  "Food Hall": {
    label: "text-amber-700",
    border: "border-amber-600/30",
    bg: "bg-amber-50/50",
  },
  "Flea Market": {
    label: "text-stone-600",
    border: "border-stone-400/30",
    bg: "bg-stone-50",
  },
  "Artisan Market": {
    label: "text-green-700",
    border: "border-green-600/30",
    bg: "bg-green-50/50",
  },
  "Monthly Vintage Market": {
    label: "text-airmail-blue",
    border: "border-airmail-blue/30",
    bg: "bg-blue-50/50",
  },
};

export default function PortoMarketsGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Porto Markets Guide"
          subtitle="From Bolhao's century-old vendors to Saturday flea markets where you'll find things you didn't know you needed."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Porto Markets Guide" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Quick Answer */}
            <ScrollReveal>
              <div className="mb-10 rounded-lg border border-stone-200 bg-stone-50/50 p-5 sm:p-6">
                <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-2">
                  Quick Answer
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Porto has two essential markets:{" "}
                  <strong className="text-stone-800">Mercado do Bolhao</strong>{" "}
                  for traditional food shopping and local atmosphere, and{" "}
                  <strong className="text-stone-800">Mercado Bom Sucesso</strong>{" "}
                  for a modern food hall lunch. On Saturdays, the city comes alive
                  with flea markets —{" "}
                  <strong className="text-stone-800">Feira de Vandoma</strong> is
                  the oldest and most chaotic,{" "}
                  <strong className="text-stone-800">Mercado de Cedofeita</strong>{" "}
                  is the most curated. Plan a Saturday morning if markets are your
                  thing.
                </p>
              </div>
            </ScrollReveal>

            {/* Food Markets & Halls */}
            <GuideSection
              label="Food Markets"
              title="Food Markets & Halls"
              description="Porto's permanent markets — one historic, one modern. Both worth a visit, for completely different reasons."
            >
              <div className="space-y-6">
                {traditionalMarkets.map((market, i) => {
                  const colors = typeColors[market.type] || typeColors["Traditional Market"];
                  return (
                    <ScrollReveal key={market.name} delay={i * 0.08}>
                      <div
                        className={`parchment-texture rounded-lg ${colors.border} border postcard-shadow overflow-hidden`}
                      >
                        <div
                          className={`${colors.bg} px-5 py-3 border-b ${colors.border}`}
                        >
                          <div className="flex items-baseline justify-between">
                            <h3
                              className={`font-serif text-xl ${colors.label}`}
                            >
                              {market.name}
                            </h3>
                            <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark whitespace-nowrap">
                              {market.neighborhood}
                            </span>
                          </div>
                        </div>
                        <div className="p-5 space-y-3">
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {market.description}
                          </p>
                          <div>
                            <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-0.5">
                              Hours
                            </p>
                            <p className="text-stone-600 text-sm">
                              {market.hours}
                              {market.closedOn !== "None — open every day" && (
                                <span className="text-stone-400">
                                  {" "}
                                  (closed {market.closedOn})
                                </span>
                              )}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-0.5">
                              Must Try
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed">
                              {market.mustTry}
                            </p>
                          </div>
                          <p className="text-[11px] text-terracotta italic">
                            {market.tip}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Bolhao&apos;s upper floor is the part most tourists miss. After the
              renovation, the top level has a food court with some excellent stalls —
              but the real reason to go up is the vantage point. You can look down
              over the entire market floor, watch the vendors working, and get a
              sense of the building&apos;s scale that you completely miss from ground
              level.
            </ProTip>

            {/* Flea & Artisan Markets */}
            <GuideSection
              label="Saturday Markets"
              title="Flea Markets & Artisan Markets"
              description="Porto's Saturday markets are where the city's creative and eccentric sides come out. Bring cash, wear comfortable shoes, and leave your itinerary at the hotel."
            >
              <div className="space-y-6">
                {fleaAndArtisanMarkets.map((market, i) => {
                  const colors = typeColors[market.type] || typeColors["Flea Market"];
                  return (
                    <ScrollReveal key={market.name} delay={i * 0.08}>
                      <div
                        className={`parchment-texture rounded-lg ${colors.border} border postcard-shadow overflow-hidden`}
                      >
                        <div
                          className={`${colors.bg} px-5 py-3 border-b ${colors.border}`}
                        >
                          <div className="flex items-baseline justify-between">
                            <h3
                              className={`font-serif text-xl ${colors.label}`}
                            >
                              {market.name}
                            </h3>
                            <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark whitespace-nowrap">
                              {market.neighborhood}
                            </span>
                          </div>
                          <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-stone-400 mt-1">
                            {market.type} &middot; {market.hours}
                          </p>
                        </div>
                        <div className="p-5 space-y-3">
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {market.description}
                          </p>
                          <div>
                            <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-0.5">
                              What to Look For
                            </p>
                            <p className="text-stone-600 text-sm leading-relaxed">
                              {market.mustTry}
                            </p>
                          </div>
                          <p className="text-[11px] text-terracotta italic">
                            {market.tip}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              Feira de Vandoma is the market most tourists never find — it&apos;s
              in Fontainhas, away from the historic center, and it looks like
              organized chaos. That&apos;s exactly why it&apos;s worth going. The
              vendors have been coming here for decades and the finds are genuine.
              I picked up a hand-painted tile for €3 that would cost €15 in a
              Ribeira souvenir shop. Start at the far end of the market where fewer
              people venture — that&apos;s where the interesting stuff hides.
            </ProTip>

            {/* What to Buy */}
            <GuideSection
              label="Shopping Guide"
              title="What to Buy in Porto"
              description="The best souvenirs and food gifts — things that are actually worth bringing home, with where to find them and what to pay."
            >
              <div className="space-y-4">
                {whatToBuy.map((item, i) => (
                  <ScrollReveal key={item.item} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg p-4 postcard-shadow">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-serif text-base text-stone-800">
                          {item.item}
                        </h3>
                        <span className="font-serif text-sm text-terracotta font-medium whitespace-nowrap ml-3">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                        {item.where}
                      </p>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.tip}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Market Tips */}
            <GuideSection
              label="Practical Info"
              title="Market Tips"
              description="A few things we learned the hard way so you don't have to."
            >
              <div className="space-y-2">
                {[
                  "Bring cash to every market — especially the flea markets. Most stalls at Vandoma, Beira-Rio, and Cedofeita don't take cards. Bolhao and Bom Sucesso are better for card payments, but even there some traditional vendors are cash-only.",
                  "Saturday is the big market day in Porto. If markets are a priority, plan your trip so at least one Saturday falls during your stay. You can hit Vandoma early (7-10 AM), Cedofeita mid-morning (10 AM-1 PM), and still make Bom Sucesso for a late lunch.",
                  "Bolhao is best on weekday mornings. The vendors are more relaxed, the aisles aren't packed, and you'll actually be able to have a conversation about what you're buying. Weekend mornings are busier but still manageable.",
                  "If you're buying port wine, olive oil, or canned fish as gifts, buy at the end of your trip. You don't want to carry bottles around Porto's hills for three days. Most shops will package items for travel if you ask.",
                  "Haggling is normal at flea markets but not at food markets. At Vandoma and Porto Belo, everything is negotiable — start at 60-70% of the asking price. At Bolhao, prices are fixed and haggling would be rude.",
                  "The area around Rua das Flores has the best concentration of food and souvenir shops outside the markets — Loja das Conservas, Mercearia das Flores, and several cork shops. It's a good alternative if you miss the Saturday markets.",
                ].map((tip, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
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

            <GuideCTA
              title="Plan Your Porto Trip"
              description="Our itineraries include market visits, food stops, and the best shopping streets — all mapped out day by day."
              buttonText="See Itineraries"
              href="/itineraries"
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
