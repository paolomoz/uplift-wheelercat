# Stardust skill improvements (tracked from this project)

Running notes on things that came up during the wheelercat.com engagement that the stardust pipeline should learn from. Each item is a concrete change to a skill spec or reference file.

---

## 1. `extract`: capture full per-section body innerText (high priority)

**Symptom.** When prototyping `customer-value-agreements`, the per-page JSON had `wordCount: 566` but the live page has roughly 4-5× that. Headings, CTAs, meta description, and landmarks innerText were captured cleanly, but the descriptive marketing paragraphs that explain each plan tier / value-prop / sub-feature did NOT land in any structured field. Only nav-chrome innerText showed up under `landmarks[].innerText`.

**Impact.** Downstream prototype can't render verbatim because the prose isn't captured. The user (client engagement context) reasonably expects to use the brand's own copy as ground truth — for both verbatim rendering AND as the source the direction-authorized rewrites tweak from. Without it we're either fabricating direction-authorized content from headings + metaDescription (drifts from real voice) or shipping placeholder shells.

**Recipe gap.** Per `playwright-recipe.md § Capture list 7` ("full innerText per section, structured body[], lists, FAQ Q/A pairs"), this SHOULD be captured. But the implementation appears to be capturing only landmark-level innerText (which for content pages is the `<main>` wrapper, and even then only some sections).

**Recommended fix.** Extend Capture 7 in `playwright-recipe.md` to walk every `<section>` (or `[data-section]` if present) in `<main>` and emit a structured `bodies[]` array on the per-page JSON:

```json
"bodies": [
  {
    "sectionSelector": "section.wysiwyg.section-padding:nth-of-type(2)",
    "sectionTitle": "PICK A PLAN THAT FITS YOUR BUSINESS NEEDS",
    "paragraphs": ["<p1 innerText>", "<p2 innerText>", ...],
    "lists": [{ "type": "ul", "items": ["...", "..."] }],
    "rawInnerText": "<full innerText of section>"
  }
]
```

That gives downstream `prototype` real text to render verbatim or tweak. Place the bodies emission after Capture 7-bis (the testimonial/quote walk) so it composes with existing structure.

**Status.** Worked around for `/customer-value-agreements/` by writing a targeted `mine-bodies.mjs` Playwright script (`stardust/current/_mine-bodies-cva.mjs`) that captures bodies into `customer-value-agreements.bodies.json`. Same script could become a recipe extension `--mine-bodies` flag on `stardust:extract --refresh`.

---

## 2. `prototype`: direction-authorized rewrites should be tweaks of verbatim (process improvement)

**Observation.** During the CVA prototyping session, the user clarified that even direction-authorized rewrites should be visible tweaks of the captured verbatim — not synthesis from headings + metaDescription. Reason: the brand owner sees rewrites side-by-side with their own current copy and can immediately judge whether the redesign "stays on brand" or drifts.

**Implication.** The `direction-authorized` classification in `_provenance.voiceClassification[]` should optionally carry a `tweakedFrom: "<captured-verbatim-string>"` field that documents what the rewrite was based on. The migrate-guard then has provenance proving the rewrite is a defensible adaptation, not invented prose.

**Recommended fix.** Extend `proposed-file-shell.md § Content sourcing hierarchy` to add a 5th classification tier under direction-authorized: `direction-authorized rewrite (tweak)` with the required `tweakedFrom` field. Shape briefs can declare this per-section.

**Coupling.** Depends on Item 1 above — can't tweak from verbatim until verbatim is captured.

---

## 3. `prototype`: client-engagement default for content sourcing (low priority)

**Observation.** Stardust's default content-sourcing posture treats placeholder use as safe and verbatim use as preferred. For private client engagements that's right. For public-portfolio uses of the same artifacts (e.g. a publicly-pushed presales repo), the default should flip — captured content needs an attribution or copyright caution.

