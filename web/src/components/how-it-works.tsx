import { Button } from "@/components/ui/button";

const STEPS = [
  {
    num: "01",
    title: "Build your profile",
    body: "Add your goals, preferences, allergies, and relevant health information.",
  },
  {
    num: "02",
    title: "Plan or scan a meal",
    body: "Use meal ideas, or take a photo of what you are about to eat.",
  },
  {
    num: "03",
    title: "Choose a next step",
    body: "Review the guidance and use a suggested swap or future meal idea.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-gradient-to-b from-brand-darker to-brand-dark-active py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(38rem 26rem at 15% 0%, rgba(146,120,231,0.22) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] text-[#b8a5ff] uppercase">
          How BurnLoop works
        </span>
        <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Three steps to a more confident next meal.
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-white/65">
          Simple information in. Clear, condition-aware educational guidance
          out.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.num}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
            >
              <span className="font-mono text-sm font-medium text-[#b8a5ff]">
                {step.num}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-white/65">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <Button size="default" className="mt-12 w-fit" asChild>
          <a href="#signup">Create your plan</a>
        </Button>
      </div>
    </section>
  );
}
