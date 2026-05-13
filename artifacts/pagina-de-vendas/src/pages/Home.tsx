import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import WhatYouReceiveSection from "@/components/WhatYouReceiveSection";
import ContentSection from "@/components/ContentSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ShowcaseSection />
      <WhatYouReceiveSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <ContentSection />
      <GuaranteeSection />
      <FinalCTASection />
    </div>
  );
}
