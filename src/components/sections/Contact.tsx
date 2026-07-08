"use client";

import { useState, useEffect } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SOCIALS } from "@/constants/socials";
import { Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
  _gotcha: string; // Honeypot field
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    _gotcha: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [canSubmit, setCanSubmit] = useState(false);

  // 3-second delay spam protection
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanSubmit(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Please write at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return; // Prevent submission before 3 seconds
    if (!validate()) return;

    setStatus("sending");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mqevoyeq";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", _gotcha: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const fieldStyle = {
    base: {
      width: "100%",
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: "6px",
      padding: "12px 14px",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.15s",
    } as React.CSSProperties,
    error: {
      borderColor: "rgba(239, 68, 68, 0.5)",
    } as React.CSSProperties,
  };

  return (
    <SectionWrapper id="contact" index="08">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — info */}
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
            Contact
          </p>
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Let&apos;s work together.
          </h2>
          <p
            className="mb-8"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              fontSize: "0.95rem",
              maxWidth: "380px",
            }}
          >
            I&apos;m open to internship opportunities, freelance Flutter work,
            and interesting side projects. If you have something worth
            building, let&apos;s talk.
          </p>

          {/* Direct links */}
          <div className="flex flex-col gap-3">
            {SOCIALS.filter((s) =>
              ["Email", "GitHub", "LinkedIn"].includes(s.label)
            ).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 link-underline"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <span
                  style={{
                    color: "var(--text-muted)",
                    width: "72px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontSize: "10px",
                  }}
                >
                  {s.label}
                </span>
                {s.handle}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {status === "success" ? (
            <div
              className="h-full flex flex-col items-start justify-center gap-3 py-12"
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                }}
              >
                ✓ Sent
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                }}
              >
                Message sent — I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
              aria-label="Contact form"
            >
              {/* Honeypot Spam Protection */}
              <input
                type="text"
                name="_gotcha"
                value={form._gotcha}
                onChange={(e) => setForm(f => ({ ...f, _gotcha: e.target.value }))}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Your name"
                  style={{
                    ...fieldStyle.base,
                    ...(errors.name ? fieldStyle.error : {}),
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.name
                      ? "rgba(239, 68, 68, 0.5)"
                      : "var(--border)";
                  }}
                  disabled={status === "sending"}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span
                    id="name-error"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "rgb(239, 68, 68)",
                    }}
                    role="alert"
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="you@example.com"
                  style={{
                    ...fieldStyle.base,
                    ...(errors.email ? fieldStyle.error : {}),
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.email
                      ? "rgba(239, 68, 68, 0.5)"
                      : "var(--border)";
                  }}
                  disabled={status === "sending"}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span
                    id="email-error"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "rgb(239, 68, 68)",
                    }}
                    role="alert"
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="What are you working on?"
                  rows={5}
                  style={{
                    ...fieldStyle.base,
                    resize: "vertical",
                    ...(errors.message ? fieldStyle.error : {}),
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.message
                      ? "rgba(239, 68, 68, 0.5)"
                      : "var(--border)";
                  }}
                  disabled={status === "sending"}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <span
                    id="message-error"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "rgb(239, 68, 68)",
                    }}
                    role="alert"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              {status === "error" && (
                <span
                  style={{
                    fontSize: "13px",
                    color: "rgb(239, 68, 68)",
                  }}
                  role="alert"
                >
                  Something went wrong — email me directly at{" "}
                  <a href="mailto:himankgarg2604@gmail.com" className="underline">
                    himankgarg2604@gmail.com
                  </a>
                </span>
              )}

              <button
                type="submit"
                disabled={!canSubmit || status === "sending"}
                className="inline-flex items-center justify-center rounded-md transition-all duration-200 mt-2 focus-visible:outline-none"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--text-on-accent)",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "14px 32px",
                  border: "none",
                  cursor: (!canSubmit || status === "sending") ? "not-allowed" : "pointer",
                  opacity: (!canSubmit || status === "sending") ? 0.7 : 1,
                  gap: "8px",
                  outlineOffset: "2px",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid var(--accent)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                }}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
