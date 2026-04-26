import type { Metadata } from "next";
import ItineraryPage from "@/components/itinerary/ItineraryPage";
import JsonLd from "@/components/shared/JsonLd";
import { fiveDayItinerary } from "@/data/itineraries/5-day";

export const metadata: Metadata = {
  title:
    "5-Day Porto Itinerary 2026 — The Deep Dive (Beyond the Tourist Trail) | Porto Itinerary",
  description:
    "Five days in Porto goes beyond the highlights: historic center, wine cellars, Foz coast, a Douro Valley train ride, and the neighborhoods most visitors skip. Full day-by-day plan.",
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
  "@type": "Article",
  headline: "5-Day Porto Itinerary 2026 — The Deep Dive (Beyond the Tourist Trail)",
  description: fiveDayItinerary.description,
  url: "https://portoitinerary.com/5-day-porto-itinerary",
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

export default function FiveDayItineraryPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ItineraryPage data={fiveDayItinerary} />
    </>
  );
}
