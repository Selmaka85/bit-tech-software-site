import { siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-raised/50">
      <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-400">{siteConfig.brand}</p>
          <p className="mt-1 text-sm text-slate-500">{siteConfig.location}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-400 sm:items-end">
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
        </div>
      </div>

      <div className="border-t border-surface-border/60">
        <div className="section-shell py-4 text-center text-xs text-slate-500">
          © {year} {siteConfig.brand}. BEng Software Engineering (2:1), London
          Metropolitan University.
        </div>
      </div>
    </footer>
  );
}