**Recommended fix.** Add a `runMode` field to `state.json` (one of `client-engagement | portfolio | study`) that gates downstream behavior:
- `client-engagement`: verbatim allowed everywhere; rewrites optional
- `portfolio`: rewrites preferred; verbatim limited to short structural elements (headings, CTAs, meta); marketing paragraphs default to PLACEHOLDER unless user overrides
- `study`: same as portfolio + license-noting required in any README

Not blocking; nice-to-have once the runtime picks a posture.

---

---

## 4. `prototype`: archetype granularity often needs sub-tiers (surfaced by canon-propagation testing)

**Symptom.** When the CVA prototype was approved, its fold-back declared a `program-template` tier with four canon items (split-lockup hero, plan-tier card grid with `most_popular` flag, value-prop horizontal rail, image-text alternation). On the very next program-typed page (`/service/`), only 2 of the 4 actually propagated. Plan-tier card grid + value-prop rail are specific to **paid programs with comparable tiers** (CVA, future Cat Connect, possibly Used Equipment inspection programs); service-overview pages don't have tiers and don't have a single flagship section.

**Impact.** Without a granularity correction, every subsequent program-typed page would either (a) forcibly inherit canon that doesn't fit and produce off-brand pages, or (b) skip the canon silently and lose the propagation discipline. The "program-template" label collapses two structurally different patterns under one name.

**Recommended fix.** Add a discipline to `prototype.md` § Fold-back: **the second fork of any archetype is expected to surface a rescope.** The shape brief for the second-fork page should include a § "Propagation findings" section that explicitly enumerates which canon items propagate vs which require a new sub-tier. If a sub-tier is needed, the fold-back on approval rescopes the original canon (e.g., `program-template` → `tiered-program-template`) and the remaining items stay at the parent tier. Future forks then inherit from the correct sub-tier.

**Status.** Surfaced via /service/ propagation test. Manually documented in service-shape.md § "Propagation findings" and folded into /service/'s draft fold-back (when approved). Skill spec change not yet applied — this is the trigger to do so.

**Coupling.** Goes with item 7 below (shape brief is the load-bearing artifact for repeatable craft delegations).

---

## 5. `prototype`: em-dash auto-substitution in captured prose should be canonical

**Symptom.** Captured marketing prose contains em-dashes that violate impeccable's absolute "no em dashes" ban. Two instances surfaced in this project so far:
- CVA Premium Service lead: *"one thing is for sure—the best way to stay ahead"* (substituted to colon: *"one thing is for sure: the best way to stay ahead"*)
- /service/ Cat Card body: *"exclusive special offers — all tailored"* (substituted to comma: *"exclusive special offers, all tailored"*)

Both cases were caught during rendering and substituted, but the substitution is currently a per-render ad-hoc decision documented loosely in the file's voiceClassification.

**Impact.** Without a canonical rule, the substitution is inconsistent (sometimes colon, sometimes comma, sometimes period — depends on author judgment of the surrounding clause grammar). Worse, the substitution might be missed entirely on a render that doesn't pre-scan captured prose for em-dashes.

**Recommended fix.** Add to `proposed-file-shell.md` § Content sourcing hierarchy a § "Em-dash substitution rule" that:
1. Mandates a pre-render scan of every captured-verbatim body field for `—` (U+2014) and ` -- ` (double hyphen).
2. Defines the substitution algorithm: parenthetical / appositive em-dash → comma; sentence-extender em-dash (where the second clause is independent) → period or colon; conjunctive em-dash where the second clause restates / completes → colon.
3. Requires the substituted file to record `voiceClassification[].substitutions: [{ original: "—", replacement: ",", location: "<selector>", rationale: "appositive em-dash" }]` so the migrate-guard can show the diff against captured source.

**Status.** Two-for-two manual substitutions in this project; no canon rule yet.

**Coupling.** Independent. Could land as a tiny addition to the proposed-file-shell.md spec.

---

## 6. `prototype`: codify "first render via craft, refinements direct-authored" policy

