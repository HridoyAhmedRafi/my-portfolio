import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import { aboutContent } from "@/data/about";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { socialLinks } from "@/data/social";

export default function About() {
  const { showPhoto, intro, extra, projectsBuilt } = aboutContent;
  const github = socialLinks.find(({ id }) => id === "github");

  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  const stats = [{ value: projectsBuilt, label: "Projects Built" }];

  return (
    <section id="about" className="border-t border-border py-24">
      <div
        className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 ${
          showPhoto ? "lg:grid-cols-2" : ""
        }`}
      >
        {/* Photo */}
        {showPhoto && (
          <Reveal className="min-w-0">
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border border-border bg-card ring-2 ring-accent ring-offset-4 ring-offset-background sm:w-64 lg:w-72">
              {profile.image ? (
                <Image
                  src={profile.image}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(min-width: 1024px) 288px, (min-width: 640px) 256px, 224px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-6xl font-bold text-accent">
                  {initials}
                </div>
              )}
            </div>
          </Reveal>
        )}

        {/* Content */}
        <div className="min-w-0">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-1 w-14 rounded-full bg-accent"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              {intro.before}
              <strong className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4">
                {intro.highlight}
              </strong>
              {intro.after}
            </p>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">{extra}</p>
          </Reveal>

          {/* Stats */}
          <ul className="mt-8 flex max-w-xl flex-wrap gap-3">
            {stats.map(({ value, label }, index) => (
              <li key={label} className="min-w-0">
                <Reveal delay={0.15 + index * 0.05}>
                  <div className="min-w-[9rem] rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent">
                    <p className="text-3xl font-bold text-accent">{value}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                      {label}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <Reveal delay={0.3}>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
              Technologies
            </h3>
            <ul className="mt-3 flex max-w-xl flex-wrap gap-2">
              {skills.map(({ name }) => (
                <li
                  key={name}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-3">
              {github && (
                <Link
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <FaGithub size={18} aria-hidden="true" />
                  GitHub
                </Link>
              )}
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={18} aria-hidden="true" />
                Contact Me
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}