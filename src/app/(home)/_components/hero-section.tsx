"use client";
import { TypewriterEffectSmooth } from "~/components/ui/typewriter-effect";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import PlayIcon from "~/icons/play-icon";

export default function HeroSection() {
    const words = [
        {
            text: "hitrostnotipkanje",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center select-none h-screen">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
                Accelerate Your Typing Skills
            </p>
            <TypewriterEffectSmooth words={words} cursorClassName="bg-primary" />
            <div className="flex flex-col mt-5 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <Button variant="default" className="text-md flex items-center justify-center" asChild>
                    <Link href="/play" className="text-justify">
                        <PlayIcon className="h-5 w-5 me-1" />
                        <span className="mb-[3px]">Play</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
