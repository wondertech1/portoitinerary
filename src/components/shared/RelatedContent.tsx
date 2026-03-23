import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  category: string;
}

export default function RelatedContent({ items }: { items: RelatedItem[] }) {
  return (
    <section className="py-12 sm:py-16 border-t border-stone-200">
      <ScrollReveal>
        <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-stone-400 mb-2">
          Keep Reading
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-8">
          You Might Also Like
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <ScrollReveal key={item.href} delay={i * 0.08}>
            <Link href={item.href} className="group block">
              <div className="parchment-texture rounded-lg p-5 postcard-shadow h-full hover:shadow-lg transition-shadow duration-300">
                <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-2">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg text-stone-800 group-hover:text-terracotta transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta">
                  Read more
                  <ArrowRight
                    size={12}
                    strokeWidth={2}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
