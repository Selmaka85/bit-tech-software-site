import { deliverables } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          id="services"
          eyebrow="Services"
          title="What I deliver"
          description="Production-ready SaaS engineering — from greenfield builds to rescue and hardening of live systems."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <article
              key={item.title}
              className="glass-card p-6 transition hover:border-slate-600"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
