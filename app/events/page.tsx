import type { Metadata } from "next";
import EventsContent from "./EventsContent";

export const metadata: Metadata = {
    title: "Events",
    description: "Explore Technical & Non-Technical Events — Robo War, Line Follower, Mind Forge, and more at XION 2026.",
};

export default function EventsPage() {
    return <EventsContent />;
}
