import ScrollReveal from "@/components/ScrollReveal";
import type { ReactNode } from "react";

interface TimeSlotProps {
  time: string;
  period: "morning" | "afternoon" | "evening";
  children: ReactNode;
}

const periodStyles = {
  morning: "border-l-ochre",
  afternoon: "border-l-terracotta",
  evening: "border-l-airmail-blue",
};

export default function TimeSlot({ time, period, children }: TimeSlotProps) {
  return (
    <ScrollReveal>
      <div className={`border-l-2 ${periodStyles[period]} pl-5 sm:pl-6`}>
        <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
          {time}
        </p>
        {children}
      </div>
    </ScrollReveal>
  );
}
