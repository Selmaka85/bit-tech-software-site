import {
  deliveryPipelineSteps,
  opsFoundations,
  postLaunchCare,
} from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function CareSection() {
  return (
    <section
      id="care"
      className="border-y border-surface-border bg-surface-raised/30 py-20 sm:py-24"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Post-launch"
          title={postLaunchCare.headline}
          description={postLaunchCare.description}
        />

        <p className="mt-6 text-sm font-medium tracking-wide text-accent">
          {postLaunchCare.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
          {deliveryPipelineSteps.map((step, index) => (
            <span key={step} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-full border border-surface-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200">
                {step}
              </span>
              {index < deliveryPipelineSteps.length - 1 ? (
                <span className="text-slate-600" aria-hidden="true">
                  →
                </span>
              ) : null}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Ops foundations in production builds
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
            Every production build is designed to be maintainable — not a black
            box only I can operate. Clear documentation, clean repo, and
            operational hooks from day one.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {opsFoundations.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-surface-border bg-surface/50 px-4 py-3 text-sm leading-relaxed text-slate-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-slate-500">
          {postLaunchCare.supportWindow}
        </p>
      </div>
    </section>
  );
}
