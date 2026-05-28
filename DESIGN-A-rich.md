<!-- stardust:provenance
  writtenBy: stardust:direct (approval fold-back for home-A-rich-proposed.html)
  writtenAt: 2026-05-28T11:03:15Z
  variant: A-rich
  parent: DESIGN-A.md
  inheritanceChain: A-rich → A → active-direction (Mode A)
  approvedAs: stardust/prototypes/home-A-rich-proposed.html
  readArtifacts:
    - DESIGN.md
    - DESIGN-A.md
    - stardust/prototypes/home-A-rich-proposed.html
    - stardust/direction.md
  stardustVersion: 0.10.0
-->
---
inherits: DESIGN-A.md
variant: A-rich
role: user-directed composition (approved)
parent: A
ia-fidelity: reimagined (new content + structural moves)
mode: Mode A (brand-faithful)
borrowedFrom: [B, C-cinematic, G, H]
---

# Design System: Wheeler Cat — Variant A-rich (approved home)

## Variant thesis

**Wheeler as services partner, not finance promoter.** The hero re-anchors the home around equipment-maintenance partnership instead of the captured finance-promo. The page composes the strongest moves from A (improvements + 3-up finance grid), B (palette-inverse pill CTA), C-cinematic (Lenis motion runtime + scroll-driven entrances), G (yellow-eyebrow + dark-page locations), and H (Compact_Track_Loader photo as hero) — picked by the brand owner during interactive review.

## Picked via user direction (not auto-derived)

This variant emerged through chat-driven iteration, not the original three-variant uplift fork. Every decision below was an explicit user pick or correction. Logged in `_provenance.userDirectedMoves` so the picked decisions are auditable.

## Movements vs the original A spec

| Surface | Original A | A-rich |
|---|---|---|
| Hero copy | FINANCING DEALS & SPECIAL OFFERS (finance-promo) | **REDEFINING / COMMITMENT** (services-commitment) |
| Hero typography | Roboto Condensed 700 (modular 1.250 scale) | **Oswald 700** (captured-but-unused-in-A) + two-tone yellow/white |
| Hero CTA | Yellow primary + ghost-light dual-button | **Single white pill** with yellow hover |
| Hero overlay | Flat dark `rgba(18,18,18,0.55)` | **Left-to-right gradient** (0.85 → 0.10) |
| Hero bg image | SC_Hero (finance creative) | **Compact_Track_Loader** (per H) |
| Hero motion | None (static) | **CSS load-only fade-in**, staggered |
| Header structure | Captured 3-row chrome (8-link utility / 7-link nav / 10-link dept) | **Yellow strip (2 + More ▾) / 4-verb Pattern A / 10-link dept restored** |
| Service tile interaction | Hover-darken only | **Image-fade-on-hover, sticky reveal** (`.is-revealed` once) |
| Blog cards section | (not present in A) | **NEW: 4-up portrait grid** with smooth image-scale-on-hover |
| Brand logos strip | (not present in A) | **NEW: 5 captured partner logos** (Campbell / JLG / Monson / Gardner / SFS) |
| Locations | Narrative-proof-on-white | **G's yellow-ribbon over dark page** with white branch grid |
| Motion runtime | None | **Lenis + canonical motion runtime** (partial kinetic-display: data-anim + data-flip + scroll reveal; no marquee, no monogram unmask, no section-head word reveals) |

## Captured-image inventory used

All photos are real captured assets — no placeholders for images:

- Hero: `Compact_Track_Loader-3b9bd4.webp`
- Service tile hovers (6): I7A0069 / Wheeler_Campus / CM2022040 / Excavators / reliable-v3-scaled / aerial_resource
- Blog cards (4): Excavators / aerial_resource / landscape_blog / CM2022040
- Brand logos (5): Campbell-Companies-HorzV2 / JLG_logo / MonsonLogo / Gardner-Logo / SFS

## Unsourced content

None. All copy + images are captured-verbatim, captured-derived, or direction-authorized rewrites (logged in proposed file's `_provenance.voiceClassification`). The blog card titles match the captured wheelercat.com blog index per user-referenced screenshot. Hero "Redefining Commitment" copy is direction-authorized as the services-commitment narrative pick.

## Hard rules

- ✅ Mode A pinning — Oswald is captured (not invented); palette unchanged
- ✅ Density floor — sectionPadding 64px desktop inherited
- ✅ AAA contrast on every text-on-substrate pair (incl. white-on-darkened-photo at left edge of hero ~12:1)
- ✅ Self-contained — Lenis loaded local-relative; no CDN
- ✅ Mobile breakpoints at 640 / 768 / 1024 / 1100 + hamburger nav at ≤ 768px
- ✅ Reduced motion — all entrances + flips + countups neutralize

## Fold-back decision (per approval-fold-back.md)

Recommended fold-back: **page-local** for now. Other pages (about / rentals / service / parts / locations) don't yet exist as prototypes. If/when they are prototyped, the brand-owner picks which of A-rich's moves apply site-wide:

- **Site-wide candidates** (header chrome + motion runtime): the 3-layer header structure (yellow utility / 4-verb / dark-grey dept) should propagate to every page; the Lenis runtime should be in the shared chrome.
- **Page-local candidates** (hero content + sections): the "Redefining Commitment" services-commitment narrative is home-specific; blog cards section is home-specific; brand logos strip could be reused.
- **Don't fold** (one-offs): the specific Compact_Track_Loader hero photo is home-only; other pages get other hero photos.

When other pages are prototyped, re-evaluate fold-back per page.
