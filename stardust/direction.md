---
_provenance:
  writtenBy: stardust:uplift
  writtenAt: 2026-05-27T21:51:21Z
  againstInput: https://wheelercat.com/
  mode: uplift (one-shot, three variants)
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/home.json
    - stardust/current/brand-review.html
    - stardust/current/PRODUCT.md
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
---

# Direction — Wheeler Cat (https://wheelercat.com/) — uplift × 3

Brand-faithful (Mode A): palette pinned to the captured set
(Cat Yellow `#FFCC00`, white, `#272727` surface-dark, `#E5E3DF` warm
stone, `#454545` body text, `rgba(18,18,18,0.5)` overlay); typography
pinned to Roboto Condensed (display) + Roboto (body); icomoon icon
font retained for service glyphs. No invented colors, no fonts
outside the captured surface.

Three variants — A green-light, B design-team motivator,
C visionary cinematic pitch. Each differs from the others by ≥ 2
structural changes per the variant differentiation contract.

## Cinematic register selection (Phase 3a)

**Picked register for variant C: `kinetic-display`**

Per `prototype/reference/motion-registers.md` § Selection heuristic:

| Brand personality trait | Matches |
|---|---|
| `signage-led` | ✓ — condensed all-caps display headlines as structural vocabulary; signage-yellow + dark palette typical of construction-site / equipment-plate signage. |
| `display-typography-signature` | ✓ — Roboto Condensed 700 used at h1–h5 in every section; 53% of headings ALL-CAPS. |
| `wayfinding-first` | partial — 18 branch locations, embedded Google map, branch list as a structural element. |

Tie-break against alternates:
- `arrival` (civic-formal): NO — Wheeler is commercial-industrial, not civic.
- `kinetic-grid` (modular SaaS): partial — equipment catalog is modular, but the captured page is promo-led, not catalogue-led. Signage trait dominates.
- `editorial`: NO — bold-direct register is the opposite of editorial.
- `live-systems`: NO — no real-time data on the captured surface.

`kinetic-display`'s **refuses** clause (long fades, decorative serifs,
editorial body copy as canvas) does not conflict with any captured
trait. Selection holds.

## Variant A — Faithful + improvements

**Role.** Risk-averse green-light. "Yes, that's us, with the obvious fixes."

**Composition.** Same IA as captured — header (utility bar + main header), hero, finance band (3 cards, no carousel), service tile row, support sentiment + partner strip (collapsed into one band per improvement 2), branches + stat row (collapsed into a locations band), footer.

**Motion.** Static. No cinematic layer; no `extensions.motion.register` written to `DESIGN-A.json`.

**Improvements applied** (from `uplift-improvements.md`):
1. Replace slick.js finance carousel with a 3-up card grid (all deals visible above the fold).
2. Collapse "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" into a single band with the partner logo strip — sentiment + proof as one unit, not orphaned.
3. Adopt a modular type scale (1.250 — major third: 16 / 20 / 25 / 31 / 39 / 49 / 61 px) and pin display-cap tracking by weight (700 = `letter-spacing: 0.02em`).
4. Retire the "18 / 75 / 24" floating-numeral pattern in favor of three scannable proofs ("18 branches across Utah, Arizona, Nevada & Wyoming · Same-day field service · 24/7 phone support since 1951").
5. Color stays as captured (yellow remains CTA-only) — the bolder yellow promotion is variant B's bet, not A's. A applies brand-faithful palette in unchanged proportions.

Bonus: alt text required on all hero / service / partner / branch images; document a planned monochrome SVG logo variant (out of scope for the prototype itself).

## Variant B — What if Cat Yellow was the page's primary surface?

**Role.** Design-team motivator. The brand's underused capability foregrounded.

**What if.** "What if Cat Yellow `#FFCC00` was the page's primary surface, not just the CTA pigment?"

**Captured trait amplified.** Color-ladder re-weighting (`uplift-questions.md § Picked § Variant B`).

**Evidence.** `_brand-extraction.json § palette` — Cat Yellow shows 71,464 occurrences with `usedAs: ["background", "border"]` only; warm stone `#E5E3DF` 616k and dark `#272727` 705k dominate; yellow is 10× under-deployed relative to the neutrals it sits between. Cat Yellow is Caterpillar's protected dealer identity — the brand has earned the right to use it as a primary ground.

