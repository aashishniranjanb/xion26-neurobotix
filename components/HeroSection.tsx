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
    <div className="h-screen w-full relative overflow-hidden bg-[#030303]">
      <Engine className="h-full w-full">
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
        <div className="flex md:hidden flex-col items-center justify-center h-full px-6 relative z-10 text-center pt-20">
          {/* Mobile robot background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[300px] h-[300px] rounded-full bg-gold-primary/20 blur-3xl animate-pulse" />
          </div>

          <div className="relative z-20">
            <Hero />
          </div>
        </div>
      </Engine>
    </div>
  );
}