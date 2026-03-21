import type { Metadata } from "next";
import EventsContent from "./EventsContent";
import { allEvents } from "./data";

export const metadata: Metadata = {
    title: "Events",
    description: "Explore Technical & Non-Technical Events — Robo War, Line Follower, Mind Forge, and more at XION 2026.",
};

export default function EventsPage() {
    const eventJsonLd = allEvents.map((event) => ({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": `XION 2026: ${event.name}`,
        "description": event.tagline,
        "startDate": `${event.date}T09:00:00+05:30`,
        "endDate": `${event.date}T17:00:00+05:30`,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
            "@type": "Place",
            "name": "SRM Institute of Science and Technology, Vadapalani Campus",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "No.1, Jawaharlal Nehru Salai, Vadapalani",
                "addressLocality": "Chennai",
                "postalCode": "600026",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
            }
        },
        "image": [
            `https://xion.srmecevdp.com${event.poster}`
        ],
        "organizer": {
            "@type": "Organization",
            "name": "Department of ECE, SRM Vadapalani",
            "url": "https://xion.srmecevdp.com"
        },
        "offers": {
            "@type": "Offer",
            "url": event.registerLink,
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-03-01"
        }
    }));

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
            />
            <EventsContent />
        </>
    );
}
