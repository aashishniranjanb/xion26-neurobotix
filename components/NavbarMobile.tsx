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
    { name: "Home", link: "/", icon: IconHome },
    { name: "Events", link: "/events", icon: IconCalendarEvent },
    { name: "Sponsors", link: "/sponsors", icon: IconUsers },
    { name: "About", link: "/about", icon: IconInfoCircle },
    { name: "Contact", link: "/contact", icon: IconMail },
];

export default function NavbarMobile() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 pb-1.5 bg-gradient-to-b from-[#020202]/95 to-transparent">
            {/* Logo Bar */}
            <div className="flex items-center justify-between mb-2">
                <Link href="/">
                    <div className="relative w-[36px] h-[36px]">
                        <div className="absolute -inset-0.5 rounded-full bg-yellow-500/15 blur-sm" />
                        <Image
                            src="/xion-logo.png"
                            alt="XION"
                            fill
                            className="object-contain drop-shadow-[0_0_4px_rgba(255,215,0,0.3)] relative z-10"
                            priority
                        />
                    </div>
                </Link>
                <div className="relative w-[34px] h-[34px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-yellow-500/20">
                        <Image
                            src="/srm-logo.png"
                            alt="SRM"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Nav Icons Pill */}
            <div className="flex justify-center">
                <div className="backdrop-blur-lg bg-[#0A0A0A]/90 border border-yellow-500/10 rounded-full px-5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                    <div className="flex gap-7">
                        {navItems.map(({ name, link, icon: Icon }) => (
                            <Link
                                key={name}
                                href={link}
                                className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 active:text-yellow-300 transition-colors duration-200"
                            >
                                <Icon size={19} stroke={1.5} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
