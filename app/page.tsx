"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import VideoIntro from "@/components/VideoIntro";
// import CinematicIntro from "@/components/CinematicIntro"; // Preserved as requested

export default function Home() {
  const [introStep, setIntroStep] = useState<"loading" | "intro" | "hero">("loading");

  useEffect(() => {
    // Ensure accurate hydration by only accessing sessionStorage after mount
    const introPlayed = sessionStorage.getItem("xion_intro_played") === "true";
    setIntroStep(introPlayed ? "hero" : "intro");
  }, []);

  // Prevent flash of content during hydration
  if (introStep === "loading") {
    return <div className="min-h-screen bg-[#020202]" />;
  }

  return (
    <main
      className="min-h-screen bg-black-core animate-viscosity overflow-hidden"
      data-perf-step={introStep}
    >
      {introStep === "intro" ? (
        <VideoIntro
          onComplete={() => {
            sessionStorage.setItem("xion_intro_played", "true");
            setIntroStep("hero");
            // Dispatch with a slight delay to ensure state update has propagated
            setTimeout(() => {
              window.dispatchEvent(new Event("xion_intro_finished"));
            }, 50);
          }}
        />
      ) : (
        <section className="hero-content-reveal hero-content-visible">
          <HeroSection />
        </section>
      )}
    </main>
  );
}
