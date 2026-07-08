"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/constants/projects";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

type FilterCategory = "All" | "Mobile" | "AI" | "Web3" | "Full-Stack";

const FILTERS: FilterCategory[] = ["All", "Mobile", "AI", "Web3", "Full-Stack"];

/* ── Image frames ──────────────────────────────────────────────── */

/**
 * Browser chrome frame — for desktop screenshots (optimus, veritas).
 * Thin top bar with three dots, rounded-lg border.
 */
function BrowserFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.1)",
        backgroundColor: "var(--bg-card)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-1.5 px-3"
        style={{
          height: "28px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          backgroundColor: "rgba(255,255,255,0.03)",
          flexShrink: 0,
        }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
        />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
        />
      </div>
      {/* Screenshot */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
          loading="lazy"
        />
      </div>
    </div>
  );
}

/**
 * Phone device frame — for mobile screenshots (bbx-seller, sortd).
 * Centered, portrait-ratio, rounded corners, thin stroke.
 */
function PhoneFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="flex justify-center items-start w-full">
      <div
        style={{
          width: "clamp(180px, 45%, 260px)",
          borderRadius: "2.5rem",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          backgroundColor: "var(--bg-card)",
          flexShrink: 0,
        }}
      >
        <div className="relative w-full" style={{ aspectRatio: "9/19.5" }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="260px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Placeholder tile — for projects with no screenshot yet (in-dev).
 */
function PlaceholderTile({ index }: { index: string }) {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        aspectRatio: "4/3",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-3">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "4rem",
            fontWeight: 700,
            opacity: 0.04,
            letterSpacing: "-0.04em",
            color: "var(--text-primary)",
          }}
        >
          {index}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--text-muted)",
          }}
        >
          screenshots soon
        </span>
      </div>
    </div>
  );
}

/** Renders the right image frame based on project data. */
function ProjectImage({ project }: { project: Project }) {
  if (!project.image) {
    return <PlaceholderTile index={project.index} />;
  }
  if (project.imageType === "mobile") {
    return <PhoneFrame src={project.image} alt={project.imageAlt} />;
  }
  return <BrowserFrame src={project.image} alt={project.imageAlt} />;
}

/* ── Status badge ──────────────────────────────────────────────── */
function StatusBadge({ status }: { status: Project["status"] }) {
  const isInDev = status === "pre-release";
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: isInDev
          ? "var(--accent)"
          : status === "live"
          ? "var(--accent)"
          : "var(--text-muted)",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
        padding: "2px 8px",
        borderRadius: "3px",
        display: "inline-block",
      }}
    >
      {status === "live"
        ? "● live"
        : status === "pre-release"
        ? "◐ in development"
        : "○ wip"}
    </span>
  );
}

/* ── Project row ───────────────────────────────────────────────── */
function ProjectRow({
  project,
  isReversed,
}: {
  project: Project;
  isReversed: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 160, damping: 28 }}
      style={{ borderTop: "1px solid var(--border)" }}
      className="pt-12 pb-4"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
          isReversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Image */}
        <div className={isReversed ? "[direction:ltr]" : ""}>
          <ProjectImage project={project} />
        </div>

        {/* Content */}
        <div className={isReversed ? "[direction:ltr]" : ""}>
          {/* Index + status on same row */}
          <div className="flex items-center justify-between mb-3">
            <span
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              {project.index}
            </span>
            <StatusBadge status={project.status} />
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            {project.title}
          </h3>

          {/* Subtitle / Tech */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--accent)",
              marginBottom: "1.25rem",
            }}
          >
            {project.subtitle}
          </p>

          {/* Description */}
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              fontSize: "0.9rem",
              marginBottom: "1.25rem",
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: "2px 8px",
                  borderRadius: "3px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-5 mb-6">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 link-underline"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                GitHub <ExternalLink size={10} />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 link-underline"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                Live Demo <ExternalLink size={10} />
              </a>
            )}
            {project.links.apk && (
              <a
                href={project.links.apk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 link-underline"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                APK Download <ExternalLink size={10} />
              </a>
            )}
          </div>

          {/* Expandable case study */}
          <button
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center gap-2 transition-colors duration-150"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: expanded ? "var(--accent)" : "var(--text-muted)",
            }}
            aria-expanded={expanded}
            aria-controls={`case-study-${project.id}`}
          >
            <ChevronDown
              size={12}
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
            {expanded ? "Collapse" : "Read case study"}
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={`case-study-${project.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 30 }}
                style={{ overflow: "hidden" }}
              >
                <ul
                  className="mt-4 flex flex-col gap-2"
                  style={{ paddingLeft: "1rem" }}
                >
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2"
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          flexShrink: 0,
                          marginTop: "3px",
                        }}
                        aria-hidden="true"
                      >
                        —
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Section ───────────────────────────────────────────────────── */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeFilter));

  return (
    <SectionWrapper id="projects" index="03">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
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
            Projects
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Things I&apos;ve shipped.
          </h2>
        </div>

        {/* Filters — plain monospace text */}
        <nav
          className="flex items-center gap-5"
          aria-label="Project filters"
          role="tablist"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
              className="transition-colors duration-150"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color:
                  activeFilter === filter
                    ? "var(--accent)"
                    : "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter)
                  e.currentTarget.style.color = "var(--text-secondary)";
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter)
                  e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {filter}
            </button>
          ))}
        </nav>
      </div>

      {/* Project rows */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {filtered.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              isReversed={i % 2 === 1}
            />
          ))}
          {filtered.length === 0 && (
            <p
              className="py-16"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--text-muted)",
              }}
            >
              No projects in this category yet.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
