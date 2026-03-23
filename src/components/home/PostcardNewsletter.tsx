"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AirmailBorder from "@/components/decorative/AirmailBorder";
import PostageStamp from "@/components/decorative/PostageStamp";
import PostmarkStamp from "@/components/decorative/PostmarkStamp";

export default function PostcardNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 px-6">
      <ScrollReveal className="mx-auto max-w-2xl">
        <div className="parchment-texture rounded-lg postcard-shadow overflow-hidden">
          <AirmailBorder />

          {submitted ? (
            <div className="p-10 text-center">
              <p className="font-serif text-3xl text-stone-800 mb-2">Obrigado!</p>
              <p className="font-handwritten text-ink text-lg">
                Your first postcard from Porto is on its way.
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row">
              {/* Left: Message side */}
              <div className="flex-1 p-6 sm:p-8 sm:border-r border-postmark/20">
                <p className="font-handwritten text-ink text-base sm:text-lg leading-relaxed mb-4">
                  Dear traveler,
                </p>
                <p className="font-handwritten text-ink text-base sm:text-lg leading-relaxed mb-4">
                  Porto misses you. Let us send you stories from the Douro — slow travel wisdom, hidden gems, and a reason to come back.
                </p>
                <p className="font-handwritten text-ink text-base sm:text-lg leading-relaxed mb-6">
                  One postcard at a time.
                </p>
                <p className="font-serif italic text-terracotta text-lg">
                  — Porto Itinerary
                </p>
              </div>

              {/* Right: Address side */}
              <div className="flex-1 p-6 sm:p-8 relative">
                {/* Stamp and postmark */}
                <div className="absolute top-4 right-4 flex items-start gap-1">
                  <PostmarkStamp size={48} />
                  <PostageStamp emoji="✉️" label="CORREIOS" />
                </div>

                <div className="mt-16 sm:mt-20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-postmark block mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="traveler@example.com"
                        className="w-full bg-transparent border-b border-postmark/40 focus:border-terracotta pb-2 text-stone-800 text-sm placeholder:text-stone-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="border-b border-postmark/20" />
                    <div className="border-b border-postmark/20" />
                    <button
                      type="submit"
                      className="px-8 py-2.5 bg-terracotta text-cream text-sm font-sans font-medium tracking-wider uppercase rounded-sm hover:bg-terracotta-dark transition-colors"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          <AirmailBorder />
        </div>
      </ScrollReveal>
    </section>
  );
}
