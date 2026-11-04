"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { contactCards } from "@/data/social";
import { sendContactMessage } from "@/lib/contact";

const inputStyles =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/30";

const cardStyles =
  "flex items-center gap-4 rounded-xl border border-border bg-background/60 p-4 transition-colors hover:border-accent hover:bg-accent/5 focus-within:border-accent";

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // Fallback for browsers without the async clipboard API.
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

export default function Contact() {
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");
  // id of the contact card whose value was last copied
  const [copied, setCopied] = useState(null);
  const copiedTimer = useRef(null);

  useEffect(() => () => clearTimeout(copiedTimer.current), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      await sendContactMessage(data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const handleCopy = async (id, value) => {
    try {
      await copyText(value);
      setCopied(id);
      clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  const copiedLabel = contactCards.find(({ id }) => id === copied)?.label;

  return (
    <section id="contact" className=" py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 — CONTACT"
          title="Get In Touch"
          description="Have a question, an opportunity, or just want to say hi? Send me a message and I will get back to you."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <Reveal className="min-w-0">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 dark:shadow-none">
              <h3 className="text-2xl font-bold tracking-tight">
                Let&apos;s connect
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                I&apos;m open to full-time roles, freelance work, and
                interesting collaborations. Pick whichever channel works best
                for you.
              </p>

              <ul className="mt-7 space-y-3">
                {contactCards.map((card) => {
                  const { id, label, value, href, icon: Icon, action } = card;
                  const isChat = action === "chat" && href;

                  return (
                    <li key={id}>
                      <div className={cardStyles}>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-accent">
                          <Icon size={20} aria-hidden="true" />
                        </span>

                        {isChat ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-0 flex-1 text-sm font-medium text-accent-text transition-colors hover:text-accent-text/80 sm:text-base"
                          >
                            {label}
                          </a>
                        ) : (
                          <span className="min-w-0 flex-1">
                            <span className="block font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                              {label}
                            </span>
                            <span className="mt-0.5 block break-words text-sm font-medium sm:text-base">
                              {value}
                            </span>
                          </span>
                        )}

                        {action === "copy" && (
                          <button
                            type="button"
                            onClick={() => handleCopy(id, value)}
                            aria-label={
                              copied === id
                                ? `${label} copied`
                                : `Copy ${label.toLowerCase()}`
                            }
                            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                          >
                            {copied === id ? (
                              <Check size={16} aria-hidden="true" />
                            ) : (
                              <Copy size={16} aria-hidden="true" />
                            )}
                            {copied === id && (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 font-mono text-[10px] font-medium text-background shadow-sm"
                              >
                                Copied!
                              </span>
                            )}
                          </button>
                        )}

                        {isChat && (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 font-mono text-sm font-medium text-accent-text transition-colors hover:text-accent-text/80"
                          >
                            Chat
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <span role="status" aria-live="polite" className="sr-only">
                {copiedLabel ? `${copiedLabel} copied to clipboard` : ""}
              </span>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="min-w-0">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 dark:shadow-none"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is this about?"
                  className={inputStyles}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className={`${inputStyles} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={18} aria-hidden="true" />
                {status === "sending" ? "Opening..." : "Send Message"}
              </button>

              <p
                role="status"
                aria-live="polite"
                className="mt-4 text-sm text-muted"
              >
                {status === "success" &&
                  "Your email app should open with the message ready to send. If nothing happens, please email me directly."}
                {status === "error" &&
                  "Something went wrong. Please email me directly instead."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
