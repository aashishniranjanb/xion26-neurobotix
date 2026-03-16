"use client";

import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

// ── Lazy-load heavy 3D/canvas components ────────────────────
// These are the biggest performance killers: Three.js + .glb model + particle engine.
// By lazy-loading them, the page renders instantly with the hero text,
// and the heavy stuff loads in the background after the critical content is visible.

const RobotScene = dynamic(() => import("@/components/hero/RobotScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[200px] h-[200px] rounded-full bg-gold-primary/10 blur-3xl animate-pulse" />
    </div>
  ),
});

const Engine = dynamic(
  () => import("@/components/Vortex/Engine").then((mod) => mod.Engine),
  {
    ssr: false,
    loading: () => <div className="h-full w-full" />,
  }
);

export default function HeroSection() {
  return (
    <section aria-label="Welcome Hero" className="h-screen w-full relative overflow-hidden bg-[#030303]">
      <Engine className="h-full w-full" aria-hidden="true">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center h-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Left Content */}
          <div className="w-1/2 relative z-20">
            <Hero />
          </div>

          {/* Right Robot */}
          <div className="absolute right-0 top-0 h-full w-[55%] pointer-events-auto z-10 overflow-visible">
            <RobotScene />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center justify-end h-[100svh] px-4 pt-24 pb-12 relative z-10 text-center gap-2">
          {/* Robot — fits gracefully within the available space above the text */}
          <div className="relative w-full max-w-[280px] aspect-square flex-shrink-1 pointer-events-none">
            <RobotScene />
          </div>

          {/* Text content */}
          <div className="relative z-20 w-full max-w-sm flex-shrink-0">
            <Hero />
          </div>
        </div>
      </Engine>
    </section>
  );
}