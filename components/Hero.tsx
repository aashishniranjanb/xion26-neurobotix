"use client";
import { motion } from "motion/react";
import { Asimovian } from "next/font/google";

const asimovian = Asimovian({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-5 sm:px-6 md:px-12 mt-16 md:mt-20 relative z-10">
            {/* XION 2026 — Big Golden Metallic Title */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-2 sm:mb-3 md:mb-4"
            >
                <h2
                    className="text-[clamp(2.5rem,15vw,8rem)] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-[0.9]"
                    style={{
                        background:
                            "linear-gradient(180deg, #FFD700 0%, #FFB800 30%, #DAA520 60%, #B8860B 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 2px 10px rgba(255, 215, 0, 0.4))",
                    }}
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
                <h1 className="text-[clamp(1.2rem,6vw,3.5rem)] font-black tracking-tighter text-white uppercase leading-none">
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
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
            >
                <button className="flex items-center justify-center min-h-[48px] px-8 py-4 bg-gold-primary text-black font-black uppercase tracking-[0.15em] text-[10px] xs:text-xs rounded-none hover:bg-gold-secondary transition-all hover:translate-y-[-1px] active:translate-y-[0px] shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                    Initialize System
                </button>
                <button className="flex items-center justify-center min-h-[48px] px-8 py-4 border border-gold-primary/20 text-gold-primary font-bold uppercase tracking-[0.15em] text-[10px] xs:text-xs rounded-none hover:bg-gold-primary/5 transition-all">
                    Protocol 01
                </button>
            </motion.div>
        </div>
    );
}
