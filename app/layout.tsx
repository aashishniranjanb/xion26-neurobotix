import "@/styles/globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#020202",
};

export const metadata: Metadata = {
  title: {
    default: "XION 2026 — NeuroBotix",
    template: "%s | XION 2026",
  },
  description: "XION 2026 - Inspired by brains. Built by engineers. National-level robotics techfest by SRM Vadapalani.",
  metadataBase: new URL("https://xion.srmecevdp.com"),
  openGraph: {
    title: "XION 2026 — NeuroBotix",
    description: "National-level robotics techfest by SRM Vadapalani.",
    siteName: "XION 2026 NeuroBotix",
    images: [{ url: "/posters/MAIN POSTER XION 2026.jpeg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XION 2026 — NeuroBotix",
    description: "National-level robotics techfest by SRM Vadapalani.",
    images: ["/posters/MAIN POSTER XION 2026.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#030303] text-white antialiased overflow-x-hidden">
        <NavigationWrapper />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
