# Bit-Tech Software — Personal Site

Professional site for **Teodor Catalin Bitica** — AI-Native SaaS Architect & Builder.

Built with Next.js 15, TypeScript, and Tailwind CSS. Content aligned with `Ce Pot face.md` and LinkedIn positioning.

## Local development

```powershell
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push the `web` folder to GitHub (or import repo in Vercel with root directory `web`).
2. Import project in [Vercel](https://vercel.com).
3. Framework preset: **Next.js**
4. Add domain `bit-tech-software.co.uk` in Vercel → Domains.
5. In Cloudflare DNS, point `@` and `www` to Vercel (CNAME or A records per Vercel instructions).

## Environment

No secrets required for the marketing site. Optional:

```env
NEXT_PUBLIC_BASE_URL=https://bit-tech-software.co.uk
```

## Site sections

- Hero + positioning (LinkedIn-aligned)
- About + how I work
- Proof of work (BestFootballPredictions.co.uk)
- Services + stack
- Pricing packages (GBP)
- Contact

## Edit content

All copy and pricing live in `lib/site-data.ts`.
