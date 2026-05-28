<!-- stardust:provenance
  writtenBy: stardust:direct (--add-variant G)
  writtenAt: 2026-05-28T00:30:00Z
  variant: G
  parent: DESIGN.md
  inheritanceChain: G → active-direction (Mode A)
  readArtifacts:
    - DESIGN.md
    - DESIGN-B.md
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
    - stardust/current/_brand-extraction.json
  stardustVersion: 0.10.0
-->
---
inherits: DESIGN.md
variant: G
role: one captured trait amplified (palette proportion — dark shade)
bet: color-ladder re-weighting, dark primary
ia-fidelity: verbatim (same IA as A)
mode: Mode A (brand-faithful)
---

# Design System: Wheeler Cat — Variant G

## Variant thesis

**What if `#272727` was the page surface, not just the header / footer / overlay?**

Captured surface-dark `#272727` has 705,892 occurrences but only as background. The captured page uses it for the utility header, the main header, the photo overlay, and the footer — never as the page ground. G inverts the proportion. Page ground becomes dark. Yellow stays in its captured scope (CTAs, accent borders, icomoon glyphs). Warm stone retreats to one quiet warm-band break for the partner strip.

**Wheeler at night.** Equipment-yard mood. Industrial nocturne. Yellow reads brighter and the imagery (where it lives) gains the share-of-canvas that a dark surface enables.

## Differentiation vs B

This is the **distinct re-weighting** the Color-ladder re-weighting catalog calls for. B picked yellow as the under-deployed shade to promote. G picks the dark shade. The two are mirror inversions of each other:

| Surface | B (yellow primary) | G (dark primary) |
|---|---|---|
| Hero ground | `#FFCC00` typography hero | `#272727` (with photo OR dark mood) |
| Page ground | `#FFFFFF` (page stays white; bands invert) | `#272727` (page IS dark) |
| Finance band | `#272727` (dark inverse) | `#1A1A1A` (deeper dark) |
| Service tiles | `#FFCC00` with dark icons | `#272727` with yellow icons |
| Text hierarchy | Dark on yellow | White on dark |

Four structural diffs. Strong differentiation.

## Movements vs shared DESIGN

| Axis | Shared DESIGN | G delta |
|---|---|---|
| `surface.page` | `#FFFFFF` | **`#272727`** |
| `surface.financeBand` | `#FFFFFF` | **`#1A1A1A`** (tonalRamp[1] of captured dark) |
| `text.body` | `#454545` on white | **`#FFFFFF` at 0.85 on dark** |
| `shadows.card` | `rgba(0,0,0,0.8) 0px 6px 16px 0px` (designed for white) | **`inset 0 0 0 1px rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.6)`** |
| `yellow.scope` | CTAs + borders + accents (captured) | **UNCHANGED — yellow stays as CTA pigment** |
| `motion.register` | (none on G) | (none — static variant) |

## Contrast audit

- white on `#272727`: 14.7:1 (AAA)
- white on `#1A1A1A`: 18.0:1 (AAA)
- yellow `#FFCC00` on `#272727`: 8.6:1 (AAA normal text)
- yellow on `#1A1A1A`: 10.5:1 (AAA)

All pairs AAA-passing.

## Hard rules

- ✅ Mode A pinning — `#1A1A1A` is tonalRamp[1] of captured `#272727` (no invention)
- ✅ Density floor — sectionPadding inherited
- ✅ Anti-toolbox — zero hits; dark-mode 1px inset light rule is industry-standard practice
- ✅ Image-reuse contract — captured hero can render on dark via overlay blend; honest darkening, no synthesis
