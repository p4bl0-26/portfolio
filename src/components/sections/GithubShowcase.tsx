"use client";

import { useGithubRepos } from "@/hooks/useGithubRepos";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { META } from "@/constants/meta";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, AlertCircle } from "lucide-react";

const LANG_COLORS: Record<string, string> = {
  Dart: "#00B4AB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  "C++": "#F34B7D",
  Kotlin: "#7F52FF",
  Swift: "#F05138",
  HTML: "#E34C26",
  CSS: "#563D7C",
};

export function GithubShowcase() {
  const { repos, loading, error } = useGithubRepos();

  return (
    <SectionWrapper id="github" index="06">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
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
            GitHub
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
            Open source.
          </h2>
        </div>
        <a
          href={`https://github.com/${META.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 link-underline shrink-0"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--text-muted)",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--text-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          @{META.githubUsername} <ExternalLink size={11} />
        </a>
      </div>

      {/* Contribution graph */}
      <div
        className="mb-10 overflow-hidden rounded-md"
        style={{ border: "1px solid var(--border)" }}
      >
        <img
          src={`https://ghchart.rshah.org/${META.githubUsername}`}
          alt={`${META.name}'s GitHub contribution graph`}
          className="w-full"
          style={{ filter: "invert(1) hue-rotate(180deg)", opacity: 0.7 }}
          loading="lazy"
        />
      </div>

      {/* Repos */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-md animate-pulse"
              style={{ backgroundColor: "var(--bg-card)" }}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {error && !loading && (
        <div
          className="flex items-start gap-3 p-4 rounded-md"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
          role="alert"
        >
          <AlertCircle
            size={16}
            style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: 2 }}
          />
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--text-secondary)",
                marginBottom: "0.25rem",
              }}
            >
              {error}
            </p>
            <a
              href={`https://github.com/${META.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              View on GitHub instead
            </a>
          </div>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.slice(0, 8).map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 28,
                delay: i * 0.04,
              }}
              className="block p-4 rounded-md transition-colors duration-150"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.backgroundColor =
                  "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.backgroundColor = "var(--bg-card)";
              }}
              aria-label={`${repo.name} — ${repo.description ?? "No description"}`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {repo.name}
                  </h3>
                  {repo.owner.login !== META.githubUsername && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--accent)",
                        border: "1px solid var(--accent)",
                        padding: "1px 6px",
                        borderRadius: "3px",
                        opacity: 0.8,
                      }}
                    >
                      Collab
                    </span>
                  )}
                </div>
                <ExternalLink
                  size={12}
                  style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: 2 }}
                />
              </div>

              {repo.description && (
                <p
                  className="mb-3 line-clamp-2"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {repo.description}
                </p>
              )}

              <div className="flex items-center gap-4">
                {repo.language && (
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          LANG_COLORS[repo.language] ?? "#888",
                      }}
                      aria-hidden="true"
                    />
                    {repo.language}
                  </span>
                )}
                <span
                  className="flex items-center gap-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                  }}
                >
                  <Star size={10} />
                  {repo.stargazers_count}
                </span>
                <span
                  className="flex items-center gap-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                  }}
                >
                  <GitFork size={10} />
                  {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
