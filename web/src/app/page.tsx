import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ConditionsSection } from "@/components/conditions-section";
import { WhySection } from "@/components/why-section";
import { HowItWorks } from "@/components/how-it-works";
import { HabitsSection } from "@/components/habits-section";
import { FaqSection } from "@/components/faq-section";
import { SafetyNotice } from "@/components/safety-notice";
import { SiteFooter } from "@/components/site-footer";
import { StickyCta } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ConditionsSection />
        <WhySection />
        <HowItWorks />
        <HabitsSection />
        <FaqSection />
        <SafetyNotice />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
