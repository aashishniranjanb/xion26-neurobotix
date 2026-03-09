"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { VIDEO_INTRO_TIMINGS } from "@/lib/constants";

/*
 * Detect mobile ONCE, synchronously during first client render.
 * This avoids a hydration→state change→remount cycle that kills
 * autoplay on iOS Safari.
 */
function getIsMobile(): boolean {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
}

export default function VideoIntro({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [phase, setPhase] = useState<"fallback" | "playing" | "exiting">("fallback");
    const [videoReady, setVideoReady] = useState(false);
    const hasCompleted = useRef(false);

    // Detect mobile once on client — lazy initializer runs synchronously on first render
    const [isMobile] = useState(() => getIsMobile());

    // ── Cinematic exit ──────────────────────────────────────
    const triggerExit = useCallback(() => {
        if (hasCompleted.current) return;
        hasCompleted.current = true;
        setPhase("exiting");
        setTimeout(() => {
            onComplete();
        }, VIDEO_INTRO_TIMINGS.FADE_OUT_DURATION_MS);
    }, [onComplete]);

    // ── Video lifecycle ─────────────────────────────────────
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let playAttempted = false;

        const onCanPlay = () => {
            setVideoReady(true);
            setPhase("playing");

            // Attempt play AFTER canplaythrough for reliability on mobile
            if (!playAttempted) {
                playAttempted = true;
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // Autoplay blocked → still show the first frame for a moment, then skip
                        console.warn("Autoplay blocked — skipping intro");
                        setTimeout(triggerExit, 1500);
                    });
                }
            }
        };

        const onEnded = () => triggerExit();

        const onError = (e: Event) => {
            // Only skip if NO source could be loaded (check networkState)
            // networkState 3 = NETWORK_NO_SOURCE
            if (video.networkState === 3) {
                console.warn("No playable video source found — skipping intro");
                triggerExit();
            }
        };

        video.addEventListener("canplaythrough", onCanPlay);
        video.addEventListener("ended", onEnded);
        video.addEventListener("error", onError, true); // capture phase catches <source> errors

        // Load the video — do NOT call play() here, wait for canplaythrough
        video.load();

        // Also try an early play for browsers that fire canplaythrough late
        const earlyPlayTimer = setTimeout(() => {
            if (!playAttempted && video.readyState >= 2) {
                playAttempted = true;
                setVideoReady(true);
                setPhase("playing");
                const p = video.play();
                if (p) p.catch(() => setTimeout(triggerExit, 1500));
            }
        }, 800);

        // Safety timeout — never trap the user (12s)
        const safetyTimer = setTimeout(triggerExit, VIDEO_INTRO_TIMINGS.SAFETY_TIMEOUT_MS);

        // If nothing loads in 6s on mobile, skip
        const mobileLoadTimer = isMobile
            ? setTimeout(() => {
                if (!videoReady && !hasCompleted.current) {
                    console.warn("Mobile video load timeout — skipping intro");
                    triggerExit();
                }
            }, 6000)
            : null;

        return () => {
            video.removeEventListener("canplaythrough", onCanPlay);
            video.removeEventListener("ended", onEnded);
            video.removeEventListener("error", onError, true);
            clearTimeout(safetyTimer);
            clearTimeout(earlyPlayTimer);
            if (mobileLoadTimer) clearTimeout(mobileLoadTimer);
        };
    }, [triggerExit, isMobile]); // eslint-disable-line react-hooks/exhaustive-deps

    // ── Render ──────────────────────────────────────────────
    return (
        <div className={`video-intro-overlay ${phase === "exiting" ? "video-intro-exit" : ""}`}>
            {/* Static fallback shown instantly */}
            <div
                className="video-intro-fallback-img"
                style={{ opacity: videoReady ? 0 : 1 }}
            />

            {/* 
              Single video element with the correct sources based on device.
              - Desktop: MP4 primary, WebM backup
              - Mobile:  MP4 primary (universal support), WebM backup (Android)
              
              NOTE: bot-mobile.webm is WebM-only which iOS Safari CANNOT play.
              So on mobile we MUST lead with the desktop MP4 (it looks fine with object-fit: cover)
              and offer the mobile WebM as a secondary for Android/Chrome.
            */}
            <video
                ref={videoRef}
                className="video-intro-player"
                muted
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                style={{
                    opacity: videoReady ? 1 : 0,
                    transition: "opacity 0.6s ease-in",
                    objectFit: "cover",
                }}
            >
                {isMobile ? (
                    <>
                        {/* Mobile: MP4 first (iOS + all browsers), WebM mobile-specific second (Android) */}
                        <source src="/bot-desktopm.mp4" type="video/mp4" />
                        <source src="/bot-mobile.webm" type="video/webm" />
                    </>
                ) : (
                    <>
                        {/* Desktop: MP4 main as requested, WebM backup */}
                        <source src="/bot-desktopm.mp4" type="video/mp4" />
                        <source src="/Bot-Desktopm.webm" type="video/webm" />
                    </>
                )}
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
