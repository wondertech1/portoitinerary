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
import {
  visitInfo,
  tips,
  nearbyAttractions,
  lelloFaqs,
} from "@/data/guides/livraria-lello";

export const metadata: Metadata = {
  title:
    "Livraria Lello Guide 2026 — Porto's Famous Bookshop | Porto Itinerary",
  description:
    "How to visit Livraria Lello without the crowds. Tickets, best time, photo tips, the Harry Potter connection, and whether it's worth the €8 entry — honest take.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/livraria-lello-guide",
  },
  openGraph: {
    title: "Livraria Lello Guide 2026 — Porto's Famous Bookshop",
    description:
      "Tickets, best time to visit, photo tips, and the Harry Potter connection. A practical guide to Porto's iconic Neo-Gothic bookshop.",
    url: "https://portoitinerary.com/guides/livraria-lello-guide",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Livraria Lello Guide 2026 — Porto's Famous Bookshop",
  description:
    "A practical guide to visiting Livraria Lello — tickets, timing, photo tips, and what to expect inside Porto's iconic bookshop.",
  url: "https://portoitinerary.com/guides/livraria-lello-guide",
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  author: {
    "@type": "Person",
    name: "Porto Itinerary",
    url: "https://portoitinerary.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Porto Itinerary",
    url: "https://portoitinerary.com",
  },
};

const related = [
  {
    title: "Best Viewpoints in Porto",
    description:
      "The city looks different from every miradouro. Here are the ones worth the climb.",
    href: "/guides/best-viewpoints-porto",
    category: "Attraction Guide",
  },
  {
    title: "Porto Neighborhoods Guide",
    description:
      "From Ribeira to Foz — understand how the city fits together before you explore.",
    href: "/guides/porto-neighborhoods",
    category: "Practical Guide",
  },
  {
    title: "Best Azulejo Tiles in Porto",
    description:
      "The blue-and-white tiles are everywhere. These are the ones that stopped us in our tracks.",
    href: "/guides/best-azulejo-tiles-porto",
    category: "Attraction Guide",
  },
];

