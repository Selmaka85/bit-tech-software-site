import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site-data";
import type { SeoContentPage } from "@/lib/seo-pages";

type SeoPageLayoutProps = {
  page: SeoContentPage | {
    eyebrow: string;
    h1: string;
    intro: string;
    sections: readonly { title: string; paragraphs: readonly string[] }[];
    bullets?: readonly string[];
    ctaLabel: string;
  };
  children?: ReactNode;
};

export function SeoPageLayout({ page, children }: SeoPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="section-shell py-16 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {page.eyebrow}
        </p>
        <h1 className="future-heading-glow mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {page.h1}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          {page.intro}
        </p>

        <div className="mt-12 space-y-8">
          {page.sections.map((section) => (
            <section key={section.title} className="glass-card p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {page.bullets?.length ? (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.bullets.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-surface-border bg-surface/50 px-4 py-3 text-sm text-slate-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {children}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/#contact"
            className="ft-button-primary inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-muted"
          >
            {page.ctaLabel}
          </Link>
          <Link
            href="/#pricing"
            className="ft-button-secondary inline-flex items-center justify-center rounded-full border border-surface-border px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
          >
            View pricing
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Questions? Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
