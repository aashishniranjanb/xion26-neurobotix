"use client";

import { useRef, useEffect, useState, useCallback } from "react";

export default function VideoIntro({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [videoSrc, setVideoSrc] = useState<string>("");
    const hasCompleted = useRef(false);

    // Initial screen check on mount
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        setVideoSrc(isMobile ? "/bot-mobile.webm" : "/bot-desktopm.mp4");
    }, []);

    // Smooth exit transition
    const triggerExit = useCallback(() => {
        if (hasCompleted.current) return;
        hasCompleted.current = true;
        setIsFadingOut(true);
        // Wait for the CSS fade-out to finish before unmounting
        setTimeout(() => {
            onComplete();
        }, 1200); // matches the 1.2s CSS transition duration
    }, [onComplete]);

    useEffect(() => {
        if (!videoSrc) return;

        const video = videoRef.current;
        if (!video) return;

        // Set playback rate (slightly faster for cinematic feel)
        video.playbackRate = 1.25;

        // Attempt autoplay
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // If blocked, skip after a short delay
                setTimeout(triggerExit, 800);
            });
        }

        const handleEnded = () => triggerExit();
        video.addEventListener("ended", handleEnded);

        // Safety timeout (15s @ 1.25x)
        const safetyTimer = setTimeout(triggerExit, 15000);

        return () => {
            video.removeEventListener("ended", handleEnded);
            clearTimeout(safetyTimer);
        };
    }, [videoSrc, triggerExit]);

    if (!videoSrc) return <div className="video-intro-overlay bg-[#020202] fixed inset-0 z-[100]" />;

    return (
        <div
            className={`video-intro-overlay bg-[#020202] ${isFadingOut ? "video-intro-exit" : ""}`}
            style={{
                willChange: "opacity, filter",
                transform: "translateZ(0)" // Force GPU layer
            }}
        >
            <video
                ref={videoRef}
                key={videoSrc}
                className="video-intro-player"
                src={videoSrc}
                muted
                playsInline
                autoPlay
                preload="auto"
                disablePictureInPicture
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    transform: "translateZ(0)" // Hardware acceleration
                }}
            />
            {/* Dark vignette to improve readability of potential overlay text and smoothing */}
            <div className="video-intro-vignette opacity-60" />
        </div>
    );
}
