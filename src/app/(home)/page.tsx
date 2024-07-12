import HeroSection from "./_components/hero-section";
import Features from "./_components/features-section";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <HeroSection />
      <Features />
    </div>
  );
}
