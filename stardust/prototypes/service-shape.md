<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-29T20:30:00Z
  page:             service
  pageUrl:          https://wheelercat.com/service/
  pageType:         program (fork of CVA archetype, with adaptations surfaced below)
  againstDirection: stardust/direction.md (Active — A-rich chrome + /new/ canon + CVA program canon)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/service.json
    - stardust/current/pages/service.bodies.json
    - stardust/current/_brand-extraction.json
    - DESIGN.md / DESIGN.json / DESIGN-A-rich.md
    - stardust/direction.md (CVA fold-back §)
    - stardust/prototypes/home-A-rich-proposed.html (chrome canon)
    - stardust/prototypes/new-proposed.html (photo-card grid canon)
    - stardust/prototypes/customer-value-agreements-proposed.html (program canon — partial fit)
  stardustVersion: 0.10.0
  surprise: low
  forkOf: customer-value-agreements (program archetype)
  forkAdaptations: see § "Propagation findings" below
-->
---
slug: service
url: https://wheelercat.com/service/
register: brand
pageType: program (service-overview variant)
inheritsChromeFrom: A-rich
inheritsComponentsFrom: [new (breadcrumb, photo-card grid, dark cta-bar), customer-value-agreements (split-lockup hero, image-text alternation)]
ia-fidelity: verbatim
surprise: low
---

# Page shape: service (program archetype fork — first propagation test)

## Bet for this page

`/service/` is the **service-overview** variant of the program archetype. Where CVA presents 4 paid maintenance plan tiers, `/service/` presents **5 service categories** (Equipment Repairs & Rebuilds / Shop Services / Preventative Maintenance / Field Service / Self-Service Kits), each opening to its own sub-feature grid or detail page.

This is the **first canon-propagation test** of the CVA program archetype. The interesting finding before render: **only 2 of CVA's 4 new canon items actually fit here**. The shape brief honestly reflects which canon items propagate and which don't.

## Propagation findings (canon adjustments surfaced by this fork)

| CVA canon | Propagates to /service/? | Why |
|---|---|---|
| **Split-lockup hero** (Oswald two-line H1, line-2 yellow accent) | ✓ Yes (light adaptation) | `/service/`'s H1 ("HEAVY EQUIPMENT REPAIR IN UTAH") fits as line 1; supporting line + Cat-Yellow brand band split-lockup pattern matches. Hero photograph swaps to captured `Service_hero-e0cb7a.webp` |
| **Plan-tier card grid with `most_popular` flag** | ✗ No | `/service/` has no tiers, no flagship. Forcing plan-tier card grid here would invent product hierarchy that doesn't exist. **This canon stays scoped to "paid tiered program" pages only (CVA, future Cat Connect tier comparison, possibly Used Equipment inspection tiers).** Adjustment for CVA fold-back: re-label this canon `tiered-program-template` not generic `program-template` |
| **Value-prop horizontal rail** (5-up anchor cards on dark) | ✗ No | `/service/` doesn't have a single flagship deep-dive section with sub-feature anchors. The 5 service categories are co-equal, not subordinate to one. **Adjustment for CVA fold-back: also `tiered-program-template` only** |
| **Image-text alternation** (flex / flex-reverse) | ✓ Yes (heavy use) | Captured `/service/` uses `section.image-text.home-image-text` for FIELD SERVICE and SELF-SERVICE KITS H2 sections, exactly matching CVA's Managed PM Services / Fleet Training pattern. Site-wide fold-back claim holds |
| **Numbered-commitment list** | ✗ No (not needed here) | No structured commitments on `/service/`. Site-wide fold-back claim still holds; just not exercised here |

**Net adjustment to CVA fold-back:** plan-tier card grid + value-prop rail re-scope from `program-template` to `tiered-program-template` (a sub-archetype). The rest of the program canon (split-lockup hero, image-text alternation) stays at the original tier.

## New canon candidates this page introduces

