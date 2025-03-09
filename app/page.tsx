import HeroSection from "./(home-sections)/HeroSection";
import ServicesSection from "./(home-sections)/ServicesSection";
import ProjectsSection from "./(home-sections)/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import WhyUsSection from "./(home-sections)/WhyUsSection";
import PromisesSection from "./(home-sections)/PromisesSection";
import ParagraphTwo from "./(home-sections)/ParagraphTwo";
import ParagraphSectionThree from "./(home-sections)/ParagraphSectionThree";
import OurProcessessSection from "./services/(services-sections)/OurProcessessSection";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <div className="hidden md:flex">
        <ParagraphSectionThree />
      </div>
      <ProjectsSection />
      {/* <AchievementsSection /> */}
      <OurProcessessSection />
      {/* <ParagraphTwo /> */}
      <PromisesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
