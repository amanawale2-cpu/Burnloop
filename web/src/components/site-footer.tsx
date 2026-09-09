import Image from "next/image";
import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "#conditions", label: "Diabetes guidance" },
  { href: "#conditions", label: "Cholesterol guidance" },
  { href: "#how-it-works", label: "How it works" },
];

const SUPPORT_LINKS = [
  { href: "#signup", label: "Download for iPhone" },
  { href: "mailto:contact@burnloopai.com", label: "Contact" },
  { href: "#", label: "Privacy policy" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo/logo-white.svg"
              alt="BurnLoop"
              width={28}
              height={37}
              className="h-8 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-[310px] font-body text-sm leading-relaxed text-white/55">
            Personalized meal guidance for everyday health decisions.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">
            Explore
          </h4>
          <div className="mt-4 flex flex-col gap-2.5">
            {EXPLORE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">
            Support
          </h4>
          <div className="mt-4 flex flex-col gap-2.5">
            {SUPPORT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 font-body text-xs text-white/40 lg:px-10">
          &copy; {year} BurnLoop. General wellness guidance only.
        </p>
      </div>
    </footer>
  );
}
