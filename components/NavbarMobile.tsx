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
        <div className="fixed bottom-4 left-3 right-3 z-50 backdrop-blur-xl bg-[#0A0A0A]/92 border border-yellow-500/12 rounded-2xl px-4 py-3 shadow-[0_-4px_30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between">
                {/* XION Logo — Left */}
                <Link href="/" className="flex-shrink-0">
                    <div className="relative w-[30px] h-[30px]">
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
                <div className="w-[1px] h-5 bg-yellow-500/15" />

                {/* Nav Icons — Center, spread evenly */}
                <div className="flex gap-6 xs:gap-7 sm:gap-8">
                    {navItems.map(({ name, link, icon: Icon }) => (
                        <Link
                            key={name}
                            href={link}
                            className="flex flex-col items-center justify-center text-zinc-400 hover:text-yellow-400 active:text-yellow-300 transition-colors duration-200 min-w-[28px] min-h-[28px]"
                        >
                            <Icon size={22} stroke={1.5} />
                        </Link>
                    ))}
                </div>

                {/* Separator */}
                <div className="w-[1px] h-5 bg-yellow-500/15" />

                {/* SRM Logo — Right */}
                <div className="flex-shrink-0">
                    <div className="relative w-[28px] h-[28px] rounded-full overflow-hidden ring-1 ring-yellow-500/20">
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
