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
  transportOptions,
  quintas,
  douroFaqs,
} from "@/data/guides/douro-valley";

export const metadata: Metadata = {
  title:
    "Douro Valley Day Trip from Porto 2026 — Train, Wineries & Complete Guide | Porto Itinerary",
  description:
    "How to visit the Douro Valley from Porto in one day. Train vs car vs tour comparison, best quintas to visit, where to eat, and a complete timeline for 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/douro-valley-day-trip",
  },
  openGraph: {
    title: "Douro Valley Day Trip from Porto 2026 — Complete Guide",
    description:
      "Train ride, vineyard visits, and Douro wines. How to get there, which quintas to visit, and where to eat with valley views.",
    url: "https://portoitinerary.com/guides/douro-valley-day-trip",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Douro Valley Day Trip from Porto 2026 — Train, Wineries & Complete Guide",
  description:
    "A complete guide to visiting the Douro Valley from Porto in one day, with transport options, quinta recommendations, and a suggested timeline.",
  url: "https://portoitinerary.com/guides/douro-valley-day-trip",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
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
    title: "Port Wine Cellars Guide",
    description: "8 Gaia cellars compared — the urban counterpart to Douro quintas.",
    href: "/guides/port-wine-cellars-guide",
    category: "Wine Guide",
  },
  {
    title: "5-Day Porto Itinerary",
    description: "Day 4 is a full Douro Valley day trip — perfectly timed.",
    href: "/5-day-porto-itinerary",
    category: "Itinerary",
  },
];

