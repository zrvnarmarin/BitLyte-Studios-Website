import AboutProject from "./AboutProject";
import ClientFacts from "./ClientFacts";
import HeroSection from "./HeroSection";
import ProblemAndSolution from "./ProblemAndSolution";

export default function Home() {
    return (
      <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
        <HeroSection />
        <ClientFacts />
        <AboutProject />
        <ProblemAndSolution />
      </main>
    );
  }