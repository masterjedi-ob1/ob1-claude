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
| T2 | law.html | site/law.html | sonnet | DISPATCHED |
| T3 | professional-services.html | site/professional-services.html | sonnet | DISPATCHED |
| T4 | manufacturing.html | site/manufacturing.html | sonnet | DISPATCHED |
| T5 | healthcare.html | site/healthcare.html | sonnet | DISPATCHED |
| T6 | index.html hub + robots.txt + sitemap.xml | site/index.html, site/robots.txt, site/sitemap.xml | sonnet | DISPATCHED |
| T7 | Verification pass (blind verifier + LEAD visual review) | none | LEAD+verifier | PENDING |
| T8 | Batch fixes from findings | per findings | sonnet | DISPATCHED |
| T9 | Vercel deploy + smoke test | none | LEAD | PENDING |
| T10 | Commit + push | git | LEAD | PENDING |

## Attempts
- T1 attempt 1 (LEAD): DONE. Spec + ob1.css + ob1.js + vercel.json authored.
- T2-T6 attempt 1 (sonnet x5, parallel, disjoint write sets): dispatched.
