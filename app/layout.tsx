import type { Metadata } from "next";
import { FutureTechShell } from "@/components/FutureTechShell";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { homeSeo } from "@/lib/seo-pages";
import "./globals.css";
import "../styles/future-tech.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeSeo.metaTitle,
    template: `%s | ${siteConfig.brand}`,
  },
  description: homeSeo.metaDescription,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: homeSeo.metaTitle,
    description: homeSeo.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.metaTitle,
    description: homeSeo.metaDescription,
  },
  robots: { index: true, follow: true },
};

const futureTechBootScript = `(function(){try{var o=localStorage.getItem("bit-tech-future-tech-mode");if(o==="true"){document.documentElement.dataset.futureTech="true";}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: futureTechBootScript }} />
        <JsonLd />
      </head>
      <body>
        <FutureTechShell>{children}</FutureTechShell>
      </body>
    </html>
  );
}
