"use client";

import { useRef } from "react";

export default function HoverTiltCard({
    children,
}: {
    children: React.ReactNode;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 768) return;

        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 25;
        const rotateY = (x - centerX) / 25;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="transition-transform duration-300 ease-out will-change-transform relative"
        >
            {children}

            {/* Subtle Gold Glow Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 hover:opacity-20 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.4),transparent_70%)]" />
        </div>
    );
}
