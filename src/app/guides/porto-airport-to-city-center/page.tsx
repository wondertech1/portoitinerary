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
  transferOptions,
  metroStepByStep,
  airportTransferFaqs,
} from "@/data/guides/airport-transfer";

export const metadata: Metadata = {
  title:
    "Porto Airport to City Center 2026 — Metro, Taxi & Transfer Guide | Porto Itinerary",
  description:
    "How to get from Porto airport (Francisco Sá Carneiro) to the city center in 2026. Metro, Uber, taxi, bus, and private transfer compared — with prices, times, and step-by-step instructions.",
  alternates: {
    canonical:
      "https://portoitinerary.com/guides/porto-airport-to-city-center",
  },
  openGraph: {
    title: "Porto Airport to City Center 2026 — Metro, Taxi & Transfer Guide",
    description:
      "5 transfer options compared. Metro from €3.10, Uber from €10, taxi €20-25. Step-by-step metro guide included.",
    url: "https://portoitinerary.com/guides/porto-airport-to-city-center",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Porto Airport to City Center 2026 — Metro, Taxi & Transfer Guide",
  description:
    "How to get from Porto airport to the city center by metro, Uber, taxi, bus, and private transfer.",
  url: "https://portoitinerary.com/guides/porto-airport-to-city-center",
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
      "Metro, trams, buses, and walking — how to navigate the city once you arrive.",
    href: "/guides/getting-around-porto",
    category: "Practical Guide",
  },
  {
    title: "Where to Stay in Porto",
    description:
      "Pick the right neighborhood before you book your transfer.",
    href: "/guides/where-to-stay-porto",
    category: "Practical Guide",
  },
  {
    title: "Lisbon to Porto",
    description:
      "Coming from Lisbon? Train, bus, and driving options compared.",
    href: "/guides/lisbon-to-porto",
    category: "Practical Guide",
  },
];

export default function AirportTransferPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Practical Guide"
          title="Porto Airport to City Center"
          subtitle="5 ways to get into town — with honest prices, real times, and the option we actually use."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Airport to City Center" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Quick Answer */}
            <GuideSection label="Quick Answer" title="The Short Version">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">For most travelers:</strong>{" "}
                    Take the <strong className="text-stone-800">metro (Line E, Violet)</strong>.
                    It costs €3.10 total, takes 30 minutes to Trindade, and drops you right
                    in the center. The station is inside the airport terminal. We&apos;ve used
                    it every trip to Porto and never bothered with anything else during
                    daytime arrivals.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <strong className="text-stone-800">For convenience or late arrivals:</strong>{" "}
                    <strong className="text-stone-800">Uber/Bolt</strong> costs €10-15, takes
                    20 minutes, and works 24/7. Worth it if you land after midnight when the
                    metro stops running, or if you&apos;re splitting the fare with someone.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    <strong className="text-stone-800">Good news:</strong> Porto airport
                    (Francisco Sá Carneiro) is only 11 km from the center — one of the
                    closest airports to its city in Europe. You won&apos;t lose half a day
                    getting into town.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            <ProTip variant="tip">
              The Andante card you buy at the airport is reusable for your entire trip. It
              works on the metro, all STCP buses, and some trams — so don&apos;t throw it
              away after the airport ride. Just top it up at any metro station when you
              need more credit.
            </ProTip>

            {/* Transfer Options */}
            <GuideSection label="Compared" title="All Transfer Options">
              {transferOptions.map((option) => (
                <ScrollReveal key={option.method}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6 mb-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-serif text-lg text-stone-800">
                        {option.method}
                      </h3>
                      <span className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta">
                        {option.verdict}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                      <div className="bg-stone-50 rounded-md p-2">
                        <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                          Price
                        </p>
                        <p className="text-stone-800 text-sm font-medium">
                          {option.price}
                        </p>
                      </div>
                      <div className="bg-stone-50 rounded-md p-2">
                        <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                          Time
                        </p>
                        <p className="text-stone-800 text-sm font-medium">
                          {option.duration}
                        </p>
                      </div>
                      <div className="bg-stone-50 rounded-md p-2">
                        <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                          Frequency
                        </p>
                        <p className="text-stone-800 text-sm font-medium">
                          {option.frequency}
                        </p>
                      </div>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {option.details}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-2">
                          Pros
                        </p>
                        <ul className="space-y-1">
                          {option.pros.map((pro) => (
                            <li
                              key={pro}
                              className="text-stone-600 text-sm leading-relaxed flex gap-2"
                            >
                              <span className="text-terracotta shrink-0">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-2">
                          Cons
                        </p>
                        <ul className="space-y-1">
                          {option.cons.map((con) => (
                            <li
                              key={con}
                              className="text-stone-600 text-sm leading-relaxed flex gap-2"
                            >
                              <span className="text-stone-400 shrink-0">&ndash;</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </GuideSection>

            <ProTip variant="money-saver">
              The metro is not just the cheapest option — it&apos;s often the fastest
              during rush hour. While taxis and Ubers sit in traffic on the VCI ring road,
              the metro runs on a dedicated track and arrives in exactly 30 minutes every
              time. We&apos;ve watched Ubers crawl past us in traffic while our metro
              sailed into Trindade.
            </ProTip>

            {/* Metro Step-by-Step */}
            <GuideSection label="Step-by-Step" title="Taking the Metro from the Airport">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">
                    The metro is genuinely the best option — we&apos;ve used it every trip
                    and it works flawlessly. Here&apos;s exactly what to do when you land:
                  </p>
                  <ol className="space-y-4">
                    {metroStepByStep.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-serif text-lg text-terracotta shrink-0 leading-snug">
                          {i + 1}.
                        </span>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Late Night Arrivals */}
            <GuideSection label="After Hours" title="Late Night Arrivals">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    If your flight lands after <strong className="text-stone-800">midnight</strong>,
                    the metro won&apos;t be running (last train departs the airport around
                    12:30 AM). Here&apos;s what we&apos;d do:
                  </p>
                  <ul className="space-y-3">
                    <li className="text-stone-600 text-sm leading-relaxed">
                      <strong className="text-stone-800">First choice: Uber or Bolt.</strong>{" "}
                      Download the app before you fly. Porto airport has free Wi-Fi, so you
                      can request a ride even without a local SIM. Walk to the departures
                      level for pickup. Expect to pay €12-18 at night.
                    </li>
                    <li className="text-stone-600 text-sm leading-relaxed">
                      <strong className="text-stone-800">Second choice: Taxi.</strong>{" "}
                      The rank outside arrivals operates 24/7. Remember the 20% night
                      surcharge applies — budget €25-30 to the center. Have cash ready.
                    </li>
                    <li className="text-stone-600 text-sm leading-relaxed">
                      <strong className="text-stone-800">Pre-booked transfer:</strong>{" "}
                      If you want zero stress, book a private transfer through Welcome
                      Pickups or your hotel. The driver waits in arrivals with your name.
                      Worth it after a long travel day when you just want to collapse into
                      bed.
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </GuideSection>

            <GuideCTA
              title="Now Explore the City"
              description="You're in Porto — time to plan your days. Our itineraries cover 1 to 5 days, starting from the city center."
              buttonText="See Itineraries"
              href="/itineraries"
            />
            <FAQSection faqs={airportTransferFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
