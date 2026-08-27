import { Button } from "@/components/ui/button";

export function HabitsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        {/* Decorative floating cards, warm accent for variety */}
        <div className="relative order-2 flex h-80 items-center justify-center rounded-[2rem] bg-gradient-to-br from-amber-50 to-orange-50 sm:h-96 lg:order-1">
          <div className="absolute top-10 left-6 w-56 -rotate-2 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] sm:left-10">
            <p className="font-body text-sm font-medium text-foreground">
              A clearer choice
            </p>
            <p className="mt-1 font-body text-sm font-semibold text-brand-normal-active">
              without the overwhelm
            </p>
          </div>
          <div className="absolute right-6 bottom-10 w-56 rotate-3 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] sm:right-10">
            <p className="font-body text-sm font-medium text-foreground">
              Built around your
            </p>
            <p className="mt-1 font-body text-sm font-semibold text-brand-normal-active">
              stated profile
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center rounded-full border border-brand-normal/25 bg-brand-light px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] text-brand-normal-active uppercase">
            Designed for real life
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Small guidance can lead to better habits.
          </h2>
          <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-muted-foreground">
            Whether you are planning the week or deciding on lunch, BurnLoop
            is made to make the next choice feel easier&mdash;not perfect.
          </p>
          <Button size="default" className="mt-8 w-fit" asChild>
            <a href="#signup">Try BurnLoop free</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
