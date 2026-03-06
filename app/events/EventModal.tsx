"use client";

import { useEffect } from "react";
import styles from "./events.module.css";

interface EventModalProps {
    eventName: string;
    rules: string[];
    poster: string;
    onClose: () => void;
}

export default function EventModal({ eventName, rules, poster, onClose }: EventModalProps) {
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
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose} aria-label="Close">
                    ✕
                </button>
                <h2 className={styles.modalTitle}>{eventName}</h2>

                <div className={styles.modalBody}>
                    <div className={styles.rulesSection}>
                        <h3 className={styles.modalSubtitle}>Rules &amp; Regulations</h3>
                        <ol className={styles.rulesList}>
                            {rules.map((rule, i) => (
                                <li key={i}>{rule}</li>
                            ))}
                        </ol>
                    </div>

                    <div className={styles.posterSection}>
                        <div className={styles.posterContainer}>
                            <img
                                src={`/posters/${poster}`}
                                alt={`${eventName} Poster`}
                                className={styles.posterImage}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const placeholder = target.nextElementSibling as HTMLElement;
                                    if (placeholder) placeholder.style.display = 'flex';
                                }}
                            />
                            {/* Fallback placeholder if image is missing */}
                            <div className={styles.posterPlaceholder} style={{ display: 'none' }}>
                                <p>A3 POSTER - {eventName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}