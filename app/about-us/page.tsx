import HeroSection from './(about-us-sections)/HeroSection'
import CTASection from '../components/CTASection';
import MissionAndVision from './(about-us-sections)/MissionAndVision';
import ValuesSection from './(about-us-sections)/ValuesSection';

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <MissionAndVision />
      <ValuesSection />
      <CTASection />
    </main>
  );
}