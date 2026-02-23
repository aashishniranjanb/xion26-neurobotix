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
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg bg-[#0A0A0A]/90 border border-yellow-500/10 rounded-full px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3">
                {/* XION Logo — Left inside pill */}
                <Link href="/" className="flex-shrink-0">
                    <div className="relative w-[26px] h-[26px]">
                        <Image
                            src="/xion-logo.png"
                            alt="XION"
                            fill
                            className="object-contain drop-shadow-[0_0_4px_rgba(255,215,0,0.3)]"
                            priority
                        />
                    </div>
                </Link>

                {/* Separator */}
                <div className="w-[1px] h-4 bg-yellow-500/20" />

                {/* Nav Icons — Center */}
                <div className="flex gap-5">
                    {navItems.map(({ name, link, icon: Icon }) => (
                        <Link
                            key={name}
                            href={link}
                            className="flex items-center text-zinc-400 hover:text-yellow-400 active:text-yellow-300 transition-colors duration-200"
                        >
                            <Icon size={18} stroke={1.5} />
                        </Link>
                    ))}
                </div>

                {/* Separator */}
                <div className="w-[1px] h-4 bg-yellow-500/20" />

                {/* SRM Logo — Right inside pill */}
                <div className="flex-shrink-0">
                    <div className="relative w-[24px] h-[24px] rounded-full overflow-hidden ring-1 ring-yellow-500/20">
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
        </div>
    );
}
