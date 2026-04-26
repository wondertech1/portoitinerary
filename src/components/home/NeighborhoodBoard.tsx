"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Paperclip from "@/components/decorative/Paperclip";

const neighborhoods = [
  {
    name: "Ribeira",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=400&q=80",
    tagline: "Douro waterfront soul",
    rotation: -2,
    clipColor: "#1b4793",
  },
  {
    name: "Bolhao",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    tagline: "Markets & Art Nouveau",
    rotation: 1.5,
    clipColor: "#c67a5c",
  },
  {
    name: "Cedofeita",
    image: "https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=400&q=80",
    tagline: "Creative quarter",
    rotation: -1,
    clipColor: "#5a7a5a",
  },
  {
    name: "Foz do Douro",
    image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=400&q=80",
    tagline: "River meets Atlantic",
    rotation: 2.5,
    clipColor: "#3a6b8c",
  },
  {
    name: "Gaia",
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=400&q=80",
    tagline: "Port cellars & sunsets",
    rotation: -2.5,
    clipColor: "#6b3a6b",
  },
  {
    name: "Miragaia",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80",
    tagline: "Quiet lanes & tascas",
    rotation: 1,
    clipColor: "#c49a3c",
  },
];

export default function NeighborhoodBoard() {
  return (
    <section className="py-16 sm:py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="text-center mb-12">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-stone-400 mb-3">
            Neighborhoods
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-800">
            Pick Your Bairro
          </h2>
          <Link
            href="/guides/porto-neighborhoods"
            className="inline-block mt-3 text-xs font-sans tracking-[0.15em] uppercase text-terracotta hover:text-terracotta-dark transition-colors"
          >
            Explore all neighborhoods →
          </Link>
        </ScrollReveal>

        <div className="cork-texture rounded-xl p-6 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {neighborhoods.map((n, i) => (
              <ScrollReveal key={n.name} delay={i * 0.08}>
                <div className="group block">
                  <div
                    className="relative transition-all duration-300 ease-out group-hover:!rotate-0 group-hover:-translate-y-1"
                    style={{ transform: `rotate(${n.rotation}deg)` }}
                  >
                    {/* Paperclip */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                      <Paperclip color={n.clipColor} />
                    </div>

                    {/* Card */}
                    <div className="parchment-texture rounded-lg overflow-hidden postcard-shadow group-hover:shadow-lg transition-shadow duration-300">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={n.image}
                          alt={`${n.name} neighborhood in Porto`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <h3 className="font-serif text-lg text-stone-800">
                          {n.name}
                        </h3>
                        <p className="text-stone-500 text-xs mt-0.5">{n.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
