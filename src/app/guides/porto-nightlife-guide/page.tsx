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
  nightlifeAreas,
  bestBars,
  fadoSpots,
  nightlifeFaqs,
} from "@/data/guides/nightlife";

export const metadata: Metadata = {
  title:
    "Porto Nightlife Guide 2026 — Best Bars, Fado & Late-Night Spots | Porto Itinerary",
  description:
    "The best bars, fado houses, and nightlife areas in Porto for 2026. From Galerias de Paris bar-hopping to intimate fado, with timing tips, dress code, and local recommendations.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/porto-nightlife-guide",
  },
  openGraph: {
    title: "Porto Nightlife Guide 2026 — Best Bars, Fado & Late-Night Spots",
    description:
      "Bar-hopping on Galerias, fado in the cellars, craft beer in Cedofeita. A local's guide to Porto after dark.",
    url: "https://portoitinerary.com/guides/porto-nightlife-guide",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Porto Nightlife Guide 2026 — Best Bars, Fado & Late-Night Spots",
  description:
    "The best bars, fado houses, and nightlife areas in Porto for 2026.",
  url: "https://portoitinerary.com/guides/porto-nightlife-guide",
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
    title: "Best Cafes in Porto",
    description: "Where to drink coffee — from historic to specialty.",
    href: "/guides/best-cafes-porto",
    category: "Lifestyle Guide",
  },
  {
    title: "Porto Neighborhoods Guide",
    description: "Every neighborhood explained — where to stay, eat, and explore.",
    href: "/guides/porto-neighborhoods",
    category: "Planning Guide",
  },
  {
    title: "Where to Eat in Porto",
    description: "Best restaurants by neighborhood, with what to order.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
];

const barTypeLabels: Record<string, string> = {
  fado: "Fado",
  cocktail: "Cocktail Bar",
  "craft-beer": "Craft Beer",
  wine: "Wine Bar",
  club: "Club / Live Music",
};

