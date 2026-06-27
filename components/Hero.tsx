import { FutureTechHeroConsole } from "@/components/FutureTech";
import { heroCta, siteConfig } from "@/lib/site-data";

export function Hero() {
  const title = siteConfig.title;

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
              {siteConfig.heroEyebrow}
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="ft-glitch-title" data-text={title}>
                {title}
              </span>
            </h1>

            <p className="hero-lead mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              {siteConfig.pitch}
            </p>

            <p className="hero-sub mt-4 text-base leading-relaxed text-slate-400">
              Founder of{" "}
              <a
                href={siteConfig.liveProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                {siteConfig.liveProduct.name}
              </a>{" "}
              — a fully automated AI SaaS live in production. XGBoost ML
              pipelines, Stripe billing, Hetzner infrastructure, Cloudflare CDN.
              Same architecture I deliver for clients.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={heroCta.primary.href}
                className="ft-button-primary inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-muted"
              >
                {heroCta.primary.label}
              </a>
              <a
                href={heroCta.secondary.href}
                className="ft-button-secondary inline-flex items-center justify-center rounded-full border border-surface-border bg-surface-raised px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
              >
                {heroCta.secondary.label}
              </a>
              <a
                href={heroCta.tertiary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-2 py-3 text-sm font-medium text-slate-400 transition hover:text-accent"
              >
                {heroCta.tertiary.label}
              </a>
            </div>
          </div>

          <FutureTechHeroConsole />
        </div>

        <dl className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Focus", value: "Reliability & business outcomes" },
            { label: "Delivery", value: "End-to-end, solo, accountable" },
            { label: "Clients", value: "Founders and SaaS teams" },
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
