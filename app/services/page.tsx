import HeroSection from "./(services-sections)/HeroSection";
import ServiceCategoriesSection from './(services-sections)/ServiceCategoriesSection'
import BenefitsSection from './(services-sections)/BenefitsSection'
import OurProcessessSection from './(services-sections)/OurProcessessSection'
import CTASection from "./(services-sections)/CTASections";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <ServiceCategoriesSection />
      <BenefitsSection />
      <OurProcessessSection />
      <CTASection />
    </main>
  );
}
