"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./events.module.css";
import type { EventData } from "./EventsContent";

interface EventCardProps {
    event: EventData;
    index: number;
    onOpenModal: () => void;
}

function getCountdownText(dateStr: string): string {
    const target = new Date(dateStr + "T00:00:00");
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return "Live Now";
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days === 1) return "Tomorrow";
    return `${days} days left`;
}

export default function EventCard({ event, index, onOpenModal }: EventCardProps) {
    const countdown = useMemo(() => getCountdownText(event.date), [event.date]);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Play/pause based on hover/touch
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isHovered) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Ignore autoplay errors
                });
            }
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }, [isHovered]);

    const handleShare = async () => {
        const shareData = {
            title: `XION 2026 — ${event.name}`,
            text: `Check out "${event.name}" at XION 2026 NeuroBotix! ${event.tagline}`,
            url: typeof window !== "undefined" ? window.location.href : "",
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                /* user cancelled */
            }
        } else {
            // Fallback: copy link
            await navigator.clipboard.writeText(
                `${shareData.text}\n${shareData.url}`
            );
            alert("Link copied to clipboard!");
        }
    };

    const variantClass =
        event.category === "tech" ? styles.tech : styles.nontech;

    return (
        <div
            className={`${styles.card} ${variantClass}`}
            style={{ animationDelay: `${index * 0.08}s` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
        >
            {/* Countdown Badge */}
            <div className={styles.countdownBadge}>
                <span className={styles.countdownDot} />
                {countdown}
            </div>

            {/* Media: Video or Poster */}
            <div className={styles.videoWrap}>
                {event.videoSrc ? (
                    <video
                        ref={videoRef}
                        src={event.videoSrc}
                        poster={event.poster}
                        muted
                        loop
                        playsInline
                        preload="none"
                    />
                ) : (
                    <Image
                        src={event.poster}
                        alt={event.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                )}
            </div>

            {/* Card Body */}
            <div className={styles.cardBody}>
                {/* Category Tag */}
                <span className={styles.categoryTag}>
                    {event.category === "tech" ? "Technical" : "Non-Technical"}
                </span>

                <p className={styles.cardName}>{event.name}</p>
                <p className={styles.cardTagline}>{event.tagline}</p>

                {/* Actions */}
                <div className={styles.cardActions}>
                    <button
                        className={styles.rulesBtn}
                        onClick={onOpenModal}
                    >
                        View Rules
                    </button>
                    <a
                        href={event.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.registerBtn}
                    >
                        Register
                    </a>
                </div>

                {/* Share Button */}
                <button
                    className={styles.shareBtn}
                    onClick={handleShare}
                    aria-label="Share event"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                </button>
            </div>
        </div>
    );
}