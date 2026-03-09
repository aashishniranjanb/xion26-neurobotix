"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { VIDEO_INTRO_TIMINGS } from "@/lib/constants";

export default function VideoIntro({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
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

    // ── Video lifecycle ─────────────────────────────────────
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onCanPlay = () => {
            setVideoReady(true);
            setPhase("playing");
        };

        const onEnded = () => triggerExit();
        const onError = () => {
            console.warn("Video failed, skipping intro");
            triggerExit();
        };

        video.addEventListener("canplaythrough", onCanPlay);
        video.addEventListener("ended", onEnded);
        video.addEventListener("error", onError);

        // Force load and attempt play
        video.load();
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay blocked → skip gracefully
                setTimeout(triggerExit, VIDEO_INTRO_TIMINGS.AUTOPLAY_ERROR_SKIP_MS);
            });
        }

        // Safety timeout — never trap the user
        const safetyTimer = setTimeout(triggerExit, VIDEO_INTRO_TIMINGS.SAFETY_TIMEOUT_MS);

        return () => {
            video.removeEventListener("canplaythrough", onCanPlay);
            video.removeEventListener("ended", onEnded);
            video.removeEventListener("error", onError);
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

            {/* Video element — Uses native CSS media queries to avoid React hydration remount blocking autoplay on iOS */}
            <video
                ref={videoRef}
                className="video-intro-player"
                muted
                playsInline
                autoPlay
                preload="auto"
                controls={false}
                disablePictureInPicture
                style={{
                    opacity: videoReady ? 1 : 0,
                    transition: "opacity 0.6s ease-in",
                    objectFit: "cover",
                }}
            >
                {/* Desktop: MP4 Main, WebM backup */}
                <source src="/bot-desktopm.mp4" type="video/mp4" media="(min-width: 768px)" />
                <source src="/Bot-Desktopm.webm" type="video/webm" media="(min-width: 768px)" />

                {/* Mobile: WebM Main (if supported), MP4 desktop version as ultimate fallback (it will automatically crop via objectFit="cover") */}
                <source src="/bot-mobile.webm" type="video/webm" media="(max-width: 767px)" />
                <source src="/bot-desktopm.mp4" type="video/mp4" media="(max-width: 767px)" />
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
