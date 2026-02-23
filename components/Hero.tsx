"use client";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative mb-8"
            >
                <div className="absolute -inset-4 bg-gold-primary/10 blur-3xl rounded-full animate-pulse" />
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
                    Neuro<span className="gold-gradient-text">Botix</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-2xl text-lg md:text-xl text-zinc-400 font-medium tracking-wide mb-12 px-4"
            >
                Where human neural complexity meets autonomous robotic precision.
                <span className="text-gold-primary/80"> Inspired by brains. Built by engineers.</span>
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <button className="px-10 py-4 bg-gold-primary text-black font-black uppercase tracking-[0.2em] text-sm rounded-none hover:bg-gold-secondary transition-all hover:translate-y-[-2px] active:translate-y-[0px] shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                    Initialize System
                </button>
                <button className="px-10 py-4 border border-gold-primary/20 text-gold-primary font-bold uppercase tracking-[0.2em] text-sm rounded-none hover:bg-gold-primary/5 transition-all">
                    Protocol 01
                </button>
            </motion.div>
        </div>
    );
}
