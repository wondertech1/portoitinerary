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
  title: "Porto vs Lisbon 2026 — Which Should You Visit? (Honest Comparison) | Porto Itinerary",
  description:
    "Porto vs Lisbon: an honest comparison covering cost, food, wine, nightlife, beaches, and vibe. Which Portuguese city is right for your trip in 2026?",
  alternates: { canonical: "https://portoitinerary.com/guides/porto-vs-lisbon" },
  openGraph: {
    title: "Porto vs Lisbon 2026 — Which Should You Visit?",
    description: "Cost, food, wine, nightlife, and vibe compared. The honest answer most guides won't give you.",
    url: "https://portoitinerary.com/guides/porto-vs-lisbon",
    siteName: "Porto Itinerary", type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Porto vs Lisbon 2026 — Which Should You Visit?",
  description: "An honest comparison of Porto and Lisbon covering cost, food, wine, nightlife, and overall vibe.",
  url: "https://portoitinerary.com/guides/porto-vs-lisbon",
  datePublished: "2026-04-25", dateModified: "2026-04-25",
  author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" },
  publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" },
};

const comparisons = [
  { category: "Cost", porto: "20-30% cheaper than Lisbon. Meals €8-15, wine cellars €12-25, mid-range hotels €70-120/night. Porto remains significantly cheaper, though prices have risen since 2020.", lisbon: "Portugal's capital commands capital prices. Meals €12-20, attractions €10-15, hotels €100-180/night. Still cheaper than Paris or Barcelona, but noticeably more than Porto.", winner: "Porto" },
  { category: "Food", porto: "Heavier, meatier, more working-class. Francesinhas, tripas, bifanas, and bacalhau in generous portions. The francesinha alone is worth the trip. Market eating at Bolhão is exceptional.", lisbon: "More diverse and international. Pastéis de Belém, seafood in Alfama, modern Portuguese cuisine in Príncipe Real. Better range of cuisines. Time Out Market is convenient but touristy.", winner: "Tie" },
  { category: "Wine", porto: "Port wine cellars are unique to Porto/Gaia — you can't do this anywhere else. The Douro Valley is 2.5 hours by train. Vinho verde is the local house wine. Wine culture is embedded in the city's identity.", lisbon: "Better access to wines from all Portuguese regions (Alentejo, Dão, Setúbal). Lisbon's wine bars are more diverse. But no equivalent to the Gaia cellar experience.", winner: "Porto" },
  { category: "Nightlife", porto: "Concentrated on one street (Rua da Galeria de Paris). Intimate, affordable (€3-5 drinks), and accessible. Less variety than Lisbon but easier to navigate. Starts late (11 PM+).", lisbon: "Larger, more diverse scene. Bairro Alto, Cais do Sodré, LX Factory. Clubs, rooftop bars, fado houses. More options but more spread out. Starts very late (midnight+).", winner: "Lisbon" },
  { category: "Beaches", porto: "Matosinhos (15 min by metro) and Foz do Douro. Decent but not stunning. Atlantic water is cold (16-19°C in summer). The coast is more dramatic than relaxing.", lisbon: "Cascais and Costa da Caparica are closer and better. Warmer water on the south bank. More beach infrastructure. Lisbon wins on beach quality.", winner: "Lisbon" },
  { category: "Day Trips", porto: "Douro Valley (stunning, wine-focused), Braga, Guimarães, Aveiro. Smaller cities with distinct character. Less crowded than Lisbon's day trips.", lisbon: "Sintra (magical palaces), Cascais (beach town), Óbidos (medieval walled town), Setúbal (dolphins + wine). More variety and spectacle.", winner: "Tie" },
  { category: "Architecture", porto: "Azulejo tiles everywhere. Granite and grit. Baroque churches dripping in gold. The riverfront is medieval. Feels ancient and authentic — Porto never tried to be modern.", lisbon: "Wider variety — Moorish, Manueline, Art Nouveau, contemporary. Belem Tower, Jerónimos Monastery. More grand and monumental. Post-earthquake rebuild gives it a different character.", winner: "Tie" },
  { category: "Vibe", porto: "Grittier, more authentic, less polished. Porto feels like it exists for its residents first. The pace is slower, the people are warmer (they'll argue about this), and the city hasn't been smoothed for tourism. What you see is real.", lisbon: "More cosmopolitan, more international, more polished. Seven hills, river views, trams, and a capital-city energy. More tourists, more expats, more English spoken. Feels like a European capital.", winner: "Depends on you" },
];

