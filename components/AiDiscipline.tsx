const steps = [
  {
    id: "01",
    title: "Context mapping",
    body:
      "Before any code runs, I map the system: dependencies, data flow, " +
      "failure points, scope boundaries. AI generates nothing until the architecture is clear.",
  },
  {
    id: "02",
    title: "Architecture decisions",
    body:
      "AI generates options. I decide what goes in — and what doesn't. " +
      "Stack choice, data model, API contracts: engineering decisions, not autocomplete.",
  },
  {
    id: "03",
    title: "Small, reversible changes",
    body:
      "No 500-line AI dumps committed blindly. Incremental, verified steps — " +
      "each one checked before the next. If something breaks, I know exactly where.",
  },
  {
    id: "04",
    title: "Manual debugging",
    body:
      "AI can't read your logs, your production environment, or your edge cases. I can. " +
      "Every issue gets diagnosed and fixed — not patched over with another prompt.",
  },
  {
    id: "05",
    title: "Smoke testing + deployment",
    body:
      "Deployment is not the finish line. Smoke tests, health checks, and a " +
      "stabilization window before handover. If it breaks post-deploy, I fix it.",
  },
  {
    id: "06",
    title: "Handover + documentation",
    body:
      "Every delivery includes architecture notes, environment config, and a README. " +
      "You own what was built — no black box, no dependency on me to explain it.",
  },
] as const;

export function AiDiscipline() {
  return (
    <section
      id="process"
      className="border-y border-surface-border bg-surface-raised/30 py-20 sm:py-24"
    >
      <div className="section-shell">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Engineering process
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            AI-Assisted.{" "}
            <span className="text-slate-400">Not AI-Abandoned.</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-400">
            AI can generate code fast. Production software still needs architecture,
            debugging, verification, deployment discipline and maintenance.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            My workflow uses AI agents inside a structured engineering process —
            not as a replacement for it. Faster delivery, without treating your
            business software as an experiment.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="glass-card flex flex-col gap-3 p-6">
              <span className="font-mono text-xs font-bold text-accent">
                {step.id}
              </span>
              <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="glass-card mt-12 border-l-2 border-accent p-6">
          <p className="text-sm leading-relaxed text-slate-300">
            <span className="font-semibold text-white">
              The difference between fast and reckless:
            </span>{" "}
            structured agentic engineering means AI works inside a process that
            has checkpoints, reversibility, and a human accountable for the outcome.
            Not a prompt and a prayer.
          </p>
        </div>
      </div>
    </section>
  );
}
