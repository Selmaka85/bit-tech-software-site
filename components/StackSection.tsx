import { stackGroups } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function StackSection() {
  return (
    <section className="border-y border-surface-border bg-surface-raised/30 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          id="stack"
          eyebrow="Default stack"
          title="Technologies I ship with"
          description="Lean, proven tooling — PostgreSQL or MySQL for new SaaS builds, FastAPI + Next.js by default, extended when the project needs it. Not a buzzword list."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <div key={group.label} className="glass-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
