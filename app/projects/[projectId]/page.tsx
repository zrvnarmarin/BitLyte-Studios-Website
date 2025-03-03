import AboutProject from "./AboutProject";
import HeroSection from "./HeroSection";
import ProblemAndSolution from "./ProblemAndSolution";
import Process from "./Process";
import Results from "./Results";

export default function Home({ params }: { params: { projectId: string } }) {
    return (
      <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
        <HeroSection projectName={params.projectId} />
        <AboutProject projectName={params.projectId} />
        <ProblemAndSolution projectName={params.projectId} />
        <Process projectName={params.projectId} />
        <Results projectName={params.projectId} />
      </main>
    );
  }