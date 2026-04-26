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
  attractions,
  familyRestaurants,
  practicalTips,
  faqs,
} from "@/data/guides/porto-kids";

export const metadata: Metadata = {
  title:
    "Porto with Kids 2026 \u2014 Family-Friendly Attractions & Tips | Porto Itinerary",
  description:
    "Tested family guide to Porto with kids in 2026. Best attractions by age, stroller vs carrier advice, family restaurants, and a sample day plan from parents who\u2019ve done it three times.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/porto-with-kids",
  },
  openGraph: {
    title: "Porto with Kids 2026 \u2014 Family-Friendly Attractions & Tips",
    description:
      "What actually works in Porto with children, from toddlers to tweens. Honest reviews, practical tips, and a realistic family itinerary.",
    url: "https://portoitinerary.com/guides/porto-with-kids",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Porto with Kids 2026 \u2014 Family-Friendly Attractions & Tips",
  description:
    "Tested family guide to Porto with kids. Best attractions by age, stroller vs carrier advice, family restaurants, and a sample day plan.",
  url: "https://portoitinerary.com/guides/porto-with-kids",
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
    title: "Getting Around Porto",
    description:
      "Metro, trams, buses, and taxis \u2014 how to navigate the city with (and without) kids.",
    href: "/guides/getting-around-porto",
    category: "Transport",
  },
  {
    title: "Porto on a Budget",
    description:
      "Daily costs, free activities, and cheap eats \u2014 family travel doesn\u2019t have to break the bank.",
    href: "/guides/porto-on-a-budget",
    category: "Practical Guide",
  },
  {
    title: "Best Past\u00E9is de Nata in Porto",
    description:
      "The one thing every kid in your family will agree on. Ranked by taste and crunch.",
    href: "/guides/best-pasteis-de-nata-porto",
    category: "Food Guide",
  },
];

const ageGroupColors: Record<
  string,
  { border: string; label: string; bg: string; tag: string }
> = {
  toddlers: {
    border: "border-sky-400/30",
    label: "text-sky-700",
    bg: "bg-sky-50/50",
    tag: "bg-sky-100 text-sky-700",
  },
  kids: {
    border: "border-terracotta/30",
    label: "text-terracotta",
    bg: "bg-terracotta/5",
    tag: "bg-terracotta/10 text-terracotta",
  },
  tweens: {
    border: "border-stone-400/30",
    label: "text-stone-600",
    bg: "bg-stone-50",
    tag: "bg-stone-200 text-stone-700",
  },
};

const toddlerAttractions = attractions.filter((a) =>
  ["All ages"].includes(a.ageRange)
);
const kidsAttractions = attractions.filter(
  (a) => a.ageRange === "5+" || a.ageRange === "Harry Potter fans"
);
const tweensAttractions = attractions.filter((a) => a.ageRange === "8+");

