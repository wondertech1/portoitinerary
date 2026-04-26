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
  transportOptions,
  highlights,
  suggestedItinerary,
  faqs,
} from "@/data/guides/aveiro-day-trip";

export const metadata: Metadata = {
  title:
    "Porto to Aveiro Day Trip 2026 \u2014 Portugal\u2019s Venice | Porto Itinerary",
  description:
    "How to visit Aveiro from Porto in one day. Train times, moliceiro boats, ovos moles, Costa Nova striped houses, and a complete hour-by-hour itinerary for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/porto-to-aveiro-day-trip",
  },
  openGraph: {
    title: "Porto to Aveiro Day Trip 2026 \u2014 Portugal\u2019s Venice",
    description:
      "Canals, colorful boats, egg-yolk sweets, and candy-striped beach houses. Train times, costs, and a walking route through Aveiro and Costa Nova.",
    url: "https://portoitinerary.com/guides/porto-to-aveiro-day-trip",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Porto to Aveiro Day Trip 2026 \u2014 Portugal\u2019s Venice",
  description:
    "A complete guide to visiting Aveiro from Porto in one day, covering transport, moliceiro boats, ovos moles, Costa Nova, and an hour-by-hour suggested itinerary.",
  url: "https://portoitinerary.com/guides/porto-to-aveiro-day-trip",
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
    title: "Douro Valley Day Trip",
    description:
      "Terraced vineyards and port wine quintas \u2014 Porto\u2019s other essential day trip.",
    href: "/guides/douro-valley-day-trip",
    category: "Day Trip",
  },
  {
    title: "Lisbon to Porto",
    description:
      "Train, bus, or car \u2014 how to travel between Portugal\u2019s two biggest cities.",
    href: "/guides/lisbon-to-porto",
    category: "Transport",
  },
  {
    title: "Best Time to Visit Porto",
    description:
      "Month-by-month breakdown of weather, crowds, and events for planning your trip.",
    href: "/guides/best-time-to-visit-porto",
    category: "Planning",
  },
];

