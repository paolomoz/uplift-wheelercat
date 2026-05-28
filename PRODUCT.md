<!-- stardust:provenance
  writtenBy: stardust:direct (Phase 4 of stardust:uplift)
  writtenAt: 2026-05-27T22:18:00Z
  readArtifacts:
    - stardust/current/PRODUCT.md
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/home.json
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
    - stardust/direction.md
  synthesizedInputs: []
  stardustVersion: 0.10.0
-->
---
register: brand
---

# PRODUCT — Wheeler Machinery Co. (target state)

## Register

**brand** — full marketing / commerce landing site. The home page is a multi-audience routing surface for a regional Caterpillar dealer: finance promotions, service tile row, partner sentiment, locations, footer. Design IS the product — visual confidence, clarity of the offer, and brand-faithful signage vocabulary are the deliverable.

## Users

_provenance: inferred from page IA, nav verbs, captured copy, and stat-row claims._

- **Contractors and fleet operators** — primary buyers/renters of Cat heavy equipment (excavators, compact track loaders, dozers). Arrive looking for active finance offers, rental quotes, service appointments, parts orders, or the nearest of 18 branch locations. Job-shaped, time-constrained, value-engineering decisions.
- **Field operators and shop foremen** — on phones, jobsite-edge connectivity. Need a phone number, a service-request affordance, and the closest branch, fast. The dark utility bar surfaces the HQ phone number above all chrome for a reason.
- **Job seekers, sponsors, partners** — secondary; served via "Jobs" / "Sponsorships" nav links rather than home-page real estate.

## Product Purpose

A regional Cat dealer's flagship marketing surface, doing three jobs in priority order:

1. **Surface the current Caterpillar promotional cycle** — financing offers, CVA bonuses, fuel-payback programs — without ambiguity about what is in-market this month.
2. **Route every audience to its track** — equipment buyers, renters, service callers, parts buyers, sponsorship applicants — without forcing one audience to dominate the others.
3. **Make Wheeler distinguishable from every other dealer in the Caterpillar network** — through the brand's most defensible assets (Cat Yellow as ownable surface, condensed-cap signage voice, 75-year regional presence).

Success = the contractor lands, sees the active deal, taps the nearest branch or the credit app, and trusts that Wheeler is *their* Cat dealer.

## Brand Personality

_provenance: derived from captured voice + visual treatment + uplift direction movements._

- **Signage-led** — Roboto Condensed display caps as structural language, like construction-site signage or equipment-plate type. ALL-CAPS headlines are the brand's voice (53% of captured headings); they read as wayfinding, not as shout.
- **Display-typography-signature** — the condensed-cap heading vocabulary is the brand's strongest typographic asset; the redesign foregrounds it rather than apologizing for it.
- **Wayfinding-first** — 18 branch locations, embedded map, branch-list as a first-class structural element. The site behaves like a place-finder, not a brochure.
- **Bold, blue-collar, direct** — "YOUR HEAVY MACHINERY EXPERTS", "DEPENDABLE AND RELIABLE", short imperative CTAs (BROWSE / RENT NOW / REQUEST SERVICE / CREDIT APP). Promise + verb. No editorial register.
- **Caterpillar-aligned and Wheeler-distinct** — Cat Yellow `#FFCC00` is the protected dealer identity; the redesign reserves it as the brand's signature gesture rather than spreading it as a CTA pigment.
- **Operationally serious, motion-disciplined** — when motion is engaged (variant C), it performs the brand's signage and numerical content rather than decorating it. Marquees freeze, count-ups land, split-flaps resolve to real values under reduced-motion.

Three-word distillation: **direct · signage-led · dependable.**

## Anti-references

_provenance: inferred from existing brand surface + uplift improvements + anti-toolbox guardrails._

- **Soft-tech SaaS marketing.** No gradient hero, no glassmorphism, no centered-hero-with-dual-CTA SaaS silhouette. Wheeler is industrial-trade, not a B2B platform.
- **Lifestyle brand-storytelling.** No editorial photography hero, no atmospheric typography, no white-space-as-luxury. Wheeler's photography is operational documentation; treating it as editorial would expose the WordPress-media-library quality.
- **E-commerce catalog grids on the home page.** Inventory lives behind "NEW EQUIPMENT" / "USED EQUIPMENT" / "RENT NOW" nav routes — not surfaced as on-page product cards. The home is a routing and promotion surface, not a catalogue.
- **The Generic-2026-SaaS silhouette** (impeccable anti-toolbox) — even when the user asks for "modern", do not reach for centered-hero + dual-CTA + 3-icon-row + 3-card grid + faux-testimonials.
- **Editorial-register vocabulary** (*atelier*, *the studio*, *the journal*) — non-editorial brand; this is commerce / service / equipment. Direct verbs only.
- **The 2018 dealer-template carousel.** Slick.js draggable promo sliders above the fold (the dated pattern the redesign explicitly retires).
- **Floating "big numbers" stat rows.** The "18 / 75 / 24" pattern, ALL-CAPS labels underneath, no narrative — retired in favor of scannable narrative proofs.

