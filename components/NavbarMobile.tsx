"use client";

import Link from "next/link";
import Image from "next/image";
import {
    IconHome,
    IconCalendarEvent,
    IconUsers,
    IconInfoCircle,
    IconMail,
} from "@tabler/icons-react";

const navItems = [
    { name: "Home", link: "/home", icon: IconHome },
    { name: "Events", link: "/events", icon: IconCalendarEvent },
    { name: "Sponsors", link: "/sponsors", icon: IconUsers },
    { name: "About", link: "/about", icon: IconInfoCircle },
    { name: "Contact", link: "/contact", icon: IconMail },
];

export default function NavbarMobile() {
    return (
        <nav aria-label="Mobile Navigation" className="fixed top-[max(0.75rem,env(safe-area-inset-top))] left-2 right-2 z-50 backdrop-blur-xl bg-[#080808]/95 border border-yellow-500/15 rounded-2xl px-3 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between gap-2">
                {/* XION Logo — Left */}
                <Link href="/home" className="flex-shrink-0">
                    <div className="relative w-[34px] h-[34px]">
                        <Image
                            src="/xion-logo.png"
                            alt="XION"
                            fill
                            sizes="34px"
                            className="object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.4)] active:drop-shadow-[0_0_15px_rgba(255,215,0,0.7)] active:scale-90 transition-all duration-200"
                            priority
                        />
                    </div>
                </Link>

                {/* Nav Icons — Center spread */}
                <div className="flex items-center justify-evenly flex-1 px-1 xs:px-2">
                    {navItems.map(({ name, link, icon: Icon }) => (
                        <Link
                            key={name}
                            href={link}
                            className="flex flex-col items-center justify-center text-zinc-300 hover:text-yellow-400 active:text-yellow-300 active:scale-110 transition-all duration-150 py-1.5 min-w-[40px]"
                        >
                            <Icon size={18} className="xs:size-[20px] sm:size-[22px]" stroke={1.8} />
                            <span className="hidden xs:block text-[8px] sm:text-[9px] uppercase tracking-wider mt-0.5 font-medium opacity-70">
                                {name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* SRM Logo — Right */}
                <div className="flex-shrink-0">
                    <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden ring-1 ring-yellow-500/25">
                        <Image
                            src="/srm-logo.png"
                            alt="SRM"
                            fill
                            sizes="32px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
