@c:\Users\micha\Claude-Projects\Dojo Business\business-overview.md
@c:\Users\micha\Claude-Projects\Dojo Marketing & SEO\CLAUDE.md

# Kansai Karate Willawong — One-Page Landing (kkw-landing)

## Site Overview

| Item | Detail |
|---|---|
| Site name | Kansai Karate Willawong — Landing Page |
| Domain | kansaikaratewillawong.com.au (DNS not yet pointed) |
| Live URL (staging) | https://kkw-landing.vercel.app |
| Local path | `C:\Users\micha\Claude-Projects\kkw-landing` |
| GitHub repo | Kansai-Michael/kkw-landing (master branch) |
| Stack | Next.js 16.2.2, Tailwind CSS v4, TypeScript |
| Hosting | Vercel — auto-deploys on `git push` to `master` |
| Purpose | Faithful recreation of the original one-page lead capture site (Wayback Machine Oct 2024) |

**Note:** The multi-page version lives at `C:\Users\micha\Claude-Projects\kkw-website` — leave it untouched.

## Design — Matches Original Oct 2024 Site

This site is a recreation of the original `kansaikaratewillawong.com.au` as it appeared on 15 October 2024 (archived at web.archive.org). The original HTML was downloaded and used as the design source.

### Colours (extracted from original CSS)

| Variable | Hex | Used For |
|---|---|---|
| `--kkw-red` | `#dd3333` | Primary accent, CTA buttons, section headers, form header |
| `--kkw-navy` | `#243673` | Section backgrounds (/01, /04) |
| `--kkw-black` | `#040404` | Hero overlay, /02, instructors section, footer |
| `--kkw-light-blue` | `#BFD1FF` | Secondary text on navy backgrounds |

### Typography

| Role | Font | Notes |
|---|---|---|
| Headings | Barlow Condensed (700, 800, 900) | Closest match to original Open Sans Condensed — used uppercase, very large sizes |
| Body | Montserrat (400, 600, 700, 900) | Matches original exactly |

### Page Sections (top to bottom)

1. **Sticky header** — black background, logo + "Claim Offer" red button + phone number
2. **Hero** — dojo image + dark overlay. Left: intro offer copy. Right: lead form card.
3. **/01 About** — navy background. "We teach traditional Shito-Ryu Shukokai Karate." + suburb list + dojo photo.
4. **/02 Benefits** — black background. 3 cards: Self Control, Physical/Mental Health, Strengthen Mind.
5. **/03 Programs** — parallax dojo image bg. 4 program cards: Cubs, Little Lions, Juniors, Adults & Teens.
6. **/04 Timetable** — navy background. Full 6-class timetable table.
7. **Instructors** — black background. Sensei Allan Reyes (Sandan) + family team details.
8. **Gallery strip** — 5 dojo photos side by side.
9. **Final CTA** — red background. "Don't Miss This Offer — Register Now $39".
10. **Contact + Footer** — Address, Phone, Social links. Network location links. Copyright.

### Images

All images are real Willawong dojo photos downloaded from the Wayback Machine (May 2024 originals):

| File | Used In |
|---|---|
| `dojo-willawong-brisbane-01.webp` | Hero background |
| `dojo-willawong-brisbane-02.webp` | Cubs program card |
| `dojo-willawong-brisbane-03.webp` | Little Lions program card |
| `dojo-willawong-brisbane-04.webp` | Juniors program card |
| `dojo-willawong-brisbane-05.webp` | Adults program card |
| `dojo-willawong-brisbane-06.webp` | Instructor photo |
| `Kansai-Karate-Willawong-Dojo.jpg` | /01 About section |
| `kansai-karate-near-me.jpg` | /03 Programs parallax background |
| `karate-near-me.jpg` | Gallery strip |
| `img-1.webp`, `img-3.webp`, `img-5.webp` | /02 Benefits icons |
| `kkw-logo.webp` | Sticky header + footer |

