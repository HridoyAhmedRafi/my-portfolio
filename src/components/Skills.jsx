import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills, tools } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className=" py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// skills"
          title="My Skills"
          description="Technologies I have learned and use to build web applications."
        />

        {/* Skills grid */}
        <ul className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {skills.map(({ name, icon: Icon, color }, index) => (
            <li key={name} className="min-w-0">
              <Reveal delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col items-center justify-center gap-2.5 rounded-xl border border-border bg-card px-2 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                  <Icon size={28} aria-hidden="true" className={color} />
                  <span className="text-sm font-semibold">{name}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Tools */}
        <Reveal className="mt-14">
          <h3 className="text-2xl font-bold tracking-tight">Tools</h3>
        </Reveal>

        <ul className="mt-6 flex flex-wrap gap-3">
          {tools.map(({ name, icon: Icon, color }, index) => (
            <li key={name}>
              <Reveal delay={index * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                  <Icon
                    size={22}
                    aria-hidden="true"
                    className={`shrink-0 ${color}`}
                  />
                  <span className="text-sm font-semibold">{name}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
