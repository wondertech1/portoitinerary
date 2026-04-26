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
} from "@/data/guides/braga-day-trip";

export const metadata: Metadata = {
  title:
    "Porto to Braga Day Trip 2026 \u2014 Bom Jesus & Historic Center | Porto Itinerary",
  description:
    "How to visit Braga from Porto in one day. Train times, Bom Jesus do Monte stairway, the oldest cathedral in Portugal, and a complete hour-by-hour itinerary for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/porto-to-braga-day-trip",
  },
  openGraph: {
    title: "Porto to Braga Day Trip 2026 \u2014 Bom Jesus & Historic Center",
    description:
      "Baroque stairways, Portugal\u2019s oldest cathedral, and a university city with soul. Train from Porto, walking route, and where to eat Braga\u2019s famous chicken.",
    url: "https://portoitinerary.com/guides/porto-to-braga-day-trip",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Porto to Braga Day Trip 2026 \u2014 Bom Jesus & Historic Center",
  description:
    "A complete guide to visiting Braga from Porto in one day, covering transport, Bom Jesus do Monte, the cathedral, and an hour-by-hour suggested itinerary.",
  url: "https://portoitinerary.com/guides/porto-to-braga-day-trip",
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
    title: "Porto to Aveiro Day Trip",
    description:
      "Canals, candy-striped houses, and egg-yolk sweets \u2014 Porto\u2019s other essential day trip south.",
    href: "/guides/porto-to-aveiro-day-trip",
    category: "Day Trip",
  },
  {
    title: "Douro Valley Day Trip",
    description:
      "Terraced vineyards and port wine quintas \u2014 the most scenic day trip from Porto.",
    href: "/guides/douro-valley-day-trip",
    category: "Day Trip",
  },
  {
    title: "Porto to Guimar\u00E3es Day Trip",
    description:
      "The birthplace of Portugal \u2014 medieval castle, palace, and a UNESCO historic center.",
    href: "/guides/porto-to-guimaraes-day-trip",
    category: "Day Trip",
  },
];

