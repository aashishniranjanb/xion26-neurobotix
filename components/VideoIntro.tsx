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

    // ── Detect visible video & manage it ────────────────────
    useEffect(() => {
        const desktopEl = desktopVideoRef.current;
        const mobileEl = mobileVideoRef.current;
        if (!desktopEl || !mobileEl) return;

        // Determine which video is CSS-visible
        const mobileDisplay = getComputedStyle(mobileEl).display;
        const isMobileVisible = mobileDisplay !== "none";
        const video = isMobileVisible ? mobileEl : desktopEl;

        // ── Event handlers ──────────────────────────────────
        const onCanPlay = () => {
            setVideoReady(true);
            setPhase("playing");
        };

        const onPlaying = () => {
            // Confirms the video is actually rendering frames
            setVideoReady(true);
            setPhase("playing");
        };

        const onEnded = () => triggerExit();

        // ── Attach events ───────────────────────────────────
        video.addEventListener("canplay", onCanPlay);
        video.addEventListener("playing", onPlaying);
        video.addEventListener("ended", onEnded);

        // Enable loading for the visible video only.
        // The autoPlay attribute on the <video> tag handles playback
        // automatically once enough data is buffered — no manual
        // play() call needed, which avoids iOS autoplay rejection.
        video.preload = "auto";
        video.load();

        // Safety timeout — never trap the user (12s)
        const safetyTimer = setTimeout(() => {
            triggerExit();
        }, VIDEO_INTRO_TIMINGS.SAFETY_TIMEOUT_MS);

        return () => {
            video.removeEventListener("canplay", onCanPlay);
            video.removeEventListener("playing", onPlaying);
            video.removeEventListener("ended", onEnded);
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

            {/* ─────────────────────────────────────────────────
                Desktop Video (md and up)
                MP4 primary, WebM backup.
                preload="none" prevents loading. The useEffect
                sets preload="auto" on whichever video is visible.
                autoPlay + muted + playsInline = iOS autoplay OK.
            ───────────────────────────────────────────────── */}
            <video
                ref={desktopVideoRef}
                className="video-intro-player hidden md:block"
                muted
                playsInline
                autoPlay
                preload="none"
                controls={false}
                disablePictureInPicture
                style={videoStyle}
            >
                <source src="/bot-desktopm.mp4" type="video/mp4" />
                <source src="/Bot-Desktopm.webm" type="video/webm" />
            </video>

            {/* ─────────────────────────────────────────────────
                Mobile Video (below md)
                MP4 FIRST — iOS Safari cannot play WebM at all.
                Putting MP4 first avoids a failed WebM decode attempt
                that wastes time and can trigger errors.
                WebM is listed second for Android browsers that prefer it.
            ───────────────────────────────────────────────── */}
            <video
                ref={mobileVideoRef}
                className="video-intro-player block md:hidden"
                muted
                playsInline
                autoPlay
                preload="none"
                controls={false}
                disablePictureInPicture
                style={videoStyle}
            >
                <source src="/bot-mobile.mp4" type="video/mp4" />
                <source src="/bot-mobile.webm" type="video/webm" />
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
