import HeroSection from "./(services-sections)/HeroSection";
import ServiceCategoriesSection from './(services-sections)/ServiceCategoriesSection'
import ToolsForBuildingSection from './(services-sections)/ToolsForBuildingSection'
import OurProcessessSection from './(services-sections)/OurProcessessSection'

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <ServiceCategoriesSection />
      <ToolsForBuildingSection />
      <OurProcessessSection />
    </main>
  );
}
