# Release notes

## v2.1 — Original look restored, desktop layout (25 October 2026)

v2.0 rebuilt the site with a plainer design than the original. This release brings the original look back on the new build and makes better use of wide screens.

### Decisions
- **Keep the original design.** The strip-back was about content and features, not the look.
- **Scale for desktop, keep text readable.** Pages use the full width on large screens, but body text stays at a comfortable reading width; the extra space holds a sidebar instead.

### Changed
- Brand blue headings, coral "— together." and the "I'm newly diagnosed" / "Find a specialist" buttons back on the home page, with the soft background shapes and a large logo on desktop.
- "New to PH Navigator?" panel and coloured-border cards back on the home page.
- Bold coral help banner back, in a slightly deeper coral so white text is readable. Still can't be dismissed.
- Sticky header, and the navy footer with the teal top border.
- Content pages: full-width grey page header, "Step x of 5" labels, accordions for the five PH groups and medicine types, numbered timeline for diagnosis, and question lists as tick-box cards.
- Wide screens: page width up to 1440px; sidebar with "On this page" links and the next step.
- Find a specialist: states laid out in columns on wide screens.
- Phone: shorter help banner wording so it takes less space.

## v2.0 — Back to basics (25 October 2026)

The site has been stripped back to a small, honest core and rebuilt. Everything removed is parked in the backlog and comes back only once its content, review and owner are in place.

### Decisions
- **Start small.** Launch with the essentials for someone recently diagnosed; add sections only when they're reviewed.
- **No unverified claims.** Nothing on the site states a partnership, endorsement, reviewer or patient story that isn't confirmed.
- **PHSANZ kept, accurately.** Named on the About page as "in discussions" about clinical review, with a clear "has not reviewed or endorsed" statement.
- **PHA Australia removed.** All references removed until involvement is confirmed.
- **Review status on every health page.** Each page shows "Not yet clinically reviewed" until a named reviewer signs it off.
- **No personal data collected.** No forms, newsletter, cookies, analytics or third-party embeds in v2.0.
- **Simple stack.** Static site, content in Markdown so non-developers can edit it.

### Kept (content ported, lightly edited for plain Australian English)
- Home — simplified to a "start here" path.
- What is PH.
- Diagnosis and tests.
- Questions for your doctor — still printable, now with tick boxes and note lines.
- Treatments — the section hub and "Treatments explained" merged into one page.
- Find a specialist — plain list grouped by state; marked "still being checked".
- Section hub pages removed; pages now sit at short top-level addresses.

### Removed (parked in the backlog)
- Medical Advisory Panel and Patient Review Panel — placeholder names, not real people.
- Community Voices stories and video — placeholder stories presented as real.
- Partnership page and "partnership between PHA Australia & PHSANZ" claims, including in the social sharing image.
- "Reviewed by the Medical Advisory Panel" and "dual review" claims.
- Resource Library — download buttons didn't link to real files.
- Living Well section (5 pages) and Caring for Someone section (4 pages).
- Understanding Test Results page.
- For Healthcare Professionals page.
- Governance checklist page — internal planning document, moved to the backlog.
- Newsletter signup — needs a privacy policy and accurate consent wording first.
- Site search, specialist map, mobile bottom nav bar, animations.
- Specialist centre phone numbers — unverified switchboards; direct PH clinic contacts to be added once confirmed.
- hello@phnavigator.org.au contact email — not set up.

### Fixed
- Help numbers now cover New Zealand (111, 1737) as well as Australia, and can't be dismissed.
- Privacy Policy and Terms links in the footer didn't go anywhere; replaced with a real Privacy and disclaimer page.
- Newsletter text said details weren't shared with third parties while sending them to Mailchimp; removed with the newsletter.
- Home page said PH has no cure; now "no cure for most types", since CTEPH can sometimes be cured.
- README said 19 specialist centres; the list has 18.

### Added
- About page stating the site's real status.
- Privacy and disclaimer page.
- Sources section on every health page (to be filled during clinical review).
- "Last updated" date on every page.

### Build and hosting
- Rebuilt with Astro as a static site; content pages are Markdown files in `src/pages/`.
- Removed the Express API server, database setup, API code generation, Replit files, mockup sandbox, Cloudflare Worker and Cloudflare Pages function.
- Website dependencies cut from 67 to 5.
- Fonts self-hosted, so visitors' browsers don't contact Google.
- GitHub Pages deploy and CI updated for the new build.
- Old page addresses (e.g. `/recently-diagnosed/what-is-ph`) are not redirected; they show a "page not found" page with a link home.

---

## v1.3 — 25 October 2026
- Moved into its own repository (`tharukaKossinna/phanavigator`) with full history carried over.
- Fixed the CI build: corrected a type error in the mockup sandbox config and added the `BASE_PATH` and `PORT` settings the build needs.
- Added a README.
- Website builds and publishes to GitHub Pages automatically on every push.

## v1.2 — 23 July 2026
- Updated the Mailchimp audience configuration for newsletter signups.

## v1.1 — 28 June 2026
- Video embed on the Community Voices page.
- Phase 1 governance checklist page, linked from Community Voices.
- Logo uses image assets instead of inline rendering.

## v1.0 — 3 May 2026 (launch)
- Full patient support site: Recently Diagnosed, Treatments, Living Well, Caring for Someone, Community Voices, About and For Healthcare Professionals sections.
- Resource Library, Find a Specialist map, newsletter signup, site-wide search, mobile navigation.
- Branding kit and logo.
- Cloudflare deployment set up (static site plus newsletter API).

## v0.1 — 27 April 2026
- Initial project setup on Replit.
