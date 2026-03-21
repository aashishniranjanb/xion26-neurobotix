"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Precision dot coordinates (fast follow)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // HUD Brackets coordinates (delayed follow with spring)
  const hudX = useSpring(dotX, { damping: 20, stiffness: 250 });
  const hudY = useSpring(dotY, { damping: 20, stiffness: 250 });

  useEffect(() => {
    // Check if mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if element is interactive
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("input") || 
        target.closest("textarea") || 
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [dotX, dotY, isVisible]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* 1. Precision Focal Dot */}
            <motion.div
              style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
              className="w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(255,215,0,0.8)]"
            />

            {/* 2. HUD Targeting Brackets */}
            <motion.div
              style={{ x: hudX, y: hudY, translateX: "-50%", translateY: "-50%" }}
              animate={{
                rotate: isHovering ? 45 : 0,
                scale: isHovering ? 1.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-12 h-12 flex items-center justify-center"
            >
              {/* Corner Brackets [ ] */}
              {[0, 90, 180, 270].map((rotation) => (
                <motion.div
                  key={rotation}
                  style={{ rotate: rotation }}
                  className="absolute inset-0"
                >
                  <span 
                    className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-colors duration-300 ${
                      isHovering ? "border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]" : "border-yellow-500/40"
                    }`} 
                  />
                </motion.div>
              ))}

              {/* Scanning pulse when locked-on (hovering) */}
              {isHovering && (
                <motion.div
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1.2, opacity: [0, 0.4, 0] }}
                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 border border-yellow-400/30 rounded-full"
                />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
