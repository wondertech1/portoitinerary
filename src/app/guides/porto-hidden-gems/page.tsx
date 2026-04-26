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
  title: "Porto Hidden Gems 2026 — 12 Places Most Tourists Miss | Porto Itinerary",
  description: "The Porto spots that don't make the top-10 lists. From cliffside Fontainhas to a secret viewpoint, a church made of bones, and the street where Porto artists live.",
  alternates: { canonical: "https://portoitinerary.com/guides/porto-hidden-gems" },
  openGraph: { title: "Porto Hidden Gems 2026 — 12 Places Most Tourists Miss", description: "Beyond Ribeira and Clérigos — the Porto that locals love and guidebooks skip.", url: "https://portoitinerary.com/guides/porto-hidden-gems", siteName: "Porto Itinerary", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Porto Hidden Gems 2026 — 12 Places Most Tourists Miss", description: "Off-the-beaten-path Porto: 12 places that most tourists never find.", url: "https://portoitinerary.com/guides/porto-hidden-gems", datePublished: "2026-04-25", dateModified: "2026-04-25", author: { "@type": "Person", name: "Porto Itinerary", url: "https://portoitinerary.com/about" }, publisher: { "@type": "Organization", name: "Porto Itinerary", url: "https://portoitinerary.com" } };

const gems = [
  { name: "Fontainhas & Escadas do Codeçal", category: "Neighborhood", neighborhood: "Fontainhas", description: "Porto's most dramatic residential area clings to a near-vertical cliff above the Douro. Houses painted in deep reds, yellows, and blues cascade down the hillside. Walk the Escadas do Codeçal stairway from top to bottom — the view of the bridge and river from here is Porto's most photogenic angle, and you'll have it almost to yourself.", why: "95% of tourists see the Ribeira from below. Fontainhas shows you Porto's vertical dimension — the cliffside city that existed before railings and safety codes." },
  { name: "Miradouro da Vitória", category: "Viewpoint", neighborhood: "Vitória", description: "A west-facing viewpoint near Clérigos Tower that most tourists walk right past. While hundreds crowd Jardim do Morro at sunset, this smaller terrace offers equally stunning views with a fraction of the people. The light hitting the rooftops and the Douro below is extraordinary.", why: "Jardim do Morro is social. Miradouro da Vitória is contemplative. Different moods, equally beautiful." },
  { name: "Bonfim Street Art", category: "Art", neighborhood: "Bonfim", description: "Porto's emerging neighborhood is covered in street art that rivals Cedofeita — but without the gallery-polished feel. Look for Hazul Luzah's geometric faces scattered across building walls. Walk Rua do Bonfim and its side streets. The art here is political, personal, and genuinely local — not curated for Instagram.", why: "Cedofeita's art is increasingly commercial. Bonfim's is still raw, unsponsored, and evolving." },
  { name: "Livraria Chaminé da Mota", category: "Culture", neighborhood: "Baixa", description: "While tourists queue for Livraria Lello, this second-hand bookshop on Rua do Bonjardim has stacks of old Portuguese books, maps, and prints at prices that haven't changed since the 1990s. The owner is an encyclopaedia of Porto history. Ask about anything and prepare for a 30-minute lesson.", why: "Lello is a €8 tourist attraction. Chaminé da Mota is a bookshop that happens to be wonderful." },
  { name: "Mercado do Bom Sucesso", category: "Food", neighborhood: "Boavista", description: "While everyone goes to Bolhão Market (rightly), this Art Deco food hall near Casa da Música is where Porto office workers eat lunch. Gourmet stalls, wine bars, and communal tables. Less atmospheric than Bolhão but better for actually sitting down and eating a proper meal.", why: "Bolhão is for browsing. Bom Sucesso is for eating." },
  { name: "Jardim Botânico do Porto", category: "Nature", neighborhood: "Massarelos", description: "A peaceful botanical garden between the city center and Foz. Tropical greenhouses, cactus gardens, and shaded paths. Almost no tourists despite the small entry fee (€3-4). The perfect antidote to Porto's granite and cobblestone.", why: "Porto's green spaces are underrated. This one is practically empty on weekday mornings." },
  { name: "Rua de Cedofeita (the real one)", category: "Shopping", neighborhood: "Cedofeita", description: "Most guides mention Rua Miguel Bombarda for galleries. But the actual Rua de Cedofeita — the long pedestrian street — has Porto's best independent shopping: vintage clothing, record stores, Portuguese design shops, and local bakeries that haven't been discovered by food bloggers yet.", why: "Miguel Bombarda is where tourists go for art. Cedofeita street is where locals go for everything else." },
  { name: "São Francisco Church Catacombs", category: "Culture", neighborhood: "Ribeira", description: "Everyone mentions São Francisco's golden interior. Fewer mention the bone-lined catacombs beneath. Centuries of burials in underground vaults — skulls visible through glass panels. It's macabre, fascinating, and a stark contrast to the gold excess above.", why: "The church entrance fee includes the catacombs, but many visitors skip them. Don't." },
  { name: "Passeio das Virtudes", category: "Viewpoint", neighborhood: "Miragaia", description: "A terraced garden with Douro views, popular with local students in the evening. Bring wine and sit on the stone walls. The view isn't as famous as Jardim do Morro but the atmosphere is more authentic — Portuguese guitars, cheap wine, and no tourist groups.", why: "This is where Porto university students have been watching sunsets for decades." },
  { name: "Miragaia Neighborhood Walk", category: "Neighborhood", neighborhood: "Miragaia", description: "Porto's quietest riverside neighborhood, between Ribeira and Foz. Narrow lanes, traditional tascas with no English menus, and a pace of life decades behind the rest of the city. Walk the waterfront, peek into tiny shops, and eat at whatever tasca has the most locals inside.", why: "Miragaia is what Ribeira was before tourism. It won't stay this quiet forever." },
  { name: "Centro Português de Fotografia", category: "Culture", neighborhood: "Vitória", description: "A free photography museum inside a former prison. The building itself — with its cell blocks and watchtower — is as interesting as the rotating exhibitions. On Rua da Restauração, 5 minutes from Clérigos, but invisible to most visitors.", why: "Free, excellent, and in a converted prison. The architecture alone is worth 30 minutes." },
  { name: "Rua de Santa Catarina at 8 AM", category: "Experience", neighborhood: "Bolhão", description: "Porto's main shopping street is chaotic during the day. But arrive at 8 AM on a weekday morning and it's a different world — shopkeepers opening iron shutters, café owners arranging chairs, and the Chapel of Souls azulejos catching the first light without a single tourist in front of them.", why: "The same place, experienced at the right time, becomes hidden in plain sight." },
];

const faqs = [
  { question: "Where can I find street art in Porto?", answer: "Bonfim (most authentic, Hazul Luzah murals), Cedofeita/Miguel Bombarda (gallery-adjacent), and Fontainhas (scattered pieces on cliffside buildings). Walk with your eyes up — Porto's street art is on upper floors and side walls, not at eye level." },
  { question: "What are the least touristy neighborhoods in Porto?", answer: "Bonfim, Miragaia, and Campanhã. Bonfim is emerging (street art, young locals). Miragaia is timeless (quiet waterfront, traditional tascas). Campanhã is industrial-turned-creative. All are walkable from the center." },
  { question: "Are there free things to do in Porto?", answer: "Plenty: viewpoints (Vitória, Jardim do Morro, Fontainhas), São Bento Station azulejos, Bolhão Market, street art walks, Jardim Botânico, Centro Português de Fotografia, church exteriors, and walking the bridge. Porto's best experiences are largely free." },
];

const related = [
  { title: "Porto Neighborhoods Guide", description: "The full picture of every neighborhood — not just the hidden parts.", href: "/guides/porto-neighborhoods", category: "Practical Guide" },
  { title: "Best Viewpoints in Porto", description: "7 miradouros ranked — including the hidden ones on this list.", href: "/guides/best-viewpoints-porto", category: "Practical Guide" },
  { title: "5-Day Porto Itinerary", description: "Days 4-5 cover Bonfim, Fontainhas, and Miragaia.", href: "/5-day-porto-itinerary", category: "Itinerary" },
];

export default function HiddenGemsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero category="Exploration" title="Porto Hidden Gems — 12 Places Most Tourists Miss" subtitle="The Porto that exists between the top-10 attractions. No Clérigos Tower. No Ribeira quay. Just the city itself." lastVerified="April 2026" breadcrumbItems={[{ label: "Hidden Gems" }]} />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <GuideSection label="The Gems" title="12 Spots You Won't Find in Most Guides" description="Some are places. Some are experiences. All are real.">
              <div className="space-y-5">
                {gems.map((g, i) => (
                  <ScrollReveal key={g.name} delay={i * 0.04}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-serif text-xl text-stone-800">{g.name}</h3>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm flex-shrink-0">{g.category}</span>
                      </div>
                      <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">{g.neighborhood}</p>
                      <p className="text-stone-600 text-sm leading-relaxed mb-2">{g.description}</p>
                      <p className="text-stone-500 text-xs italic">{g.why}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>
            <ProTip variant="local-secret">The best hidden gem in Porto isn&apos;t a place — it&apos;s a time. Visit any famous spot at 8 AM or during lunch hour (12:30-14:00) and it transforms. São Bento, Capela das Almas, even the bridge — emptiness reveals details that crowds obscure.</ProTip>
            <FAQSection faqs={faqs} />
            <RelatedContent items={related} />
            <GuideCTA title="Go Beyond the Highlights" description="Our 5-day itinerary includes Bonfim, Fontainhas, and Miragaia — the hidden Porto most visitors skip." buttonText="See 5-Day Itinerary" href="/5-day-porto-itinerary" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
