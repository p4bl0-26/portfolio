"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  index: string; // "01", "02", etc.
  children: React.ReactNode;
  className?: string;
  noPaddingTop?: boolean;
}

export function SectionWrapper({
  id,
  index,
  children,
  className,
  noPaddingTop,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.05 }}
      className={cn(
        "page-container relative",
        noPaddingTop ? "pb-24 md:pb-32" : "section-padding",
        className
      )}
    >
      {/* Section number in margin */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(5rem, 10vw, 9rem)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          color: "var(--text-primary)",
          opacity: 0.04,
          lineHeight: 1,
          userSelect: "none",
          paddingLeft: "var(--page-padding)",
        }}
      >
        {index}
      </span>

      {children}
    </motion.section>
  );
}
