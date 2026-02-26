"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import VideoIntro from "@/components/VideoIntro";
import { Engine } from "@/components/Vortex/Engine";

export default function HeroSection() {
    const [videoFinished, setVideoFinished] = useState(false);
    const handleVideoComplete = () => {
        setVideoFinished(true);
        window.dispatchEvent(new CustomEvent("xion_intro_finished"));
    };

    return (
        <div className="h-screen w-full relative overflow-hidden">
            {/* ─── Video Intro Layer ─── */}
            {!videoFinished && (
                <VideoIntro onComplete={handleVideoComplete} />
            )}

            {/* ─── Main Hero Content (revealed after video) ─── */}
            <div
                className={`hero-content-reveal ${videoFinished ? "hero-content-visible" : ""}`}
            >
                {/* Desktop: Full canvas vortex with Hero overlaid */}
                <div className="hidden md:block h-full w-full">
                    <Engine className="flex items-center flex-col justify-center pt-36 px-6 md:px-10 py-4 w-full h-full">
                        <Hero />
                    </Engine>
                </div>

                {/* Mobile: CSS glow effect + Hero centered */}
                <div className="flex md:hidden h-full w-full flex-col items-center justify-center pt-28 relative overflow-hidden">
                    {/* Animated golden glow orb — CSS only, zero GPU cost */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-br from-yellow-500/8 via-yellow-600/5 to-transparent blur-3xl animate-pulse" />
                    </div>
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full bg-gold-primary/6 blur-2xl animate-ping opacity-30" />

                    <Hero />
                </div>
            </div>
        </div>
    );
}
