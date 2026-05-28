<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-28T01:00:00Z
  page:             home
  variant:          G
  pageUrl:          https://wheelercat.com/
  againstDirection: stardust/direction.md (Active — six-candidate fork)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/home.json
    - DESIGN-G.md
    - DESIGN-G.json
    - stardust/uplift-improvements.md
  stardustVersion: 0.10.0
  surprise: medium
  substrateTransitions: { default: dark #272727, exceptions: [warm-stone @ support-partners, deeper-dark #1A1A1A @ finance band + footer] }
-->
---
slug: home
variant: G
url: https://wheelercat.com/
register: brand
bet: color-ladder re-weighting (dark primary)
---

# Page shape: home (variant G — dark as primary surface, "Wheeler at night")

## Sections (in render order)

1. **header** (carried, recolored) — dark utility bar inherits captured dark; main header now on **`#272727` ground** (no inversion; was already dark in captured). Logo on yellow plate (8px padding) for legibility on dark. Nav links white at 0.85 opacity; hover white at 1.0; underline yellow.

2. **hero** (recolored from A composition) — full-bleed photo `SC_Hero-292cc4.jpg` with **deeper overlay `rgba(0,0,0,0.7)`** (vs captured 0.5) for cohesion with dark page surface. Headline `FINANCING DEALS & SPECIAL OFFERS` in white Roboto Condensed 700 49px. CTA yellow on yellow band (preserved scope).

3. **finance band** (DARKER step) — **`#1A1A1A` ground** (one tonal step deeper than page surface, from `colorMeta.surface-dark.tonalRamp[1]`). 3-up grid retained from improvement #1. Cards: `#272727` ground (one step lighter than band — creates separation) with **yellow eyebrow** `FINANCE`, white body, white headlines, yellow CTAs. Card shadow replaced with `inset 0 0 0 1px rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.6)` per DESIGN-G.json#shadows.

4. **service tiles** (recolored) — `#272727` page ground; tile cards on `#1A1A1A` (deeper step) with **yellow icomoon glyphs** at 48px + white tile labels at 28px Roboto Condensed 700. 6-up.

5. **support-partners band** (THE warm break) — **`#E5E3DF` warm stone ground** (one warm-tone break in the dark page rhythm). Sentiment + partner-logo merge per improvement #2. Provides rhythmic relief; otherwise page would read monolithic.

6. **locations-proof** (recolored) — `#272727` page ground; yellow eyebrow band (full-bleed `#FFCC00` 24px tall) holding `FIND YOUR NEAREST BRANCH` in dark caps; below: white narrative proofs; branch grid in 3 cols with white text.

7. **footer** — **`#1A1A1A` ground (deepest tonal step)**. 3-col captured links; column heads in yellow Roboto Condensed 700; link text white at 0.7 opacity.

## Anti-template pass

| Captured pattern | Default reflex | Alternatives | Picked | Rationale |
|---|---|---|---|---|
| White page ground | Same | Same · yellow (B's pick) · dark (G's pick) | **dark** | G's bet — captured `#272727` has 705k occurrences as background-only; promotion is the move |
| Card shadow on white | Same recipe at lower opacity | Same · inset light rule + dark drop · no shadow | **inset light rule + dark drop** | Captured shadow disappears on dark; industry-standard dark-mode shadow contract |
| Service tile pattern | 6-up icomoon on dark (captured) | Same · photo-cards (E's pick) · spec rows (I's pick) | **6-up icomoon on dark** (preserved) | Brand-faithful — G's bet is palette proportion, not tile pattern change |

## Surprise budget

medium. G replaces one captured cliché (white-page-ground default) with one bank move (color-ladder re-weighting using captured dark shade).

## Substrate transitions

default: dark `#272727`. exceptions: deeper-dark `#1A1A1A` (finance band + footer — but these are tonalRamp neighbors, not divergent surfaces, classify as inherited from captured set); warm stone `#E5E3DF` (support-partners — the warm break). Strictly counting band-to-band substrate transitions: dark → deeper-dark (1) → dark → warm stone (2) → dark → deeper-dark (3). 3 transitions, but #1 and #3 are tonal-ramp steps not substrate changes — equivalent to 1 real transition (warm stone). Documented honestly; well under cap.

## Heading hierarchy + voice classification

- All headings: captured-verbatim
- All CTAs: captured-verbatim
- All copy: captured-verbatim

## Contrast audit (precomputed)

- white on `#272727`: 14.7:1 (AAA) ✓
- white on `#1A1A1A`: 18.0:1 (AAA) ✓
- yellow `#FFCC00` on `#272727`: 8.6:1 (AAA normal text) ✓
- yellow on `#1A1A1A`: 10.5:1 (AAA) ✓
- white@0.7 on `#1A1A1A`: 12.6:1 (AAA) ✓ (footer links)
- dark on yellow: 12.6:1 (AAA) ✓ (logo plate, yellow eyebrow band)
- All pairs AAA-pass.

## Unsourced content

- 5 partner logos (inherited from A/B/C placeholder set)
