"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    date: "2025 — Present",
    label: "B.Tech Computer Science & Engineering",
    sublabel: "The LNM Institute of Information Technology (LNMIIT), Jaipur",
    note: "First year",
    ongoing: true,
  },
  {
    date: "2025",
    label: "First hackathon: LNMHacks",
    sublabel: "Shipped a decentralized workflow engine in 24 hours",
    note: "LNMIIT",
    ongoing: false,
  },
  {
    date: "2026",
    label: "Vibe2Ship Hackathon",
    sublabel: "Built Optimus (AI Chief of Staff) in 48 hours",
    note: "Cross-platform",
    ongoing: false,
  },
  {
    date: "2026",
    label: "Nexora'26 Hackathon",
    sublabel: "Built Veritas — blockchain + AI content authenticity platform",
    note: "Hackathon",
    ongoing: false,
  },
  {
    date: "June 2026",
    label: "Started BuildBazaarX",
    sublabel: "Sole Flutter developer for the Professional mobile app",
    note: "Ongoing",
    ongoing: true,
  },
];

export function About() {
  return (
    <SectionWrapper id="about" index="01">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
        {/* Left — text */}
        <div>
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
            About
          </p>
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Building things that work.
          </h2>
          <div
            className="flex flex-col gap-4"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              fontSize: "0.95rem",
            }}
          >
            <p>
              I&apos;m a first-year B.Tech CSE student at LNMIIT, Jaipur —
              but I&apos;ve been building production software since before
              classes started. My focus is mobile-first: Flutter is my
              primary tool, but I reach for Next.js, Supabase, and AI APIs
              when the problem demands it.
            </p>
            <p>
              Right now I&apos;m the sole developer of the BuildBazaarX
              Professional mobile app — auth, dashboard, Supabase sync, the
              whole thing. I also build under pressure: three hackathon
              projects in the last year, all shipped on demo day.
            </p>
            <p>
              I&apos;m currently going deep on AI agents and system design.
              Long-term, I want to work on products where the engineering is
              the product — not just glue code.
            </p>
          </div>
        </div>

        {/* Right — timeline */}
        <div>
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
            }}
          >
            Timeline
          </p>
          <div className="relative flex flex-col space-y-10">
            {/* Continuous vertical line running the full height */}
            <div
              className="absolute left-[11px] top-2 bottom-4 w-px bg-[var(--border)]"
              aria-hidden="true"
            />

            {TIMELINE.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 28,
                  delay: i * 0.06,
                }}
                className="relative flex items-start"
              >
                {/* Left rail for the dot */}
                <div className="w-6 shrink-0 relative flex justify-center mt-1.5">
                  <div
                    className="w-2 h-2 rounded-full relative z-10"
                    style={{
                      backgroundColor: entry.ongoing
                        ? "var(--accent)"
                        : "var(--text-muted)",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content column */}
                <div className="flex flex-col gap-1 pl-2 pb-2">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                      lineHeight: "14px",
                    }}
                  >
                    {entry.date}
                  </span>
                  <span
                    className="mt-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {entry.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {entry.sublabel}
                  </span>
                  <span
                    className="inline-block w-fit px-2 py-0.5 mt-3 rounded"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-muted)",
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {entry.note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
