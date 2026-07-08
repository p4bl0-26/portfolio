"use client";
import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import { SOCIALS } from "@/constants/socials";
import { META } from "@/constants/meta";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

const HERO_LINE = "Himank Garg.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 220,
      damping: 24,
    },
  },
};

const subtextVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 28,
      delay: 0.55,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 28,
      delay: 0.75,
    },
  },
};

export function Hero() {
  // Easter egg: g h to jump to GitHub
  useKeyboardShortcuts([
    {
      keys: ["g", "h"],
      description: "Jump to GitHub section",
      handler: () => {
        document.getElementById("github")?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center page-container"
    >
      {/* Fine dot grid background — subtle, static */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-4 text-sm tracking-widest bg-transparent"
          style={{
            fontFamily: "var(--font-mono)",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          Flutter · Full Stack · AI
        </motion.p>

        {/* Name — single-line spring reveal */}
        {/* paddingBottom gives descenders (g, y, p) room; margin compensates */}
        <div style={{ overflow: "hidden", paddingBottom: "0.18em", marginBottom: "-0.18em" }}>
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.3 }}
            aria-label="Himank Garg"
            className="pb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 9vw, 8.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              whiteSpace: "nowrap",
            }}
          >
            {HERO_LINE}
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          variants={subtextVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-xl"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            fontFamily: "var(--font-body)",
          }}
        >
          {META.tagline}
        </motion.p>

        {/* Status line */}
        <motion.p
          variants={subtextVariants}
          initial="hidden"
          animate="visible"
          className="mt-3"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          <span style={{ color: "var(--accent)" }}>●</span>{" "}
          currently building{" "}
          <span style={{ color: "var(--text-secondary)" }}>
            {META.currentlyBuilding}
          </span>{" "}
          — {META.location}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center mt-8"
          style={{ gap: "16px" }}
        >
          {/* Primary — solid accent */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--text-on-accent)",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 500,
              textDecoration: "none",
              height: "52px",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              minWidth: "180px",
              gap: "8px",
              cursor: "pointer",
              outlineOffset: "2px",
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = "2px solid var(--accent)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = "none";
            }}
          >
            View Projects
            <motion.span
              className="inline-flex"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 500, damping: 24 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>

          <a
            href={META.resumePath}
            download="Himank_Garg_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md transition-all duration-200 focus-visible:outline-none"
            style={{
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border-hover)",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 400,
              textDecoration: "none",
              height: "52px",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              minWidth: "180px",
              cursor: "pointer",
              outlineOffset: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--text-muted)";
              e.currentTarget.style.backgroundColor = "var(--bg-subtle)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = "2px solid var(--accent)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = "none";
            }}
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social links — monospace row */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-wrap items-center gap-6 mt-12"
          aria-label="Social links"
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              className="link-underline transition-colors duration-150"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.06em",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
              }}
              aria-label={`${s.label}: ${s.handle}`}
            >
              {s.label}
            </a>
          ))}
        </motion.nav>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-6"
          style={{ backgroundColor: "var(--text-muted)" }}
        />
      </motion.div>
    </section>
  );
}
