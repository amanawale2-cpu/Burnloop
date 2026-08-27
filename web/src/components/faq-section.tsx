"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const FAQS = [
  {
    q: "Does BurnLoop provide medical advice?",
    a: "No. BurnLoop provides general wellness and educational meal guidance based on details you choose to share. It does not diagnose, treat, or replace a qualified healthcare professional.",
  },
  {
    q: "How does meal scanning work?",
    a: "You can scan or upload a meal photo, review detected foods, and receive nutrition-related context with practical next-step ideas.",
  },
  {
    q: "Can BurnLoop help with allergies?",
    a: "BurnLoop can incorporate stated allergies into meal-planning guidance. Always verify ingredients and follow advice from your allergy-care team.",
  },
  {
    q: "Who is BurnLoop for?",
    a: "It is for adults looking for a more personalized, practical way to plan meals and build healthier daily habits.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-brand-normal/12 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-foreground">
                    {item.q}
                  </span>
                  <ChevronDownIcon
                    className={`size-5 shrink-0 text-brand-normal transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 font-body text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
