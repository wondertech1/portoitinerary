import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import GuideCTA from "@/components/shared/GuideCTA";
import ProTip from "@/components/shared/ProTip";
import JsonLd from "@/components/shared/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { azulejoSpots, walkingRoute, azulejoFaqs } from "@/data/guides/azulejos";

export const metadata: Metadata = {
  title: "Best Azulejo Tiles in Porto 2026 — A Walking Guide | Porto Itinerary",
  description:
    "The 7 best azulejo tile spots in Porto, ranked and mapped as a walking route. Sao Bento Station, Igreja do Carmo, Capela das Almas and more — with history, photo tips, and access info for 2026.",
  alternates: { canonical: "https://portoitinerary.com/guides/best-azulejo-tiles-porto" },
  openGraph: {
    title: "Best Azulejo Tiles in Porto 2026 — A Walking Guide",
    description: "From Sao Bento's 20,000 tiles to hidden street facades — Porto's best azulejos ranked with a walking route.",
    url: "https://portoitinerary.com/guides/best-azulejo-tiles-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Azulejo Tiles in Porto 2026 — A Walking Guide",
  description: "A ranked walking guide to Porto's 7 best azulejo tile locations with history, photo tips, and access information.",
  url: "https://portoitinerary.com/guides/best-azulejo-tiles-porto",
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

const related = [
  { title: "Best Viewpoints in Porto", description: "Porto's best miradouros ranked — many overlap with azulejo spots.", href: "/guides/best-viewpoints-porto", category: "Practical Guide" },
  { title: "Porto Neighborhoods Guide", description: "Understand the neighborhoods where the best tiles are found.", href: "/guides/porto-neighborhoods", category: "Practical Guide" },
  { title: "Livraria Lello Guide", description: "Another of Porto's most photogenic cultural landmarks.", href: "/guides/livraria-lello-guide", category: "Culture Guide" },
];

export default function AzulejoTilesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best Azulejo Tiles in Porto",
          itemListOrder: "https://schema.org/ItemListOrderDescending",
          numberOfItems: azulejoSpots.length,
          itemListElement: azulejoSpots.map((spot) => ({
            "@type": "ListItem",
            position: spot.rank,
            name: spot.name,
          })),
        }}
      />
      <Navigation />
      <main>
        <GuideHero
          category="Culture Guide"
          title="Best Azulejo Tiles in Porto"
          subtitle="A walking guide to Porto's finest hand-painted tile work — 20,000-tile stations, wrapped chapels, and facades most visitors walk right past."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Azulejo Tiles" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">

            {/* What Are Azulejos */}
            <GuideSection label="Background" title="What Are Azulejos?" description="More than decoration — a 500-year storytelling tradition.">
              <ScrollReveal>
                <div className="prose prose-stone max-w-none">
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Azulejos are not just decorative tiles. They are Portugal&apos;s most distinctive art form — a storytelling tradition that has covered churches, palaces, train stations, and ordinary houses for over five centuries. The word comes from the Arabic <em>az-zulayj</em>, meaning polished stone, a reminder of the Moorish origins of tile-making on the Iberian Peninsula.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    In Porto, azulejos reached their peak between the 18th and early 20th centuries. The blue-and-white palette that defines Porto&apos;s tiles was influenced by Chinese porcelain and Dutch Delftware, but the narratives are unmistakably Portuguese — battles, saints, everyday life, and maritime history rendered in thousands of individually painted tiles assembled into massive panels.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    What makes Porto special is that these tiles are not locked away in museums. They are on working churches, an active railway station, and the facades of buildings you pass on a morning coffee walk. The city itself is the gallery.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* The 7 Best Spots Ranked */}
            <GuideSection label="The Tiles" title="7 Best Azulejo Spots in Porto, Ranked" description="Ranked by artistic significance, visual impact, and the experience of seeing them in person.">
              <div className="space-y-6">
                {azulejoSpots.map((spot, i) => (
                  <ScrollReveal key={spot.name} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${spot.rank <= 3 ? "bg-terracotta" : "bg-stone-200"}`}>
                          <span className={`font-serif text-lg ${spot.rank <= 3 ? "text-cream" : "text-stone-600"}`}>{spot.rank}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-xl text-stone-800">{spot.name}</h3>
                          <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                            {spot.neighborhood} · {spot.type} · {spot.period}
                          </p>
                        </div>
                      </div>

                      {spot.artist && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">Artist: {spot.artist}</span>
                        </div>
                      )}

                      <p className="text-stone-600 text-sm leading-relaxed mb-3">{spot.description}</p>

                      <div className="bg-cream rounded px-3 py-2.5 border-l-2 border-ochre mb-2">
                        <p className="text-stone-600 text-xs leading-relaxed">
                          <span className="font-medium text-stone-700">Photo tip: </span>{spot.photoTip}
                        </p>
                      </div>

                      <div className="bg-stone-50 rounded px-3 py-2.5 border-l-2 border-stone-300">
                        <p className="text-stone-600 text-xs leading-relaxed">
                          <span className="font-medium text-stone-700">Access: </span>{spot.accessInfo}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Walking Route */}
            <GuideSection label="The Route" title="Azulejo Walking Route" description="All 7 spots connected in a logical walking loop — roughly 2 hours at a comfortable pace.">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <div className="space-y-0">
                    {walkingRoute.map((stop, i) => (
                      <div key={stop.stop} className="relative flex gap-4">
                        {/* Timeline line */}
                        {i < walkingRoute.length - 1 && (
                          <div className="absolute left-[15px] top-[32px] bottom-0 w-px bg-stone-300" />
                        )}
                        {/* Number circle */}
                        <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center flex-shrink-0 z-10">
                          <span className="font-serif text-sm text-cream">{stop.stop}</span>
                        </div>
                        {/* Content */}
                        <div className={`flex-1 ${i < walkingRoute.length - 1 ? "pb-5" : ""}`}>
                          <h4 className="font-serif text-base text-stone-800">{stop.location}</h4>
                          <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mt-0.5">
                            {stop.walkingTime}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Photo Tips */}
            <GuideSection label="Photography" title="Photo Tips for Azulejo Tiles" description="How to photograph glazed tile surfaces without glare, crowds, or flat light.">
              <ScrollReveal>
                <div className="prose prose-stone max-w-none">
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Azulejo tiles are glazed ceramic — they reflect light. Harsh midday sun creates glare that washes out the blue-and-white detail. The best conditions are <strong>early morning</strong> (soft, directional light), <strong>late afternoon</strong> (warm light that brings out the blue pigment), or <strong>overcast days</strong> (even diffusion, no reflections). I have photographed these tiles in all conditions, and overcast days consistently produce the most faithful color reproduction.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    For interior tiles like Sao Bento and the Cathedral cloisters, a tripod or steady hand is essential — the light inside is significantly lower. If you are using a phone, brace it against a pillar or railing.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Shoot both wide (to capture the scale) and tight (to show the brushwork). The artistry of azulejos is in the individual brush strokes — every tile was painted by hand, and the small imperfections are what make them beautiful.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            <ProTip variant="tip">
              For the best photographs, start the walking route early — <strong>Sao Bento before 9 AM</strong> gives you soft window light and almost no crowds. By 10 AM, tour groups fill the hall and it becomes difficult to get a clean shot of the tile panels.
            </ProTip>

            <ProTip variant="local-secret">
              The side streets off Rua de Santa Catarina — especially Rua de Fernandes Tomas and Rua do Bonjardim — have dozens of tiled facades that never appear in guidebooks. Some of the most striking geometric and Art Nouveau patterns in Porto are on ordinary apartment buildings two blocks from the tourist trail. Just look up.
            </ProTip>

            <GuideCTA title="See the Tiles on a Full Itinerary" description="Our Porto itineraries route you past the best azulejo spots at the right time of day for light and crowds." buttonText="See Itineraries" href="/itineraries" />
            <FAQSection faqs={azulejoFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
