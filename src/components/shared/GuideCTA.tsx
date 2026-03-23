import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function GuideCTA({
  title = "Plan Your Porto Trip",
  description = "Get a day-by-day itinerary with all our top picks mapped out for you.",
  buttonText = "See Itineraries",
  href = "/itineraries",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <ScrollReveal>
      <div className="my-12 sm:my-16 parchment-texture rounded-lg p-8 sm:p-12 postcard-shadow text-center">
        <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-postmark mb-3">
          Ready to Go?
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-3">
          {title}
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-8 py-3 bg-terracotta text-cream text-[11px] font-sans font-medium tracking-[0.15em] uppercase rounded-sm hover:bg-terracotta-dark transition-colors duration-300"
        >
          {buttonText}
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </div>
    </ScrollReveal>
  );
}
