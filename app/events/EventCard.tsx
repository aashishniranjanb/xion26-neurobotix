"use client";

import { useState } from "react";
import styles from "./events.module.css";
import EventModal from "./EventModal";

interface EventCardProps {
    name: string;
    tagline: string;
    videoSrc?: string;
    imgSrc?: string;
    alt?: string;
    rules: string[];
    variant: "tech" | "nontech";
    icon?: string;
    poster: string;
}

export default function EventCard({ name, tagline, videoSrc, imgSrc, alt, rules, variant, icon, poster }: EventCardProps) {
    const [showModal, setShowModal] = useState(false);

    const variantClass = variant === "tech" ? styles.tech : styles.nontech;

    return (
        <>
            <div className={`${styles.card} ${variantClass}`}>
                {videoSrc ? (
                    <div className={styles.videoWrap}>
                        <video
                            src={videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                ) : imgSrc ? (
                    <div className={styles.videoWrap}>
                        <img src={imgSrc} alt={alt || name} loading="lazy" />
                    </div>
                ) : (
                    <div className={styles.textVisual}>
                        <span className={styles.eventIcon}>{icon}</span>
                    </div>
                )}
                <div className={styles.cardBody}>
                    <p className={styles.cardName}>{name}</p>
                    <button className={styles.rulesBtn} onClick={() => setShowModal(true)}>
                        Register
                    </button>
                </div>
            </div>

            {showModal && (
                <EventModal
                    eventName={name}
                    rules={rules}
                    poster={poster}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
}