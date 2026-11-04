import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal>
      <p className="font-mono text-sm uppercase tracking-wider text-accent-text">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-pretty text-muted">{description}</p>
      )}
    </Reveal>
  );
}
