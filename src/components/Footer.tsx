"use client";

import Link from "next/link";
import { Instagram, Send, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300 pt-24 pb-12 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Newsletter */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-[11px] font-sans font-medium tracking-[0.25em] uppercase text-stone-500 mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-3">
            Letters from Porto
          </h2>
          <p className="font-serif italic text-stone-400 mb-10 text-lg">
            Stories, recommendations, and a little wanderlust — delivered
            monthly.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 bg-stone-700/50 border border-stone-600 rounded-none px-5 py-3.5 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-terracotta transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 text-[11px] font-sans font-medium tracking-[0.15em] uppercase transition-colors duration-300"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        </ScrollReveal>

        {/* Footer links */}
        <div className="border-t border-stone-700 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link
            href="/"
            className="font-serif text-xl text-stone-200 tracking-wide"
          >
            Porto<em className="text-terracotta">Itinerary</em>
          </Link>

          <div className="flex items-center gap-8">
            {["Stories", "Taste", "Stay", "Wander", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-stone-500 hover:text-stone-300 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-stone-500 hover:text-stone-300 transition-colors"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Newsletter"
              className="text-stone-500 hover:text-stone-300 transition-colors"
            >
              <Send size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <p className="text-center text-[10px] text-stone-600 mt-12 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Porto Itinerary. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
