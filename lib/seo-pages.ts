import { siteConfig } from "./site-data";

export type SeoContentPage = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: readonly { title: string; paragraphs: readonly string[] }[];
  bullets?: readonly string[];
  ctaLabel: string;
};

export const homeSeo = {
  metaTitle: "AI-Assisted SaaS & MVP Developer UK | Bit-Tech Software",
  metaDescription:
    "AI-assisted SaaS development for UK founders, startups and SMEs. Custom SaaS builds, MVPs and AI automations — scoped, production-ready delivery.",
  openGraphDescription:
    "Custom SaaS, MVPs and AI automations for UK founders and startups — structured agentic engineering workflows, solo delivery from Greater Manchester.",
} as const;

export const servicePages: readonly SeoContentPage[] = [
  {
    slug: "ai-automation-for-small-business",
    path: "/services/ai-automation-for-small-business",
    metaTitle: "AI Automation for Small Businesses UK | Bit-Tech Software",
    metaDescription:
      "Custom AI workflow automation for UK SMEs — replace repetitive admin, connect tools, and build lean internal systems. Solo FastAPI + Next.js delivery with clear scope.",
    eyebrow: "Service",
    h1: "AI automation for UK small businesses",
    intro:
      "If your team still runs on spreadsheets, manual copy-paste, and inbox chaos, you do not need a giant agency — you need a focused automation build. I design and ship lean AI-assisted workflows for UK SMEs and founders.",
    sections: [
      {
        title: "What I automate",
        paragraphs: [
          "Admin tasks, data sync between tools, reporting dashboards, onboarding flows, and internal ops that eat hours every week.",
          "Delivery is scoped: one painful workflow at a time, production-ready, documented, and maintainable.",
        ],
      },
      {
        title: "Who this is for",
        paragraphs: [
          "UK small businesses, professional services, recruitment agencies, logistics operators, and founders who outgrew Excel but are not ready for enterprise software.",
        ],
      },
    ],
    bullets: [
      "Workflow mapping and scope-first planning",
      "FastAPI backends with reliable integrations",
      "Admin dashboards and operational visibility",
      "Optional monthly care after launch",
    ],
    ctaLabel: "Book an automation audit",
  },
  {
    slug: "custom-saas-development",
    path: "/services/custom-saas-development",
    metaTitle: "Custom SaaS Development UK | Solo SaaS Builder",
    metaDescription:
      "Custom SaaS development for UK founders — Next.js, FastAPI, PostgreSQL/MySQL, Stripe, deployment and security basics. Production-focused solo builder, not a full agency.",
    eyebrow: "Service",
    h1: "Custom SaaS development for UK founders",
    intro:
      "I build production-ready SaaS products solo — auth, billing, admin, APIs, deployment, and operational foundations — on a proven stack so your product stays maintainable after launch.",
    sections: [
      {
        title: "What you get",
        paragraphs: [
          "End-to-end delivery: architecture, frontend, backend, database, payments when needed, and handover documentation.",
          "Scoped packages from MVP sprint to full production build — with clear included/not included boundaries.",
        ],
      },
      {
        title: "Stack",
        paragraphs: [
          "Next.js, React, TypeScript, Tailwind, FastAPI, Python, PostgreSQL or MySQL, Stripe, Cloudflare, Vercel or Hetzner — chosen for lean SaaS, not buzzword bingo.",
        ],
      },
    ],
    bullets: [
      "Role-based access when required",
      "Stripe subscriptions and webhooks",
      "Background jobs and pipelines",
      "Security hardening and runbook handover",
    ],
    ctaLabel: "Discuss your SaaS build",
  },
  {
    slug: "mvp-development",
    path: "/services/mvp-development",
    metaTitle: "SaaS MVP Developer UK | Lean MVP Builds",
    metaDescription:
      "Lean SaaS MVP development for UK startups — scoped 3–6 core features, auth, payments basics, deployment and smoke tests. From £3,500 with clear scope.",
    eyebrow: "Service",
    h1: "SaaS MVP developer for UK startups",
    intro:
      "An MVP is not everything you dream of — it is the smallest product real users can test. I ship focused MVPs for UK founders who need to validate fast without hiring a full team.",
    sections: [
      {
        title: "Scoped MVP delivery",
        paragraphs: [
          "3–6 core features defined before build starts. Auth, database, basic payments if needed, minimal admin, deployment, and one review round.",
          "Fixed-scope sprints reduce waste and keep solo delivery profitable for both sides.",
        ],
      },
      {
        title: "After launch",
        paragraphs: [
          "Optional stabilization and monthly care plans keep the product healthy while you learn from real users.",
        ],
      },
    ],
    bullets: [
      "Next.js + FastAPI foundation",
      "PostgreSQL or MySQL",
      "Stripe checkout or simple subscriptions",
      "Production deployment on Vercel or Hetzner",
    ],
    ctaLabel: "Request MVP scope",
  },
  {
    slug: "saas-rescue-stabilisation",
    path: "/services/saas-rescue-stabilisation",
    metaTitle: "SaaS Rescue & Stabilisation UK | Fix Broken Apps",
    metaDescription:
      "SaaS rescue and stabilisation for UK teams — production debugging, performance fixes, security quick wins, routing and API issues. Live ops experience from running my own SaaS.",
    eyebrow: "Service",
    h1: "SaaS rescue and stabilisation for UK teams",
    intro:
      "When a live app breaks — payments fail, routes 404, jobs stop, logs explode — you need a production operator, not another feature sprint. I diagnose and fix defined problems on existing SaaS products.",
    sections: [
      {
        title: "Typical rescue work",
        paragraphs: [
          "Log and routing forensics, API payload mismatches, database bottlenecks, deployment failures, scheduler health, and third-party integration failures.",
          "Read-only access preferred for initial audit where possible.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "A clear report of what was fixed, what risk remains, and what to do next — not an open-ended rewrite disguised as a quick fix.",
        ],
      },
    ],
    bullets: [
      "Incident diagnosis and targeted fixes",
      "Performance and security quick wins",
      "Backup and deploy sanity checks",
      "Verification pass after changes",
    ],
    ctaLabel: "Get a rescue assessment",
  },
  {
    slug: "saas-maintenance-care",
    path: "/services/saas-maintenance-care",
    metaTitle: "SaaS Maintenance & Monitoring UK | Monthly Care Plans",
    metaDescription:
      "Monthly SaaS maintenance for UK small businesses — uptime checks, dependency updates, backup verification, security reviews and limited support hours. From £350/month.",
    eyebrow: "Service",
    h1: "SaaS maintenance and monitoring for UK products",
    intro:
      "Launch is not the finish line. Small SaaS products need monitoring, updates, backup checks, and someone who can triage incidents. I offer optional monthly care plans with clear SLA response targets.",
    sections: [
      {
        title: "Care plan tiers",
        paragraphs: [
          "Basic, Standard, and Priority plans with included support hours, dependency updates, and logs review — priced below typical UK managed-app support for standardized stacks.",
        ],
      },
      {
        title: "What care is not",
        paragraphs: [
          "Unlimited features, 24/7 on-call, or major rebuilds. Extra work is quoted or billed at the agreed hourly rate.",
        ],
      },
    ],
    bullets: [
      "Uptime and backup verification",
      "Security and dependency updates",
      "Incident triage (response targets, not fix guarantees)",
      "Small fixes within included hours",
    ],
    ctaLabel: "Discuss a care plan",
  },
  {
    slug: "custom-dashboard-development",
    path: "/services/custom-dashboard-development",
    metaTitle: "Custom Dashboard Developer UK | Replace Spreadsheets",
    metaDescription:
      "Custom business dashboards for UK SMEs — replace spreadsheets with secure internal tools, KPI views, and operations panels. Next.js + FastAPI solo delivery.",
    eyebrow: "Service",
    h1: "Custom dashboards for UK small businesses",
    intro:
      "When the business runs on Excel, WhatsApp screenshots, and tribal knowledge, a focused dashboard often beats a massive ERP project. I build internal tools and KPI panels tied to real workflows.",
    sections: [
      {
        title: "Common use cases",
        paragraphs: [
          "Operations reporting, inventory visibility, recruitment pipeline views, finance summaries, and client portals for service businesses.",
        ],
      },
      {
        title: "Delivery",
        paragraphs: [
          "Auth, role-based views, clean data models, and deployment included — with a path to monthly care if the tool becomes business-critical.",
        ],
      },
    ],
    bullets: [
      "Replace spreadsheet chaos with one source of truth",
      "Role-based internal access",
      "Export and audit-friendly views where needed",
      "Integration with existing APIs or databases",
    ],
    ctaLabel: "Talk about your dashboard",
  },
] as const;

