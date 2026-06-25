import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/SeoPageLayout";
import { locationPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: locationPage.metaTitle,
  description: locationPage.metaDescription,
  alternates: { canonical: `${siteConfig.url}${locationPage.path}` },
  openGraph: {
    title: locationPage.metaTitle,
    description: locationPage.metaDescription,
    url: `${siteConfig.url}${locationPage.path}`,
    siteName: siteConfig.brand,
    locale: "en_GB",
    type: "website",
  },
};

export default function UkLocationPage() {
  return (
    <SeoPageLayout page={locationPage}>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {locationPage.areas.map((area) => (
          <li
            key={area}
            className="flex gap-3 rounded-xl border border-surface-border bg-surface/50 px-4 py-3 text-sm text-slate-300"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {area}
          </li>
        ))}
      </ul>
    </SeoPageLayout>
  );
}
