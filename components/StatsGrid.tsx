"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { value: 2000, suffix: "+", label: "Participants", sub: "engineers & innovators" },
  { value: 100,  suffix: "+", label: "Colleges",     sub: "across india" },
  { value: 15,   suffix: "+", label: "Years Legacy",  sub: "of technical excellence" },
  { value: 25,   suffix: "",  label: "States Reach",  sub: "national scale" },
];

function StatCard({ stat, inView, index }: {
  stat: typeof stats[0];
  inView: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, inView, 2000 + index * 200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center text-center p-8 border border-gold-primary/10 hover:border-gold-primary/35 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 cursor-default"
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold-primary/40 group-hover:border-gold-primary transition-colors duration-300" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold-primary/40 group-hover:border-gold-primary transition-colors duration-300" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold-primary/40 group-hover:border-gold-primary transition-colors duration-300" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold-primary/40 group-hover:border-gold-primary transition-colors duration-300" />

      {/* Number */}
      <div className="text-5xl md:text-6xl font-black gold-gradient-text mb-3 tabular-nums">
        {count}{stat.suffix}
      </div>

      {/* Gold underline pulse */}
      <div className="relative h-px w-12 mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gold-primary/30" />
        <motion.div
          className="absolute inset-0 bg-gold-primary"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
        />
      </div>

      {/* Label */}
      <div className="text-white font-bold text-sm uppercase tracking-[0.25em] mb-1">
        {stat.label}
      </div>
      <div className="text-white/30 text-xs tracking-[0.2em] uppercase">
        {stat.sub}
      </div>
    </motion.div>
  );
}

export default function StatsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold-primary tracking-[0.4em] text-xs uppercase mb-4">
            // By The Numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
            Scale of <span className="gold-gradient-text">Impact</span>
          </h2>
        </motion.div>

        {/* Grid — 4 col desktop, 2 col tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
