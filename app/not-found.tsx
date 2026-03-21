"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-[#030303] relative overflow-hidden">
      {/* Background Neural Detail */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-primary/[0.05] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_70%)]" />
      </div>

      {/* Glitched 404 Text */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="text-[120px] md:text-[200px] font-black uppercase leading-none tracking-tighter text-white/5 relative">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-6xl md:text-8xl font-black uppercase gold-gradient-text animate-pulse">
              Lost
            </h2>
          </div>
          
          {/* Glitch overlays */}
          <motion.div 
            animate={{ x: [-2, 2, -1], opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
            className="absolute inset-0 text-[#FFD700] mix-blend-screen pointer-events-none blur-[2px] translate-x-1"
          >
             <h1 className="text-[120px] md:text-[200px] font-black tracking-tighter opacity-20">404</h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <p className="text-gold-primary/60 tracking-[0.5em] text-xs uppercase mb-8">
            // SIGNAL LOST: Neural Pathway Not Found
          </p>
          <p className="text-white/40 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed italic">
            "The data stream has been interrupted. Your current coordinates do not exist in the XION architecture."
          </p>

          <Link href="/home">
            <button className="gold-glitch-btn px-10 py-4 group">
              <span className="flex items-center gap-3">
                Return to Base
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Technical HUD Overlays */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-20 hidden md:block">
        <div className="text-[10px] font-mono text-gold-primary space-y-1">
          <p>ERROR_CODE: 0x00404</p>
          <p>STATUS: UNREACHABLE</p>
          <p>PROTOCOL: NEURO_LINK_FAIL</p>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 pointer-events-none opacity-20 hidden md:block">
         <div className="w-32 h-32 border border-gold-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
            <div className="w-1 h-20 bg-gold-primary/40 rounded-full" />
         </div>
      </div>

      {/* Global Scanlines */}
      <div className="absolute inset-0 pointer-events-none scan-lines opacity-20" />
    </main>
  );
}