**Composition.** The IA is the same as A; the palette **proportions** invert. Specifically:
- **Hero** is a full-bleed Cat Yellow ground with dark Roboto Condensed display copy ("FINANCING DEALS & SPECIAL OFFERS"); the CTA reverses — black ground, yellow text — for contrast within the yellow surface.
- **Finance band** sits on dark `#272727` (the inverted pairing — yellow→dark→yellow rhythm), with finance cards rendered as dark cards with yellow eyebrow stripes and yellow body copy on the numerals.
- **Service tiles** use Cat Yellow as the tile background; icomoon glyphs render in dark; tile headings in dark Roboto Condensed caps.
- **Support sentiment + partner strip band** sits on warm stone `#E5E3DF` (the third neutral, now functioning as a quiet band between the two yellow surfaces).
- **Locations + stat band** sits on a yellow eyebrow band capped by a dark map surface.
- The page reads as **"Cat Yellow is the brand's voice."** It is unmistakably Caterpillar-aligned and unmistakably Wheeler — and visually different from every other dealer in the network.

**Motion.** Static. No cinematic layer; no `extensions.motion.register` written to `DESIGN-B.json`. B's bet is **composition / palette weight**, not motion.

## Variant C — What if motion was part of the identity?

**Role.** Visionary pitch. The brand's third dimension — kinetic display.

**What if.** "What if Roboto Condensed CAPS was the page's structural voice and the numbers were kinetic?"

**Cinematic register.** `kinetic-display` (auto-picked from PRODUCT.md Brand Personality per Phase 3a).

**Captured trait amplified.** Display-typography amplification — the register naturally amplifies the captured display-cap vocabulary (`uplift-questions.md § Picked § Variant C`).

**Evidence.** Roboto Condensed 700 at h1–h5; 53% of headings ALL-CAPS; CTAs all ALL-CAPS imperative; heavy numerical content (% APR, $ amounts, model codes, stat row 18/75/24, hour-meter values). The page is already display-cap structured — the register lets the structure perform.

**Composition.** Identical IA to variant A. **The bet is motion, not layout.** Same header, same finance band, same service tile row, same support sentiment + partner strip, same locations + stat band, same footer. No re-composition.

