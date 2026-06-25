import Link from "next/link";
import { proofPoints, siteConfig } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function WorkSection() {
  return (
    <section className="border-y border-surface-border bg-surface-raised/30 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          id="work"
          eyebrow="Proof of work"
          title="Live product, full stack, solo-built"
          description="BestFootballPredictions.co.uk is not a concept — it is a production SaaS with the same architecture patterns I deliver for clients."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <article className="glass-card overflow-hidden">
            <div className="border-b border-surface-border bg-gradient-to-br from-accent/10 to-transparent p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                Founder · Live in production
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {siteConfig.liveProduct.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                {siteConfig.liveProduct.tagline}
              </p>
              <a
                href={siteConfig.liveProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Visit live site
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/case-studies/best-football-predictions"
                className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent"
              >
                Read full case study
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid gap-px bg-surface-border sm:grid-cols-3">
              {[
                { label: "Frontend", value: "Next.js + TypeScript" },
                { label: "Backend", value: "FastAPI + MySQL" },
                { label: "Ops", value: "Linux · Nginx · Cloudflare" },
              ].map((item) => (
                <div key={item.label} className="bg-surface-raised p-5">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">
              What this demonstrates
            </h3>
            <ul className="mt-5 space-y-4">
              {proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 011.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
