export const siteConfig = {
  name: "Teodor Catalin Bitica",
  brand: "Bit-Tech Software",
  title: "AI-Native SaaS Architect & Builder (Solo)",
  description:
    "AI-assisted SaaS products, automation tools and production-ready web applications for UK small businesses, founders and existing SaaS teams.",
  url: "https://bit-tech-software.co.uk",
  email: "info@bit-tech-software.co.uk",
  phone: "+44 7985 440909",
  phoneDisplay: "07985 440909",
  location: "Little Hulton, Manchester, UK",
  linkedin: "https://www.linkedin.com/in/teodor-catalin-bitica/",
  liveProduct: {
    name: "BestFootballPredictions.co.uk",
    url: "https://bestfootballpredictions.co.uk/",
    tagline: "Live statistical analysis platform — auth, billing, pipelines, security, cloud deployment.",
  },
} as const;

export const pricingPositioning = {
  headline: "Lean solo builds on a proven stack — scoped delivery, not a full agency team.",
  subline:
    "Pricing is typically 35–50% below comparable UK freelance and studio quotes for the same scoped deliverables — because delivery is solo, stack-standardized, and AI-assisted.",
} as const;

export const pricingRates = {
  hourly: "£45 – £70",
  dayRate: "£320 – £520",
  paymentStructure: "40% upfront · 40% milestone · 20% final delivery",
} as const;

export const postLaunchCare = {
  tagline: "Build once. Maintain properly. Avoid silent failure.",
  headline: "I do not build and disappear",
  description:
    "After launch, most SaaS products need ongoing monitoring, updates, fixes, backup checks, dependency maintenance, security patches, and small improvements. I offer optional monthly care plans so your product stays stable after delivery — without the cost of hiring an in-house developer or DevOps admin.",
  supportWindow:
    "Business-hours support (UK). Response targets are for triage and acknowledgement — not guaranteed fix times. No 24/7 on-call unless agreed separately.",
} as const;

export const deliveryPipelineSteps = [
  "Build",
  "Deploy",
  "Stabilize",
  "Maintain",
  "Improve",
] as const;

export const everyBuildIncludes = [
  "Architecture plan aligned to scope",
  "Frontend implementation (Next.js + React + TypeScript + Tailwind)",
  "Backend API (FastAPI + Python + Pydantic)",
  "Database schema (PostgreSQL or MySQL)",
  "Authentication setup",
  "Payment integration when required (Stripe basics)",
  "Admin essentials",
  "Deployment (Vercel / Hetzner / Cloudflare as appropriate)",
  "Environment configuration and .env.example",
  "Security basics (validation, error handling, rate limits where needed)",
  "Smoke testing and handover notes",
  "Optional post-launch care plan",
] as const;

export const notIncludedByDefault = [
  "Unlimited revisions or unlimited scope changes",
  "Native iOS / Android applications",
  "Complex enterprise compliance (SOC2, ISO, etc.)",
  "Major redesigns after approved scope",
  "Advanced AI model training or fine-tuning",
  "Large-scale data migration",
  "24/7 on-call support",
  "Unscoped third-party integrations",
  "Full Figma design systems or complete brand/copy packages",
  "Marketplace, multi-tenant enterprise, or unlimited feature creep",
] as const;

export const opsFoundations = [
  "Health checks and readiness endpoints",
  "Structured logging and error boundaries",
  "Backup verification patterns",
  "Uptime monitoring and cron watchdogs",
  "Circuit breakers and fallback modes where needed",
  "Admin diagnostics and deployment notes",
  "Rollback guidance and incident runbook basics",
] as const;

export const deliverables = [
  {
    title: "Full SaaS builds",
    description:
      "Frontend, backend, database, auth, billing, and admin essentials — production-ready, not prototypes.",
  },
  {
    title: "Resilient API integrations",
    description:
      "Fallback logic, retries, cache-first behaviour, and graceful degradation when third-party APIs fail.",
  },
  {
    title: "Automated pipelines",
    description:
      "Scheduled jobs, data sync, model refresh flows, health checks, and background operations.",
  },
  {
    title: "Production deployment",
    description:
      "Linux, systemd, Nginx, Cloudflare, smoke tests, and rollback-safe release workflows.",
  },
  {
    title: "Security hardening",
    description:
      "JWT/RBAC, rate limiting, SSH hardening, firewall rules, and brute-force protection.",
  },
  {
    title: "Stabilization & rescue",
    description:
      "Live incident diagnosis, log forensics, uptime fixes, and operational reliability improvements.",
  },
] as const;

export const stackGroups = [
  {
    label: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Uvicorn",
      "APScheduler",
      "Pydantic",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    label: "Frontend",
    items: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PWA"],
  },
  {
    label: "ML / Data",
    items: ["XGBoost", "scikit-learn", "pandas", "numpy", "scipy"],
  },
  {
    label: "Infra / Ops",
    items: [
      "Ubuntu",
      "systemd",
      "Nginx",
      "Cloudflare",
      "Vercel",
      "Hetzner",
      "UFW",
      "fail2ban",
    ],
  },
  {
    label: "Integrations",
    items: ["Stripe", "API-Sports", "The Odds API", "Resend"],
  },
  {
    label: "Workflow",
    items: ["Git / GitHub", "Cursor AI-assisted engineering", "Production debugging"],
  },
] as const;

