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
import { transportOptions, faqs } from "@/data/guides/lisbon-to-porto";

export const metadata: Metadata = {
  title:
    "Lisbon to Porto 2026 — Train, Bus, Flight & Car Compared | Porto Itinerary",
  description:
    "How to get from Lisbon to Porto in 2026. Alfa Pendular train vs bus vs flight vs rental car — prices, times, stations, and which option is best for you.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/lisbon-to-porto",
  },
  openGraph: {
    title: "Lisbon to Porto 2026 — Train, Bus, Flight & Car Compared",
    description:
      "Four ways to travel from Lisbon to Porto. Real prices, honest comparisons, and practical tips for 2026.",
    url: "https://portoitinerary.com/guides/lisbon-to-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Lisbon to Porto 2026 — Train, Bus, Flight & Car Compared",
  description:
    "A complete guide to traveling from Lisbon to Porto, comparing the Alfa Pendular train, bus, flights, and rental car with real 2026 prices and practical tips.",
  url: "https://portoitinerary.com/guides/lisbon-to-porto",
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
      "Once you arrive in Porto, the Douro Valley is your best day trip — by train.",
    href: "/guides/douro-valley-day-trip",
    category: "Wine Guide",
  },
  {
    title: "Where to Stay in Porto",
    description:
      "Pick your neighborhood before you arrive. Ribeira, Baixa, and Cedofeita compared.",
    href: "/guides/where-to-stay-porto",
    category: "Practical Guide",
  },
  {
    title: "Getting Around Porto",
    description:
      "Metro, trams, buses, and walking — how to navigate Porto once you are here.",
    href: "/guides/getting-around-porto",
    category: "Practical Guide",
  },
];