**Motion bet** (driven by `kinetic-display`'s signature moves):
- Hero loads with **monogram unmask** of "WHEELER" letter-by-letter (clip-path inset, 120ms stagger).
- Top-of-page **signage marquee** scrolls current offers continuously ("FINANCING DEALS · 0% APR · FUEL PAYBACK · CVA BONUS · SHOP USED").
- Finance numerals (`0%`, `60 MONTHS`, `$500`) **split-flap reveal** — cycle through random digits before landing on the target value.
- "18 / 75 / 24" stat row **counts up** on IO trigger (0 → 18, 0 → 75, 0 → 24).
- Section heads ("YOUR HEAVY MACHINERY EXPERTS", "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD") **wipe in left-to-right** at scroll trigger.
- Large display copy (hero headline, section heads) **reveals with `filter: blur(8px → 0)`** on scroll.

**Reduced-motion fallback.** Every motion element neutralizes under `prefers-reduced-motion: reduce` — marquees freeze, split-flaps render the target value statically, count-ups land at the target, blur-reveals collapse to opacity-only. Static C also ships as `home-C-proposed.html` for the static fallback / cinematic-vs-static comparison gate (Pass 6f).

## Variant differentiation contract

Per `direct/SKILL.md` § Variant differentiation, each pair must differ by ≥ 2 structural changes.

| Pair | Change 1 | Change 2 | Change 3 |
|---|---|---|---|
| A vs B | Palette proportions (yellow → primary surface) | Hero composition (white-photo-hero → yellow-typographic-hero) | Finance band ground (white → dark inverse) |
| A vs C | Motion register (static → kinetic-display) | Numerals (static → split-flap + count-up) | Hero loading behavior (rendered → monogram unmask) |
| B vs C | Palette proportions (yellow primary in B, captured proportions in C) | Motion register (static vs kinetic-display) | Hero ground (yellow in B, white in C) |

Pairwise differentiation is satisfied (3 ≥ 2 on every pair).

## Anti-toolbox audit

This direction does not throw every brand-faithful move at every
variant. Each variant has **one bet**:

- A's bet is the **improvements list** (5 named fixes).
- B's bet is the **palette re-weighting** (yellow as ground).
- C's bet is the **motion register** (kinetic-display).

The bets are disjoint by axis: A operates on IA + scale + content,
B on color proportion + composition, C on motion. No overlap.

---

## Exploration variants (six-candidate fork)

Added 2026-05-28 via `stardust:direct --add-variant D,E,F,G,H,I`.
Mode: Mode A (inherited from active direction).
Improvements list: shared (`stardust/uplift-improvements.md`) — not regenerated.
Stale-flagging: NONE (additive; A/B/C/C-cinematic remain authoritative).

Each variant maps to one of the 8 "what if…" candidates from
`stardust/uplift-questions.md`. Disqualified candidates (#3 live-data
promotion — no captured live signals; #5 voice-register pivot — uniform
captured voice) skipped per user direction.

### Variant D — Display-typography amplification (static)

Role: one captured trait amplified (static composition bet).
What if: "What if Roboto Condensed CAPS was the page's structural voice, not just the heading vocabulary?"
Captured trait amplified: display-type scope (currently confined to h1-h5).
Composition: Roboto Condensed CAPS extended to nav, primary CTA labels, eyebrows (upweight 400→700), stat numerals, footer headings. 1.333 modular scale (up from A's 1.250).
Motion: static. Distinct from C (kinetic-display motion). 3 diffs vs C, 3 diffs vs A.

### Variant E — Photography re-foregrounding (static)

Role: one captured trait amplified (composition + scale).
What if: "What if the equipment photos breathed at editorial scale?"
Captured trait amplified: equipment photography (Compact_Track_Loader, Excavators, Wheeler_Campus).
Composition: hero photo full-bleed at 3:2 with caption-plate (no overlay); photo-first cards (60/40); service tiles convert to photo-card pattern where photography exists; finance band demoted to third viewport.
Motion: static.
Honest gap: captured photography is product-doc-tier; rendering at editorial scale exposes the gap as a presales artifact.

### Variant F — Signature-gesture extension (static)

Role: one captured trait amplified (chain-identity gesture).
What if: "What if Wheeler's chain identity as a Cat® dealer was visible structural language, not just a logo?"
Captured trait amplified: Cat® dealer-chain identity.
Composition: Cat-triangle (▲) as eyebrow mark before every section title; triangle-row section dividers (1px yellow); Wheeler wordmark at 4× scale as footer plate above link grid; nav-link dividers become triangle rows.
Motion: static.
Honest framing: triangle is Caterpillar's authorized-dealer chain identity (Wheeler IS Cat), not invented brand mark.

### Variant G — Color-ladder re-weighting (dark primary)

Role: one captured trait amplified (palette proportion — DIFFERENT shade than B).
What if: "What if `#272727` was the page surface, not just the header / footer / overlay?"
Captured trait amplified: surface-dark #272727 (705k occurrences, all background).
Composition: page ground inverts to dark; finance band one tonal step deeper (#1A1A1A); service tiles dark with yellow icomoon glyphs; one warm-stone break at the partner band; yellow scope UNCHANGED (stays as CTA pigment).
Motion: static.
Distinct from B by picking the DARK shade (B promoted yellow). 4 diffs vs B.

### Variant H — Audience-routing reframe (renters-first)

Role: one captured audience amplified (IA reframe).
ia-fidelity: reimagined (the ONLY variant in the set that moves IA — A-G + I all preserve verbatim).
What if: "What if the page led with renters, not finance?"
Captured trait amplified: rental audience (named first in Wheeler's own tagline; demoted to one of 6+ CTA verbs above the fold).
Composition: RENT NOW becomes the hero verb; rental-fleet category grid (4-up: COMPACT TRACK LOADERS · EXCAVATORS · LIGHT TOWERS · ATTACHMENTS) replaces finance carousel as second band; finance demoted to third band on warm stone; service-call retained in header phone strip; all 6 captured audiences reachable in ≤ 1 click.
Motion: static.
IA-priority audit override: documented per intent-dimensions § 8 movable mutability.

### Variant I — Motif vocabulary swap (spec-sheet primitive)

Role: one captured trait amplified (composition primitive).
What if: "What if the home page led with the fleet, not the promo?"
Captured trait amplified: equipment spec-sheet vocabulary (industry-native to dealers; conspicuously absent from captured page).
Composition: spec-table as hero primitive (rows of `MODEL · CATEGORY · BRANCHES STOCKING · STARTING AT · CTA`); horizontal icomoon-chip filter rail (NEW · USED · RENT · ATTACHMENTS); finance demoted to second band; spec rows ship with PLACEHOLDER · spec-row signatures until fleet inventory flows in.
Motion: static. Pairs naturally with `kinetic-grid` register if a cinematic sibling is ever requested.

## Variant differentiation contract (now 9 variants — pairwise audit)

Each new variant differs from every existing sibling by ≥ 2 structural changes:

- D vs A (3), D vs B (3), D vs C (3 — beyond motion absence), D vs E (3), D vs F (3), D vs G (3), D vs H (3), D vs I (3) ✓
- E vs A (3), E vs B (3), E vs C (3), E vs F (3), E vs G (3), E vs H (3), E vs I (3 — opposite axes) ✓
- F vs A (3), F vs B (3), F vs C (3), F vs G (3), F vs H (3), F vs I (3) ✓
- G vs A (3), G vs B (4 — opposite shade picked), G vs C (3), G vs H (3), G vs I (3) ✓
- H vs A (4), H vs B (3), H vs C (3), H vs I (3 — IA reframe vs primitive swap) ✓
- I vs A (3), I vs B (3), I vs C (3), I vs H (3) ✓

All pairs ≥ 2. Contract holds across 9 variants.

## Anti-toolbox audit (six new variants)

- D: 0 hits. Single bet (type-scope expansion using captured family).
- E: 1 hit (hero text on photo without scrim) — cleared via caption-plate composition.
- F: 1 adjacent check (side stripes > 1px) — triangle-row is iconographic, not decorative. Doesn't fire.
- G: 0 hits. Single bet (palette proportion of captured dark shade).
- H: 0 hits. Single bet (IA reframe; all captured audiences preserved).
- I: 0 hits. Single bet (composition primitive; spec-table is industry-native).

---

## Approved variant — A-rich (home page)

**Approved at:** 2026-05-28T11:03:15Z
**Approved variant:** A-rich (composed from A + B + C-cinematic + G + H + user-directed moves)
**Approved file:** `stardust/prototypes/home-A-rich-proposed.html`
**Approval mechanism:** Explicit user approval following multi-turn interactive iteration ("let's approve this prototype for the home page").
**Parent variant:** A (faithful + improvements)
**ia-fidelity:** reimagined (content + structural moves vs original A spec)

### What A-rich added beyond the original A direction

A-rich is **not** a clean Mode A surface fork of A. It composes:
- Original A's improvements list (3-up finance grid, modular type scale, locations consolidation)
- **B's palette-inverse hero CTA** (white pill on dark hero instead of yellow primary)
- **C-cinematic's Lenis motion runtime** (partial — scroll-reveals + data-flip on finance numerals; no marquee, no monogram, no section-head word reveals)
- **G's locations composition** (yellow eyebrow ribbon + dark page below)
- **H's hero photo** (Compact_Track_Loader replacing SC_Hero finance creative)
- **User-directed content shift** — "REDEFINING COMMITMENT" services-commitment narrative replacing A's "FINANCING DEALS & SPECIAL OFFERS" finance-promo hero
- **User-directed nav restructure** — Pattern A 4-verb nav (BUY / RENT / SERVICE / PARTS) replacing A's 7-link captured nav, with yellow utility strip simplified to 2 + dropdown
- **User-directed new sections** — 4-up Blog Cards (Field Notes) + 5-logo brand strip
- **Oswald display headline** — captured-but-unused-in-original-A font restored for hero
- **Service tile image-fade-on-hover with sticky reveal** — new interaction not in any original variant

### Full per-decision audit trail

See:
- `DESIGN-A-rich.md` § Movements vs the original A spec
- `DESIGN-A-rich.json#variant.userDirectedMoves` (10 explicit user picks)
- `stardust/prototypes/home-A-rich-shape.md` (retroactive page-shape brief)
- `stardust/prototypes/home-A-rich-proposed.html#_provenance` (in-file provenance block)
- `stardust/prototypes/nav-explorations.html` + `nav-pattern-a-strategies.html` (header IA exploration mocks that drove the Pattern A pick)

### Fold-back decision

**Page-local** for now. The home is the only page prototyped; A-rich's moves are not yet propagated to other pages (about / rentals / service / parts / etc.). When additional pages are prototyped, re-evaluate per `approval-fold-back.md`:

- **Site-wide candidates** (chrome + motion infrastructure): the 3-layer header (yellow utility + 4-verb black + grey dept) should propagate; the Lenis motion runtime should live in shared chrome.
- **Page-local candidates** (hero + content sections): the "Redefining Commitment" narrative is home-specific; the blog-cards section + brand-logos strip are home-specific (could be reused).
- **Don't fold** (one-offs): the specific Compact_Track_Loader hero image is home-only.

### State updates

- `pages[home].status`: `prototyped` → `approved`
- `pages[home].variants.A-rich`: `stardust/prototypes/home-A-rich-proposed.html`
- `pages[home].shapeBriefs.A-rich`: `stardust/prototypes/home-A-rich-shape.md`
- `pages[home].approvedVariant`: `A-rich`
- `pages[home].prototypePath`: pointed at the A-rich file
- `pages[home].approvedAt`: `2026-05-28T11:03:15Z`
- `direction.variants[].A-rich`: added to the registry with parentVariant `A`

### Other variants

A, B, C/C-cinematic, D, E, F, G, H, I remain as historical exploration artifacts (status: `prototyped`). They are not stale-flagged — A-rich is additive, not a re-direction. Brand owner can revisit any of them as references.
