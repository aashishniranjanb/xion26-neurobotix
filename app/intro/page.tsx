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
            setTimeout(() => setPhase(1), 400),    // rays fade in (slightly slower start)
            setTimeout(() => setPhase(2), 1400),   // logo + text appear
            setTimeout(() => setPhase(3), 4600),   // fade to black
            setTimeout(() => router.push("/home"), 5600), // navigate
        ];

        return () => timers.forEach(clearTimeout);
    }, [router]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#020202] flex items-center justify-center">
            {/* --- CINEMATIC OVERLAYS --- */}

            {/* Subtle Film Grain */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            {/* Chromatic Aberration Vignette */}
            <div className="absolute inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Light Rays */}
            <div
                className="absolute inset-0 transition-opacity duration-[1500ms] mix-blend-screen"
                style={{ opacity: phase >= 1 && phase < 3 ? 0.8 : 0 }}
            >
                <LightRays
                    raysColor="#d4af37" // Premium Metallic Gold
                    raysSpeed={2.0}
                    rayCount={26}
                    lightSpread={1.8}
                    rayLength={3.5}
                    pulsating={true}
                    fadeDistance={1.2}
                />
            </div>

            {/* Particle dust */}
            <div
                className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
                style={{ opacity: phase >= 1 && phase < 3 ? 0.5 : 0 }}
            >
                {Array.from({ length: 40 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[1.5px] h-[1.5px] bg-yellow-400/50 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 6}s`,
                        }}
                    />
                ))}
            </div>

            {/* Central Content: Logo + Text */}
            <div
                className="absolute flex flex-col items-center transition-all duration-[1200ms] z-30"
                style={{
                    opacity: phase >= 2 && phase < 3 ? 1 : 0,
                    transform: phase >= 2 && phase < 3 ? "scale(1) translateY(0)" : "scale(0.9) translateY(30px)",
                    filter: phase === 2 ? "none" : "blur(4px)",
                }}
            >
                {/* Spotlight ring behind logo */}
                <div className="absolute -inset-12 md:-inset-24 rounded-full bg-yellow-500/10 blur-3xl animate-pulse" />

                {/* Logo with Chromatic Aberration effect */}
                <div className="relative w-36 h-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 group">
                    <Image
                        src="/xion-logo.png"
                        alt="XION Robotics Club"
                        fill
                        className="object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                        priority
                    />
                    {/* Ghost effect layer (Chromatic Aberration) */}
                    <Image
                        src="/xion-logo.png"
                        alt=""
                        fill
                        className="object-contain opacity-20 absolute top-[1px] left-[1px] mix-blend-screen filter hue-rotate(90deg) blur-[1px]"
                    />
                </div>

                {/* Title */}
                <h1
                    className="mt-8 xs:mt-10 text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-[0.4em] text-transparent bg-clip-text"
                    style={{
                        backgroundImage: "linear-gradient(180deg, #FFD700, #DAA520, #B8860B)",
                        filter: "drop-shadow(0 4px 15px rgba(255, 215, 0, 0.5))",
                    }}
                >
                    XION 2026
                </h1>

                {/* Subtitle */}
                <p className="mt-2 xs:mt-3 text-[10px] xs:text-xs sm:text-sm tracking-[0.6em] uppercase font-bold text-yellow-500/70">
                    NeuroBotix
                </p>

                {/* Horizontal gold line separator */}
                <div className="mt-5 xs:mt-6 w-24 xs:w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            </div>

            {/* Fade-to-black overlay */}
            <div
                className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-1000 z-50"
                style={{ opacity: phase === 3 ? 1 : 0 }}
            />
        </div>
    );
}
