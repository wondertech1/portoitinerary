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
} from "@/data/guides/guimaraes-day-trip";

export const metadata: Metadata = {
  title:
    "Porto to Guimar\u00E3es Day Trip 2026 \u2014 Birthplace of Portugal | Porto Itinerary",
  description:
    "How to visit Guimar\u00E3es from Porto in one day. Train times, the castle where Portugal was born, Penha cable car, medieval streets, and a complete hour-by-hour itinerary for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/porto-to-guimaraes-day-trip",
  },
  openGraph: {
    title:
      "Porto to Guimar\u00E3es Day Trip 2026 \u2014 Birthplace of Portugal",
    description:
      "A UNESCO World Heritage town, a 10th-century castle, and the place where Portugal began. Train schedule, walking route, and what to eat when you arrive.",
    url: "https://portoitinerary.com/guides/porto-to-guimaraes-day-trip",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Porto to Guimar\u00E3es Day Trip 2026 \u2014 Birthplace of Portugal",
  description:
    "A complete guide to visiting Guimar\u00E3es from Porto in one day, covering transport options, the castle and palace, Penha Hill, medieval streets, and a suggested itinerary.",
  url: "https://portoitinerary.com/guides/porto-to-guimaraes-day-trip",
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
    title: "Porto to Braga Day Trip",
    description:
      "Bom Jesus, baroque churches, and the religious capital of Portugal \u2014 just 25 km from Guimar\u00E3es.",
    href: "/guides/porto-to-braga-day-trip",
    category: "Day Trip",
  },
  {
    title: "Porto to Aveiro Day Trip",
    description:
      "Canals, candy-striped houses, and egg-yolk sweets \u2014 a completely different vibe from Guimar\u00E3es.",
    href: "/guides/porto-to-aveiro-day-trip",
    category: "Day Trip",
  },
  {
    title: "Douro Valley Day Trip",
    description:
      "Terraced vineyards and port wine quintas \u2014 Porto\u2019s other essential day trip.",
    href: "/guides/douro-valley-day-trip",
    category: "Day Trip",
  },
];

