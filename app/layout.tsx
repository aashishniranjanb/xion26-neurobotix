"use client";

import { useState } from "react";
import "@/styles/globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import IntroLoader from "@/components/IntroLoader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <html lang="en">
      <body className="bg-[#030303] text-white antialiased overflow-x-hidden">
        <IntroLoader onComplete={() => setLoaded(true)} />
        {loaded && (
          <>
            <NavigationWrapper />
            {children}
          </>
        )}
      </body>
    </html>
  );
}