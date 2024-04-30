import { TypewriterEffectSmooth } from "~/components/ui/typewriter-effect";

export default function HeroSection() {
  const words = [
    {
      text: "hitrostnotipkanje",
    },
  ];
  return (
    <div className="flex h-screen select-none flex-col items-center justify-center">
      <div className="mb-32">
        <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
          Accelerate Your Typing Skills
        </p>
        <TypewriterEffectSmooth words={words} cursorClassName="bg-primary" />
      </div>
    </div>
  );
}