export default function LisbonToPortoPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Lisbon to Porto"
          subtitle="310 km, four ways to do it. The Alfa Pendular train wins for most people — here's the full breakdown."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Lisbon to Porto" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <GuideSection
              label="Overview"
              title="The Quick Version"
              description="Lisbon to Porto is one of Portugal's most-traveled routes. Here's what you need to know."
            >
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">
                      Take the Alfa Pendular train.
                    </strong>{" "}
                    It costs &euro;25-35, takes 2 hours 45 minutes, and drops you
                    at Porto Campanha with a direct metro connection to the city
                    center. I&apos;ve done this journey half a dozen times and the
                    train has never let me down.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">On a budget?</strong>{" "}
                    The bus costs &euro;15-22 and takes 3.5-4 hours. FlixBus
                    regularly runs flash sales at &euro;9.99. Not as comfortable
                    as the train, but your wallet won&apos;t complain.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    <strong className="text-stone-800">Skip the flight.</strong>{" "}
                    By the time you factor in airport transfers, check-in, and
                    security, flying takes longer than the train. The only reason
                    to fly is if you&apos;re connecting through Lisbon airport.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Transport options */}
            <GuideSection
              label="Transport Comparison"
              title="Four Ways to Get from Lisbon to Porto"
              description="Real prices and honest opinions for each option."
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        <div>
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                            Pros
                          </p>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {option.pros}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                            Cons
                          </p>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {option.cons}
                          </p>
                        </div>
                      </div>
                      <p className="text-stone-700 text-sm leading-relaxed mb-2">
                        <span className="font-medium">Verdict:</span>{" "}
                        {option.verdict}
                      </p>
                      <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                        Best for: {option.bestFor}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Book Alfa Pendular tickets at{" "}
              <strong>cp.pt</strong> (Comboios de Portugal) 3-5 days ahead for
              the best prices. Trains depart from Lisboa Santa Apol&oacute;nia
              or Lisboa Oriente &mdash; Oriente is easier to reach by metro.
              You&apos;ll arrive at Porto Campanha, where a free connecting
              train takes you to S&atilde;o Bento station in the city center in
              5 minutes.
            </ProTip>

            {/* Stations guide */}
            <GuideSection
              label="Stations"
              title="Know Your Stations"
              description="The station names trip people up. Here's the map."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Lisbon Departure Stations
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Where you board
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-2">
                      <strong className="text-stone-800">
                        Santa Apol&oacute;nia
                      </strong>{" "}
                      &mdash; Lisbon&apos;s main long-distance station, right in
                      Alfama. Atmospheric tile work, but can feel dated. Metro:
                      blue line, Santa Apol&oacute;nia stop.
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      <strong className="text-stone-800">Oriente</strong>{" "}
                      &mdash; The modern station near Parque das Na&ccedil;&otilde;es,
                      designed by Calatrava. Better facilities, more food options,
                      easier metro access (red line). Most Alfa Pendular trains
                      stop at both &mdash; Oriente is the next stop after Santa
                      Apol&oacute;nia.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Porto Arrival Stations
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Where you arrive
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-2">
                      <strong className="text-stone-800">
                        Porto Campanha
                      </strong>{" "}
                      &mdash; All Alfa Pendular trains terminate here. It&apos;s
                      about 2 km east of the city center. Take the metro (yellow
                      Line D to Aliados, 10 min) or the free connecting urban
                      train to S&atilde;o Bento (5 min, included in your ticket).
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      <strong className="text-stone-800">
                        Porto S&atilde;o Bento
                      </strong>{" "}
                      &mdash; The famous azulejo-covered station in the heart of
                      Porto. Regional trains only &mdash; you can&apos;t arrive
                      here directly from Lisbon, but the Campanha connection takes
                      5 minutes. Walk out the doors and you&apos;re on Avenida dos
                      Aliados.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </GuideSection>

            <ProTip variant="money-saver">
              FlixBus runs flash sales on the Lisbon-Porto route &mdash;
              I&apos;ve seen tickets as low as &euro;9.99. Download the FlixBus
              app and turn on notifications. Rede Expressos is slightly more
              reliable and departs every 30-60 minutes from Sete Rios terminal
              (metro: Jardim Zool&oacute;gico). Either way, the bus saves you
              &euro;10-15 over the train each way.
            </ProTip>

            {/* Comparison summary */}
            <GuideSection
              label="Summary"
              title="Side-by-Side Comparison"
              description="The numbers at a glance."
            >
              <ScrollReveal>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs font-sans border-collapse min-w-[480px]">
                    <thead>
                      <tr className="border-b border-stone-200">
                        <th className="text-left py-3 pr-3 text-stone-500 font-medium tracking-wider uppercase">
                          Method
                        </th>
                        <th className="text-center py-3 px-2 text-stone-500 font-medium tracking-wider uppercase">
                          Price
                        </th>
                        <th className="text-center py-3 px-2 text-stone-500 font-medium tracking-wider uppercase">
                          Time
                        </th>
                        <th className="text-center py-3 px-2 text-stone-500 font-medium tracking-wider uppercase">
                          Comfort
                        </th>
                        <th className="text-center py-3 px-2 text-stone-500 font-medium tracking-wider uppercase">
                          Our Pick
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-600">
                      <tr className="border-b border-stone-100">
                        <td className="py-2 pr-3 font-medium text-stone-700">
                          Train
                        </td>
                        <td className="py-2 px-2 text-center">
                          &euro;25-35
                        </td>
                        <td className="py-2 px-2 text-center">2h 45m</td>
                        <td className="py-2 px-2 text-center">High</td>
                        <td className="py-2 px-2 text-center text-terracotta font-medium">
                          Best overall
                        </td>
                      </tr>
                      <tr className="border-b border-stone-100">
                        <td className="py-2 pr-3 font-medium text-stone-700">
                          Bus
                        </td>
                        <td className="py-2 px-2 text-center">
                          &euro;15-22
                        </td>
                        <td className="py-2 px-2 text-center">3.5-4h</td>
                        <td className="py-2 px-2 text-center">Medium</td>
                        <td className="py-2 px-2 text-center text-terracotta font-medium">
                          Best budget
                        </td>
                      </tr>
                      <tr className="border-b border-stone-100">
                        <td className="py-2 pr-3 font-medium text-stone-700">
                          Flight
                        </td>
                        <td className="py-2 px-2 text-center">
                          &euro;30-80
                        </td>
                        <td className="py-2 px-2 text-center">4-5h*</td>
                        <td className="py-2 px-2 text-center">Low</td>
                        <td className="py-2 px-2 text-center text-stone-400">
                          Skip it
                        </td>
                      </tr>
                      <tr className="border-b border-stone-100">
                        <td className="py-2 pr-3 font-medium text-stone-700">
                          Car
                        </td>
                        <td className="py-2 px-2 text-center">
                          &euro;35-45
                        </td>
                        <td className="py-2 px-2 text-center">3h</td>
                        <td className="py-2 px-2 text-center">High</td>
                        <td className="py-2 px-2 text-center text-terracotta font-medium">
                          Best for groups
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-stone-400 text-[10px] mt-2">
                    *Door-to-door including airport transfers and check-in
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Road trip stops */}
            <GuideSection
              label="Road Trip"
              title="If You Drive: Three Stops Worth Making"
              description="The A1 motorway passes near these places. Budget an extra 2-4 hours."
            >
              <div className="space-y-3">
                {[
                  {
                    name: "\u00D3bidos",
                    time: "1 hr from Lisbon",
                    detail:
                      "A tiny medieval walled town where you drink ginjinha (sour cherry liqueur) from chocolate cups on the ramparts. Twenty minutes is enough to walk the walls and grab a drink. Skip the tourist restaurants inside the walls.",
                  },
                  {
                    name: "Coimbra",
                    time: "Halfway (2 hrs from Lisbon)",
                    detail:
                      "Portugal's oldest university city, with a baroque library (Biblioteca Joanina) that rivals anything in Porto. We stopped for lunch at Ze Manuel dos Ossos in the old town \u2014 tiny, chaotic, and one of the best meals of the trip. Book or arrive early.",
                  },
                  {
                    name: "Aveiro",
                    time: "1 hr from Porto",
                    detail:
                      "Called the Venice of Portugal (a stretch, but the painted moliceiro boats on the canals are genuinely charming). The ovos moles \u2014 egg yolk and sugar pastries shaped like shells \u2014 are Aveiro's thing. Worth 30-45 minutes.",
                  },
                ].map((stop, i) => (
                  <ScrollReveal key={stop.name} delay={i * 0.05}>
                    <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                      <div className="flex-shrink-0 w-24">
                        <p className="font-serif text-terracotta text-sm font-medium">
                          {stop.name}
                        </p>
                        <p className="text-stone-400 text-[10px] tracking-wide uppercase">
                          {stop.time}
                        </p>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {stop.detail}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <GuideCTA
              title="Just Arrived in Porto?"
              description="Start with our 3-day itinerary — it covers Ribeira, Gaia's wine cellars, and the best viewpoints without rushing."
              buttonText="See 3-Day Itinerary"
              href="/3-day-porto-itinerary"
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
