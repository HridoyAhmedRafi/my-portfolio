import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  LayoutTemplate,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { projects, getProjectBySlug } from "@/data/projects";

// Build all project pages in advance
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

// Page title and description for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Hridoy Ahmed Rafi`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const {
    title,
    description,
    detailsDescription,
    image,
    features,
    technologies,
    challenges = [],
    learned = [],
    improvements = [],
    github,
    liveDemo,
  } = project;

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-28">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to projects
      </Link>

      {/* Header */}
      <header className="mt-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {detailsDescription ?? description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            <ExternalLink size={18} aria-hidden="true" />
            Live Demo
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <FaGithub size={18} aria-hidden="true" />
            GitHub
          </Link>
        </div>
      </header>

      {/* Large project image with a smooth zoom on hover */}
      <Reveal className="mt-10">
        <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
          {image ? (
            <Image
              src={image}
              alt={`Screenshot of the ${title} project`}
              fill
              priority
              quality={95}
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
              <LayoutTemplate size={40} aria-hidden="true" className="text-accent" />
              <span>Screenshot coming soon</span>
            </div>
          )}
        </div>
      </Reveal>

      <div className="mt-14 space-y-14">
        {/* Features */}
        <Reveal>
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-2xl font-bold">
              Features
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-muted">
                  <CheckCircle2
                    size={18}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Tech stack */}
        <Reveal>
          <section aria-labelledby="tech-heading">
            <h2 id="tech-heading" className="text-2xl font-bold">
              Tech Stack
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Challenges (hidden until you add them in projects.js) */}
        {challenges.length > 0 && (
          <Reveal>
            <section aria-labelledby="challenges-heading">
              <h2 id="challenges-heading" className="text-2xl font-bold">
                Challenges
              </h2>
              <ul className="mt-5 space-y-3">
                {challenges.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <Wrench
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* What I learned */}
        {learned.length > 0 && (
          <Reveal>
            <section aria-labelledby="learned-heading">
              <h2 id="learned-heading" className="text-2xl font-bold">
                What I Learned
              </h2>
              <ul className="mt-5 space-y-3">
                {learned.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Future plans (hidden until you add them in projects.js) */}
        {improvements.length > 0 && (
          <Reveal>
            <section aria-labelledby="improvements-heading">
              <h2 id="improvements-heading" className="text-2xl font-bold">
                Future Plans
              </h2>
              <ul className="mt-5 space-y-3">
                {improvements.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <Lightbulb
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}
      </div>
    </article>
  );
}