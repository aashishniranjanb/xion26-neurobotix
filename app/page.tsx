"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("xion_intro_played") === "true";
    if (alreadyPlayed) {
      router.replace("/home");
    } else {
      router.replace("/intro");
    }
    setChecked(true);
  }, [router]);

  // Show nothing while checking — avoids flash
  if (!checked) {
    return <div className="fixed inset-0 bg-[#020202]" />;
  }

  return null;
}