**Symptom.** Stardust's `prototype` skill spec says Phase 2 (render) **must** delegate to `impeccable:craft` via the Skill tool, with no fallback to direct authoring. In practice, this project followed that rule for the *first render* of each prototype (CVA, /service/) but explicitly direct-authored the *iterative refinements* (the home A-rich, /new/, and CVA refinement rounds happened by direct editing the rendered HTML, not by re-invoking craft).

The user's explicit policy: *"it's fine to not use the skill for the small refinements. I want to use the skill for the first render of every prototype."*

**Impact.** The current spec language is too strict (refuses to ship without craft on every change) and doesn't reflect a workflow that works in practice. Two-for-two craft-delegated first renders + N direct-authored refinements produced consistent, validated output. Forcing craft on every two-line edit would multiply skill invocations without value.

**Recommended fix.** Update `prototype.md` § Delegation mechanic to distinguish:
- **First render** (file does not exist OR `_provenance` is empty): MUST delegate to `impeccable:craft`. The validation contract craft enforces (anti-toolbox audit, divergence rules, type ratios, content sourcing hierarchy) is the gate.
- **Subsequent iterations** (small edits, chat-driven refinements): MAY be direct-authored against the approved canon, provided the iteration:
  1. Doesn't add a new section type or net-new component (those re-trigger craft)
  2. Doesn't alter the `_provenance.voiceClassification` or `unsourcedContent[]` shape
  3. Is recorded in the file's `_provenance.iterations[]` with author "stardust direct-author" and a one-line rationale
- **Material refactors** (new section, new component, new variant): MUST re-trigger craft

Add the iteration-recording requirement so the audit trail stays complete even when craft isn't invoked.

**Status.** User-stated policy already followed in practice; spec language hasn't caught up.

**Coupling.** Independent. Could land as a Phase 2.1 § "Iteration delegation" sub-section.

---

## 7. `prototype`: shape brief is the load-bearing artifact for repeatable craft delegations

**Symptom.** Two-for-two craft delegations in this project (CVA, /service/) produced consistent, on-brand output that passed all validators on first render. The common thread isn't the craft skill alone — both renders were preceded by a **rich, opinionated shape brief** (`<slug>-shape.md`) that pre-resolved every composition decision: section list with rationale, anti-template pass per captured pattern, surprise budget, substrate transitions, heading hierarchy with voice classification per slot, unsourced content enumeration, inheritance chain explicit, captured-source lineage per section.

Without a brief at that level of detail, craft falls back to its own composition reasoning, which (a) takes longer, (b) re-introduces decisions the project has already made, (c) produces drift across renders.

**Impact.** The repeatability of the impeccable:craft delegation flow appears to depend less on craft's internal validators and more on stardust authoring an opinionated shape brief that leaves craft a constrained creative problem rather than an open one.

**Recommended fix.** Add to `prototype.md` § Phase 1 a stronger contract on the shape brief:
1. Promote § "Anti-template pass" from optional/recommended to **mandatory** for any prototype that forks an archetype (the table at the top of CVA-shape.md and service-shape.md is the model).
2. Promote § "Heading hierarchy + voice classification per slot" from soft-recommended to **mandatory** — without this table, the renderer can't enforce content sourcing per-element.
3. Add § "Inheritance chain" as **mandatory** — explicit named list of which approved files contribute which patterns.
4. Add § "Propagation findings" as **mandatory when forking an archetype** (couples with item 4 above).

Make Phase 1 refuse to proceed to Phase 2 if any of the four are missing. This trades a bit of brief-authoring time for a large reduction in craft-render variance.

**Status.** Empirically validated 2×; spec language is softer than the practice.

**Coupling.** Sits on top of item 4 (sub-archetypes / propagation findings) and item 6 (when craft is invoked vs not).

---

## 8. `prototype`: fork shape briefs must include § "Propagation findings"

**Symptom.** The CVA fold-back declared 4 program-template canon candidates. The /service/ shape brief opened with an explicit § "Propagation findings" table enumerating which 2 of the 4 actually fit /service/ and why the other 2 didn't. That table was the most useful artifact of the entire propagation test — it made the canon rescope obvious and uncontroversial before render started.

