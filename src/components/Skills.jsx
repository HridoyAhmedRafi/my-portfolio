import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// skills"
          title="My Skills"
          description="Technologies and tools I have learned and used in my projects."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillCategories.map(({ title, skills }, index) => (
            <Reveal key={title} delay={index * 0.1} className="min-w-0">
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent">
                <h3 className="text-lg font-semibold">{title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {skills.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 text-accent"
                      />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
