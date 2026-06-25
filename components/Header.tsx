"use client";

import Link from "next/link";
import { useState } from "react";
import { FutureTechToggle } from "@/components/FutureTech";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-surface/90 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold tracking-tight text-white">
            {siteConfig.brand}
          </span>
          <span className="truncate text-xs text-slate-400 group-hover:text-slate-300">
            SaaS Architect & Builder
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <FutureTechToggle />

          <a
            href="/#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-surface transition hover:bg-accent-muted sm:inline-flex ft-button-primary"
          >
            Get in touch
          </a>

          <button
            type="button"
            className="inline-flex rounded-lg border border-surface-border p-2 text-slate-300 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-surface-border bg-surface-raised/95 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <FutureTechToggle />
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-surface"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
