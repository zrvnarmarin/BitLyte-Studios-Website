import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import StepsSection from "./StepsSection";
import FAQSection from "@/app/(home-sections)/FAQSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import SimilarServicesSection from "./SimilarServicesSection";
import CTASection from "./CTASection";

export default function Home({ params }: { params: { serviceId: string } }) {
    return (
      <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
        <HeroSection serviceName={params.serviceId} />
        <BenefitsSection />
        <StepsSection />
        <TestimonialsSection
          headingColor="linear-gradient-purple-text" 
          buttonColor="bg-gradient-to-r from-[#C17EF1] to-[#AF5AED]" 
          nextButtonColor="bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"
          isCTAButtonVisible={false} 
        />
        <SimilarServicesSection />
        <FAQSection />
        <CTASection />
      </main>
    );
  }