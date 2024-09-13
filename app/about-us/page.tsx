import HeroSection from './(about-us-sections)/HeroSection'
import AdvantagesSection from './(about-us-sections)/ValuesSection'
import ServicesSection from '../(home-sections)/ServicesSection';
import CTASection from '../components/CTASection';
import MissionAndVision from './(about-us-sections)/MissionAndVision';
import ValuesSection from './(about-us-sections)/ValuesSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <MissionAndVision />
      <ValuesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}