"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VideoIntro from "@/components/VideoIntro";

export default function IntroPage() {
    const router = useRouter();
    const [showIntro, setShowIntro] = useState<boolean | null>(null); // null = checking

    // ── Play-once guard ─────────────────────────────────────
    useEffect(() => {
        const alreadyPlayed = sessionStorage.getItem("xion_intro_played") === "true";
        if (alreadyPlayed) {
            // Skip intro entirely — go straight to content
            router.replace("/home");
        } else {
            setShowIntro(true);
        }
    }, [router]);

    const handleIntroComplete = () => {
        sessionStorage.setItem("xion_intro_played", "true");
        window.dispatchEvent(new CustomEvent("xion_intro_finished"));
        router.replace("/home");
    };

    // Still checking sessionStorage — show black screen
    if (showIntro === null) {
        return <div className="fixed inset-0 bg-[#020202] z-[100]" />;
    }

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#020202]">
            <VideoIntro onComplete={handleIntroComplete} />
        </div>
    );
}
