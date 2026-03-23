"use client";

import type { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface DayBlockProps {
  dayNumber: number;
  title: string;
  summary: string;
  children: ReactNode;
}

export default function DayBlock({
  dayNumber,
  title,
  summary,
  children,
}: DayBlockProps) {
  return (
    <section className="py-10 sm:py-14" id={`day-${dayNumber}`}>
      <ScrollReveal>
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 rounded-lg bg-terracotta flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-2xl text-cream leading-none">
              {dayNumber}
            </span>
          </div>
          <div>
            <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta mb-1">
              Day {dayNumber}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-800">
              {title}
            </h2>
            <p className="text-stone-500 text-sm mt-1">{summary}</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="space-y-6 ml-0 sm:ml-[4.5rem]">{children}</div>
    </section>
  );
}
