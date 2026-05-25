# CamTheBarber — Premium Barber in West Seattle

One-page personal brand website for CamTheBarber at Just Another Barbershop.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Static export outputs to `/out`. Deploy to Vercel, Netlify, or any static host.

## Content Updates

All content lives in the `data/` folder — no component changes needed:

| What to update | File |
|---|---|
| Booking URL, Instagram, phone, email | `data/site-config.ts` |
| Services, pricing, durations | `data/services.ts` |
| Client testimonials | `data/testimonials.ts` |
| Gallery images | `data/gallery.ts` |
| Hero copy, about, trust narrative, differentiators, location | `data/content.ts` |

## Images

- Hero and gallery currently use Unsplash stock photography
- To replace: add optimized images to `public/images/gallery/` and update `data/gallery.ts` paths
- OG image (for social sharing): place a 1200×630px image at `public/images/og-image.jpg`

## Tech Stack

- Next.js 14 (App Router, static export)
- TypeScript (strict mode)
- Tailwind CSS
- No CMS, no database, no auth

## Deployment

Deployed on Vercel. Pushes to `main` trigger automatic deploys.

**Repo:** https://github.com/lmncapture/camthebarber-site