export default function GuimaraesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Day Trip"
          title="Porto to Guimar&atilde;es Day Trip"
          subtitle="The birthplace of Portugal &mdash; a UNESCO World Heritage town with a 10th-century castle, medieval streets, and a cable car to the clouds."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Guimar\u00E3es Day Trip" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <GuideSection
              label="Overview"
              title="Why Visit Guimar&atilde;es?"
              description="Where Portugal was born &mdash; literally. This is the most historically significant day trip from Porto."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Guimar&atilde;es is where Portugal begins. The inscription
                    &ldquo;Aqui nasceu Portugal&rdquo; on the castle wall gives
                    you chills &mdash; because it&apos;s not marketing, it&apos;s
                    history. This is where Afonso Henriques, the first King of
                    Portugal, was born in the early 12th century. The castle where
                    he grew up still stands on the hill above town, and the
                    medieval streets below it have barely changed since.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The UNESCO-listed historic center is one of the
                    best-preserved medieval townscapes in Europe &mdash; granite
                    houses with iron balconies, Romanesque churches, and squares
                    that feel like they&apos;ve been holding markets for 800 years
                    (because they have). It&apos;s compact enough to walk in a day
                    but rich enough that you&apos;ll want to linger.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Beyond the medieval center, the Penha cable car lifts you to a
                    forested hilltop scattered with enormous granite boulders and
                    panoramic views of the Minho valley. It&apos;s the kind of day
                    trip where you start with a castle and end above the clouds. The
                    train from Porto costs &euro;3.55, runs hourly, and takes just
                    over an hour. No excuses.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            {/* Transport comparison */}
            <GuideSection
              label="Getting There"
              title="Train vs Bus vs Car"
              description="Three ways to reach Guimar&atilde;es. The train wins for most visitors."
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
              The Penha cable car doesn&apos;t run on Mondays or in bad weather.
              If the telef&eacute;rico is a priority, check hours at{" "}
              <strong>turipenha.pt</strong> before you go. The ride is 1,700
              meters long and genuinely scenic &mdash; not just a way to avoid
              walking uphill. From the top on a clear day, you can see all the
              way to Porto&apos;s skyline on the Atlantic horizon.
            </ProTip>

            {/* Highlights */}
            <GuideSection
              label="What to See"
              title="8 Highlights in Guimar&atilde;es"
              description="What&apos;s worth your time in the birthplace of Portugal &mdash; from the castle to Celtic ruins."
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
                        <span className="font-medium not-italic text-postmark">
                          Tip:
                        </span>{" "}
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
              description="A realistic schedule by train &mdash; adjust if you&apos;re driving or adding Braga."
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
              Rua de Santa Maria is one of the oldest streets in Guimar&atilde;es,
              connecting the castle hill to the town center. Most visitors walk
              it quickly on their way down, but slow down and look up &mdash; the
              carved stone details above the doorways include medieval coats of
              arms, religious symbols, and guild marks from trades that vanished
              centuries ago. Each carved lintel is a tiny biography of someone
              who lived there. It&apos;s the kind of street that rewards
              attention.
            </ProTip>

            {/* Where to Eat */}
            <GuideSection
              label="Food"
              title="Where to Eat in Guimar&atilde;es"
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Histórico by Papaboa
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Rua de Val de Donas &middot; &euro;&euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      A modern take on Minho classics in a beautifully restored
                      stone building near the old town. The roj&otilde;es
                      (fried pork with cumin) are textbook, and the bacalhau
                      &agrave; minhota comes with a crunchy batter that
                      Porto restaurants can&apos;t match. Pair everything with
                      the house vinho verde.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Buxa
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Largo da Oliveira &middot; &euro;&euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Right on the main square, which normally means overpriced
                      and mediocre. Not here. Buxa serves honest regional food at
                      fair prices &mdash; papas de sarrabulho, grilled meats, and
                      a solid wine list. The terrace on Largo da Oliveira is one
                      of the best lunch spots in town.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Cor de Tangerina
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Largo do Serralho &middot; &euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      A vegetarian-friendly cafe in a converted old-town house.
                      Good for a lighter lunch if the Minho pork-and-bread
                      tradition feels heavy. The soups are homemade, the
                      sandwiches are generous, and the courtyard garden is a
                      quiet escape from the cobblestones.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.18}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Pastelaria Clarinha
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Largo do Toural &middot; &euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      The place for toucinho do c&eacute;u, the Minho almond-and-egg
                      cake that&apos;s denser and richer than the Lisbon version.
                      Pair it with a bica (espresso) and sit by the window
                      watching the Toural square. A proper Portuguese afternoon
                      moment.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </GuideSection>

            {/* Combining with Braga */}
            <GuideSection
              label="Combining"
              title="Guimar&atilde;es + Braga in One Day"
              description="It&apos;s possible &mdash; but only if you&apos;re strategic about it."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Guimar&atilde;es and Braga are only 25 km apart (30 minutes
                    by car or direct bus). Combining them in a single day trip
                    from Porto is tempting &mdash; and doable, if you accept
                    you&apos;ll be skimming rather than savoring. The realistic
                    approach: morning in Guimar&atilde;es (castle, palace, Largo
                    da Oliveira), bus or drive to Braga after lunch, then Bom
                    Jesus do Monte and a quick walk through Braga&apos;s
                    historic center before the train back to Porto.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Skip the Penha cable car if combining &mdash; there isn&apos;t
                    time. A car makes the logistics much easier than relying on
                    the inter-city bus schedule. If you only have one day for
                    the Minho region, this double-header gives you Portugal&apos;s
                    birthplace and its religious capital in a single trip.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    My honest recommendation: give each town its own day if you
                    can. Both deserve the slow treatment &mdash; a long lunch, an
                    unplanned wander, a second coffee in a square. But if one day
                    is all you have, the Guimar&atilde;es morning + Braga
                    afternoon combination works well enough.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            <GuideCTA
              title="Add Guimar&atilde;es to Your Porto Trip"
              description="Our 5-day itinerary includes a day trip slot perfect for Guimar&atilde;es, Braga, or the Douro Valley. See how it all fits together."
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
