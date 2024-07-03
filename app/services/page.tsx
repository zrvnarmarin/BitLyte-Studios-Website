import HeroSection from "./(services-sections)/HeroSection";
import ServiceCategoriesSection from './(services-sections)/ServiceCategoriesSection'
import ToolsForBuildingSection from './(services-sections)/ToolsForBuildingSection'

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <ServiceCategoriesSection />
      <ToolsForBuildingSection />
    </main>
  );
}
