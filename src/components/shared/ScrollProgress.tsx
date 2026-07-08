"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[1px] transition-all duration-150"
      style={{
        width: `${progress}%`,
        backgroundColor: "var(--accent)",
        boxShadow: "0 0 6px var(--accent)",
      }}
      aria-hidden="true"
    />
  );
}
