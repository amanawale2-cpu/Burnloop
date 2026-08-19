import Image from "next/image";
import { FlameIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const HEALTH_STATS = [
  { label: "Energy", value: "72", status: "Stable", tone: "good" as const },
  { label: "Sugar Spike", value: "58", status: "Medium", tone: "caution" as const },
  { label: "Fullness", value: "72", status: "Stable", tone: "good" as const },
];

const toneClasses = {
  good: "text-brand-normal",
  caution: "text-amber-600",
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
      {/* Ambient brand glow — a soft radial wash, no hard clip edges */}
      <div
        className="animate-drift pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(42rem 30rem at 88% 10%, var(--color-brand-light) 0%, transparent 62%), radial-gradient(26rem 22rem at 6% 78%, var(--color-brand-light-hover) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10">
        {/* Copy column */}
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-normal/25 bg-brand-light px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] text-brand-normal-active uppercase">
            Personalized meal guidance
          </span>

          <h1 className="mt-6 max-w-xl font-display text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl">
            Is your food{" "}
            <span className="bg-gradient-to-r from-flame-1 via-brand-normal to-brand-dark bg-clip-text text-transparent">
              safe for your body?
            </span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
            Know what to eat and what to avoid with personalized guidance
            based on your health condition.
          </p>

          <div className="mt-9 flex flex-col gap-4">
            <Button size="default" className="w-fit" asChild>
              <a href="#signup">Sign up for free</a>
            </Button>
            <p className="font-mono text-xs tracking-wide text-muted-foreground/80 uppercase">
              Free to start, no credit card, 30&nbsp;seconds to set up
            </p>
          </div>
        </div>

        {/* Signature element: the actual BurnLoop home screen */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
          <div className="relative rounded-[2.5rem] border border-brand-normal/10 bg-white p-3 shadow-[0_50px_100px_-35px_rgba(114,89,197,0.45)]">
            <div className="rounded-[2rem] border border-black/5 bg-white p-5">
              {/* status row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src="/logo/icon.svg" alt="" width={20} height={26} className="h-5 w-auto" />
                  <span className="font-display text-sm font-semibold text-foreground">
                    BurnLoop
                  </span>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-brand-light px-2.5 py-1 font-mono text-[11px] font-medium text-brand-normal-active">
                  <FlameIcon className="size-3" />
                  14 day streak
                </span>
              </div>

              {/* coach card */}
              <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-normal to-brand-dark p-4 text-white shadow-[0_16px_30px_-14px_rgba(86,67,148,0.6)]">
                <p className="font-mono text-[10px] tracking-[0.12em] text-white/70 uppercase">
                  Today&rsquo;s coach
                </p>
                <p className="mt-1.5 font-body text-sm leading-snug font-medium">
                  You had a heavy meal. Let&rsquo;s balance it out today.
                </p>
                <button className="mt-3 rounded-full bg-white/15 px-3.5 py-1.5 font-body text-xs font-medium text-white">
                  Generate plan now
                </button>
              </div>

              {/* today's health */}
              <div className="mt-4">
                <p className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground/70 uppercase">
                  Today&rsquo;s health
                </p>
                <dl className="mt-2 grid grid-cols-3 gap-2">
                  {HEALTH_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-brand-light px-2 py-2.5 text-center"
                    >
                      <dt className="font-body text-[10px] leading-tight text-muted-foreground">
                        {stat.label}
                      </dt>
                      <dd
                        className={`mt-1 font-mono text-base font-semibold ${toneClasses[stat.tone]}`}
                      >
                        {stat.value}
                      </dd>
                      <dd className="font-body text-[9px] text-muted-foreground/80">
                        {stat.status}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* recent meal */}
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-black/5 p-3">
                <div className="size-11 shrink-0 rounded-xl bg-gradient-to-br from-amber-200 to-orange-300" />
                <div className="min-w-0">
                  <p className="truncate font-body text-xs font-medium text-foreground">
                    Pepperoni Pizza &amp; Cheeseburger
                  </p>
                  <div className="mt-1 flex gap-1.5">
                    <span className="rounded-full bg-red-50 px-1.5 py-0.5 font-mono text-[9px] font-medium text-red-600">
                      High Sugar Spike
                    </span>
                    <span className="rounded-full bg-red-50 px-1.5 py-0.5 font-mono text-[9px] font-medium text-red-600">
                      High Sodium
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute -right-8 -bottom-8 -z-10 size-44 rounded-full bg-brand-light-hover blur-3xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
