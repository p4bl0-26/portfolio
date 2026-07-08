"use client";

import { STACK } from "@/constants/stack";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";

export function Stack() {
  return (
    <SectionWrapper id="stack" index="02">
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
        Stack
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
        Tools I actually use.
      </h2>

      {/* Plain text columns — no icon soup */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}
      >
        {STACK.map((category, ci) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 28,
              delay: ci * 0.06,
            }}
          >
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--text-muted)",
              }}
            >
              {category.label}
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {category.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    letterSpacing: "-0.01em",
                    transition: "color 0.15s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
