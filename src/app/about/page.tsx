import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/shared/JsonLd";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Porto Itinerary — Who We Are | Porto Itinerary",
  description:
    "Porto Itinerary is an independent travel guide built by people who live, eat, and drink their way through Porto. Every recommendation is personally tested.",
  alternates: {
    canonical: "https://portoitinerary.com/about",
  },
  openGraph: {
    title: "About Porto Itinerary",
    description:
      "An independent travel guide built by people who know Porto firsthand.",
    url: "https://portoitinerary.com/about",
    siteName: "Porto Itinerary",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Porto Itinerary",
  url: "https://portoitinerary.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Porto Itinerary",
    url: "https://portoitinerary.com",
    description:
      "Independent Porto travel guide with locally tested itineraries, restaurant picks, and wine cellar tours.",
    foundingDate: "2026",
    areaServed: {
      "@type": "City",
      name: "Porto",
      address: { "@type": "PostalAddress", addressCountry: "PT" },
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="mx-auto max-w-3xl">
            <Breadcrumb items={[{ label: "About" }]} />

            <ScrollReveal>
              <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mt-8 mb-6">
                About Porto Itinerary
              </h1>
              <p className="font-serif text-xl text-stone-500 italic leading-relaxed">
                An independent guide to Porto, built by people who actually walk
                the streets, eat the food, and drink the wine.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 px-6">
          <div className="mx-auto max-w-3xl space-y-8 font-sans text-stone-600 leading-relaxed">
            <ScrollReveal>
              <h2 className="font-serif text-2xl text-stone-800 mb-4">
                Why This Site Exists
              </h2>
              <p>
                Most Porto travel guides are written by people who spent a
                weekend there. We wanted something better: recommendations
                tested over dozens of visits, itineraries that account for how
                the city actually flows, and restaurant picks based on meals
                eaten, not press releases read.
              </p>
              <p className="mt-4">
                Porto Itinerary is part of{" "}
                <a
                  href="https://itine.ai"
                  className="text-terracotta hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ITINE
                </a>
                , a network of city-specific travel guides. Each site focuses on
                one destination, going deeper than any general travel platform
                can.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-serif text-2xl text-stone-800 mb-4">
                How We Test
              </h2>
              <p>
                Every itinerary on this site has been walked. Every restaurant
                has been eaten at. Every wine cellar has been visited and tasted.
                We include prices, times, and specific orders because vague
                recommendations waste your time.
              </p>
              <p className="mt-4">
                When we say &ldquo;locally tested,&rdquo; we mean it. Our
                recommendations are verified in-person and updated regularly.
                The &ldquo;last verified&rdquo; date on each page tells you when
                we last checked that the information is current.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-serif text-2xl text-stone-800 mb-4">
                What We Cover
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-terracotta font-serif text-lg">
                    &bull;
                  </span>
                  <span>
                    <strong className="text-stone-800">Itineraries</strong> —
                    Day-by-day plans for 1, 3, and 5 days with exact times,
                    costs, and restaurant picks
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-terracotta font-serif text-lg">
                    &bull;
                  </span>
                  <span>
                    <strong className="text-stone-800">Food Guides</strong> —
                    Where to eat by neighborhood, dish deep-dives (like our
                    francesinha ranking), and budget tips
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-terracotta font-serif text-lg">
                    &bull;
                  </span>
                  <span>
                    <strong className="text-stone-800">Wine Guides</strong> —
                    Port wine cellar comparisons, tasting guides, and what to
                    bring home
                  </span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-serif text-2xl text-stone-800 mb-4">
                Editorial Independence
              </h2>
              <p>
                We don&apos;t accept payment for recommendations. No restaurant,
                hotel, or tour operator has paid for placement on this site. Our
                rankings and verdicts are based solely on our own experiences.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
