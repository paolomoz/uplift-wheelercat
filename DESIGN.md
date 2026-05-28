<!-- stardust:provenance
  writtenBy: stardust:direct (Phase 4 of stardust:uplift)
  writtenAt: 2026-05-27T22:18:00Z
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
    - stardust/direction.md
  synthesizedInputs: []
  stardustVersion: 0.10.0
-->
---
name: Wheeler Cat
description: Regional Caterpillar dealer — signage-led, condensed-cap, Cat-Yellow brand surface; brand-faithful (Mode A) target spec shared across variants A / B / C.
colors:
  page: "#FFFFFF"
  body-text: "#454545"
  heading-text: "#272727"
  cat-yellow: "#FFCC00"
  surface-dark: "#272727"
  warm-stone: "#E5E3DF"
  overlay-dark: "rgba(18,18,18,0.5)"
  text-on-dark: "#FFFFFF"
  text-on-yellow: "#272727"
typography:
  display:
    fontFamily: "\"Roboto Condensed\", \"Roboto\", system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.815rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.02em"
  headline:
    fontFamily: "\"Roboto Condensed\", \"Roboto\", system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 3.052rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.02em"
  title:
    fontFamily: "\"Roboto Condensed\", \"Roboto\", system-ui, sans-serif"
    fontSize: "1.953rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.015em"
  body:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "\"Roboto Condensed\", \"Roboto\", system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sharp: "0px"
  primary: "5px"
  pill: "999px"
spacing:
  unit: "4px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section-mobile: "32px"
  section-tablet: "48px"
  section-desktop: "64px"
  container-max: "1400px"
  grid-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.cat-yellow}"
    textColor: "{colors.heading-text}"
    rounded: "{rounded.primary}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.heading-text}"
    textColor: "{colors.cat-yellow}"
  button-secondary:
    backgroundColor: "{colors.page}"
    textColor: "{colors.heading-text}"
    rounded: "{rounded.primary}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.page}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.primary}"
    padding: "24px"
  input:
    backgroundColor: "{colors.page}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.primary}"
    padding: "10px 12px"
  badge:
    backgroundColor: "{colors.cat-yellow}"
    textColor: "{colors.heading-text}"
    rounded: "{rounded.primary}"
    padding: "4px 8px"
  link:
    textColor: "{colors.heading-text}"
---

# Design System: Wheeler Cat

## 1. Overview

**Creative North Star: "Signage on a Yellow Plate."**

Wheeler Cat is a Caterpillar dealer operating across Utah, Arizona, Nevada, and Wyoming since 1951. The brand reads like the equipment plate on a piece of Cat hardware — condensed caps stamped on a yellow ground, with engineering precision and no decoration. The redesign is brand-faithful (Mode A): the palette and typography stay pinned to the captured surface; what changes is composition discipline, density discipline, and (in variant C) motion choreography that lets the signage register perform.

The system explicitly rejects soft-tech SaaS marketing, lifestyle editorial register, gradient-and-glass aesthetics, and centered-hero / dual-CTA templates. Cat Yellow `#FFCC00` is the brand's voice — not a CTA pigment to be spread thinly. Condensed caps are the brand's signage — not an apology to be softened. Density is information-rich; whitespace is enough to read, not enough to luxury-stage.

**Key Characteristics:**
- Cat-Yellow primary palette pinned to the captured surface (no invented colors)
- Roboto Condensed display + Roboto body, modular scale at 1.250 (major third)
- 5px primary radius retained from captured site (sharp-but-not-square)
- Section padding capped at 64px desktop (multi-audience density floor)
- Image-reuse contract: captured photography reused at semantic position
- Three variant slots: A faithful + improvements · B yellow-as-surface · C kinetic-display

## 2. Colors

The palette is Caterpillar's protected dealer surface: warm-bias neutrals (white page, warm stone band, dark surface) plus one defining accent — Cat Yellow `#FFCC00`. Reserved color, used as the brand's signature gesture, not spread.

