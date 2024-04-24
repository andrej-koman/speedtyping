"use client";
import { TypewriterEffectSmooth } from "~/components/ui/typewriter-effect";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
    const words = [
        {
            text: "hitrostnotipkanje",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                The road to freedom starts from here
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col mt-5 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <Button variant="default" asChild>
                    <Link href="/play">Play</Link>
                </Button>
                <Button variant="secondary" asChild>
                    <Link href="/sign-in">Sign in</Link>
                </Button>
            </div>
        </div>
    );
}
