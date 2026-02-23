"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12",
                scrolled ? "h-16 bg-black-core/80 backdrop-blur-md border-b border-gold-primary/10" : "h-24 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-primary to-gold-dark flex items-center justify-center ring-2 ring-gold-primary/20 group-hover:ring-gold-primary/40 transition-all">
                        <span className="text-black font-bold text-xs">X</span>
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white group-hover:text-gold-primary transition-colors">
                        XION <span className="text-gold-primary">26</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {["Events", "Sponsors", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="nav-link text-sm font-medium tracking-widest text-zinc-400 hover:text-white transition-colors uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/enter"
                        className="px-6 py-2 bg-gradient-to-r from-gold-primary to-gold-dark text-black text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform active:scale-95"
                    >
                        Enter System
                    </Link>
                </div>

                {/* Mobile Menu Simplified for now */}
                <button className="md:hidden text-gold-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
}
