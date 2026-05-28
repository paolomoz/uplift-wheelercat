<!-- stardust:provenance
  writtenBy: stardust:uplift / prototype phase 5
  writtenAt: 2026-05-28T00:00:00Z
  page: home
  variant: B
  pageUrl: https://wheelercat.com/
  againstDirection: stardust/direction.md
  readArtifacts:
    - stardust/current/pages/home.json
    - DESIGN.md
    - DESIGN-B.md
  capturedSourceLineage:
    - section: header ; source: pages/home.json#landmarks[header]
    - section: hero ; source: voice.heroHeadline + voice.primaryCTALabel ; ground: yellow (B's bet — no photo)
    - section: finance ; source: pages/home.json#headings (3 finance titles) ; ground: dark
    - section: services ; source: pages/home.json#headings (6 service tile labels) ; ground: yellow tiles
    - section: support-partners ; source: pages/home.json#headings[WE PROUDLY...] + Campbell Companies + JLG + Monson + Gardner + SFS ; ground: warm stone
    - section: locations-proof ; source: 15 captured branch labels + direction-authorized narrative proof ; ground: yellow eyebrow + dark list
    - section: footer ; source: pages/home.json#landmarks[footer]
  antiTemplatePass:
    - pattern: slick-finance-carousel ; alts: 3-up grid (picked) — same as A
    - pattern: stat-row-floating-numerals ; alts: narrative proof (picked) — same as A
    - pattern: photographic-hero ; alts: typographic-on-yellow (picked, B's signature) — yellow as ownable surface
  substrateTransitions:
    default: yellow + dark alternation
    exceptions:
      - yellow hero → dark finance → yellow service-tiles on dark band → warm-stone partner → yellow eyebrow + dark list → dark footer
    note: 4 substrate transitions; substrate-keyed by B's palette-proportion bet — every transition load-bearing
  voiceClassification:
    - section: hero ; classification: captured-verbatim + direction-authorized supporting line
    - section: finance ; classification: captured-verbatim
    - section: services ; classification: captured-verbatim
    - section: support-partners ; classification: captured-verbatim sentiment + PLACEHOLDER · brand-logo
    - section: locations-proof ; classification: direction-authorized narrative proof + captured branch labels
    - section: footer ; classification: captured-verbatim
  surpriseTier: medium
  dominantDimension: color-ladder/yellow-as-primary-surface
  compositionDelta_vs_A:
    - hero ground: yellow (B) vs photographic (A)
    - finance ground: dark (B) vs white (A)
    - service-tile ground: yellow with dark glyph (B) vs dark with yellow glyph (A)
  compositionDelta_vs_C:
    - palette proportions: yellow-primary (B) vs A-proportions (C)
    - hero ground: yellow (B) vs photographic (C)
    - motion: static (B) vs kinetic-display (C-cinematic)
-->
---
slug: home
variant: B
url: https://wheelercat.com/
register: brand
surprise: medium
dominantDimension: color-ladder/yellow-as-primary-surface
---

# Page shape: home — Variant B (Cat Yellow as primary surface)

Same IA as A — only palette proportions invert. The bet is color-ladder re-weighting, not composition.

## Sections (in render order)

1. **header** — Dark utility bar + dark main header (universal chrome retained on dark regardless of B's yellow hero — utility-bar phone always visible).

2. **hero** — **Full-bleed Cat Yellow `#FFCC00` ground.** Dark `#272727` Roboto Condensed display copy "FINANCING DEALS & SPECIAL OFFERS" at 76px display. Dark-on-yellow CTA inverted: dark `#272727` button with yellow text "BROWSE MORE SERVICES". Captured photo NOT promoted — yellow ground IS the primary surface.

3. **finance** — **Inverted dark `#272727` band.** Three dark finance cards with yellow eyebrow stripes across the top, yellow numerals (the `0%`, `60`, `$500`), white body. NO carousel — 3-up grid.

4. **services** — **Cat Yellow `#FFCC00` tile background** on a dark `#272727` band. icomoon glyphs render dark `#272727`; tile labels dark Roboto Condensed caps. The most striking inversion — yellow tiles read as Caterpillar equipment plates.

5. **support-partners** — Warm stone `#E5E3DF` ground (the quiet band between yellow surfaces). Sentiment + partner strip merged.

6. **locations-proof** — Yellow `#FFCC00` eyebrow band (~120px tall) carrying narrative proof and the section heading "FIND YOUR NEAREST BRANCH" in dark display caps. Below: dark `#272727` block carrying the 15-branch list in light text.

7. **footer** — Dark `#272727` (universal chrome).

## Surface map verification

| Band | Ground | Headline | Body | CTA |
|---|---|---|---|---|
| Utility | #272727 | #FFFFFF | #FFCC00 phone | — |
| Header | #272727 | #FFFFFF | — | #FFCC00 |
| Hero | #FFCC00 | #272727 | #272727 | #272727/#FFCC00 inverted |
| Finance | #272727 | #FFFFFF | #FFFFFF | #FFCC00 |
| Services | #FFCC00 tiles on #272727 | #272727 (on tile) | #272727 | — |
| Partners | #E5E3DF | #272727 | #454545 | — |
| Locations | #FFCC00 eyebrow + #272727 list | #272727 / #FFFFFF | #454545 / #FFFFFF | — |
| Footer | #272727 | #FFFFFF | #FFFFFF | — |

White-on-yellow is BANNED (1.95:1 fail). Where yellow is the ground, text is always `#272727`.

## Data attributes

Same as A. `data-section` / `data-intent` / `data-layout` identical; only `data-ground` and visual treatment differ.

## Unsourced content

- partner logos (×5) — same as A, text-as-logo PLACEHOLDER · brand-logo.
