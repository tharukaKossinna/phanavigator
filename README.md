# PH Navigator

A patient and carer information website for people living with **pulmonary hypertension (PH)** in Australia and New Zealand, developed in partnership with Pulmonary Hypertension Association Australia (PHA Australia) and the Pulmonary Hypertension Society of Australia and New Zealand (PHSANZ).

---

## Website overview

### Who it's for

- People who have just been diagnosed with PH
- People living with PH day to day
- Carers, family and friends
- Healthcare professionals (GPs and referrers)

### Sections

| Section | Pages | What it covers |
|---|---|---|
| **Home** | `/` | Entry point that routes visitors to the right section for their stage of the journey |
| **Recently Diagnosed** | What is PH · Diagnostic journey · Questions for your doctor | Plain-language explanation of PH, the tests involved, and a printable question list |
| **Treatments** | Treatments explained · Understanding test results | How PH medicines work, and what results such as right heart catheterisation (mPAP, PCWP) mean |
| **Living Well** | Diet & nutrition · Exercise · Travel & oxygen · Mental wellbeing · Financial support | Practical guidance for daily life with PH |
| **Caring for Someone** | The carer's role · Carer wellbeing · Carer support | Information and support for carers |
| **Community Voices** | — | Stories from Australians living with PH, including a video |
| **Resource Library** | — | Searchable, filterable educational materials reviewed by the Medical Advisory Panel |
| **Find a Specialist** | — | Interactive map and filters for 19 PH treatment centres (16 in Australia, 3 in New Zealand) |
| **For Healthcare Professionals** | — | Referral red flags and links to clinical guidelines (ESC/ERS 2022) |
| **About** | Partnership · Advisory panel | How the site was developed and who oversees it |
| **Governance Checklist** | — | Phase 1 launch safeguards for consent, moderation, withdrawal, retention and access to submitted personal or health information |

### Key features

- **Crisis banner** on every page with emergency (000) and support numbers (Lifeline, Beyond Blue)
- **Site-wide search**, opened with `Ctrl + K` / `Cmd + K`
- **Mobile-friendly navigation**, with a bottom nav bar and drawer on small screens
- **Specialist finder map** built on Leaflet
- **Newsletter signup** connected to Mailchimp (shows a "not configured yet" message until an API key is added)

---

## Release notes

Versions below were assigned retrospectively from the commit history; the repo had no tagged releases before October 2026.

### v1.3 — 25 October 2026
- Moved into its own repository (`tharukaKossinna/phanavigator`) with full history carried over.
- Fixed the CI build, which had been failing: corrected a type error in the mockup sandbox config and added the `BASE_PATH` and `PORT` settings the build needs.
- Added this README.
- Website now builds and publishes to GitHub Pages automatically on every push.

### v1.2 — 23 July 2026
- Updated the Mailchimp audience configuration for newsletter signups.

### v1.1 — 28 June 2026
- **New:** video embed on the Community Voices page.
- **New:** Phase 1 governance checklist page, linked from Community Voices.
- Logo now uses image assets instead of inline rendering.

### v1.0 — 3 May 2026 (launch)
**Content and design**
- Full patient support site: Recently Diagnosed, Treatments, Living Well, Caring for Someone, Community Voices, About and For Healthcare Professionals sections.
- Resource Library page with educational materials.
- PH Navigator branding kit, logo and brand colours matched to the original palette; lighter, cleaner background; updated social sharing image.

**Features**
- Find a Specialist page with interactive map and filters.
- Newsletter signup integrated with Mailchimp.
- Site-wide search with keyboard shortcut.
- Mobile bottom navigation bar and drawer.
- Desktop navigation reorganised into primary and overflow menus; "For Healthcare Professionals" shown as a highlighted button.

**Hosting and build**
- Cloudflare deployment set up (static site plus newsletter API), with fixes for a redirect loop and build type errors.
- CI build script that reports all package failures rather than stopping at the first.

### v0.1 — 27 April 2026
- Initial project setup on Replit.

---

## Running it locally

Requires Node.js 24 and pnpm 10.

```bash
pnpm install
BASE_PATH=/ PORT=3000 pnpm run build:worker   # build the website
pnpm run build:ci                              # full check (same as GitHub's CI)
```

The built site is output to `artifacts/ph-navigator/dist/public`.

## Project structure

| Path | Purpose |
|---|---|
| `artifacts/ph-navigator/` | The website (React + Vite) |
| `worker.ts`, `wrangler.jsonc` | Cloudflare Worker: serves the site and the newsletter API |
| `functions/api/newsletter/` | Cloudflare Pages version of the newsletter API |
| `artifacts/api-server/` | Express server used only for local/Replit development |
| `artifacts/mockup-sandbox/` | Replit design-preview tool (not part of the live site) |
| `lib/` | Shared API spec, generated client code and database scaffolding |

## Hosting

**GitHub Pages (current):** every push to `main` builds the site and publishes it via `.github/workflows/pages.yml`. The newsletter signup doesn't work on GitHub Pages, as it needs a server function.

**Cloudflare (planned):** the site is also set up to deploy on Cloudflare, which supports the newsletter. Build settings and environment variables are documented in [`replit.md`](replit.md). Newsletter signup needs `MAILCHIMP_API_KEY` (secret) and `MAILCHIMP_LIST_ID` set in Cloudflare.
