<!-- stardust:provenance
  writtenBy: stardust:direct (--add-variant E)
  writtenAt: 2026-05-28T00:30:00Z
  variant: E
  parent: DESIGN.md
  inheritanceChain: E → active-direction (Mode A)
  readArtifacts:
    - DESIGN.md
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
    - stardust/current/_brand-extraction.json
  stardustVersion: 0.10.0
-->
---
inherits: DESIGN.md
variant: E
role: one captured trait amplified (composition + scale bet)
bet: photography re-foregrounding
ia-fidelity: verbatim (same IA as A; finance band moves below service tiles)
mode: Mode A (brand-faithful)
---

# Design System: Wheeler Cat — Variant E

## Variant thesis

**What if the equipment photos breathed at editorial scale?**

The captured surface ships 52 images — including equipment portraits (Compact Track Loader, Excavators) at full WordPress media library resolution. The home page crops them to ≤ 280×180 thumbnails. E restores them to 3:2 hero share-of-canvas and replaces the icomoon-glyph service tiles with photo-card tiles where photography exists.

**Honest exposure.** The captured photography is product-documentation tier, not editorial commissions. E renders at editorial scale anyway — and the gap between "what the layout asks of the photo" and "what the photo can deliver" is itself the presales artifact. The brand owner sees what a photography investment would unlock.

## Differentiation vs siblings

- **vs A**: hero asset (equipment portrait vs SC_Hero finance creative); hero composition (caption-plate vs overlay); finance band position (third viewport vs second).
- **vs B**: hero ground (photo vs yellow); service tiles (photo-card vs yellow-tile); no palette inversion.

## Movements vs shared DESIGN

| Axis | Shared DESIGN | E delta |
|---|---|---|
| `hero.composition` | Photo with dark overlay + over-photo headline | **Photo full-bleed, no overlay; caption-plate carries text** |
| `cards.composition` | Text-led with optional photo | **Photo-first (60% image, 40% text)** |
| `serviceTiles.pattern` | icomoon glyph on dark ground | **Equipment photo with bottom caption; icomoon as fallback when no photo** |
| `financeBand.position` | Second viewport | **Third viewport (after service tiles)** |
| `colors` | Pinned (Mode A) | Inherited as-is |
| `motion.register` | (none on E) | (none — static variant) |

## Anti-toolbox: 1 hit, justified

- **Hero text on photographic background without contrast scrim** — E avoids this by using a caption-plate (opaque white ground with sharp edges) instead of text-over-photo. The plate IS the scrim equivalent.

## Hard rules

- ✅ Mode A pinning — captured photography reused at semantic position (hero → hero); no synthesized images
- ✅ Density floor — sectionPadding inherited from shared DESIGN
- ✅ IA-priority preservation — finance still above-fold scroll depth; just demoted from hero share

## Honest gap

Recommend photo commission roadmap as a parallel deliverable. The rendered file dramatically improves with editorial-grade equipment portraits at the same composition. Logged in `_provenance.photographyMaturityNote`.
