# Kansai Karate Willawong — One-Page Landing Site

A faithful recreation of the original Kansai Karate Willawong one-page lead capture website, rebuilt as a modern Next.js application and deployed to Vercel.

**Live URL:** https://kkw-landing.vercel.app  
**Domain (pending):** kansaikaratewillawong.com.au  
**GitHub:** https://github.com/Kansai-Michael/kkw-landing

---

## What This Site Does

A single-scrolling landing page that:
1. Presents the **"2 Weeks Training + Free Uniform — Only $39"** introductory offer
2. Captures **leads via a form** (First Name, Last Name, Child's Name, Phone, Age Group, Email)
3. Forwards lead data to an **n8n webhook** for notification and storage
4. Shows an inline success message after form submission
5. Displays all key info: programs, timetable, instructors, location

---

## How It Works — Step by Step

```
User visits site
      ↓
Reads intro offer in hero (left panel)
      ↓
Fills in lead form (right panel)
      ↓
Form submits → POST /api/contact (Next.js API route)
      ↓
/api/contact forwards JSON payload to N8N_WEBHOOK_URL
      ↓
n8n workflow: notifies Allan via Telegram + saves to Google Sheet
      ↓
User sees "You're In!" success message
```

### Future: Kihon Swap
When Allan's Kihon account is active, `components/LeadForm.tsx` gets replaced with a Kihon iframe. Kihon handles the form + redirects to the booking calendar automatically.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.2 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Fonts | Barlow Condensed (headings) + Montserrat (body) via next/font/google |
| Hosting | Vercel (auto-deploy from GitHub `master`) |
| Form backend | Next.js API route → n8n webhook |

---

## Project Structure

```
kkw-landing/
├── app/
│   ├── page.tsx              ← Full one-page landing (all sections)
│   ├── layout.tsx            ← Head, fonts, schema markup, StickyHeader
│   ├── globals.css           ← Brand CSS variables + custom classes
│   ├── api/contact/route.ts  ← Form handler → n8n webhook
│   ├── thank-you/page.tsx    ← Post-booking confirmation
│   ├── privacy/page.tsx      ← Australian-compliant privacy policy
│   ├── robots.ts             ← robots.txt
│   └── sitemap.ts            ← sitemap.xml
├── components/
│   ├── StickyHeader.tsx      ← Logo + phone + "Claim Offer" button
│   └── LeadForm.tsx          ← Lead capture form (client component)
├── public/
│   └── images/               ← All dojo photos from original 2024 site
├── CLAUDE.md                 ← Full developer reference
├── CHANGELOG.md              ← Version history
└── README.md                 ← This file
```

---

## Environment Variables

Set these in the **Vercel dashboard** (Project → Settings → Environment Variables):

| Variable | Value | Required |
|---|---|---|
| `N8N_WEBHOOK_URL` | Your n8n webhook URL (e.g. `https://michael-kansai.app.n8n.cloud/webhook/kkw-landing-lead`) | Yes — without this, form submissions are accepted but not forwarded |

---

## Local Development

```bash
cd C:\Users\micha\Claude-Projects\kkw-landing
npm install
npm run dev
# Open http://localhost:3000
```

---

## Deploying Updates

All pushes to `master` auto-deploy to Vercel:

```bash
git add .
git commit -m "Your change description"
git push
# Vercel deploys in ~60 seconds → live at kkw-landing.vercel.app
```

---

## Kihon Form Swap (Future)

When Allan has Kihon set up:

1. Get the Kihon embed URL for the Willawong lead form
2. Open `components/LeadForm.tsx`
3. Replace the `<form>` block with:
   ```tsx
   <iframe
     src="YOUR_KIHON_FORM_URL"
     width="100%"
     height="600"
     frameBorder="0"
     title="Book a free trial at Kansai Karate Willawong"
     className="w-full"
     style={{ minHeight: "600px" }}
   />
   ```
4. Push to GitHub → auto-deploys

---

## Domain Cutover

When ready to go live on `kansaikaratewillawong.com.au`:

1. Log in to the domain registrar
2. Add a CNAME record: `www → cname.vercel-dns.com`
3. Add an A record: `@ → 76.76.21.21`
4. In Vercel dashboard → kkw-landing project → Domains → Add `kansaikaratewillawong.com.au`
5. Vercel handles SSL automatically

---

## Design Reference

This site was recreated from the original WordPress site archived at:  
`https://web.archive.org/web/20241015192853/https://kansaikaratewillawong.com.au/`

Original design specs extracted:
- **Primary colour:** `#dd3333` (red)
- **Secondary colour:** `#243673` (dark navy)
- **Background:** `#040404` (near-black)
- **Heading font:** Open Sans Condensed (recreated with Barlow Condensed)
- **Body font:** Montserrat, weight 600

---

## Maintained By

Dojoboi Design Studio — dojoboidesignstudio@gmail.com  
Michael Hunt — michaelhunt270@gmail.com
