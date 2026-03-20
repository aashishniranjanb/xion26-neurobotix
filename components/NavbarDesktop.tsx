"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarDesktop() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "max-w-[95%] lg:max-w-4xl py-3" : "max-w-[95%] lg:max-w-6xl py-4"
                } mx-auto rounded-2xl backdrop-blur-md border border-yellow-500/15 bg-gradient-to-b from-[#111111]/85 to-[#020202]/95 px-4 lg:px-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]`}
        >
            <div className="flex items-center justify-between">
                {/* XION Logo — Left */}
                <Link href="/home" className="flex-shrink-0 group">
                    <div
                        className={`relative transition-all duration-500 ${scrolled ? "w-[50px] h-[50px]" : "w-[62px] h-[62px]"
                            }`}
                    >
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400/20 via-yellow-600/10 to-transparent opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                        <Image
                            src="/xion-logo.png"
                            alt="XION Robotics Club"
                            fill
                            sizes="(max-width: 768px) 50px, 62px"
                            className="object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.4)] active:drop-shadow-[0_0_15px_rgba(255,215,0,0.7)] group-hover:scale-105 active:scale-95 transition-all duration-300 relative z-10"
                            priority
                        />
                    </div>
                </Link>

                {/* Nav Links — Center */}
                <div className="flex gap-4 lg:gap-10 xl:gap-14 text-[13px] lg:text-[15px] uppercase tracking-[0.1em] lg:tracking-[0.2em] text-zinc-300 font-medium">
                    {["Home", "Events", "Sponsors", "About", "Contact"].map((item) => {
                        const href = item === "Home" ? "/home" : `/${item.toLowerCase()}`;
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={item}
                                href={href}
                                className={`relative group transition-colors py-2 ${isActive ? "text-yellow-400 font-bold" : "text-zinc-300"}`}
                            >
                                <span className="group-hover:text-yellow-400 transition-colors duration-200">
                                    {item}
                                </span>
                                <span className={`absolute left-0 -bottom-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                            </Link>
                        );
                    })}
                </div>

                {/* SRM Logo — Right */}
                <div className="flex items-center flex-shrink-0 group">
                    <div
                        className={`relative transition-all duration-500 ${scrolled ? "w-[46px] h-[46px]" : "w-[56px] h-[56px]"
                            }`}
                    >
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400/15 via-yellow-600/10 to-transparent opacity-50 group-hover:opacity-90 blur-sm transition-opacity duration-300" />
                        <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-yellow-500/20 group-hover:ring-yellow-500/40 transition-all duration-300">
                            <Image
                                src="/srm-logo.png"
                                alt="SRM Institute of Science and Technology"
                                fill
                                sizes="(max-width: 768px) 46px, 56px"
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
