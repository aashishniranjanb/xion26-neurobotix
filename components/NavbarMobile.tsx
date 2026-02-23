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
        <div className="fixed top-0 left-0 right-0 z-50 px-3 pt-2 pb-1">
            {/* Logo Bar */}
            <div className="flex items-center justify-between mb-1.5">
                <Link href="/">
                    <Image
                        src="/xion-logo.png"
                        alt="XION"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                </Link>
                <Image
                    src="/srm-logo.png"
                    alt="SRM"
                    width={64}
                    height={22}
                    className="object-contain"
                />
            </div>

            {/* Nav Icons Pill */}
            <div className="flex justify-center">
                <div className="backdrop-blur-lg bg-[#0A0A0A]/90 border border-yellow-500/10 rounded-full px-4 py-2 shadow-lg">
                    <div className="flex gap-6">
                        {navItems.map(({ name, link, icon: Icon }) => (
                            <Link
                                key={name}
                                href={link}
                                className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 active:text-yellow-300 transition"
                            >
                                <Icon size={18} stroke={1.5} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
