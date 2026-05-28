---
_provenance:
  writtenBy: stardust:uplift
  writtenAt: 2026-05-27T21:51:21Z
  againstInput: https://wheelercat.com/
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/home.json
    - stardust/current/brand-review.html
---

# "What if…" candidates — https://wheelercat.com/

## Picked

### Variant C · Display-typography amplification

**What if Roboto Condensed CAPS was the page's structural voice and the numbers were kinetic?**

Cinematic register: **kinetic-display**
Evidence:
- `_brand-extraction.json § type.headingFamily` — Roboto Condensed 700 used at 18/20/22/29/30/40/42 px across h1–h5.
- `_brand-extraction.json § voiceTable.toneMetrics` — 53% of headings ALL-CAPS, distinct CTA labels = 42 (most ALL-CAPS imperative).
- `_brand-extraction.json § voice.heroHeadline` — "FINANCING DEALS & SPECIAL OFFERS" (display-cap).
- `_brand-extraction.json § voice.ctaSamples` — "BROWSE MORE SERVICES", "REQUEST SERVICE", "CREDIT APP" (all-cap imperatives).
- Heavy numerical content: "0% FOR UP TO 60 MONTHS + $500 TOWARD CVA", stat row "18 / 75 / 24", model codes, financing percentages.

Motion bet: monogram unmask of "WHEELER" on hero load (letter-by-letter clip-path); split-flap reveal of financing percentages ("0%" / "60" / "$500"); top-of-page signage marquee scrolling current offers ("FINANCING DEALS · 0% APR · FUEL PAYBACK · CVA BONUS"); "18 / 75 / 24" stat row count-up on IO trigger; section heads wipe in left-to-right at scroll; large display copy reveals with `filter: blur(8px → 0)`.

### Variant B · Color-ladder re-weighting

**What if Cat Yellow `#FFCC00` became the page's primary surface, not just the CTA pigment?**

Captured trait amplified: Color-ladder re-weighting
Evidence:
- `_brand-extraction.json § palette` — Cat Yellow `#FFCC00` shows 71,464 occurrences but `usedAs: ["background", "border"]` only on `.btn-yellow`, `a.cta-button`, and 1px border accents.
- Dark surface `#272727` has 705,892 occurrences as background; warm stone `#E5E3DF` has 616,032. Yellow is 10× under-deployed relative to the neutrals it sits between.
- `_brand-extraction.json § motifs.patterns` — every patterned section ends in a yellow rectangular CTA (uniform button-only deployment).
- Cat Yellow is Caterpillar's protected dealer identity and the most recognisable industrial-yellow in America — the brand has earned the right to use it as a primary ground, not a button color.

Composition bet: hero becomes a **Cat Yellow ground** (full-bleed yellow band with dark Roboto Condensed display copy and a yellow-on-dark CTA reversal); finance band sits on dark `#272727` (the inverted pairing); service tiles use yellow as the tile background with the icomoon glyph rendered dark; partner strip + stat row sit on a yellow eyebrow band. The palette is unchanged — only its **proportions** shift. The page reads as "Cat Yellow as the brand's voice."

## Disqualified

- **Photography re-foregrounding** — disqualified because the captured photography is operational/product documentation, not editorial. The "hero" `SC_Hero-292cc4.jpg` is a finance/sales offer creative (typography card), not a photograph. The `Compact_Track_Loader` and `Wheeler_Campus` assets are WordPress media-library tier — competent but generic. Amplifying them to 3:2 hero scale would expose the non-editorial quality.

- **Live-data promotion** — disqualified because no real-time operational data is captured. Wheeler does not expose inventory live counts, branch open-now status, or fleet availability on the home page. (Would be a strong candidate IF the data existed — a future Wheeler with live equipment availability per branch could lean here.)

- **Voice-register pivot** — disqualified because voice samples are uniform: ALL-CAPS imperative throughout (`_brand-extraction.json § voice.tone.guess: "bold-direct"`; tone metrics show 53% uppercase headings and 42 distinct ALL-CAPS CTA labels). There is no underused softer tone to lean into; the brand's voice is one register, consistently.

## Considered but not picked

- **Signature-gesture extension** — partial trigger; no signature wordmark/monogram beyond the standard logo, no custom illustrated motif. Cat Yellow as a "signature color gesture" is real but maps better to Color-ladder re-weighting (which is B's pick). Not picked.

- **Audience-routing reframe** — triggered (>4 distinct verbs above the fold: BROWSE, NEW QUOTE, SHOP USED, RENT NOW, REQUEST SERVICE, CREDIT APP; the page serves contractors + renters + service-callers + parts-buyers + jobseekers + sponsorship-applicants). But picking one audience and demoting the others risks losing visitors a Cat dealer cannot afford to lose, and the move is more product-strategy than presales-design. Not picked.

- **Motif vocabulary swap** — triggered (the dominant primitives are "hero-with-cta-strip", "icon-tile-row", "image-with-overlay-headline"; underused primitives include indexed list and spec-sheet table). But this maps to register `kinetic-grid`, which would compete with C's chosen `kinetic-display`. Holding for a future iteration if the buyer wants a fourth direction.
