# Changelog — Kansai Karate Willawong Landing Site

## v1.0 — 2026-06-07 (Build) / 2026-06-16 (Documented)

### Initial Build

**Session 1 (2026-06-07):** First version built — generic one-page landing.
**Session 2 (2026-06-07, same session):** Rebuilt as faithful Wayback Machine recreation after Michael clarified the intent.

### What Was Built

**Project scaffold**
- New Next.js 16.2.2 project (`kkw-landing`) — separate from existing `kkw-website` multi-page site
- Tailwind CSS v4, TypeScript, Vercel deployment
- GitHub repo: `Kansai-Michael/kkw-landing`
- Live at: https://kkw-landing.vercel.app

**Design recreation**
- Source: Wayback Machine archive of kansaikaratewillawong.com.au (15 Oct 2024)
- Original HTML downloaded via curl; design extracted (colours, fonts, layout, content)
- Colour palette: Red `#dd3333`, Navy `#243673`, Black `#040404` — extracted from original CSS
- Typography: Montserrat (body) + Barlow Condensed (headings, replacing deprecated Open Sans Condensed)
- All original dojo images downloaded from Wayback Machine CDN

**Page sections built**
1. Sticky header — logo, phone, "Claim Offer" button
2. Hero — dojo bg image + intro offer ("2 Weeks Training + Free Uniform — Only $39") + lead form
3. /01 About — navy bg, suburb catchment list, dojo photo
4. /02 Benefits — black bg, 3 cards with original benefit icons
5. /03 Programs — 4 program cards (Cubs, Little Lions, Juniors, Adults & Teens)
6. /04 Timetable — full class schedule table (updated to 2025 times)
7. Instructors — Sensei Allan Reyes bio (updated to Sandan, was Nidan in original)
8. Gallery strip — 5 dojo photos
9. Final CTA — red banner, "Register Now — $39"
10. Contact + Footer — address, phone, social, network locations

**Lead form (components/LeadForm.tsx)**
- Fields match original exactly: First Name, Last Name, Child's Name, Phone, Age Group (checkboxes), Email
- Submit button: "I Want to Learn Karate"
- Posts to `/api/contact` → forwards to n8n webhook (env var: `N8N_WEBHOOK_URL`)
- Inline success message on submission
- Ready to swap for Kihon iframe when Allan's Kihon account is set up

**Supporting files**
- `/privacy` — Australian-compliant privacy policy
- `/thank-you` — post-booking confirmation page
- `robots.ts` + `sitemap.ts` — SEO basics
- `llms.txt` — AI crawler info

### Known Pending Items

- Confirm $39 intro offer still current with Sensei Allan
- Set `N8N_WEBHOOK_URL` in Vercel env vars and build n8n workflow
- Kihon account setup → swap `LeadForm.tsx` with iframe
- Domain DNS cutover
- GA4 + Meta Pixel tracking
- Real testimonials from Google Reviews
- Favicon
