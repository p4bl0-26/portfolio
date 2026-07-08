"use client";

import { ACHIEVEMENTS } from "@/constants/achievements";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";

export function Achievements() {
  return (
    <SectionWrapper id="achievements" index="05">
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
        Achievements
      </p>
      <h2
        className="mb-12"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          fontFamily: "var(--font-display)",
        }}
      >
        Shipped under pressure.
      </h2>

      {/* Dated list — not cards */}
      <div
        className="flex flex-col"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {ACHIEVEMENTS.map((achievement, i) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 28,
              delay: i * 0.06,
            }}
            className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 py-6 group"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            {/* Date */}
            <div className="pt-0.5">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                {achievement.date}
              </span>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-1.5">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    transition: "color 0.15s",
                  }}
                  className="group-hover:text-accent"
                >
                  {achievement.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                  }}
                >
                  {achievement.org}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {achievement.description}
              </p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem", // 13px
                    color: "var(--accent)",
                    textDecoration: "none",
                    transition: "opacity 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {achievement.linkText || "View ↗"}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
