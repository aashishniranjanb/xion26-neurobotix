"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background depth - same as home for continuity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-primary/[0.03] blur-3xl" />
        <div className="absolute inset-0 scan-lines opacity-20" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-primary tracking-[0.6em] text-xs uppercase mb-8 block">
            // Error Code: 404
          </span>
          
          <h1 className="text-8xl md:text-9xl font-black text-white mb-6 tracking-tighter relative inline-block">
            LOST
            <motion.span 
              animate={{ 
                opacity: [0, 1, 0, 1, 0.5, 1],
                x: [0, -2, 2, -1, 0]
              }}
              transition={{ 
                duration: 0.2, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
              className="absolute inset-0 text-gold-primary/30 blur-sm -z-10"
            >
              LOST
            </motion.span>
          </h1>

          <p className="text-white/40 text-lg md:text-xl mb-12 leading-relaxed font-light tracking-wide">
            Signal lost. Neural pathway not found.<br />
            You've ventured beyond the calibrated arena.
          </p>

          <Link href="/">
            <button className="group relative px-10 py-4 bg-transparent transition-all duration-300 overflow-hidden">
              {/* Golden Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] opacity-90 group-hover:opacity-100 transition-opacity" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10 text-black font-black uppercase tracking-[0.3em] text-sm">
                Return to Base
              </span>
              
              {/* Glitch sub-elements */}
              <div className="absolute top-0 left-0 w-2 h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform" />
              <div className="absolute top-0 right-0 w-2 h-full bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative HUD corners */}
      <div className="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-gold-primary/20" />
      <div className="absolute top-12 right-12 w-12 h-12 border-t-2 border-r-2 border-gold-primary/20" />
      <div className="absolute bottom-12 left-12 w-12 h-12 border-b-2 border-l-2 border-gold-primary/20" />
      <div className="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-gold-primary/20" />
    </div>
  );
}
