"use client";

import Link from "next/link";
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
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg bg-[#0A0A0A]/90 border border-yellow-500/10 rounded-full px-4 py-2 shadow-lg">
            <div className="flex gap-6">
                {navItems.map(({ name, link, icon: Icon }) => (
                    <Link
                        key={name}
                        href={link}
                        className="flex flex-col items-center text-zinc-400 hover:text-yellow-400 active:text-yellow-300 transition"
                    >
                        <Icon size={20} stroke={1.5} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
