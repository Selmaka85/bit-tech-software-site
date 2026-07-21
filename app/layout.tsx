import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { ThemeShell } from "@/components/ThemeEngine";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { homeSeo } from "@/lib/seo-pages";
import "./globals.css";
import "../styles/future-tech.css";
import "../styles/site-themes.css";

const nocturneDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-nocturne-display",
  display: "swap",
});

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
    description: homeSeo.openGraphDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.metaTitle,
    description: homeSeo.openGraphDescription,
  },
  robots: { index: true, follow: true },
};

const themeBootScript = `(function(){try{var k="bit-tech-site-theme";var legacy="bit-tech-future-tech-mode";var t=localStorage.getItem(k);if(t==="noir"||t==="cathedral"){t="nocturne";localStorage.setItem(k,"nocturne");}var allowed=["core","future","executive","clinical","industrial","nocturne"];if(!t||allowed.indexOf(t)<0){t=localStorage.getItem(legacy)==="true"?"future":"core";}document.documentElement.dataset.theme=t;if(t==="future"){document.documentElement.dataset.futureTech="true";}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-theme="core"
      className={nocturneDisplay.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <JsonLd />
        <ThemeShell>{children}</ThemeShell>
      </body>
    </html>
  );
}
