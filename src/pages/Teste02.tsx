import MarqueeTicker from "@/components/MarqueeTicker";
import HeroSection from "@/components/HeroSection";
import ProductPreview from "@/components/ProductPreview";
import SocialProofWall from "@/components/SocialProofWall";
import ProblemSection from "@/components/ProblemSection";
import BlocksSection from "@/components/BlocksSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import AuthorSection from "@/components/AuthorSection";
import FaqSection from "@/components/FaqSection";
import CtaFooter from "@/components/CtaFooter";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Teste02 = () => {
  useSmoothScroll();
  return (
    <main className="min-h-screen">
      <MarqueeTicker />
      <HeroSection />
      <ProblemSection />
      <ProductPreview />
      <BlocksSection />
      <SocialProofWall />
      <BonusSection />
      <PricingSection />
      <GuaranteeSection />
      <AuthorSection />
      <FaqSection />
      <CtaFooter />
    </main>
  );
};

export default Teste02;