## Lead Form

### Fields (matching original site exactly)

- First Name (required)
- Last Name (required)
- Child's Full Name (optional)
- Phone Number (required)
- Age Group checkboxes: Cubs 3-4, Little Lions 5-7, Juniors 8-12, Adult-Teens 13+
- Email (required)
- Submit button: "I Want to Learn Karate"

### How it works

1. User submits form → POST to `/api/contact` (Next.js API route)
2. `/api/contact` forwards the payload to n8n webhook (`N8N_WEBHOOK_URL` env var)
3. n8n workflow handles lead (notify Allan via Telegram, save to sheet, etc.)
4. User sees "You're In!" success message inline

### n8n Webhook Setup

- Set `N8N_WEBHOOK_URL` in Vercel Environment Variables
- Suggested webhook name: `kkw-landing-lead`
- Payload fields: `firstName`, `lastName`, `childName`, `phone`, `email`, `ageGroups[]`, `source`, `submitted_at`

## Kihon Form — HOW TO SWAP WHEN READY

When Sensei Allan sets up his Kihon account, replace the native form with the Kihon iframe:

1. Get the Kihon booking/lead form embed URL for Willawong
2. Open `components/LeadForm.tsx`
3. Replace the entire `<form>` with:
   ```tsx
   <iframe
     src="https://app.kihonsoft.au/forms/YOUR-WILLAWONG-FORM-ID"
     width="100%"
     height="600"
     frameBorder="0"
     title="Book a free trial at Kansai Karate Willawong"
     className="w-full"
     style={{ minHeight: "600px" }}
   />
   ```
4. `git add components/LeadForm.tsx && git commit -m "Wire up Kihon form" && git push`
5. Vercel auto-deploys in ~1 minute.

After form submission, Kihon itself redirects to the booking calendar — no extra wiring needed.

## Dojo Facts

- **Address:** Unit 3, 14 Buttonwood Place, Willawong QLD 4110
- **Phone:** 0421 366 355
- **Email:** info@kansaikaratewillawong.com.au
- **Head Instructor:** Sensei Allan Reyes (Sandan — 3rd Dan) [was Nidan in 2024 original]
- **Instructors:** Hayden Reyes (Shodan), Chrystle Reyes (Junior Shodan)
- **Admin Manager:** Marie Reyes
- **Facebook:** https://www.facebook.com/kansaikaratewillawong
- **Instagram:** https://www.instagram.com/kansaikaratewillawong
- **Style:** Shitoryu Shukokai — traditional Japanese karate
- **Affiliation:** Kansai Karate Academy (Shihan Stephen Kelly), QKA, AKF

## Intro Offer

The hero section features: **"2 Weeks Training + Free Uniform — Only $39"**

This matches the original 2024 site offer. **Confirm with Sensei Allan** whether this offer is still current before pointing the domain live.

## Outstanding / Next Steps

1. **Confirm $39 offer** with Sensei Allan — is it still running?
2. **n8n webhook** — build lead intake workflow in n8n, add `N8N_WEBHOOK_URL` to Vercel env vars
3. **Kihon form** — replace `<LeadForm />` with Kihon iframe when Allan's Kihon account is live (see above)
4. **Domain cutover** — point `kansaikaratewillawong.com.au` DNS to Vercel when ready
5. **GA4 + Meta Pixel** — add tracking to `app/layout.tsx` after domain is live
6. **SEO audit** — run after domain is pointed and content is finalised
7. **Favicon** — add a `favicon.ico` or `icon.png` to `public/`
8. **Real testimonials** — replace placeholder quotes with real Google Reviews from Allan's listing

## Other Kansai Karate Locations

- Gold Coast (Upper Coomera): https://kansaikarategoldcoast.com.au
- Tarragindi: https://kansaikaratetarragindi.com.au
- Sumner Park / Springfield / Moggill: https://www.kansaikarate.com.au
- Clayfield: https://www.karateclayfield.com
