import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

interface StopCardProps {
  name: string;
  neighborhood?: string;
  description: string;
  duration?: string;
  cost?: string;
  tip?: string;
  image?: string;
}

export default function StopCard({
  name,
  neighborhood,
  description,
  duration,
  cost,
  tip,
  image,
}: StopCardProps) {
  return (
    <ScrollReveal>
      <div className="parchment-texture rounded-lg postcard-shadow overflow-hidden">
        {image && (
          <div className="relative aspect-[16/9]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        )}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="font-serif text-xl text-stone-800">{name}</h3>
              {neighborhood && (
                <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                  {neighborhood}
                </p>
              )}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              {duration && (
                <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-stone-100 text-stone-500 px-2.5 py-1 rounded-sm">
                  {duration}
                </span>
              )}
              {cost && (
                <span className="text-[10px] font-sans tracking-[0.1em] uppercase bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-sm">
                  {cost}
                </span>
              )}
            </div>
          </div>

          <p className="text-stone-600 text-sm leading-relaxed mb-3">
            {description}
          </p>

          {tip && (
            <div className="bg-cream rounded px-3 py-2.5 border-l-2 border-ochre">
              <p className="text-stone-600 text-xs leading-relaxed">
                <span className="font-medium text-stone-700">Tip: </span>
                {tip}
              </p>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
