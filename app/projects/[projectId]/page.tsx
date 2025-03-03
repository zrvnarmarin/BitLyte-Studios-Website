import AboutProject from "./AboutProject";
import HeroSection from "./HeroSection";
import ProblemAndSolution from "./ProblemAndSolution";
import Process from "./Process";
import Results from "./Results";

export default function Home() {
    return (
      <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
        <HeroSection />
        <AboutProject />
        <ProblemAndSolution />
        <Process />
        <Results />
      </main>
    );
  }