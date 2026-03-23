"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PostmarkStamp from "@/components/decorative/PostmarkStamp";

const stories = [
  {
    title: "The Best Port Wine Cellars of Vila Nova de Gaia",
    category: "Taste",
    excerpt: "A tasting journey through centuries of tradition, from Taylor's to Graham's.",
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
    href: "/guides/port-wine-cellars-guide",
  },
  {
    title: "Morning Light on the Ribeira",
    category: "Wander",
    excerpt: "The quietest hours reveal Porto's true character.",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80",
    href: "/1-day-porto-itinerary",
  },
  {
    title: "The Hidden Azulejo Trails",
    category: "Culture",
    excerpt: "Every tiled wall tells a story. Here's how to find the best ones.",
    image: "https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=600&q=80",
    href: "/3-day-porto-itinerary",
  },
];

const stats = [
  { value: "50+", label: "Wine Cellars", bg: "bg-terracotta" },
  { value: "1996", label: "UNESCO Listed", bg: "bg-ochre" },
  { value: "220", label: "Sunny Days/Year", bg: "bg-stone-700" },
];

const tips = [
  { emoji: "🚃", text: "Get an Andante card for trams and metro — it saves you 40% over single tickets." },
  { emoji: "🍽️", text: "Lunch before 12:30 or after 14:00. Locals eat late, and you'll skip the tourist rush." },
  { emoji: "🌅", text: "The best sunset in Porto? Jardim do Morro in Gaia, not the Ribeira side." },
];

function StoryCard({
  title,
  category,
  excerpt,
  image,
  href,
  featured = false,
}: {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="relative h-full rounded-lg overflow-hidden postcard-shadow bg-parchment">
        <div className={`relative ${featured ? "h-full min-h-[320px]" : "aspect-[16/10]"}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className={`absolute inset-0 ${featured ? "bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" : "bg-gradient-to-t from-stone-900/70 via-transparent to-transparent"}`} />
          <PostmarkStamp className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className={`${featured ? "absolute bottom-0 left-0 right-0 p-6" : "p-5"}`}>
          <p className={`text-[10px] font-sans font-medium tracking-[0.2em] uppercase mb-1.5 ${featured ? "text-terracotta" : "text-postmark"}`}>
            {category}
          </p>
          <h3 className={`font-serif leading-snug mb-2 ${featured ? "text-2xl text-white" : "text-lg text-stone-800 group-hover:text-terracotta transition-colors duration-300"}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed line-clamp-2 ${featured ? "text-white/70" : "text-stone-500"}`}>
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}

function StatCard({ value, label, bg }: { value: string; label: string; bg: string }) {
  return (
    <div className={`${bg} rounded-lg p-5 flex flex-col justify-end postcard-shadow relative overflow-hidden min-h-[120px]`}>
      <PostmarkStamp className="absolute top-1 right-1 !opacity-10" size={48} />
      <p className="font-serif text-3xl sm:text-4xl text-white leading-none mb-1">{value}</p>
      <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-white/70">{label}</p>
    </div>
  );
}

function TipCard({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="bg-parchment rounded-lg p-5 postcard-shadow border-l-3 border-airmail-red">
      <span className="text-2xl block mb-2">{emoji}</span>
      <p className="text-stone-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="py-16 sm:py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-12">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-stone-400 mb-3">
            Stories & Guides
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-800">
            What to Read First
          </h2>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {/* Featured story — spans 2 cols, 2 rows */}
          <ScrollReveal className="sm:col-span-2 sm:row-span-2" delay={0}>
            <StoryCard {...stories[0]} featured />
          </ScrollReveal>

          {/* Stats */}
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.08 * (i + 1)}>
              <StatCard {...stat} />
            </ScrollReveal>
          ))}

          {/* Story 2 */}
          <ScrollReveal className="sm:col-span-2" delay={0.1}>
            <StoryCard {...stories[1]} />
          </ScrollReveal>

          {/* Tips */}
          {tips.map((tip, i) => (
            <ScrollReveal key={i} delay={0.08 * (i + 1)}>
              <TipCard {...tip} />
            </ScrollReveal>
          ))}

          {/* Story 3 */}
          <ScrollReveal className="sm:col-span-2 lg:col-span-3" delay={0.15}>
            <StoryCard {...stories[2]} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
