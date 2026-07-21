import {
  carePlanTerms,
  carePlans,
  engagementOffers,
  pricingPositioning,
  pricingRates,
  projectPackages,
  slaSeverities,
} from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

type CarePlan = (typeof carePlans)[number];

function CarePlanCard({ plan }: { plan: CarePlan }) {
  return (
    <article
      className={`glass-card flex flex-col p-6 ${
        plan.highlight ? "border-accent/40 ring-1 ring-accent/20" : ""
      }`}
    >
      {plan.highlight ? (
        <span className="mb-4 inline-flex w-fit rounded-full bg-accent-glow px-3 py-1 text-xs font-medium text-accent">
          Recommended after launch
        </span>
      ) : null}

      <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
      <p className="mt-1 text-sm text-slate-400">{plan.audience}</p>
      <p className="mt-4 text-2xl font-semibold text-white">{plan.price}</p>
      <p className="mt-3 text-xs text-slate-500">
        Response target:{" "}
        <span className="text-slate-300">{plan.responseTarget}</span>
      </p>
      <p className="mt-1 text-xs text-slate-500">
        Included:{" "}
        <span className="text-slate-300">{plan.includedHours}</span>
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm leading-relaxed text-slate-400"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${
          plan.highlight
            ? "ft-button-primary bg-accent text-surface hover:bg-accent-muted"
            : "ft-button-secondary border border-surface-border text-white hover:border-slate-500"
        }`}
      >
        Request scope
      </a>
    </article>
  );
}

function ProjectPackageCard({
  pkg,
}: {
  pkg: (typeof projectPackages)[number];
}) {
  return (
    <article
      className={`glass-card flex flex-col p-6 ${
        pkg.highlight ? "border-accent/40 ring-1 ring-accent/20" : ""
      }`}
    >
      {pkg.highlight ? (
        <span className="mb-4 inline-flex w-fit rounded-full bg-accent-glow px-3 py-1 text-xs font-medium text-accent">
          Recommended starting point
        </span>
      ) : null}

      <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{pkg.duration}</p>
      <p className="mt-4 text-2xl font-semibold text-white">{pkg.price}</p>

      {pkg.priceNote ? (
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          {pkg.priceNote}
        </p>
      ) : null}

      <p className="mt-4 text-sm italic leading-relaxed text-slate-400">
        {pkg.bestFor}
      </p>

      <ul className="mt-6 space-y-3">
        {pkg.summaryFeatures.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm leading-relaxed text-slate-400"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <details className="group mt-6 rounded-xl border border-surface-border bg-surface/40">
        <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-slate-200 marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-2">
            Full scope details
            <span className="text-xs text-slate-500 transition group-open:rotate-180">
              ▼
            </span>
          </span>
        </summary>
        <div className="space-y-5 border-t border-surface-border px-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Included
            </p>
            <ul className="mt-3 space-y-2">
              {pkg.included.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-xs leading-relaxed text-slate-400"
                >
                  <span className="text-accent">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Not included
            </p>
            <ul className="mt-3 space-y-2">
              {pkg.notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-xs leading-relaxed text-slate-500"
                >
                  <span>−</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>

      <a
        href="#contact"
        className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${
          pkg.highlight
            ? "ft-button-primary bg-accent text-surface hover:bg-accent-muted"
            : "ft-button-secondary border border-surface-border text-white hover:border-slate-500"
        }`}
      >
        Request scope
      </a>
    </article>
  );
}

export function PricingSection() {
  return (
    <section className="border-t border-surface-border py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          id="pricing"
          eyebrow="How engagement works"
          title="Free fit call. Paid planning. Scoped builds."
          description={pricingPositioning.headline}
        />
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-500">
          {pricingPositioning.subline}
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {engagementOffers.map((offer) => (
            <article key={offer.id} className="glass-card flex flex-col p-6">
              <h3 className="text-lg font-semibold text-white">{offer.label}</h3>
              <p className="mt-3 text-2xl font-semibold text-accent">
                {offer.price}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {offer.summary}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {offer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-slate-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              {offer.excluded ? (
                <p className="mt-5 text-xs leading-relaxed text-slate-500">
                  {offer.excluded}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Optional day rate:{" "}
          <span className="font-medium text-slate-300">
            {pricingRates.dayRate}
          </span>
          . Payment on fixed builds:{" "}
          <span className="font-medium text-slate-300">
            {pricingRates.paymentStructure}
          </span>
          .
        </p>

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Starting package prices
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
            {pricingPositioning.packagesNote}
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {projectPackages.map((pkg) => (
              <ProjectPackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Monthly care"
            title="Production care plans"
            description="Optional post-launch maintenance — monitoring, updates, backups, security fixes, and operational troubleshooting."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {carePlans.map((plan) => (
              <CarePlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Response targets by severity
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Triage and acknowledgement targets — not guaranteed fix times.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-surface-border text-slate-500">
                  <th className="pb-3 pr-4 font-medium">Severity</th>
                  <th className="pb-3 pr-4 font-medium">Example</th>
                  <th className="pb-3 pr-4 font-medium">Basic</th>
                  <th className="pb-3 pr-4 font-medium">Standard</th>
                  <th className="pb-3 font-medium">Priority</th>
                </tr>
              </thead>
              <tbody>
                {slaSeverities.map((row) => (
                  <tr
                    key={row.level}
                    className="border-b border-surface-border/60 text-slate-400"
                  >
                    <td className="py-3 pr-4 font-medium text-slate-200">
                      {row.level}
                    </td>
                    <td className="py-3 pr-4">{row.example}</td>
                    <td className="py-3 pr-4">{row.basic}</td>
                    <td className="py-3 pr-4">{row.standard}</td>
                    <td className="py-3">{row.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 glass-card p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Care plan terms
          </h3>
          <ul className="mt-4 space-y-2">
            {carePlanTerms.map((term) => (
              <li
                key={term}
                className="flex gap-3 text-sm leading-relaxed text-slate-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {term}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
