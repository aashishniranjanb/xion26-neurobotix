"use client";
import { motion } from "motion/react";
import { Asimovian } from "next/font/google";

const asimovian = Asimovian({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-5 sm:px-6 md:px-12 relative z-10">
            <div className="pointer-events-none absolute inset-0 scan-lines" />
            {/* XION 2026 — Big Golden Metallic Title */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-4 flex flex-col items-center relative"
>               
                {/* XION — Massive */}
                <h1 className="xion-3d">
                    XION
                </h1>

                {/* 2026 — Smaller + Different Style */}
                <span 
                    data-text="2026"
                    className={`${asimovian.className} mt-6 text-lg sm:text-xl md:text-2xl tracking-[0.8em] text-gold-primary relative glitch-text`}
                >
                    2026
                </span>
            </motion.div>

            {/* NeuroBotix — Subtitle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
                className="relative mb-3 sm:mb-5 md:mb-6"
            >
                <div className="absolute -inset-4 bg-gold-primary/10 blur-3xl rounded-full animate-pulse" />
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                    Neuro<span className="gold-gradient-text">Botix</span>
                </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-2xl text-xs xs:text-sm sm:text-lg md:text-xl font-medium tracking-wide mb-6 sm:mb-8 md:mb-10"
            >
                <span className="text-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                    Where human neural complexity meets autonomous robotic precision.
                </span>
                <span className="text-gold-primary/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                    {" "}
                    Inspired by brains. Built by engineers.
                </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full xs:w-auto"
            >
                <button className="gold-glitch-btn relative overflow-hidden">
                    <span data-text="Initialize System">
                        Register Now
                    </span>
                </button>
                <button className="px-5 py-2.5 xs:px-6 xs:py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 border border-gold-primary/20 text-gold-primary font-bold uppercase tracking-[0.1em] xs:tracking-[0.15em] sm:tracking-[0.2em] text-[10px] xs:text-xs sm:text-sm rounded-none hover:bg-gold-primary/5 transition-all">
                    Protocol 01
                </button>
            </motion.div>
        </div>
    );
}
