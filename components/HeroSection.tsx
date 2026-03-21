"use client";

import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// ── Lazy-load heavy 3D/canvas components ────────────────────
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section aria-label="Welcome Hero" className="h-[100svh] w-full relative overflow-hidden bg-[#030303]" />
    );
  }

  return <HeroSectionContent />;
}

function HeroSectionContent() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section 
      ref={containerRef}
      aria-label="Welcome Hero" 
      className="h-[100svh] w-full relative overflow-hidden bg-[#030303]"
    >
      <Engine className="h-full w-full" aria-hidden="true">
        {/* Background depth detail */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-primary/[0.03] blur-3xl" 
          />
        </div>

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
        <div className="flex md:hidden flex-col items-center h-[100svh] px-4 pt-24 pb-6 relative z-10 text-center">
          {/* Robot — occupies the space between navbar and text */}
          <div className="flex-1 w-full relative flex items-center justify-center pointer-events-none z-10 min-h-[40vh]">
            <RobotScene />
          </div>

          {/* Text content */}
          <div className="relative z-20 w-full max-w-sm flex-shrink-0 mt-4">
            <Hero />
          </div>
        </div>
      </Engine>
    </section>
  );
}