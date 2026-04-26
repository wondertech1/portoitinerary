import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portoitinerary.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Itineraries
    {
      url: `${baseUrl}/itineraries`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/1-day-porto-itinerary`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/3-day-porto-itinerary`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/5-day-porto-itinerary`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Guides
    {
      url: `${baseUrl}/guides/where-to-eat-porto`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-francesinha-porto`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/port-wine-cellars-guide`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/port-wine-tasting-beginners`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/douro-valley-day-trip`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-port-wine-bars`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-wine-food-pairing`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-neighborhoods`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-viewpoints-porto`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-time-to-visit-porto`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/where-to-stay-porto`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/lisbon-to-porto`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-on-a-budget`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/livraria-lello-guide`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-to-aveiro-day-trip`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-airport-to-city-center`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-azulejo-tiles-porto`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-pasteis-de-nata-porto`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/getting-around-porto`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-to-braga-day-trip`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-to-guimaraes-day-trip`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-cafes-porto`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-markets-guide`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-nightlife-guide`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-free-walking-tours`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/sao-joao-festival-porto`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-with-kids`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/2-day-porto-itinerary`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/porto-vs-lisbon`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-beaches-guide`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-seafood-porto`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-hidden-gems`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-card-worth-it`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/porto-safety-guide`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // About
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
