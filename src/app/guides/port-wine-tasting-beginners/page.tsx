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
import { portWineTypes } from "@/data/guides/wine-cellars";

export const metadata: Metadata = {
  title:
    "Port Wine for Beginners — How to Taste, What to Order, What to Buy | Porto Itinerary",
  description:
    "A beginner's guide to port wine: Ruby vs Tawny, how to taste step by step, what to order at a cellar, and the best bottles to bring home from Porto in 2026.",
  alternates: {
    canonical: "https://portoitinerary.com/guides/port-wine-tasting-beginners",
  },
  openGraph: {
    title: "Port Wine for Beginners — Taste, Order & Buy Guide",
    description:
      "Ruby vs Tawny, how to taste, what to order, and what to bring home. Everything beginners need to know.",
    url: "https://portoitinerary.com/guides/port-wine-tasting-beginners",
    siteName: "Porto Itinerary",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Port Wine for Beginners — How to Taste, What to Order, What to Buy",
  description:
    "A beginner's guide to port wine types, tasting technique, and what to buy.",
  url: "https://portoitinerary.com/guides/port-wine-tasting-beginners",
  publisher: {
    "@type": "Organization",
    name: "Porto Itinerary",
    url: "https://portoitinerary.com",
  },
};

const tastingSteps = [
  {
    step: 1,
    title: "Look",
    description:
      "Hold the glass at an angle against a white background. Ruby ports are deep red/purple. Tawny ports are amber/brown — the older they are, the lighter and more golden they become. The color tells you how the wine was aged.",
  },
  {
    step: 2,
    title: "Swirl",
    description:
      "Gently swirl the glass. Port is viscous — it clings to the glass in 'legs' or 'tears'. The thicker and slower the legs, the higher the sugar content and alcohol.",
  },
  {
    step: 3,
    title: "Smell",
    description:
      "Nose the glass gently — don't shove your nose in. Rubies smell of fresh fruit (cherry, blackberry). Tawnies smell of dried fruit, caramel, nuts, and spice. Whites smell of honey and citrus. Take your time.",
  },
  {
    step: 4,
    title: "Sip",
    description:
      "Take a small sip and let it coat your mouth. Notice the sweetness, the alcohol warmth, and the finish (how long the flavors linger). Good port has a long, complex finish. The sweetness should be balanced, not cloying.",
  },
  {
    step: 5,
    title: "Reflect",
    description:
      "Don't rush to the next wine. Think about what you tasted. Did you prefer fruity (Ruby) or nutty (Tawny)? Sweet or dry? Young or aged? This helps you know what to buy.",
  },
];

const whatToBuy = [
  {
    category: "Best Gift (€20–€35)",
    recommendation: "20-Year Tawny Port",
    detail:
      "The sweet spot of quality and value. A 20-year tawny is complex enough to impress wine lovers but accessible enough for anyone. Taylor's 20-Year or Graham's 20-Year are reliable choices.",
  },
  {
    category: "Conversation Starter (€10–€15)",
    recommendation: "Dry White Port",
    detail:
      "Most people don't know white port exists. Churchill's Dry White is excellent. Serve it chilled with tonic water and a slice of orange — 'Porto Tónico' is Porto's signature cocktail.",
  },
  {
    category: "Everyday Drinking (€8–€12)",
    recommendation: "LBV (Late Bottled Vintage)",
    detail:
      "Richer than basic Ruby but far cheaper than Vintage port. Excellent value for after-dinner drinking. Graham's LBV or Taylor's LBV are consistently good.",
  },
  {
    category: "Special Occasion (€50–€150)",
    recommendation: "Colheita or Vintage Port",
    detail:
      "A Colheita is a single-harvest tawny aged in barrel — look for years with personal significance (birth year, wedding year). Vintage port is the king — single harvest, aged in bottle, meant for special moments.",
  },
];

const whereToShop = [
  {
    name: "Garrafeira do Carmo",
    location: "Near Carmo Church",
    detail:
      "Porto's best wine shop. Enormous selection, knowledgeable staff, fair prices. They'll ship internationally.",
  },
  {
    name: "Direct from cellars",
    location: "Vila Nova de Gaia",
    detail:
      "Similar prices to shops, but you can taste before buying and find cellar-exclusive bottlings.",
  },
  {
    name: "Porto Airport duty-free",
    location: "Departure terminal",
    detail:
      "Decent selection and competitive prices for last-minute purchases. Not as curated as a proper wine shop.",
  },
];

const faqs = [
  {
    question: "What's the difference between Ruby and Tawny port?",
    answer:
      "Ruby port is aged briefly in large barrels, retaining deep red color and fresh fruit flavors (cherry, raspberry). Tawny port is aged longer in small barrels, developing amber color and nutty, caramel, dried fruit flavors. Both are sweet. Ruby is more robust; Tawny is more refined.",
  },
  {
    question: "Is port wine sweet?",
    answer:
      "Most port wine is sweet, yes — the fermentation is stopped early, preserving natural grape sugar. However, dry white ports exist and are excellent as aperitifs. Dry white port with tonic (Porto Tónico) is Porto's signature cocktail.",
  },
  {
    question: "How should I serve port wine?",
    answer:
      "Ruby and LBV: slightly below room temperature (14-18°C). Tawny: slightly chilled (10-14°C). White and Rosé: well chilled (4-10°C). Never serve port at warm room temperature — it accentuates the alcohol.",
  },
  {
    question: "How long does port wine last after opening?",
    answer:
      "Ruby and LBV: 2-3 weeks. Tawny: 4-6 weeks (the oxidative aging makes it more stable). White and Rosé: 1-2 weeks in the fridge. Vintage port: drink within 1-2 days once opened — it's not built to last.",
  },
];

const related = [
  {
    title: "Port Wine Cellars Guide",
    description: "8 cellars compared — prices, tours, and verdicts.",
    href: "/guides/port-wine-cellars-guide",
    category: "Wine Guide",
  },
  {
    title: "Where to Eat in Porto",
    description: "A local's guide to the best food by neighborhood.",
    href: "/guides/where-to-eat-porto",
    category: "Food Guide",
  },
  {
    title: "5-Day Porto Itinerary",
    description: "Includes a Douro Valley day trip to where port begins.",
    href: "/5-day-porto-itinerary",
    category: "Itinerary",
  },
];

export default function PortWineBeginnersPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main>
        <GuideHero
          category="Wine Guide"
          title="Port Wine for Beginners"
          subtitle="How to taste, what to order, and what to bring home — the only guide you need before visiting Gaia."
          lastVerified="March 2026"
          breadcrumbItems={[
            { label: "Guides", href: "/guides/port-wine-cellars-guide" },
            { label: "Port Wine Beginners" },
          ]}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            {/* Types of port */}
            <GuideSection
              label="Know Your Wine"
              title="Types of Port Wine"
              description="Six styles, one grape region. Here's what makes each one different."
            >
              <div className="space-y-5">
                {portWineTypes.map((wine, i) => (
                  <ScrollReveal key={wine.type} delay={i * 0.05}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5">
                      <h3 className="font-serif text-xl text-stone-800 mb-2">
                        {wine.type}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-3">
                        {wine.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <p className="text-[10px] font-sans tracking-[0.1em] uppercase text-stone-400">
                          <span className="text-stone-500 font-medium">
                            Serve at:
                          </span>{" "}
                          {wine.servingTemp}
                        </p>
                        <p className="text-[10px] font-sans tracking-[0.1em] uppercase text-stone-400">
                          <span className="text-stone-500 font-medium">
                            Pair with:
                          </span>{" "}
                          {wine.bestWith}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="tip">
              If you only remember one thing: Ruby = fruity and young, Tawny =
              nutty and aged. Most beginners prefer Tawny because the flavors
              are more complex and less intensely sweet.
            </ProTip>

            {/* How to taste */}
            <GuideSection
              label="Tasting"
              title="How to Taste Port Wine (5 Steps)"
              description="You don't need to be a sommelier. Just follow these steps and trust your own palate."
            >
              <div className="space-y-4">
                {tastingSteps.map((step, i) => (
                  <ScrollReveal key={step.step} delay={i * 0.06}>
                    <div className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-serif text-sm text-terracotta">
                          {step.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-stone-800 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <ProTip variant="local-secret">
              At the cellar, ask the guide which port they personally drink at
              home. You&apos;ll usually get a more honest recommendation than
              the official &ldquo;premium pick.&rdquo;
            </ProTip>

            {/* What to buy */}
            <GuideSection
              label="Shopping"
              title="Best Port Wine to Bring Home"
              description="What to buy for every budget and occasion."
            >
              <div className="space-y-4">
                {whatToBuy.map((item, i) => (
                  <ScrollReveal key={item.category} delay={i * 0.06}>
                    <div className="parchment-texture rounded-lg postcard-shadow p-5">
                      <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-xl text-stone-800 mb-2">
                        {item.recommendation}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            {/* Where to shop */}
            <GuideSection
              label="Where to Buy"
              title="Best Wine Shops in Porto"
            >
              <div className="space-y-3">
                {whereToShop.map((shop, i) => (
                  <ScrollReveal key={shop.name} delay={i * 0.06}>
                    <div className="flex items-start gap-3 py-3 border-b border-stone-100 last:border-0">
                      <div className="flex-shrink-0 w-44">
                        <h4 className="font-serif text-base text-stone-800">
                          {shop.name}
                        </h4>
                        <p className="text-[10px] font-sans tracking-[0.1em] uppercase text-postmark">
                          {shop.location}
                        </p>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {shop.detail}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </GuideSection>

            <GuideCTA
              title="Visit the Cellars Yourself"
              description="Our itineraries include perfectly timed wine cellar visits with the best route through Gaia."
              buttonText="See Itineraries"
              href="/itineraries"
            />

            <FAQSection faqs={faqs} />

            <RelatedContent items={related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
