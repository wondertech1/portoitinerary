import type { Metadata } from "next";
import ItineraryPage from "@/components/itinerary/ItineraryPage";
import JsonLd from "@/components/shared/JsonLd";
import { threeDayItinerary } from "@/data/itineraries/3-day";

export const metadata: Metadata = {
  title:
    "3-Day Porto Itinerary 2026 — The Classic Route (Tested by Locals) | Porto Itinerary",
  description:
    "Three days in Porto done right: historic center and Ribeira, Gaia wine cellars and Foz coast, then Bolhão Market and Cedofeita. Day-by-day plan with times, restaurants & budget breakdown.",
  alternates: {
    canonical: "https://portoitinerary.com/3-day-porto-itinerary",
  },
  openGraph: {
    title: "3-Day Porto Itinerary 2026 — The Classic Route",
    description:
      "Three days in Porto done right. Day 1: historic center. Day 2: wine cellars & coast. Day 3: markets & creative quarter.",
    url: "https://portoitinerary.com/3-day-porto-itinerary",
    siteName: "Porto Itinerary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "3-Day Porto Itinerary 2026",
    description:
      "The classic Porto trip: azulejos, port wine, ocean views, and creative neighborhoods. Day-by-day plan.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "3-Day Porto Itinerary 2026 — The Classic Route (Tested by Locals)",
  description: threeDayItinerary.description,
  url: "https://portoitinerary.com/3-day-porto-itinerary",
  datePublished: "2026-03-22",
  dateModified: "2026-04-23",
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

export default function ThreeDayItineraryPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ItineraryPage data={threeDayItinerary} />
    </>
  );
}
