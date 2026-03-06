"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const targetDate = new Date("2026-03-24T00:00:00").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full py-28 bg-black-core relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-gold-primary/[0.04] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold-primary tracking-[0.4em] text-xs uppercase mb-5">
            // XION 26 · March 24, 2026
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
            Summit Begins <span className="gold-gradient-text">In</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-primary/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-primary/60" />
          </div>
        </motion.div>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-2"
        >
          <TimeBlock value={timeLeft.days}    label="Days"    />
          <Separator />
          <TimeBlock value={timeLeft.hours}   label="Hours"   />
          <Separator />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <Separator />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </motion.div>

        {/* Date stamp */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/20 text-xs tracking-[0.4em] uppercase mt-12 font-mono"
        >
          24 · 03 · 2026 &nbsp;·&nbsp; SRM Institute of Science & Technology
        </motion.p>
      </div>
    </section>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="group flex flex-col items-center">
      <div className="relative px-8 py-6 md:px-12 md:py-8 border border-gold-primary/20 bg-white/[0.02] group-hover:border-gold-primary/40 group-hover:bg-white/[0.04] transition-all duration-500">
        {/* Corner brackets */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-primary/60" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-primary/60" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-primary/60" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-primary/60" />

        {/* Number */}
        <div className="text-6xl md:text-7xl lg:text-8xl font-black tabular-nums leading-none gold-gradient-text drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
          {display}
        </div>
      </div>

      {/* Label */}
      <div className="mt-4 text-[10px] md:text-xs tracking-[0.5em] text-gold-primary/70 uppercase font-bold">
        {label}
      </div>

      {/* Pulse dot */}
      <motion.div
        className="mt-2 w-1 h-1 rounded-full bg-gold-primary/50"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mb-10 px-1">
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-gold-primary/50"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-gold-primary/50"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
      />
    </div>
  );
}