import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const itineraries = [
  {
    duration: 1,
    title: "The Perfect Day",
    description: "Hit every essential in 24 hours.",
    href: "/1-day-porto-itinerary",
  },
  {
    duration: 2,
    title: "The Perfect Weekend",
    description: "Historic center, wine cellars, and the coast in 48 hours.",
    href: "/2-day-porto-itinerary",
  },
  {
    duration: 3,
    title: "The Classic Route",
    description: "The ideal Porto trip for most travelers.",
    href: "/3-day-porto-itinerary",
  },
  {
    duration: 5,
    title: "The Deep Dive",
    description: "Go beyond the tourist trail.",
    href: "/5-day-porto-itinerary",
  },
];

export default function RelatedItineraries({
  currentDuration,
}: {
  currentDuration: number;
}) {
  const others = itineraries.filter((it) => it.duration !== currentDuration);

  return (
    <section className="py-12 sm:py-16 border-t border-stone-200">
      <ScrollReveal>
        <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-stone-400 mb-2">
          Other Itineraries
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-8">
          Need More (or Less) Time?
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {others.map((it, i) => (
          <ScrollReveal key={it.duration} delay={i * 0.1}>
            <Link href={it.href} className="group block">
              <div className="parchment-texture rounded-lg p-6 postcard-shadow hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-2xl text-terracotta">
                      {it.duration}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-stone-800 group-hover:text-terracotta transition-colors">
                      {it.duration}-Day: {it.title}
                    </h3>
                    <p className="text-stone-500 text-sm">{it.description}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-stone-300 group-hover:text-terracotta group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
