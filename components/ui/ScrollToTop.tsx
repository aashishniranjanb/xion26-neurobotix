"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronUp } from "@tabler/icons-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[60] p-3 rounded-full bg-[#0A0A0A] border border-yellow-500/30 text-yellow-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-yellow-500/10 hover:border-yellow-500/60 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all duration-300 group"
                    aria-label="Scroll to top"
                >
                    <IconChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" stroke={2.5} />
                    <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
