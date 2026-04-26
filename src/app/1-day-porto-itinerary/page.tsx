import type { Metadata } from "next";
import ItineraryPage from "@/components/itinerary/ItineraryPage";
import JsonLd from "@/components/shared/JsonLd";
import { oneDayItinerary } from "@/data/itineraries/1-day";

export const metadata: Metadata = {
  title:
    "1-Day Porto Itinerary 2026 — The Perfect Day (Locally Tested) | Porto Itinerary",
  description:
    "The perfect 1-day Porto itinerary: São Bento, Clérigos Tower, Ribeira waterfront, port wine in Gaia, sunset at Jardim do Morro. Exact times, costs & restaurant picks.",
  alternates: {
    canonical: "https://portoitinerary.com/1-day-porto-itinerary",
  },
  openGraph: {
    title: "1-Day Porto Itinerary 2026 — The Perfect Day",
    description:
      "Walk from São Bento to Gaia in 24 hours. Port wine, azulejos, and Douro sunsets — with exact times and costs.",
    url: "https://portoitinerary.com/1-day-porto-itinerary",
    siteName: "Porto Itinerary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "1-Day Porto Itinerary 2026",
    description:
      "The perfect day in Porto: São Bento, Clérigos, Ribeira, port wine, and Douro sunset. Exact times and costs included.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "1-Day Porto Itinerary 2026 — The Perfect Day (Locally Tested)",
  description: oneDayItinerary.description,
  url: "https://portoitinerary.com/1-day-porto-itinerary",
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

export default function OneDayItineraryPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ItineraryPage data={oneDayItinerary} />
    </>
  );
}
