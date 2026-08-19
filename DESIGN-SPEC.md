# OB.1 Vertical Landing Pages — Design & Build Spec (v1)

Static site in `/site`. Shared system: `css/ob1.css` (design tokens + components) and `js/ob1.js`
(motion engine). Pages are plain HTML using those shared assets. Vercel serves with clean URLs
(`/law`, `/healthcare`, `/manufacturing`, `/professional-services`).

## Brand (non-negotiable)
- Canvas parchment `#F5F0E8`, structure Blueprint Navy `#0D1B2A`, accent Sunset Orange `#D97757` (max ~15% of surface).
- Fonts (Google): Newsreader (display serif), Source Sans 3 (body), JetBrains Mono (drafting annotations).
  Load: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` then
  `https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap`
- Voice: straightforward, confident, calm, Midwest practical. Tagline "Rules Before Tools."
- NEVER: em dashes in copy; words revolutionize/disrupt/10x/game-changing/bleeding edge/synergy/thought leader/paradigm shift/best-in-class/next-generation.
- NEVER name Frantz Ward or any law firm partner. Say "reviewed by counsel" / "counsel-gated."
- No stock or photographic imagery. All visuals are inline SVG blueprint schematics + CSS.
- Case study numbers must always read as the anonymized manufacturing audit, "projected":
  score 53/100 · $487K projected annual value · 21 opportunities · 6.2x projected Year-1 ROI · 1.9-month payback · 9 quick wins.
- No dollar pricing anywhere. Say "fixed-phase, flat-fee engagement, scoped in one call."
- Footer: `OB.1 AI Solutions · Cleveland, Ohio · admin@ob1ai.co · (234) 602-0500` + tagline "RULES BEFORE TOOLS" (class `foot-tag`) + `© 2026 OB.1 AI Solutions`.

## The aesthetic concept: "The Audit Sheet Set"
Each vertical page is composed like a set of architectural drawing sheets for that industry's
governance blueprint. Section headers use a huge outlined serif sheet number (`.sheet-no`, e.g. "02")
plus a mono `.titleblock` (like a drawing title block: SHEET / TITLE / SCALE / DATE / DRAWN BY OB.1).
Hero has `.cropmarks` corners, a `canvas.hero-canvas` particle field behind content, and a
custom inline SVG schematic that draws itself on scroll (`.schematic` + paths with class `draw`,
labels as `<text>` in mono). The scorecard card sits in `.tilt-wrap > .tilt` for pointer 3D tilt.

## Page skeleton (identical order on all 4 vertical pages)
1. `nav.ob1` — logo `OB<span>.1</span> AI SOLUTIONS` links: Home (`/`), the 4 verticals (current page `aria-current="page"`), CTA `GET YOUR READINESS SCORE` → `https://ob1ai.co/services`.
2. **HERO** (`header.hero.grid-bg`, id="top"): canvas particle field + cropmarks. Left: `.eyebrow` (e.g. "AI Audit · Law Firms"), H1 (industry-emotive, governance-first), `.lede`, `.btn-row` [`Get Your AI Readiness Score` primary → https://ob1ai.co/services, `Talk to Chris` ghost → mailto:chris@ob1ai.co]. `.micro` supporting line. Right: `.tilt-wrap > .scorecard.tilt` with dial (`data-score` = industry-flavored readiness dimension, use 53 baseline), 3 `.finding` rows with `[data-count]` numbers, `.sc-foot` naming the six audit dimensions and "anonymized manufacturing audit, projected figures."
3. **TICKER** (`.ticker`): regulatory/framework marquee, industry-specific tokens separated by `<em>·</em>`. Duplicate the sequence twice (`.ticker-seq` x2) so the loop is seamless.
4. **SHEET 01 · THE STAKES** (light section): sheet-head + h2 + lede + 3-4 `.ledger` rows of the industry's specific AI risk moments (each `.ledger-row`: `.no` code like "R-01", `b` risk title, `span` consequence). Include the industry's real regulatory hooks.
5. **SHEET 02 · THE AUDIT** (light): what the AI audit covers for THIS industry. Use `.controls`-style or ledger; describe the 82-point, six-dimension diagnostic (business context, technology maturity, automation opportunities, data infrastructure, decision authority, investment readiness) with industry framing. Include the inline SVG schematic here or in hero (at least one big schematic per page, industry-specific linework: Law = scales/columned facade + document flow; Healthcare = ward floorplan + vitals trace; Manufacturing = plant floorplan + conveyor/CNC linework; ProServ = org chart + engagement workflow).
6. **SHEET 03 · TWO DOORS** (`.doors`): Operational Blueprint (one-time) vs Governance-as-a-Service (continuous). Adapt bullet copy to industry.
7. **SHEET 04 · FIVE CONTROLS** (`.controls`, 5 `.control` cards): Trusted Data, Right-Sized Access, Guardrails, Human Escalation, Full Audit Trail — each example rewritten in industry terms (e.g. Law: "a matter number it may not open"; Healthcare: "PHI it may never surface").
8. **SHEET 05 · WHEN MODELS MOVE**: Governance Rider + Covered Hours as two `.door` cards (rider = in every build contract; covered hours = in every GaaS quarter) + 2-3 `details.faq` on model deprecation/behavior drift/new regulation, industry-flavored.
9. **SHEET 06 · PROOF** (`.case-panel` navy): the anonymized manufacturing case study with `.case-stats` count-ups (53, $487K use data-prefix="$" data-suffix="K", 6.2x decimals=1 suffix="x", 1.9 payback). Frame: "different industry, same discipline" on non-manufacturing pages; Manufacturing page owns it natively. One line: counsel-gated industry rubric exists for THIS industry (cite its regimes). Mention "featured by Audity, the AI readiness assessment platform" once.
10. **SHEET 07 · STRAIGHT ANSWERS**: 4-5 `details.faq`, industry-specific questions a buyer actually types (align with "AI audit for [industry]" search intent). First one `open`.
11. **CTA band** (`.cta-band.grid-bg.on-dark`): serif question headline speaking to that executive's fear/duty, sub, buttons [primary Readiness Score, ghost Talk to Chris]. Include the rotating `.compass` SVG (simple compass rose, stroke `#4A7FB5`).
12. `footer.ob1`.
13. Optional `.rail` dot nav targeting section ids s1..s7.

## Per-vertical direction

### law.html — "AI Audit for Law Firms"
Regulatory spine: ABA Model Rule 1.1 Comment 8 (tech competence), 1.6 (confidentiality), 5.3 (supervision of nonlawyer assistance), privilege + work product, court sanctions for hallucinated citations, state bar AI ethics opinions. Audience: managing partners of mid-market firms. Fear: an associate pastes client facts into a public chatbot; a filing cites a case that does not exist. Hero angle: "The standard of care now includes the tools you have not vetted." Ticker tokens: ABA 1.6 · ABA 5.3 · MODEL RULE 1.1 C.8 · PRIVILEGE · WORK PRODUCT · E-DISCOVERY · STATE BAR OPS. One tasteful line for podcast listeners: "For listeners of the Shoveling Smoke podcast: this page is the practical half of that conversation." (no firm names).

### professional-services.html — "AI Audit for Professional Services Firms"
CPAs, consultancies, agencies, engineering firms. Spine: client confidentiality clauses, AICPA confidentiality + peer review, GLBA Safeguards for financial data, E&O exposure, engagement letters silent on AI, work-product integrity (a deliverable your name is on, drafted by a model nobody supervised). Fear: billing for judgment while shipping unreviewed model output; client data crossing into consumer AI tools. Hero angle: "Your product is judgment. Prove it is still yours."

### manufacturing.html — "AI Audit for Manufacturers"
Spine: CMMC 2.0 (DoD supply chain), ITAR/EAR export-controlled technical data, CUI handling, IEC 62443 OT security, ISO 9001 quality records, OT/IT convergence, predictive maintenance + scheduling agents on the floor. This page OWNS the case study (53/100 etc.) as its native proof: "We scored a shop like yours." Audience: owner/president of a 50-500 person shop, Great Lakes corridor. Hero angle: "You would never run an uncalibrated machine. Your AI is uncalibrated."

### healthcare.html — "AI Audit for Healthcare Organizations"
Spine: HIPAA Privacy/Security (PHI in prompts), minimum necessary, BAAs that don't cover model vendors, 21 CFR Part 11 records, FDA SaMD line (when a tool becomes a device), OCR enforcement, patient trust. Audience: executives of provider groups, digital health, med-adjacent orgs (not hospitals' IT dept). Hero angle: "First, do no harm now includes what your models do unsupervised."

## SEO / structure (every page)
- `<title>AI Audit for [Vertical] | OB.1 AI Solutions · Rules Before Tools</title>`
- meta description (150-160 chars, includes "AI audit" + industry + "AI governance"), canonical `https://ob1ai.co/[slug]`, OG + twitter tags (og:image omit or use none; no external images).
- JSON-LD: one `ProfessionalService` block (OB.1 AI Solutions, Cleveland OH, url, email, telephone, areaServed Ohio/US, sameAs auditynow.com omitted) AND one `FAQPage` block mirroring the FAQ items exactly.
- Semantic HTML5, single h1, alt/aria on decorative SVG (`aria-hidden="true"`), lang="en".
- All links between verticals relative clean URLs: `/law`, `/healthcare`, `/manufacturing`, `/professional-services`, home `/`.

## Quality bar
- Zero horizontal scroll at 360px, 768px, 1280px, 1600px.
- Works with JS disabled (content visible; `.reveal` has no-JS fallback: include `<noscript><style>.reveal{opacity:1;transform:none}</style></noscript>`).
- No console errors. No external assets except Google Fonts.
- Copy: tight, confident, no filler. Every section earns its place. Kathy's rule: cut copy 50%, headlines carry.