### Primary
- **Cat Yellow** (`#FFCC00`): the brand's defining accent. Caterpillar's protected dealer identity. Variant A retains it at CTA-and-eyebrow proportion; variant B promotes it to primary surface (hero ground, service-tile background, locations eyebrow); variant C retains A's proportion and amplifies it kinetically.

### Neutral
- **Page** (`#FFFFFF`): page ground. Pure white retained per brand-faithful inversion (the existing brand decision; the "no pure white" impeccable rule is inverted under Mode A).
- **Surface Dark** (`#272727`): finance-band ground, footer ground, image-overlay-dominant text canvas. Dark text-heading color on light grounds.
- **Warm Stone** (`#E5E3DF`): quiet band between yellow and dark zones; partner-logo strip ground; ambient surface that lets the palette breathe.
- **Body Text** (`#454545`): paragraph copy on light grounds. 9.6:1 on white — passes AAA.
- **Text On Dark** (`#FFFFFF`): copy on `#272727` surfaces. 14.6:1 — passes AAA.
- **Text On Yellow** (`#272727`): copy on `#FFCC00` surfaces. 12.6:1 — passes AAA. (Critical for variant B.)
- **Overlay Dark** (`rgba(18,18,18,0.5)`): hero photography overlay for headline contrast.

### Named Rules

**The Cat-Yellow Voice Rule.** Cat Yellow is the brand's signature gesture, not a CTA pigment. Variant A retains the captured proportion (CTA + eyebrow + 1px borders). Variant B promotes it to primary surface — hero ground, service-tile background, locations eyebrow. Variant C holds A's proportion and animates it. **Never use Cat Yellow as decoration** — every appearance must be load-bearing (a CTA, a brand-claim surface, a wayfinding eyebrow).

**The Pure-Color Retention Rule.** `#FFFFFF` and `#272727` are retained verbatim under Mode A brand-faithful inversion — the existing brand decision is the canonical Wheeler ground / heading. Impeccable's "no pure black / white" rule is inverted; OKLCH is reserved for new authoring, not for the captured brand surface.

## 3. Typography

**Display Font:** Roboto Condensed (with Roboto, system-ui, sans-serif fallback)
**Body Font:** Roboto (with system-ui, sans-serif fallback)

**Character:** Condensed caps for structural signage; Roboto for body legibility. The pairing reads like construction-site wayfinding or equipment-plate type — utility-grade, not editorial. Display weight is 700 across the board; body weight is 400 with 700 for emphasis.

### Hierarchy (modular scale at 1.250 — major third)

- **Display** (700, clamp(2.4rem, 5vw, 3.815rem) ≈ 61px, line-height 1.1, letter-spacing 0.02em): hero headline. ALL-CAPS by default.
- **Headline** (700, clamp(1.6rem, 3vw, 3.052rem) ≈ 49px, line-height 1.15, letter-spacing 0.02em): section heads ("YOUR HEAVY MACHINERY EXPERTS", "FINANCING DEALS & SPECIAL OFFERS"). ALL-CAPS.
- **Title** (700, 1.953rem ≈ 31px, line-height 1.2, letter-spacing 0.015em): sub-section heads, finance-card headlines.
- **Sub-title** (700, 1.563rem ≈ 25px, line-height 1.2): mid-density heads (service-tile titles).
- **Lead** (400, 1.25rem ≈ 20px, line-height 1.4): hero subcopy, intro paragraphs.
- **Body** (400, 1rem ≈ 16px, line-height 1.5): paragraph copy; max line length 65–75ch.
- **Label** (700, 0.8rem ≈ 13px, line-height 1.2, letter-spacing 0.08em, uppercase): eyebrows, utility-bar labels, CTA labels, dock chips.

### Named Rules

**The Modular-Scale Rule.** Every heading size is a step in the 1.250 (major third) scale — 16 / 20 / 25 / 31 / 39 / 49 / 61 px. No ad-hoc sizing. Retires the captured ad-hoc scale (ratios 1.05 / 1.33 / 1.03 / 1.32 — no consistent ratio).

