"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function NavigationWrapper() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Use a consistent value for hydration to avoid mismatch
        const introPlayed = typeof window !== 'undefined' && sessionStorage.getItem("xion_intro_played") === "true";
        const isIntroRoute = typeof window !== 'undefined' && (window.location.pathname === "/" || window.location.pathname === "/intro");

        if (introPlayed || !isIntroRoute) {
            setIsVisible(true);
            return;
        }

        const handleIntroFinished = () => setIsVisible(true);
        window.addEventListener("xion_intro_finished", handleIntroFinished);

        return () => window.removeEventListener("xion_intro_finished", handleIntroFinished);
    }, []);

    if (!isMounted) return null;


    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1
                    }}
                    className="fixed top-0 left-0 right-0 z-100"
                >
                    <div className="hidden md:block">
                        <NavbarDesktop />
                    </div>

                    <div className="block md:hidden">
                        <NavbarMobile />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
