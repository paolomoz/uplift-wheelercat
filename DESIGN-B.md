<!-- stardust:provenance
  writtenBy: stardust:direct (Phase 4 of stardust:uplift)
  writtenAt: 2026-05-28T00:00:00Z
  variant: B — color-ladder re-weighting
  parent: DESIGN.md (shared)
  readArtifacts:
    - DESIGN.md
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
    - stardust/direction.md
  stardustVersion: 0.10.0
-->

# DESIGN-B — Variant B · Cat Yellow as primary surface

## Role

**Design-team motivator.** "What if Cat Yellow `#FFCC00` was the page's primary surface, not just the CTA pigment?" The captured brand surface uses yellow exclusively as button background and 1px border accent (71k occurrences vs `#272727` 706k and `#E5E3DF` 616k — yellow is 10× under-deployed). Cat Yellow is Caterpillar's protected dealer identity and the most recognisable industrial color in America. The brand has earned the right to use it as a primary ground.

## Inheritance

Inherits the full DESIGN.md / DESIGN.json shared spec. Overrides palette **proportions** and band ground assignments only. Palette set itself is unchanged (still `#FFCC00` + `#272727` + `#E5E3DF` + `#FFFFFF` + `#454545` + overlay). Typography unchanged. Radii unchanged. Components unchanged in shape; ground/text colors inverted per band.

## The bet (one)

**Color-ladder re-weighting.** Cat Yellow promoted from CTA pigment to primary surface. The IA, composition strategy, and section sequence are identical to variant A — only the palette **proportions** shift. No motion. No new font. No layout move beyond ground-color swaps.

## Composition

Same IA as variant A:

