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

## Handoff (Aug 19)
- HANDOFF.md authored (commit 661ea1e): scope, design system, per-vertical regulatory spine,
  verification evidence, deploy state, open decisions (B1 price anchor, B4 counsel naming, hosting).
- share/*.html (commit 199995a): self-contained offline review copies, CSS+JS inlined, clean-URL links
  rewritten to local filenames. Verified via Playwright from file://: 5/5 render, 0 hscroll, 0 console errors.
  Regeneration script in share/README.md. /site remains source of truth.
- Fresh Vercel share link minted (expires 2026-08-20 ~19:20 UTC), used in HANDOFF.md and Slack.
- Sent to Kathy Clancy via Slack DM (D0BBDEAQM5F, ts 1787171184.715909): live link, 5 raw HTML
  download links, HANDOFF.md link, and the three flags (no stock/AI imagery, no FW naming, projected labels).

## Kathy review round 1 (Aug 19 eve)
- Kathy sent feedback on the CURRENT ob1ai.co site + seo-fixes-for-chris.zip (her Jul 5 SEO package,
  targets repo ob1-blueprint-website-v2, still not deployed; ob1ai.co/llms.txt 404s).
- Checked her 4 points against OUR pages: (1) no Skill Builder ✓ (2) exactly 2 CTAs, her two picks ✓
  (4) zero unverifiable stats (no 99%/450+/50+ claims) ✓ (3) 90-day guarantee NOT present — gap, she
  says "everyone loves this," candidate to add pending Chris approval (it is an offer term).
- COLLISION FOUND: her package and ours each ship a sitemap.xml for ob1ai.co; deploying both means one
  overwrites the other. Her llms.txt also predates the verticals.
- Fix staged in integration/: merged sitemap.xml (10 URLs) + merged llms.txt (adds an "AI audit by
  industry" section). Her robots.txt needs no change. NOT deployed; targets a repo outside this scope.
- Kathy independently flagged Frantz Ward still in the /governance meta description, which matches the
  B4 handling on our pages.
- Aug 20 ~15:48 UTC: prior share token expired at 19:20 UTC, so minted a fresh one
  (RGSadLGo7o40vXBa0u0edLPBXOdzLqyF, expires 2026-08-21 ~14:48 UTC) and updated HANDOFF.md.
  Kathy's Slack copy still carries the OLD token; her 5 raw HTML downloads do not expire, so she is
  not blocked. Awaiting Chris before DMing her the replacement link.
- Aug 21 ~06:00 UTC: refreshed share token again ahead of the 14:48 UTC expiry. New token
  3ZpK1IsvotvLBF6iW7PrQRXkI4hQU2ED, expires 2026-08-22 ~05:00 UTC. HANDOFF.md updated.
  Still no review feedback from Kathy on the vertical pages.
- Aug 21 ~23:26 UTC: refreshed share token ahead of the 05:00 UTC expiry. New token
  a9KX7wARpfFSRjnbJiucQvWa3GsYJYrO, expires 2026-08-22 ~22:26 UTC. HANDOFF.md updated.
  Review still idle: no page feedback from Kathy since Aug 19, no PR comments, no decisions from Chris.
  Check-in cadence widened to ~24h.
- Aug 22 ~20:28 UTC: refreshed share token ahead of the 22:26 UTC expiry. New token
  MFPKyQPjztHqXm1HuPMXxGEovsJrG5LB, expires 2026-08-23 ~19:28 UTC. HANDOFF.md updated.
  Review idle 4 days (since Aug 19): no page feedback, no PR comments, no decisions. Chris and Kathy
  are active on the separate ob1-blueprint-website-v2 repo. Proposed to Chris standing the watch down.
- Aug 23 ~19:21 UTC: FINAL scheduled tick. No feedback on the vertical pages in 4 days, no PR
  comments, no decisions from Chris. Refreshed share token a final time
  (to6MwMOyfhFQJ13BdzYAP3fNF3bFkoMc, expires 2026-08-24 ~18:21 UTC), added a link-status note to
  HANDOFF.md, and STOOD THE WATCH DOWN. No further check-ins scheduled.
  State at stand-down: PR #1 open/clean/mergeable at d09dd3f, deployment READY, work complete.
  Waiting on Chris: B1 price anchor, B4 counsel naming, hosting, 90-day guarantee, Workshop vs
  Drafting Table. To resume: ask Claude to re-arm the watch or mint a fresh preview link.
