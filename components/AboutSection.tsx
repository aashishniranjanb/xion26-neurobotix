"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-28 relative overflow-hidden">
      {/* Background detail */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-primary/[0.03] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Label + Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gold-primary tracking-[0.4em] text-xs uppercase mb-6">
              // About NeuroBotix
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-white mb-8">
              Where Minds<br />
              <span className="gold-gradient-text">Meet Machines</span>
            </h2>

            {/* Gold accent bar */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold-primary" />
              <div className="h-px w-4 bg-gold-primary/40" />
              <div className="h-px w-2 bg-gold-primary/20" />
            </div>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              NeuroBotix is XION's flagship technical symposium — a convergence
              point for the brightest engineering minds across India. We exist at
              the intersection of neural intelligence and autonomous robotics.
            </p>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              From precision combat bots to AI-driven autonomous systems, every
              challenge here is engineered to push the boundaries of what machines
              — and the humans behind them — can achieve.
            </p>
          </motion.div>

          {/* Right — Stat cards / pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              {
                icon: "◈",
                title: "Neural Engineering",
                desc: "Challenges that mirror real-world AI and robotics problems faced by top research labs.",
              },
              {
                icon: "⬡",
                title: "Autonomous Systems",
                desc: "From line-following bots to fully autonomous combat machines — every level is welcome.",
              },
              {
                icon: "◉",
                title: "Live Competition",
                desc: "Real-time judging, live leaderboards and high-stakes elimination rounds across all events.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="group flex items-start gap-5 p-5 border border-gold-primary/10 hover:border-gold-primary/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="text-gold-primary text-2xl mt-0.5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