export default function PortoWithKidsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Family Guide"
          title="Porto with Kids"
          subtitle="We&rsquo;ve brought our kids to Porto three times &mdash; here&rsquo;s what actually works, what&rsquo;s overhyped, and how to survive the cobblestones with a toddler."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Porto with Kids" }]}
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
                  Porto is a wonderful city for families &mdash; it&rsquo;s safe,
                  affordable, and the Portuguese genuinely love children. The main
                  challenges are the{" "}
                  <strong className="text-stone-800">steep cobblestone hills</strong>{" "}
                  (leave the stroller at home) and the{" "}
                  <strong className="text-stone-800">lack of big-ticket kids&rsquo; attractions</strong>.
                  But that&rsquo;s actually Porto&rsquo;s strength: the best family
                  moments here are boat rides, park picnics, tram journeys, and
                  chasing peacocks through gardens &mdash; not queuing for theme parks.
                </p>
              </div>
            </ScrollReveal>

            {/* Toddler-Friendly (All Ages) */}
            <GuideSection
              label="Ages 0\u20134"
              title="Best for Toddlers & Little Ones"
              description="These work even with babies in carriers. Open spaces, short durations, and no long queues."
            >
              <div className="space-y-4">
                {toddlerAttractions.map((attraction, i) => (
                  <ScrollReveal key={attraction.name} delay={i * 0.06}>
                    <div
                      className={`parchment-texture rounded-lg ${ageGroupColors.toddlers.border} border postcard-shadow overflow-hidden`}
                    >
                      <div
                        className={`${ageGroupColors.toddlers.bg} px-5 py-3 border-b ${ageGroupColors.toddlers.border}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3
                            className={`font-serif text-lg ${ageGroupColors.toddlers.label}`}
                          >
                            {attraction.name}
                          </h3>
                          <span
                            className={`text-[10px] font-sans font-medium tracking-[0.1em] uppercase px-2 py-0.5 rounded-full whitespace-nowrap ${ageGroupColors.toddlers.tag}`}
                          >
                            {attraction.ageRange}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 space-y-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                          <span>{attraction.duration}</span>
                          <span>{attraction.cost}</span>
                          <span>{attraction.neighborhood}</span>
                        </div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {attraction.description}
                        </p>
                        <p className="text-[11px] text-terracotta italic">
                          {attraction.tip}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Kids 5+ */}
            <GuideSection
              label="Ages 5\u201310"
              title="Best for School-Age Kids"
              description="Interactive museums, bookshops for Harry Potter fans, and a planetarium that justifies the trek."
            >
              <div className="space-y-4">
                {kidsAttractions.map((attraction, i) => (
                  <ScrollReveal key={attraction.name} delay={i * 0.06}>
                    <div
                      className={`parchment-texture rounded-lg ${ageGroupColors.kids.border} border postcard-shadow overflow-hidden`}
                    >
                      <div
                        className={`${ageGroupColors.kids.bg} px-5 py-3 border-b ${ageGroupColors.kids.border}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3
                            className={`font-serif text-lg ${ageGroupColors.kids.label}`}
                          >
                            {attraction.name}
                          </h3>
                          <span
                            className={`text-[10px] font-sans font-medium tracking-[0.1em] uppercase px-2 py-0.5 rounded-full whitespace-nowrap ${ageGroupColors.kids.tag}`}
                          >
                            {attraction.ageRange}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 space-y-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                          <span>{attraction.duration}</span>
                          <span>{attraction.cost}</span>
                          <span>{attraction.neighborhood}</span>
                        </div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {attraction.description}
                        </p>
                        <p className="text-[11px] text-terracotta italic">
                          {attraction.tip}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Tweens 8+ */}
            <GuideSection
              label="Ages 8+"
              title="Best for Tweens & Older Kids"
              description="Attractions that reward effort and attention spans longer than 10 minutes."
            >
              <div className="space-y-4">
                {tweensAttractions.map((attraction, i) => (
                  <ScrollReveal key={attraction.name} delay={i * 0.06}>
                    <div
                      className={`parchment-texture rounded-lg ${ageGroupColors.tweens.border} border postcard-shadow overflow-hidden`}
                    >
                      <div
                        className={`${ageGroupColors.tweens.bg} px-5 py-3 border-b ${ageGroupColors.tweens.border}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3
                            className={`font-serif text-lg ${ageGroupColors.tweens.label}`}
                          >
                            {attraction.name}
                          </h3>
                          <span
                            className={`text-[10px] font-sans font-medium tracking-[0.1em] uppercase px-2 py-0.5 rounded-full whitespace-nowrap ${ageGroupColors.tweens.tag}`}
                          >
                            {attraction.ageRange}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 space-y-3">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                          <span>{attraction.duration}</span>
                          <span>{attraction.cost}</span>
                          <span>{attraction.neighborhood}</span>
                        </div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {attraction.description}
                        </p>
                        <p className="text-[11px] text-terracotta italic">
                          {attraction.tip}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              <strong>Bring a carrier, not a stroller.</strong> We made the stroller
              mistake on our first Porto trip and abandoned it at the hotel by
              lunchtime. The cobblestones are relentless, the hills are steep, and
              half the interesting streets have steps. A structured carrier
              (Ergobaby, BabyBj&ouml;rn) handles the terrain and keeps your hands
              free for holding an older child&rsquo;s hand on the hills.
            </ProTip>

            {/* Family-Friendly Restaurants */}
            <GuideSection
              label="Family Dining"
              title="Family-Friendly Restaurants"
              description="Places where staff won&rsquo;t flinch at crumbs, high chairs appear without asking, and the food is good enough that parents enjoy it too."
            >
              <div className="space-y-4">
                {familyRestaurants.map((restaurant, i) => (
                  <ScrollReveal key={restaurant.name} delay={i * 0.05}>
                    <div className="py-4 border-b border-stone-200 last:border-0">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3 className="font-serif text-lg text-stone-800">
                          {restaurant.name}
                        </h3>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark whitespace-nowrap">
                            {restaurant.neighborhood}
                          </span>
                          <span className="font-serif text-sm text-terracotta font-medium whitespace-nowrap">
                            {restaurant.priceRange}
                          </span>
                        </div>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {restaurant.why}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="money-saver">
              Several of Porto&rsquo;s best family attractions are completely free.{" "}
              <strong>Parque da Cidade</strong> (the biggest urban park in Portugal),{" "}
              <strong>Crystal Palace Gardens</strong> (peacocks, views, and wide
              paths), and walking across{" "}
              <strong>Dom Lu&iacute;s I Bridge</strong> cost nothing and are
              genuinely more memorable than most paid attractions. We&rsquo;ve done
              full days with kids spending only on food.
            </ProTip>

            {/* Practical Tips */}
            <GuideSection
              label="Know Before You Go"
              title="Practical Tips for Families"
              description="The things we wish someone had told us before our first Porto trip with kids."
            >
              <div className="space-y-2">
                {practicalTips.map((tip, i) => (
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

            {/* Sample Family Day */}
            <GuideSection
              label="Sample Itinerary"
              title="A Perfect Family Day in Porto"
              description="A realistic day plan that balances sightseeing with kid-friendly pacing. We&rsquo;ve done this exact route and it works."
            >
              <div className="space-y-0">
                {[
                  {
                    time: "9:00 AM",
                    activity: "Breakfast at your hotel or a pastry run",
                    detail:
                      "Grab past\u00E9is de nata from Manteigaria and a gal\u00E3o (milky coffee) for the adults. Kids eat theirs on the walk \u2014 no crumb judgment in Porto.",
                  },
                  {
                    time: "9:30 AM",
                    activity: "Walk through Ribeira to Dom Lu\u00EDs I Bridge",
                    detail:
                      "Start at the waterfront, let kids throw (imaginary) bread to the seagulls, then walk across the upper deck of the bridge. It\u2019s dramatic, breezy, and the view at the center stops everyone in their tracks.",
                  },
                  {
                    time: "10:15 AM",
                    activity: "Cable car ride down to Gaia waterfront",
                    detail:
                      "Kids treat this as a ride, not transport. The 5-minute descent from the bridge to the river is a highlight. One-way is \u20AC6 \u2014 walk back up via the Gaia steps for free exercise.",
                  },
                  {
                    time: "10:45 AM",
                    activity: "6 Bridges boat cruise from Gaia",
                    detail:
                      "Board a 50-minute cruise from the Gaia side. Upper deck for views, lower deck for shade. The turnaround at the eastern bridges is surprisingly scenic. Kids stay engaged the whole way.",
                  },
                  {
                    time: "12:00 PM",
                    activity: "Lunch at Chez Lapin or Ribeira waterfront",
                    detail:
                      "Eat on the terrace overlooking the river. Order grilled fish, chips for the kids, and watch the rabelo boats go by. Don\u2019t rush \u2014 you\u2019re about to hit siesta time.",
                  },
                  {
                    time: "1:30 PM",
                    activity: "Rest / siesta break",
                    detail:
                      "Head back to your accommodation for a rest. Toddlers nap. Older kids read or screen-time. Adults close their eyes for 20 minutes. This is the secret to a happy family trip: don\u2019t push through the afternoon slump.",
                  },
                  {
                    time: "3:30 PM",
                    activity: "Crystal Palace Gardens",
                    detail:
                      "Wide paths for running, peacocks to chase (gently), and panoramic viewpoints for the adults. The gardens are flat-ish and shaded \u2014 ideal for post-nap energy burning.",
                  },
                  {
                    time: "5:00 PM",
                    activity: "Tram Line 1 to Foz",
                    detail:
                      "Catch the vintage tram from Passeio Alegre (or walk down from the gardens) and ride to the coast. Sit by the open windows and feel the river breeze.",
                  },
                  {
                    time: "5:30 PM",
                    activity: "Foz coastline walk & beach play",
                    detail:
                      "Let kids loose on the rocky beach near the Felgueiras Lighthouse. The rock pools at low tide are endlessly entertaining. Adults watch the Atlantic crash in. Everyone\u2019s happy.",
                  },
                  {
                    time: "7:00 PM",
                    activity: "Early dinner at a Foz or Cedofeita restaurant",
                    detail:
                      "Eat at 7 PM before the Portuguese dinner rush. You\u2019ll get better service, a calmer restaurant, and kids will be in bed by 9. Gazela in Cedofeita or O Cara\u00E7as for shared petiscos.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.04}>
                    <div className="flex gap-4 py-4 border-b border-stone-100 last:border-0">
                      <div className="flex-shrink-0 w-16 sm:w-20">
                        <span className="font-serif text-sm text-terracotta font-medium">
                          {item.time}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif text-base text-stone-800 mb-1">
                          {item.activity}
                        </h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <GuideCTA
              title="Plan Your Family Porto Trip"
              description="Day-by-day itineraries with kid-friendly pacing, restaurant picks, and rest breaks built in."
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
