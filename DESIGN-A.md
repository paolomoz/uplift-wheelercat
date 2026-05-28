<!-- stardust:provenance
  writtenBy: stardust:direct (Phase 4 of stardust:uplift)
  writtenAt: 2026-05-28T00:00:00Z
  variant: A — faithful + improvements
  parent: DESIGN.md (shared)
  readArtifacts:
    - DESIGN.md
    - stardust/uplift-improvements.md
    - stardust/direction.md
  stardustVersion: 0.10.0
-->

# DESIGN-A — Variant A · Faithful + improvements

## Role

**Risk-averse green-light.** "Yes, that's us, with the obvious fixes." The variant a stakeholder green-lights without negotiation. Same IA, same palette proportions, same composition strategy as the captured site — but every item from `uplift-improvements.md` applied exactly. No extras, no creative reach, no motion.

## Inheritance

Inherits the full DESIGN.md / DESIGN.json shared spec (palette, typography, radii, spacing, components, voice). Overrides only the items listed under § Deltas vs shared below.

## The bet (one)

**The improvements list.** Five named fixes from `uplift-improvements.md` applied as a coordinated set:

1. Replace slick.js finance carousel with a 3-up card grid (all deals visible above the fold).
2. Collapse "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" sentiment into one band with the partner-logo strip.
3. Adopt modular type scale (1.250 — major third: 16 / 20 / 25 / 31 / 39 / 49 / 61 px); pin tracking by weight (display caps 0.02em; label caps 0.08em).
4. Retire the "18 / 75 / 24" floating-numerals stat row in favor of one narrative-proof line ("18 branches across Utah, Arizona, Nevada & Wyoming · same-day field service · 24/7 phone support since 1951").
5. Hold Cat Yellow at the captured proportion — CTA + eyebrow + 1px borders. (The yellow promotion is variant B's bet; A holds it as-is.)

## Composition

Same IA as the captured home page:

1. **Header** (utility bar with phone + main header with logo + 6-link nav).
2. **Hero** with full-bleed Cat-photographic ground, dark overlay, white display-caps headline, yellow primary CTA. Image reused at semantic position per Mode A.
3. **Finance band** — three white finance cards in a 3-up grid (no carousel). All three offers visible above the fold at desktop. Card lift `rgba(0,0,0,0.8) 0 6px 16px 0`.
4. **Service tile row** — 6 dark tiles with yellow icomoon glyphs, white headings, white body. ("FIELD SERVICE", "SHOP SERVICE", "PARTS.CAT.COM", "MAINTENANCE SERVICE", "REBUILDS", "REQUEST SERVICE ONLINE".)
5. **Partner sentiment band** (merged per improvement #2) — warm stone `#E5E3DF` ground; headline "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" sits above the monochrome partner-logo strip.
6. **Locations band** — narrative proof line ("18 branches across...") + 1400px-wide branch map + 18-row branch list below.
7. **Footer** with QUICK LINKS / CONTACT US / CONNECT WITH US columns, on dark `#272727`.

## Motion

**Static.** No `extensions.motion.register` declared. No animation beyond default hover transitions on buttons / nav items (which are part of the shared spec).

## Deltas vs shared DESIGN.md

| Item | Shared default | A's override | Rationale |
|---|---|---|---|
| Finance band layout | (not specified; varies per variant) | 3-up card grid, no carousel | Improvement #1 |
| Sentiment headline | (in shared but not bound to a band) | merged into partner-logo band | Improvement #2 |
| Stat row | RETIRED in shared | replaced by single narrative-proof line in locations band | Improvement #4 |
| Cat Yellow proportion | (varies per variant) | captured proportion held (CTA + eyebrow + 1px border) | Improvement #5; A holds palette as-captured |
| Motion register | (per-variant) | none — static | A is the green-light variant; no motion |

## Notes on the 5 improvements applied

- **Carousel → 3-up grid.** All three finance offers (`0% APR / 60 MONTHS / $500 CVA`, `FUEL PAYBACK`, `CAT COMMERCIAL ACCOUNT`) render simultaneously in a CSS grid (`grid-template-columns: repeat(3, 1fr)` at desktop; `repeat(2, 1fr)` at tablet; single column at mobile). No slick.js. No drag affordance. No carousel dots.

- **Sentiment + partner merge.** The orphan h5 "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" — which on the captured site sized like a section head but ranked as h5 — gets promoted to an h3 and bound to the partner-logo strip as its band headline. The partner logos render directly below it on the same warm-stone surface.

- **Modular scale 1.250.** Every heading size pulls from the modular ladder: `size-381 = 61px` (display) / `size-305 = 49px` (headline) / `size-244 = 39px` (large title) / `size-195 = 31px` (title) / `size-156 = 25px` (sub-title) / `size-125 = 20px` (lead) / `size-100 = 16px` (body). No 22 / 29 / 30 / 40 / 42 (the captured ad-hoc set).

- **Stat row retired.** The "18 / 75 / 24" floating-numerals pattern is gone. In its place, a single sentence as the locations-band lead: "18 branches across Utah, Arizona, Nevada & Wyoming · same-day field service · 24/7 phone support since 1951." Reads at lead size (20px), Roboto 400, body color `#454545`.

- **Palette unchanged.** Cat Yellow remains CTA + eyebrow + 1px border. The captured proportion holds. (B is where yellow gets promoted to a primary surface.)

## Anti-toolbox check (A)

A's bet is the improvements list. No unrelated moves are introduced:
- No custom font (Roboto Condensed + Roboto only).
- No invented color (captured palette pinned).
- No motion register.
- No editorial-register vocabulary.
- No glassmorphism / gradient text / side-stripes.
- No catalog grids on the home page.
- No Generic-2026-SaaS silhouette.

## Bonus (out of scope for this DESIGN file)

- Alt text required on every image (hero, service tiles, partner logos, branch map) — content rule, enforced at prototype time.
- A planned monochrome / inverted SVG logo set is noted for downstream work; the prototype renders the captured PNG.
