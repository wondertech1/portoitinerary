import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portoitinerary.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Itineraries
    {
      url: `${baseUrl}/itineraries`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/1-day-porto-itinerary`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/3-day-porto-itinerary`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/5-day-porto-itinerary`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Guides
    {
      url: `${baseUrl}/guides/where-to-eat-porto`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-francesinha-porto`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/port-wine-cellars-guide`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/port-wine-tasting-beginners`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
