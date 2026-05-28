<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-28T01:00:00Z
  page:             home
  variant:          D
  pageUrl:          https://wheelercat.com/
  againstDirection: stardust/direction.md (Active — six-candidate fork added 2026-05-28)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/home.json
    - DESIGN-D.md
    - DESIGN-D.json
    - stardust/direction.md
    - stardust/uplift-improvements.md
  stardustVersion: 0.10.0
  capturedSourceLineage: per-section, see below
  antiTemplatePass: see compositionDeltas
  surprise: medium
  substrateTransitions: { default: white, exceptions: [warm-stone @ support-partners] }
  voiceClassification: per-section, see below
-->
---
slug: home
variant: D
url: https://wheelercat.com/
register: brand
bet: display-type scope expansion
---

# Page shape: home (variant D — display-typography amplification)

## Sections (in render order)

1. **header** (site-wide system-component, carried from `_brand-extraction.json#systemComponents[header]`) — dark utility bar (Sponsorships left, "BRANCHES · 801-436-3672" right with icomoon map-pin + phone) + main header (logo left, **6-link nav rendered Roboto Condensed 700 ALL-CAPS 0.04em tracking — D's bet move** ✦, yellow phone strip right). voice classification: nav labels = captured-verbatim with case-normalized treatment.

2. **hero** (derived from `pages/home.json#sections[1]` finance hero) — full-bleed photo background (../current/assets/media/SC_Hero-292cc4.jpg) with `rgba(18,18,18,0.5)` overlay. Headline `FINANCING DEALS & SPECIAL OFFERS` rendered Roboto Condensed 700 at **65px / -0.005em** (D's 1.333 scale top). Subhead Roboto Condensed 400 21px ALL-CAPS 0.06em tracking. CTA `BROWSE MORE SERVICES` rendered **Roboto Condensed 700** (D's bet move ✦). voice: heading captured-verbatim; subhead direction-authorized rewrite of captured tagline.

3. **finance band** (carried from `pages/home.json#sections[2]`, restructured per improvement #1) — 3-up CSS grid (no carousel). Each card: **eyebrow `FINANCE` rendered Roboto Condensed 700 12px 0.12em with hairline yellow underline** (D's bet move ✦), then headline (37px Roboto Condensed 700 caps), then CTA. Card 1: `0% FOR UP TO 60 MONTHS + $500 TOWARD CVA`. Card 2: `FINANCING & FUEL PAYBACK OFFERS`. Card 3: `CAT® CARD IS NOW CAT® COMMERCIAL ACCOUNT`. All copy captured-verbatim.

4. **service tiles** (carried from `pages/home.json#sections[3]`) — eyebrow `WE PROUDLY SUPPORT…` collapsed into bands per improvement #2; band title `YOUR HEAVY MACHINERY EXPERTS` at 49px Roboto Condensed 700; 6-up icon-tile row (FIELD SERVICE / SHOP SERVICE / PARTS.CAT.COM / MAINTENANCE SERVICE / REQUEST SERVICE / REBUILDS) on dark `#272727` ground with yellow icomoon glyphs. Tile labels at 28px Roboto Condensed 700.

5. **support-partners band** (merged per improvement #2 — sentiment + partner strip in one band) — warm stone `#E5E3DF` ground; sentiment headline at 28px Roboto Condensed 700; partner logos in a row (5 placeholder positions for Campbell / JLG / Monson / Gardner / SFS, marked PLACEHOLDER · brand-logo per content-sourcing).

6. **locations-proof** (restructured per improvement #4 — narrative proofs replace floating numerals) — 3 scannable proofs at 49px Roboto Condensed 700 inline with 21px Roboto 400 supporting text: "**18 branches** across UT · AZ · NV · WY" / "**Same-day field service** since 1951" / "**24/7 phone support** — 801-436-3672". Below: section title `FIND YOUR NEAREST BRANCH` (49px Roboto Condensed 700) + 3-col branch grid (text-only, no map iframe).

7. **footer** (site-wide system-component, carried from `_brand-extraction.json#systemComponents[footer]`) — 3-col on `#272727`: QUICK LINKS / CONTACT US / CONNECT WITH US. **Column headings Roboto Condensed 700 21px 0.08em — D's bet move** ✦.

## Anti-template pass

| Captured pattern | Default reflex | Alternatives | Picked | Rationale |
|---|---|---|---|---|
| Slick carousel hero promo | 3-up grid (improvement #1) | Carousel · tab-switcher · grid | **3-up grid** | Improvement #1 + visible-at-fold contract |
| 6-up icomoon tile row | Same pattern | Grid stays · vertical list · accordion | Same pattern | Brand-faithful (icomoon set is captured; tile row IS Wheeler's vocabulary) |
| Stat-row 18/75/24 | Retired (improvement #4) | Retired · cinematic counter (C only) · narrative proof | **Narrative proof** | Improvement #4 |

## Surprise budget

medium (default for one-trait-amplified variants under reimagined). D replaces one captured cliché (eyebrow weight 400 lifelessness) with one bank move (display-cap eyebrow plate at weight 700 + yellow hairline rule).

## Substrate transitions

default: white. exceptions: warm stone `#E5E3DF` for support-partners band only. 1 transition, well under the ≤ 2 cap.

## Heading hierarchy + voice classification

- h1 (hero): `FINANCING DEALS & SPECIAL OFFERS` — captured-verbatim
- h2 (service section, locations section, finance card titles): captured-verbatim
- h3 (finance card eyebrows, service tile labels): captured-verbatim
- Nav links: captured-verbatim (text); direction-authorized rewrite (case treatment ALL-CAPS)
- CTA labels: captured-verbatim
- Footer column heads: captured-verbatim

## Unsourced content

- 5 partner logos (inherited from A/B/C placeholder set)

No other invented content.
