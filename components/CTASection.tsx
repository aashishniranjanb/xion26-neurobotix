"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-primary/[0.03] to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold-primary/[0.05] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="relative border border-gold-primary/15 p-10 md:p-16 lg:p-20 text-center overflow-hidden">

          {/* Corner brackets */}
          {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2",
            "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"
          ].map((c, i) => (
            <motion.span
              key={i}
              className={`absolute w-6 h-6 ${c} border-gold-primary/50`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.05 }}
            />
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold-primary tracking-[0.4em] text-xs uppercase mb-6"
          >
            // Ready to Compete?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] text-white mb-6"
          >
            Enter the<br />
            <span className="gold-gradient-text">Arena</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Registrations are now open. Secure your slot before they fill up —
            seats are limited across all events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <button className="gold-glitch-btn w-full sm:w-auto">
              Explore Events
            </button>

            {/* Secondary CTA */}
            <button className="w-full sm:w-auto px-8 py-4 border border-gold-primary/30 text-gold-primary text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-primary/5 hover:border-gold-primary/60 transition-all duration-300">
              Partner With Us
            </button>
          </motion.div>

          {/* Subtle scan line overlay */}
          <div className="absolute inset-0 pointer-events-none scan-lines opacity-30" />
        </div>
      </div>
    </section>
  );
}
