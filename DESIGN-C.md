<!-- stardust:provenance
  writtenBy: stardust:direct (Phase 4 of stardust:uplift)
  writtenAt: 2026-05-28T00:00:00Z
  variant: C — display-typography amplification (kinetic-display)
  parent: DESIGN.md (shared)
  readArtifacts:
    - DESIGN.md
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
    - stardust/direction.md
    - prototype/reference/motion-registers.md (kinetic-display)
  stardustVersion: 0.10.0
-->

# DESIGN-C — Variant C · Display-typography amplification (kinetic-display)

## Role

**Visionary pitch.** "What if Roboto Condensed CAPS was the page's structural voice and the numbers were kinetic?" The captured page is already display-cap structured (Roboto Condensed 700 at h1–h5, 53% of headings ALL-CAPS, heavy numerical content). The register `kinetic-display` lets that structure perform. Same IA as variants A and B; the bet is **motion**, not layout.

## Inheritance

Inherits the full DESIGN.md / DESIGN.json shared spec (palette set unchanged, typography unchanged, radii unchanged, components unchanged, IA unchanged). Inherits variant A's composition and palette proportions verbatim. Adds an `extensions.motion` block carrying the `kinetic-display` register and its choreography.

## The bet (one)

**Motion register: `kinetic-display`.** Picked from the PRODUCT.md Brand Personality per the selection heuristic in `motion-registers.md`:

- `signage-led` ✓ — condensed all-caps display as structural language
- `display-typography-signature` ✓ — Roboto Condensed 700 at h1–h5, 53% of headings ALL-CAPS
- `wayfinding-first` partial ✓ — 18 branches, embedded map, branch list as structural element

Tie-breaks against alternates:
- `arrival` (civic-formal) — NO; Wheeler is commercial-industrial, not civic
- `kinetic-grid` (modular SaaS) — partial; equipment catalog is modular, but the captured page is promo-led, not catalogue-led
- `editorial` — NO; bold-direct is the opposite of editorial
- `live-systems` — NO; no real-time data on the captured surface

`kinetic-display`'s **refuses** clause (long fades, decorative serifs, editorial body copy as canvas) does not conflict with any captured trait.

## Composition

Identical to variant A. Same header, same finance band (3-up grid, no carousel), same service tile row, same partner sentiment band (merged), same locations band (narrative proof + map + branch list), same footer. **No re-composition.** The bet is motion, not layout.

Palette **proportions match variant A** (captured proportions). The kinetic register animates the captured palette; it does not invert it.

## Motion register: `kinetic-display`

Tokens loaded verbatim from `motion-registers.md § kinetic-display § Token defaults`.

### Easings
- `entrance: cubic-bezier(0.25, 0.46, 0.45, 0.94)` — primary entrance ease (ease-out-quad shape)
- `expo: cubic-bezier(0.16, 1, 0.3, 1)` — expo ease for split-flap landings and large-display reveals

### Durations
- `enter: 800ms` — base entrance duration
- `stagger: 110ms` — cross-element stagger (between peer sections / cards)
- `letterStagger: 50ms` — letter-by-letter stagger within a single word/phrase

### Marquee
- `speed: 30s` — full-loop duration for the top-of-page signage marquee

## Motion moves (kinetic-display signature)

| Move | Trigger | Behavior | Reduced-motion fallback |
|---|---|---|---|
| **monogram-unmask-on-load** | page load | "WHEELER" letters unmask one by one via `clip-path: inset(0 0 100% 0)`, 120ms letter stagger, 800ms total | render `WHEELER` fully visible at load |
| **signage-marquee-top-of-page** | always | infinite top-of-page marquee scrolling current offers: "FINANCING DEALS · 0% APR · FUEL PAYBACK · CVA BONUS · SHOP USED", 30s loop | marquee frozen at initial position; content readable |
| **split-flap-financing-numerals** | IO enter | finance numerals (`0%`, `60 MONTHS`, `$500`) cycle through random digits 600–900ms before landing on target value with expo ease | numerals render at target value statically |
| **stat-row-count-up** | IO enter | numeric proofs in locations narrative ("18 branches", "75 years", "24/7") count up 0 → target in 1100ms | numerals land at target value statically |
| **section-head-wipe-left-to-right** | IO enter | section heads ("YOUR HEAVY MACHINERY EXPERTS", "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD") wipe in left-to-right via `clip-path: inset(0 100% 0 0 → 0 0 0 0)`, 800ms | headings render full-opacity at load |
| **blur-reveal-display-copy** | IO enter | large display copy (hero headline, section heads) reveals via `filter: blur(8px → 0)` + opacity 0 → 1 over 800ms | blur collapses to opacity-only fade-in (300ms) |

