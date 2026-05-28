<!-- stardust:provenance
  writtenBy: stardust:direct (--add-variant I)
  writtenAt: 2026-05-28T00:30:00Z
  variant: I
  parent: DESIGN.md
  inheritanceChain: I → active-direction (Mode A)
  readArtifacts:
    - DESIGN.md
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
    - stardust/current/_brand-extraction.json
  stardustVersion: 0.10.0
-->
---
inherits: DESIGN.md
variant: I
role: one captured trait amplified (composition primitive)
bet: motif vocabulary swap — spec-sheet primitive
ia-fidelity: verbatim (same IA as A; only the hero primitive changes)
mode: Mode A (brand-faithful)
---

# Design System: Wheeler Cat — Variant I

## Variant thesis

**What if the home page led with the fleet, not the promo?**

Wheeler is an equipment dealer. The captured home page is dominated by promo creative — finance carousel, sentiment band, partner strip. The spec sheet — the substantive vocabulary every contractor scrolls — is absent. I swaps the dominant "image-with-overlay-headline" primitive for an equipment spec-sheet primitive: rows of `MODEL · CATEGORY · BRANCHES STOCKING · STARTING AT · CTA` as the hero composition.

A reader who arrives wanting to know "what does Wheeler have, what does it cost, where can I see it" gets answered immediately, instead of being marketed at.

## Differentiation vs siblings

- **vs A**: hero primitive (photo-overlay vs spec-table); second-band content (finance cards vs filter chips + table-paginated rows); reading rhythm (promo-led vs catalogue-led).
- **vs H**: H reframes IA to rental audience while keeping captured photo-led composition. I keeps captured multi-audience IA but swaps the composition primitive. Three diffs.
- **vs E**: opposite axes — E foregrounds photography; I foregrounds tabular spec data.

## Movements vs shared DESIGN

| Axis | Shared DESIGN | I delta |
|---|---|---|
| `hero.primitive` | Photo-with-overlay or photo-led card | **Spec table (model · category · branches · price · CTA)** |
| `motifs.patterns` | hero-with-cta-strip + icon-tile-row + image-with-overlay (captured dominants) | **Spec-table primitive introduced as the dominant; captured primitives retreat to supporting bands** |
| `filterBar` | (none in captured) | **Horizontal icomoon-chip filter rail (NEW · USED · RENT · ATTACHMENTS · COMPACT · MID · LARGE)** |
| `financeBand` | First viewport (captured) | **Second viewport (demoted to make canvas for spec-table)** |
| `motion.register` | (none on I) | (none — static variant; pairs naturally with kinetic-grid if a cinematic sibling is ever needed) |

## Unsourced content

- 8-12 spec-table rows — Wheeler's actual fleet inventory is not in the captured page. Renders with PLACEHOLDER · spec-row signatures and realistic Cat model codes as shape hints (CAT 259D3, CAT 308 — public Cat catalog references, classified as direction-authorized example data per the placeholder contract).
- Branch stocking counts (X of 18) per model — PLACEHOLDER · stocking-count.
- 5 partner logos (inherited from A/B/C).

The primitive renders without these (just rows of placeholder shape hints), but real fleet data unlocks the variant's substantive promise. **Migrate-guard catches before any production deploy.**

## Hard rules

- ✅ Mode A pinning — captured palette + captured typography unchanged
- ✅ Density floor — sectionPadding inherited
- ✅ Anti-toolbox — zero hits; spec-table is industry-native vocabulary
- ✅ Captured-icomoon reuse — filter chip glyphs use captured icon-new / icon-used / icon-rent at semantic position
