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
  title: "Is Porto Safe? 2026 Safety Guide for Tourists | Porto Itinerary",
  description: "Is Porto safe for tourists in 2026? Yes — it's one of Europe's safest cities. Here's what to know about neighborhoods, scams, solo travel, nightlife safety, and emergency contacts.",
  alternates: { canonical: "https://portoitinerary.com/guides/porto-safety-guide" },
  openGraph: { title: "Is Porto Safe? 2026 Safety Guide", description: "Porto is one of Europe's safest cities. Here's what to actually watch out for.", url: "https://portoitinerary.com/guides/porto-safety-guide", siteName: "Porto Itinerary", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Is Porto Safe? 2026 Safety Guide for Tourists", description: "A safety guide for tourists visiting Porto, covering neighborhoods, scams, and practical safety tips.", url: "https://portoitinerary.com/guides/porto-safety-guide", datePublished: "2026-04-25", dateModified: "2026-04-25", author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" }, publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" } };

const safetyTopics = [
  { title: "Overall Safety", content: "Porto is one of the safest cities in Western Europe. Portugal consistently ranks in the top 10 of the Global Peace Index. Violent crime against tourists is extremely rare. The biggest 'risks' are cobblestone-related ankle injuries and overindulging on port wine. Walk confidently, use common sense, and you'll have zero problems." },
  { title: "Pickpocketing & Petty Theft", content: "Rare but not unheard of, mainly on crowded Tram 1 (the Ribeira-Foz route), in the São Bento metro station during rush hour, and at the Ribeira waterfront late at night. Standard precautions: don't flash expensive phones on packed trams, keep valuables in front pockets, and use a cross-body bag. Leave passport copies in your hotel safe." },
  { title: "Scams to Know", content: "Porto has very few tourist scams compared to Barcelona or Rome. The main ones: restaurants on the Ribeira quay with 'tourist menus' at inflated prices (eat one street back instead), fake petitions on Rua de Santa Catarina (politely decline and walk away), and unlicensed 'guides' at São Bento station offering tours. If someone approaches you unsolicited, it's okay to say no." },
  { title: "Neighborhoods at Night", content: "Ribeira, Baixa, Vitória, and Galeria de Paris are busy and well-lit until late. Cedofeita and Foz are residential-quiet but safe. Bonfim and Fontainhas are fine during the day but dimly lit at night — stick to main streets. The area around São Bento station can feel rough after midnight, but it's more atmospheric than dangerous." },
  { title: "Solo Travel", content: "Porto is excellent for solo travelers. The city is compact and walkable, locals are friendly (especially in tascas), and the hostel scene is social. Solo women report feeling very safe — Porto lacks the street harassment common in some Southern European cities. Wine cellar tours are solo-friendly, and sitting alone at restaurant counters is normal here." },
  { title: "Nightlife Safety", content: "Rua da Galeria de Paris is Porto's nightlife street. It gets crowded and loud on Friday-Saturday after 11 PM. Drinks are cheap (€3-5), which means over-serving happens. The street itself is safe — police patrol regularly. Taxis and Bolt/Uber are easy to get at 2 AM. Don't walk alone through the steep lanes between Vitória and Ribeira late at night — take the lit, main roads." },
  { title: "The Hills & Cobblestones", content: "This is Porto's real safety hazard. The city is built on steep granite hillsides with uneven cobblestone surfaces. Wear proper shoes with grip — flip-flops and smooth-soled shoes are a recipe for a fall. The lanes from Vitória down to Ribeira are particularly steep. After rain, cobblestones become slippery. Take your time, especially at night." },
  { title: "Health & Emergencies", content: "Tap water is safe to drink everywhere. The European emergency number is 112 (fire, police, ambulance). Hospital de Santo António is the main central hospital. Pharmacies (farmácias) have green cross signs and can provide basic medical advice. Most pharmacists speak English. Bring your European Health Insurance Card (EHIC) or travel insurance." },
];

const faqs = [
  { question: "Is Porto safe for solo female travelers?", answer: "Very safe. Porto is one of Europe's best solo female travel destinations. The city is compact, well-lit in tourist areas, and locals are genuinely helpful. The hostel scene is social and welcoming. Use standard precautions (as you would anywhere), but Porto doesn't require hypervigilance." },
  { question: "Is Porto safe at night?", answer: "Yes. The main tourist and nightlife areas (Ribeira, Baixa, Vitória, Galeria de Paris) are busy and safe until late. Avoid walking alone through poorly lit side streets between neighborhoods after midnight — take main roads or a quick Uber instead." },
  { question: "What's the emergency number in Porto?", answer: "112 — the universal European emergency number. It connects to police, fire, and ambulance. English-speaking operators are available. For non-emergency police, visit the PSP station on Rua do Almada in Baixa." },
  { question: "Do I need travel insurance for Porto?", answer: "EU/UK citizens should bring their EHIC/GHIC card for public healthcare. Non-EU travelers should have travel insurance — private healthcare is excellent but expensive. Most pharmacies can handle minor issues without a doctor visit." },
  { question: "Are taxis safe in Porto?", answer: "Yes. Licensed taxis are metered and regulated. Bolt and Uber are widely available and often cheaper. Both are safe at all hours. Avoid unlicensed cars offering rides near nightlife areas — use the app instead." },
];

const related = [
  { title: "Porto Neighborhoods Guide", description: "Know which neighborhoods to explore — and when.", href: "/guides/porto-neighborhoods", category: "Practical Guide" },
  { title: "Getting Around Porto", description: "Transport options so you can avoid dark walks.", href: "/guides/getting-around-porto", category: "Practical Guide" },
  { title: "Porto Nightlife Guide", description: "Where to go out safely — bars, clubs, and timing.", href: "/guides/porto-nightlife-guide", category: "Lifestyle" },
];

export default function SafetyPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero category="Practical Guide" title="Is Porto Safe?" subtitle="Yes — it's one of Europe's safest cities. But cobblestones will get you if port wine doesn't." lastVerified="April 2026" breadcrumbItems={[{ label: "Safety Guide" }]} />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <GuideSection label="Quick Answer" title="The Short Version">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <p className="text-stone-600 text-sm leading-relaxed">
                    <strong className="text-stone-800">Porto is very safe.</strong> Portugal ranks in the top 10 of the Global Peace Index. Violent crime against tourists is essentially unheard of. The biggest real risks are twisted ankles on cobblestones and sunburn on the Gaia terrace. Use normal big-city awareness and you&apos;ll be fine.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            <GuideSection label="Details" title="Safety by Topic" description="Neighborhoods, scams, nightlife, solo travel, and the real hazard — cobblestones.">
              <div className="space-y-4">
                {safetyTopics.map((t, i) => (
                  <ScrollReveal key={t.title} delay={i * 0.04}>
                    <div className="py-4 border-b border-stone-100 last:border-0">
                      <h3 className="font-serif text-lg text-stone-800 mb-2">{t.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{t.content}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="warning">
              The single most common tourist injury in Porto: <strong>falling on cobblestones</strong>. Wear shoes with rubber soles and good grip. Avoid smooth leather soles, heels, and flip-flops on Porto&apos;s steep, uneven streets — especially after rain or after wine.
            </ProTip>

            <FAQSection faqs={faqs} />
            <GuideCTA title="Plan Your Safe Trip" description="Our itineraries route you through well-lit, tourist-friendly areas with restaurant picks in safe neighborhoods." buttonText="See Itineraries" href="/itineraries" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
