import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "XION 2026 — National-level robotics techfest by SRM Vadapalani. Experience the future of NeuroBotix & AI excellence.",
};
import CountDown from "@/components/CountDown";
import AboutSection from "@/components/AboutSection";
import StatsGrid from "@/components/StatsGrid";
import EventMatrix from "@/components/EventMatrix";
import SponsorsSection from "@/components/SponsorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-black-core animate-viscosity overflow-hidden">
            <HeroSection />
            <CountDown />
            <AboutSection />
            <StatsGrid />
            <EventMatrix />
            <SponsorsSection />
            <CTASection />
            <Footer />
        </main>
    );
}
