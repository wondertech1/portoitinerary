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
  title: "Porto Card 2026 — Is It Worth It? (We Did the Math) | Porto Itinerary",
  description: "Is the Porto Card worth buying in 2026? We break down the cost, what's included, and do the day-by-day math for 1, 2, 3, and 4-day cards. Honest verdict inside.",
  alternates: { canonical: "https://portoitinerary.com/guides/porto-card-worth-it" },
  openGraph: { title: "Porto Card 2026 — Is It Worth It?", description: "Day-by-day math on whether the Porto Card saves money. Spoiler: it depends on your itinerary.", url: "https://portoitinerary.com/guides/porto-card-worth-it", siteName: "Porto Itinerary", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Porto Card 2026 — Is It Worth It? (We Did the Math)", description: "A cost analysis of the Porto Card tourist pass.", url: "https://portoitinerary.com/guides/porto-card-worth-it", datePublished: "2026-04-25", dateModified: "2026-04-25", author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" }, publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" } };

const prices = [
  { duration: "1-day", withTransport: "€13", withoutTransport: "€6" },
  { duration: "2-day", withTransport: "€20", withoutTransport: "€10" },
  { duration: "3-day", withTransport: "€25", withoutTransport: "€13" },
  { duration: "4-day", withTransport: "€33", withoutTransport: "€15" },
];

const scenarios = [
  { traveler: "The Walker (Budget)", days: 3, activities: "Clérigos Tower (€8), São Francisco (€9), Cathedral cloister (€3), free viewpoints, Bolhão Market", transport: "Walk everything", normalCost: "€20", cardCost: "€13 (without transport)", savings: "€7 saved", verdict: "Worth it — the card pays for itself with just Clérigos + São Francisco, and you get discounts on wine cellars too." },
  { traveler: "The Wine Lover", days: 3, activities: "Clérigos (€8), Taylor's tasting (€15-25), Graham's tasting (€15-20), São Francisco (€9), Serralves (€20)", transport: "Metro to airport, Tram 1, metro to Jardim do Morro", normalCost: "€67-82 activities + €10 transport", cardCost: "€25 (with transport) + reduced cellar prices", savings: "€25-35 saved", verdict: "Definitely worth it — the transport alone plus museum discounts add up fast. Wine cellar discounts (usually 10-15%) are a bonus." },
  { traveler: "The Minimalist", days: 2, activities: "Clérigos Tower (€8), one wine cellar (€15), walking only", transport: "Walk everything", normalCost: "€23", cardCost: "€10 (without transport)", savings: "€13 saved", verdict: "Marginal — you save €13 which isn't life-changing, but the math still works in your favor." },
  { traveler: "The Free-Stuff Lover", days: 3, activities: "Only free attractions (viewpoints, markets, bridges, street art, churches)", transport: "Walk everything", normalCost: "€0", cardCost: "€13", savings: "€13 lost", verdict: "Not worth it — if you're only visiting free attractions, the card is a waste. Porto has enough free experiences to fill 3 days easily." },
];

const faqs = [
  { question: "What does the Porto Card include?", answer: "Free entry to 6 museums (Serralves, Soares dos Reis, Tram Museum, etc.), free public transport (with transport version), and 10-50% discounts at 150+ attractions, restaurants, wine cellars, and shops. It does NOT include Clérigos Tower, São Francisco, or Palácio da Bolsa — but gives 10-25% discounts on them." },
  { question: "Where do I buy the Porto Card?", answer: "Online at portocard.city (delivered to your phone), at Porto airport arrivals, at the main tourist office on Rua Clube dos Fenianos, or at São Bento station. Online purchase is cheapest and fastest — activate when you're ready to start using it." },
  { question: "Does the Porto Card include wine cellar tastings?", answer: "Not free entry, but most Gaia cellars offer 10-15% off with the card. Taylor's, Graham's, Sandeman, and Ferreira all participate. The discount applies to premium tastings too — so a €25 tasting becomes ~€22." },
  { question: "Is the transport version worth the extra cost?", answer: "If you plan to use the metro to/from the airport (€2.50 each way), take Tram 1 to Foz (€3.50), or ride the metro to Matosinhos (€1.50), the transport version pays for itself quickly. If you're only walking, skip it." },
  { question: "Can I use the Porto Card in Vila Nova de Gaia?", answer: "Yes — Gaia wine cellars accept it for discounts, and the metro (included in transport version) serves Gaia via Line D. The Teleférico de Gaia (cable car) also offers a discount with the card." },
];

const related = [
  { title: "Porto on a Budget", description: "More money-saving strategies beyond the Porto Card.", href: "/guides/porto-on-a-budget", category: "Practical Guide" },
  { title: "Getting Around Porto", description: "Metro, tram, bus — how transport works.", href: "/guides/getting-around-porto", category: "Practical Guide" },
];

export default function PortoCardPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero category="Practical Guide" title="Porto Card — Is It Worth It?" subtitle="We did the math for 4 different traveler types. The answer isn't always yes." lastVerified="April 2026" breadcrumbItems={[{ label: "Porto Card" }]} />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <GuideSection label="Quick Answer" title="The 10-Second Verdict">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6 space-y-2">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-stone-800">Worth it if:</strong> you plan to visit 2+ paid attractions AND use public transport. The 3-day card with transport (€25) is the sweet spot.</p>
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-stone-800">Not worth it if:</strong> you&apos;re only visiting free attractions (viewpoints, markets, bridges, street art) and walking everywhere. Porto has plenty of free experiences.</p>
                </div>
              </ScrollReveal>
            </GuideSection>

            <GuideSection label="Prices" title="Porto Card Prices 2026">
              <ScrollReveal>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs font-sans border-collapse">
                    <thead><tr className="border-b border-stone-200">
                      <th className="text-left py-3 pr-4 text-stone-500 font-medium tracking-wider uppercase">Duration</th>
                      <th className="text-center py-3 px-3 text-stone-500 font-medium tracking-wider uppercase">With Transport</th>
                      <th className="text-center py-3 px-3 text-stone-500 font-medium tracking-wider uppercase">Without Transport</th>
                    </tr></thead>
                    <tbody className="text-stone-600">
                      {prices.map((p) => (
                        <tr key={p.duration} className="border-b border-stone-100">
                          <td className="py-2.5 pr-4 font-medium text-stone-700">{p.duration}</td>
                          <td className="py-2.5 px-3 text-center">{p.withTransport}</td>
                          <td className="py-2.5 px-3 text-center">{p.withoutTransport}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            </GuideSection>

            <GuideSection label="The Math" title="4 Traveler Scenarios" description="Real itineraries, real costs, honest verdicts.">
              <div className="space-y-5">
                {scenarios.map((s, i) => (
                  <ScrollReveal key={s.traveler} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <h3 className="font-serif text-lg text-stone-800 mb-1">{s.traveler} — {s.days} Days</h3>
                      <p className="text-stone-500 text-xs mb-3">{s.activities}</p>
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        <div><p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-0.5">Without Card</p><p className="text-stone-700 text-sm font-medium">{s.normalCost}</p></div>
                        <div><p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-0.5">With Card</p><p className="text-terracotta text-sm font-medium">{s.cardCost}</p></div>
                        <div><p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-0.5">Result</p><p className="text-stone-700 text-sm font-medium">{s.savings}</p></div>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed">{s.verdict}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="money-saver">Buy the card online before your trip — it&apos;s delivered digitally and you activate it when you&apos;re ready. Don&apos;t activate on your arrival day if you&apos;re just going to the hotel. Activate on your first full sightseeing day.</ProTip>
            <GuideCTA title="Plan What You'll Visit" description="Our itineraries list every attraction with costs — use them to calculate if the card works for you." buttonText="See Itineraries" href="/itineraries" />
            <FAQSection faqs={faqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
