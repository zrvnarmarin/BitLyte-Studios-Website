import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import StepsSection from "./StepsSection";
import FAQSection from "@/app/(home-sections)/FAQSection";
import TestimonialsSection from "@/app/(home-sections)/TestimonialsSection";
import SimilarServicesSection from "./SimilarServicesSection";
import CTASection from "./CTASection";

export default function Home({ params }: { params: { serviceId: string } }) {
    return (
      <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
        <HeroSection serviceName={params.serviceId} />
        <BenefitsSection />
        {/* <StepsSection />
        <TestimonialsSection />
        <SimilarServicesSection />
        <FAQSection />
        <CTASection /> */}
      </main>
    );
  }