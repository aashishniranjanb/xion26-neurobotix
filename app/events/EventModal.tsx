"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./events.module.css";
import type { EventData } from "./EventsContent";

interface EventModalProps {
    event: EventData;
    onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return (
        <div
            className={styles.modalOverlay}
            onClick={onClose}
        >
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                tabIndex={-1}
                ref={(el) => { if (el) el.focus() }}
            >
                <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
                    ✕
                </button>
                <h2 id="modal-title" className={styles.modalTitle}>{event.name}</h2>
                <p className={styles.modalTagline}>{event.tagline}</p>

                <div className={styles.modalBody}>
                    <div className={styles.rulesSection}>
                        <h3 className={styles.modalSubtitle}>Rules &amp; Regulations</h3>
                        <ol className={styles.rulesList}>
                            {event.rules.map((rule, i) => (
                                <li key={i}>{rule}</li>
                            ))}
                        </ol>

                        {/* Register CTA */}
                        <a
                            href={event.registerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.modalRegisterBtn}
                        >
                            Register Now →
                        </a>
                    </div>

                    <div className={styles.posterSection}>
                        <div className={styles.posterContainer}>
                            <Image
                                src={event.poster}
                                alt={`${event.name} Poster`}
                                width={400}
                                height={566}
                                className={styles.posterImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}