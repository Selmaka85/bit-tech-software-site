import { everyBuildIncludes, notIncludedByDefault } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function ScopeSection() {
  return (
    <section id="scope" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Scope clarity"
          title="What you buy — and what stops at the boundary"
          description="You are not buying a vague website. You are buying architecture, implementation, deployment, security basics, operational stability, and optional post-launch care — with limits written upfront."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Every build includes
            </h3>
            <ul className="mt-6 space-y-3">
              {everyBuildIncludes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-slate-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Not included by default
            </h3>
            <ul className="mt-6 space-y-3">
              {notIncludedByDefault.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
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
