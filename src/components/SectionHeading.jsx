import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal>
      <p className="font-mono text-sm text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted">{description}</p>
      )}
    </Reveal>
  );
}
