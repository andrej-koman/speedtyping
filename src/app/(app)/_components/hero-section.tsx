import { TypewriterEffectSmooth } from "~/components/ui/typewriter-effect";

export default function HeroSection() {
    const words = [
        {
            text: "hitrostnotipkanje",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center select-none h-screen">
            <div className="mb-32">
                <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
                    Accelerate Your Typing Skills
                </p>
                <TypewriterEffectSmooth words={words} cursorClassName="bg-primary" />
            </div>
        </div>
    );
}