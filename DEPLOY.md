# Deploy — bit-tech-software.co.uk

## 1. Vercel (site)

Repo: push `web/` to GitHub → import in [Vercel](https://vercel.com/new).

- **Framework:** Next.js (auto-detected)
- **Root directory:** `/` (repo root is the `web` app)
- **Domain:** add `bit-tech-software.co.uk` and `www.bit-tech-software.co.uk` in Vercel → Project → Settings → Domains

Vercel will show DNS records. Typical setup at your domain registrar:

| Type | Name | Value |
|------|------|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

(Use exact values from Vercel dashboard if different.)

SSL is automatic once DNS propagates (often 5–60 minutes, up to 48h).

## 2. Microsoft 365 Email (info@bit-tech-software.co.uk)

In [Microsoft 365 Admin](https://admin.microsoft.com) → Setup → Domains → verify `bit-tech-software.co.uk`.

Add the DNS records M365 shows (typically):

| Type | Purpose |
|------|---------|
| MX | Mail routing |
| TXT | SPF / domain verification |
| CNAME | Autodiscover (optional) |

Create mailbox: **info@bit-tech-software.co.uk** (or alias forwarding to your Gmail if Essentials allows one mailbox).

## 3. Optional: Cloudflare

If you move DNS to Cloudflare later: import records from registrar, proxy orange-cloud for web, DNS-only (grey) for MX/email.

## 4. Retire Wix

After new site is live: Wix → redirect old URL to `https://bit-tech-software.co.uk`.

## 5. Verify

- https://bit-tech-software.co.uk loads
- https://www.bit-tech-software.co.uk redirects
- Email send/receive test to info@bit-tech-software.co.uk
