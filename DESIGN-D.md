<!-- stardust:provenance
  writtenBy: stardust:direct (--add-variant D)
  writtenAt: 2026-05-28T00:30:00Z
  variant: D
  parent: DESIGN.md
  inheritanceChain: D → active-direction (Mode A)
  readArtifacts:
    - DESIGN.md
    - DESIGN-A.md
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
  stardustVersion: 0.10.0
-->
---
inherits: DESIGN.md
variant: D
role: one captured trait amplified (static composition bet)
bet: display-typography scope expansion
ia-fidelity: verbatim (same IA as A)
mode: Mode A (brand-faithful)
---

# Design System: Wheeler Cat — Variant D

## Variant thesis

**What if Roboto Condensed CAPS was the page's structural voice — not just the heading vocabulary?**

The captured surface already shows the seed: 53% of headings are ALL-CAPS, every primary CTA label is ALL-CAPS, and Roboto Condensed 700 is the heading family at every level. But the family is **confined to heading tags** — nav links carry mixed-case workhorse Roboto; CTA labels render in workhorse Roboto with `text-transform: uppercase`; section eyebrows are weight 400. D promotes Roboto Condensed 700 ALL-CAPS into every structural surface where the brand register tolerates it: nav, CTAs, eyebrows, stat numerals, footer headings.

Nothing invented. Same family. Same weight. New scope.

## Differentiation vs siblings

- **vs A**: A applies the 1.250 modular scale and leaves nav / CTAs / eyebrows in workhorse Roboto. D applies a 1.333 (perfect-fourth) scale AND extends Roboto Condensed CAPS into 5 new surfaces. Three structural diffs.
- **vs C**: C is the cinematic-motion bet (kinetic-display register) on top of A's composition. D is the static composition bet on type scope. Three diffs: D has no motion runtime / no lenis / no signage marquee; D applies the 1.333 scale; D upweights eyebrows to 700.

## Movements vs shared DESIGN

| Axis | Shared DESIGN | D delta |
|---|---|---|
| `typography.scale` | 1.250 (major-third) | **1.333 (perfect-fourth)** |
| `typography.scope` | Display family confined to h1-h5 | **Display family extended to nav, primary CTAs, eyebrows, stat numerals, footer headings** |
| `typography.eyebrow.weight` | 400 (captured) | **700 + 0.12em tracking + hairline yellow underline** |
| `colors` | Pinned (Mode A) | Inherited as-is — no palette move |
| `spacing.sectionPadding.desktop` | 64px (density floor) | Inherited as-is |
| `motion.register` | (none on D) | (none — static variant) |

## IA-priority preservation

Inherits `iaPriorities[]` from shared DESIGN.json. Variants cannot opt out of preservation under Mode A.

## Hard rules

- ✅ Mode A pinning — no fonts outside captured surface; no colors outside captured palette
- ✅ Density floor — sectionPadding.desktop ≤ 64px (Wheeler has 6 sections)
- ✅ Type ratio ≥ 1.25 — 1.333 satisfies
- ✅ Anti-toolbox audit — zero hits (type-scope expansion is the single bet)

## Hands off

Improvements list (5 items in `stardust/uplift-improvements.md`) applied as a floor — D inherits A's carousel→3-up, sentiment+partner merge, stat-row retirement, locations consolidation, alt-text requirement.
