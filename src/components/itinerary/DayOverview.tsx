"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface DayOverviewItem {
  day: number;
  title: string;
  highlights: string[];
}

export default function DayOverview({ days }: { days: DayOverviewItem[] }) {
  return (
    <ScrollReveal>
      <div className="my-8 parchment-texture rounded-lg postcard-shadow p-5 sm:p-6">
        <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-4">
          At a Glance
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {days.map((day) => (
            <Link
              key={day.day}
              href={`#day-${day.day}`}
              className="group block p-4 rounded-lg bg-cream hover:bg-white transition-colors"
            >
              <p className="font-serif text-lg text-terracotta mb-1">
                Day {day.day}
              </p>
              <p className="font-serif text-base text-stone-800 mb-2 group-hover:text-terracotta transition-colors">
                {day.title}
              </p>
              <ul className="space-y-1">
                {day.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-stone-500 text-xs flex items-start gap-1.5"
                  >
                    <span className="text-terracotta/50 mt-0.5">&#8250;</span>
                    {h}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
