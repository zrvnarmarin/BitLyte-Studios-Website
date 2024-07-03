import HeroSection from './(about-us-sections)/HeroSection'
import MeetTheFoundersSection from './(about-us-sections)/MeetTheFoundersSection'
import ValuesSection from './(about-us-sections)/ValuesSection'
import AdvantagesSection from './(about-us-sections)/AdvantagesSection'
import ServicesSection from '../(home-sections)/ServicesSection';

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <MeetTheFoundersSection />
      <ValuesSection />
      <AdvantagesSection />
      <ServicesSection />
    </main>
  );
}