**Impact.** Without this section, fork shape briefs become bespoke designs that nominally inherit an archetype but silently diverge. The propagation discipline collapses into "I wrote a brief for this page" rather than "I tested the archetype's claims against this page."

**Recommended fix.** Add to `reference/page-shape-brief.md` a required § "Propagation findings (when forkOf is set)" with the table format:

```markdown
| Parent-archetype canon | Propagates to this page? | Why |
|---|---|---|
| <component name> | ✓ Yes / ✗ No / ⚠ Adapted | <one-sentence rationale> |
```

Plus a § "Canon adjustments folding back to direction.md" sub-section that names which parent-archetype canon items need rescoping and which new canon candidates this page introduces.

The brief validator refuses fork shape briefs missing this section. Non-fork shape briefs (first-of-archetype, like CVA was) don't need it.

**Status.** Manually authored in service-shape.md and demonstrated valuable. Spec change pending.

**Coupling.** Required for item 4 (sub-archetype rescoping) to work as a discipline rather than ad-hoc judgment.

---

## 9. `prototype`: canon candidates surfaced in this project (specific component proposals)

**Two new canon candidates** that came out of the /service/ propagation test and warrant codification:

### 9a. `tiered-program-template` sub-archetype

A sibling of `program-template` for pages with comparable paid tiers + a flagship deep-dive. Inherits everything from `program-template` plus:
- **Plan-tier card grid** (N-up cards with one `most_popular` flag → yellow border + 6px lift + dark badge)
- **Value-prop horizontal rail** (5-up anchor cards on dark substrate, jumplinks to deeper sub-sections)

Member pages: CVA (approved), Cat Connect tier comparison (anticipated), Used Equipment inspection programs (anticipated).

### 9b. `section-with-photo-card-grid` (site-wide candidate)

H2-led band wrapping N tiles using `/new/`'s photo-card category tile pattern (3:4 aspect, caption overlay, smooth scale-on-hover). Variants for N-up at desktop:
- `--7` (Equipment Repairs & Rebuilds — wraps to 4 → 3 → 2 → 1 down-stack)
- `--3` (Shop Services — wraps to 2 → 1)
- `--2` (Preventative Maintenance — wraps to 1)

Distinct from `/new/`'s page-level use (single grid as the whole page); this is a content-band variant for pages that present multiple categories of sub-features.

### 9c. PLACEHOLDER image card pattern

When a photo-card grid has card images that aren't in the captured media set, render the card with:
- `background-color: rgba(255,204,0,0.08)` + diagonal yellow stripe `repeating-linear-gradient`
- `position: absolute; top: var(--sp-md); left: var(--sp-md)` monospace `PLACEHOLDER · card-image` tag
- All other card structure preserved (title, more link, hover scale)

Reads as "deliberate slot," not "broken card." Sibling of the existing PLACEHOLDER body-prose signature (dashed yellow border + monospace eyebrow + italic shape).

### 9d. `.btn-pill-dark` (yellow-text-on-black pill CTA — site-wide chrome)

Captured from /service/'s "Request Service Now" hero CTA. Distinct from `.btn-pill-light` (white-pill on dark) and `.btn-pill-yellow` (yellow-fill). Pattern: `background: #272727; color: #FFCC00; border-radius: 999px; padding: 14px 28px`. Hover inverts to yellow background. Useful when a primary CTA needs to read on a dark hero without invoking the saturated yellow-button vocabulary.

**Status.** Implemented in stardust/prototypes/service-proposed.html. Pending approval to fold back to direction.md and canon registry.

---

---

## 10. EDS-import pipeline: process fixes from iterations 1–6 on CVA pixel-parity

These are concrete patterns and pitfalls discovered while taking the CVA prototype from `stardust:prototype` output to a pixel-perfect EDS render with block-table DA authoring. They go into the **stardust:aem-import skill** so subsequent prototypes don't re-encounter them.

### 10a. Box-model fidelity when porting prototype CSS

