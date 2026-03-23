import type { Metadata } from "next";
import ItineraryPage from "@/components/itinerary/ItineraryPage";
import JsonLd from "@/components/shared/JsonLd";
import { threeDayItinerary } from "@/data/itineraries/3-day";

export const metadata: Metadata = {
  title:
    "3-Day Porto Itinerary 2026 — The Classic Route (Tested by Locals) | Porto Itinerary",
  description:
    "The ideal 3-day Porto itinerary: historic center, Gaia wine cellars, Foz do Douro coast, Bolhão Market & Cedofeita. Day-by-day plan with times, restaurants & budget tips for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/3-day-porto-itinerary",
  },
  openGraph: {
    title: "3-Day Porto Itinerary 2026 — The Classic Route",
    description:
      "Three days to fall in love with Porto. Day 1: historic center. Day 2: wine cellars & coast. Day 3: markets & art. Tested by locals.",
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
  "@type": "TravelAction",
  name: "3-Day Porto Itinerary",
  description: threeDayItinerary.description,
  location: {
    "@type": "City",
    name: "Porto",
    address: { "@type": "PostalAddress", addressCountry: "PT" },
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
