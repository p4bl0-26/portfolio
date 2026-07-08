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
        className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "2.5rem" }}
      >
        {/* Preview card */}
        <div className="w-full md:w-[320px] lg:w-[400px] flex-shrink-0">
          {/* Desktop embed (hidden on mobile) */}
          <div
            className="hidden md:block w-full"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              aspectRatio: "1/1.414", // A4 ratio
              overflow: "hidden",
            }}
          >
            <object
              data={`${META.resumePath}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                <FileText size={32} style={{ color: "var(--text-muted)", opacity: 0.5 }} />
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                  Unable to display PDF file.
                </p>
                <a
                  href={META.resumePath}
                  download="Himank_Garg_Resume.pdf"
                  style={{ color: "var(--accent)", fontSize: "0.875rem", textDecoration: "underline" }}
                >
                  Download instead
                </a>
              </div>
            </object>
          </div>

          {/* Mobile simple card (hidden on desktop) */}
          <div
            className="md:hidden w-full flex items-center justify-between p-4"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
            }}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <FileText size={20} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
              <div className="flex flex-col overflow-hidden">
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Himank_Garg_Resume.pdf
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--text-muted)",
                  }}
                >
                  8 KB
                </span>
              </div>
            </div>
            <a
              href={META.resumePath}
              download="Himank_Garg_Resume.pdf"
              aria-label="Download Himank_Garg_Resume.pdf"
              style={{
                color: "var(--accent)",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                backgroundColor: "var(--bg-subtle)",
                flexShrink: 0,
              }}
            >
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* Info + download */}
        <div className="flex flex-col gap-6 md:pt-4">
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

          <div className="flex flex-col gap-2 items-start mt-2">
            <a
              href={META.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Himank_Garg_Resume.pdf"
              className="inline-flex items-center gap-2.5 w-fit px-6 py-3 rounded-md transition-all duration-200"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--text-on-accent)",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
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
              <Download size={16} />
              Download Resume
            </a>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
              }}
            >
              last updated: July 2026
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
