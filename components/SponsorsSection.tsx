"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    label: "Powering the Future",
    sponsors: ["SPONSOR NAME", "SPONSOR NAME"],
    size: "text-2xl",
    opacity: "opacity-60 hover:opacity-100",
  },
  {
    tier: "Gold Sponsors",
    label: "Champions of Innovation",
    sponsors: ["SPONSOR", "SPONSOR", "SPONSOR"],
    size: "text-lg",
    opacity: "opacity-45 hover:opacity-90",
  },
  {
    tier: "Associate Sponsors",
    label: "Partners in Excellence",
    sponsors: ["PARTNER", "PARTNER", "PARTNER", "PARTNER"],
    size: "text-base",
    opacity: "opacity-35 hover:opacity-75",
  },
];

export default function SponsorsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-primary/[0.03] blur-3xl" />
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
            // Our Sponsors
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
            Backed by the <span className="gold-gradient-text">Best</span>
          </h2>
          <p className="text-white/30 text-sm tracking-widest uppercase">
            Industry leaders powering NeuroBotix 2026
          </p>
        </motion.div>

        {/* Sponsor tiers */}
        <div className="space-y-14">
          {sponsorTiers.map((tier, ti) => (
            <motion.div
              key={ti}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ti * 0.15 }}
            >
              {/* Tier label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gold-primary/10" />
                <span className="text-gold-primary/50 text-[10px] tracking-[0.4em] uppercase font-bold">
                  {tier.tier}
                </span>
                <div className="h-px flex-1 bg-gold-primary/10" />
              </div>

              {/* Logos row */}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {tier.sponsors.map((name, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: ti * 0.15 + si * 0.08 }}
                    className={`${tier.size} ${tier.opacity} font-black uppercase tracking-[0.2em] text-white transition-all duration-300 cursor-pointer border border-white/5 hover:border-gold-primary/20 px-6 py-4`}
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-white/30 text-sm mb-6 tracking-widest uppercase">
            Want your brand at the forefront of robotics innovation?
          </p>
          <button className="px-8 py-4 border border-gold-primary/40 text-gold-primary text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-primary/5 hover:border-gold-primary transition-all duration-300">
            Partner With Us →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