**Bug:** Hero text container had `max-width: 980px` + 144px padding, giving 836px content width vs the prototype's 1100px content. Result: hero H1 wrapped to 5 lines instead of 3.

**Cause:** Prototype puts padding on the OUTER `.container` and max-width on the INNER `.hero__inner`. I conflated them into one element with both padding and max-width, which collapsed the available text width.

**Fix:** When porting prototype CSS to block-flavor CSS, **preserve the prototype's box-model structure layer-for-layer**. Either match nesting or compensate via `max-width: calc(<proto-inner-max> + <outer-padding-l> + <outer-padding-r>)`.

### 10b. EDS `decorateButton` skips `<a>` containing an `<img>`

**Bug:** Authoring `<em><a><span class="icon icon-phone"></span>Call Now</a></em>` does NOT become `<a class="button secondary">`. The phone icon link renders as a plain italic link.

**Cause:** `decorateButton` has the guard `!a.querySelector('img')`. `decorateIcons` runs first and appends `<img src="/icons/<name>.svg">` inside the `.icon` span. The img is now inside the `<a>`, so decorateButton skips it.

**Fix:** **Style icon-containing anchors via `em > a` / `strong > a` direct selectors**, not via `.button.secondary` / `.button.primary`. Per-surface CSS like:

```css
.cta-bar.block p em > a { /* yellow pill (was .button.secondary) */ }
.section.dark .columns p em > a { /* yellow text link */ }
```

This works regardless of whether decorateButton fires.

### 10c. EDS `decorateIcons` appends `<img>` for every `.icon` span (in main, not in fragments)

**Bug:** `<span class="icon icon-X">` in main content gets an `<img src="/icons/<name>.svg">` child appended. If `/icons/<name>.svg` doesn't exist, it renders as a broken image. If it does exist, the SVG renders AND the icomoon font glyph (from `::before` content) may double up.

**Cause:** `decorateIcons` only fires on main content via the standard decoration pipeline. Fragments loaded by custom `loadHeader`/`loadFooter` via fragment innerHTML bypass it — that's why header icons stay as pure icomoon font glyphs.

**Fix:** Two-track icon strategy:
1. **For each icon used in main content, provide a corresponding SVG file at `/icons/<name>.svg`** using `fill="currentColor"` so it inherits the parent's text color.
2. **CSS rule** `.icon img { width: 1em; height: 1em; vertical-align: -0.15em; }` to size SVG icons inline with text.
3. **CSS rule** `.icon:has(> img)::before { content: none !important; }` to suppress the icomoon font glyph when an SVG is present (otherwise both render).
4. **For chrome icons** (in fragments), keep the icomoon font path (smaller payload, no extra HTTP request per icon).

### 10d. Multiple buttons in one row: separate `<p>` per button + CSS inline grouping

**Bug:** `<p><strong><a>A</a></strong> <em><a>B</a></em></p>` doesn't buttonize. Both anchors stay as plain links.

**Cause:** decorateButton requires `p.childNodes.length === 1` — the moment the `<p>` has multiple children (strong + text whitespace + em), the rule fails for both.

**Fix:** **Author each button in its own `<p>`**. Then add CSS to make consecutive button-wrappers inline within the appropriate block context:

```css
.cta-bar.block p.button-wrapper { display: inline-block; margin: 0; }
.columns.block p.button-wrapper { display: inline-block; margin: 0 var(--sp-md) 0 0; }
```

And for non-buttonized anchors (e.g., icon-link inside `em > a`):

```css
.section.dark .columns.alternate p:has(> em > a) {
  display: inline-block; margin: 0 0 0 var(--sp-md);
}
```

### 10e. Hero split-lockup: two `<h1>` elements, second one CSS-colored accent

**Pattern:** When the prototype has a two-line hero with mid-line color accent (e.g., "MAXIMIZE EQUIPMENT PERFORMANCE WITH A / **CAT® CUSTOMER VALUE AGREEMENT**"), DA cannot easily author mid-line spans.

**Solution:** Author as TWO consecutive `<h1>`s in the same hero cell:

