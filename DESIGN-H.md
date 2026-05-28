<!-- stardust:provenance
  writtenBy: stardust:direct (--add-variant H)
  writtenAt: 2026-05-28T00:30:00Z
  variant: H
  parent: DESIGN.md
  inheritanceChain: H → active-direction (Mode A, ia-fidelity reimagined for this variant only)
  readArtifacts:
    - DESIGN.md
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
    - stardust/current/pages/home.json
    - stardust/current/_brand-extraction.json
  stardustVersion: 0.10.0
-->
---
inherits: DESIGN.md
variant: H
role: one captured audience amplified (IA reframe)
bet: audience-routing reframe — renters-first
ia-fidelity: reimagined (the ONLY variant in the set that reframes IA)
mode: Mode A (brand-faithful — palette + typography pinned; only IA moves)
---

# Design System: Wheeler Cat — Variant H

## Variant thesis

**What if the page led with renters, not finance?**

Wheeler's own tagline names rentals first: *"Construction Equipment, Tool & Trailer Rental & Sales across 18 locations."* But the captured home page leads with a finance carousel, with RENT NOW as one of six competing CTAs above the fold. H untangles the multi-audience compression: rental fleet leads the page, finance demotes to a secondary band, sales-quote and service-call paths stay accessible but smaller.

## Why renters?

Three signals favor rentals as the priority pick:
- Tagline ordering puts rental first.
- "RENT NOW" is one of only 7 captured nav links — earning it nav-level treatment.
- The captured icomoon set ships dedicated rent / tool / trailer glyphs (icon-rent, plus equipment-category glyphs).

Other audiences (contractors, fleet operators, service-callers, parts-buyers, sponsorship-applicants) stay reachable in ≤ 1 click from first viewport. **Demoted, not removed.**

## Differentiation vs all others

H is the only variant in the set that reframes IA. Every sibling preserves the captured sequence.

| Surface | A-G & I (verbatim IA) | H (reimagined) |
|---|---|---|
| Hero verb | BROWSE MORE SERVICES (captured) | **RENT NOW / BROWSE RENTAL FLEET** |
| Second-band | Finance carousel / cards | **Rental-fleet category grid (4-up)** |
| Finance position | First-viewport hero adjacency | **Third band, warm-stone ground** |
| CTA hierarchy | Multi-verb (captured) | **Renters-led; others secondary** |

Four structural diffs vs every sibling.

## IA-priority audit override

Mode A's IA-priority preservation audit fires on the renter-foreground / finance-demote shift. H records the override under reimagined-mode mutability:

- **multi-audience compression**: status `movable`, override reason `audience pick — renters foregrounded; finance + sales-quote + service-call demoted but reachable in ≤ 1 click`
- **commercial-conversion (finance)**: status `movable`, override reason `demoted from first-viewport to third band; preserved via header NEW QUOTE CTA`
- **crisis-affordance**: not applicable (Wheeler has no crisis affordance)

All other IA priorities inherit verbatim from DESIGN.json.

## Unsourced content

- 5 partner logos (inherited from A/B/C)
- Rental-fleet availability counts (X UNITS · Y BRANCHES per category): direction-authorized addition; renders as PLACEHOLDER · availability-count signature. Counts are not in captured page; require a Wheeler-supplied inventory snapshot before production. The fleet category grid renders without them, but the availability framing is what makes H's bet land.

## Hard rules

- ✅ Mode A pinning — palette + typography unchanged
- ✅ Density floor — sectionPadding inherited
- ✅ Anti-toolbox — zero hits
- ✅ Audience preservation — all 6 captured audience CTAs reachable in ≤ 1 click from first viewport
- ✅ Migrate-guard — placeholder availability counts are caught by migrate refusal until real counts supplied
