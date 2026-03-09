import "@/styles/globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "XION 2026 — NeuroBotix", template: "%s | XION 2026" },
  description: "National-level robotics techfest by SRM Vadapalani.",
  openGraph: {
    type: "website",
    siteName: "XION 2026 NeuroBotix",
    images: [{ url: "/posters/MAIN POSTER XION 2026.jpeg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#030303] text-white antialiased overflow-x-hidden">
        <NavigationWrapper />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}