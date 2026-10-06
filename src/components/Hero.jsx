"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  const codeSnippet = `const developer = {
  name: "${profile.name}",
  role: "${profile.title}",
  stack: ["React", "Next.js", "Tailwind CSS"],
  learning: ["Backend", "Databases"],
};`;

  return (
    <section id="home" className="flex min-h-screen items-center pt-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
        {/* Text side */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 min-w-0 lg:order-1"
        >
          <motion.p variants={item} className="font-mono text-sm text-accent">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-medium text-muted sm:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl leading-relaxed text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-lg border border-border bg-card px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex gap-3">
            {socialLinks.map(({ id, label, href, icon: Icon }) => {
              const isExternal = href.startsWith("http");
              return (
                <li key={id}>
                  <Link
                    href={href}
                    aria-label={label}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 mx-auto w-full min-w-0 max-w-sm lg:order-2 lg:max-w-md"
        >
          {/* Circle profile picture */}
          <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border border-border bg-card ring-2 ring-accent ring-offset-4 ring-offset-background sm:w-64 lg:w-72">
            {profile.image ? (
              <Image
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 288px, (min-width: 640px) 256px, 224px"
                className="object-cover"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center text-6xl font-bold text-accent"
                aria-label={`${profile.name} avatar`}
              >
                {initials}
              </div>
            )}
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card p-4">
            <pre className="font-mono text-xs leading-relaxed text-muted sm:text-sm">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
