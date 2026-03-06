"use client";

import Hero from "@/components/Hero";
import RobotScene from "@/components/hero/RobotScene";

export default function HeroSection() {
    return (
        <div className="h-screen w-full relative overflow-hidden">
            {/* ─── Main Hero Content ─── */}
            <div className="hero-content-reveal hero-content-visible">
                {/* Desktop: Full canvas vortex with Hero overlaid */}
                <article className="hidden md:block h-full w-full">
                    <Engine className="flex items-center flex-col justify-center pt-36 px-6 md:px-10 py-4 w-full h-full">
                        <Hero />
                    </Engine>
                </article>

                {/* Mobile: Interactive Vortex Engine + CSS glow + Hero centered */}
                <article className="flex md:hidden h-full w-full flex-col items-center justify-center pt-28 relative overflow-hidden">
                    <Engine className="flex items-center flex-col justify-center w-full h-full pt-8 px-4">
                        {/* Optimized golden glow orb — CSS only, zero GPU cost */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-br from-yellow-500/8 via-yellow-600/5 to-transparent blur-3xl animate-pulse" />
                        </div>
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full bg-gold-primary/6 blur-2xl animate-ping opacity-30" />

                        <Hero />
                    </Engine>
                </article>
            </div>
        </div>

        {/* Right — Robot, overflow visible so arms don't get clipped */}
        <div
          className="absolute right-0 top-0 h-screen"
          style={{ width: "58%", overflow: "visible" }}
        >
          <RobotScene />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden h-full w-full flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-br from-yellow-500/8 via-yellow-600/5 to-transparent blur-3xl animate-pulse" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full bg-gold-primary/6 blur-2xl animate-ping opacity-30" />
        <Hero />
      </div>

    </div>
  );
}