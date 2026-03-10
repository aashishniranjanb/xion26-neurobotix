"use client";

import Image from "next/image";
import styles from "./events.module.css";
import type { EventData } from "./data";

interface EventCardProps {
    event: EventData;
    index: number;
    onOpenModal: () => void;
}

export default function EventCard({ event, index, onOpenModal }: EventCardProps) {
    const variantClass =
        event.category === "tech" ? styles.tech : styles.nontech;

    return (
        <div
            className={`${styles.card} ${variantClass}`}
            style={{ animationDelay: `${index * 0.08}s` }}
        >
            {/* Media: Video or Poster */}
            <div className={styles.videoWrap}>
                {event.videoSrc ? (
                    <video
                        src={event.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
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
