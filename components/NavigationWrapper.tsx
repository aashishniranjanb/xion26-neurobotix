"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

// Memory-only flag (resets on F5 / Hard Refresh)
let sessionRestarted = true;

export default function NavigationWrapper() {
    const router = useRouter();
    const pathname = usePathname();
    const initialized = useRef(false);

    useEffect(() => {
        // --- BLOCKED FOR VIDEO INTRO INTEGRATION ---
        /*
        if (!initialized.current && sessionRestarted) {
            initialized.current = true;
            sessionRestarted = false; 

            if (pathname !== "/intro") {
                router.replace("/intro");
            }
        }
        */
    }, [pathname, router]);

    // Hide Navbar on Intro page for clean cinematic look
    if (pathname === "/intro") return null;

    return (
        <>
            <div className="hidden md:block">
                <NavbarDesktop />
            </div>

            <div className="block md:hidden">
                <NavbarMobile />
            </div>
        </>
    );
}
