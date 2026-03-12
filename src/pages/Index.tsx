import MarqueeTicker from "@/components/MarqueeTicker";
import HeroSection from "@/components/HeroSection";
import ProductPreview from "@/components/ProductPreview";
import SocialProofWall from "@/components/SocialProofWall";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BonusSection from "@/components/BonusSection";
import BlockPreviewSection from "@/components/BlockPreviewSection";
import PricingSection from "@/components/PricingSection";
import OfferSection from "@/components/OfferSection";
import FaqSection from "@/components/FaqSection";
import CtaFooter from "@/components/CtaFooter";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();
  return (
    <main className="min-h-screen">
      <MarqueeTicker />
      <HeroSection />
      <ProductPreview />
      <ProblemSection />
      <SolutionSection />
      <SocialProofWall />
      <BonusSection />
      <PricingSection />
      <OfferSection />
      <FaqSection />
      <CtaFooter />
    </main>
  );
};

export default Index;
