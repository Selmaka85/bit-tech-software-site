import { FutureTechHeroConsole } from "@/components/FutureTechHeroConsole";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  const title = "AI-Native SaaS Architect & Builder";

  return (
    <section className="hero-section relative overflow-hidden border-b border-surface-border">
      <div className="absolute inset-0 bg-theme-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent-glow blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full hero-orb-secondary blur-3xl" />

      <div className="section-shell relative py-20 sm:py-28 lg:py-32">
        <div className="hero-main-grid">
          <div className="max-w-3xl">
            <div className="hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-glow px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Solo builder · UK-based · Production-focused
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="ft-glitch-title" data-text={title}>
                {title}
              </span>
            </h1>

            <p className="hero-lead mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              AI automation and custom SaaS development for UK small businesses
              and founders — from scoped MVP builds to production deployment,
              rescue, and post-launch care.
            </p>

            <p className="hero-sub mt-4 text-base leading-relaxed text-slate-400">
              Recently founded and launched{" "}
              <a
                href={siteConfig.liveProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                {siteConfig.liveProduct.name}
              </a>{" "}
              — a live, fully automated platform running in production with auth,
              billing, data pipelines, and cloud deployment.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={siteConfig.liveProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ft-button-primary inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-muted"
              >
                View live product
              </a>
              <a
                href="#contact"
                className="ft-button-secondary inline-flex items-center justify-center rounded-full border border-surface-border bg-surface-raised px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
              >
                Discuss your project
              </a>
            </div>
          </div>

          <FutureTechHeroConsole />
        </div>

        <dl className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Focus", value: "Reliability & business outcomes" },
            { label: "Delivery", value: "End-to-end, solo, accountable" },
            { label: "Clients", value: "UK SMEs, founders & SaaS teams" },
          ].map((item) => (
            <div key={item.label} className="glass-card p-5">
              <dt className="text-xs uppercase tracking-wider text-slate-500">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm font-medium text-slate-200">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