export const caseStudyPage = {
  path: "/case-studies/best-football-predictions",
  metaTitle:
    "Case Study: Live Football SaaS with Next.js, FastAPI & Stripe | Bit-Tech",
  metaDescription:
    "How BestFootballPredictions.co.uk was built solo — auth, billing, data pipelines, Cloudflare, production debugging and operational security. Proof for UK SaaS clients.",
  eyebrow: "Case study",
  h1: "Building a live football prediction SaaS in production",
  intro:
    "BestFootballPredictions.co.uk is my own production SaaS — not a mockup. It demonstrates the same architecture, ops discipline, and delivery standards I offer UK founders and small teams.",
  sections: [
    {
      title: "Problem",
      paragraphs: [
        "Deliver a subscription SaaS with automated data pipelines, statistical models, payments, and reliable uptime — as a solo builder without a dev team or agency budget.",
      ],
    },
    {
      title: "What was built",
      paragraphs: [
        "Public Next.js frontend, FastAPI backend, MySQL database, Stripe billing, scheduled jobs, third-party API resilience, Linux deployment, Nginx, Cloudflare, and security hardening.",
      ],
    },
    {
      title: "Operations",
      paragraphs: [
        "Live debugging of routing and payload issues, log forensics, scheduler health, fail2ban and firewall hardening, and ongoing maintenance patterns that feed into client care plans.",
      ],
    },
    {
      title: "What this means for your project",
      paragraphs: [
        "If you need an MVP, production SaaS foundation, or rescue on a similar stack, you are hiring someone who ships and operates — not only writes demos.",
      ],
    },
  ],
  stack: [
    "Next.js + TypeScript",
    "FastAPI + Python",
    "MySQL",
    "Stripe",
    "Cloudflare + Linux + Nginx",
    "Automated pipelines",
  ],
  ctaLabel: "Book a SaaS audit",
  liveUrl: siteConfig.liveProduct.url,
  liveName: siteConfig.liveProduct.name,
} as const;

