import { CheckIcon } from "lucide-react";

const BENEFITS = [
  {
    title: "Personalized starting point",
    body: "Set your goals, allergies, and health information once.",
  },
  {
    title: "Meal-by-meal context",
    body: "Scan a meal and understand what may matter for your plan.",
  },
  {
    title: "Practical next steps",
    body: "Get approachable ideas for swaps and future meals.",
  },
];

export function WhySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-normal/25 bg-brand-light px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] text-brand-normal-active uppercase">
            Less guessing, more clarity
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Stop second-guessing every meal.
          </h2>
          <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-muted-foreground">
            A meal plan has to fit real life. BurnLoop turns profile details
            and meal scans into small, practical guidance you can use right
            away.
          </p>

          <div className="mt-9 flex flex-col gap-6">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-normal text-white">
                  <CheckIcon className="size-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="mt-0.5 font-body text-sm leading-relaxed text-muted-foreground">
                    {benefit.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative floating cards */}
        <div className="relative flex h-80 items-center justify-center rounded-[2rem] bg-brand-light/60 sm:h-96">
          <div className="absolute top-10 left-6 w-52 -rotate-3 rounded-2xl border border-brand-normal/10 bg-white p-4 shadow-[0_20px_40px_-20px_rgba(114,89,197,0.4)] sm:left-10">
            <p className="font-body text-sm font-medium text-foreground">
              &#10003; Meal logged
            </p>
            <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              Guidance ready
            </p>
          </div>
          <div className="absolute right-6 bottom-10 w-52 rotate-2 rounded-2xl border border-brand-normal/10 bg-white p-4 shadow-[0_20px_40px_-20px_rgba(114,89,197,0.4)] sm:right-10">
            <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              Tomorrow&rsquo;s idea
            </p>
            <p className="mt-1 font-body text-sm font-semibold text-brand-normal-active">
              Try a lighter swap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