**The Tracking-By-Weight Rule.** ALL-CAPS display headings are tracked at `letter-spacing: 0.02em` (weight 700). Eyebrow labels are tracked tighter at `0.08em` (weight 700 at 0.8rem). Body and lead are tracked `normal`. No ad-hoc per-element tracking.

**The All-Caps Retention Rule.** ALL-CAPS headings retained on H1 / H2 / H3 — the brand uses uppercase headings as the visual signature (observed on 53% of captured headings; the brand voice IS signage). The "use sentence case" reflex is inverted per brand-faithful direction. Mixed case is reserved for body, lead, and link copy only.

## 4. Elevation

The system is **near-flat by default**, with a single load-bearing shadow on finance / service cards (`rgba(0,0,0,0.8) 0 6px 16px 0`) carrying the captured site's signature card-elevation. Surfaces are otherwise flat; depth comes from yellow-vs-dark-vs-stone color blocking, not from soft shadows.

### Shadow Vocabulary

- **Card lift** (`box-shadow: rgba(0,0,0,0.8) 0px 6px 16px 0px`): finance cards, service tiles when raised, branch-list cards. The captured site's signature card shadow — heavy enough to register on a dense page.
- **Light overlay** (`box-shadow: rgba(0,0,0,0.1) 0px 3px 6px 0px`): lightbox / modal / dropdown chrome only.
- **Diffuse glow** (`box-shadow: rgba(0,0,0,0.1) 0px 0px 50px 0px`): modal / sheet container — rare.

### Named Rules

**The Color-Block-Over-Shadow Rule.** Depth comes from yellow-vs-dark-vs-stone color blocking, not from gradient or soft shadow effects. A card sits on its surface because it's lifted by yellow; the shadow is an emphasis, not a doctrine.

## 5. Components

### Buttons

