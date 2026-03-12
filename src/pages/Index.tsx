import MarqueeTicker from "@/components/MarqueeTicker";
import HeroSection from "@/components/HeroSection";
import ProductPreview from "@/components/ProductPreview";
import SocialProofWall from "@/components/SocialProofWall";
import ProblemSection from "@/components/ProblemSection";
import BlocksSection from "@/components/BlocksSection";
import BonusSection from "@/components/BonusSection";
import SecondCta from "@/components/SecondCta";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import AuthorSection from "@/components/AuthorSection";
import FaqSection from "@/components/FaqSection";
import CtaFooter from "@/components/CtaFooter";
import FloatingCta from "@/components/FloatingCta";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();
  return (
    <main className="min-h-screen">
      <MarqueeTicker />
      <HeroSection />
      <ProductPreview />
      <SocialProofWall />
      <ProblemSection />
      <BlocksSection />
      <BonusSection />
      <SecondCta />
      <PricingSection />
      <GuaranteeSection />
      <AuthorSection />
      <FaqSection />
      <CtaFooter />
      <FloatingCta />
    </main>
  );
};

export default Index;