```
<h1>MAXIMIZE EQUIPMENT PERFORMANCE WITH A</h1>
<h1>CAT® CUSTOMER VALUE AGREEMENT</h1>
```

CSS: `.hero h1 + h1 { color: var(--accent); margin-bottom: var(--sp-lg); }` styles the second h1 as the accent line. Renders visually as one split-lockup.

### 10f. PLACEHOLDER signature via `<small><br><em>` pattern

**Pattern:** When the prototype shows a dashed-yellow PLACEHOLDER box (unsourced content marker) and you want the EDS render to match for pixel parity:

**Author** in DA:
```
<p><small>PLACEHOLDER · tier-summary</small><br><em>e.g. Example placeholder text here.</em></p>
```

**CSS** wraps both into a single visual box:
```css
.cards.tiers .cards-card-body p:has(small) { border: 2px dashed var(--color-cat-yellow); ... }
.cards.tiers .cards-card-body p:has(small) small { /* monospace eyebrow */ }
.cards.tiers .cards-card-body p:has(small) em { /* italic example */ }
```

The `<small>` + `<br>` + `<em>` pattern survives DA's HTML pipeline cleanly.

### 10g. Section substrate via section-metadata block

**Pattern:** Substrate transitions (warm-stone, dark, default white) are authored via `<div class="section-metadata">` block at the end of each section:

```
<div>
  <!-- blocks for this section -->
  <div class="section-metadata">
    <div><div>style</div><div>warm-stone</div></div>
  </div>
</div>
```

CSS:
```css
main .section.warm-stone { background: var(--color-warm-stone); padding: var(--sp-section) 0; }
main .section.dark { background: var(--color-surface-dark); color: var(--color-text-on-dark); ... }
```

EDS's `decorateSections` reads the metadata block and applies each space-separated `style` value as a class on the parent `.section` wrapper. Multiple styles can be combined (e.g., `dark hero`).

### 10h. Hide empty sections (metadata-only sections become visible empty boxes)

**Bug:** The last section in the DA content typically contains only the page metadata. After EDS lifts the metadata to `<head>`, the leftover wrapper `<div class="section">` renders as an empty visible section.

**Fix:**
```css
main .section:not(:has(.block)) { display: none; }
```

### 10i. Block stubs for blocks without behavior

**Bug:** `<div class="text">` and `<div class="cta-bar">` etc. trigger EDS to fetch `/blocks/text/text.{js,css}` and `/blocks/cta-bar/cta-bar.{js,css}`. If those files don't exist, 404 errors flood the console.

**Fix:** Provide empty stubs:
```
blocks/text/text.js  → `export default function decorate() { /* no-op */ }`
blocks/text/text.css → `/* theme-owned styling */`
```

For every generic block class the theme uses without per-block decoration.

### 10j. Blocks-mode tolerance in the overlay engine (one-time engine patch)

**Pattern:** scripts.js's `applyTemplateOverlay()` should tolerate missing `/templates/<name>.html`:
- Always load `/styles/<name>.css` and set `main.dataset.theme = <name>` (used by chrome blocks to resolve fragments).
- Only attempt template HTML fetch + replacement when the file exists.
- If 404, return false so standard `loadSections()` runs on the authored content.

Plus update `blocks/header/header.js` + `blocks/footer/footer.js` to read `main.dataset.theme` (with `dataset.overlay` as fallback for backward compat).

This makes blocks-mode and overlay-mode coexist in the same EDS project.

### Status

All 10 patterns implemented and verified on the CVA test page. To be codified in `stardust:aem-import` skill (item 11 below).

---

## 11. `stardust:aem-import` skill (built — 2026-05-30)

Successor to the proposed `stardust:to-eds-blocks`. Takes a stardust prototype (HTML + provenance) and produces:

