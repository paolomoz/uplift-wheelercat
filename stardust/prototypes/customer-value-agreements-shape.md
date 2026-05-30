<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-05-28T13:35:00Z
  page:             customer-value-agreements
  pageUrl:          https://wheelercat.com/customer-value-agreements/
  pageType:         program (archetype — 4-5 other pages will fork this template)
  againstDirection: stardust/direction.md (Active — inherits A-rich approved chrome + /new/ canonized components)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/customer-value-agreements.json
    - stardust/current/_brand-extraction.json
    - DESIGN.md / DESIGN.json / DESIGN-A-rich.md
    - stardust/direction.md
    - stardust/prototypes/home-A-rich-proposed.html (chrome canon)
    - stardust/prototypes/new-proposed.html (breadcrumb + dark CTA bar canon)
  stardustVersion: 0.10.0
  surprise: low
  substrateTransitions: { default: white, exceptions: [warm-stone @ plan-picker + sub-features, dark-#272727 @ premium-deepdive band + cta-bar + footer + dept-row, yellow @ utility-strip] }
-->
---
slug: customer-value-agreements
url: https://wheelercat.com/customer-value-agreements/
register: brand
pageType: program (archetype)
inheritsChromeFrom: A-rich
inheritsComponentsFrom: [new (breadcrumb, dark-cta-bar, photo-card)]
ia-fidelity: verbatim
surprise: low
---

# Page shape: customer-value-agreements (program archetype)

## Bet for this page

The captured CVA page is the **substantive proof page** behind home A-rich's "Redefining Commitment" hero. The home promises *"guaranteed parts availability, prioritized service, faster rebuilds, and more"* — this page delivers that promise as 4 plan tiers + deep-dive on Premium Service + value-prop sub-sections + lead capture.

A-rich chrome + `/new/` canon (breadcrumb + dark CTA bar + photo cards) inherit. New components introduced here become the program template canon for `/service/`, `/service/field-service/`, `/equipment-rebuilds/`, `/get-training/`, `/technology/`.

## Sections (in render order)

1. **utility-strip** — site-wide chrome (A-rich)
2. **main-header** — site-wide chrome (A-rich) — SERVICE verb shows active state
3. **dept-row** — site-wide chrome (A-rich)
4. **breadcrumb** — `/new/` canon component. Trail: "Home › Service › Customer Value Agreements"
5. **hero** (NEW lockup pattern):
   - Background: `cva-banner-scaled-e1737395961880-5fc279.jpg` (captured CVA banner) with left-to-right gradient overlay (A-rich pattern)
   - Eyebrow: "Wheeler · Cat® Customer Value Agreements"
   - H1 split-lockup (NEW component): two-line Oswald 700 caps
     - Line 1: "MAXIMIZE EQUIPMENT PERFORMANCE WITH A" (captured h3 — promoted to h1 line 1)
     - Line 2: "CAT® CUSTOMER VALUE AGREEMENT" (captured h3 — h1 line 2, in Cat Yellow accent)
   - Supporting line: direction-authorized rewrite of meta description, 2-tone yellow/white in Roboto Condensed caps (matches A-rich's hero supporting treatment)
   - Single white pill CTA: "Request Information" → `#contact`
6. **plan-picker** (NEW component):
   - Substrate: warm stone #E5E3DF (matches A-rich's blog-cards register)
   - Eyebrow: "Pick Your Plan"
   - Section title: "Pick a Plan That Fits Your Business Needs" (captured-verbatim, promoted from h4 to h2)
   - 4-up tier card grid (NEW component — different from `/new/` photo cards):
     - **Parts Support CVA** → `#PartsSupport` — entry tier
     - **Premium Service CVA** → `#PremiumService` — flagship (badge: "MOST POPULAR")
     - **Total Maintenance & Repair Agreement** → `#TMR` — heaviest tier
     - **Managed Service** → `#ManagedService` — concierge tier
   - Each tier card: yellow eyebrow tier label · dark icon · plan name in Roboto Condensed 700 caps · 2-line summary (PLACEHOLDER · plan-summary for each — captured page body for these descriptions wasn't in extraction) · "Learn More ›" arrow link
   - Premium card visually elevated: yellow border + shadow lift
7. **premium-deepdive** (FLAGSHIP section — NEW component):
   - Substrate: dark #272727 (signals "the substantive proof — read closely")
   - Section anchor: `#PremiumService`
   - Section eyebrow (white at 0.7 opacity): "Committed to Maintaining Your Cat® Equipment" (captured h5)
   - Section H2 (white): "Premium Service CVA with Our Services Commitment" (captured h3 — promoted to h2)
   - Lead paragraph (PLACEHOLDER · section-lead-paragraph)
   - **Value-prop deep-link rail** (NEW component) — 5-up horizontal scroll rail of value-prop cards each anchoring to deeper sections:
     - **Parts Availability** → `#Parts`
     - **Repair-Time Commitment** → `#UptimeGuarantee`
     - **Rebuild Benefits** → `#RebuildBenefits`
     - **Digital Training** → `#FleetTraining`
     - **Terms & Conditions** → `#Terms`
   - Each card: small Cat Yellow icomoon glyph · prop name in Roboto Condensed 700 caps · 1-line tagline (PLACEHOLDER · value-prop-tagline) · yellow underline link
   - 2 anchored sub-feature blocks below the rail (per captured h4 list):
     - **Managed PM Services** (image-left, copy-right): `PSD_Service_thumb-f74bb8.webp` + PLACEHOLDER body
     - **Fleet Management Training** (image-right, copy-left): captured image to be resolved (likely `Consultative_Service_5-e1745962081964-e7f859.jpg`) + PLACEHOLDER body + "Learn More" → `/digital-toolset-training/` (captured CTA verbatim) + "Call Now (801) 978-1635" link
8. **tmr-section** (Total Maintenance and Repair — NEW component for heavy-tier programs):
   - Substrate: white (returns to page ground after the dark premium-deepdive)
   - Section anchor: `#TMR`
   - H2: "Total Maintenance and Repair" (captured h4 — promoted to h2)
   - 2-col split: left image (captured asset — `cva-banner-scaled.jpg` or `Parts-and-service-600x600`) + right copy (PLACEHOLDER · tmr-overview) + dual CTAs: "Learn More About Rebuilds" → `/service/rebuild/` (captured CTA) + "Visit FAQ Page" → `/customer-value-agreements-faq/` (captured CTA)
9. **contact-cta-bar** — `/new/` canon dark-cta-bar pattern:
   - Substrate: dark #272727
   - Section anchor: `#contact` / `#Form`
   - H2: "Contact Us to Learn More or Get a Quote" (captured-verbatim from h2[18])
   - 2 stacked CTAs: white pill "Request Information" → opens contact path (could be modal or scrolls to existing /machine-quote-request/) · yellow ghost "Call Now: 801-978-1635" (captured tel: link verbatim)
10. **footer** — site-wide chrome (A-rich)

## Anti-template pass

| Captured pattern | Default reflex | Alternatives considered | Picked | Rationale |
|---|---|---|---|---|
| Plan-tier cards | 4-up icon tiles | (1) 4-up icon tiles · (2) Photo-card with tier illustration · (3) Pricing-card with feature checklist | **Pricing-card with feature checklist** (with Premium elevated) | Captured tier cards have no equipment photography; pricing-card with checklist is the brand-appropriate program pattern. Premium gets "MOST POPULAR" badge per captured page's visual emphasis |
| Premium-Service deep-dive | Hero band + 5 value-prop cards in row | (1) Hero + tile row · (2) Dark band + horizontal scroll rail · (3) Sticky-sidebar + scrolling content | **Dark band + horizontal-scroll rail** | Dark band signals "the substantive proof — read closely" — a register distinct from the lighter intro band; horizontal rail matches captured anchor-link pattern; sidebar-sticky was rejected because the page has 5 value-props (good for tile) not 12+ (good for sidebar) |
| Multi-section image+text alternation | Same | (1) Captured alternation · (2) Image-grid summary then CTA · (3) Vertical timeline | **Captured alternation** | The captured page tells a structured story (intro → tier picker → flagship deep-dive → heavy tier → contact) that mirrors how the brand wants to be understood. Anti-template would lose narrative arc |

## Surprise budget

**`low`** — A-rich's chrome propagated to a program page with one-shot iteration. New components introduced (split-lockup hero, tier picker, value-prop rail, image-text alternation) are program-template canon — they extend rather than replace existing canon.

## Substrate transitions

- default: white
- exception 1: warm stone @ plan-picker (named purpose: "tier-selection band, signals choice moment")
- exception 2: dark @ premium-deepdive (named purpose: "substantive-proof register")

Real new transitions: 2 (well within ≤ 2 cap when dark cta-bar + footer + dept-row + yellow utility-strip count as site-wide chrome inheritance).

## Heading hierarchy + voice classification

| Section | Heading | Level | Classification | Source |
|---|---|---|---|---|
| breadcrumb | "Home › Service › Customer Value Agreements" | chrome | direction-authorized chrome | composed |
| hero | "Wheeler · Cat® Customer Value Agreements" | eyebrow | direction-authorized chrome | composed |
| hero | "MAXIMIZE EQUIPMENT PERFORMANCE WITH A" | h1 line 1 | captured-verbatim | headings[1] |
| hero | "CAT® CUSTOMER VALUE AGREEMENT" | h1 line 2 | captured-verbatim | headings[2] |
| hero | supporting line | body | direction-authorized rewrite of metaDescription | composed |
| hero | "Request Information" | CTA | captured-verbatim | ctas[9] |
| plan-picker | "Pick Your Plan" | eyebrow | direction-authorized chrome | composed |
| plan-picker | "Pick a Plan That Fits Your Business Needs" | h2 (was h4) | captured-verbatim | headings[3] |
| plan-picker | 4 tier names | h3 | captured-verbatim | ctas[0-3] verbatim labels |
| plan-picker | 4 tier summaries | body | placeholder × 4 | captured body innerText not in extraction |
| premium-deepdive | "Committed to Maintaining Your Cat® Equipment" | eyebrow | captured-verbatim | headings[6] (was h5) |
| premium-deepdive | "Premium Service CVA with Our Services Commitment" | h2 | captured-verbatim | headings[5] (was h3) |
| premium-deepdive | lead paragraph | body | placeholder | not in extraction |
| premium-deepdive | 5 value-prop names | h4 | captured-verbatim | ctas[5-9] anchor labels |
| premium-deepdive | 5 value-prop taglines | body | placeholder × 5 | not in extraction |
| premium-deepdive | "Managed PM Services" | h3 | captured-verbatim | headings[7] |
| premium-deepdive | "Fleet Management Training" | h3 | captured-verbatim | headings[8] |
| premium-deepdive | sub-feature body × 2 | body | placeholder × 2 | not in extraction |
| premium-deepdive | "Learn More" → digital-training | CTA | captured-verbatim | ctas[10] |
| premium-deepdive | "Call Now (801) 978-1635" | CTA | captured-verbatim | ctas[11] |
| tmr-section | "Total Maintenance and Repair" | h2 (was h4) | captured-verbatim | headings[16] |
| tmr-section | tmr body | body | placeholder | not in extraction |
| tmr-section | "Learn More About Rebuilds" | CTA | captured-verbatim | ctas[13] |
| tmr-section | "Visit FAQ Page" | CTA | captured-verbatim | ctas[14] |
| contact-cta-bar | "Contact Us to Learn More or Get a Quote" | h2 | captured-verbatim | headings[17] |
| contact-cta-bar | "Request Information" | CTA | captured-verbatim | ctas[15] |
| contact-cta-bar | "Call Now: 801-978-1635" | CTA | captured-verbatim | ctas[16] |
| footer | site-wide chrome | (chrome) | captured-verbatim | site-wide |

## Unsourced content (anticipated)

The captured page body innerText for the descriptive paragraphs was not fully pulled into structured fields. The following render with PLACEHOLDER signatures:

1. 4 plan tier 2-line summaries (Parts Support / Premium Service / TMR / Managed Service)
2. Premium-deepdive lead paragraph
3. 5 value-prop taglines (Parts Availability / Repair-Time / Rebuild Benefits / Digital Training / Terms)
4. 2 sub-feature bodies (Managed PM Services / Fleet Management Training)
5. TMR overview body

**Honest framing:** A 1.5-hour copywriting pass with the captured page's body text would fill these. Until then, the prototype renders the structural intent with dashed-yellow placeholder signatures per the content-sourcing contract. The migrate-guard will refuse production deploy until real copy lands.

## Inheritance summary

| From | Components |
|---|---|
| **A-rich** (site-wide chrome) | utility-strip · main-header (4-verb nav with SERVICE active) · dept-row · footer · palette · type system (Oswald hero + Roboto Condensed body) · Lenis runtime · scroll-reveal data-anim |
| **`/new/`** (listing canon) | breadcrumb · dark-cta-bar (used at section 9) · photo-card pattern (adapted for tier cards) · active nav verb state |
| **NEW canon introduced here** | split-lockup hero (2-line H1 with line-2 accent) · pricing-tier card (with badge + checklist) · value-prop horizontal-rail · image-text alternation pattern |

## Open questions for user

1. **The captured page has body copy** that the extract didn't fully pull. Want me to render with dashed-yellow PLACEHOLDER signatures (honest, but visually dense), or write direction-authorized copy based on the captured meta description + brand voice + reasonable inference from headings (less visual noise, but copy is direction-authorized)?
2. **The "Most Popular" badge on Premium Service tier** — captured page emphasizes Premium Service visually but doesn't explicitly say "most popular" in headings. Want it labeled that way (direction-authorized), or removed (verbatim)?

If you say "proceed" without specifying, I'll go with: (1) PLACEHOLDER signatures for body copy, (2) Premium tier visually elevated without "Most Popular" badge text.
