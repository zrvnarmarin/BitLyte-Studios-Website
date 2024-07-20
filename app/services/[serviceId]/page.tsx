import HeroSection from "./HeroSection";

export default function Home({ params }: { params: { serviceId: string } }) {
    return (
      <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
        <HeroSection serviceName={params.serviceId} />
      </main>
    );
  }