"use client";

import { useEffect } from "react";

interface Shortcut {
  keys: string[];
  handler: () => void;
  description?: string;
}

export function useKeyboardShortcuts(shortcuts: Shortcut[]) {
  useEffect(() => {
    const pressed = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      pressed.add(e.key.toLowerCase());

      for (const shortcut of shortcuts) {
        const allPressed = shortcut.keys.every((k) =>
          pressed.has(k.toLowerCase())
        );
        if (allPressed) {
          e.preventDefault();
          shortcut.handler();
          pressed.clear();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      pressed.delete(e.key.toLowerCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [shortcuts]);
}