- **Shape:** rectangular with 5px radius (sharp-but-not-square; the captured brand's signature).
- **Primary:** `#FFCC00` ground, `#272727` text, weight 700, ALL-CAPS, padding 12px 24px, no shadow at rest.
- **Primary hover:** inverts — `#272727` ground, `#FFCC00` text. Transition 200ms ease-out.
- **Secondary:** `#FFFFFF` ground, `#272727` text, 1px border `#272727`, padding 10px 20px. Used for "MORE ABOUT US" / "BROWSE MORE SERVICES" auxiliary CTAs.
- **On-dark primary:** identical to primary (yellow + dark text); the yellow reads correctly on `#272727`.
- **On-yellow primary (variant B):** inverts — `#272727` ground, `#FFCC00` text — for contrast within yellow surfaces.

### Service tiles (signature component)

- **Shape:** rectangular, 5px radius, equal-aspect (1:1 or 4:3 depending on viewport).
- **Glyph:** icomoon (`icon-new`, `icon-used`, `icon-rent`, `icon-order`, `icon-service`, `icon-phone`) — 48px, weight unified.
- **Variant A / C treatment:** yellow glyph on `#272727` dark tile, white title in Roboto Condensed caps, white body 14px.
- **Variant B treatment:** dark glyph on `#FFCC00` yellow tile, dark title in Roboto Condensed caps, dark body 14px.

### Finance cards

- **Shape:** rectangular, 5px radius, drop shadow `rgba(0,0,0,0.8) 0 6px 16px 0`.
- **Variant A / C ground:** white card on white page (the captured pattern).
- **Variant B ground:** dark `#272727` card on dark `#272727` finance band, yellow eyebrow stripe across the card top, yellow numerals (the `0%`, `60 MONTHS`, `$500`), white body copy.
- **No carousel.** Three-up grid; all deals visible above the fold (improvement #1).

### Stat row (RETIRED)

The captured "18 / 75 / 24" floating-numerals pattern is retired in favor of a single narrative-proof line: *"18 branches across Utah, Arizona, Nevada & Wyoming · same-day field service · 24/7 phone support since 1951"*. Variant C amplifies the numerals only if and where they're inline within the narrative — never as floating big-numerals.

### Partner-logo strip

- **Composition:** monochrome partner logos in a horizontal strip, equal height (40–48px), 32px gap.
- **Ground (variant A / C):** warm stone `#E5E3DF` band.
- **Ground (variant B):** warm stone `#E5E3DF` band (B's quiet band between yellow surfaces).
- **Sentiment merge:** "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" lives as the headline of the same band as the partner strip (improvement #2 — orphan sentiment retired).

### Dark utility bar

- **Position:** persistent top-of-page band, 32–40px tall.
- **Ground:** `#272727`.
- **Content:** Sponsorships link, Jobs link, phone number (`801-436-3672`) right-aligned with icomoon `icon-phone` glyph.
- **Variant B note:** retained on dark, regardless of B's yellow hero — utility bar is universal chrome.

### Inputs

- **Shape:** 5px radius, 1px border `#B5B5B5`, padding 10px 12px.
- **Focus:** 2px outline `#FFCC00` (focus ring inherits brand yellow).

### Navigation (main header)

- **Position:** sticky persistent header under the utility bar.
- **Ground:** `#272727`.
- **Items:** SPONSORSHIPS, NEW EQUIPMENT, USED EQUIPMENT, RENT NOW, REQUEST SERVICE, CREDIT APP (6 main-nav verbs).
- **Active state:** yellow underline (2px) under active nav item.
- **Hover:** yellow text color shift, 150ms ease-out.

## 6. Do's and Don'ts

### Do
- **Do** use Cat Yellow `#FFCC00` as a load-bearing brand surface (CTA, hero ground in B, service-tile ground in B, eyebrow band). Every yellow appearance must do work.
- **Do** use Roboto Condensed 700 ALL-CAPS for display heads; track at `0.02em`; size from the 1.250 modular scale only.
- **Do** preserve the captured 5px primary radius on cards, buttons, inputs, tiles.
- **Do** reuse captured images at semantic position (hero stays hero, equipment imagery stays equipment imagery, partner logos stay partner logos).
- **Do** group sentiment + partner proof into one band and locations + branch list into one band — no orphan headings.
- **Do** require alt text on every image (hero, service tiles, partner logos, branch map).
- **Do** honor `prefers-reduced-motion: reduce` on variant C — marquees freeze, split-flaps land static, count-ups land at target, blur-reveals collapse to opacity.
- **Do** cap section padding at 64px desktop / 48px tablet / 32px mobile (multi-audience density floor — 6 sections triggers it).

### Don't
- **Don't** spread Cat Yellow as decoration. The CTA-pigment-only deployment in the captured site is what the redesign retires; the inverse mistake is to spray yellow across the chrome until it loses signal.
- **Don't** use Slick.js or any draggable carousel above the fold for finance offers — improvement #1 retires the 2018 dealer-template silhouette.
- **Don't** render the "18 / 75 / 24" floating-numerals stat row as the captured site did. Narrative proofs only; numerals only inside narrative.
- **Don't** orphan section heads (e.g. "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" as a standalone h5 between the service row and the partner strip). Group it into the band it belongs to.
- **Don't** invent a font outside the captured surface. Roboto Condensed + Roboto only; icomoon for service glyphs. (Mode A anti-toolbox.)
- **Don't** invent a color outside the captured palette. `#FFFFFF`, `#272727`, `#FFCC00`, `#E5E3DF`, `#454545`, `rgba(18,18,18,0.5)` only.
- **Don't** apply the Generic-2026-SaaS silhouette — centered hero, dual CTAs, 3-icon-row, 3-card grid, faux-testimonials.
- **Don't** drop the utility bar's phone number on any variant. Field operators on phones need it in ≤ 2 tab stops.
- **Don't** apply editorial-register vocabulary (*atelier*, *the studio*, *the journal*) — Wheeler is commerce / service / equipment.
- **Don't** push section padding above 64px desktop, even on the highest-divergence variant. Multi-audience density floor is hard.
- **Don't** apply gradient text, glassmorphism, or side-stripes — impeccable absolute bans, not inverted under Mode A (the captured site doesn't use them).
