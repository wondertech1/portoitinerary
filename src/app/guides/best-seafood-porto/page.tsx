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
  title: "Best Seafood in Porto 2026 — Matosinhos, Grilled Fish & Marisqueiras | Porto Itinerary",
  description: "Where to eat the best seafood in Porto and Matosinhos. Grilled fish, octopus, seafood rice, and the freshest catch — with prices, what to order, and which restaurants are worth the trip.",
  alternates: { canonical: "https://portoitinerary.com/guides/best-seafood-porto" },
  openGraph: { title: "Best Seafood in Porto 2026", description: "From Matosinhos grilled fish to Ribeira octopus — Porto's best seafood ranked.", url: "https://portoitinerary.com/guides/best-seafood-porto", siteName: "Porto Itinerary", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Best Seafood in Porto 2026 — Matosinhos, Grilled Fish & Marisqueiras", description: "A guide to the best seafood restaurants in Porto and Matosinhos.", url: "https://portoitinerary.com/guides/best-seafood-porto", datePublished: "2026-04-25", dateModified: "2026-04-25", author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" }, publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" } };

const restaurants = [
  { name: "Matosinhos Seafood Strip (Rua Heróis de França)", neighborhood: "Matosinhos", price: "€€", type: "Grilled fish, outdoor charcoal", description: "Not one restaurant but a strip of 12+ seafood spots grilling fish on outdoor charcoal. This is Porto's seafood capital — fresh sardines, sea bass (robalo), sea bream (dourada), and octopus grilled whole and served simply with olive oil, garlic, and potatoes. Pick any restaurant that's busy with locals. Prices are remarkably fair: €10-15 for a whole grilled fish with sides.", mustOrder: "Grilled robalo (sea bass) or sardines in summer. Ask what came in today.", tip: "Go for lunch (12:30-14:00) when the fish is freshest. Walk past the first 2-3 restaurants — they catch tourists from the metro. The best spots are further along the strip." },
  { name: "Casa de Chá da Boa Nova", neighborhood: "Leça da Palmeira", price: "€€€€", type: "Michelin-starred seafood", description: "Two Michelin stars. Designed by Álvaro Siza Vieira in 1963, the building sits on rocks above the Atlantic — waves crash below during lunch service. Chef Rui Paula (same as DOC in the Douro) creates dishes that make the ocean the protagonist. This is Porto's most extraordinary dining experience, full stop.", mustOrder: "The tasting menu — every course references the sea. Book 3-4 weeks ahead.", tip: "Taxi from Matosinhos (5 min). Arrive 15 min early to walk the rocky coastline. Lunch is slightly cheaper than dinner." },
  { name: "Adega São Nicolau", neighborhood: "Ribeira", price: "€€", type: "Traditional seafood", description: "A Ribeira institution for honest seafood. Yes, it's near the tourist waterfront, but the food is genuine. The grilled sardines (summer), bacalhau à Gomes de Sá, and catch of the day are all reliable. The location means you pay a slight premium, but the quality holds up.", mustOrder: "Bacalhau à Gomes de Sá (Porto's signature cod dish) or grilled sardines (June-September)", tip: "Walk past the waterfront restaurants and go one street back — that's where Adega São Nicolau is. The difference in quality from the quay restaurants is enormous." },
  { name: "Cafeína", neighborhood: "Foz do Douro", price: "€€–€€€", type: "Contemporary seafood", description: "Foz's best restaurant — contemporary Portuguese with an emphasis on fish. The grilled fish of the day is always excellent, and the wine list focuses on Douro producers. Chic but not stuffy. The terrace is lovely on warm evenings.", mustOrder: "Grilled fish of the day, or the tasting menu if you're celebrating.", tip: "Reserve for dinner. Weekend lunches book up fast in summer." },
  { name: "O Gaveto", neighborhood: "Matosinhos", price: "€€€", type: "Upscale marisqueira", description: "The fancy Matosinhos option. O Gaveto is a proper marisqueira — seafood platters, lobster, prawns, crab, and the best arroz de marisco (seafood rice) in the Porto area. Higher prices than the strip but higher quality and more variety. The rice dishes serve 2 and are exceptional.", mustOrder: "Arroz de marisco for 2. Or the seafood platter if you want the full spread.", tip: "Book 2-3 days ahead for dinner. The lunch menu is better value." },
  { name: "Pedro Lemos", neighborhood: "Foz do Douro", price: "€€€€", type: "Michelin-starred fine dining", description: "One Michelin star. Chef Pedro Lemos uses the finest Portuguese ingredients — much of it seafood — in a refined, personal style. The restaurant is intimate (30 seats), set in a charming Foz townhouse. Less dramatic than Boa Nova, but the food is equally exquisite.", mustOrder: "The tasting menu. Every course is a lesson in Portuguese produce.", tip: "Book 1-2 weeks ahead. Dress smart casual. Wine pairing is exceptional." },
];

const faqs = [
  { question: "Where is the best seafood near Porto?", answer: "Matosinhos, 15 minutes from Porto by metro. The Rua Heróis de França strip has a dozen+ restaurants grilling fresh fish on outdoor charcoal for €10-15. It's the best value seafood experience in the Porto area." },
  { question: "What seafood should I try in Porto?", answer: "Grilled sardines (summer only, June-September), bacalhau à Gomes de Sá (shredded cod with potatoes and olives — Porto's signature), polvo à lagareiro (roasted octopus), arroz de marisco (seafood rice for 2), and percebes (goose barnacles — if you're adventurous)." },
  { question: "Is Matosinhos worth the trip for seafood?", answer: "Absolutely — it's the single best food experience in the Porto area. The metro gets you there in 15 minutes, the fish is fresher (it's a fishing port), and the prices are lower than city-center restaurants. Go for lunch." },
  { question: "When is sardine season in Porto?", answer: "June to September, peaking around São João (June 23-24) when the entire city grills sardines. Outside this window, sardines may be frozen or unavailable. Ask the restaurant — if they're honest, they'll tell you." },
];

const related = [
  { title: "Porto Beaches Guide", description: "Combine Matosinhos seafood with a beach afternoon.", href: "/guides/porto-beaches-guide", category: "Practical Guide" },
  { title: "Where to Eat in Porto", description: "The complete restaurant guide — all neighborhoods, all cuisines.", href: "/guides/where-to-eat-porto", category: "Food Guide" },
  { title: "Wine & Food Pairing", description: "What wine to drink with your seafood — vinho verde, always.", href: "/guides/porto-wine-food-pairing", category: "Wine Guide" },
];

export default function SeafoodPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero category="Food Guide" title="Best Seafood in Porto 2026" subtitle="From Matosinhos charcoal grills to Michelin-starred ocean views — Porto's Atlantic kitchen." lastVerified="April 2026" breadcrumbItems={[{ label: "Seafood" }]} />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <GuideSection label="The Truth" title="Porto Is a Seafood City" description="Most visitors come for port wine and francesinhas. They miss the fish.">
              <ScrollReveal>
                <p className="text-stone-600 text-sm leading-relaxed">Porto sits where the Douro meets the Atlantic. Matosinhos, just 15 minutes by metro, is a working fishing port — boats come in daily, and the catch goes straight to the restaurants lining the boardwalk. The grilled fish culture here is one of Portugal&apos;s great food traditions: simple, fresh, charcoal-fired, and served with nothing more than olive oil, garlic, and boiled potatoes. If you leave Porto without eating fish in Matosinhos, you&apos;ve missed something essential.</p>
              </ScrollReveal>
            </GuideSection>

            <GuideSection label="Restaurants" title="6 Best Seafood Spots" description="From €10 grilled fish to 2-Michelin-star ocean dining.">
              <div className="space-y-6">
                {restaurants.map((r, i) => (
                  <ScrollReveal key={r.name} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="font-serif text-xl text-stone-800">{r.name}</h3>
                          <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">{r.neighborhood} · {r.price}</p>
                        </div>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm flex-shrink-0">{r.type}</span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-3">{r.description}</p>
                      <p className="text-stone-600 text-sm mb-2"><span className="font-medium text-stone-700">Order: </span>{r.mustOrder}</p>
                      <div className="bg-cream rounded px-3 py-2 border-l-2 border-ochre">
                        <p className="text-stone-600 text-xs leading-relaxed"><span className="font-medium text-stone-700">Tip: </span>{r.tip}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">The best seafood pairing in Porto isn&apos;t port wine — it&apos;s <strong>vinho verde</strong>. Cold, crisp, and €3-5 a bottle. It cuts through grilled fish fat perfectly. Order &ldquo;vinho verde da casa&rdquo; at any Matosinhos restaurant.</ProTip>
            <FAQSection faqs={faqs} />
            <RelatedContent items={related} />
            <GuideCTA title="Add Matosinhos to Your Itinerary" description="Our 5-day itinerary includes Foz coast on Day 3 — extend it with a Matosinhos seafood lunch." buttonText="See 5-Day Itinerary" href="/5-day-porto-itinerary" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
