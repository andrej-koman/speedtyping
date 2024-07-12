import HeroSection from "./_components/hero-section";
import FeaturesSection from "./_components/features-section";
import FaqsSection from "./_components/faqs-section";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <HeroSection />
      <FeaturesSection />
      <FaqsSection />
    </div>
  );
}