export default function BragaDayTripPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Day Trip"
          title="Porto to Braga Day Trip"
          subtitle="Baroque stairways, Portugal&apos;s oldest cathedral, and a university city that balances devotion with a damn good caf&eacute; scene &mdash; all under an hour north by train."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Braga Day Trip" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <GuideSection
              label="Overview"
              title="Why Visit Braga?"
              description="Portugal&apos;s religious capital is also one of its youngest, liveliest cities. The tension between the two is what makes it interesting."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Braga sits about 55 km northeast of Porto in the Minho
                    region &mdash; a city of baroque churches, granite
                    streetscapes, and a religious heritage that stretches back to
                    Roman Bracara Augusta. It&apos;s been the seat of
                    Portugal&apos;s oldest archdiocese since the 11th century,
                    and the locals will tell you it was a city of faith before
                    Lisbon was a city at all. That pride runs deep.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    But here&apos;s what caught me off guard: Braga doesn&apos;t
                    feel pious. The University of Minho has filled the old town
                    with students, and the caf&eacute; terraces on Pra&ccedil;a
                    da Rep&uacute;blica hum with a youthful energy that sits
                    comfortably next to 1,000-year-old cathedral walls. I
                    watched a group of students drinking Imperial beers ten
                    meters from a chapel where someone was lighting candles. Both
                    scenes felt completely natural.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The headline attraction is Bom Jesus do Monte &mdash; a
                    UNESCO-listed baroque stairway that climbs a forested
                    hillside in dramatic zigzags. The 686 steps are worth every
                    gasp. But Braga rewards you beyond the stairway: the
                    cathedral is Portugal&apos;s oldest, the garden of Santa
                    B&aacute;rbara is quietly perfect, and the food is Minhoto
                    through and through &mdash; vinho verde, bacalhau, and a
                    pudding made with port wine and bacon fat that sounds insane
                    and tastes transcendent.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            {/* Transport comparison */}
            <GuideSection
              label="Getting There"
              title="Train, Bus, or Car"
              description="Three ways to reach Braga from Porto. The train wins for most people."
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
              Take the funicular at Bom Jesus do Monte instead of climbing all
              686 steps. Built in 1882, it&apos;s the oldest water-powered
              funicular in the world still running on its original system. Ride
              up for &euro;2, then walk the stairway down at your own pace
              &mdash; you get the views, the baroque details, and your knees
              intact. The descent takes about 20 minutes and is genuinely one
              of the most atmospheric walks in northern Portugal.
            </ProTip>

            {/* Highlights */}
            <GuideSection
              label="What to See"
              title="8 Things to See in Braga"
              description="From baroque stairways to conventual sweets &mdash; what&apos;s worth your time in a city that&apos;s been accumulating treasures for a millennium."
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
              description="A realistic schedule by train &mdash; adjust if you&apos;re driving or want to add Sameiro."
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
              Braga&apos;s caf&eacute; culture is seriously underrated. The
              university students have turned Pra&ccedil;a da Rep&uacute;blica
              and the streets around it into one of the best caf&eacute; scenes
              in northern Portugal. Skip the tourist spots near the cathedral
              and head to <strong>Spirito Cupcakes &amp; Coffee</strong> or{" "}
              <strong>Caf&eacute; A Brasileira</strong> on Largo do
              Bar&atilde;o de S&atilde;o Martinho. Order a galao, sit on a
              terrace, and watch the city move at its own pace. This is where
              you feel the real Braga &mdash; young, unhurried, and completely
              unconcerned with impressing tourists.
            </ProTip>

            {/* Where to Eat */}
            <GuideSection
              label="Food"
              title="Where to Eat in Braga"
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Cozinha da S&eacute;
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Near the cathedral &middot; &euro;&euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Traditional Minhoto cooking in a stone-walled dining room
                      steps from the S&eacute;. The bacalhau &agrave; Braga
                      (salt cod with onions and potatoes baked in olive oil)
                      is textbook, and the vinho verde comes from a local
                      producer whose name I couldn&apos;t pronounce but whose
                      wine I ordered twice. Lunch menu under &euro;12.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Dona Petisca
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Rua Dom Frei Caetano Brand&atilde;o &middot; &euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Petiscos (Portuguese small plates) done right. Croquettes,
                      prego sandwiches, moelas (gizzards in tomato sauce), and
                      cold Super Bock on a tiny terrace. The kind of place
                      where you order three things, then three more, and the
                      bill still comes to under &euro;15. Packed with locals
                      at lunch &mdash; a good sign.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Brac Restaurant
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Campo das Hortas &middot; &euro;&euro;&euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      If you want a nicer meal, Brac serves contemporary
                      Portuguese food with Minhoto ingredients and genuine
                      ambition. The tasting menu changes seasonally, and
                      the wine pairing leans heavily on vinho verde and
                      Douro reds. Book ahead for weekend lunch. Worth it
                      for a slower, more deliberate meal.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.18}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Any Pastelaria on Rua do Souto
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Rua do Souto &middot; &euro;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Braga&apos;s conventual sweet tradition is serious. Walk
                      into any pastelaria on the main pedestrian street and
                      order pudim Ab&aacute;de de Priscos &mdash; a dense,
                      caramel-colored pudding made with egg yolks, port wine,
                      and bacon fat. It sounds like a dare and tastes like
                      the best decision of your afternoon. Pair it with a
                      strong bica (espresso).
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
                        <strong>Budget:</strong> Braga is cheap. Train
                        (&euro;7 round trip), Bom Jesus funicular (&euro;2),
                        cathedral (&euro;5), lunch (&euro;10-15), coffee and
                        pudim (&euro;4). A full day costs under &euro;35
                        &mdash; less if you skip the cathedral treasury.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-1 flex-shrink-0">&bull;</span>
                      <span>
                        <strong>Footwear:</strong> The Bom Jesus stairway
                        demands proper shoes &mdash; granite steps, uneven
                        in places, and potentially slippery after rain. The
                        old town is flat and walkable once you&apos;re down.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-1 flex-shrink-0">&bull;</span>
                      <span>
                        <strong>Weather:</strong> Minho is the greenest
                        (read: wettest) region in Portugal. Bring a light
                        rain jacket even in summer. Mornings can be misty,
                        but that only adds to Bom Jesus&apos;s atmosphere.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-1 flex-shrink-0">&bull;</span>
                      <span>
                        <strong>Dress code:</strong> The cathedral and Bom
                        Jesus are active places of worship. Shoulders and
                        knees covered is respectful and sometimes required.
                        You won&apos;t be turned away in shorts, but you
                        might feel out of place.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-1 flex-shrink-0">&bull;</span>
                      <span>
                        <strong>Combine with Guimar&atilde;es?</strong> Only
                        if you&apos;re driving. By train, it&apos;s doable
                        but rushed. Both cities deserve a full day. If you
                        must choose one, Braga has more variety; Guimar&atilde;es
                        has the castle and the birthplace-of-Portugal
                        narrative.
                      </span>
                    </li>
                  </ul>
                </ScrollReveal>
              </div>
            </GuideSection>

            <GuideCTA
              title="Add Braga to Your Porto Trip"
              description="Our 5-day itinerary includes a day trip slot perfect for Braga or the Douro Valley. See how it fits into your schedule."
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
