import { pricingRates, siteConfig } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

const freeCallMailto = `mailto:${siteConfig.email}?subject=Free%2020-Minute%20Call&body=Hi%20Teodor%2C%0A%0AI%27d%20like%20to%20book%20a%20free%2020-minute%20initial%20consultation.%0A%0AProject%20summary%3A%0AGoals%3A%0ABudget%20ballpark%3A%0ATimeline%3A%0A%0A`;

const consultMailto = `mailto:${siteConfig.email}?subject=Technical%20Consultation%20%E2%80%94%20%C2%A350%2Fh&body=Hi%20Teodor%2C%0A%0AI%27d%20like%20to%20book%20a%20paid%20technical%20consultation%20(%C2%A350%2Fhour).%0A%0ATopic%20%2F%20project%3A%0APreferred%20duration%20(1h%2B)%3A%0A%0A`;

export function ContactSection() {
  return (
    <section className="border-t border-surface-border bg-surface-raised/30 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            id="contact"
            eyebrow="Contact"
            title="Book a free 20-minute call — or paid technical consultation"
            description="Free call = fit and next steps. Technical consultation (£50/hour) = architecture, requirements and planning. Development is £40/hour or fixed price after scope."
          />

          <div className="glass-card p-6 sm:p-8">
            <div
              id="contact-consult"
              className="mb-8 space-y-3 rounded-xl border border-surface-border bg-surface/40 p-4 text-sm text-slate-400"
            >
              <p>
                <span className="font-medium text-slate-200">
                  {pricingRates.freeCallLabel}:
                </span>{" "}
                {pricingRates.freeCall}
              </p>
              <p>
                <span className="font-medium text-slate-200">
                  {pricingRates.consultationLabel}:
                </span>{" "}
                {pricingRates.consultation}
              </p>
              <p>
                <span className="font-medium text-slate-200">
                  {pricingRates.hourlyLabel}:
                </span>{" "}
                {pricingRates.hourly}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={freeCallMailto}
                className="ft-button-primary inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-muted"
              >
                Book a Free 20-Minute Call
              </a>
              <a
                href={consultMailto}
                className="ft-button-secondary inline-flex items-center justify-center rounded-full border border-surface-border px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
              >
                Book a Technical Consultation
              </a>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              The free call does not include a detailed technical audit,
              architecture design or written project specification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
