import HeroSection from "./(home-sections)/HeroSection";
import ServicesSection from './(home-sections)/ServicesSection'
import ProjectsSection from './(home-sections)/ProjectsSection'
import TestimonialsSection from "./(home-sections)/TestimonialsSection";
import AchievementsSection from './(home-sections)/AchievementsSection'
import FAQSection from './(home-sections)/FAQSection'
import CTASection from "./(home-sections)/CTASection";
import Footer from "./components/Footer";
import WhyUsSection from "./(home-sections)/WhyUsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
      <HeroSection />
       <WhyUsSection />
      <ServicesSection />
      <ProjectsSection />
      {/*<AchievementsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection /> */}
      {/* <Footer /> */}
    </main>
  );
}