export default function AveiroPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Day Trip"
          title="Porto to Aveiro Day Trip"
          subtitle="Canals, candy-striped houses, and Portugal&apos;s best egg-yolk sweets &mdash; all under an hour from Porto by train."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Aveiro Day Trip" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <GuideSection
              label="Overview"
              title="Why Visit Aveiro?"
              description="A lagoon city with its own personality &mdash; often called Portugal&apos;s Venice, though it deserves better than the comparison."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Aveiro sits on a coastal lagoon about 75 km south of Porto &mdash; a
                    small city built around canals, salt pans, and a fishing tradition that
                    dates back centuries. The colorful moliceiro boats that glide through the
                    canals have earned it the &ldquo;Venice of Portugal&rdquo; label, which
                    gets used in every brochure. The comparison is lazy but I get why it
                    sticks &mdash; the canals really are charming, especially in morning light.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    But Aveiro is its own thing. The Art Nouveau architecture is some of the
                    best-preserved in Portugal. The ovos moles &mdash; intensely sweet
                    egg-yolk confections wrapped in rice paper &mdash; exist nowhere else.
                    And Costa Nova, a beach village 10 km away with its row of candy-striped
                    houses, is one of those places that looks too photogenic to be real but
                    somehow is.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The best part: it&apos;s a cheap, easy day trip. The train from Porto
                    costs &euro;3.55, runs frequently, and takes just over an hour. You
                    don&apos;t need to plan much. Just show up, walk the canals, eat sweets,
                    and catch a bus to Costa Nova if the weather cooperates.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            {/* Transport comparison */}
            <GuideSection
              label="Getting There"
              title="Train vs Car"
              description="Two ways to get from Porto to Aveiro. Both work well."
            >
              <div className="space-y-6">
                {transportOptions.map((option, i) => (
                  <ScrollReveal key={option.method} delay={i * 0.06}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <h3 className="font-serif text-xl text-stone-800 mb-1">
                        {option.method}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                          {option.price}
                        </span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {option.duration}
                        </span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {option.frequency}
                        </span>
                      </div>
                      <p className="text-stone-700 text-sm leading-relaxed">
                        <span className="font-medium">Verdict:</span>{" "}
                        {option.verdict}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              You don&apos;t need to book train tickets in advance for Aveiro &mdash;
              it&apos;s an urban/regional route, not long-distance. Just buy at the
              station counter or ticket machine. If you have an{" "}
              <strong>Andante card</strong> (Porto&apos;s transit card), you can load
              the Aveiro trip directly onto it at Campanha station.
            </ProTip>

            {/* Highlights */}
            <GuideSection
              label="What to Do"
              title="8 Things to See in Aveiro"
              description="What&apos;s actually worth your time &mdash; and what you can skip if the day gets short."
            >
              <div className="space-y-6">
                {highlights.map((item, i) => (
                  <ScrollReveal key={item.name} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <h3 className="font-serif text-xl text-stone-800 mb-1">
                        {item.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                          {item.cost}
                        </span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <p className="text-stone-500 text-xs leading-relaxed italic">
                        <span className="font-medium not-italic text-postmark">Tip:</span>{" "}
                        {item.tip}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Timeline */}
            <GuideSection
              label="Timeline"
              title="Suggested Day Itinerary"
              description="A realistic schedule by train &mdash; adjust the afternoon if you&apos;re driving."
            >
              <div className="space-y-3">
                {suggestedItinerary.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.04}>
                    <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif text-terracotta text-sm flex-shrink-0 w-20 mt-0.5">
                        {item.time}
                      </span>
                      <div>
                        <p className="font-serif text-base text-stone-800 mb-0.5">
                          {item.activity}
                        </p>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              Costa Nova&apos;s famous striped houses face the lagoon, but walk
              through to the ocean side and you&apos;ll find a wild, windswept
              Atlantic beach that most day-trippers never see. In the off-season,
              you might have it entirely to yourself. The contrast between the
              postcard-perfect palheiros and the raw coastline is one of my favorite
              things about this trip.
            </ProTip>

            {/* Where to Eat */}
            <GuideSection
              label="Food"
              title="Where to Eat in Aveiro"
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Mercado do Peixe Restaurants
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Central canal area &middot; &euro;&euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      The small restaurants beside the fish market cook what was
                      caught that morning. Grilled sea bass, caldeirada (fish stew),
                      and fried eels from the Ria &mdash; nothing fancy, just honest
                      lagoon food at local prices. I had the best grilled sardines of
                      my trip here, and the bill was under &euro;12.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Salpoente
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Near the salt pans &middot; &euro;&euro;&euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      A converted salt warehouse with exposed stone walls and a
                      modern Portuguese menu. The tasting menu uses local ingredients
                      &mdash; eel, salt-marsh herbs, lagoon shellfish &mdash; with
                      real creativity. Book ahead for weekend lunch. The kind of place
                      that justifies building a meal into your itinerary.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      O Bairro
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Rua do Gravito &middot; &euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      A tiny spot popular with locals for petiscos (Portuguese tapas).
                      Good for a quick, cheap lunch &mdash; croquettes, prego
                      sandwiches, and cold Super Bock on the terrace. No frills, no
                      pretension, just good casual food.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </GuideSection>

            {/* Practical Tips */}
            <GuideSection
              label="Practical"
              title="Tips Before You Go"
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <ul className="space-y-3 text-stone-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-1 flex-shrink-0">&bull;</span>
                      <span>
                        <strong>Budget:</strong> A day in Aveiro costs remarkably
                        little. Train (&euro;7 round trip), moliceiro ride (&euro;15),
                        lunch (&euro;10-15), ovos moles (&euro;3), bus to Costa Nova
                        (&euro;3). You can do the full day for under &euro;40.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-1 flex-shrink-0">&bull;</span>
                      <span>
                        <strong>Footwear:</strong> Aveiro is flat &mdash; a welcome
                        change from Porto&apos;s hills. Any comfortable shoes work.
                        Bring sandals if you plan to walk Costa Nova&apos;s beach.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-1 flex-shrink-0">&bull;</span>
                      <span>
                        <strong>Weather:</strong> Aveiro is coastal and can be windy.
                        Bring a light jacket even in summer. Fog rolls in some
                        mornings but usually burns off by 10 AM.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-1 flex-shrink-0">&bull;</span>
                      <span>
                        <strong>Language:</strong> Aveiro sees fewer international
                        tourists than Porto. A few words of Portuguese go further
                        here &mdash; obrigado/a and bom dia will get you smiles.
                      </span>
                    </li>
                  </ul>
                </ScrollReveal>
              </div>
            </GuideSection>

            <GuideCTA
              title="Add Aveiro to Your Porto Trip"
              description="Our 5-day itinerary includes a full day trip slot perfect for Aveiro or the Douro Valley. See how it fits."
              buttonText="See 5-Day Itinerary"
              href="/5-day-porto-itinerary"
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
