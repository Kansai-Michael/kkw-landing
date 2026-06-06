@c:\Users\micha\Claude-Projects\Dojo Business\business-overview.md
@c:\Users\micha\Claude-Projects\Dojo Marketing & SEO\CLAUDE.md

# Kansai Karate Willawong — One-Page Landing Page (kkw-landing)

## Site Overview

| Item | Detail |
|---|---|
| Site name | Kansai Karate Willawong — Landing Page |
| Domain | kansaikaratewillawong.com.au |
| Live URL | (Vercel preview URL — update when deployed) |
| Local path | `C:\Users\micha\Claude-Projects\kkw-landing` |
| Stack | Next.js 16, Tailwind CSS v4, TypeScript |
| Hosting | Vercel (auto-deploys on `git push` to `main`) |
| Purpose | Single-page lead capture for Sensei Allan Reyes |

**Note:** The multi-page version of this site lives at `C:\Users\micha\Claude-Projects\kkw-website` — leave it untouched.

## Dojo Facts

- **Address:** Unit 3, 14 Buttonwood Place, Willawong QLD 4110
- **Phone:** 0421 366 355
- **Email:** info@kansaikaratewillawong.com.au
- **Head Instructor:** Sensei Allan Reyes (Sandan — 3rd Dan)
- **Instructors:** Hayden Reyes (Shodan), Chrystle Reyes (Junior Shodan)
- **Admin Manager:** Marie Reyes
- **Facebook:** https://www.facebook.com/kansaikaratewillawong
- **Instagram:** https://www.instagram.com/kansaikaratewillawong
- **Style:** Shitoryu Shukokai — traditional Japanese karate
- **Affiliation:** Kansai Karate Academy (Shihan Stephen Kelly), QKA, AKF

## Kihon Booking Form — HOW TO ACTIVATE

When Sensei Allan sets up his Kihon account:

1. Get the Kihon booking/lead form embed URL for Willawong
2. Open `app/page.tsx`
3. Find the line at the top: `const KIHON_BOOKING_URL = "KIHON_BOOKING_URL";`
4. Replace `"KIHON_BOOKING_URL"` with the real URL (e.g. `"https://app.kihonsoft.au/forms/willawong-trial"`)
5. Save the file
6. Run: `git add app/page.tsx && git commit -m "Wire up Kihon booking form" && git push`
7. Vercel auto-deploys — done.

The `KIHON_IS_LIVE` constant controls whether the iframe or the fallback (phone/email) is shown.

## Brand Colours

| Variable | Hex | Used For |
|---|---|---|
| `--kkw-blue` | `#5B7DB1` | Section backgrounds, CTAs |
| `--kkw-blue-dark` | `#4A6DA0` | Hover states |
| `--kkw-yellow` | `#FFB800` | CTA buttons, accents |
| Navy | `#001040` | Footer background |

## Pages

| Path | Description |
|---|---|
| `/` | One-page landing (hero → programs → why → about → testimonials → book → location → footer) |
| `/thank-you` | Post-booking confirmation page |
| `/privacy` | Australian-compliant privacy policy |

## Outstanding / Next Steps

1. **Kihon form** — replace `KIHON_BOOKING_URL` placeholder in `app/page.tsx` when Allan's Kihon account is live
2. **Google Maps embed** — update iframe `src` in `app/page.tsx` (Location section) with exact embed URL for 14 Buttonwood Place
3. **Real photos** — replace placeholder images with actual Willawong dojo photos (drop into `public/images/`)
4. **Domain cutover** — point `kansaikaratewillawong.com.au` DNS to Vercel when ready
5. **GA4 + Meta Pixel** — add tracking to `app/layout.tsx` after Kihon is live
6. **SEO audit** — run after domain is live and Kihon is wired up
7. **Testimonials** — replace with real Google Reviews when available
8. **Favicon** — add a favicon.ico to `public/`

## Other Kansai Karate Locations

- Gold Coast: https://kansaikarategoldcoast.com.au
- Tarragindi: https://kansaikaratetarragindi.com.au
- Sumner Park / Springfield / Moggill: https://www.kansaikarate.com.au
- Clayfield: https://www.karateclayfield.com
