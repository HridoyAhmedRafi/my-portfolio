import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { aboutContent } from "@/data/about";

export default function About() {
  const { paragraphs, learned, currentFocus, upNext } = aboutContent;

  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// about" title="About Me" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="min-w-0 space-y-5 leading-relaxed text-muted lg:col-span-3">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </Reveal>

          <div className="min-w-0 space-y-6 lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold">What I&apos;ve learned</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {learned.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold">Where I am now</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-xs text-accent">
                      Current focus
                    </dt>
                    <dd className="mt-1 text-muted">{currentFocus}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-accent">Up next</dt>
                    <dd className="mt-1 text-muted">{upNext}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
