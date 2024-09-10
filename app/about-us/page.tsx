import HeroSection from './(about-us-sections)/HeroSection'
import MeetTheFoundersSection from './(about-us-sections)/MeetTheFoundersSection'
import AdvantagesSection from './(about-us-sections)/AdvantagesSection'
import ServicesSection from '../(home-sections)/ServicesSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <MeetTheFoundersSection />
      <AdvantagesSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
}