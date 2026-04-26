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
  dailyBudgets,
  freeActivities,
  moneySavingTips,
  cheapEats,
  faqs,
} from "@/data/guides/budget";

export const metadata: Metadata = {
  title:
    "Porto on a Budget 2026 — How Much Does Porto Cost? | Porto Itinerary",
  description:
    "Realistic daily budgets for Porto in 2026, from backpacker to comfort. Free activities, cheap eats, and money-saving tips from someone who spent 5 days for under €300.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/porto-on-a-budget",
  },
  openGraph: {
    title: "Porto on a Budget 2026 — How Much Does Porto Cost?",
    description:
      "Daily budget breakdowns, free things to do, and the cheapest eats in Porto. Tested over 5 days on the ground.",
    url: "https://portoitinerary.com/guides/porto-on-a-budget",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Porto on a Budget 2026 — How Much Does Porto Cost?",
  description:
    "Realistic daily budgets for Porto in 2026, from backpacker to comfort. Free activities, cheap eats, and money-saving tips.",
  url: "https://portoitinerary.com/guides/porto-on-a-budget",
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
      "A local's guide to the best food — by neighborhood, with exact orders.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
  {
    title: "Where to Stay in Porto",
    description:
      "Best neighborhoods and hotels for every budget and travel style.",
    href: "/guides/where-to-stay-porto",
    category: "Accommodation",
  },
  {
    title: "Best Francesinha in Porto",
    description: "8 spots ranked — we ate them all so you don't have to.",
    href: "/guides/best-francesinha-porto",
    category: "Food Guide",
  },
];

const tierColors: Record<string, { border: string; label: string; bg: string }> = {
  Backpacker: {
    border: "border-green-600/30",
    label: "text-green-700",
    bg: "bg-green-50/50",
  },
  "Mid-Range": {
    border: "border-terracotta/30",
    label: "text-terracotta",
    bg: "bg-terracotta/5",
  },
  Comfort: {
    border: "border-stone-400/30",
    label: "text-stone-600",
    bg: "bg-stone-50",
  },
};

export default function PortoOnABudgetPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Porto on a Budget"
          subtitle="We spent 5 days in Porto for under €300 — here's exactly how we did it, and how you can spend more (or less)."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Porto on a Budget" }]}
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
                  Porto is one of the cheapest cities in Western Europe for what
                  you get. A backpacker can get by on{" "}
                  <strong className="text-stone-800">€40–55/day</strong>, a
                  mid-range traveler on{" "}
                  <strong className="text-stone-800">€80–110/day</strong>, and a
                  comfortable trip with boutique hotels runs{" "}
                  <strong className="text-stone-800">€150–200/day</strong>. The
                  secret weapon is the{" "}
                  <em>prato do dia</em> — a full lunch for €7–10 at any
                  neighborhood tasca.
                </p>
              </div>
            </ScrollReveal>

            {/* Daily Budget Breakdown */}
            <GuideSection
              label="Daily Costs"
              title="Daily Budget Breakdown"
              description="Realistic per-person costs based on what we actually spent. Prices reflect Porto in spring 2026."
            >
              <div className="space-y-6">
                {dailyBudgets.map((tier, i) => {
                  const colors = tierColors[tier.level] || tierColors.Comfort;
                  return (
                    <ScrollReveal key={tier.level} delay={i * 0.08}>
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
                              {tier.level}
                            </h3>
                            <span className="font-serif text-lg text-stone-800">
                              {tier.dailyCost}
                              <span className="text-stone-400 text-sm">
                                /day
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="p-5 space-y-3">
                          {[
                            { label: "Sleep", value: tier.accommodation },
                            { label: "Eat", value: tier.food },
                            { label: "Move", value: tier.transport },
                            { label: "Do", value: tier.activities },
                          ].map((item) => (
                            <div key={item.label}>
                              <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-0.5">
                                {item.label}
                              </p>
                              <p className="text-stone-600 text-sm leading-relaxed">
                                {item.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </GuideSection>

            <ProTip variant="money-saver">
              The <strong>prato do dia</strong> (dish of the day) is the single
              best money hack in Porto. Every neighborhood tasca offers a full
              lunch — soup, main, drink — for €7–10. We ate five straight prato
              do dia lunches and the most we paid was €9 at a tiny place in
              Miragaia. Look for handwritten signs in windows or just ask:
              &ldquo;Tem prato do dia?&rdquo;
            </ProTip>

            {/* Free Activities */}
            <GuideSection
              label="Free Things"
              title="Best Free Activities in Porto"
              description="Some of our favorite Porto moments cost nothing. These are worth building your day around."
            >
              <div className="space-y-4">
                {freeActivities.map((activity, i) => (
                  <ScrollReveal key={activity.name} delay={i * 0.05}>
                    <div className="py-4 border-b border-stone-200 last:border-0">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3 className="font-serif text-lg text-stone-800">
                          {activity.name}
                        </h3>
                        <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark whitespace-nowrap mt-1">
                          {activity.neighborhood}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-2">
                        {activity.description}
                      </p>
                      <p className="text-[11px] text-terracotta italic">
                        {activity.tip}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Cheap Eats */}
            <GuideSection
              label="Cheap Eats"
              title="Best Cheap Eats in Porto"
              description="Where to eat well for under €10. These are the spots we kept going back to."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {cheapEats.map((spot, i) => (
                  <ScrollReveal key={spot.name} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg p-4 postcard-shadow h-full">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-serif text-base text-stone-800">
                          {spot.name}
                        </h3>
                        <span className="font-serif text-sm text-terracotta font-medium">
                          {spot.price}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-1">
                        {spot.what}
                      </p>
                      <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                        {spot.where}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Money-Saving Tips */}
            <GuideSection
              label="Save Money"
              title="Money-Saving Tips"
              description="Practical tricks we picked up over five days of trying to spend as little as possible."
            >
              <div className="space-y-2">
                {moneySavingTips.map((tip, i) => (
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

            <ProTip variant="tip">
              The <strong>Porto Card</strong> (€13/1 day, €20/2 days, €25/3
              days) bundles free public transport with discounts at museums and
              wine cellars. If you plan to visit Clérigos Tower + Serralves +
              ride the metro a few times, it saves €8–12 over individual
              tickets. Buy it online before you arrive for an extra 5%
              discount.
            </ProTip>

            <GuideCTA
              title="See Our Porto Itineraries"
              description="Day-by-day plans with budget-friendly restaurant picks and free activities built in."
              buttonText="View Itineraries"
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
