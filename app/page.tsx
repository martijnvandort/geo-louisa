"use client";

import { useEffect, useState } from "react";
import { GeosenseApp } from "@/components/game/geosense-app";

export default function Home() {
  const [playerId, setPlayerId] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setPlayerId(crypto.randomUUID()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!playerId) {
    return (
      <main className="flex h-dvh items-center justify-center bg-[#e2f6fe]">
        <p className="font-mono text-sm tracking-[0.2em] text-[#2f4a52]">GEOSENSE</p>
      </main>
    );
  }

  return <GeosenseApp playerId={playerId} />;
}
