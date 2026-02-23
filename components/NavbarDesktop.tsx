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
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "max-w-5xl py-2" : "max-w-7xl py-3"
                } mx-auto rounded-2xl backdrop-blur-md border border-yellow-500/15 bg-gradient-to-b from-[#111111]/85 to-[#020202]/95 px-5 lg:px-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]`}
        >
            <div className="flex items-center justify-between">
                {/* XION Logo — Left */}
                <Link href="/" className="flex-shrink-0 group">
                    <div
                        className={`relative transition-all duration-500 ${scrolled ? "w-[42px] h-[42px]" : "w-[52px] h-[52px]"
                            }`}
                    >
                        {/* Gold glow ring */}
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400/20 via-yellow-600/10 to-transparent opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                        <Image
                            src="/xion-logo.png"
                            alt="XION Robotics Club"
                            fill
                            className="object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.4)] relative z-10"
                            priority
                        />
                    </div>
                </Link>

                {/* Nav Links — Center */}
                <div className="flex gap-8 lg:gap-12 text-[13px] uppercase tracking-[0.18em] text-zinc-300 font-medium">
                    {["Home", "Events", "Sponsors", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="relative group transition-colors py-2"
                        >
                            <span className="group-hover:text-yellow-400 transition-colors duration-200">
                                {item}
                            </span>
                            <span className="absolute left-0 -bottom-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* SRM Logo — Right */}
                <div className="flex-shrink-0 group">
                    <div
                        className={`relative transition-all duration-500 ${scrolled ? "w-[38px] h-[38px]" : "w-[46px] h-[46px]"
                            }`}
                    >
                        {/* Gold glow ring */}
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400/15 via-yellow-600/10 to-transparent opacity-50 group-hover:opacity-90 blur-sm transition-opacity duration-300" />
                        <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-yellow-500/20 group-hover:ring-yellow-500/40 transition-all duration-300">
                            <Image
                                src="/srm-logo.png"
                                alt="SRM Institute of Science and Technology"
                                fill
                                className="object-cover drop-shadow-[0_0_4px_rgba(255,215,0,0.3)]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
