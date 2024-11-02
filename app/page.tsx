import HeroSection from "./(home-sections)/HeroSection";
import ServicesSection from "./(home-sections)/ServicesSection";
import ProjectsSection from "./(home-sections)/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AchievementsSection from "./(home-sections)/AchievementsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import WhyUsSection from "./(home-sections)/WhyUsSection";
import PromisesSection from "./(home-sections)/PromisesSection";
import ParagraphOne from "./(home-sections)/ParagraphOne";
import ParagraphTwo from "./(home-sections)/ParagraphTwo";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <ProjectsSection />
      <ParagraphOne />
      <AchievementsSection />
      <PromisesSection />
      <ParagraphTwo />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
