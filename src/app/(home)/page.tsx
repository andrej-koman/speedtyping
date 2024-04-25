import HeroSection from "./_components/hero-section";
import { BackgroundBeams } from "./_components/background-beams";

export default async function HomePage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <HeroSection />
      <BackgroundBeams />
    </div>
  );
}