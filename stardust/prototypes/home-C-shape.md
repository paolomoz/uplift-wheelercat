<!-- stardust:provenance
  writtenBy: stardust:uplift / prototype phase 5
  writtenAt: 2026-05-28T00:00:00Z
  page: home
  variant: C
  pageUrl: https://wheelercat.com/
  againstDirection: stardust/direction.md
  readArtifacts:
    - stardust/current/pages/home.json
    - DESIGN.md
    - DESIGN-C.md
    - prototype/reference/motion-runtime.md
  capturedSourceLineage:
    - all sections inherited from A's shape brief (composition matches A verbatim)
    - additional: hero monogram "WHEELER" (direction-authorized eyebrow per kinetic-display register signature move)
    - additional: signage-marquee top-of-page content per kinetic-display register
  antiTemplatePass:
    - pattern: static-headline ; alts: blur-reveal (picked), wipe (also applied to section heads) ; rationale: kinetic-display register
    - pattern: static-numerals ; alts: split-flap (picked for finance), count-up (picked for stat row) ; rationale: kinetic-display amplifies captured numerical content
    - pattern: static-banner ; alts: signage-marquee (picked) ; rationale: kinetic-display top-of-page chrome
  substrateTransitions:
    default: white-page (matches A)
    exceptions: same as A (photographic hero → finance white → services dark → partners stone → locations white → footer dark)
  voiceClassification:
    - section: hero ; classification: captured-verbatim + direction-authorized "WHEELER" monogram eyebrow
    - section: marquee ; classification: direction-authorized chrome (kinetic-display register signature move)
    - section: finance / services / support-partners / locations / footer ; classification: matches A
  surpriseTier: medium
  dominantDimension: motion-register/kinetic-display
  compositionDelta_vs_A:
    - motion register: kinetic-display (C-cinematic) vs static (A)
    - hero load: monogram-unmask (C-cinematic) vs static (A)
    - numerals: split-flap + count-up (C-cinematic) vs static (A)
    - additional element: signage marquee (C-cinematic) — not in A
    - captured sizing: C uses captured ad-hoc proportions (16/22/30/40/42) vs A's modular 1.250 scale
  compositionDelta_vs_B:
    - motion register: kinetic-display (C-cinematic) vs static (B)
    - palette proportions: captured (C) vs yellow-primary (B)
    - hero ground: photographic (C) vs yellow (B)
-->
---
slug: home
variant: C
url: https://wheelercat.com/
register: brand
surprise: medium
dominantDimension: motion-register/kinetic-display
---

# Page shape: home — Variant C (kinetic-display)

**Two render outputs:**
1. `home-C-proposed.html` — static fallback. Same IA + palette proportions as A; uses captured ad-hoc sizing (no modular scale). No motion attributes.
2. `home-C-cinematic.html` — kinetic-display register engaged. Motion runtime + attributes layered onto the static composition.

## Sections (in render order)

Identical to variant A:

1. **header** — same dark utility bar + main nav as A.
2. **hero** — same composition as A (photographic ground + headline + CTA). Cinematic adds: oversized "WHEELER" monogram eyebrow + `data-split` letter unmask + `blur-reveal` on the main headline.
3. **signage-marquee** *(C-cinematic only, inserted between hero and finance)* — `.hero-marquee` band scrolling "FINANCING DEALS · 0% APR · FUEL PAYBACK · CVA BONUS · SHOP USED · NEW QUOTE · REQUEST SERVICE · " on a 30s loop.
4. **finance** — same 3-up grid as A. Cinematic wraps numerals: `<span data-flip="60">60</span>` `<span data-flip="500">500</span>` (the "0%" stays static). `display-head` class on card titles.
5. **services** — same 6-up dark tiles with yellow glyphs as A. Tiles get `data-tile-anim`; head gets `display-head` + word-wrap.
6. **support-partners** — same merged band as A; section head gets `display-head` + word-wrap.
7. **locations-proof** — narrative proof line wraps each stat as `<span data-countup="18">` / `data-countup="75"` / `data-countup="24"`; head gets `display-head`.
8. **footer** — same as A.

## Motion attributes (cinematic only)

- `data-anim` on body copy, CTAs, finance cards, partner items (generic IO-enter)
- `data-tile-anim` on service tiles (rotateX cascade)
- `data-split` on "WHEELER" monogram letters
- `data-flip="60"`, `data-flip="500"` on finance numerals
- `data-countup="18"`, `data-countup="75"`, `data-countup="24"` on stat numerals
- `.display-head` + `.word` spans on every `<h2>` head — clip-path word reveals
- `.hero-marquee` + `.marquee__track` — looping CSS-driven scroll

## Runtime + fallbacks

Canonical motion runtime embedded verbatim per `motion-runtime.md`. Tuned `animConfig` per kinetic-display register: parallax 30, fade 0.55, cards.slide 48, cards.stagger 0.16, wordmark clip 80.

`<noscript>` neutralizer in `<head>` forces final visible state if JS is off.

`@media (prefers-reduced-motion: reduce)` neutralizes marquee, split, count-up, blur — every animated element lands at target value statically.

## Data attributes

Same structural `data-section` attributes as A, plus motion attrs on leaf elements per above.

## Unsourced content

- partner logos (×5) — same as A.

## C-static differentiation from A

To preserve A↔C structural difference even on the static C: C uses **captured ad-hoc heading sizes** (16/22/29/30/40/42 px) per direction.md note that C inherits captured proportions; A applies the 1.250 modular scale. The 5 improvements (carousel→grid, sentiment+partner merge, stat-row retirement, locations consolidation, alt text) apply to both.
