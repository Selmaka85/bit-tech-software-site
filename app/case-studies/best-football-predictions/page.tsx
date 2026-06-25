import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/SeoPageLayout";
import { caseStudyPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: caseStudyPage.metaTitle,
  description: caseStudyPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}${caseStudyPage.path}` },
  openGraph: {
    title: caseStudyPage.metaTitle,
    description: caseStudyPage.metaDescription,
    url: `${siteConfig.url}${caseStudyPage.path}`,
    siteName: siteConfig.brand,
    locale: "en_GB",
    type: "article",
  },
};

export default function CaseStudyPage() {
  return (
    <SeoPageLayout page={caseStudyPage}>
      <div className="mt-8 glass-card p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-white">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudyPage.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <a
          href={caseStudyPage.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          Visit {caseStudyPage.liveName} →
        </a>
      </div>
      <p className="mt-6 text-sm text-slate-500">
        <Link href="/#work" className="text-accent hover:underline">
          Back to proof of work on homepage
        </Link>
      </p>
    </SeoPageLayout>
  );
}
