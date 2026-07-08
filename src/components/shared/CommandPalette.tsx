"use client";

import { useCommandPalette } from "@/hooks/useCommandPalette";
import { NAV_ITEMS } from "@/constants/socials";
import { META } from "@/constants/meta";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const PALETTE_ACTIONS = [
  ...NAV_ITEMS.map((item) => ({
    id: item.href,
    label: item.paletteHint ?? `Go to ${item.label}`,
    hint: item.href,
    action: () => {
      const el = document.querySelector(item.href);
      el?.scrollIntoView({ behavior: "smooth" });
    },
  })),
  {
    id: "github-external",
    label: "Open GitHub profile",
    hint: "↗ github.com/p4bl0-26",
    action: () => window.open("https://github.com/p4bl0-26", "_blank"),
  },
  {
    id: "download-resume",
    label: "Download resume",
    hint: META.resumePath,
    action: () => {
      const link = document.createElement("a");
      link.href = META.resumePath;
      link.download = "Himank_Garg_Resume.pdf";
      link.click();
    },
  },
  {
    id: "linkedin",
    label: "Open LinkedIn",
    hint: "↗ linkedin.com",
    action: () =>
      window.open(
        "https://www.linkedin.com/in/himank-garg-a80814410/",
        "_blank"
      ),
  },
];

export function CommandPalette() {
  const { open, close } = useCommandPalette();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = PALETTE_ACTIONS.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelected(0);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[selected]?.action();
      close();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Palette */}
          <motion.div
            key="palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-1/4 left-1/2 z-[201] w-full max-w-[520px] -translate-x-1/2"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-hover)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            role="dialog"
            aria-label="Command palette"
            aria-modal="true"
          >
            {/* Search input */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <Search
                size={14}
                style={{ color: "var(--text-muted)", flexShrink: 0 }}
              />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search actions..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--text-muted)]"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--text-primary)",
                }}
                aria-label="Search commands"
              />
              <span
                className="shrink-0 text-[10px] px-1.5 py-0.5 rounded border"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  borderColor: "var(--border)",
                }}
              >
                ESC
              </span>
            </div>

            {/* Results */}
            <ul className="max-h-[280px] overflow-y-auto py-1" role="listbox">
              {filtered.length === 0 ? (
                <li
                  className="px-4 py-3 text-sm"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  No results for &quot;{query}&quot;
                </li>
              ) : (
                filtered.map((action, i) => (
                  <li
                    key={action.id}
                    role="option"
                    aria-selected={i === selected}
                    onClick={() => {
                      action.action();
                      close();
                    }}
                    onMouseEnter={() => setSelected(i)}
                    className="flex items-center justify-between gap-3 px-4 py-2.5 cursor-pointer transition-colors duration-100"
                    style={{
                      backgroundColor:
                        i === selected
                          ? "var(--accent-dim)"
                          : "transparent",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <ArrowRight
                        size={12}
                        style={{
                          color:
                            i === selected
                              ? "var(--accent)"
                              : "var(--text-muted)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        className="text-sm"
                        style={{
                          color:
                            i === selected
                              ? "var(--text-primary)"
                              : "var(--text-secondary)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {action.label}
                      </span>
                    </div>
                    <span
                      className="text-[11px] shrink-0"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {action.hint}
                    </span>
                  </li>
                ))
              )}
            </ul>

            {/* Footer */}
            <div
              className="flex items-center justify-between px-4 py-2"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px]"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                ↑↓ navigate · ↵ select · esc close
              </span>
              <span
                className="text-[10px]"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                ⌘K
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
