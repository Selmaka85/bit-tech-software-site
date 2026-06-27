# Deploy — bit-tech-software.co.uk

## 1. Vercel (site)

Repo: https://github.com/Selmaka85/bit-tech-software-site — auto-deploy on push to `master`.

- **Framework:** Next.js (auto-detected)
- **Root directory:** `/` (repo root is the `web` app)
- **Domain:** `bit-tech-software.co.uk` + `www.bit-tech-software.co.uk` in Vercel → Domains

### DNS setup (current: GoDaddy + Vercel DNS)

1. **GoDaddy** → Domain → Nameservers → Custom:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
2. **Vercel** → Domains → `bit-tech-software.co.uk` → **DNS Records**

Site records (managed by Vercel automatically + ALIAS):

| Type | Name | Value |
|------|------|--------|
| ALIAS | `@` | Vercel auto |
| ALIAS/CNAME | `www` | `cname.vercel-dns.com` |

Use exact values from Vercel dashboard if different (IP may change).

SSL is automatic once DNS propagates (5–60 min, up to 48h).

**Do not** add DNS records in GoDaddy when nameservers point to Vercel.

---

## 2. Email — ImprovMX (info@bit-tech-software.co.uk)

Forward `info@bit-tech-software.co.uk` → personal inbox (Yahoo/Gmail). No M365 required.

1. Sign up at [improvmx.com](https://improvmx.com)
2. Add domain `bit-tech-software.co.uk`
3. Alias: `info` → your personal email
4. In **Vercel DNS Records** (same domain page), add:

| Type | Name | Value | Priority |
|------|------|--------|----------|
| MX | `@` | `mx1.improvmx.com` | 10 |
| MX | `@` | `mx2.improvmx.com` | 20 |
| TXT | `@` | `v=spf1 include:spf.improvmx.com ~all` | — |

5. ImprovMX → DNS Records → **CHECK AGAIN** (all green)
6. Test: send mail to `info@bit-tech-software.co.uk`

**Do not** add `mx1.improvmx.com` as a Vercel Domain — only as MX records.

---

## 3. Optional: Resend (future contact form)

For sending mail from code (contact form notifications): [resend.com](https://resend.com). Add DKIM/TXT records in Vercel DNS when implemented. Separate from ImprovMX receive path.

---

## 4. Retire Wix

After new site is live: Wix → redirect old URL to `https://bit-tech-software.co.uk`.

---

## 5. Verify

- https://bit-tech-software.co.uk loads
- https://www.bit-tech-software.co.uk redirects
- Email receive test to info@bit-tech-software.co.uk
- Google Search Console → submit `https://bit-tech-software.co.uk/sitemap.xml`
