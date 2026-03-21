import "@/styles/globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CustomCursor from "@/components/ui/CustomCursor";
import Toasts from "@/components/ui/Toasts";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#020202",
};

const seoKeywords = [
  "xion",
  "xion 26",
  "xion 2026",
  "xion ece",
  "xion robotic",
  "xion neurobotix",
  "xion srm",
  "xion srm ece",
  "srm vadapalani ece",
  "srmist vadapalani techfest",
  "national level robotics symposium",
  "chennai technical fest",
  "ece department symposium SRM"
];

const seoDescription = "XION 2026: NeuroBotix is the premier national-level robotics and technical symposium hosted by the ECE Department of SRM IST, Vadapalani campus. Join us for cutting-edge events like Robowar, Line Follower, and Mind Forge.";

export const metadata: Metadata = {
  title: {
    default: "XION 2026 | NeuroBotix - SRM Vadapalani ECE",
    template: "%s | XION 2026",
  },
  description: seoDescription,
  keywords: seoKeywords,
  authors: [{ name: "SRM Vadapalani ECE Department" }],
  creator: "XION Web Team",
  publisher: "SRM Institute of Science and Technology, Vadapalani",
  metadataBase: new URL("https://xion.srmecevdp.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "XION 2026 — NeuroBotix | SRM Vadapalani ECE",
    description: seoDescription,
    siteName: "XION 2026 NeuroBotix",
    url: "https://xion.srmecevdp.com",
    images: [{ url: "/posters/MAIN POSTER XION 2026.jpeg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "XION 2026 — NeuroBotix | SRM Vadapalani",
    description: seoDescription,
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
      <body className={`${inter.variable} ${outfit.variable} bg-[#030303] text-white antialiased overflow-x-hidden font-sans`}>
        <CustomCursor />
        <NavigationWrapper />
        <PageTransition>{children}</PageTransition>
        <ScrollToTop />
        <Toasts />
        <Analytics />
      </body>
    </html>
  );
}
