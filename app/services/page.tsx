import HeroSection from "./(services-sections)/HeroSection";
import ServiceCategoriesSection from "./(services-sections)/ServiceCategoriesSection";
import OurProcessessSection from "./(services-sections)/OurProcessessSection";
import CTASection from "./(services-sections)/CTASections";
import TestimonialsSection from "../(home-sections)/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <ServiceCategoriesSection />
      <OurProcessessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
