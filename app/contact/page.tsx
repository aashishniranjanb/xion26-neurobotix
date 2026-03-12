import ContactSection from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with the XION 2026 team for queries, registrations, and sponsorship discussions.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#020202] overflow-hidden pt-20 xs:pt-24 md:pt-8">
            <ContactSection />
        </main>
    );
}
