import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About",
    description: "About XION 2026 — National-level robotics techfest by SRM Vadapalani Robotics Club.",
};

export default function AboutPage() {
    return <AboutContent />;
}