export const projectPackages = [
  {
    name: "Audit + Architecture Blueprint",
    duration: "3–5 days",
    price: "£595 – £1,150",
    priceNote: undefined,
    bestFor: "Founders who need clarity before spending £5k–£30k on the wrong build.",
    summaryFeatures: [
      "Architecture and stack recommendation",
      "Must-have / later / avoid feature split",
      "Timeline, budget, and milestone roadmap",
    ],
    included: [
      "Review of idea, stack, costs, risks, and complexity",
      "Recommended architecture: frontend, backend, DB, hosting, auth, payments",
      "Feature list split into must-have / later / avoid",
      "Timeline and budget estimate",
      "Milestone roadmap",
      "Technical risk review: security, performance, maintenance, lock-in, third-party APIs",
      "Final document (PDF or Markdown, typically 5–15 pages)",
    ],
    notIncluded: [
      "Full implementation or production code",
      "Complete Figma design",
      "Advanced market research",
      "Unlimited follow-up support",
    ],
    highlight: false,
  },
  {
    name: "MVP Sprint",
    duration: "3–5 weeks",
    price: "£3,500 – £6,950",
    priceNote: "Scoped sprint — core features defined before work starts.",
    bestFor: "Founders validating a SaaS idea with real users — focused workflow, not unlimited features.",
    summaryFeatures: [
      "Core workflow (3–6 main features, scoped)",
      "Frontend + backend + database",
      "Auth and payment basics",
      "Deployment + smoke tests",
    ],
    included: [
      "Next.js + React + TypeScript + Tailwind setup",
      "FastAPI + Python backend",
      "PostgreSQL or MySQL",
      "3–6 clearly defined core features",
      "Basic auth: login / register / reset or external provider",
      "Stripe basics if needed: checkout or simple subscription",
      "Minimal admin dashboard",
      "1–3 simple API integrations",
      "Deployment on Vercel / Hetzner / Cloudflare as appropriate",
      "Environment config and .env.example",
      "Basic validation, error handling, loading states",
      "Smoke tests / manual QA pass",
      "README and handover notes",
      "One round of small post-review adjustments",
    ],
    notIncluded: [
      "Native mobile apps",
      "Advanced custom design or full branding",
      "Complex marketplace or multi-tenant enterprise architecture",
      "Serious AI model training",
      "Many unscoped API integrations",
      "24/7 support",
      "Unlimited features after sprint start",
    ],
    highlight: true,
  },
  {
    name: "Production SaaS Build",
    duration: "6–10 weeks",
    price: "From £7,900 – £16,500",
    priceNote:
      "Final quote depends on scope, integrations, complexity, and support requirements.",
    bestFor:
      "Founders who need a production-ready SaaS foundation: billing, admin, automation, deployment, security hardening, and operational stability.",
    summaryFeatures: [
      "Everything in MVP Sprint, production-grade",
      "Subscriptions, jobs, resilience layers",
      "Security hardening + runbook",
      "Stabilization window after launch",
    ],
    included: [
      "Everything in MVP Sprint, with stronger architecture for growth",
      "Role-based access when required",
      "Stripe subscriptions / plans / webhook handling",
      "More complete admin dashboard",
      "Background jobs and schedulers",
      "Basic email notifications",
      "Logging and error tracking basics",
      "Fallback logic for external APIs",
      "Caching / CDN strategy where it makes sense",
      "Database schema designed for maintainability",
      "Security hardening: rate limits, headers, env separation, secrets handling",
      "Production deployment + simple staging when justified",
      "Smoke test checklist and runbook (start, debug, deploy)",
      "Limited stabilization window after launch (scoped in agreement)",
    ],
    notIncluded: [
      "Enterprise multi-team systems",
      "Advanced analytics / data warehouse",
      "High-availability multi-region infrastructure",
      "Complex permissions engine",
      "SOC2 / ISO compliance programmes",
      "Large AI training or fine-tuning projects",
      "Native mobile apps",
      "24/7 support",
      "Feature creep after signed scope",
    ],
    highlight: false,
  },
  {
    name: "Stabilization / Rescue",
    duration: "Scoped engagement",
    price: "£1,500 – £4,200",
    priceNote: "Read-only access preferred for initial audit where possible.",
    bestFor: "Live products that need a production doctor — not a full rebuild disguised as a quick fix.",
    summaryFeatures: [
      "Logs, routing, DB, API, hosting audit",
      "Critical fixes on defined issues",
      "Performance and security quick wins",
      "Change report + verification pass",
    ],
    included: [
      "Audit of logs, routing, database, APIs, hosting, build/deploy",
      "Bottleneck and critical bug identification",
      "Fixes on agreed, defined problems",
      "Performance quick wins where feasible",
      "Security quick wins where feasible",
      "Backup and deploy sanity check",
      "Report of what changed and what risk remains",
      "1–2 verification rounds after fixes",
    ],
    notIncluded: [
      "Complete rewrite or greenfield rebuild",
      "Unlimited support",
      "Major refactor without a separate package",
      "Guarantee to fix any legacy system in a few days",
    ],
    highlight: false,
  },
] as const;

