import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumb from "@/components/shared/Breadcrumb";
import JsonLd from "@/components/shared/JsonLd";
import PostmarkStamp from "@/components/decorative/PostmarkStamp";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Porto Itineraries 2026 — 1, 3 & 5 Day Plans | Porto Itinerary",
  description:
    "How many days do you need in Porto? Choose from our locally tested 1-day, 3-day, and 5-day Porto itineraries with exact times, costs, restaurants, and insider tips for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/itineraries",
  },
  openGraph: {
    title: "Porto Itineraries 2026 — 1, 3 & 5 Day Plans",
    description:
      "Locally tested Porto itineraries for every trip length. Day-by-day plans with times, costs, and local tips.",
    url: "https://portoitinerary.com/itineraries",
    siteName: "Porto Itinerary",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Porto Itineraries",
  description:
    "Curated Porto itineraries for 1, 3, and 5 days — locally tested with exact times, costs, and restaurant picks.",
  url: "https://portoitinerary.com/itineraries",
};

const itineraries = [
  {
    duration: 1,
    title: "The Perfect Day",
    subtitle: "Hit every essential in 24 hours",
    description:
      "São Bento Station, Clérigos Tower, Ribeira waterfront, port wine tasting in Gaia, and sunset over the Douro. The ideal first-timer route.",
    stops: 8,
    walking: "~5 km",
    budget: "€40–€180",
    bestFor: "First-timers, layovers, quick visits",
    href: "/1-day-porto-itinerary",
    highlights: [
      "São Bento azulejo hall",
      "Clérigos Tower panorama",
      "Francesinha lunch",
      "Port wine tasting",
      "Douro sunset",
    ],
  },
  {
    duration: 3,
    title: "The Classic Route",
    subtitle: "The ideal Porto trip for most travelers",
    description:
      "Three days covering the historic center, Gaia wine cellars, Foz do Douro coast, Bolhão Market, and Cedofeita's creative quarter. The sweet spot for most visitors.",
    stops: 18,
    walking: "~14 km",
    budget: "€120–€550",
    bestFor: "Weekend trips, couples, foodies",
    href: "/3-day-porto-itinerary",
    highlights: [
      "Historic center & Ribeira",
      "Wine cellar tours",
      "Tram ride to the coast",
      "Bolhão Market",
      "Cedofeita galleries",
      "Serralves Museum",
    ],
  },
  {
    duration: 5,
    title: "The Deep Dive",
    subtitle: "Go beyond the tourist trail",
    description:
      "Everything in the 3-day route plus a Douro Valley day trip, Bonfim street art, Fontainhas cliffside walks, and the local tascas most visitors never find.",
    stops: 28,
    walking: "~22 km",
    budget: "€200–€950",
    bestFor: "Deep explorers, slow travelers, wine lovers",
    href: "/5-day-porto-itinerary",
    highlights: [
      "All 3-day highlights",
      "Douro Valley train ride",
      "Quinta vineyard visit",
      "Bonfim street art",
      "Fontainhas neighborhood",
      "Hidden tascas & local gems",
    ],
  },
];

export default function ItinerariesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 px-6">
          <div className="mx-auto max-w-4xl">
            <Breadcrumb items={[{ label: "Itineraries" }]} />

            <ScrollReveal>
              <div className="text-center relative">
                <PostmarkStamp
                  className="absolute -top-2 right-0 opacity-15 hidden sm:block"
                  size={80}
                />
                <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-terracotta mb-3">
                  Porto Itineraries 2026
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-800 leading-tight mb-4">
                  How Many Days Do You Need in Porto?
                </h1>
                <p className="font-serif italic text-stone-500 text-lg max-w-2xl mx-auto">
                  One day is enough to fall in love. Three days is enough to
                  understand why people stay. Five days? You might not want to
                  leave.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-6 pb-16 sm:pb-24">
          <div className="mx-auto max-w-4xl space-y-8">
            {itineraries.map((it, i) => (
              <ScrollReveal key={it.duration} delay={i * 0.1}>
                <Link href={it.href} className="group block">
                  <div className="parchment-texture rounded-lg postcard-shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start gap-5">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-terracotta flex items-center justify-center flex-shrink-0">
                          <span className="font-serif text-3xl sm:text-4xl text-cream leading-none">
                            {it.duration}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta mb-1">
                            {it.duration}-Day Itinerary
                          </p>
                          <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 group-hover:text-terracotta transition-colors duration-300 mb-1">
                            {it.title}
                          </h2>
                          <p className="font-serif italic text-stone-500 mb-3">
                            {it.subtitle}
                          </p>
                          <p className="text-stone-600 text-sm leading-relaxed mb-4">
                            {it.description}
                          </p>

                          {/* Stats */}
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                              {it.stops} stops
                            </span>
                            <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                              {it.walking} walking
                            </span>
                            <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                              {it.budget}
                            </span>
                          </div>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {it.highlights.map((h) => (
                              <span
                                key={h}
                                className="text-stone-500 text-xs flex items-center gap-1"
                              >
                                <span className="text-terracotta/50">
                                  &#8250;
                                </span>
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ArrowRight
                          size={20}
                          strokeWidth={1.5}
                          className="text-stone-300 group-hover:text-terracotta group-hover:translate-x-1 transition-all mt-6 flex-shrink-0 hidden sm:block"
                        />
                      </div>
                    </div>

                    {/* Best for strip */}
                    <div className="bg-cream px-6 sm:px-8 py-3 border-t border-stone-200/50">
                      <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-stone-400">
                        <span className="font-medium text-stone-500">
                          Best for:
                        </span>{" "}
                        {it.bestFor}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
