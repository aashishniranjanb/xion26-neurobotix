"use client";

import { usePathname } from "next/navigation";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";


export default function NavigationWrapper() {
    const pathname = usePathname();

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
