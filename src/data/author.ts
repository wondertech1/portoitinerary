export const siteAuthor = {
  name: "Porto Itinerary",
  url: "https://portoitinerary.com/about",
};

export const authorSchema = {
  "@type": "Person" as const,
  name: siteAuthor.name,
  url: siteAuthor.url,
};

export const publisherSchema = {
  "@type": "Organization" as const,
  name: "Porto Itinerary",
  url: "https://portoitinerary.com",
};
