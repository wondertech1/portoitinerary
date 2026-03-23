"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AirmailBorder from "@/components/decorative/AirmailBorder";
import PostmarkStamp from "@/components/decorative/PostmarkStamp";
import PostageStamp from "@/components/decorative/PostageStamp";

const postcards = [
  {
    id: "taste",
    title: "Francesinha & Friends",
    facet: "Taste",
    note: "The sauce! You have to try the sauce.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    stamp: { emoji: "🍽️", label: "PORTUGAL" },
    postmarkDate: "15 MAR 2026",
    href: "/guides/where-to-eat-porto",
  },
  {
    id: "wine",
    title: "Port Wine Cellars of Gaia",
    facet: "Wine",
    note: "Tawny in the afternoon sun...",
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
    stamp: { emoji: "🍷", label: "PORTUGAL" },
    postmarkDate: "12 MAR 2026",
    href: "/guides/port-wine-cellars-guide",
  },
  {
    id: "ribeira",
    title: "Ribeira at Golden Hour",
    facet: "Neighborhoods",
    note: "Wish you were here...",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
    stamp: { emoji: "🏘️", label: "PORTUGAL" },
    postmarkDate: "10 MAR 2026",
    href: "/1-day-porto-itinerary",
  },
  {
    id: "bridge",
    title: "Dom Luís I at Sunset",
    facet: "Views",
    note: "The light here is unreal.",
    image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80",
    stamp: { emoji: "🌉", label: "PORTUGAL" },
    postmarkDate: "08 MAR 2026",
    href: "/3-day-porto-itinerary",
  },
  {
    id: "douro",
    title: "A Day in the Douro Valley",
    facet: "Day Trips",
    note: "Vineyards as far as the eye can see.",
    image: "https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=800&q=80",
    stamp: { emoji: "🚂", label: "PORTUGAL" },
    postmarkDate: "05 MAR 2026",
    href: "/5-day-porto-itinerary",
  },
  {
    id: "azulejo",
    title: "The Hidden Azulejo Trails",
    facet: "Culture",
    note: "Every wall tells a story.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    stamp: { emoji: "🎨", label: "PORTUGAL" },
    postmarkDate: "02 MAR 2026",
    href: "/guides/best-francesinha-porto",
  },
];

function PostcardCard({
  postcard,
  isMobile = false,
}: {
  postcard: (typeof postcards)[0];
  isMobile?: boolean;
}) {
  return (
    <Link href={postcard.href} className="block group">
      <div
        className={`parchment-texture rounded-lg postcard-shadow overflow-hidden ${
          isMobile ? "w-[80vw] max-w-[320px]" : "w-[320px]"
        }`}
      >
        <AirmailBorder />
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={postcard.image}
            alt={postcard.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="320px"
          />
          <PostmarkStamp
            date={postcard.postmarkDate}
            className="absolute top-3 right-3"
          />
        </div>
        <div className="p-4 relative">
          <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark mb-1">
            {postcard.facet}
          </p>
          <h3 className="font-serif text-xl text-stone-800 leading-snug group-hover:text-terracotta transition-colors duration-300">
            {postcard.title}
          </h3>
          <p className="font-handwritten text-ink text-sm mt-2 leading-relaxed">
            {postcard.note}
          </p>
          <PostageStamp
            emoji={postcard.stamp.emoji}
            label={postcard.stamp.label}
            className="absolute bottom-3 right-3"
          />
        </div>
        <AirmailBorder />
      </div>
    </Link>
  );
}

export default function PostcardRack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = postcards.length;

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setActiveIndex((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Headline */}
      <div className="text-center mb-10 sm:mb-14 px-6">
        <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-stone-400 mb-3">
          A visual guide to
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-stone-800 tracking-tight">
          Porto
        </h1>
        <p className="font-handwritten text-lg sm:text-xl text-ink mt-3">
          pick a postcard, start exploring...
        </p>
      </div>

      {/* Desktop 3D Carousel */}
      <div className="hidden md:block relative mx-auto max-w-5xl px-16">
        <div className="carousel-scene relative h-[460px]">
          {postcards.map((card, index) => {
            const offset = ((index - activeIndex + total + Math.floor(total / 2)) % total) - Math.floor(total / 2);
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            return (
              <motion.div
                key={card.id}
                className="absolute top-0 left-1/2 cursor-pointer"
                animate={{
                  rotateY: offset * 35,
                  x: offset * 200 - 160,
                  scale: isActive ? 1 : Math.max(0.7, 0.9 - absOffset * 0.08),
                  opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.15,
                  z: isActive ? 100 : -absOffset * 60,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: 10 - absOffset,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <PostcardCard postcard={card} />
              </motion.div>
            );
          })}
        </div>

        {/* Nav arrows */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-stone-300 bg-cream/80 backdrop-blur-sm flex items-center justify-center text-stone-400 hover:text-stone-700 hover:border-stone-500 transition-colors z-20"
          aria-label="Previous postcard"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-stone-300 bg-cream/80 backdrop-blur-sm flex items-center justify-center text-stone-400 hover:text-stone-700 hover:border-stone-500 transition-colors z-20"
          aria-label="Next postcard"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {postcards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-terracotta scale-125"
                  : "bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Go to postcard ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 flex gap-4 pb-4">
        {postcards.map((card) => (
          <div key={card.id} className="snap-center flex-shrink-0">
            <PostcardCard postcard={card} isMobile />
          </div>
        ))}
      </div>
    </section>
  );
}
