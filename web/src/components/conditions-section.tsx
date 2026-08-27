import { ArrowRightIcon, DropletIcon, HeartPulseIcon } from "lucide-react";

const CONDITIONS = [
  {
    icon: DropletIcon,
    pill: "Blood sugar awareness",
    pillTone: "brand" as const,
    title: "Diabetes meal guidance",
    body: "See meals in the context of your stated preferences and goals, then get practical ideas for your next choice.",
  },
  {
    icon: HeartPulseIcon,
    pill: "Heart-health awareness",
    pillTone: "amber" as const,
    title: "Cholesterol-friendly planning",
    body: "Build meals with your health goals in mind and get useful swaps for future choices.",
  },
];

const pillClasses = {
  brand: "bg-brand-light text-brand-normal-active",
  amber: "bg-amber-50 text-amber-700",
};

export function ConditionsSection() {
  return (
    <section id="conditions" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-normal/25 bg-brand-light px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] text-brand-normal-active uppercase">
            Start with your profile
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Guidance shaped around you.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Choose a focus area to learn how BurnLoop supports clearer meal
            decisions. It provides educational guidance&mdash;not diagnosis or
            treatment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CONDITIONS.map((condition) => (
            <article
              key={condition.title}
              className="group relative overflow-hidden rounded-3xl border border-brand-normal/10 bg-white p-8 shadow-[0_30px_60px_-40px_rgba(114,89,197,0.35)] transition-shadow hover:shadow-[0_40px_70px_-35px_rgba(114,89,197,0.4)]"
            >
              <div
                className="absolute -top-10 -right-10 -z-10 size-40 rounded-full bg-brand-light blur-2xl transition-transform duration-500 group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-light text-brand-normal">
                <condition.icon className="size-5" />
              </div>

              <span
                className={`mt-5 inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium tracking-wide ${pillClasses[condition.pillTone]}`}
              >
                {condition.pill}
              </span>

              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {condition.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                {condition.body}
              </p>

              <a
                href="#signup"
                className="mt-6 inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-normal-active transition-colors hover:text-brand-dark"
              >
                Explore {condition.title.split(" ")[0].toLowerCase()} guidance
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
