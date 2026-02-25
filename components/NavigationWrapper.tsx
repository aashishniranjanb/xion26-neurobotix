"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function NavigationWrapper() {
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