1. **Header.** Utility bar `#272727` (universal chrome, retained); main header `#272727` (so the yellow hero reads as the page's first surface, not the header).
2. **Hero band** — **full-bleed Cat Yellow `#FFCC00` ground.** Dark `#272727` Roboto Condensed display copy ("FINANCING DEALS & SPECIAL OFFERS"). Inverted CTA — `#272727` ground, `#FFCC00` text (so the CTA pops within the yellow surface). Captured hero photograph becomes a secondary panel within the band (right-aligned 5/3 inset), not the dominant ground.
3. **Finance band** — **inverted to dark `#272727` ground** (yellow → dark → yellow rhythm). Three dark finance cards with yellow eyebrow stripes across the top, yellow numerals (the `0%`, `60 MONTHS`, `$500`), white body. Card lift `rgba(0,0,0,0.8) 0 6px 16px 0`.
4. **Service tile row** — **Cat Yellow `#FFCC00` tile background** (the most striking inversion). icomoon glyphs in dark `#272727`, tile headings in dark Roboto Condensed caps, tile body in dark Roboto 400. Tiles sit on a dark `#272727` page-band ground for separation.
5. **Partner sentiment band** — warm stone `#E5E3DF` ground (the quiet band between the two yellow surfaces). Sentiment headline + partner-logo strip merged per improvement #2.
6. **Locations band** — **yellow `#FFCC00` eyebrow** strip carrying the narrative-proof line, then a dark map surface (`#272727` map chrome with light pins). The yellow eyebrow anchors the band as a wayfinding surface.
7. **Footer** with QUICK LINKS / CONTACT US / CONNECT WITH US, on dark `#272727` (universal chrome).

## Motion

**Static.** No `extensions.motion.register` declared. B's bet is **palette weight**, not motion. C is where motion lives.

## Surface map (variant B)

| Band | Ground | Headline color | Body color | CTA |
|---|---|---|---|---|
| Utility bar | `#272727` | `#FFFFFF` | `#FFCC00` (phone) | n/a |
| Main header | `#272727` | `#FFFFFF` | `#FFFFFF` | `#FFCC00` |
| Hero | `#FFCC00` | `#272727` | `#272727` | `#272727`/`#FFCC00` inverted |
| Finance | `#272727` | `#FFFFFF` | `#FFFFFF` | `#FFCC00`/`#272727` |
| Service tiles | `#FFCC00` (tiles) on `#272727` (band) | `#272727` | `#272727` | `#272727`/`#FFCC00` inverted |
| Partner sentiment | `#E5E3DF` | `#272727` | `#454545` | n/a |
| Locations | `#FFCC00` eyebrow + `#272727` map | `#272727`/`#FFFFFF` | `#454545`/`#FFFFFF` | `#FFCC00`/`#272727` |
| Footer | `#272727` | `#FFFFFF` | `#FFFFFF` | n/a |

The page itself (`<body>` background) stays `#FFFFFF` — bands carry the yellow / dark / stone.

## Deltas vs shared DESIGN.md

| Item | Shared default | B's override | Rationale |
|---|---|---|---|
| Hero ground | (per-variant; A retains photographic) | `#FFCC00` full-bleed | B's bet — yellow as brand voice |
| Hero CTA | yellow / dark text | dark `#272727` / yellow `#FFCC00` text | Contrast inversion within yellow surface |
| Finance band ground | (per-variant; A retains `#FFFFFF`) | `#272727` dark | Yellow → dark → yellow rhythm |
| Finance card ground | `#FFFFFF` | `#272727` with yellow eyebrow + yellow numerals | Dark cards on dark band |
| Service tile ground | `#272727` dark | `#FFCC00` yellow | The most striking inversion; service-tile yellow tiles |
| Service tile glyph | yellow on dark | dark on yellow | Contrast inversion |
| Locations eyebrow | (per-variant) | yellow `#FFCC00` strip | Wayfinding anchor |
| Cat Yellow proportion | captured | promoted to primary surface | B's bet |
| Motion register | (per-variant) | none — static | B is composition / palette, not motion |

## Contrast verification (text on yellow surfaces)

| Surface | Foreground | Ratio | WCAG |
|---|---|---|---|
| `#FFCC00` ground + `#272727` text | 12.6:1 | AAA ✓ |
| `#FFCC00` ground + `#FFFFFF` text | 1.95:1 | FAIL — never use white text on yellow |
| `#272727` ground + `#FFCC00` text (CTA) | 12.6:1 | AAA ✓ |
| `#E5E3DF` ground + `#454545` text | 7.7:1 | AAA ✓ |
| `#272727` ground + `#FFFFFF` text | 14.6:1 | AAA ✓ |

**Rule:** Never use white text on yellow ground. Always dark `#272727`. Where a CTA must live on the yellow surface, invert the CTA itself (dark ground, yellow text).

## IA-priority preservation check (B)

- Header (logo + 6-link nav + phone): **preserved** in first viewport, on dark.
- Hero (finance offers): **preserved** in first viewport — the yellow ground IS the hero; the finance headline "FINANCING DEALS & SPECIAL OFFERS" stamps on yellow at display size.
- Finance offers: **preserved** in first/second viewport on dark band.
- Service tiles: **preserved** mid-page on yellow tiles.
- Partner sentiment: **preserved** in single band per improvement #2.
- Locations: **preserved** below service, above footer.
- Footer: **preserved** at bottom on dark.

**Note:** Concern is whether the yellow hero pushes finance below the fold. Answer — no. The yellow hero IS the finance headline surface ("FINANCING DEALS & SPECIAL OFFERS" + offer-headline + inverted CTA); the three finance cards land in the immediate next band on dark. Finance is visible above the fold in two viewports for a 1440×900 desktop.

## Anti-toolbox check (B)

B's bet is palette re-weighting. No unrelated moves are introduced:
- No custom font (Roboto Condensed + Roboto only).
- No invented color (captured palette pinned — only proportions shift).
- No motion register (static).
- No new section, no removed section (composition matches A).
- No editorial-register vocabulary.
- No glassmorphism / gradient text / side-stripes.

## What B is NOT

- B is not "make it more yellow everywhere." Yellow is the brand voice on **load-bearing surfaces** — hero, service-tile, locations eyebrow. The quiet bands (partner sentiment) stay neutral; the finance band intentionally inverts to dark to prevent yellow-fatigue.
- B is not "rebrand." The captured palette is unchanged; the captured typography is unchanged; the captured component shapes are unchanged. Only proportions shift.
- B is not a motion variant. Static — no marquee, no count-up, no split-flap, no reveal.
