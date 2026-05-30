<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-28T12:00:00Z
  page:             new
  pageUrl:          https://wheelercat.com/new/
  pageType:         listing (category-hub variant — not product-grid)
  againstDirection: stardust/direction.md (Active — A-rich approved as home; chrome propagates site-wide per fold-back recommendation)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/new.json
    - stardust/current/_brand-extraction.json
    - DESIGN.md / DESIGN.json
    - DESIGN-A-rich.md / DESIGN-A-rich.json (approved home as inheritance basis)
    - stardust/direction.md
    - stardust/prototypes/home-A-rich-shape.md (home shape as inheritance reference)
  stardustVersion: 0.10.0
  capturedSourceLineage: per-section, below
  antiTemplatePass: per-pattern, below
  surprise: low
  substrateTransitions: { default: white, exceptions: [warm-stone @ why-cat-rationale, dark #272727 @ footer + dept-row, yellow @ utility-strip] }
  voiceClassification: per-section, below
-->
---
slug: new
url: https://wheelercat.com/new/
register: brand
pageType: listing (category-hub)
inheritsChromeFrom: A-rich
ia-fidelity: verbatim (captured IA preserved; only chrome elevation per A-rich)
surprise: low
---

# Page shape: new (listing · category-hub)

## Bet for this page

The captured `/new/` page is a **category-hub listing** — 4 major categories routing into deeper drilldowns, with brand rationale + lead capture below. Apply A-rich's chrome (utility strip + 4-verb nav + dept row + Lenis runtime + footer) and render the category hub as 4 photo cards using captured photography. Brand rationale stays as a warm-stone band. Lead-capture form lives in the page; the persistent yellow phone CTA in the header covers calling intent.

**No new IA invention** — this is the closest test of whether A-rich's chrome holds up on a non-home page without breaking the captured page's information flow.

## Sections (in render order)

1. **utility-strip** — site-wide system-component (carried from approved A-rich; identical to home: Customer Login · Sponsorships · More ▾ dropdown).

2. **main-header** — site-wide system-component (carried from A-rich): logo + 4-verb Pattern A nav (BUY / RENT / SERVICE / PARTS) + yellow phone CTA. BUY's dropdown is the natural drill-in for this page (New Equipment / Used Equipment / Quote / Credit / Power Systems).

3. **dept-row** — site-wide system-component (carried from A-rich): captured 10 dept links on dark grey `#1a1a1a`. Active-state styling on "Quotes" + "Offers" since `/new/` is the bridge between dept categories and per-machine drill-ins.

4. **breadcrumb** — derived from `pages/new.json#components.breadcrumbs[count:3]`. Captured-source breadcrumb pattern present on captured page. New chrome row directly below dept-row: "Home › New Equipment" in 0.78rem Roboto Condensed 700 dark on white, yellow right-arrow separator.

5. **hero** — derived from `pages/new.json#landmarks[hero]` + voice samples. Compositional move:
   - Full-bleed `../current/assets/media/equipment_hero-<hash>.webp` (captured "View of Cat excavators counter weights" image — needs filename resolution from media folder)
   - Left-to-right dark gradient overlay (matches A-rich hero treatment)
   - Eyebrow `Wheeler · New Cat® Equipment`
   - H1 `NEW EQUIPMENT` (captured-verbatim)
   - Supporting line direction-authorized rewrite of meta description: `Cat® heavy machinery, power solutions, and field technology. Built to spec for Utah job sites. Stocked across 18 Wheeler branches.`
   - Single white pill CTA `Request a Quote` (captured CTA verbatim)
   - Hero load-only fade-in (CSS keyframe, NOT scroll-driven — matches A-rich pattern)

6. **category-hub** — derived from `pages/new.json#headings[3-6]` (the 4 captured H4 category labels). Compositional move:
   - 4-up tile grid on white
   - Eyebrow `Shop by Category`
   - Section title `New Heavy Equipment for Sale` (captured-verbatim from h2[0])
   - Each tile is a portrait-ish card (3:4 aspect at desktop, 4:3 at tablet):
     1. **CAT® EQUIPMENT** — `machines.webp` (captured "New Equipment" alt) — links to `/new/machines/` (captured nav link target)
     2. **POWER SOLUTIONS** — `203A6113-1.webp` (captured "Wheeler Power Systems Cat Gen set" alt) — links to `/power-systems/`
     3. **TECHNOLOGY** — `tech_thumb_card.webp` (captured "Cat Technology Dozer" alt) — links to `/technology/`
     4. **GENERAL CONSTRUCTION TOOLS** — `construction.webp` (captured "Allmand Light tower" alt) — links to deeper sub-category
   - Card chrome: image fills 65% top, dark-gradient overlay at bottom 35% holding white caps title in Roboto Condensed 700 22px + yellow `Browse Category ›` arrow link
   - Hover: smooth scale on `<img>` child (1 → 1.05 over 700ms, ease-out-expo) — matches A-rich blog-card hover pattern
   - Scroll-reveal `data-anim` slide-up with 0.16 stagger

7. **why-cat-rationale** — derived from `pages/new.json#headings[7]` (h2 "WHY BUY CAT® EQUIPMENT?"). Compositional move:
   - Substrate: warm stone `#E5E3DF` (matches A-rich's blog-cards band; signals brand-rationale register)
   - Eyebrow `Why Cat?`
   - Section title `WHY BUY CAT® EQUIPMENT?` (captured-verbatim)
   - Two-column layout at desktop:
     - LEFT: 2-3 paragraphs of body copy (PLACEHOLDER · section-copy if not captured fully — the captured body needs verification; sourced from page innerText if available, else dashed-yellow placeholder per content-sourcing contract)
     - RIGHT: 3 CTAs as outlined dark buttons stacked vertically:
       - **Financing Options** → `/about/financing/` (captured CTA verbatim)
       - **Payment Calculator** → `cat.com/.../resources/tools-calculator` (captured CTA verbatim)
       - **Request a Quote** → `/machine-quote-request/` (captured CTA verbatim)
   - One paragraph scroll-reveal; CTAs cascade after with stagger

8. **lead-capture** — derived from `pages/new.json#headings[8]` (h3 "GET MORE INFORMATION FROM WHEELER MACHINERY CO.") + `components.formFields[count:6]`. Compositional move:
   - Substrate: white (return to page ground after the warm-stone rationale band — counts as 1 of 2 allowed substrate transitions)
   - Section title at h2: `GET MORE INFORMATION FROM WHEELER MACHINERY CO.` (captured-verbatim)
   - 6-field form in a 2-column grid (Name / Phone in row 1; Email / Subject in row 2; Message full-width row 3; submit button)
   - Field types inferred from captured form (PLACEHOLDER · form-field-spec for any field not explicitly named in capture)
   - Yellow primary submit button: `Get in Touch`
   - Note: captured form is a SearchWP-style contact form; use semantic `<form>` with field labels + ARIA per accessibility contract

9. **site-footer** — site-wide system-component (carried from A-rich): 4-col mega footer (brand + Quick Links + Contact + Connect + legal).

## Anti-template pass

| Captured pattern | Default reflex | Alternatives considered | Picked | Rationale |
|---|---|---|---|---|
| 4-card category hub | 4-up icon-tile grid | (1) 4-up icon-tile (current site's reflex) · (2) 4-up photo-card with caption overlay · (3) split 1-large + 3-small editorial | **4-up photo-card with caption overlay** | Captured page has real equipment photography per category (machines.webp, 203A6113-1, tech_thumb_card, construction.webp) — using them at scale honors the captured asset library. Editorial split rejected because the 4 categories are conceptually peer-level, not hierarchical. |
| Hero photo + overlay + headline | Same | (1) Photo + overlay + headline (captured) · (2) Photo full-bleed + caption-plate (variant E pattern) · (3) Pure-type hero on color | **Photo + overlay + headline (matches A-rich)** | Site-wide chrome consistency — A-rich's approved hero pattern is the canonical move. equipment_hero.webp at A-rich's gradient treatment honors the chrome contract. |
| Brand-rationale ("Why Buy Cat") | Same band, 3 CTAs in a row | (1) Captured pattern · (2) Two-column with right-aligned CTA stack · (3) Inline pull-quote treatment | **Two-column with CTA stack** | Captured layout is single-column with 3 horizontal CTAs — fine for desktop but cramped at tablet. Two-column gives the rationale copy a 56ch reading column and lets CTAs stack vertically (better tablet behavior). |
| Lead-capture form | Same (6 fields, single column) | (1) Single-column form · (2) Two-column form with full-width message · (3) Inline single-line capture + drawer for full form | **Two-column form** | Single-column is conservative but adds vertical length; two-column is faster to scan and matches modern lead-capture UX. |

## Captured-image inventory (resolution to media folder needed)

The shape brief assumes the following files exist in `stardust/current/assets/media/`. If any are missing, the prototype must render with PLACEHOLDER · photo-needed for that card.

- `equipment_hero` → hero
- `machines` → CAT® EQUIPMENT card
- `203A6113-1` → POWER SOLUTIONS card
- `tech_thumb_card` → TECHNOLOGY card
- `construction` → GENERAL CONSTRUCTION TOOLS card

The 25-page crawl downloaded the captured media for each page; these should already be on disk with the standard `<basename>-<hash>.<ext>` naming.

## Surprise budget

**`low`** — this is A-rich's chrome propagated to a new page with minimal new bets. The only new compositional decisions are the category-hub card layout and the two-column form. Per `intent-dimensions.md § 9` and the listing's ia-fidelity `verbatim` stance, low is correct.

## Substrate transitions

- default: white
- exception 1: warm stone `#E5E3DF` @ why-cat-rationale (named purpose: "brand-rationale band, matches A-rich's blog-cards register")
- exception 2: dark `#272727` @ footer + dept-row (site-wide chrome — counts as inherited, not new transition)
- exception 3: yellow `#FFCC00` @ utility-strip (site-wide chrome)

Real new substrate transitions: **1** (warm-stone rationale band). Well under the ≤ 2 cap.

## Heading hierarchy + voice classification

| Section | Heading | Level | Classification | Source |
|---|---|---|---|---|
| breadcrumb | "Home › New Equipment" | (chrome) | captured-verbatim | page URL + h1 |
| hero | "Wheeler · New Cat® Equipment" | eyebrow | direction-authorized (matches A-rich eyebrow pattern) | composed |
| hero | "NEW EQUIPMENT" | h1 | captured-verbatim | pages/new.json#headings[0] |
| hero | supporting line | (body) | direction-authorized rewrite of meta description | composed from metaDescription |
| hero | "Request a Quote" | CTA | captured-verbatim | pages/new.json#ctas[2] |
| category-hub | "Shop by Category" | eyebrow | direction-authorized chrome | composed |
| category-hub | "New Heavy Equipment for Sale" | h2 | captured-verbatim | pages/new.json#headings[1] |
| category-hub | "CAT® EQUIPMENT" / "POWER SOLUTIONS" / "TECHNOLOGY" / "GENERAL CONSTRUCTION TOOLS" | h3 (was h4 in capture; promoted to h3 for proper hierarchy) | captured-verbatim | pages/new.json#headings[3-6] |
| category-hub | "Browse Category ›" | CTA | direction-authorized chrome (per friction #3) | composed |
| why-cat-rationale | "Why Cat?" | eyebrow | direction-authorized chrome | composed |
| why-cat-rationale | "WHY BUY CAT® EQUIPMENT?" | h2 | captured-verbatim | pages/new.json#headings[7] |
| why-cat-rationale | rationale body copy | (body) | placeholder OR captured-verbatim (depends on capture completeness) | classified at render time |
| why-cat-rationale | "Financing Options" / "Payment Calculator" / "Request a Quote" | CTAs | captured-verbatim | pages/new.json#ctas[0-2] |
| lead-capture | "GET MORE INFORMATION FROM WHEELER MACHINERY CO." | h2 (promoted from captured h3) | captured-verbatim | pages/new.json#headings[8] |
| lead-capture | 6 form field labels | (labels) | placeholder (captured form fields detected but specific labels need verification) | render with PLACEHOLDER if not in capture |
| lead-capture | "Get in Touch" | CTA | direction-authorized | composed |
| footer | "QUICK LINKS" / "CONTACT US" / "CONNECT WITH US" | (chrome) | captured-verbatim | site-wide |

## Unsourced content (anticipated)

- **Why-Cat rationale body copy** — depends on whether captured page body was fully extracted. If not, render with `PLACEHOLDER · section-copy` (2-3 paragraphs with shape hints).
- **6 lead-capture form field labels** — captured page detected 6 form fields but specific labels need verification at render time. Standard contact-form labels (Name / Email / Phone / Subject / Equipment Interest / Message) are reasonable placeholders if captured labels unavailable.
- **0 PLACEHOLDER images** — all 4 category images + hero are captured assets.

## Inheritance from A-rich (chrome + motion)

Per direction.md § Approved variant — A-rich, fold-back recommendation:
- **Site-wide carry** (this page inherits without modification):
  - 3-layer header (yellow utility / 4-verb black / dark-grey dept)
  - Footer (4-col mega)
  - Lenis motion runtime + canonical script (embedded verbatim)
  - Palette pins
  - Type system (Roboto + Roboto Condensed; Oswald reserved for hero-tall display — applied here to h1 "NEW EQUIPMENT")
  - White pill CTA pattern (used for hero CTA)
  - Scroll-reveal data-anim + 0.16 stagger
  - icomoon icon font

- **Page-local new** (this page introduces):
  - Breadcrumb chrome (new component — will need to be added to canon when this page is approved)
  - Photo-card category-tile pattern (new component — sibling to blog-card pattern but ratio + caption-overlay differ)
  - Two-column form layout (new component — to be reused on credit-application / quote / contact pages)

## Validation contracts on render

- [`:root` token block first content of first `<style>`] — required
- [Structural data attributes on every section] — required (`data-section`, `data-intent`, `data-layout`)
- [Provenance comment first child of `<head>`] — required
- [Self-contained except local-relative Lenis] — required
- [Mobile breakpoints at ≤ 640 / 768 / 1024 / 1100] — required
- [Hamburger nav at ≤ 768] — required
- [AAA contrast on every text-on-substrate pair] — required
- [Content sourcing: every literal value classified per the voice table above] — required

## Open questions for user

None — all sections derive from captured content + A-rich inheritance. Direction-authorized rewrites are minimal (eyebrows + supporting line + Get in Touch button label) and all logged.

If you approve this brief, the next step is render via `impeccable:craft`. If you want changes (different category-hub layout, captured rationale body skipped, etc.), edit this brief in place and I'll re-derive.
