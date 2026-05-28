<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-28T01:00:00Z
  page:             home
  variant:          I
  pageUrl:          https://wheelercat.com/
  againstDirection: stardust/direction.md (Active — six-candidate fork)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/home.json
    - DESIGN-I.md
    - DESIGN-I.json
    - stardust/uplift-improvements.md
  stardustVersion: 0.10.0
  surprise: medium
  substrateTransitions: { default: white, exceptions: [warm-stone @ finance-demoted-band, warm-stone @ support-partners] }
-->
---
slug: home
variant: I
url: https://wheelercat.com/
register: brand
bet: motif vocabulary swap (equipment spec-sheet primitive)
---

# Page shape: home (variant I — spec-sheet primitive as hero)

## Sections (in render order)

1. **header** (carried) — captured chrome verbatim.

2. **hero eyebrow strip** (NEW — replaces photo-overlay hero) — full-width thin band on `#272727` with white Roboto Condensed 700 caps: `TODAY'S FLEET · 18 BRANCHES · UT · AZ · NV · WY · 1,200+ MACHINES IN STOCK` (counts marked PLACEHOLDER · fleet-stat; tagline portion direction-authorized synthesis of captured tagline + branch claim).

3. **filter chip rail** (NEW) — horizontal scrollable chip rail with captured icomoon glyphs: `🆕 NEW · ⚙️ USED · ⟲ RENT · 🔧 ATTACHMENTS · ⛏ COMPACT · 🏗 MID · 🏔 LARGE`. (Glyphs are icomoon classes — icon-new, icon-used, icon-rent, icon-order, plus three direction-authorized category chips using existing icomoon set.) Active chip: yellow `#FFCC00` ground; inactive: white ground + 1px `#E5E3DF` border.

4. **spec table** (NEW — I's bet) — equipment fleet table. Columns: `▲ MODEL · CATEGORY · BRANCHES STOCKING · STARTING AT · CTA`. Header row: dark `#272727` with white Roboto Condensed 700 14px column labels. Data rows: white ground, hairline `#E5E3DF` row separators, alternating `rgba(229,227,223,0.3)` zebra. Row content: MODEL in Roboto Condensed 700 21px tabular-nums; CATEGORY in Roboto 400 16px; BRANCHES STOCKING in Roboto 700 tabular-nums 16px (e.g. `14 of 18`); STARTING AT in Roboto 700 tabular-nums 21px ($-prefixed); CTA `BROWSE` rendered as Roboto Condensed 700 ALL-CAPS link with yellow underline.

   - **Row data**: 8-12 PLACEHOLDER · spec-row entries with realistic Cat model codes (CAT 259D3, CAT 308, CAT D6, CAT 938M, CAT 950M, CAT 320, CAT 336, etc. — public Cat catalog references classified as direction-authorized example data per the placeholder contract).
   - **Hover**: row gains 4px yellow left-rule; CTA picks up yellow ground.
   - Pagination at bottom: `1 2 3 ... 47` with yellow active state. Placeholder pagination count.

5. **finance band** (DEMOTED to fifth band, was first viewport) — warm stone ground; 3-up grid; captured copy preserved.

6. **service tiles** (carried — services don't need spec-table treatment; they're CTAs not catalogues) — same as A.

7. **support-partners** (merged per improvement #2) — warm stone.

8. **locations-proof** (per improvement #4) — narrative proofs + branch grid.

9. **footer** (carried) — captured.

## Anti-template pass

| Captured pattern | Default reflex | Alternatives | Picked | Rationale |
|---|---|---|---|---|
| Photo-with-overlay-headline hero | Same (improvement #1's 3-up replaces carousel) | Same · spec table · photo grid | **spec table** | I's bet — substantive vocabulary native to equipment dealers |
| Slick finance carousel | 3-up grid (improvement #1) | Grid · spec rows · stays carousel | **3-up grid** (improvement #1) | Improvement applied; spec primitive is for fleet not finance |

## Surprise budget

medium. I replaces one captured cliché (photo-overlay hero) with one bank move (spec-table primitive). High-value substitution but a single bet.

## Substrate transitions

default: white. exceptions: dark `#272727` for hero eyebrow strip (thin band; tonal step from page surface to mark "system header"); warm stone `#E5E3DF` for finance-demoted band + support-partners (single substrate, 2 positions). 2 transitions, at cap.

## Heading hierarchy + voice classification

- Hero eyebrow strip text: direction-authorized synthesis from captured tagline
- Filter chip labels: direction-authorized (industry vocabulary; icomoon glyphs reused at semantic position)
- Spec-table column labels (`MODEL`, `CATEGORY`, `BRANCHES STOCKING`, `STARTING AT`, `CTA`): direction-authorized chrome
- Spec-table row data: PLACEHOLDER · spec-row (Cat model codes as shape hints; direction-authorized example data per placeholder contract)
- All other section headings: captured-verbatim

## Unsourced content

- 5 partner logos
- 1 fleet-stat figure in hero eyebrow strip (`1,200+ MACHINES IN STOCK`) — PLACEHOLDER · fleet-stat
- 8-12 spec-table rows — PLACEHOLDER · spec-row with Cat model code shape hints
- Branch stocking counts per row (`X of 18`) — PLACEHOLDER · stocking-count
- Total catalog page count for pagination — PLACEHOLDER · pagination-count

The primitive renders without these (placeholder shape hints land), but real fleet data unlocks the variant's substantive promise. Migrate-guard catches before production.
