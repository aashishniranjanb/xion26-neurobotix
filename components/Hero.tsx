"use client";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <div className="flex flex-col items-start text-left relative z-10 w-full py-12 md:py-0">
            {/* XION 2026 */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-2"
            >
                <span className="text-gold-primary tracking-[0.6em] text-[clamp(0.6rem,2vw,1rem)] uppercase font-black">
                    XION
                </span>
                <div className="flex items-center gap-4 mt-1">
                    <h2 className="text-[clamp(3.5rem,10vw,8rem)] font-black text-white leading-none tracking-tighter">
                        20<span className="gold-gradient-text">26</span>
                    </h2>
                </div>
            </motion.div>

            {/* NEUROBOTIX */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-6"
            >
                <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black text-white uppercase leading-[0.8] tracking-tight">
                    NEURO<span className="gold-gradient-text">BOTIX</span>
                </h1>
            </motion.div>

            {/* TAGLINE */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-white/60 text-[clamp(0.7rem,1.5vw,1.1rem)] max-w-lg leading-relaxed mb-8 font-medium"
            >
                Where human neural complexity meets autonomous robotic precision.
                <span className="text-gold-primary block mt-1">Inspired by brains. Built by engineers.</span>
            </motion.p>

            {/* BUTTONS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex items-center flex-wrap gap-4"
            >
                <button className="bg-gold-primary text-black px-8 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300">
                    Register Now
                </button>
                <button className="border border-gold-primary/30 text-gold-primary px-8 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-gold-primary/5 transition-all duration-300">
                    Protocol 01
                </button>
            </motion.div>
        </div>
    );
}
