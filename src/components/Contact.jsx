"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { socialLinks } from "@/data/social";
import { sendContactMessage } from "@/lib/contact";

const inputStyles =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/30";

export default function Contact() {
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

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

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// contact"
          title="Get In Touch"
          description="Have a question, an opportunity, or just want to say hi? Send me a message and I will get back to you."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="min-w-0 lg:col-span-2">
            <ul className="space-y-4">
              {socialLinks.map(({ id, label, href, icon: Icon }) => {
                const isExternal = href.startsWith("http");
                const displayText = href
                  .replace("mailto:", "")
                  .replace("https://", "");

                return (
                  <li key={id}>
                    <Link
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-xs text-muted">
                          {label}
                        </span>
                        <span className="block break-all font-medium transition-colors group-hover:text-accent">
                          {displayText}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="min-w-0 lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
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
