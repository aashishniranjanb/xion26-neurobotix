"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "max-w-4xl py-2" : "max-w-7xl py-3"
                } mx-auto rounded-xl backdrop-blur-md border border-yellow-500/10 bg-gradient-to-b from-[#111111]/80 to-[#020202]/90 px-4 lg:px-6`}
        >
            <div className="flex items-center justify-between">
                {/* XION Logo — Left */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/xion-logo.png"
                        alt="XION Robotics Club"
                        width={scrolled ? 36 : 44}
                        height={scrolled ? 36 : 44}
                        className="transition-all duration-500 object-contain"
                    />
                </Link>

                {/* Nav Links — Center */}
                <div className="flex gap-8 lg:gap-12 text-sm uppercase tracking-widest text-zinc-300">
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

                {/* SRM Logo — Right */}
                <div className="flex-shrink-0">
                    <Image
                        src="/srm-logo.png"
                        alt="SRM Institute of Science and Technology"
                        width={scrolled ? 80 : 100}
                        height={scrolled ? 28 : 35}
                        className="transition-all duration-500 object-contain"
                    />
                </div>
            </div>
        </nav>
    );
}
