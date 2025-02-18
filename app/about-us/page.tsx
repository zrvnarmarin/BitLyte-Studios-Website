import HeroSection from './(about-us-sections)/HeroSection'
import CTASection from '../components/CTASection';
import MissionAndVision from './(about-us-sections)/MissionAndVision';
import ValuesSection from './(about-us-sections)/ValuesSection';
import MeetTheFoundersSection from './(about-us-sections)/MettTheFoundersSection';
import IntroSection from './(about-us-sections)/IntroSection';
import WhatWeStandForSection from './(about-us-sections)/WhatWeStandForSection';
import AchievementsSection from '../(home-sections)/AchievementsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#ffffff]">
      <HeroSection />
      <IntroSection />
      <MeetTheFoundersSection />
      {/* <AchievementsSection /> */}
      <MissionAndVision />
      <WhatWeStandForSection /> 
      <ValuesSection />
      <CTASection />
    </main>
  );
}