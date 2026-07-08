"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SOCIALS } from "@/constants/socials";
import { Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Please write at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: Wire to Formspree or Resend for actual email delivery
    // For now, opens mailto: with form data pre-filled
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:himankgarg2604@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
          {submitted ? (
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
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Your email client should open.
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                If it didn&apos;t, reach out directly at the links on the left.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  padding: 0,
                  marginTop: "0.5rem",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
              aria-label="Contact form"
            >
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

              <button
                type="submit"
                className="flex items-center gap-2.5 w-fit px-5 py-2.5 rounded-md transition-all duration-200"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--text-on-accent)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.88";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
