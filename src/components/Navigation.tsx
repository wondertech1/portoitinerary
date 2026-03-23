"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/itineraries", label: "Itineraries" },
  { href: "/stories", label: "Stories" },
  { href: "/taste", label: "Taste" },
  { href: "/stay", label: "Stay" },
  { href: "/wander", label: "Wander" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl text-stone-800 tracking-wide"
          >
            Porto<em className="text-terracotta">Itinerary</em>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-stone-500 hover:text-stone-800 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-stone-700 hover:text-stone-900 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 text-stone-700 hover:text-stone-900 transition-colors"
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
                closed: {},
              }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 30 },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl sm:text-5xl text-stone-800 hover:text-terracotta transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-10 font-serif italic text-stone-400 text-sm"
            >
              Travel with intention
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
