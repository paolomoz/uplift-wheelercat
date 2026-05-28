<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape (retroactive — A-rich shape brief authored post-approval)
  writtenAt:        2026-05-28T11:03:15Z
  page:             home
  variant:          A-rich (approved)
  pageUrl:          https://wheelercat.com/
  againstDirection: stardust/direction.md (Active — A-rich appended on approval)
  consumedBy:       (retroactive — prototype was built iteratively without an upfront brief; this brief is the audit trail)
  readArtifacts:
    - stardust/prototypes/home-A-rich-proposed.html
    - DESIGN-A-rich.md / DESIGN-A-rich.json
    - DESIGN-A.md / DESIGN.md / PRODUCT.md
    - stardust/current/pages/home.json
    - stardust/current/_brand-extraction.json
    - stardust/uplift-improvements.md
  surprise:         medium (A-rich amplifies multiple captured surfaces; not pure verbatim)
  substrateTransitions: { default: white, exceptions: [warm-stone @ blog-cards, dark #272727 @ locations + footer] }
  stardustVersion: 0.10.0
-->
---
slug: home
variant: A-rich
url: https://wheelercat.com/
register: brand
bet: services-commitment hero + 4-verb nav + 4-up blog cards + real brand logos + dark locations
ia-fidelity: reimagined
---

# Page shape: home (variant A-rich, approved)

## Sections (in render order)

1. **utility strip** (yellow, top) — Customer Login · Sponsorships · More ▾ (dropdown holds 6 admin/tool links). Audience-coded simplification per `nav-pattern-a-strategies.html` Strategy 1.

2. **main header** (black `#272727`) — logo + 4-verb Pattern A nav (BUY / RENT / SERVICE / PARTS, each with hover dropdown holding sub-categories) + yellow phone CTA.

3. **dept row** (dark grey `#1a1a1a`) — captured 10 dept links restored: Quotes / Offers / Attachments / Trailers / Power Systems / Parts / Service / Technology / Support / Jobs.

4. **hero** (`data-section="hero"`, full-bleed Compact_Track_Loader photo with left-to-right gradient overlay) — eyebrow `Wheeler · Services Commitment` + h1 `REDEFINING` (yellow) / `COMMITMENT` (white) + two-line supporting copy (yellow/white inline) + single white pill CTA `Learn More About Our Services Commitment`. CSS load-only fade-in, NOT scroll-driven.

5. **finance band** (`data-section="finance"`, white ground) — 3-up CSS grid (improvement #1 applied): three captured finance offers (0% APR / Fuel Payback / Cat Card now Cat Commercial). Card 1 numerals (`60`, `500`) split-flap reveal via `data-flip`. Cards `data-anim` slide-up with stagger.

6. **services** (`data-section="services"`, white ground) — eyebrow `Service & Support` + h2 `YOUR HEAVY MACHINERY EXPERTS` + 6-tile grid. Each tile has dark base, yellow icomoon glyph, white label, AND a hover-revealed equipment photo background (sticky `.is-revealed` on first hover/focus). Tile entrance `data-anim` matches finance cards.

7. **blog-cards** (`data-section="blog-cards"`, warm-stone `#E5E3DF` ground) — NEW section per user-referenced wheelercat.com blog index screenshot. 4-up portrait cards (aspect 2:3) with smooth scale-on-hover via child `.blog-card__bg`. Titles: Preventative Equipment Maintenance / Aerial Lift Maintenance / Landscaping Equipment Guide / Customer Value Agreements.

8. **brand-logos** (`data-section="brand-logos"`, white ground) — NEW thin section with 5 captured partner logos in a 5-up row. Grayscale by default, full-color + opaque on hover.

9. **locations** (`data-section="locations-proof"`, G-style) — thin yellow eyebrow ribbon holding `FIND YOUR NEAREST BRANCH` + dark `#272727` ground below + 3-col branch grid (15 captured branch names) + "View all 18 branches" yellow link.

10. **footer** (`data-section="footer"`, captured 4-col mega) — Wheeler brand col + Quick Links + Contact Us (address + phone) + Connect (social icons) + legal bar.

## Anti-template pass

| Captured pattern | Default reflex | Picked | Rationale |
|---|---|---|---|
| Slick finance carousel | 3-up grid (A improvement #1) | **3-up grid** | Improvement #1 applied |
| Captured 8-link yellow utility | Same | **2 visible + More ▾** | Audience-coded reduction |
| Captured 7-link black nav | Same | **4 Pattern A verbs** | Pattern A explored in nav-explorations.html; user-picked Strategy 1 + verbs replace nav |
| Captured 10-link dept row | Same | **Restored as 3rd layer** | User-directed (kept after we tried removing it) |
| Service tile hover-darken | Same | **Image-fade-on-hover (sticky)** | User direction — image stays once revealed |
| Stat-row 18 / 75 / 24 | Retired → narrative proof | **Removed entirely** | User direction — narrative proof line lives in dark locations section |
| Hero photo + overlay + headline | Same | **Same composition with gradient + Oswald + 2-tone + white pill** | User-picked from progressive iteration |

## Voice classification per section

- **utility strip**: captured-verbatim (link labels match captured `_brand-extraction.json#voice` chrome)
- **header verbs**: direction-authorized (BUY / RENT / SERVICE / PARTS labels are direction-authorized; sub-items in dropdowns are captured-verbatim)
- **dept row**: captured-verbatim (10 captured dept labels)
- **hero**: direction-authorized rewrite (services-commitment narrative; "Redefining Commitment" + supporting copy are direction-authorized — see `_provenance.userDirectedMoves`)
- **finance**: captured-verbatim (3 finance card headlines from captured slides)
- **services**: captured-verbatim (eyebrow + title + 6 tile labels)
- **blog-cards**: captured-verbatim (titles match user-referenced screenshot of captured wheelercat.com blog index)
- **brand-logos**: captured-verbatim (real partner logo assets)
- **locations**: direction-authorized rewrite (narrative-proof rephrase per improvement #4, applied G-style)
- **footer**: captured-verbatim

## Unsourced content

**None.** Every literal value and image traces to:
- Captured `pages/home.json` content, or
- Captured `_brand-extraction.json` voice samples, or
- Captured assets in `current/assets/media/`, or
- Direction-authorized rewrites classified above (no PLACEHOLDER elements)

## Why no upfront brief

A-rich is a **retroactively-named composition** — it emerged from interactive iteration over multiple turns, not a pre-authored shape. The user iterated through Pattern A nav exploration → multiple hero copy variants → service tile interaction refinement → blog cards layout → locations dark variant → header layer composition. This brief documents the final accepted shape; it's the audit trail, not the gate.

For future page prototypes (about / rentals / service / parts), author a proper upfront brief per `page-shape-brief.md`.
