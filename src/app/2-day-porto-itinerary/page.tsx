import type { Metadata } from "next";
import ItineraryPage from "@/components/itinerary/ItineraryPage";
import JsonLd from "@/components/shared/JsonLd";
import { twoDayItinerary } from "@/data/itineraries/2-day";

export const metadata: Metadata = {
  title: "2-Day Porto Itinerary 2026 — The Perfect Weekend (Locally Tested) | Porto Itinerary",
  description:
    "A 2-day Porto itinerary that covers the essentials without rushing. Historic center, port wine cellars, Ribeira waterfront, and Foz coast. Day-by-day with times and costs.",
  alternates: { canonical: "https://portoitinerary.com/2-day-porto-itinerary" },
  openGraph: {
    title: "2-Day Porto Itinerary 2026 — The Perfect Weekend",
    description: "Two days covering Porto's essentials — historic center, wine cellars, and the coast. With exact times and restaurant picks.",
    url: "https://portoitinerary.com/2-day-porto-itinerary",
    siteName: "Porto Itinerary", type: "article",
  },
  twitter: { card: "summary_large_image", title: "2-Day Porto Itinerary 2026", description: "The perfect Porto weekend: azulejos, port wine, and Douro sunsets in 48 hours." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "2-Day Porto Itinerary 2026 — The Perfect Weekend (Locally Tested)",
  description: twoDayItinerary.description,
  url: "https://portoitinerary.com/2-day-porto-itinerary",
  datePublished: "2026-04-25", dateModified: "2026-04-25",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

export default function TwoDayItineraryPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ItineraryPage data={twoDayItinerary} />
    </>
  );
}
