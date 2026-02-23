"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavbarDesktop() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "max-w-4xl py-3" : "max-w-7xl py-5"
                } mx-auto rounded-xl backdrop-blur-md border border-yellow-500/10 bg-gradient-to-b from-[#111111]/80 to-[#020202]/90`}
        >
            <div className="flex justify-center gap-12 text-sm uppercase tracking-widest text-zinc-300">
                {["Home", "Events", "Sponsors", "About", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="relative group transition-colors"
                    >
                        <span className="group-hover:text-yellow-400 transition">
                            {item}
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300" />
                    </Link>
                ))}
            </div>
        </nav>
    );
}