export const carePlans = [
  {
    name: "Care Basic",
    duration: "Monthly",
    price: "£350 – £495 / mo",
    audience: "Small app or low-risk live product",
    responseTarget: "5 business days (triage)",
    includedHours: "~1 hour small fixes / month",
    features: [
      "Uptime checks and backup verification",
      "Monthly dependency and security review",
      "Small fixes within included hours",
      "Email support (business hours, UK)",
    ],
    highlight: false,
  },
  {
    name: "Care Standard",
    duration: "Monthly",
    price: "£750 – £1,095 / mo",
    audience: "Live SaaS / MVP in production",
    responseTarget: "2 business days (triage)",
    includedHours: "~3 hours fixes / month",
    features: [
      "Everything in Care Basic",
      "Monitoring and logs review",
      "Dependency and security updates",
      "Small iterative improvements within scope",
      "Short monthly report",
    ],
    highlight: true,
  },
  {
    name: "Care Priority",
    duration: "Monthly",
    price: "£1,395 – £1,995 / mo",
    audience: "Business-critical SaaS",
    responseTarget: "24 business hours (triage)",
    includedHours: "~6 hours fixes / month",
    features: [
      "Everything in Care Standard",
      "Priority incident triage",
      "Staging and deployment support",
      "Monthly operational improvement report",
    ],
    highlight: false,
  },
] as const;

export const slaSeverities = [
  {
    level: "P1 Critical",
    example: "App down, payments broken, data-loss risk",
    basic: "5 business days",
    standard: "2 business days",
    priority: "24 business hours",
  },
  {
    level: "P2 High",
    example: "Major feature broken, no workaround",
    basic: "5 business days",
    standard: "3 business days",
    priority: "2 business days",
  },
  {
    level: "P3 Normal",
    example: "Non-critical bug or operational issue",
    basic: "5 business days",
    standard: "5 business days",
    priority: "5 business days",
  },
  {
    level: "P4 Improvement",
    example: "Cosmetic change or enhancement request",
    basic: "Next maintenance window",
    standard: "Next maintenance window",
    priority: "Next maintenance window",
  },
] as const;

export const carePlanTerms = [
  "Care plans include monitoring, maintenance, updates, backup checks, security reviews, and limited support hours — not unlimited new features or full rebuilds.",
  "Third-party outages and out-of-scope work are excluded unless agreed separately.",
  "Unused support time does not roll over unless explicitly stated in your agreement.",
  "Additional work beyond included hours is billed at the agreed hourly rate (£45–£70).",
  "Response targets mean when triage/acknowledgement begins — not guaranteed resolution time.",
  "Major new features are quoted separately — not included in monthly care.",
] as const;

export const workPrinciples = [
  {
    title: "Scope-first",
    description: "Clear objective, architecture, and milestone plan before code.",
  },
  {
    title: "Incremental delivery",
    description: "Build in stages with validation at each step.",
  },
  {
    title: "Reliability over vanity",
    description: "Business continuity and uptime — not just shipping features.",
  },
  {
    title: "Handover-ready",
    description:
      "Clean repo, docs, deployment notes, and runbook guidance — you can leave anytime, but staying is easier.",
  },
] as const;

export const bestFit = [
  "Founders who need an MVP or production SaaS without hiring a full internal team.",
  "Existing products needing stabilization, hardening, or operational reliability.",
  "API-heavy products that require resilience under third-party failure.",
] as const;

export const proofPoints = [
  "Next.js + FastAPI + PostgreSQL/MySQL production architecture",
  "Automated data pipelines and scheduled background jobs",
  "Third-party API resilience (fallback, cache, degraded mode)",
  "Live production debugging (routing, payloads, service behaviour)",
  "Infrastructure security (SSH hardening, fail2ban, firewall lock-down)",
  "Operational audits (app logs, nginx, watchdogs, scheduler health)",
] as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#stack", label: "Stack" },
  { href: "/#care", label: "Care" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#scope", label: "Scope" },
  { href: "/#contact", label: "Contact" },
] as const;

export const footerSeoLinks = [
  { href: "/services/ai-automation-for-small-business", label: "AI automation UK" },
  { href: "/services/custom-saas-development", label: "Custom SaaS UK" },
  { href: "/services/mvp-development", label: "MVP developer UK" },
  { href: "/services/saas-rescue-stabilisation", label: "SaaS rescue UK" },
  { href: "/services/saas-maintenance-care", label: "SaaS maintenance UK" },
  { href: "/services/custom-dashboard-development", label: "Custom dashboards UK" },
  { href: "/case-studies/best-football-predictions", label: "Case study" },
  { href: "/locations/uk", label: "UK coverage" },
] as const;
