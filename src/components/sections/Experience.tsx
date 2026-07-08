"use client";

import { EXPERIENCE } from "@/constants/experience";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const TYPE_LABEL: Record<string, string> = {
  work: "Work",
  hackathon: "Hackathon",
  "open-source": "Open Source",
  club: "Club",
};

export function Experience() {
  return (
    <SectionWrapper id="experience" index="04">
      {/* Section header */}
      <p
        className="mb-3"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--accent)",
        }}
      >
        Experience
      </p>
      <h2
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          fontFamily: "var(--font-display)",
          marginBottom: "4rem", // mb-16 — breathing room before first entry
        }}
      >
        What I&apos;ve been doing.
      </h2>

      {/* Timeline entries */}
      <div>
        {EXPERIENCE.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              delay: i * 0.05,
            }}
            // hairline border between entries, generous vertical padding
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "4rem",
              paddingBottom: "4rem",
            }}
          >
            {/*
              Two-column grid — desktop:
                LEFT  → cols 1–4   (sticky date / tag / org)
                GAP   → col 5      (gutter)
                RIGHT → cols 6–12  (role + description + bullets)

              Mobile: single column, date row collapses above title.
            */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8">

              {/* ── LEFT column ──────────────────────────────── */}
              <div
                className="lg:col-span-4"
                style={{
                  // sticky only on desktop — position:sticky inside a grid cell
                  // use a wrapper div trick below for true stickiness
                }}
              >
                <div
                  className="flex flex-row lg:flex-col gap-3 lg:gap-4"
                  style={{
                    // sticky on desktop
                    position: "sticky",
                    top: "6rem",
                    alignSelf: "start",
                  } as React.CSSProperties}
                >
                  {/* Date range — large monospace */}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
                      color: "var(--text-muted)",
                      letterSpacing: "0.04em",
                      lineHeight: 1.4,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {entry.period}
                  </span>

                  {/* Type badge */}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                      padding: "2px 8px",
                      borderRadius: "3px",
                      display: "inline-block",
                      alignSelf: "flex-start",
                    }}
                  >
                    {TYPE_LABEL[entry.type] ?? entry.type}
                  </span>

                  {/* Org name / link */}
                  {entry.orgUrl ? (
                    <a
                      href={entry.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 group"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        letterSpacing: "0.03em",
                        alignSelf: "flex-start",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {entry.org}
                      <ExternalLink
                        size={9}
                        style={{ opacity: 0.5, flexShrink: 0 }}
                      />
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {entry.org}
                    </span>
                  )}
                </div>
              </div>

              {/* ── RIGHT column ─────────────────────────────── */}
              <div className="lg:col-span-7 lg:col-start-6">
                {/* Role title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                  }}
                >
                  {entry.role}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    maxWidth: "60ch",
                    marginBottom: "1.25rem",
                  }}
                >
                  {entry.description}
                </p>

                {/* Highlights — stepped-down visual weight */}
                <ul
                  className="flex flex-col"
                  style={{ gap: "0.75rem" }}
                  aria-label={`Highlights for ${entry.role}`}
                >
                  {entry.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start"
                      style={{ gap: "0.75rem" }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: "var(--text-muted)",
                          flexShrink: 0,
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          lineHeight: 1.6,
                          marginTop: "1px",
                        }}
                      >
                        —
                      </span>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
