import { Button } from "@/components/ui/button";

export function StickyCta() {
  return (
    <Button
      size="default"
      className="fixed right-6 bottom-6 z-40 hidden shadow-[0_16px_36px_-10px_rgba(114,89,197,0.6)] lg:inline-flex"
      asChild
    >
      <a href="#signup">Start free</a>
    </Button>
  );
}
