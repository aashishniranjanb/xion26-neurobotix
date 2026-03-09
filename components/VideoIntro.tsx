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
    const activeVideoRef = useRef<HTMLVideoElement | null>(null);
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

    // ── Detect which video is visible & load ONLY that one ──
    useEffect(() => {
        const desktopEl = desktopVideoRef.current;
        const mobileEl = mobileVideoRef.current;
        if (!desktopEl || !mobileEl) return;

        // Check which element is actually visible via CSS
        const isMobileVisible = mobileEl.offsetParent !== null
            || getComputedStyle(mobileEl).display !== "none";

        const video = isMobileVisible ? mobileEl : desktopEl;
        activeVideoRef.current = video;

        // ── Event handlers ──────────────────────────────────
        const onCanPlay = () => {
            setVideoReady(true);
            setPhase("playing");
        };
        const onEnded = () => triggerExit();
        const onError = () => {
            if (video.networkState === 3) {
                console.warn("[VideoIntro] No playable source — skipping");
                triggerExit();
            }
        };

        video.addEventListener("canplay", onCanPlay);
        video.addEventListener("ended", onEnded);
        video.addEventListener("error", onError, true);

        // Load ONLY the active video
        video.preload = "auto";
        video.load();

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.warn("[VideoIntro] Autoplay blocked — skipping");
                setTimeout(triggerExit, 1500);
            });
        }

        // Safety timeout
        const safetyTimer = setTimeout(() => {
            console.warn("[VideoIntro] Safety timeout — skipping");
            triggerExit();
        }, VIDEO_INTRO_TIMINGS.SAFETY_TIMEOUT_MS);

        return () => {
            video.removeEventListener("canplay", onCanPlay);
            video.removeEventListener("ended", onEnded);
            video.removeEventListener("error", onError, true);
            clearTimeout(safetyTimer);
        };
    }, [triggerExit]);

    // ── Shared video styles ─────────────────────────────────
    const videoStyle = {
        opacity: videoReady ? 1 : 0,
        transition: "opacity 0.8s ease-in",
        objectFit: "cover" as const,
    };

    return (
        <div className={`video-intro-overlay ${phase === "exiting" ? "video-intro-exit" : ""}`}>
            {/* Static fallback shown instantly */}
            <div
                className="video-intro-fallback-img"
                style={{ opacity: videoReady ? 0 : 1 }}
            />

            {/* Desktop Video (md and up) — preload="none" by default, JS sets to "auto" if visible */}
            <video
                ref={desktopVideoRef}
                className="video-intro-player hidden md:block"
                muted
                playsInline
                preload="none"
                controls={false}
                disablePictureInPicture
                style={videoStyle}
            >
                <source src="/bot-desktopm.mp4" type="video/mp4" />
                <source src="/Bot-Desktopm.webm" type="video/webm" />
            </video>

            {/* Mobile Video (below md) — preload="none" by default, JS sets to "auto" if visible */}
            <video
                ref={mobileVideoRef}
                className="video-intro-player block md:hidden"
                muted
                playsInline
                preload="none"
                controls={false}
                disablePictureInPicture
                style={videoStyle}
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
