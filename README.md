# PH Navigator

A patient information website for people living with **pulmonary hypertension (PH)** in Australia and New Zealand, and the people who care for them.

**Status:** early preview (v2.0). The site has been stripped back to a small core while content is clinically reviewed. See [RELEASE_NOTES.md](RELEASE_NOTES.md) for what changed and why.

---

## What's on the site

| Page | Address | Review status |
|---|---|---|
| Home | `/` | — |
| What is PH | `/what-is-ph/` | Not yet reviewed |
| Diagnosis and tests | `/diagnosis-and-tests/` | Not yet reviewed |
| Questions for your doctor (printable) | `/questions-for-your-doctor/` | Not yet reviewed |
| Treatments | `/treatments/` | Not yet reviewed |
| Find a specialist | `/find-a-specialist/` | List being checked |
| About | `/about/` | — |
| Privacy and disclaimer | `/privacy-and-disclaimer/` | — |

Every page shows the emergency and support numbers for Australia and New Zealand.

## Ground rules for adding anything

Before a page, section or feature is added, write down:

1. **Who it's for** and what they need from it.
2. **Where the content comes from** (sources).
3. **Who reviewed it** (clinical review for health information).
4. **Who maintains it** and how often it's checked.

If any of these is blank, it waits in the backlog. Nothing goes on the site that claims a partnership, endorsement, reviewer or patient story that isn't confirmed.

The prioritised backlog (build, content, clinical review, governance and launch) is tracked in a separate shared tracker; ask the repository owner for access.

---

## Editing content

Content pages are Markdown files in `src/pages/`. Edit the text, commit, and the site rebuilds automatically.

Each health page starts with a block of settings (frontmatter):

```yaml
---
layout: ../layouts/ContentPage.astro
title: What is pulmonary hypertension?
description: One-line summary shown under the heading.
lastUpdated: 2026-10-25          # change this whenever the content changes
reviewStatus: not-reviewed       # change to "reviewed" once signed off
reviewedBy: Dr Name, PHSANZ      # add when reviewed
reviewedOn: 2026-11-30           # add when reviewed
sources:
  - title: Source name
    url: https://example.org
next:                            # optional link to the next page
  label: Diagnosis and tests
  href: /diagnosis-and-tests/
---
```

Other files you may need:

| File | What it holds |
|---|---|
| `src/site.ts` | Main navigation and the help-line numbers |
| `src/data/centres.json` | Specialist centre list |
| `src/pages/index.astro` | Home page |
| `src/styles/global.css` | Colours, fonts and layout |
| `public/` | Logo, favicon and social sharing image |

Write links between pages from the site root, e.g. `[What is PH](/what-is-ph/)`. The build adjusts them for wherever the site is hosted.

## Running it locally

Requires Node.js 22.23.4 or later (24 recommended).

```bash
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # type-check and build to dist/
```

To build for a subfolder (as on GitHub Pages), set `BASE_PATH`, e.g. `BASE_PATH=/phanavigator/ npm run build`.

## Hosting

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/pages.yml`). CI checks every push and pull request builds cleanly (`.github/workflows/ci.yml`).

The site is fully static, so it can move to Cloudflare Pages or any static host later with the same build command (`npm run build`, output folder `dist`).
