import { siteConfig } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section className="border-t border-surface-border bg-surface-raised/30 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            id="contact"
            eyebrow="Contact"
            title="Tell me what you need built or fixed"
            description="Whether you are launching an MVP, hardening a live product, or need a technical audit before committing budget — send a short brief and I will reply with next steps."
          />

          <div className="glass-card p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}?subject=Project%20enquiry`}
                  className="mt-2 block text-lg font-medium text-white transition hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-lg font-medium text-white transition hover:text-accent"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  LinkedIn
                </p>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg font-medium text-white transition hover:text-accent"
                >
                  /in/teodor-catalin-bitica
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Location
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <a
              href={`mailto:${siteConfig.email}?subject=Project%20enquiry&body=Hi%20Teodor%2C%0A%0AProject%20summary%3A%0ABudget%20range%3A%0ATimeline%3A%0A%0A`}
              className="ft-button-primary mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-muted sm:w-auto"
            >
              Send project brief
            </a>

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Scope changes are handled transparently with change requests. No
              obligation from an initial conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
