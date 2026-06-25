import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageLayout } from "@/components/SeoPageLayout";
import { getServicePage, servicePages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${siteConfig.url}${page.path}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteConfig.url}${page.path}`,
      siteName: siteConfig.brand,
      locale: "en_GB",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    notFound();
  }

  return <SeoPageLayout page={page} />;
}
