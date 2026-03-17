"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

// Combine the logos into a repeating array for the infinite effect.
const partners = [
  { name: "XION Robotics Club", type: "image", src: "/xion_logo main.png" },
  { name: "Vasan Eye Care", type: "text", text: "VASAN EYE CARE" },
  { name: "SRM Institute of Science and Technology", type: "image", src: "/srm-logo-big.png" },
];

export default function SponsorsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Triple the array to ensure the screen is filled and the loop is completely seamless.
  const carouselItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section ref={ref} className="w-full py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-primary/[0.03] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
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
      </div>

      {/* Infinite Carousel */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex mask-gradient">
        <motion.div
          className="flex items-center gap-16 md:gap-32 w-max px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30, // Adjust speed here
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {carouselItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer min-w-[200px]"
            >
              {item.type === "image" ? (
                <div className="relative w-[180px] lg:w-[240px] h-[80px] lg:h-[100px]">
                  <Image
                    src={item.src as string}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 180px, 240px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="text-2xl lg:text-4xl font-black tracking-[0.2em] text-white uppercase text-center whitespace-nowrap px-4 py-8 border border-white/5 bg-white/[0.02]">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-16">
        {/* Become a sponsor CTA */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="text-center"
        >
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6">
            Want your brand at the forefront of robotics innovation?
          </p>
          <button className="px-8 py-3 border border-gold-primary/30 text-gold-primary text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-primary/5 hover:border-gold-primary/60 transition-all duration-300">
            Partner With Us
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
