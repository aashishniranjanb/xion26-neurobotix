"use client";

import { useRef, useEffect, useState, useCallback } from "react";

export default function VideoIntro({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const hasCompleted = useRef(false);

    // Smooth exit transition
    const triggerExit = useCallback(() => {
        if (hasCompleted.current) return;
        hasCompleted.current = true;
        setIsFadingOut(true);
        // Wait for the CSS fade-out to finish before unmounting
        setTimeout(() => {
            onComplete();
        }, 900); // matches the CSS transition duration
    }, [onComplete]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Set playback speed
        video.playbackRate = 1.25;

        // Attempt autoplay (muted is required for autoplay on most browsers)
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // If autoplay is blocked, skip to content after a brief moment
                setTimeout(triggerExit, 500);
            });
        }

        // When video ends, trigger cinematic exit
        const handleEnded = () => {
            triggerExit();
        };

        video.addEventListener("ended", handleEnded);

        // Safety timeout — if video is longer than 15s at 1.25x, skip anyway
        const safetyTimer = setTimeout(() => {
            triggerExit();
        }, 15000);

        return () => {
            video.removeEventListener("ended", handleEnded);
            clearTimeout(safetyTimer);
        };
    }, [triggerExit]);

    return (
        <div
            className={`video-intro-overlay ${isFadingOut ? "video-intro-exit" : ""}`}
            aria-hidden="true"
            style={{ willChange: "opacity, filter, transform" }}
        >
            {/* Fallback background — shown before video loads */}
            <div className="video-intro-fallback" />

            <video
                ref={videoRef}
                className="video-intro-player"
                src="/intro-video-ai.mp4"
                muted
                playsInline
                autoPlay
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                style={{ willChange: "transform, opacity, filter" }}
            />

            {/* Bottom gradient for smoother visual blending */}
            <div className="video-intro-vignette" />
        </div>
    );
}
