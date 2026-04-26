import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PostcardRack from "@/components/home/PostcardRack";
import BentoGrid from "@/components/home/BentoGrid";
import NeighborhoodBoard from "@/components/home/NeighborhoodBoard";
import PostcardNewsletter from "@/components/home/PostcardNewsletter";
import PortoIntro from "@/components/home/PortoIntro";
import RelatedContent from "@/components/shared/RelatedContent";
import JsonLd from "@/components/shared/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Porto Itinerary — Your Complete Porto Travel Guide 2026",
          description:
            "Porto travel guide with day-by-day itineraries, restaurant picks, wine cellar tours, and neighborhood guides. Every recommendation personally tested.",
          url: "https://portoitinerary.com",
        }}
      />
      <Navigation />

      <main>
        <PostcardRack />
        <PortoIntro />
        <BentoGrid />
        <NeighborhoodBoard />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <RelatedContent
              items={[
                {
                  title: "Where to Eat in Porto",
                  description: "16 restaurants by neighborhood — with what to order at each.",
                  href: "/guides/where-to-eat-porto",
                  category: "Food Guide",
                },
                {
                  title: "Port Wine Cellars Guide",
                  description: "8 Gaia cellars compared — prices, tours, and verdicts.",
                  href: "/guides/port-wine-cellars-guide",
                  category: "Wine Guide",
                },
                {
                  title: "Port Wine for Beginners",
                  description: "How to taste, what to order, and what to bring home.",
                  href: "/guides/port-wine-tasting-beginners",
                  category: "Wine Guide",
                },
              ]}
            />
          </div>
        </div>

        <PostcardNewsletter />
      </main>

      <Footer />
    </>
  );
}
