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
  festivalInfo,
  traditions,
  practicalTips,
  timeline,
  saoJoaoFaqs,
} from "@/data/guides/sao-joao";

export const metadata: Metadata = {
  title:
    "S\u00e3o Jo\u00e3o Festival Porto 2026 \u2014 The Ultimate Guide | Porto Itinerary",
  description:
    "How to survive S\u00e3o Jo\u00e3o, Porto\u2019s wildest night. Sardines, plastic hammers, fireworks over the Douro, and dancing until sunrise. Practical tips for June 23-24, 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/sao-joao-festival-porto",
  },
  openGraph: {
    title:
      "S\u00e3o Jo\u00e3o Festival Porto 2026 \u2014 The Ultimate Guide",
    description:
      "Porto\u2019s biggest night: sardines, plastic hammers, fireworks, and no sleep. A complete guide to surviving and loving S\u00e3o Jo\u00e3o.",
    url: "https://portoitinerary.com/guides/sao-joao-festival-porto",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "S\u00e3o Jo\u00e3o Festival Porto 2026 \u2014 The Ultimate Guide",
    description:
      "A complete guide to Porto\u2019s S\u00e3o Jo\u00e3o festival \u2014 traditions, timeline, practical tips, and where to watch the midnight fireworks.",
    url: "https://portoitinerary.com/guides/sao-joao-festival-porto",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "S\u00e3o Jo\u00e3o Festival Porto 2026",
    description:
      "Porto\u2019s annual midsummer street festival celebrating St. John the Baptist with sardines, plastic hammers, bonfires, and fireworks over the Douro.",
    startDate: "2026-06-23T15:00:00+01:00",
    endDate: "2026-06-24T07:00:00+01:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Porto city center",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto",
        addressCountry: "PT",
      },
    },
    isAccessibleForFree: true,
    organizer: {
      "@type": "Organization",
      name: "C\u00e2mara Municipal do Porto",
    },
  },
];

