import "@/styles/globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";

export const metadata = {
  title: "XION 26 — NeuroBotix",
  description: "Inspired by brains. Built by engineers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload intro videos for instant playback */}
        <link rel="preload" href="/bot-desktopm.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/bot-mobile.webm" as="video" type="video/webm" />
      </head>
      <body className="bg-[#030303] text-white antialiased overflow-x-hidden">
        <NavigationWrapper />
        {children}
      </body>
    </html>
  );
}
