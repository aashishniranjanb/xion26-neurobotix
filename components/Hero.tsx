"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex flex-col items-center text-center md:items-start md:text-left relative z-10 w-full py-0 md:py-0">
            {/* XION 2026 */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-1"
            >
                <span className="text-gold-primary tracking-[0.6em] text-[clamp(0.6rem,2vw,1rem)] uppercase font-black">
                    XION
                </span>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-1">
                    <h2 className="text-[clamp(3.5rem,10vw,8rem)] font-black text-white leading-none tracking-tighter">
                        20<span className="gold-gradient-text">26</span>
                    </h2>
                </div>
            </motion.div>

            {/* NEUROBOTIX */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-3"
            >
                <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black text-white uppercase leading-[0.8] tracking-tight">
                    NEURO<span className="gold-gradient-text">BOTIX</span>
                </h1>
            </motion.div>

            {/* TAGLINE */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white/80 text-[clamp(0.75rem,1.5vw,1.1rem)] max-w-[19rem] sm:max-w-lg leading-relaxed mb-4 md:mb-8 font-medium"
            >
                Where human neural complexity meets autonomous robotic precision.
                <span className="text-gold-primary block mt-1">Inspired by brains. Built by engineers.</span>
            </motion.p>

            {/* BUTTONS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center justify-center md:justify-start flex-wrap gap-3 sm:gap-4"
            >
                <Link
                    href="/events"
                    className="bg-gold-primary text-black px-8 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300 inline-block">
                    Register Now
                </Link>
                <button className="border border-gold-primary/30 text-gold-primary px-6 sm:px-8 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-gold-primary/5 transition-all duration-300">
                    Protocol 01
                </button>
            </motion.div>
        </div>
    );
}
