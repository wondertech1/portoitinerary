import type { Metadata } from "next";
import ItineraryPage from "@/components/itinerary/ItineraryPage";
import JsonLd from "@/components/shared/JsonLd";
import { fiveDayItinerary } from "@/data/itineraries/5-day";

export const metadata: Metadata = {
  title:
    "5-Day Porto Itinerary 2026 — The Deep Dive (Beyond the Tourist Trail) | Porto Itinerary",
  description:
    "The ultimate 5-day Porto itinerary: historic center, wine cellars, Foz coast, Douro Valley day trip & hidden neighborhoods. Full guide with times, restaurants & local secrets for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/5-day-porto-itinerary",
  },
  openGraph: {
    title: "5-Day Porto Itinerary 2026 — The Deep Dive",
    description:
      "Five days to discover the Porto most travelers never see. Douro Valley, Bonfim street art, hidden tascas, and beyond.",
    url: "https://portoitinerary.com/5-day-porto-itinerary",
    siteName: "Porto Itinerary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "5-Day Porto Itinerary 2026",
    description:
      "Beyond the tourist trail: Douro Valley, street art, local tascas, and Porto's hidden gems. 5-day plan.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAction",
  name: "5-Day Porto Itinerary",
  description: fiveDayItinerary.description,
  location: {
    "@type": "City",
    name: "Porto",
    address: { "@type": "PostalAddress", addressCountry: "PT" },
  },
};

export default function FiveDayItineraryPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ItineraryPage data={fiveDayItinerary} />
    </>
  );
}