export default function PortoNightlifeGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Lifestyle Guide"
          title="Porto Nightlife Guide 2026"
          subtitle="Best bars, fado houses, and late-night spots — from sunset port on the Gaia waterfront to 3 AM on Galerias."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Nightlife Guide" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <GuideSection
              label="After Dark"
              title="Porto at Night"
              description="Lisbon gets more press, but Porto's nightlife is more intimate — and that's exactly what makes it better."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Porto&apos;s nightlife creeps up on you &mdash; one glass of
                    port at sunset and suddenly it&apos;s 2 AM on Galerias de
                    Paris, you&apos;re singing along to music you don&apos;t
                    recognize, and someone&apos;s handing you a ginjinha. That&apos;s
                    the thing about this city: the night doesn&apos;t start with a
                    plan, it starts with a drink that turns into three, then a walk
                    that leads somewhere unexpected.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    I&apos;ll be honest &mdash; Lisbon&apos;s nightlife scene is
                    bigger, louder, and more famous. But Porto&apos;s is more
                    personal. The bars are smaller, the crowds are friendlier, and
                    you can walk from a fado performance to a rooftop cocktail bar
                    to a packed dance floor in fifteen minutes. Everything is
                    close, everything is affordable, and nobody&apos;s checking a
                    guest list.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Porto nightlife starts late &mdash; really late. Bars don&apos;t
              fill up until 22:30 at the earliest, and most clubs peak between
              1:00-3:00 AM. If you arrive at Galerias at 21:00, you&apos;ll
              wonder where everyone is. Have dinner until 22:00, then wander
              over. The city will be waiting.
            </ProTip>

            {/* Nightlife by Area */}
            <GuideSection
              label="By Neighborhood"
              title="Porto Nightlife Areas"
              description="Five neighborhoods, five very different nights out."
            >
              <div className="space-y-6">
                {nightlifeAreas.map((area, i) => (
                  <ScrollReveal key={area.name} delay={i * 0.06}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-serif text-xl text-stone-800">
                          {area.name}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                          {area.vibe}
                        </span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {area.bestFor}
                        </span>
                      </div>

                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        {area.description}
                      </p>

                      <div className="bg-cream rounded px-3 py-2.5 border-l-2 border-ochre">
                        <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-500 mb-1.5">
                          Key Spots
                        </p>
                        <ul className="space-y-1">
                          {area.spots.map((spot) => (
                            <li
                              key={spot.name}
                              className="text-stone-600 text-xs leading-relaxed"
                            >
                              <span className="font-medium text-stone-700">
                                {spot.name}
                              </span>{" "}
                              &mdash; {spot.highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Best Bars & Clubs */}
            <GuideSection
              label="The Bars"
              title="8 Best Bars & Clubs in Porto"
              description="From port wine dives to rooftop cocktails — the spots that are actually worth your night."
            >
              <div className="space-y-6">
                {bestBars.map((bar, i) => (
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
                          {bar.priceRange}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {barTypeLabels[bar.type] || bar.type}
                        </span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          Best: {bar.bestTime}
                        </span>
                      </div>

                      <p className="text-stone-600 text-sm leading-relaxed">
                        {bar.highlight}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              Maus Habitos is the bar I tell every friend about. It&apos;s
              technically a &ldquo;cultural space&rdquo; &mdash; gallery, venue,
              restaurant &mdash; but the rooftop is the real draw. Open-air
              drinks, DJ sets on weekends, and a view of the city that makes every
              cocktail bar on Ribeira look overpriced. Find the unmarked entrance
              on Rua Passos Manuel, take the elevator to the fourth floor, and
              don&apos;t leave until they close.
            </ProTip>

            {/* Fado in Porto */}
            <GuideSection
              label="Fado"
              title="Fado in Porto"
              description="Porto's fado scene is smaller than Lisbon's — but what it lacks in scale, it makes up for in sincerity."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Fado in Porto is a different animal than in Lisbon. There are
                    fewer dedicated houses, which means the ones that exist tend
                    to be run by people who genuinely care about the music rather
                    than the tourist revenue. I&apos;ve sat in fado houses in both
                    cities, and the Porto performances felt less polished but more
                    honest &mdash; the kind where the singer closes her eyes and
                    you realize everyone in the room has stopped breathing.
                  </p>
                </ScrollReveal>

                <div className="space-y-5">
                  {fadoSpots.map((spot, i) => (
                    <ScrollReveal key={spot.name} delay={i * 0.06}>
                      <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-serif text-lg text-stone-800">
                            {spot.name}
                          </h3>
                          <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm flex-shrink-0">
                            {spot.price}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                            {spot.bookingNeeded
                              ? "Booking recommended"
                              : "Walk-in OK"}
                          </span>
                        </div>

                        <p className="text-stone-600 text-sm leading-relaxed">
                          {spot.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </GuideSection>

            {/* Practical Tips */}
            <GuideSection
              label="Know Before You Go"
              title="Practical Nightlife Tips"
              description="Timing, dress code, safety, and what nobody tells you."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <h3 className="font-serif text-lg text-stone-800 mb-3">
                      Timing
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Dinner runs until 22:00-22:30. Pre-drinks at a wine bar or
                      terrace from 22:30-midnight. Bars peak from midnight to
                      2:00 AM. Clubs go until 4:00 AM on weekends. Thursday is
                      the unofficial student night &mdash; Galerias is packed and
                      cheap. Friday and Saturday are the main nights. Sunday
                      through Wednesday, most bars are open but quiet.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.05}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <h3 className="font-serif text-lg text-stone-800 mb-3">
                      Dress Code
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Porto is gloriously relaxed about this. Sneakers, jeans,
                      and a decent top will get you into 99% of places. There are
                      no velvet ropes, no bouncers judging your shoes. Dress
                      comfortably &mdash; you&apos;ll be walking on cobblestones
                      between bars, often uphill. Save the heels for Lisbon.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <h3 className="font-serif text-lg text-stone-800 mb-3">
                      Safety
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Porto is one of the safest nightlife cities in Europe. The
                      main bar streets are well-lit and crowded. Bolt and Uber are
                      widely available and cheap (€4-7 to most neighborhoods).
                      Standard precautions: watch your phone in crowded bars,
                      don&apos;t leave drinks unattended, and walk in groups if
                      you&apos;re heading to quieter areas late at night. I&apos;ve
                      never felt unsafe here at any hour.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <h3 className="font-serif text-lg text-stone-800 mb-3">
                      Getting Home
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      The metro stops running around 1:00 AM (later on weekends
                      in summer). After that, Bolt and Uber are your best options
                      &mdash; surge pricing exists but rarely exceeds €8-10
                      anywhere in the city. Taxis are also reliable. If
                      you&apos;re staying in Baixa or Cedofeita, most bars on
                      Galerias are a 10-15 minute walk home.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </GuideSection>

            <ProTip variant="money-saver">
              Most Porto bars don&apos;t have cover charges. Clubs charge €5-10
              on weekends, usually with a drink included. Beer is €2-3 everywhere
              on Galerias. The cheapest night out in Porto is a bottle of vinho
              verde from a minimarket (€3) on the Dom Luis I Bridge at sunset
              &mdash; and honestly, it might also be the best.
            </ProTip>

            <GuideCTA
              title="Plan Your Porto Trip"
              description="Our 3-day itinerary includes evening recommendations for every night — from fado to bar-hopping."
              buttonText="See 3-Day Itinerary"
              href="/3-day-porto-itinerary"
            />

            <FAQSection faqs={nightlifeFaqs} />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
