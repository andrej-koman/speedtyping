import HeroSection from "../(app)/_components/hero-section";
import { BackgroundBeams } from "../(app)/_components/background-beams";
import Features from "../(app)/_components/features-section";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <Features />
      <BackgroundBeams />
    </div>
  );
}
