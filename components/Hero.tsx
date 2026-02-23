"use client";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-5 sm:px-6 md:px-12 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative mb-4 sm:mb-6 md:mb-8"
            >
                <div className="absolute -inset-4 bg-gold-primary/10 blur-3xl rounded-full animate-pulse" />
                <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none">
                    Neuro<span className="gold-gradient-text">Botix</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-2xl text-xs xs:text-sm sm:text-lg md:text-xl text-zinc-400 font-medium tracking-wide mb-6 sm:mb-10 md:mb-12"
            >
                Where human neural complexity meets autonomous robotic precision.
                <span className="text-gold-primary/80"> Inspired by brains. Built by engineers.</span>
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full xs:w-auto"
            >
                <button className="px-5 py-2.5 xs:px-6 xs:py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-gold-primary text-black font-black uppercase tracking-[0.1em] xs:tracking-[0.15em] sm:tracking-[0.2em] text-[10px] xs:text-xs sm:text-sm rounded-none hover:bg-gold-secondary transition-all hover:translate-y-[-2px] active:translate-y-[0px] shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                    Initialize System
                </button>
                <button className="px-5 py-2.5 xs:px-6 xs:py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 border border-gold-primary/20 text-gold-primary font-bold uppercase tracking-[0.1em] xs:tracking-[0.15em] sm:tracking-[0.2em] text-[10px] xs:text-xs sm:text-sm rounded-none hover:bg-gold-primary/5 transition-all">
                    Protocol 01
                </button>
            </motion.div>
        </div>
    );
}
