import ScrollReveal from "@/components/ScrollReveal";
import type { ReactNode } from "react";

interface GuideSectionProps {
  label?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function GuideSection({
  label,
  title,
  description,
  children,
}: GuideSectionProps) {
  return (
    <section className="py-10 sm:py-12">
      <ScrollReveal>
        {label && (
          <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-2">
            {label}
          </p>
        )}
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-2xl">
            {description}
          </p>
        )}
      </ScrollReveal>
      <div className="mt-6">{children}</div>
    </section>
  );
}
