<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-28T01:00:00Z
  page:             home
  variant:          E
  pageUrl:          https://wheelercat.com/
  againstDirection: stardust/direction.md (Active — six-candidate fork)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/home.json
    - DESIGN-E.md
    - DESIGN-E.json
    - stardust/uplift-improvements.md
  stardustVersion: 0.10.0
  surprise: medium
  substrateTransitions: { default: white, exceptions: [warm-stone @ finance, photo-as-background @ support-partners] }
-->
---
slug: home
variant: E
url: https://wheelercat.com/
register: brand
bet: photography re-foregrounding
---

# Page shape: home (variant E — photography re-foregrounding)

## Sections (in render order)

1. **header** (carried from `_brand-extraction.json#systemComponents[header]`) — captured chrome preserved verbatim. Voice: captured-verbatim throughout.

2. **hero** (recomposed per E's bet) — full-bleed photo `../current/assets/media/Compact_Track_Loader-<hash>.jpg` at 3:2 with NO dark overlay. **Caption-plate** bottom-left: 480×280 white card, 32px padding, holding eyebrow `FINANCE` + h1 `FINANCING DEALS & SPECIAL OFFERS` (49px Roboto Condensed 700) + supporting line `Cat® finance offers and current incentives across the Wheeler fleet.` (direction-authorized rewrite of captured tagline) + primary CTA `BROWSE MORE SERVICES` on yellow.

3. **service tiles** (advanced to second band — moved up because E's hero is photo-led, freeing space for photo-card service treatment) — **photo-card pattern**: 60% image / 40% caption. 6 tiles using equipment images where available (Compact_Track_Loader / Excavators / Wheeler_Campus / etc.). For categories without a captured photo (FIELD SERVICE, SHOP SERVICE, PARTS.CAT.COM, MAINTENANCE SERVICE), fall back to icomoon glyph on warm-stone tile with `PLACEHOLDER · photo-needed` ribbon. Tile labels at 28px Roboto Condensed 700 caps overlaid on photo with dark gradient bottom 40% for legibility.

4. **finance band** (DEMOTED to third band per E's composition) — warm stone `#E5E3DF` ground; 3-up grid retained from improvement #1. Same finance card content as A.

5. **support-partners band** (recomposed) — `../current/assets/media/Wheeler_Campus-<hash>.jpg` as section background at 90% darkness (rgba(255,255,255,0.85) white overlay on top); sentiment + partner-logo card floats in center. Partners as PLACEHOLDER · brand-logo (same 5 as A/B/C).

6. **locations-proof** (improvement #4 + branch grid) — same as A.

7. **footer** (carried) — captured 3-col.

## Anti-template pass

| Captured pattern | Default reflex | Alternatives | Picked | Rationale |
|---|---|---|---|---|
| Hero photo + overlay + headline | Same pattern at scale | Same pattern · caption-plate · split-half | **caption-plate** | Avoids text-on-photo legibility issue; honors E's photo-foregrounding |
| icomoon service tiles | Same | Photo-cards · icomoon-only · mixed | **photo-cards (with icomoon fallback)** | E's bet: equipment photos at editorial scale wherever available |

## Surprise budget

medium. E replaces TWO captured clichés: (1) hero overlay+headline → caption-plate composition; (2) icomoon-only service tiles → photo-card tiles. One bank move per cliché.

## Substrate transitions

default: white. exceptions: warm stone `#E5E3DF` (finance band); Wheeler_Campus photo-as-background (support-partners). 2 transitions, at the cap.

## Heading hierarchy + voice classification

- h1 (hero caption-plate): `FINANCING DEALS & SPECIAL OFFERS` — captured-verbatim
- Supporting line in caption-plate: direction-authorized rewrite
- h2 (service section, finance section, locations): captured-verbatim
- Service tile labels: captured-verbatim
- All other copy: captured-verbatim

## Unsourced content

- 5 partner logos (PLACEHOLDER · brand-logo)
- Service tiles where no captured equipment photo exists for that category: 4 PLACEHOLDER · photo-needed ribbons (FIELD SERVICE, SHOP SERVICE, PARTS.CAT.COM, MAINTENANCE SERVICE — these are service categories not equipment categories; honest gap)

## Photography maturity note

Captured photography is product-documentation tier, not editorial. The rendered file makes that gap visible at editorial scale. The provenance carries `photographyMaturityNote` per DESIGN-E.json — the gap IS the presales artifact.
