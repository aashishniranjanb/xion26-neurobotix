"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { VIDEO_INTRO_TIMINGS } from "@/lib/constants";

export default function VideoIntro({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const desktopVideoRef = useRef<HTMLVideoElement>(null);
    const mobileVideoRef = useRef<HTMLVideoElement>(null);
    const [phase, setPhase] = useState<"fallback" | "playing" | "exiting">("fallback");
    const [videoReady, setVideoReady] = useState(false);
    const hasCompleted = useRef(false);

    // ── Cinematic exit ──────────────────────────────────────
    const triggerExit = useCallback(() => {
        if (hasCompleted.current) return;
        hasCompleted.current = true;
        setPhase("exiting");
        setTimeout(() => {
            onComplete();
        }, VIDEO_INTRO_TIMINGS.FADE_OUT_DURATION_MS);
    }, [onComplete]);

    // ── Video lifecycle & Autoplay handling ───────────────────
    useEffect(() => {
        const desktopVideo = desktopVideoRef.current;
        const mobileVideo = mobileVideoRef.current;
        if (!desktopVideo || !mobileVideo) return;

        console.log("[VideoIntro] Lifecycle init");

        const handleCanPlay = () => {
            console.log("[VideoIntro] Video can play");
            setVideoReady(true);
            setPhase("playing");
        };

        const handleEnded = () => {
            console.log("[VideoIntro] Video ended");
            triggerExit();
        };

        const handleError = (e: any) => {
            console.error("[VideoIntro] Video error:", e);
            // Don't immediately skip on single source error, but if everything fails, exit
            if (desktopVideo.networkState === 3 && mobileVideo.networkState === 3) {
                triggerExit();
            }
        };

        // Attach listeners to both
        [desktopVideo, mobileVideo].forEach(v => {
            v.addEventListener("canplay", handleCanPlay);
            v.addEventListener("ended", handleEnded);
            v.addEventListener("error", handleError);
        });

        // Attempt autoplay on BOTH (muted autoplay is generally safe)
        // Browser will decide which one is actually loading based on source availability/visibility
        const playDesktop = desktopVideo.play();
        const playMobile = mobileVideo.play();

        const handlePlayPromise = (promise: Promise<void>, label: string) => {
            if (promise !== undefined) {
                promise.catch(error => {
                    console.warn(`[VideoIntro] ${label} autoplay blocked:`, error);
                });
            }
        };

        handlePlayPromise(playDesktop, "Desktop");
        handlePlayPromise(playMobile, "Mobile");

        // Safety timeout — never trap the user
        const safetyTimer = setTimeout(() => {
            console.warn("[VideoIntro] Safety timeout reached");
            triggerExit();
        }, VIDEO_INTRO_TIMINGS.SAFETY_TIMEOUT_MS);

        return () => {
            [desktopVideo, mobileVideo].forEach(v => {
                v.removeEventListener("canplay", handleCanPlay);
                v.removeEventListener("ended", handleEnded);
                v.removeEventListener("error", handleError);
            });
            clearTimeout(safetyTimer);
        };
    }, [triggerExit]);

    // ── Render ──────────────────────────────────────────────
    return (
        <div className={`video-intro-overlay ${phase === "exiting" ? "video-intro-exit" : ""}`}>
            {/* Static fallback shown instantly */}
            <div
                className="video-intro-fallback-img"
                style={{ opacity: videoReady ? 0 : 1 }}
            />

            {/* 
                DUAL VIDEO APPROACH
                Render both videos. Use Tailwind CSS to show/hide them.
                This prevents hydration mismatches and ensures the correct video 
                is ready to play as soon as the browser environment is established.
            */}

            {/* Desktop Video (md and up) */}
            <video
                ref={desktopVideoRef}
                className="video-intro-player hidden md:block"
                muted
                playsInline
                autoPlay
                preload="auto"
                controls={false}
                disablePictureInPicture
                style={{
                    opacity: videoReady ? 1 : 0,
                    transition: "opacity 0.8s ease-in",
                    objectFit: "cover",
                }}
            >
                <source src="/bot-desktopm.mp4" type="video/mp4" />
                <source src="/Bot-Desktopm.webm" type="video/webm" />
            </video>

            {/* Mobile Video (below md) */}
            <video
                ref={mobileVideoRef}
                className="video-intro-player block md:hidden"
                muted
                playsInline
                autoPlay
                preload="auto"
                controls={false}
                disablePictureInPicture
                style={{
                    opacity: videoReady ? 1 : 0,
                    transition: "opacity 0.8s ease-in",
                    objectFit: "cover",
                }}
            >
                <source src="/bot-mobile.webm" type="video/webm" />
                <source src="/bot-mobile.mp4" type="video/mp4" />
            </video>

            {/* Bottom vignette */}
            <div className="video-intro-vignette" />

            {/* ── Skip Intro Button — Matte Black + Gold ────── */}
            {phase !== "exiting" && (
                <button
                    onClick={triggerExit}
                    className="video-intro-skip"
                    aria-label="Skip intro sequence"
                    tabIndex={0}
                >
                    <span className="video-intro-skip-text">SKIP INTRO</span>
                    <span className="video-intro-skip-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 4l10 8-10 8V4z" />
                            <line x1="19" y1="5" x2="19" y2="19" />
                        </svg>
                    </span>
                    <span className="video-intro-skip-shine" />
                </button>
            )}
        </div>
    );
}
