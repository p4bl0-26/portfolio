"use client";

import { NAV_ITEMS } from "@/constants/socials";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for active section highlighting
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 28, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 h-14"
      style={{
        backgroundColor: scrolled ? "var(--bg-nav)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(1.5)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.5)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "background-color 0.3s, border-color 0.3s",
      }}
    >
      <div className="page-container flex items-center justify-between h-full">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="flex items-center gap-2 no-underline"
          aria-label="Himank Garg — Back to top"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
        >
          HG
        </a>

        {/* Nav links — desktop */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.color = "var(--text-muted)";
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Search trigger — desktop full, mobile icon-only */}
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", {
                  key: "k",
                  ctrlKey: true,
                  bubbles: true,
                })
              )
            }
            aria-label="Open command palette"
            className="flex items-center gap-2.5 rounded-md transition-colors duration-150"
            style={{
              height: "40px",
              paddingLeft: "14px",
              paddingRight: "14px",
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "var(--text-muted)",
              cursor: "pointer",
              minWidth: "120px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
            }}
          >
            <Search size={14} style={{ flexShrink: 0, color: "var(--text-muted)" }} />
            <span
              className="hidden md:block flex-1 text-left"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-muted)",
                userSelect: "none",
              }}
            >
              Search
            </span>

          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