## Reduced-motion fallback (universal)

Every motion element neutralizes under `@media (prefers-reduced-motion: reduce)`:
- Marquees freeze at initial position; content remains readable.
- Split-flaps render the target value statically (no digit cycling).
- Count-ups land at the target value (no 0 → N animation).
- Blur-reveals collapse to opacity-only fade-in (300ms).
- Section-head wipes collapse to opacity-only fade-in (300ms).
- Monogram unmask renders fully visible at load.

The static composition reads correctly without any motion. Static C also ships as `home-C-proposed.html` for the cinematic-vs-static comparison gate (Pass 6f).

## Render outputs

Variant C emits **both**:
1. **`home-C-proposed.html`** — static render with the same composition as variant A; no motion declared.
2. **`home-C-cinematic.html`** — cinematic render with the `kinetic-display` register engaged.

The static render serves as the reduced-motion fallback / accessibility reference; the cinematic render is the visionary pitch surface.

## Deltas vs shared DESIGN.md / variant A

| Item | Shared / A default | C's override | Rationale |
|---|---|---|---|
| Motion register | none (A static) | `kinetic-display` | C's bet — register engagement |
| Hero monogram | static | monogram-unmask-on-load | kinetic-display signature move |
| Top-of-page chrome | utility bar only | utility bar + signage marquee below | kinetic-display signature move |
| Finance numerals | static | split-flap reveal on IO trigger | kinetic-display signature move |
| Stat proofs | narrative line (A) | narrative line + count-up on the numerals within | kinetic-display signature move |
| Section heads | static | wipe-in left-to-right on IO trigger | kinetic-display signature move |
| Large display copy | static | blur-reveal on IO trigger | kinetic-display signature move |
| Render outputs | single proposed.html | static + cinematic (2 files) | Cinematic-vs-static comparison gate |

## Anti-toolbox check (C)

C's bet is the motion register. No unrelated moves are introduced:
- **No layout change** — composition matches A verbatim.
- **No palette change** — proportions match A (captured proportions, not B's inverted set).
- **No font change** — Roboto Condensed + Roboto only (Mode A pinning).
- **No invented color.**
- **No editorial-register vocabulary** (the captured signage vocabulary is what's being amplified).
- **No glassmorphism / gradient text / side-stripes.**
- **No registers mixed.** kinetic-display only; no `arrival` / `editorial` / `live-systems` / `kinetic-grid` sections.

## What C is NOT

- C is not "B with motion." Palette proportions match A (captured), not B (yellow-surface). C and B are differentiated by both motion AND palette ground assignments.
- C is not "more variant A." C reuses A's composition exactly; the bet is motion.
- C is not a free-for-all. The register is `kinetic-display`; the moves are bound by the register's signature-moves list and its **refuses** clause (no long fades, no decorative serifs, no editorial body copy as canvas).
- C is not an excuse to skip the reduced-motion fallback. Every move has a static fallback; the static render ships alongside the cinematic.

## Captured-source basis for C's bet

- `_brand-extraction.json § type.headingFamily.name = "Roboto Condensed"` — display-cap signature
- `_brand-extraction.json § voiceTable.toneMetrics.headingsUppercasePercent = 53` — display caps are structural
- `_brand-extraction.json § voiceTable.toneMetrics.distinctCtaLabels = 42` — ALL-CAPS imperative throughout
- `_brand-extraction.json § voice.heroHeadline = "FINANCING DEALS & SPECIAL OFFERS"` — display-cap hero
- Numerical content density: `0% FOR UP TO 60 MONTHS + $500 TOWARD CVA`, stat row `18 / 75 / 24`, model codes, financing percentages
- Logo brand "WHEELER" reads as monogram-shaped (7-letter horizontal wordmark)
- 18 branches + embedded map = wayfinding signage register
