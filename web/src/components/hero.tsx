import { AlertTriangleIcon, AppleIcon, PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const RISK_STATS = [
  { label: "Sodium Stress", value: "High", tone: "risk" as const },
  { label: "Sugar Spike", value: "High", tone: "risk" as const },
  { label: "Energy Impact", value: "Medium", tone: "caution" as const },
];

const toneClasses = {
  risk: "bg-red-500/15 text-red-300",
  caution: "bg-amber-400/15 text-amber-300",
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Ambient brand glow — decorative, one orchestrated moment */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="animate-drift absolute -top-24 right-[-10%] size-[36rem] rounded-full bg-brand-normal/25 blur-[110px]" />
        <div className="absolute bottom-[-20%] left-[-10%] size-[28rem] rounded-full bg-flame-1/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_var(--background)_78%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10">
        {/* Copy column */}
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-normal/40 bg-brand-normal/10 px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] text-brand-light uppercase">
            Between doctor visits
          </span>

          <h1 className="mt-6 max-w-xl font-display text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl">
            Your doctor can&rsquo;t watch every meal.{" "}
            <span className="bg-gradient-to-r from-flame-1 via-brand-normal to-flame-3 bg-clip-text text-transparent">
              We can.
            </span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
            BurnLoop is the AI health coach that knows your condition before it
            gives you advice. Snap a photo of any meal and get an instant,
            condition-aware alert — for diabetes, kidney disease, heart health,
            and more.
          </p>

          <div className="mt-9 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="default" asChild>
                <a href="#download">Download BurnLoop Free</a>
              </Button>
              <div className="flex items-center gap-2.5">
                <Button variant="outline" size="sm" asChild>
                  <a href="#download" aria-label="Download on the App Store">
                    <AppleIcon className="size-4" />
                    App Store
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#download" aria-label="Get it on Google Play">
                    <PlayIcon className="size-4" />
                    Google Play
                  </a>
                </Button>
              </div>
            </div>
            <p className="font-mono text-xs tracking-wide text-muted-foreground/80 uppercase">
              Free to start · No credit card · 30&nbsp;seconds to set up
            </p>
          </div>
        </div>

        {/* Signature element: the actual meal-review moment */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          <div className="relative rounded-3xl border border-white/10 bg-brand-darker/80 p-5 shadow-[0_40px_100px_-30px_rgba(40,31,69,0.9)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-brand-normal" />
                <span className="font-display text-sm font-semibold text-white">
                  Meal Review
                </span>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground/80">
                2 min ago
              </span>
            </div>

            <div className="mt-4">
              <p className="font-body text-sm font-medium text-white">
                Pepperoni Pizza &amp; Cheeseburger
              </p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground/80">
                1,660 kcal · detected from photo
              </p>
            </div>

            <div className="animate-pulse-soft mt-4 flex items-start gap-3 rounded-2xl border border-red-400/30 bg-red-500/10 p-3.5">
              <AlertTriangleIcon className="mt-0.5 size-4 shrink-0 text-red-300" />
              <div>
                <p className="font-body text-sm font-semibold text-red-200">
                  Caution: not ideal for you
                </p>
                <p className="mt-0.5 font-body text-xs leading-relaxed text-red-200/75">
                  High sodium may raise your blood pressure risk.
                </p>
              </div>
            </div>

            <dl className="mt-4 grid grid-cols-3 gap-2">
              {RISK_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2.5 text-center"
                >
                  <dt className="font-body text-[10px] leading-tight text-muted-foreground/80">
                    {stat.label}
                  </dt>
                  <dd
                    className={`mt-1.5 inline-flex rounded-full px-2 py-0.5 font-mono text-[11px] font-medium ${toneClasses[stat.tone]}`}
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 border-t border-white/10 pt-4 font-body text-xs leading-relaxed text-muted-foreground/80">
              <span className="text-brand-light">Why we&rsquo;re suggesting this —</span>{" "}
              you&rsquo;re managing blood pressure, so keeping sodium in check
              protects your heart today, not just at your next appointment.
            </p>
          </div>

          <div
            className="absolute -right-6 -bottom-6 -z-10 size-40 rounded-full bg-brand-normal/30 blur-3xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