export default function DouroValleyPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Wine Guide"
          title="Douro Valley Day Trip from Porto"
          subtitle="Terraced vineyards, river views, and the birthplace of port wine — all reachable by train in 2.5 hours."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "Douro Valley" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <GuideSection
              label="Overview"
              title="Why Visit the Douro Valley?"
              description="The Douro Valley is where port wine begins — and where Porto's story makes sense."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The Douro Valley is a UNESCO World Heritage landscape — 2,000 years of
                    terraced vineyards carved into schist hillsides above the river. This is
                    where the grapes grow, where the wine is made, and where port gets its
                    character before being shipped downstream to Gaia for aging. Visiting a
                    Douro quinta after tasting in Gaia&apos;s cellars completes the circle.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The train ride from Porto to Pinhão is one of Europe&apos;s most beautiful
                    rail journeys — the tracks follow the Douro through tunnels blasted into
                    granite, past quintas clinging to impossible slopes, and alongside the river
                    that turns from urban to wild in under an hour. Even if you don&apos;t care
                    about wine, the landscape alone justifies the trip.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    A day trip works — you can catch the 8:15 train, visit one or two quintas,
                    have lunch with valley views, and be back in Porto for a late dinner. But if
                    you have the flexibility, an overnight stay at a quinta transforms the
                    experience entirely.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            {/* Transport comparison */}
            <GuideSection
              label="Getting There"
              title="Train vs Car vs Tour"
              description="Three ways to reach the Douro. Here's the honest comparison."
            >
              <div className="space-y-6">
                {transportOptions.map((option, i) => (
                  <ScrollReveal key={option.method} delay={i * 0.06}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <h3 className="font-serif text-xl text-stone-800 mb-1">
                        {option.method}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                          {option.price}
                        </span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {option.duration}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        <div>
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                            Pros
                          </p>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {option.pros}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                            Cons
                          </p>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {option.cons}
                          </p>
                        </div>
                      </div>
                      <p className="text-stone-700 text-sm leading-relaxed">
                        <span className="font-medium">Verdict:</span>{" "}
                        {option.verdict}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Book train tickets at{" "}
              <strong>cp.pt</strong> (Comboios de Portugal). The route is Porto
              São Bento → Peso da Régua → Pinhão. You may need to change at
              Régua. Sit on the right side heading east for the best river views.
            </ProTip>

            {/* Timeline */}
            <GuideSection
              label="Timeline"
              title="Suggested Day Trip Schedule"
              description="A realistic timeline by train — adjust if driving."
            >
              <div className="space-y-3">
                {[
                  { time: "8:15 AM", activity: "Train departs Porto São Bento", detail: "Grab coffee and a pastel de nata at the station. The first hour follows the Douro through urban Porto and Gaia suburbs." },
                  { time: "9:30 AM", activity: "Landscape transforms at Peso da Régua", detail: "After Régua, the valley narrows dramatically. Terraced vineyards appear on both banks. This is the scenic stretch — have your camera ready." },
                  { time: "10:45 AM", activity: "Arrive Pinhão", detail: "Check the azulejo-covered station walls, then walk to your first quinta." },
                  { time: "11:00 AM", activity: "First quinta visit (Quinta de la Rosa)", detail: "Tour the vineyards and cellar, taste 4-5 wines. The 20-year tawny here is exceptional." },
                  { time: "1:00 PM", activity: "Lunch with Douro views", detail: "DOC by Rui Paula (book ahead) or Veladouro in Pinhão village for something casual." },
                  { time: "2:30 PM", activity: "Second quinta or viewpoint", detail: "Quinta do Bomfim (nearby) or taxi to São Leonardo de Galafura for the most dramatic panorama in the valley." },
                  { time: "4:30 PM", activity: "Return train to Porto", detail: "Different light on the return — golden afternoon sun on the western-facing terraces." },
                  { time: "7:00 PM", activity: "Back in Porto", detail: "Dinner at a tasca in Miragaia or Ribeira. You've earned it." },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.04}>
                    <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif text-terracotta text-sm flex-shrink-0 w-20 mt-0.5">
                        {item.time}
                      </span>
                      <div>
                        <p className="font-serif text-base text-stone-800 mb-0.5">
                          {item.activity}
                        </p>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Quintas */}
            <GuideSection
              label="Wineries"
              title="Best Quintas to Visit"
              description="Four quintas accessible from Pinhão — ranked by experience and accessibility."
            >
              <div className="space-y-6">
                {quintas.map((quinta, i) => (
                  <ScrollReveal key={quinta.name} delay={i * 0.06}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <h3 className="font-serif text-xl text-stone-800 mb-1">
                        {quinta.name}
                      </h3>
                      <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-3">
                        {quinta.location}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                          {quinta.price}
                        </span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {quinta.duration}
                        </span>
                        <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                          {quinta.style}
                        </span>
                      </div>
                      <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 mb-1">
                        Wines
                      </p>
                      <p className="text-stone-600 text-sm mb-2">
                        {quinta.wines}
                      </p>
                      <p className="text-stone-700 text-sm leading-relaxed">
                        {quinta.verdict}
                      </p>
                      {quinta.bookingNeeded && (
                        <p className="text-stone-400 text-xs mt-2 italic">
                          Booking required
                        </p>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="money-saver">
              Douro quinta tastings (€12-25) are cheaper than Gaia cellar
              tastings — and you&apos;re tasting where the wine was actually
              made. Many quintas also sell bottles at cellar-door prices, 10-20%
              less than Porto shops.
            </ProTip>

            {/* Where to eat */}
            <GuideSection
              label="Food"
              title="Where to Eat in the Douro Valley"
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      DOC by Rui Paula
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Folgosa do Douro &middot; €€€
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      The restaurant literally floats on the Douro — every table has river views. Chef Rui Paula&apos;s tasting menu uses local ingredients with precision. Book 1-2 weeks ahead. A taxi from Pinhão costs ~€15.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Veladouro
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      Pinhão village &middot; €€
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      A casual restaurant in Pinhão with a terrace overlooking the river. Excellent grilled meats, regional dishes, and an affordable Douro wine list. No reservation needed on weekdays. The honest alternative to DOC.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Quinta de la Rosa Restaurant
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-2">
                      At the quinta &middot; €€
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      If you&apos;re visiting la Rosa, eat here. Simple regional cooking paired with their own wines, on a terrace overlooking their vineyards. The lunch menu changes daily based on what&apos;s fresh.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              The viewpoint at São Leonardo de Galafura — 15 min by taxi from
              Pinhão — is what poet Miguel Torga called &ldquo;the most
              beautiful view in the world.&rdquo; A 180° sweep of terraced
              vineyards cascading to the river. Go if you have a taxi arranged.
            </ProTip>

            <GuideCTA
              title="Include the Douro in Your Trip"
              description="Day 4 of our 5-day itinerary is a complete Douro Valley day trip — trains, quintas, and sunset back in Porto."
              buttonText="See 5-Day Itinerary"
              href="/5-day-porto-itinerary"
            />

            <FAQSection faqs={douroFaqs} />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
