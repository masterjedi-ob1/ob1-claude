# HANDOFF: OB.1 Industry Vertical Landing Pages

**Status:** Built, verified, deployed. Awaiting review + three business decisions.
**Branch:** `claude/governance-landing-pages-prkwyy` · **PR:** [#1](https://github.com/masterjedi-ob1/ob1-claude/pull/1) · **Head:** `da1bf45`
**Built by:** Claude (Fable 5) via Claude Code, orchestrated with `/fable-foreman`
**Date:** August 19, 2026

---

## 1. What this is

Four enterprise, vertical-specific landing pages plus a hub, built to catch the two traffic waves
Chris flagged in #ob1-website on Aug 16:

1. **Shoveling Smoke podcast** listeners (RSM cyber risk + compliance audience)
2. **Audity referral traffic** searching "AI readiness assessment" / "AI audit" that Audity cannot service

Every page is built around the search intent **"AI audit for [industry]"** and routes to the readiness
score CTA.

| Sheet | Page | Route | Audience |
|---|---|---|---|
| LAW-01 | Law Firms | `/law` | Managing partners, mid-market firms |
| PSV-02 | Professional Services | `/professional-services` | CPAs, consultancies, agencies, engineering firms |
| MFG-03 | Manufacturers | `/manufacturing` | Owner/president, 50-500 person Great Lakes shops |
| HCR-04 | Healthcare | `/healthcare` | Provider groups, digital health, med-adjacent |
| 00 | Hub ("The Flat File") | `/` | Entry point, routes to all four |

---

## 2. 🔴 HIGHLIGHTS — read these first

### 2.1 Three open decisions blocking production launch

| # | Decision | Owner | Current state in code |
|---|---|---|---|
| **B1** | **Price anchor.** No dollar figure appears anywhere. | Chris | Copy reads "fixed-phase, flat-fee engagement, scoped in one call." Drop the number in and it ships. |
| **B4** | **Counsel partner naming.** Frantz Ward is named nowhere on any page. | Chris (ethics sign-off) | Fallback language in use: "counsel-gated," "reviewed by counsel." Swap in the firm name after sign-off. |
| **Host** | **Where this lives.** Currently a Vercel preview, not production. | Chris | See §5. Needs a project-creation grant or a decision to fold into ob1ai.co. |

### 2.2 Guardrails deliberately held (do not undo without checking)

- **No stock photography, no AI-generated imagery.** Every visual is hand-built inline SVG blueprint
  linework plus CSS. This directly honors Kathy's "REAL photos needed, no stock, no AI imagery" note
  in the mockup. Where real photography belongs later (Chris, team, client sites), the layout has room.
- **Case-study numbers are always labeled "projected."** The only figures used are the published
  anonymized manufacturing audit: **53/100 · $487K projected annual value · 21 opportunities ·
  6.2x projected Year-1 ROI · 1.9-month payback · 9 quick wins.** Nothing else is asserted.
- **No invented clients, quotes, or statistics.** One drafted claim about client mix was caught in
  review and cut.
- **No em dashes, no banned hype words** (per `ob1-brand-theme` voice rules).

### 2.3 Kathy's mockup decisions carried forward

This build treats `ob1-site-mockup.html` (Aug 17) as the design source of truth. Specifically kept:

- **Architectural Blueprint theme** confirmed as the client-facing canonical (parchment canvas, navy
  structure, sunset orange accent under 15%).
- **Source Sans 3 + Newsreader** type pairing, including the readability sizing bump.
- **Data-viz scorecard hero** with the animated 82-point dial.
- **Governance Rider + Covered Hours** — Kathy's answer to "how do we stay closer to the dog than the
  tail" — is now a standing section (Sheet 05) on all four pages, with model-deprecation, behavior-drift,
  and new-regulation FAQs.
- **"Cut the copy 50%, let headlines carry."** Every section is tight. Sheets earn their place.
- **CTA in the hero, up top**, per Kathy's July note.
- **JSON structured data for AI-readable indexing**, per Chris's note to Kathy: every page ships
  `ProfessionalService` + `FAQPage` JSON-LD.

---

## 3. The design system: "The Audit Sheet Set"

The creative concept extends the blueprint brand from a color palette into a **structural metaphor**:
each page is composed like a set of architectural drawing sheets for that industry's governance blueprint.

**Shared assets** (one system, five pages):
- `site/css/ob1.css` — design tokens + every component
- `site/js/ob1.js` — motion engine, zero dependencies

**Techniques used:**

| Element | What it does |
|---|---|
| Sheet numerals + title blocks | Giant outlined serif numbers (01-07) with mono drawing-title blocks (SHEET / TITLE / SCALE / DATE / DRAWN BY) |
| Crop marks | Drafting-sheet corner registration marks framing each hero |
| Particle drafting field | Live `<canvas>` plotter-point field with connective linework behind hero content |
| Self-drawing schematics | Industry-specific inline SVG that draws its own strokes on scroll, then fades in mono labels |
| 3D tilt scorecard | Pointer-tracked perspective tilt on the readiness card |
| Animated dial + count-ups | 82-point dial arc sweeps to 53; stat numbers count up with cubic easing |
| Regulatory ticker | Infinite marquee of that industry's actual compliance regimes |
| Section rail | Fixed dot navigation tracking scroll position through the seven sheets |

**The four schematics** (each hand-drawn in SVG, industry-authentic):
- **Law** — classical courthouse facade elevation beside a privilege/supervision flow (intake → AI draft → privilege boundary → counsel review → filed)
- **Professional Services** — engagement workflow with client data passing an engagement-letter node, an AI drafting zone wrapped in a dashed E&O boundary, and a partner review gate
- **Manufacturing** — plant floorplan with CNC cells, conveyor line, CUI vault, and a dashed OT/IT governance perimeter
- **Healthcare** — clinic ward floorplan with exam rooms and records room, over a continuous ECG-style vitals trace

---

## 4. Regulatory spine per vertical

Each page is grounded in that industry's real compliance regimes, not generic AI-policy talk.

- **Law:** ABA Model Rule 1.1 cmt. 8 (tech competence), 1.6 (confidentiality), 5.3 (supervision of
  nonlawyer assistance), privilege + work product, state bar AI ethics opinions, sanctions for
  hallucinated citations
- **Professional Services:** AICPA confidentiality + peer review standards, GLBA Safeguards Rule,
  E&O exposure, engagement letters silent on AI, work-product integrity
- **Manufacturing:** CMMC 2.0, ITAR/EAR, CUI handling, NIST 800-171, IEC 62443 (OT/IT), ISO 9001
  quality records, supply-chain flowdown
- **Healthcare:** HIPAA Privacy + Security, minimum necessary, BAA coverage gaps, 21 CFR Part 11,
  FDA SaMD line, OCR enforcement

---

## 5. Deployment

**Live preview:** https://ob1-blueprint-9pis884ir-ob1ai.vercel.app
**Share link (bypasses SSO, expires Aug 24 ~6:21 PM UTC, then goes stale (see note below)):**
https://ob1-blueprint-9pis884ir-ob1ai.vercel.app/?_vercel_share=to6MwMOyfhFQJ13BdzYAP3fNF3bFkoMc

Routes: `/` · `/law` · `/professional-services` · `/manufacturing` · `/healthcare`

> **Link status (Aug 23):** automated refreshes have stopped. Vercel share links last ~23 hours, so
> this one lapses Aug 24 and the preview then requires a Vercel login (team SSO protects
> `*.vercel.app`). Anyone on the team can mint a new one from the Vercel dashboard, or ask Claude to.
> The offline copies in `share/` never expire and need no login.

**⚠️ Why this is a preview and not production:** the connected Vercel account returned
`403 forbidden: You don't have permission to create a project` in both team and personal scope, so a
dedicated `ob1-verticals` project could not be created. The site is deployed as a **preview** on the
existing, parked `ob1-blueprint` project. Nothing existing was overwritten. Team SSO protects
`*.vercel.app` URLs, which is why the share link is needed.

**To promote to production, either:**
1. Grant the connected Vercel account project-creation rights (or have an admin create an empty
   `ob1-verticals` project), then redeploy cleanly with a public URL, **or**
2. Fold `site/` into the main ob1ai.co deployment as `/law`, `/professional-services`, etc.

The deploy uses a build-time bootstrap (`build.js`) pinned to commit `b5881d1`. **On redeploy, bump
that SHA** or the build will serve stale content.

---

## 6. Verification performed

| Check | Result |
|---|---|
| Independent blind verifier (fresh context, given the original spec) | PASS_WITH_NOTES, 16 findings, all fixed with evidence |
| Playwright render pass, desktop 1440px + mobile 390px, all 5 pages | 30 screenshots, **0 horizontal scroll**, **0 console errors** |
| Brand compliance grep (Frantz / em dash / banned words / pricing) | 0 hits across all pages |
| JSON-LD validity | All 10 blocks parse; FAQPage answers match on-page copy verbatim |
| No-JS degradation | All content visible, real number fallbacks, dial reads 53% not 100% |
| Reduced motion | Full `prefers-reduced-motion` support |
| Accessibility | Single h1/page, decorative SVG `aria-hidden`, labeled rail nav |

Findings fixed included: meta description lengths, JS-off count-up fallbacks reading "0",
FAQ JSON-LD parity, mobile nav hiding all links, an invented client statistic, and a realized-vs-projected
wording slip.

---

## 7. Repo layout

```
site/
  index.html                    hub ("The Flat File")
  law.html
  professional-services.html
  manufacturing.html
  healthcare.html
  css/ob1.css                   design system
  js/ob1.js                     motion engine
  robots.txt
  sitemap.xml
vercel.json                     cleanUrls, security headers
DESIGN-SPEC.md                  full build contract: brand rules, page skeleton, per-vertical direction
HANDOFF.md                      this file
.foreman/ledger.md              orchestration audit trail
```

**To view locally:** clone, then `cd site && python3 -m http.server 8000` and open `localhost:8000`.
(Opening the `.html` files directly by double-click also works, though clean-URL links between pages
will need the `.html` suffix.)

---

## 8. Suggested next steps

1. **Kathy:** review copy + design against the mockup intent. Flag anything off-brand or off-voice.
2. **Chris:** land B1 (price anchor) and B4 (counsel naming), then those two edits ship immediately.
3. **Hosting decision** per §5, then promote to production with real URLs.
4. **Then:** Google Search Console submission (Kathy's Aug 17 ask), and point the Audity referral
   path and the podcast show notes at the matching vertical.
5. **Optional additions:** real photography where the layout allows, and a fifth vertical if Insurance
   or Banking warrants one (the system takes a new page cleanly).