| Component | Used at | Proposed fold-back tier | Reason |
|---|---|---|---|
| **Section-with-photo-card-grid** (H2 section heading + 3-7 photo-cards from `/new/`'s pattern, repeated 3× on this page) | sections 5, 6, 7 | **Site-wide** (sibling of `/new/`'s single-grid category hub) | The captured page uses 3 separate H2-led photo-card grids. `/new/` had one grid as the whole page; `/service/` has three as content bands. The wrapper (H2 section head + eyebrow + grid) is a generic pattern usable wherever a page presents multiple categories of sub-features |
| **Yellow-text-on-black pill CTA** | hero section (captured "Request Service Now") | **Site-wide** (extends button vocabulary) | Captured CTA has `color: rgb(252, 185, 0)` on `background: rgb(0, 0, 0)`, rounded-full. Distinct from CVA's white-pill-light. Useful chrome for pages where the primary CTA needs to read on a dark hero without invoking the yellow-button vocabulary |

## Sections (in render order)

1. **utility-strip** — site-wide chrome (A-rich)
2. **main-header** — site-wide chrome (A-rich, SERVICE verb shows active state, inherited from /new/'s pattern)
3. **dept-row** — site-wide chrome (A-rich, includes "Service" link)
4. **breadcrumb** — `/new/` canon. Trail: "Home › Service"
5. **hero** (split-lockup — CVA canon, adapted):
   - Background: `Service_hero-e0cb7a.webp` (captured hero) with left-to-right gradient overlay (A-rich pattern)
   - Eyebrow: "Wheeler · Service & Repair"
   - H1 split-lockup (Oswald 700 caps):
     - Line 1: "HEAVY EQUIPMENT REPAIR" (decomposed from captured H1 "HEAVY EQUIPMENT REPAIR IN UTAH")
     - Line 2: "IN UTAH" (Cat-Yellow accent)
   - Supporting line: direction-authorized rewrite of metaDescription, 2-tone yellow/white Roboto Condensed caps
   - Primary CTA: yellow-text-on-black pill "Request Service Now" → `/request-service/` (captured CTA verbatim, **new chrome canon**)
6. **intro band** (captured H2):
   - Substrate: white
   - Eyebrow: "Service Capabilities"
   - Section H2: "Heavy Equipment Repair and Services" (captured-verbatim, lowered to title-case from caps for header hierarchy)
   - PLACEHOLDER · 2-line section-lead-paragraph (no body prose captured on the live page — flag as unsourced)
7. **equipment-repairs-rebuilds band** (section-with-photo-card-grid — NEW canon):
   - Substrate: warm stone #E5E3DF
   - Section H2: "Equipment Repairs & Rebuilds" (captured-verbatim)
   - 7-up photo-card grid (extends `/new/`'s 4-up to N-up with wrap):
     - Equipment Rebuilds → `/equipment-rebuilds/` (image: `Equipment-Rebuilds-70bde4.png`)
     - Component Rebuilds → `/service/component-rebuilds/` (image: `Component-Rebuilds-62ce6f.png`)
     - Powertrain Rebuilds → `/service/powertrain-rebuilds/` (image: `Powertrain-Rebuilds-54c2ef.png`)
     - Hydraulic Repairs → `/service/hydraulic-repairs/` (image: `Hydraulic-7e894d.png`)
     - Diesel Engine Shop → `/service/diesel-engine/` (image: `Diesel-Engine-30b069.png`)
     - Undercarriage Shop → `/service/undercarriage/` (image: `Undercarriage-6b14cf.png`)
     - Aerial Lift Repair & Maintenance → `/service/aerial-lift/` (image: `aerial-1e0c37.jpg`)
8. **shop-services band** (section-with-photo-card-grid — NEW canon):
   - Substrate: white
   - Section H2: "Shop Services" (captured-verbatim)
   - 3-up photo-card grid:
     - Glass, Sandblast & Paint → `/service/glass-sandblast-paint/` (image: `Glass-Sandblasting-and-paint-a168e0.png`)
     - Machining → `/service/machining/` (PLACEHOLDER image — captured-but-not-localized OR captured-as-stub)
     - Welding & Fabrication → `/service/welding-fabrication/` (PLACEHOLDER image)
9. **preventative-maintenance band** (section-with-photo-card-grid — NEW canon):
   - Substrate: warm stone #E5E3DF
   - Section H2: "Preventative Maintenance" (captured-verbatim)
   - 2-up photo-card grid:
     - Equipment Inspections → `/service/equipment-inspections/` (PLACEHOLDER image)
     - Undercarriage Inspections → `/service/undercarriage-inspections/` (PLACEHOLDER image)
10. **field-service band** (image-text alternation — CVA canon):
    - Substrate: white
    - Section H2: "Field Service" (captured-verbatim)
    - Image-left + copy-right (or reverse — TBD by composition rhythm): captured `home-image-text` pattern
    - PLACEHOLDER · field-service-body
    - CTA: "Learn About Field Service" → `/service/field-service/` (captured verbatim)
11. **self-service-kits band** (image-text alternation — CVA canon):
    - Substrate: warm stone (alternating from field-service)
    - Section H2: "Self-Service Kits" (captured-verbatim)
    - Image-right + copy-left
    - PLACEHOLDER · self-service-kits-body
    - CTA: "Learn More" → `/service/cat-self-service-options/` (captured verbatim)
12. **cat-card cta-bar** (`/new/` canon dark cta-bar — captured prose verbatim):
    - Substrate: dark #272727 with yellow left side rule
    - Section H3 (promoted to H2 for hierarchy): "Finance Your Equipment Repairs or Services with a Cat® Commercial Account" (captured-verbatim)
    - Body paragraph: captured-verbatim from bodies.json (em-dash → comma per impeccable rule)
    - CTA: "Learn More" → `/cat-card/` (captured verbatim)
13. **footer** — site-wide chrome (A-rich)

## Anti-template pass

| Captured pattern | Default reflex | Alternatives considered | Picked | Rationale |
|---|---|---|---|---|
| Three repeated photo-card grids | 5-up icon tiles per band | (1) Repeated photo-card grids · (2) One mega-grid (5+7+3+2 = 17 cards) · (3) Tabbed switcher | **(1) Repeated photo-card grids** | The captured page's IA explicitly groups categories by H2 — collapsing to one grid loses the structural distinction. Tabbed switcher hides the breadth of capabilities on initial scroll, which is the page's actual selling job |
| /service/'s 5 H2 sections | Bare H2 + content | (1) Bare H2 · (2) Sticky sub-nav of section anchors · (3) Numbered H2 | **(1) Bare H2** | Page already has the dept-row for navigation; a second nav layer is duplicative. The visual rhythm of warm-stone ↔ white substrate alternation already separates sections cleanly. Numbered H2 (1. Equipment Repairs / 2. Shop Services) would imply hierarchy/order that doesn't exist — these are co-equal categories |
| Hero on dark + captured "Request Service Now" pill | Light pill (CVA hero canon) | (1) White pill (CVA) · (2) Yellow-text-on-black pill (captured verbatim) · (3) Yellow filled button | **(2) Yellow-text-on-black pill (captured)** | Captured CTA is intentional brand chrome — yellow-on-black is the "request service" signature; switching to white pill loses the recognizable CTA-as-brand pattern. **This propagates a new chrome canon back to direction.md** |

## Surprise budget

**`low`** — first canon-propagation test. New components introduced (section-with-photo-card-grid, yellow-text-on-black pill CTA) are direct extensions of existing canon, not new inventions. Propagation findings are documented honestly; canon adjustments fold back to direction.md after approval.

## Substrate transitions

- default: white
- exception 1: warm stone @ equipment-repairs-rebuilds band (alternating rhythm)
- exception 2: warm stone @ preventative-maintenance band (alternating rhythm)
- exception 3: warm stone @ self-service-kits band (alternating rhythm)
- exception 4: dark @ cat-card cta-bar (site-wide /new/ chrome)

Effective new transitions: 1 (warm stone). Alternating rhythm uses the same exception 3×. Dark cta-bar is site-wide chrome inheritance.

## Heading hierarchy + voice classification

| Section | Heading | Level | Classification | Source |
|---|---|---|---|---|
| breadcrumb | "Home › Service" | chrome | direction-authorized chrome | composed |
| hero | "Wheeler · Service & Repair" | eyebrow | direction-authorized chrome | composed |
| hero | "HEAVY EQUIPMENT REPAIR" | h1 line 1 | captured-verbatim (decomposed) | headings[0] |
| hero | "IN UTAH" | h1 line 2 | captured-verbatim (decomposed) | headings[0] |
| hero | supporting line | body | direction-authorized rewrite of metaDescription | composed |
| hero | "Request Service Now" | CTA | captured-verbatim | ctas[0] |
| intro | "Service Capabilities" | eyebrow | direction-authorized chrome | composed |
| intro | "Heavy Equipment Repair and Services" | h2 | captured-verbatim | headings[1] |
| intro | lead paragraph | body | placeholder | not in extraction |
| equipment-repairs | "Equipment Repairs & Rebuilds" | h2 | captured-verbatim | headings[2] |
| equipment-repairs | 7 photo-card names | h3 | captured-verbatim | headings[4-10] |
| shop-services | "Shop Services" | h2 | captured-verbatim | headings[11] |
| shop-services | 3 photo-card names | h3 | captured-verbatim | headings[13-15] |
| preventative | "Preventative Maintenance" | h2 | captured-verbatim | headings[16] |
| preventative | 2 photo-card names | h3 | captured-verbatim | headings[18-19] |
| field-service | "Field Service" | h2 | captured-verbatim | headings[20] |
| field-service | body | body | placeholder | not in extraction |
| field-service | "Learn About Field Service" | CTA | captured-verbatim | ctas[1] |
| self-service | "Self-Service Kits" | h2 | captured-verbatim | headings[21] |
| self-service | body | body | placeholder | not in extraction |
| self-service | "Learn More" | CTA | captured-verbatim | ctas[2] |
| cat-card | "Finance Your Equipment Repairs or Services with a Cat® Commercial Account" | h2 (was h3) | captured-verbatim | headings[22] |
| cat-card | body | body | captured-verbatim | bodies.json#bodies[3] |
| cat-card | "Learn More" | CTA | captured-verbatim | ctas[3] |
| footer | site-wide chrome | (chrome) | captured-verbatim | site-wide |

## Unsourced content (anticipated)

The captured body innerText was thin (4 sections, 653 chars total). The following render with PLACEHOLDER signatures:

1. Intro band lead paragraph (× 1)
2. Field Service body (× 1)
3. Self-Service Kits body (× 1)
4. Shop Services photo-card images: Machining, Welding & Fabrication (× 2)
5. Preventative Maintenance photo-card images: Equipment Inspections, Undercarriage Inspections (× 2)

**Honest framing:** The captured page is a category-hub-style overview without descriptive prose under each H2. The PLACEHOLDER signatures honestly mark the 3 prose gaps + 4 image gaps. Migrate-guard refuses production deploy until copy + media land.

## Inheritance summary

| From | Components |
|---|---|
| **A-rich** (site-wide chrome) | utility-strip · main-header (4-verb nav with SERVICE active) · dept-row · footer · palette · type system · Lenis runtime · scroll-reveal data-anim |
| **`/new/`** (listing canon) | breadcrumb · photo-card category tile (the grid item itself) · dark cta-bar with yellow side rule · 4-verb active state |
| **CVA** (program canon) | split-lockup hero (two-line Oswald with line-2 accent) · image-text alternation (flex / flex-reverse) |
| **NEW canon introduced here** | section-with-photo-card-grid (H2-led wrapper around `/new/`'s photo-card tile, supports N-up) · yellow-text-on-black pill CTA chrome |

## Canon adjustments folding back to direction.md (post-approval)

1. **CVA fold-back rescope:** plan-tier card grid + value-prop horizontal rail move from `program-template` to a new `tiered-program-template` sub-tier (CVA, future Cat Connect, Used Equipment inspection programs)
2. **Site-wide additions:** section-with-photo-card-grid wrapper + yellow-text-on-black pill CTA
3. **Program-template stays at canon tier:** split-lockup hero + image-text alternation (validated as truly fork-applicable across both CVA and /service/)

## Open question for user

The captured page reuses the photo-card-grid pattern for sub-categories but the link targets (e.g., `/equipment-rebuilds/`, `/service/component-rebuilds/`, `/service/diesel-engine/`) are mostly NOT in our extracted page set. That's fine for prototyping (the links are present and styled correctly), but the migrate-guard will eventually want to confirm those sub-pages exist or accept them as out-of-scope deep links. For now, render with the captured hrefs as-is.

If you say "proceed" without specifying, I'll render: (1) split-lockup hero with yellow-text-on-black "Request Service Now" pill, (2) 3 photo-card grids with PLACEHOLDER images on the 4 missing card slots, (3) PLACEHOLDER prose for the 3 missing body sections, (4) full captured cat-card cta-bar prose verbatim.
