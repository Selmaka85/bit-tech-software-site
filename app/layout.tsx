import type { Metadata } from "next";
import { FutureTechShell } from "@/components/FutureTechShell";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";
import "../styles/future-tech.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
      </head>
      <body>
        <FutureTechShell>{children}</FutureTechShell>
      </body>
    </html>
  );
}