## Content Pillars

- **Promotional finance** — front-loaded. Active offers visible above the fold without interaction (no carousel-gating).
- **Service** — six-line service row (Field Service, Shop Service, Parts.cat.com, Maintenance, Rebuilds, Request Service Online); mid-page anchor.
- **Locations** — embedded map + 18-row branch list. First-class IA, not a footer afterthought.
- **Trust at scale** — partner logos + 75-year claim + 24/7 phone support; expressed as narrative proofs, not floating numerals.

## Design Principles

_Each principle maps to a specific direction movement; the three variants amplify them at different intensities._

1. **Make the offer unmissable.** Current month's finance deal is visible in the first viewport without scroll, drag, or interaction. (Maps to: improvement #1 — retire the carousel.)
2. **Let condensed caps do the structural work.** Roboto Condensed display caps are the brand's signage voice — modular scale (1.250), tracking pinned by weight, no ad-hoc sizing. (Maps to: improvement #3 — modular scale; variant C — amplified into kinetic display.)
3. **Reserve Cat Yellow as the brand's voice, not the page's CTA pigment.** Yellow is the most distinctive industrial color in America; under-deployment as button-only erases the dealer-identity signal. (Maps to: improvement #5; variant B — yellow as primary surface.)
4. **Group what belongs together.** Sentiment + partner proof = one band; map + branch list + service-area claim = one locations band. No orphan headings. (Maps to: improvement #2 — IA clutter.)
5. **Make trust narrative, not numerical.** Replace the floating-numerals stat row with scannable proofs: "18 branches across Utah, Arizona, Nevada & Wyoming · same-day field service · 24/7 phone support since 1951". (Maps to: improvement #4.)
6. **Motion performs the brand, when it appears.** Kinetic-display register only; no decorative motion; every motion element has a reduced-motion fallback that preserves the static composition. (Maps to: variant C; PRODUCT.md Brand Personality "motion-disciplined".)

## Accessibility & Inclusion

- **WCAG 2.1 AA minimum** on every variant. Dark text `#272727` on Cat Yellow `#FFCC00` resolves to 12.6:1 — passes AAA. Body text `#454545` on white resolves to 9.6:1 — passes AAA. Light text `#FFFFFF` on dark `#272727` resolves to 14.6:1 — passes AAA.
- **Alt text on every image** — hero, service tiles, partner logos, branch map, location pins. Captured site fails this on 64% of images; redesign requires it as a content rule.
- **`prefers-reduced-motion: reduce` honored on variant C** — marquees freeze, split-flaps resolve to target values, count-ups land at the target, blur-reveals collapse to opacity-only. Static composition reads correctly without any motion.
- **Phone-friendly focus order** — utility-bar phone number reachable in ≤ 2 tab stops from the page top; the field operator on a phone should not hunt.

## Photography / Imagery

- **Hero composition.** Variant A retains the captured `SC_Hero.jpg` finance creative at full-bleed (semantic position preserved per Mode A image-reuse contract). Variant B replaces the photographic hero with a yellow typographic ground (the captured image becomes a secondary panel within the band). Variant C retains the hero composition; the kinetic-display register animates the headline and numeric layer on top.
- **Equipment imagery** — `Compact_Track_Loader`, `Excavators`, `Wheeler_Campus`, `aerial_resource` — reused at semantic position. These are operational documentation; do not promote them to editorial scale.
- **Service icons** — 6 icomoon glyphs (`icon-new`, `icon-used`, `icon-rent`, `icon-order`, `icon-service`, `icon-phone`). Retained as the service-tile glyph system across all three variants. Color treatment varies per variant (yellow-on-dark in A and C, dark-on-yellow in B).
- **Logo treatment** — captured logo is a single-color PNG. Redesign plans a monochrome / inverted SVG variant set so a dark-ground or yellow-ground deployment has a usable lockup. Authoring the SVG is out of scope for the prototype.
