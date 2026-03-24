import "./LandingPage.css";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import ShowcaseSection from "./ShowcaseSection";
import HowItWorksSection from "./HowItWorksSection";
import PricingSection from "./PricingSection";
import PhilosophySection from "./PhilosophySection";
import FinalCtaSection from "./FinalCtaSection";

/**
 * Landing page produit Zen Coach — une seule page, logique conversion.
 */
export default function LandingPage() {
  return (
    <main className="landing-page">
      <HeroSection />
      <BenefitsSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <PricingSection />
      <PhilosophySection />
      <FinalCtaSection />
    </main>
  );
}