export const locationPage = {
  path: "/locations/uk",
  metaTitle: "AI & SaaS Developer for UK Small Businesses | Bit-Tech Software",
  metaDescription:
    "Independent AI automation and SaaS developer serving small businesses across the UK. Remote delivery nationwide; based in Greater Manchester (Bolton).",
  eyebrow: "Locations",
  h1: "Serving small businesses across the UK",
  intro:
    "I work with UK founders and SMEs nationwide — remote-first delivery with clear scope, solo accountability, and production-focused builds. Based in Greater Manchester, available across England, Scotland, and Wales.",
  sections: [
    {
      title: "UK-wide delivery",
      paragraphs: [
        "Most work is remote: video calls, shared repos, staged deployments, and documented handover. Distance is not a blocker when scope and communication are clear.",
      ],
    },
    {
      title: "Local anchor",
      paragraphs: [
        "I am based in Greater Manchester (Bolton area). Some clients prefer a North West connection — Manchester, Salford, Wigan, Warrington, Liverpool, Leeds and nearby towns — but my primary market is the wider UK SME and founder segment.",
      ],
    },
  ],
  areas: [
    "United Kingdom (remote)",
    "Greater Manchester",
    "North West England",
    "Nationwide SaaS and automation projects",
  ],
  ctaLabel: "Start a UK project conversation",
} as const;

export const allSeoPaths = [
  "/",
  ...servicePages.map((p) => p.path),
  caseStudyPage.path,
  locationPage.path,
] as const;

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
