"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const events = [
  {
    code: "NB-01",
    name: "Robo Wars",
    category: "Combat",
    desc: "Head-to-head bot combat in an armored arena. Build to destroy.",
    tag: "flagship",
    slots: "32 Teams",
  },
  {
    code: "NB-02",
    name: "Line Maze",
    category: "Autonomous",
    desc: "Autonomous bots navigate complex mazes without human input.",
    tag: "popular",
    slots: "48 Teams",
  },
  {
    code: "NB-03",
    name: "Robo Soccer",
    category: "Multi-Agent",
    desc: "Two-team bot soccer with real-time coordination and strategy.",
    tag: "team",
    slots: "24 Teams",
  },
  {
    code: "NB-04",
    name: "Drone Race",
    category: "Aerial",
    desc: "First-person-view drone racing through precision obstacle courses.",
    tag: "new",
    slots: "20 Teams",
  },
  {
    code: "NB-05",
    name: "AI Challenge",
    category: "Software",
    desc: "Build and train neural networks to solve real robotics problems.",
    tag: "ai",
    slots: "40 Teams",
  },
  {
    code: "NB-06",
    name: "Bridge Builder",
    category: "Civil Bot",
    desc: "Engineer micro-bots that construct load-bearing structures autonomously.",
    tag: "engineering",
    slots: "30 Teams",
  },
];

const tagColors: Record<string, string> = {
  flagship:    "bg-gold-primary/20 text-gold-primary border-gold-primary/30",
  popular:     "bg-white/10 text-white/70 border-white/20",
  team:        "bg-white/10 text-white/70 border-white/20",
  new:         "bg-green-500/10 text-green-400 border-green-500/20",
  ai:          "bg-blue-500/10 text-blue-400 border-blue-500/20",
  engineering: "bg-white/10 text-white/70 border-white/20",
};

export default function EventMatrix() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-primary/[0.03] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-gold-primary tracking-[0.4em] text-xs uppercase mb-4">
              // Event Matrix
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight">
              Choose Your<br />
              <span className="gold-gradient-text">Protocol</span>
            </h2>
          </div>
          <button className="self-start md:self-auto px-6 py-3 border border-gold-primary/30 text-gold-primary text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-primary/5 hover:border-gold-primary/60 transition-all">
            View All Events →
          </button>
        </motion.div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 border border-gold-primary/10 hover:border-gold-primary/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-gold-primary/40 text-[10px] font-mono tracking-[0.3em] uppercase">
                    {event.code}
                  </span>
                  <h3 className="text-white font-black text-xl uppercase tracking-tight mt-0.5">
                    {event.name}
                  </h3>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 border rounded-none ${tagColors[event.tag]}`}>
                  {event.tag}
                </span>
              </div>

              {/* Category */}
              <div className="text-gold-primary/60 text-[10px] tracking-[0.3em] uppercase mb-3">
                {event.category}
              </div>

              {/* Desc */}
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                {event.desc}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-white/25 text-xs tracking-widest">{event.slots}</span>
                <span className="text-gold-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Register →
                </span>
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold-primary/60 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
