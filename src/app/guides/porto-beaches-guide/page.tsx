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

export const metadata: Metadata = {
  title: "Best Beaches Near Porto 2026 — From Foz to Matosinhos & Beyond | Porto Itinerary",
  description: "The best beaches near Porto: Matosinhos (metro-accessible), Foz do Douro, Miramar, and Costa Nova. Which beach to visit, how to get there, and what to expect in 2026.",
  alternates: { canonical: "https://portoitinerary.com/guides/porto-beaches-guide" },
  openGraph: { title: "Best Beaches Near Porto 2026", description: "From city-accessible Matosinhos to the striped houses of Costa Nova — Porto's best beaches ranked.", url: "https://portoitinerary.com/guides/porto-beaches-guide", siteName: "Porto Itinerary", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Best Beaches Near Porto 2026 — From Foz to Matosinhos & Beyond", description: "A guide to the best beaches near Porto with access info, seafood picks, and swimming conditions.", url: "https://portoitinerary.com/guides/porto-beaches-guide", datePublished: "2026-04-25", dateModified: "2026-04-25", author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" }, publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" } };

const beaches = [
  { name: "Praia de Matosinhos", distance: "15 min by metro (Line A)", sand: "Wide, golden, long", swimming: "Good — lifeguards in summer, calmer than Foz", vibe: "Local families, surfers, seafood restaurants lining the boardwalk", description: "Porto's best all-round beach. A wide, flat stretch of sand backed by a long boardwalk and some of Porto's best seafood restaurants. The metro drops you 5 minutes from the sand. Matosinhos is also Porto's surf hub — rent a board or take a lesson for €30-40. The seafood restaurants on Rua Heróis de França are the real draw — grilled fish on outdoor tables, €10-15 per person.", bestFor: "Swimming, surfing, seafood lunch, easy access", eat: "Matosinhos seafood strip — Casa de Chá da Boa Nova (Michelin-starred, book ahead) or any grilled fish spot on Rua Heróis de França" },
  { name: "Foz do Douro", distance: "Tram 1 from Ribeira (30 min) or bus 500", sand: "Rocky coast with small sandy pockets", swimming: "Difficult — rocky, strong currents, cold water", vibe: "Upscale, promenade walks, sunset-watching, café culture", description: "Less a beach and more a dramatic coastline. Foz is where the Douro meets the Atlantic — the Farol de Felgueiras lighthouse marks the junction. The promenade walk is beautiful, the 19th-century Pérgola da Foz pavilion is photogenic, and the café terraces face the ocean. Don't come to swim — come for the walk, the air, and the seafood.", bestFor: "Coastal walks, photography, ocean-view dining", eat: "Cafeína (contemporary Portuguese) or Praia da Luz (seafood terrace)" },
  { name: "Praia de Miramar", distance: "20 min by train (Linha do Norte to Miramar)", sand: "Clean, less crowded, Chapel on the beach", swimming: "Good — sandy bottom, lifeguards in summer", vibe: "Quieter, local, the chapel on the beach is surreal", description: "A quieter alternative to Matosinhos, south of Gaia. The draw is the Capela do Senhor da Pedra — a small stone chapel sitting directly on the beach, one of Portugal's most photographed spots. The sand is clean, the crowds are thin on weekdays, and the train ride is cheap and scenic.", bestFor: "Escaping crowds, unique photography (chapel), relaxed swimming", eat: "Bring a picnic — limited restaurant options at the beach" },
  { name: "Costa Nova", distance: "1 hr by car or bus from Porto (near Aveiro)", sand: "Wide, Atlantic-facing, dune-backed", swimming: "Good — long beach, waves can be strong", vibe: "Famous striped houses, day-trip destination, Instagram-famous", description: "The candy-striped beach houses (palheiros) are what you've seen on Instagram. Costa Nova is technically a day trip (combine it with Aveiro's canals) but the beach is excellent — wide, clean, and backed by sand dunes. The striped houses were originally fishermen's storage sheds. Visit on a weekday to avoid the Instagram crowds.", bestFor: "Day trip combined with Aveiro, photography, wide sandy beach", eat: "Grilled fish at any Costa Nova restaurant — or eat in Aveiro first (ovos moles pastries are a must)" },
];

const faqs = [
  { question: "Can you swim at beaches near Porto?", answer: "Yes — Matosinhos and Miramar have good swimming with lifeguards in summer (June-September). The Atlantic is cold (16-19°C even in summer) but swimmable. Foz do Douro is rocky and not ideal for swimming. Always check flag conditions — red flag means no swimming." },
  { question: "Which is the closest beach to Porto city center?", answer: "Foz do Douro (30 min by tram/bus) for the coast, but it's rocky. Matosinhos (15 min by metro) is the closest swimmable beach with proper sand. Both are easy half-day trips from the center." },
  { question: "Is the water warm enough to swim?", answer: "The Atlantic near Porto is 16-19°C in summer — cold by Mediterranean standards. Most people swim in July-August. A wetsuit extends the season for surfers. If you want warm water, Porto isn't the destination — head south to the Algarve." },
  { question: "What's the best beach for seafood?", answer: "Matosinhos, without question. The Rua Heróis de França strip has a dozen+ seafood restaurants grilling fish on outdoor charcoal. Fresh sardines, sea bass, and octopus for €10-15. It's one of Porto's best food experiences — better than most city-center restaurants." },
];

const related = [
  { title: "Best Seafood in Porto", description: "Matosinhos seafood and more — the complete fish guide.", href: "/guides/best-seafood-porto", category: "Food Guide" },
  { title: "Porto to Aveiro Day Trip", description: "Combine Costa Nova beach with Aveiro's canals.", href: "/guides/porto-to-aveiro-day-trip", category: "Day Trip" },
  { title: "Best Time to Visit Porto", description: "When the weather is best for beach days.", href: "/guides/best-time-to-visit-porto", category: "Practical Guide" },
  { title: "Porto Neighborhoods Guide", description: "Foz do Douro and beyond — what each area offers.", href: "/guides/porto-neighborhoods", category: "Practical Guide" },
];

export default function BeachesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero category="Practical Guide" title="Best Beaches Near Porto 2026" subtitle="Porto isn't a beach city — but the beaches nearby are better than most travelers expect." lastVerified="April 2026" breadcrumbItems={[{ label: "Beaches" }]} />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <GuideSection label="The Beaches" title="4 Best Beaches Near Porto" description="Ranked by accessibility, swimming quality, and overall experience.">
              <div className="space-y-6">
                {beaches.map((b, i) => (
                  <ScrollReveal key={b.name} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <h3 className="font-serif text-xl text-stone-800 mb-1">{b.name}</h3>
                      <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-3">{b.distance}</p>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div><p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-0.5">Sand</p><p className="text-stone-600 text-xs">{b.sand}</p></div>
                        <div><p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-0.5">Swimming</p><p className="text-stone-600 text-xs">{b.swimming}</p></div>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-3">{b.description}</p>
                      <p className="text-stone-600 text-xs"><span className="font-medium text-stone-700">Best for: </span>{b.bestFor}</p>
                      <div className="bg-cream rounded px-3 py-2 border-l-2 border-ochre mt-3">
                        <p className="text-stone-600 text-xs leading-relaxed"><span className="font-medium text-stone-700">Eat: </span>{b.eat}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>
            <ProTip variant="tip">Matosinhos is the clear winner for a beach day — easy metro access, great sand, and Porto&apos;s best seafood right on the boardwalk. Go for lunch, swim in the afternoon, eat grilled fish at sunset.</ProTip>
            <GuideCTA title="Plan Your Beach Day" description="Our 5-day itinerary includes the Foz coast on Day 3 — combine it with a Matosinhos seafood lunch." buttonText="See 5-Day Itinerary" href="/5-day-porto-itinerary" />
            <FAQSection faqs={faqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
