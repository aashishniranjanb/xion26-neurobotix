"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./events.module.css";
// EventData is defined and exported from EventsContent.tsx (since we pulled main)
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

const MAX_LOOPS = 2;

export default function EventCard({ event, index, onOpenModal }: EventCardProps) {
    const [mounted, setMounted] = useState(false);
    const countdown = useMemo(() => mounted ? getCountdownText(event.date) : "Coming Soon", [event.date, mounted]);
    const videoRef = useRef<HTMLVideoElement>(null);
    const loopCount = useRef(0);
    const [showPoster, setShowPoster] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !event.videoSrc) return;

        // Track loops — stop after MAX_LOOPS
        const handleEnded = () => {
            loopCount.current += 1;
            if (loopCount.current >= MAX_LOOPS) {
                video.pause();
                setShowPoster(true); // fade poster back in
            } else {
                video.play().catch(() => { });
            }
        };

        // IntersectionObserver — play when 40% visible, pause when out
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videoEl = videoRef.current;
                    if (!videoEl) return;

                    if (entry.isIntersecting) {
                        if (loopCount.current < MAX_LOOPS) {
                            setShowPoster(false);
                            const p = videoEl.play();
                            if (p) p.catch(() => { });
                        }
                    } else {
                        videoEl.pause();
                        loopCount.current = 0;
                    }
                });
            },
            { threshold: 0.4 }
        );

        video.addEventListener("ended", handleEnded);
        observer.observe(video);

        return () => {
            video.removeEventListener("ended", handleEnded);
            observer.disconnect();
        };
    }, [event.videoSrc]);

    const variantClass =
        event.category === "tech" ? styles.tech : styles.nontech;

    return (
        <div
            className={`${styles.card} ${variantClass}`}
            style={{ animationDelay: `${index * 0.08}s` }}
        >
            {/* Countdown Badge */}
            <div className={styles.countdownBadge}>
                <span className={styles.countdownDot} />
                {countdown}
            </div>

            {/* Media: Video + Poster overlay */}
            <div className={styles.videoWrap}>
                {event.videoSrc ? (
                    <>
                        <video
                            ref={videoRef}
                            src={event.videoSrc}
                            muted
                            playsInline
                            preload="none"
                        />
                        <Image
                            src={event.poster}
                            alt={event.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{
                                position: "absolute",
                                inset: 0,
                                opacity: showPoster ? 1 : 0,
                                transition: "opacity 0.6s ease",
                                zIndex: 2,
                                pointerEvents: "none",
                            }}
                        />
                    </>
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
            </div>
        </div>
    );
}
