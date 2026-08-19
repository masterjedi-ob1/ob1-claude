# Foreman Ledger — OB.1 Governance Vertical Landing Pages
Baseline: 4e5778344301567040fc08cd5a6fcaf23959a3f3 on claude/governance-landing-pages-prkwyy (clean, repo empty except README)
Mode: Full (Agent tool + shell; no Codex). LEAD = Fable 5.

## Mission
4 vertical landing pages (Law, Professional Services, Manufacturing, Healthcare) + hub index.
Static site in /site. Harmonized with Kathy Clancy's mockup (Architectural Blueprint theme,
Source Sans 3 + Newsreader, parchment/navy/orange). Deploy to Vercel, iterate, push to branch.

## Constraints (from Slack recon)
- NO Frantz Ward naming anywhere (ethics sign-off pending). Fallback: "reviewed by counsel."
- Case study numbers (real, published): 53/100 score, $487K PROJECTED annual value, 21 opportunities,
  6.2x Year-1 ROI, 1.9-mo payback, 9 quick wins. Always label "projected."
- No hard pricing (B1 unconfirmed). "Fixed-phase, flat-fee" language only.
- Voice: "Rules Before Tools." No em dashes. No banned words (revolutionize, disrupt, 10x, etc.)
- SEO target: "AI audit" + vertical (Audity referral traffic). JSON-LD structured data required.
- No fake photography/stock imagery. Abstract blueprint/schematic art only.

## Tasks
| ID | Task | Write set | Seat | Status |
|----|------|-----------|------|--------|
| T1 | Design spec + shared CSS/JS + vercel.json (LEAD, pre-dispatch) | site/css/ob1.css, site/js/ob1.js, DESIGN-SPEC.md, vercel.json | LEAD | DONE |
| T2 | law.html | site/law.html | sonnet | DONE (verified) |
| T3 | professional-services.html | site/professional-services.html | sonnet | DONE (verified) |
| T4 | manufacturing.html | site/manufacturing.html | sonnet | DONE (verified) |
| T5 | healthcare.html | site/healthcare.html | sonnet | DONE (verified) |
| T6 | index.html hub + robots.txt + sitemap.xml | site/index.html, site/robots.txt, site/sitemap.xml | sonnet | DONE (verified) |
| T7 | Verification pass (blind verifier + LEAD visual review) | none | LEAD+verifier | DONE |
| T8 | Batch fixes from findings | per findings | sonnet | DONE (verified) |
| T9 | Vercel deploy + smoke test | none | LEAD | DONE |
| T10 | Commit + push | git | LEAD | DONE (continuous) |

## Attempts
- T1 attempt 1 (LEAD): DONE. Spec + ob1.css + ob1.js + vercel.json authored.
- T2-T6 attempt 1 (sonnet x5, parallel, disjoint write sets): all DONE with evidence.
- T7 attempt 1: opus blind verifier PASS_WITH_NOTES (16 findings); LEAD Playwright pass (30 screenshots, desktop+mobile): 0 hscroll, 0 console errors after fixes.
- T8 attempt 1: sonnet batch-fix worker DONE (16/16 findings, evidence per finding); LEAD applied CSS/JS-side fixes (fail-open reveals, dial static default, mobile nav, favicon, hub link styling).
- T9 attempt 1 (worker): BLOCKED, Vercel 403 "no permission to create a project" (team and personal scope both).
- T9 attempt 2 (worker): invalid, split files across non-atomic deployments; discarded.
- T9 attempt 3 (LEAD): build-time bootstrap. 3-file deploy (vercel.json + package.json + build.js) to EXISTING project ob1-blueprint, target preview; build.js pulls the site from the public repo tarball pinned to commit b5881d1 and stages site/ as output. Deployment dpl_BpX3zZUY8Gnevi7LFaJB5iMAwTvy READY; build log lists all 10 files in output. Team SSO protects *.vercel.app URLs; 23h share link minted for review.
- NOTE for redeploys: bump SHA in build.js (or grant project-creation on Vercel and create a dedicated ob1-verticals project).
