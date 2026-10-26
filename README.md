# All Weather Driving School website

Multi-page redesign of allweatherdrivingschool.com (Kelowna, BC).
React 19, Vite, Tailwind CSS v4, Motion (Framer Motion), React Router, Phosphor icons.

Preview build: https://awds-kelowna-redesign.vercel.app

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
```

## Deploy to the real domain (Vercel)

1. Import this repository in Vercel. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (both auto-detected).
2. Add the environment variables from `.env.example` if you want the forms to send directly (see below).
3. Add `allweatherdrivingschool.com` and `www.allweatherdrivingschool.com` under Project > Settings > Domains and update DNS as Vercel instructs.
4. `vercel.json` already rewrites every path to `index.html`, so deep links such as `/course-packages` work.

Any static host works too: serve `dist/` and rewrite all routes to `index.html`.

## Before you switch the domain over

- **Zoho CRM leads.** Both forms (registration and contact) create a Lead in Zoho CRM through Web-to-Lead. In Zoho CRM go to Setup > Developer Space > Web Forms, create a form on the Leads module with First Name, Last Name, Email, Phone, Street, City, State, Zip Code, Country and Description, **turn CAPTCHA off** (the site has a hidden honeypot field), click Generate form code, and copy the hidden `xnQsjsdp` and `xmIwtLD` values and the form's action host into the `VITE_ZOHO_*` variables in `.env.example`. Registration details (course, start date, payment method, notes) go into the Lead's Description. If Zoho cannot be reached, the form falls back to a pre-filled email to the office. Test one submission of each form before launch and confirm the Lead appears.
- **Google Analytics 4.** Set `VITE_GA_MEASUREMENT_ID` (the `G-XXXXXXXXXX` ID) at build time. The site sends a `page_view` on every page change and these events: `generate_lead` (form submitted, with form name and course), `registration_step`, `click_phone`, `click_email`, `click_signup` and `click_social`. Mark `generate_lead` as a key event in GA4. If the site needs a cookie-consent banner (for example for Quebec visitors), gate `initAnalytics()` in `src/analytics.js` on consent.
- **Optional email copy.** `VITE_FORM_ENDPOINT` and `VITE_FORM_ACCESS_KEY` (Web3Forms or Formspree) can also email each submission to the office. It is skipped if the key is missing.
- **Old WordPress files.** Two links still point at the current site and will break when WordPress is retired. Download these PDFs, add them to `public/docs/`, and update `THEORY_2026` and `THEORY_2027` in `src/data.js`:
  - `/wp-content/uploads/2026/07/GLP-Calender-July-23-2026.pdf`
  - `/wp-content/uploads/2026/07/GLP-Classroom-Dates-2027.pdf`
- **URLs.** Page paths match the old site (`/about-us`, `/course-packages`, `/student-registration` and so on), so existing links and search rankings carry over. The blog post keeps its original slug.
- **Content to confirm with the school.** Motorcycle theory dates (currently "weekday evenings, 5:30 to 9:30 PM"), the motorcycle instructors list, the comparison table on `/our-competitors`, and the pick-up and drop-off claim.
- **Analytics and SEO.** Add your analytics snippet to `index.html`. Titles and meta tags are set once in `index.html`; per-page titles are a good next step.

## Where things live

| Path | What |
|---|---|
| `src/data.js` | All copy, prices, instructors, comments, nav. Edit content here. |
| `src/pages/` | One file per page |
| `src/sections/` | Home page sections (hero, weather, pricing, team) |
| `src/sections/WeatherFX.jsx` | Canvas rain, snow, fog and sun effects |
| `src/pages/Register.jsx` | Five-step registration form |
| `src/index.css` | Colour tokens (light and dark follow the visitor's system setting) |
| `public/brand/` | Logos with transparent backgrounds (light and dark versions) |
| `public/video/` | Weather background videos. `sun.mp4` only so far; rain, snow and fog use the canvas effects until clips are added. |

To add a video for another weather tab, drop it in `public/video/` and add it to the `VIDEO` map in `src/sections/Weather.jsx`.

## Design notes

One accent (brand yellow `#f5c400`), one corner system (pill buttons, 24px cards, 12px inputs), Geist and Geist Mono self-hosted via Fontsource, motion respects `prefers-reduced-motion`.
