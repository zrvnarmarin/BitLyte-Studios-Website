import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import StepsSection from "./StepsSection";
import FAQSection from "@/app/components/FAQSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import SimilarServicesSection from "./SimilarServicesSection";
import CTASection from "@/app/components/CTASection";

export default function Home({ params }: { params: { serviceId: string } }) {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
      <HeroSection serviceName={params.serviceId} />
      <BenefitsSection serviceName={params.serviceId} />
      <StepsSection serviceName={params.serviceId} />
      <TestimonialsSection />
      <SimilarServicesSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