1. `styles/<slug>-blocks.css` translating per-section CSS into block-class CSS targeting generic EDS blocks (hero, text, cards, columns, cta-bar, breadcrumb).
2. DA content draft (`<slug>.html`) with block tables + section-metadata substrates + metadata block.
3. Chrome fragment scaffolds at `fragments/<theme>/{header,footer}.html` (copy/derive from existing or from prototype's chrome).
4. SVG icon stubs at `/icons/` for each icon referenced in main content.
5. Block stubs at `blocks/<name>/` for blocks without behavior.
6. One-time engine patch (scripts.js + header.js + footer.js) if not present in the EDS project.

Bakes in items 10a–10j as conventions. Reference implementation: the wheelercat-cva-blocks theme + the customer-value-agreements-blocks-test page in `/Users/paolo/stardust/uplift-wheelercat-eds/`.

**Goal:** compress the manual 1+ hour CVA work into ~10 min of automated generation + ~15 min of visual verification iteration.

**Built.** Lives in the stardust plugin source at
`/Users/paolo/stardust/redesign-adobecom-plugin-source/plugins/stardust/skills/aem-import/`.
Structure:
- `SKILL.md` (main spec — 448 lines)
- `reference/conventions.md` (§1–§6: DA pipeline transforms, EDS
  decorate-function guards, authoring shape conventions, per-block
  CSS patterns, image+asset pipeline, section substrate transitions)
- `reference/engine-patch.md` (the one-time scripts.js +
  header.js + footer.js modifications)
- `reference/blocks-mode.md` (default mode, ~95% pixel parity, full
  authorability)
- `reference/overlay-mode.md` (page-level overlay alternative,
  ~100% pixel parity, slot-shaped authoring)
- `reference/verification.md` (Playwright harness + the file:// vs
  http:// limitation we hit)
- `reference/known-diffs.md` (acceptable diffs that warn-not-fail)
- `reference/wheelercat-reference-implementation.md` (pointer to
  the live reference at `github.com/paolomoz/uplift-wheelercat-eds`)

Master `skills/stardust/SKILL.md` updated to include `aem-import` in
the sub-command routing list.

What's NOT in the skill yet:
- An executable harness (the SKILL.md describes the procedure but
  there's no shell-script or Node executable that runs it
  end-to-end). The skill is currently procedural guidance; the agent
  follows the phases manually.
- Stardust integration tests against multiple brands to confirm the
  ~95% pixel parity ceiling holds beyond Wheeler.
- Item 11.5: a `stardust:aem-import --verify-only` mode that re-runs
  Phase 6 without regenerating artifacts. Documented in SKILL.md but
  not implemented.

---

## How to track

These notes live alongside the project. When stardust takes a real pass at v0.11, copy this file into the project root's `notes/` (already exists in the source repo for impeccable) and link from each affected skill's SKILL.md.

**Important distinction.** This file is the **proposed-changes ledger**, not applied changes. Nothing here has been written back to the actual skill source at `/Users/paolo/stardust/redesign-adobecom-plugin-source/plugins/stardust/skills/`. The contents are findings + spec-change proposals + canon candidates that the next iteration of the stardust skill should consider.

## Status of items (2026-05-30)

| # | Item | Status |
|---|---|---|
| 1 | extract: per-section body innerText | Worked around via `_mine-bodies-cva.mjs` + `_mine-bodies-service.mjs` |
| 2 | prototype: `tweakedFrom` for direction-authorized rewrites | Proposed; not implemented |
| 3 | prototype: `runMode` for content-sourcing posture | Proposed; not implemented |
| 4 | prototype: sub-archetype granularity / fork-rescope discipline | Surfaced by /service/ test; spec change pending |
| 5 | prototype: em-dash auto-substitution canonical rule | Two manual substitutions in project; canon rule pending |
| 6 | prototype: first-render-via-craft / refinements-direct policy | User-stated, followed in practice; spec language pending |
| 7 | prototype: shape brief contract strengthened (mandatory sections) | Empirically validated 2×; spec language pending |
| 8 | prototype: fork shape briefs require § "Propagation findings" | Demonstrated in service-shape.md; spec change pending |
| 9 | prototype: canon candidates from this project | Implemented in prototypes; fold-back pending approval |

