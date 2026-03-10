"use client";

import { useState, useMemo } from "react";
import styles from "./events.module.css";
import GalaxyCanvas from "./GalaxyCanvas";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

import { allEvents, type EventData } from "./data";

/* ── Page ───────────────────────────────────────────────── */

type FilterTab = "all" | "tech" | "nontech";

export default function EventsContent() {
    const [activeTab, setActiveTab] = useState<FilterTab>("all");
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

    const filteredEvents = useMemo(() => {
        if (activeTab === "all") return allEvents;
        return allEvents.filter((e) => e.category === activeTab);
    }, [activeTab]);

    const tabs: { key: FilterTab; label: string }[] = [
        { key: "all", label: "All Events" },
        { key: "tech", label: "Technical" },
        { key: "nontech", label: "Non-Technical" },
    ];

    return (
        <main className="min-h-screen relative pt-28 bg-[#020202]">
            <GalaxyCanvas />

            {/* Hero Title */}
            <div className={styles.heroSection}>
                <h1 className={styles.title}>XION 2026</h1>
                <p className={styles.subtitle}>
                    10 Events · 2 Days · Unlimited Innovation
                </p>
            </div>

            {/* Sticky Tab Bar */}
            <div className={styles.tabBar}>
                <div className={styles.tabContainer}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ""}`}
                        >
                            {tab.label}
                            {activeTab === tab.key && (
                                <span className={styles.tabIndicator} />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Event Count */}
            <div className={styles.eventCount}>
                <span className={styles.eventCountNumber}>{filteredEvents.length}</span>
                <span className={styles.eventCountLabel}>
                    {activeTab === "all" ? "Events" : activeTab === "tech" ? "Technical Events" : "Non-Technical Events"}
                </span>
            </div>

            {/* Events Grid */}
            <section className={styles.section}>
                <div className={styles.grid}>
                    {filteredEvents.map((event, i) => (
                        <EventCard
                            key={event.name}
                            event={event}
                            index={i}
                            onOpenModal={() => setSelectedEvent(event)}
                        />
                    ))}
                </div>
            </section>

            {/* EVENT MODAL (Rendered at root to fix layering) */}
            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </main>
    );
}
