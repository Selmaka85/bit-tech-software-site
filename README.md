# Bit-Tech Software — Personal Site

Professional site for **Teodor Catalin Bitica** — AI-Native SaaS Architect & Builder.

Built with Next.js 15, TypeScript, and Tailwind CSS. Content in `lib/site-data.ts` and `lib/seo-pages.ts`. Sync with root `Ce Pot face.md` when pricing changes.

**Live:** https://bit-tech-software.co.uk

## Local development

```powershell
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub (`Selmaka85/bit-tech-software-site`) — auto-deploys on `master`.
2. Domain + DNS: see [DEPLOY.md](./DEPLOY.md) (GoDaddy nameservers → Vercel DNS).

## Environment

No secrets required for the marketing site. Optional:

```env
NEXT_PUBLIC_BASE_URL=https://bit-tech-software.co.uk
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Homepage |
| `/services/*` | 6 SEO service pages |
| `/case-studies/best-football-predictions` | Case study |
| `/locations/uk` | UK location page |
| `/sitemap.xml`, `/robots.txt` | SEO technical |

## Site sections (homepage)

Hero · About · Work · Services · Stack · Care · Pricing · Scope · Contact

Optional **Future-Tech Mode** toggle (visual skin only — same content).

## Email

`info@bit-tech-software.co.uk` — ImprovMX forward (see DEPLOY.md).
