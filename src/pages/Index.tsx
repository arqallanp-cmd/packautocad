import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BlocksSection from "@/components/BlocksSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import AuthorSection from "@/components/AuthorSection";
import FaqSection from "@/components/FaqSection";
import CtaFooter from "@/components/CtaFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <BlocksSection />
      <BonusSection />
      <PricingSection />
      <GuaranteeSection />
      <AuthorSection />
      <FaqSection />
      <CtaFooter />
    </main>
  );
};

export default Index;
