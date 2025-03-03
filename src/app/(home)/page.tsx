import HeroSection from "./_components/hero-section";
import FeaturesSection from "./_components/features-section";
import FaqsSection from "./_components/faqs-section";
import Footer from "./_components/footer";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <HeroSection />
      <FeaturesSection />
      <FaqsSection />
      <Footer />
    </div>
  );
}
