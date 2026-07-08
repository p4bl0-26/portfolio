"use client";

import { META } from "@/constants/meta";
import { SOCIALS } from "@/constants/socials";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="page-container"
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col gap-1">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Himank Garg
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            {META.buildVersion} · Next.js · {META.location} · {META.buildMonth}
          </span>
        </div>

        {/* Center — social links */}
        <nav
          className="flex items-center gap-6"
          aria-label="Footer social links"
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              className="link-underline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
              }}
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--text-muted)",
          }}
        >
          © {year} Himank Garg
        </span>
      </div>
    </footer>
  );
}
