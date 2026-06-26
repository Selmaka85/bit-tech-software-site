import Link from "next/link";
import { footerSeoLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-raised/50">
      <div className="section-shell py-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-slate-400">{siteConfig.brand}</p>
            <p className="mt-1 text-sm text-slate-500">{siteConfig.location}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {footerSeoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-400">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-accent"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="transition hover:text-accent"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
            >
              LinkedIn
            </a>
            <Link href="/#contact" className="transition hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-border/60">
        <div className="section-shell py-4 text-center text-xs text-slate-500">
          © {year} {siteConfig.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
