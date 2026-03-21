"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MagneticButton({
    children,
    className = "",
    href,
    target,
    as = "button",
}: {
    children: React.ReactNode;
    className?: string;
    href?: string;
    target?: string;
    as?: "button" | "a";
}) {
    const ref = useRef<HTMLElement>(null);
    
    // Motion values for tracking cursor offset
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring configuration for buttery smooth physics
    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el || window.innerWidth < 768) return;

        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Apply magnetic pull (capped at 30% of button size)
        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const MotionComponent = as === "a" ? motion.a : motion.button;
    
    return (
        <MotionComponent
            ref={ref as any}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            href={as === "a" ? href : undefined}
            target={as === "a" ? target : undefined}
            rel={as === "a" && target === "_blank" ? "noopener noreferrer" : undefined}
            style={{ x: springX, y: springY }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`inline-block transition-shadow duration-300 ${className}`}
        >
            {children}
        </MotionComponent>
    );
}
