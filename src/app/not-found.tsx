import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-start justify-center page-container"
      style={{ paddingTop: "7rem", paddingBottom: "5rem" }}
    >
      <p
        className="mb-4"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--text-muted)",
        }}
      >
        404
      </p>
      <h1
        className="mb-4"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
        }}
      >
        Nothing here.
      </h1>
      <p
        className="mb-10"
        style={{
          fontSize: "0.95rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          maxWidth: "400px",
        }}
      >
        You&apos;ve found the one page I didn&apos;t build. Impressive.
      </p>
      <Link
        href="/"
        className="link-underline"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--accent)",
          textDecoration: "none",
        }}
      >
        ← Back home
      </Link>
    </main>
  );
}
