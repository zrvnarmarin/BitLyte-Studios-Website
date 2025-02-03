import HeroSection from "./(services-sections)/HeroSection";
import ServiceCategoriesSection from "./(services-sections)/ServiceCategoriesSection";
import OurProcessessSection from "./(services-sections)/OurProcessessSection";
import CTASection from "../components/CTASection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
      <HeroSection />
      <ServiceCategoriesSection />
      <OurProcessessSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </main>
  );
}