export default function LivrariaLelloGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Attraction Guide"
          title="Livraria Lello"
          subtitle="Porto's Neo-Gothic bookshop is as dramatic as you've heard — and yes, it's worth the ticket price."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Livraria Lello Guide" }]}
        />
        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Quick Visit Info */}
            <GuideSection label="Essentials" title="Quick Visit Info">
              <ScrollReveal>
                <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-stone-400 uppercase tracking-wider text-xs font-medium">
                        Address
                      </span>
                      <p className="text-stone-700 mt-0.5">
                        {visitInfo.address}
                      </p>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase tracking-wider text-xs font-medium">
                        Hours
                      </span>
                      <p className="text-stone-700 mt-0.5">
                        {visitInfo.hours}
                      </p>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase tracking-wider text-xs font-medium">
                        Ticket Price
                      </span>
                      <p className="text-stone-700 mt-0.5">
                        {visitInfo.ticketPrice}
                      </p>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase tracking-wider text-xs font-medium">
                        Nearest Metro
                      </span>
                      <p className="text-stone-700 mt-0.5">
                        {visitInfo.nearestMetro}
                      </p>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase tracking-wider text-xs font-medium">
                        Best Time to Visit
                      </span>
                      <p className="text-stone-700 mt-0.5">
                        {visitInfo.bestTime}
                      </p>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase tracking-wider text-xs font-medium">
                        Average Visit
                      </span>
                      <p className="text-stone-700 mt-0.5">
                        {visitInfo.avgVisitDuration}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200">
                    <a
                      href={visitInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terracotta text-sm hover:underline"
                    >
                      livrarialello.pt &rarr;
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* The History */}
            <GuideSection
              label="History"
              title="The Story Behind the Staircase"
              description="Over a century of books, beauty, and reinvention."
            >
              <ScrollReveal>
                <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
                  <p>
                    Livraria Lello opened in 1906 on Rua das Carmelitas, founded
                    by brothers Jos&eacute; and Ant&oacute;nio Lello. But the
                    building&apos;s story starts earlier &mdash; the site was
                    home to the Chardron bookshop, one of Porto&apos;s
                    established literary retailers. The Lello brothers acquired
                    Chardron and commissioned the architect Francisco Xavier
                    Esteves to create something entirely new.
                  </p>
                  <p>
                    What Esteves delivered was extraordinary for a bookshop. The
                    Neo-Gothic fa&ccedil;ade, the carved wood interior, the
                    sweeping crimson staircase that splits and rejoins &mdash; it
                    was designed to make buying a book feel like entering a
                    cathedral. The stained-glass skylight floods the upper
                    gallery with colored light. The plasterwork ceiling imitates
                    carved wood so convincingly that most visitors never notice
                    the difference.
                  </p>
                  <p>
                    The bookshop survived two world wars, a revolution, and
                    decades of quiet decline before its rediscovery in the 2000s
                    turned it into one of Porto&apos;s most visited landmarks.
                    Today it sells around 100,000 books a year and welcomes over
                    a million visitors &mdash; a working bookshop that happens to
                    double as a monument.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Harry Potter Connection */}
            <GuideSection
              label="The Debate"
              title="The Harry Potter Connection"
              description="What we know, what we don't, and what's probably marketing."
            >
              <ScrollReveal>
                <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
                  <p>
                    Here&apos;s what&apos;s true: J.K. Rowling lived in Porto
                    from 1991 to 1993, teaching English at night and writing her
                    first novel during the day. She frequented Porto&apos;s
                    caf&eacute;s, married a Portuguese journalist, and was deeply
                    embedded in the city during the period she conceived Harry
                    Potter.
                  </p>
                  <p>
                    Here&apos;s what&apos;s debated: whether Livraria Lello
                    directly inspired the Hogwarts staircase or Flourish and
                    Blotts. The sweeping red staircase does look strikingly like
                    something from the wizarding world, and Rowling almost
                    certainly visited the shop during her years in Porto. But she
                    has never publicly confirmed the connection. Some Potter
                    scholars point to other inspirations entirely.
                  </p>
                  <p>
                    Our honest take? The bookshop doesn&apos;t need the Harry
                    Potter association to be impressive. The architecture speaks
                    for itself. If the connection adds a layer of magic for you,
                    enjoy it &mdash; but don&apos;t feel cheated if it turns out
                    to be a beautiful coincidence amplified by smart marketing.
                  </p>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Photo Tips */}
            <GuideSection
              label="Photography"
              title="Photo Tips for Livraria Lello"
              description="The staircase is as dramatic as you've heard. Getting a good shot is the hard part."
            >
              <ScrollReveal>
                <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
                  <div className="flex items-start gap-3 py-2 border-b border-stone-100">
                    <span className="font-serif text-terracotta flex-shrink-0 w-6 mt-0.5 font-medium">
                      1
                    </span>
                    <p>
                      <strong className="text-stone-700">
                        The staircase from above.
                      </strong>{" "}
                      Head to the upper gallery and shoot down through the curved
                      railings. This is the classic angle &mdash; the red
                      staircase spiraling below you, framed by carved wood.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 py-2 border-b border-stone-100">
                    <span className="font-serif text-terracotta flex-shrink-0 w-6 mt-0.5 font-medium">
                      2
                    </span>
                    <p>
                      <strong className="text-stone-700">
                        The staircase from below.
                      </strong>{" "}
                      Stand at the base and look up. The way the two flights
                      converge overhead, with the stained-glass ceiling beyond,
                      is the most vertigo-inducing shot in the building.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 py-2 border-b border-stone-100">
                    <span className="font-serif text-terracotta flex-shrink-0 w-6 mt-0.5 font-medium">
                      3
                    </span>
                    <p>
                      <strong className="text-stone-700">
                        The stained-glass skylight.
                      </strong>{" "}
                      Most people forget to look up. The Art Nouveau ceiling is
                      worth a dedicated photo &mdash; use a wide-angle lens or
                      your phone&apos;s ultra-wide.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 py-2 border-b border-stone-100">
                    <span className="font-serif text-terracotta flex-shrink-0 w-6 mt-0.5 font-medium">
                      4
                    </span>
                    <p>
                      <strong className="text-stone-700">
                        Details and textures.
                      </strong>{" "}
                      The carved wood panels, brass rail fittings, and ornate
                      column capitals reward close-up shots. These work well
                      even when the shop is crowded.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <span className="font-serif text-terracotta flex-shrink-0 w-6 mt-0.5 font-medium">
                      5
                    </span>
                    <p>
                      <strong className="text-stone-700">
                        The fa&ccedil;ade from across the street.
                      </strong>{" "}
                      The Neo-Gothic exterior is beautiful in its own right,
                      especially in late afternoon light when the stone turns
                      warm gold. Easy to miss when you&apos;re focused on
                      getting inside.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </GuideSection>

            {/* Practical Tips */}
            <GuideSection
              label="Tips"
              title="Practical Tips for Your Visit"
              description="Hard-won advice from multiple visits."
            >
              <div className="space-y-3">
                {tips.map((tip, i) => (
                  <ScrollReveal key={tip.title} delay={i * 0.04}>
                    <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif text-terracotta text-sm flex-shrink-0 w-6 mt-0.5 font-medium">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-stone-700 text-sm font-medium">
                          {tip.title}
                        </p>
                        <p className="text-stone-500 text-sm leading-relaxed mt-1">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Buy your ticket online the day before &mdash; it&apos;s the same
              price, but you get a timed entry slot that lets you skip the
              walk-up queue. Morning slots (9:00&ndash;9:30) sell out fastest, so
              book early. Your &euro;8 voucher works on{" "}
              <strong>any book in the shop</strong>, including discounted titles
              and Portuguese editions.
            </ProTip>

            <ProTip variant="warning">
              Midday crowds are no joke. Between 11:00 and 15:00 on weekends,
              the staircase becomes a slow-moving queue of people taking selfies.
              If you&apos;re claustrophobic or just want to actually enjoy the
              space, avoid this window entirely. The last hour before closing is
              your second-best option after the morning slot.
            </ProTip>

            {/* Nearby Attractions */}
            <GuideSection
              label="Nearby"
              title="What to See After Lello"
              description="Everything worth visiting within a 10-minute walk."
            >
              <div className="space-y-3">
                {nearbyAttractions.map((place, i) => (
                  <ScrollReveal key={place.name} delay={i * 0.04}>
                    <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                      <div className="flex-shrink-0 mt-1">
                        <span className="inline-block px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] uppercase tracking-wider rounded font-medium">
                          {place.type}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <p className="text-stone-700 text-sm font-medium">
                            {place.name}
                          </p>
                          <span className="text-stone-400 text-xs">
                            {place.distance}
                          </span>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed mt-1">
                          {place.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <GuideCTA
              title="Plan Your Porto Day"
              description="Livraria Lello fits perfectly into a morning in central Porto. See our itineraries for the full picture."
              buttonText="See Itineraries"
              href="/itineraries"
            />
            <FAQSection faqs={lelloFaqs} />
            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
