"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { Engine } from "@/components/Vortex/Engine";

const VortexCanvas = dynamic(
    () => import("@/components/hero/VortexCanvas"),
    { ssr: false }
);

export default function HeroSection() {
    return (
        <div className="h-screen w-full relative">
            {/* Desktop: Full canvas vortex with Hero overlaid */}
            <div className="hidden md:block h-full w-full">
                <Engine className="flex items-center flex-col justify-center px-6 md:px-10 py-4 w-full h-full">
                    <Hero />
                </Engine>
            </div>

            {/* Mobile: Lightweight 3D Vortex + Hero stacked */}
            <div className="flex md:hidden h-full w-full flex-col items-center justify-center">
                <VortexCanvas />
                <Hero />
            </div>
        </div>
    );
}
