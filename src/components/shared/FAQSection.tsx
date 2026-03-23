"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "./JsonLd";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs,
}: {
  title?: string;
  faqs: FAQItem[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-16">
      <JsonLd data={jsonLd} />
      <ScrollReveal>
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-8">
          {title}
        </h2>
      </ScrollReveal>
      <div className="space-y-0 divide-y divide-stone-200">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <FAQItem question={faq.question} answer={faq.answer} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <h3 className="font-serif text-lg text-stone-800 group-hover:text-terracotta transition-colors">
          {question}
        </h3>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`mt-1 flex-shrink-0 text-stone-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-stone-600 text-sm leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
}
