"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { META } from "@/constants/meta";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <SectionWrapper id="resume" index="07">
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
        Resume
      </p>
      <h2
        className="mb-10"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          fontFamily: "var(--font-display)",
        }}
      >
        My resume.
      </h2>

      <div
        className="flex flex-col md:flex-row gap-8 items-start"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "2.5rem" }}
      >
        {/* Preview card */}
        <div
          className="w-full md:w-64 flex-shrink-0"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            aspectRatio: "210/297", // A4 ratio
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            position: "relative",
            overflow: "hidden",
          }}
          aria-label="Resume preview"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(var(--border) 1px, transparent 1px),
                linear-gradient(90deg, var(--border) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              opacity: 0.5,
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-3">
            <FileText
              size={32}
              style={{ color: "var(--text-muted)", opacity: 0.5 }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              {/* TODO: Replace with actual resume PDF preview */}
              Himank_Garg_Resume.pdf
            </span>
          </div>
        </div>

        {/* Info + download */}
        <div className="flex flex-col gap-6">
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "1.2rem",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Himank Garg
            </h3>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              Flutter Developer · Full Stack · AI Engineer
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              B.Tech CSE at LNMIIT, Jaipur. Shipping production mobile apps
              and AI tools since first year. Available for internships,
              freelance projects, and interesting problems.
            </p>
          </div>

          <a
            href={META.resumePath} // TODO: Point to actual resume PDF
            target="_blank"
            rel="noopener noreferrer"
            download="Himank_Garg_Resume.pdf"
            className="inline-flex items-center gap-2.5 w-fit px-5 py-2.5 rounded-md transition-all duration-200"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--text-on-accent)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.88";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            aria-label="Download Himank Garg's resume PDF"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
