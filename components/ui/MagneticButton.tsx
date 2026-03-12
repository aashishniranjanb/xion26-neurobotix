"use client";

import { useRef } from "react";

export default function MagneticButton({
    children,
    className = "",
    href,
    target,
    as = "button",
}: {
    children: React.ReactNode;
    className?: string;
    href?: string;
    target?: string;
    as?: "button" | "a";
}) {
    const ref = useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (window.innerWidth < 768) return;

        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0px, 0px)";
    };

    const props = {
        ref: ref as React.RefObject<never>,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: `transition-transform duration-200 ease-out ${className}`,
    };

    if (as === "a" && href) {
        return (
            <a {...props} href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
                {children}
            </a>
        );
    }

    return <button {...props}>{children}</button>;
}
