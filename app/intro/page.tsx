"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LightRays from "@/components/LightRays";

export default function IntroPage() {
    const router = useRouter();
    const [phase, setPhase] = useState(0);
    // phase 0: black → 1: rays appear → 2: logo + text → 3: fade out

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 300),    // rays fade in
            setTimeout(() => setPhase(2), 1200),   // logo + text appear
            setTimeout(() => setPhase(3), 4200),   // fade to black
            setTimeout(() => router.push("/home"), 5200), // navigate
        ];

        return () => timers.forEach(clearTimeout);
    }, [router]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Light Rays */}
            <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: phase >= 1 && phase < 3 ? 1 : 0 }}
            >
                <LightRays
                    raysColor="#b4a71d"
                    raysSpeed={2.4}
                    rayCount={22}
                    lightSpread={1.5}
                    rayLength={3}
                    pulsating={false}
                    fadeDistance={1.5}
                />
            </div>

            {/* Particle dust */}
            <div
                className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
                style={{ opacity: phase >= 1 && phase < 3 ? 0.6 : 0 }}
            >
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-yellow-400/60 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* Central Content: Logo + Text */}
            <div
                className="absolute flex flex-col items-center transition-all duration-1000"
                style={{
                    opacity: phase >= 2 && phase < 3 ? 1 : 0,
                    transform: phase >= 2 && phase < 3 ? "scale(1) translateY(0)" : "scale(0.85) translateY(20px)",
                }}
            >
                {/* Spotlight ring behind logo */}
                <div className="absolute -inset-8 md:-inset-16 rounded-full bg-yellow-500/5 blur-3xl animate-pulse" />

                {/* Logo */}
                <div className="relative w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-56 md:h-56">
                    <Image
                        src="/xion-logo.png"
                        alt="XION Robotics Club"
                        fill
                        className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                        priority
                    />
                </div>

                {/* Shine sweep line */}
                <div
                    className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent transition-opacity duration-500"
                    style={{
                        opacity: phase === 2 ? 1 : 0,
                        animation: phase === 2 ? "sweepLine 2s ease-in-out infinite" : "none",
                    }}
                />

                {/* Title */}
                <h1
                    className="mt-6 xs:mt-8 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.3em] text-transparent bg-clip-text"
                    style={{
                        backgroundImage: "linear-gradient(180deg, #FFD700, #DAA520, #B8860B)",
                        filter: "drop-shadow(0 2px 12px rgba(255, 215, 0, 0.4))",
                    }}
                >
                    XION 2026
                </h1>

                {/* Subtitle */}
                <p className="mt-2 xs:mt-3 text-xs xs:text-sm sm:text-base tracking-[0.5em] uppercase font-medium text-yellow-600/80">
                    NeuroBotix
                </p>

                {/* Horizontal gold line separator */}
                <div className="mt-4 xs:mt-5 w-20 xs:w-24 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
            </div>

            {/* Fade-to-black overlay */}
            <div
                className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-800"
                style={{ opacity: phase === 3 ? 1 : 0 }}
            />
        </div>
    );
}
