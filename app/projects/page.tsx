import HeroSection from "../projects/HeroSection";
import ProjectsListSection from "./ProjectsListSection";

export default function Home() {
    return (
      <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
        <HeroSection />
        <ProjectsListSection />
      </main>
    );
  }