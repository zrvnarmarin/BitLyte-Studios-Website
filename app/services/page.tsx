import HeroSection from "./(services-sections)/HeroSection";
import ServiceCategoriesSection from './(services-sections)/ServiceCategoriesSection'
import OurProcessessSection from './(services-sections)/OurProcessessSection'
import CTASection from "./(services-sections)/CTASections";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <ServiceCategoriesSection />
      <OurProcessessSection />
      <TestimonialsSection 
        headingColor="linear-gradient-purple-text" 
        buttonColor="bg-gradient-to-r from-[#C17EF1] to-[#AF5AED]" 
        nextButtonColor="bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"
        isCTAButtonVisible={false}
      />
      <CTASection />
    </main>
  );
}