const faqs = [
  { question: "Should I visit Porto or Lisbon first?", answer: "Lisbon if you want the classic Portugal introduction — it's bigger, more international, and has more tourist infrastructure. Porto first if you want something more authentic and less polished. For a 10-day Portugal trip, do both: fly into Lisbon (3-4 days), train to Porto (3-4 days), fly home from Porto." },
  { question: "How far is Porto from Lisbon?", answer: "About 3 hours by high-speed train (Alfa Pendular, €25-35 one-way), 3.5 hours by car (A1 motorway), or 1 hour by plane (€30-80). The train is the best option — comfortable, scenic, and city-center to city-center." },
  { question: "Is Porto cheaper than Lisbon?", answer: "Yes, 20-30% cheaper on average. Hotels, restaurants, and wine tastings all cost less. The gap is biggest in accommodation — a €150 Lisbon hotel has a €100 equivalent in Porto. Day-to-day expenses (food, transport, activities) are €15-25/day cheaper." },
  { question: "Can I do both Porto and Lisbon in one trip?", answer: "Absolutely. A week splits perfectly: 3 days Lisbon + 3 days Porto + 1 day for the train journey (which is scenic and pleasant). 10 days adds day trips from each city. The Lisbon-Porto train is comfortable and runs 5+ times daily." },
  { question: "Which city is better for wine lovers?", answer: "Porto, definitively. The port wine cellar experience in Gaia is unique in the world. The Douro Valley day trip is a wine lover's dream. And vinho verde is Porto's house wine. Lisbon has better access to diverse Portuguese wine regions, but Porto has depth over breadth." },
];

const related = [
  { title: "3-Day Porto Itinerary", description: "The ideal Porto trip for most first-time visitors.", href: "/3-day-porto-itinerary", category: "Itinerary" },
  { title: "Lisbon to Porto Guide", description: "How to get between the two cities — train, car, or plane.", href: "/guides/lisbon-to-porto", category: "Travel" },
  { title: "Best Time to Visit Porto", description: "When to come for the best weather and lowest crowds.", href: "/guides/best-time-to-visit-porto", category: "Practical Guide" },
];

export default function PortoVsLisbonPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero category="Comparison" title="Porto vs Lisbon — Which Should You Visit?" subtitle="The honest answer: both. But if you have to choose, here's how they compare across 8 categories." lastVerified="April 2026" breadcrumbItems={[{ label: "Porto vs Lisbon" }]} />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <GuideSection label="Quick Answer" title="The 30-Second Version">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6 space-y-3">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-stone-800">Choose Porto if:</strong> you love wine, authentic food, walkable cities, and places that haven&apos;t been over-polished for tourism. Porto is grittier, cheaper, and feels more real.</p>
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-stone-800">Choose Lisbon if:</strong> you want more nightlife, better beaches, grander architecture, and a more cosmopolitan atmosphere. Lisbon has more variety and a bigger-city energy.</p>
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-stone-800">Best answer:</strong> Visit both. They&apos;re 3 hours apart by train. A week in Portugal splits perfectly between them.</p>
                </div>
              </ScrollReveal>
            </GuideSection>

            <GuideSection label="Head to Head" title="8-Category Comparison" description="Porto and Lisbon side by side — with honest winners.">
              <div className="space-y-6">
                {comparisons.map((c, i) => (
                  <ScrollReveal key={c.category} delay={i * 0.04}>
                    <div className="parchment-texture rounded-lg postcard-shadow overflow-hidden">
                      <div className="bg-cream px-5 py-3 border-b border-stone-200/50 flex items-center justify-between">
                        <h3 className="font-serif text-lg text-stone-800">{c.category}</h3>
                        <span className={`text-[10px] font-sans font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm ${c.winner === "Porto" ? "bg-terracotta/10 text-terracotta" : c.winner === "Lisbon" ? "bg-stone-200 text-stone-600" : "bg-stone-100 text-stone-500"}`}>
                          {c.winner === "Tie" ? "Tie" : c.winner === "Depends on you" ? "You decide" : `${c.winner} wins`}
                        </span>
                      </div>
                      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta mb-1">Porto</p>
                          <p className="text-stone-600 text-sm leading-relaxed">{c.porto}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">Lisbon</p>
                          <p className="text-stone-600 text-sm leading-relaxed">{c.lisbon}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              The Alfa Pendular train between Lisbon and Porto takes 3 hours, costs €25-35, and runs 5+ times daily. Book at <strong>cp.pt</strong> for the best prices. First class is worth the €10 upgrade — wider seats, quieter car, and free coffee.
            </ProTip>

            <GuideSection label="The Verdict" title="Final Score: Porto 3, Lisbon 2, Tie 3">
              <ScrollReveal>
                <div className="text-stone-600 text-sm leading-relaxed space-y-3">
                  <p>Porto wins on cost, wine, and vibe. Lisbon wins on nightlife and beaches. Food, day trips, and architecture are genuine ties.</p>
                  <p>But scores don&apos;t capture the feel. Porto is the friend who cooks you dinner at home — unpretentious, generous, and honest. Lisbon is the friend who takes you to the best restaurant in town — stylish, exciting, and a little more expensive. Both are worth your time.</p>
                  <p>If you have a week, do both. If you have a long weekend, Porto gives you more per day — the city is compact, walkable, and the wine cellars, food, and waterfront can fill 3 days without feeling rushed.</p>
                </div>
              </ScrollReveal>
            </GuideSection>

            <FAQSection faqs={faqs} />
            <GuideCTA title="Plan Your Porto Trip" description="Start with our 3-day itinerary — it covers the highlights that make Porto win this comparison." buttonText="See 3-Day Itinerary" href="/3-day-porto-itinerary" />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
