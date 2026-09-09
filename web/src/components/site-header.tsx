"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#conditions", label: "Conditions we support" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-brand-normal/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="BurnLoop home">
          <Image src="/logo/icon.svg" alt="" width={28} height={37} priority className="h-8 w-auto" />
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            BurnLoop
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="#login">Log in</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#signup">Sign up</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-brand-light md:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <nav className="flex flex-col gap-1" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-3 font-body text-base text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-2">
              <SheetClose asChild>
                <Button asChild>
                  <a href="#signup">Sign up</a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="outline" className="border-white/25 text-white hover:bg-white/10" asChild>
                  <a href="#login">Log in</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