const related = [
  {
    title: "Best Time to Visit Porto",
    description:
      "June is peak season \u2014 here\u2019s what to expect month by month.",
    href: "/guides/best-time-to-visit-porto",
    category: "Practical Guide",
  },
  {
    title: "Porto Neighborhoods",
    description:
      "Know where Fontainhas, Ribeira, and Cedofeita are before the night begins.",
    href: "/guides/porto-neighborhoods",
    category: "Neighborhood Guide",
  },
  {
    title: "Where to Eat in Porto",
    description:
      "The sardines are great, but you\u2019ll want a real meal too.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
];

export default function SaoJoaoPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
      <Navigation />
      <main>
        <GuideHero
          category="Festival Guide"
          title="S\u00e3o Jo\u00e3o Festival Porto"
          subtitle="Nothing in Europe compares \u2014 an entire city losing its mind with sardines, plastic hammers, and fireworks over the Douro."
          lastVerified="April 2026"
          breadcrumbItems={[{ label: "S\u00e3o Jo\u00e3o Festival" }]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* What is São João */}
            <GuideSection
              label="The Festival"
              title="What Is S\u00e3o Jo\u00e3o?"
              description="Porto\u2019s midsummer madness, explained."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                        {festivalInfo.date}
                      </span>
                      <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                        {festivalInfo.mainEvent}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-3">
                      {festivalInfo.origin}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {festivalInfo.description}
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    I&apos;ve been to Carnival in Rio, La Tomatina in Bu&ntilde;ol, and New Year&apos;s in Sydney. S&atilde;o Jo&atilde;o is different. It&apos;s not a spectacle you watch &mdash; it&apos;s a city-wide delirium you get absorbed into. There are no barricades, no designated viewing areas, no corporate sponsors. Just Porto being Porto at maximum volume. By 2 AM you&apos;ll be dancing with strangers, your hair will smell like sardines, and a seven-year-old will have hit you on the head with a plastic hammer at least forty times. It is perfect.
                  </p>
                </ScrollReveal>
              </div>
            </GuideSection>

            {/* Traditions */}
            <GuideSection
              label="Traditions"
              title="The Seven Traditions of S\u00e3o Jo\u00e3o"
              description="Each one stranger than the last."
            >
              <div className="space-y-4">
                {traditions.map((tradition, i) => (
                  <ScrollReveal key={tradition.name} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-serif text-terracotta text-lg font-medium flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif text-lg text-stone-800">
                          {tradition.name}
                        </h3>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed pl-9">
                        {tradition.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              Buy your plastic hammer early &mdash; by 20:00, the good ones are gone and prices double. The best hammers are the large squeaky ones (about &euro;3 from afternoon vendors). The tiny ones break within an hour. This is an investment in your S&atilde;o Jo&atilde;o experience.
            </ProTip>

            {/* Timeline */}
            <GuideSection
              label="Timeline"
              title="Your S\u00e3o Jo\u00e3o Night, Hour by Hour"
              description="What happens when, and where to be."
            >
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="flex items-start gap-4 py-4 border-b border-stone-100 last:border-0">
                      <div className="flex-shrink-0 w-24">
                        <span className="font-serif text-terracotta text-sm font-medium">
                          {item.time}
                        </span>
                      </div>
                      <div>
                        <p className="font-serif text-base text-stone-800 mb-1">
                          {item.event}
                        </p>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {item.where}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Practical Tips */}
            <GuideSection
              label="Practical"
              title="Surviving S\u00e3o Jo\u00e3o"
              description="What to wear, what to bring, and what to expect after midnight."
            >
              <div className="space-y-4">
                {practicalTips.map((tip, i) => (
                  <ScrollReveal key={tip.title} delay={i * 0.04}>
                    <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                      <span className="font-serif text-terracotta text-sm flex-shrink-0 w-40 mt-0.5 font-medium">
                        {tip.title}
                      </span>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="warning">
              Book your accommodation by March if you want to stay in central Porto during S&atilde;o Jo&atilde;o. This is not a suggestion &mdash; it&apos;s a survival requirement. Hotels in Ribeira and Baixa triple their prices and still sell out. Gaia and Matosinhos are good alternatives with metro access.
            </ProTip>

            {/* Where to Watch Fireworks */}
            <GuideSection
              label="Fireworks"
              title="Where to Watch the Midnight Fireworks"
              description="Three spots, three experiences."
            >
              <div className="space-y-4">
                <ScrollReveal>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Ribeira Waterfront
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-3">
                      Porto side &middot; Most intense
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      The fireworks launch from the bridge directly above you. The sound reverberates off the Ribeira buildings and the river reflects every explosion. It&apos;s overwhelming in the best way. The trade-off: arrive by 22:30 or you&apos;ll be five rows back from the water. Leaving afterward takes 30+ minutes of shuffling through crowds.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Jardim do Morro (Gaia)
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-3">
                      Gaia side &middot; Best panorama
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      The garden above the Gaia end of the bridge offers a wider panorama &mdash; you see the fireworks, the bridge, the Ribeira, and Porto&apos;s skyline all at once. Slightly less crushed than Ribeira. Take the metro to Jardim do Morro station and walk down. The elevated perspective makes for better photos.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                  <div className="parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
                    <h3 className="font-serif text-lg text-stone-800 mb-1">
                      Dom Lu&iacute;s I Bridge (Upper Deck)
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mb-3">
                      On the bridge &middot; Most dramatic
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Standing on the bridge during the fireworks is visceral &mdash; explosions surround you on all sides, the bridge vibrates, and you&apos;re suspended 45 meters above the Douro. The upper deck closes to traffic and fills with people. Get there before 23:00 for a spot. Not for anyone uncomfortable with heights or dense crowds.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </GuideSection>

            <GuideCTA
              title="Plan Your S\u00e3o Jo\u00e3o Trip"
              description="Time your Porto visit around the festival. Our itineraries help you fill the days before and after the big night."
              buttonText="See Itineraries"
              href="/itineraries"
            />

            <FAQSection faqs={saoJoaoFaqs} />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
