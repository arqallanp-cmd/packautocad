import MarqueeTicker37 from "@/components/teste37/MarqueeTicker37";
import HeroSection37 from "@/components/teste37/HeroSection37";
import ProductPreview37 from "@/components/teste37/ProductPreview37";
import SocialProofWall37 from "@/components/teste37/SocialProofWall37";
import ProblemSection from "@/components/ProblemSection";
import BlocksSection37 from "@/components/teste37/BlocksSection37";
import BonusSection37 from "@/components/teste37/BonusSection37";
import PricingSection37 from "@/components/teste37/PricingSection37";
import GuaranteeSection from "@/components/GuaranteeSection";
import AuthorSection from "@/components/AuthorSection";
import FaqSection37 from "@/components/teste37/FaqSection37";
import CtaFooter37 from "@/components/teste37/CtaFooter37";
import FloatingCta37 from "@/components/teste37/FloatingCta37";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Teste37 = () => {
  useSmoothScroll();
  return (
    <main className="min-h-screen">
      <MarqueeTicker37 />
      <HeroSection37 />
      <ProblemSection />
      <ProductPreview37 />
      <BlocksSection37 />
      <SocialProofWall37 />
      <BonusSection37 />
      <PricingSection37 />
      <GuaranteeSection />
      <AuthorSection />
      <FaqSection37 />
      <CtaFooter37 />
      <FloatingCta37 />
    </main>
  );
};

export default Teste37;
