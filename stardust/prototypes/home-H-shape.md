<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-28T01:00:00Z
  page:             home
  variant:          H
  pageUrl:          https://wheelercat.com/
  againstDirection: stardust/direction.md (Active — six-candidate fork; H is reimagined for ia-fidelity)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/home.json
    - DESIGN-H.md
    - DESIGN-H.json
    - stardust/uplift-improvements.md
  stardustVersion: 0.10.0
  surprise: medium
  substrateTransitions: { default: white, exceptions: [warm-stone @ finance-demoted-band] }
-->
---
slug: home
variant: H
url: https://wheelercat.com/
register: brand
bet: audience-routing reframe (renters-first)
ia-fidelity: reimagined (the ONLY exploration variant that moves IA)
---

# Page shape: home (variant H — renters-first IA reframe)

## Sections (in render order — IA REORDERED vs A)

1. **header** (carried, RENT NOW upweighted) — captured chrome; **RENT NOW nav link gets yellow ground + 700 weight** (was peer-equal in captured). Phone strip retained for service-callers.

2. **hero** (REIMAGINED — renters-led) — full-bleed `Compact_Track_Loader` photo with dark overlay; headline `RENT THE GEAR YOU NEED, TODAY` at 49px Roboto Condensed 700 (direction-authorized rewrite — captured surface has 'RENT NOW' CTA but no headline; classify); supporting line `Construction equipment, tools, and trailers across 18 branches — book online or call your nearest yard.` (direction-authorized synthesis of captured tagline); primary CTA `BROWSE RENTAL FLEET` (direction-authorized); secondary CTA `FIND YOUR BRANCH` (direction-authorized).

3. **rental fleet band** (NEW — second viewport, was finance carousel in captured) — eyebrow `RENTAL FLEET`; 4-up category grid: `COMPACT TRACK LOADERS` (icon-rent glyph) / `EXCAVATORS` (equipment glyph) / `LIGHT TOWERS` (icon-service or fallback) / `ATTACHMENTS` (icon-order). Each card: glyph + category label + availability line `<PLACEHOLDER · availability-count> e.g. 42 UNITS · 11 BRANCHES` + CTA `VIEW MODELS`. This is H's bet — answer renters' first question (what's available where).

4. **service tiles** (carried, position unchanged) — `WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD` band; 6-up icomoon row; preserved.

5. **finance band** (DEMOTED to fifth band, was first viewport) — warm stone `#E5E3DF` ground (signals 'still here, but secondary'); 3-up grid; headline `Finance options when you're ready to own` (direction-authorized softer framing — captured was 'FINANCING DEALS & SPECIAL OFFERS' as imperative).

6. **support-partners** (merged per improvement #2) — same as A; warm stone ground.

7. **locations-proof** (per improvement #4 + branch finder upweighted) — narrative proofs; **BRANCH FINDER widget upweighted** because renters need 'closest yard' as primary action.

8. **footer** (carried) — same captured 3-col on `#272727`.

## IA-priority audit override

Mode A's IA-priority preservation audit fires on the renter-foreground / finance-demote shift. H records:
- **multi-audience compression**: movable, override reason `audience pick — renters foregrounded; finance + sales-quote + service-call demoted but reachable in ≤ 1 click`
- **commercial-conversion (finance)**: movable, override reason `demoted from first-viewport to fifth band; preserved via header NEW QUOTE CTA + visible finance band still above-fold-scroll-depth`

All 6 captured audience CTAs reachable in ≤ 1 click from first viewport (verified: header retains NEW QUOTE / SHOP USED / RENT NOW / REQUEST SERVICE / CREDIT APP / phone).

## Anti-template pass

| Captured pattern | Default reflex | Alternatives | Picked | Rationale |
|---|---|---|---|---|
| Finance carousel hero | 3-up grid (improvement #1) | Grid · split-half · rental-led | **rental-led hero + grid-as-fifth-band** | H's bet — IA reframe |
| Multi-audience CTA compression | Same | Same · single-audience · audience-routing | **single-audience (renters) + secondary paths** | H's bet — pick one audience |

## Surprise budget

medium. H replaces one captured cliché (multi-audience first-viewport compression) with one bank move (single-audience routing + secondary-path preservation).

## Substrate transitions

default: white. exceptions: warm stone `#E5E3DF` for both finance-demoted band AND support-partners band (the two warm bands; warm stone reads as 'secondary surface' in the page rhythm). 1 substrate (warm stone) used in 2 positions — equivalent to 1 transition pattern. Well under cap.

## Heading hierarchy + voice classification

- h1 (hero): `RENT THE GEAR YOU NEED, TODAY` — direction-authorized rewrite
- Hero supporting line: direction-authorized synthesis
- Hero CTAs: direction-authorized (captured 'RENT NOW' template extended to 'BROWSE RENTAL FLEET' / 'FIND YOUR BRANCH')
- h2 (rental fleet band): `RENTAL FLEET` — direction-authorized
- Rental fleet category labels: direction-authorized industry vocabulary
- h3 (finance demoted headline): `Finance options when you're ready to own` — direction-authorized softer framing
- All other copy: captured-verbatim

## Unsourced content

- 5 partner logos
- 4 rental fleet availability counts (`X UNITS · Y BRANCHES` per category) — PLACEHOLDER · availability-count with shape hints. Renderable without the counts (just glyph + label + CTA), but the availability framing IS H's bet — migrate-guard catches before production.
