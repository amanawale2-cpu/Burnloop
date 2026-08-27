import { StarIcon } from "lucide-react";

export function TrustBar() {
  return (
    <section className="border-y border-brand-normal/10 bg-brand-light/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left lg:px-10">
        <p className="font-body text-sm text-muted-foreground">
          Built for people managing everyday nutrition, allergies, and health
          goals.
        </p>
        <div className="flex items-center gap-1.5 font-body text-sm text-foreground">
          <span className="flex text-brand-normal">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-3.5 fill-current" />
            ))}
          </span>
          <strong className="font-semibold">5.0</strong>
          <span className="text-muted-foreground">on the App Store</span>
        </div>
        <a
          href="#signup"
          className="font-body text-sm font-medium text-brand-normal-active transition-colors hover:text-brand-dark"
        >
          Read app reviews &rarr;
        </a>
      </div>
    </section>
  );
}
