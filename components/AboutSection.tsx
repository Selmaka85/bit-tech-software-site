import { bestFit, workPrinciples } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <SectionHeading
          id="about"
          eyebrow="About"
          title="Built in production, not just in slides"
          description="I work with founders who need a complete product built without hiring a full team, and with existing products that need stabilization, hardening, or reliability improvements."
        />

        <div className="space-y-8">
          <div className="glass-card p-6 sm:p-8">
            <p className="leading-relaxed text-slate-300">
              I am an AI-native SaaS architect and solo builder delivering
              full-stack products from idea to production. My focus is
              reliability, security, and real business outcomes — not just code
              output.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              BEng Software Engineering (Upper Second Class Honours), London
              Metropolitan University. Based in Greater Manchester, building
              production systems with modern stacks and AI-assisted engineering
              workflows.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              How I work
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {workPrinciples.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-surface-border bg-surface-raised/50 p-4"
                >
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Best-fit projects
            </h3>
            <ul className="mt-4 space-y-3">
              {bestFit.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
