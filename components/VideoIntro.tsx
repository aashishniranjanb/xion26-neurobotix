"use client";

import { useRef, useEffect, useState, useCallback } from "react";

export default function VideoIntro({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [phase, setPhase] = useState<"fallback" | "playing" | "exiting">("fallback");
    const [videoSrc, setVideoSrc] = useState<string>("");
    const [videoReady, setVideoReady] = useState(false);
    const hasCompleted = useRef(false);

    // ── Pick the right source on mount ──────────────────────
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        setVideoSrc(isMobile ? "/bot-mobile.webm" : "/bot-desktopm.mp4");
    }, []);

    // ── Cinematic exit ──────────────────────────────────────
    const triggerExit = useCallback(() => {
        if (hasCompleted.current) return;
        hasCompleted.current = true;
        setPhase("exiting");
        setTimeout(() => {
            onComplete();
        }, 1000);
    }, [onComplete]);

    // ── Video lifecycle ─────────────────────────────────────
    useEffect(() => {
        if (!videoSrc) return;
        const video = videoRef.current;
        if (!video) return;

        const onCanPlay = () => {
            setVideoReady(true);
            setPhase("playing");
        };

        const onEnded = () => triggerExit();
        const onError = () => {
            console.warn("Video failed, skipping intro:", videoSrc);
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
                setTimeout(triggerExit, 600);
            });
        }

        // Safety timeout — never trap the user
        const safetyTimer = setTimeout(triggerExit, 12000);

        return () => {
            video.removeEventListener("canplaythrough", onCanPlay);
            video.removeEventListener("ended", onEnded);
            video.removeEventListener("error", onError);
            clearTimeout(safetyTimer);
        };
    }, [videoSrc, triggerExit]);

    // ── Render ──────────────────────────────────────────────
    return (
        <div className={`video-intro-overlay ${phase === "exiting" ? "video-intro-exit" : ""}`}>
            {/* Static fallback shown instantly */}
            <div
                className="video-intro-fallback-img"
                style={{ opacity: videoReady ? 0 : 1 }}
            />

            {/* Video element */}
            {videoSrc && (
                <video
                    ref={videoRef}
                    key={videoSrc}
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
                    }}
                >
                    {/* Primary source */}
                    <source
                        src={videoSrc}
                        type={videoSrc.endsWith(".webm") ? "video/webm" : "video/mp4"}
                    />
                    {/* MP4 fallback for iOS/Safari that don't support WebM */}
                    <source src="/bot-desktopm.mp4" type="video/mp4" />
                </video>
            )}

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
