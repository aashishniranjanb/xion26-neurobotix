import type { Metadata } from "next";
import SponsorsContent from "./SponsorsContent";

export const metadata: Metadata = {
    title: "Sponsors",
    description: "Sponsorship Opportunities at XION 2026 — Join our strategic alliance and engage with India's next-gen engineering talent at SRMIST Vadapalani.",
};

export default function SponsorPage() {
    return <SponsorsContent />;
}
