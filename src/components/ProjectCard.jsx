import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, LayoutTemplate } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { slug, title, description, image, github, liveDemo } = project;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      {/* Project image */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of the ${title} project`}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
            <LayoutTemplate size={32} aria-hidden="true" className="text-accent" />
            <span className="text-sm">Screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{description}</p>

        {/* Buttons */}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View Details
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <FaGithub size={16} aria-hidden="true" />
            GitHub
          </Link>
          <Link
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  );
}