<!-- stardust:provenance
  writtenBy: stardust:extract
  writtenAt: 2026-05-28T13:30:00Z
  readArtifacts:
    - stardust/current/pages/*.json (25 pages)
    - stardust/current/_brand-extraction.json
  synthesizedInputs: []
  stardustVersion: 0.10.0
  notes: |
    Re-aggregated across 25 live-rendered pages. Cross-page mode confirms
    5px primary radius (103 occurrences, up from 36 on home alone). A
    9999px pill radius surfaces with 5 occurrences (previous home-only
    run reported null). Footer cross-promo block ("QUICK LINKS / CONTACT
    US / CONNECT WITH US") appears on 26/26 pages and is now treated as
    a system component.
-->
---
colors:
  background: "#FFFFFF"
  text: "#454545"
  textHeading: "#272727"
  primary: "#FFCC00"
  surfaceDark: "#272727"
  surface: "#E5E3DF"
  overlay: "rgba(18,18,18,0.5)"
typography:
  display: "\"Roboto Condensed\", sans-serif"
  body: "Roboto, sans-serif"
  scale:
    h1: "40px / 700"
    h2: "40px / 700"
    h3: "29-40px / 700"
    h4: "18-30px / 400-700"
    body: "16px / 400 / 1.5"
  scaleAudit:
    kind: "ad-hoc"
    ratios: [1.05, 2.00]
    matchedScale: null
rounded:
  small: "5px"
  medium: "3px"
  pill: "9999px"  # cross-page run surfaced pill — home-only run reported null
spacing:
  baseUnit: 8
  section: 64
components:
  - btn-primary
  - btn-secondary
  - service-tile
  - finance-card
  - stat-row
  - partner-logo-strip
  - branch-map
  - utility-bar
  - footer-cross-promo
  - equipment-card
  - form-card
  - rental-category-grid
  - service-program-tile
  - industry-tile
---

# DESIGN — Wheeler Machinery Co. (current state)

## Visual register
Industrial-trade marketing built on Caterpillar's house signature: **Cat Yellow on black with condensed sans display type**, warm stone secondary neutrals, dense information hierarchy, square-cornered (5px) rectangular CTAs. Cross-page confirms the system: every page wears the same dark utility bar + dark main header + dark footer chrome wrapped around white content + warm-stone accent bands.

## Color
- **#FFFFFF** background — page surface (every extracted page)
- **#272727** dark surface — main header band, footer, content overlays (cross-page mode for header/footer/dark sections)
- **#E5E3DF** warm stone — banner sections behind partner logos / impact stats / equipment teasers
- **#FFCC00** brand yellow (Caterpillar) — every primary CTA, header phone strip accent, icon fills
- **#454545** body text — paragraph copy
- **#272727** heading text — display type when on white
- **#FFFFFF** heading text — display type when on dark/photo
- **rgba(18,18,18,0.5)** overlay — applied over hero photography for headline contrast

## Type
- **Display:** Roboto Condensed (700 weight, ALL-CAPS, **90% of headings uppercase** across 25 pages — up from 53% home-only)
- **Body:** Roboto (300 / 400 / 700)
- **Sizes (cross-level):** 42 → 40 → 24 → 20 → 18 px observed; site uses 5–6 distinct heading sizes total
- **Modular scale:** `ad-hoc` — observed ratios cluster around 1.05 / 1.2 / 2.0 with no consistent ratio
- **Loaded:** Google-Fonts-cached locally (`/wp-content/cache/fonts/`); Oswald and icomoon also shipped; Roboto + Roboto Condensed dominate visible body.

## Shape
- **Border-radius (cross-page mode):** `5px` dominates with **103 occurrences across 26 pages**; `9999px` pill appears 5× (chips, badges); `50%` (circular) appears 8× (avatar / icon discs); `3px` and `4px` are rare outliers.
- **Shadows:** soft drop shadows for finance cards (`rgba(0,0,0,0.1) 0 3px 6px`), heavier overlay for lightboxes, and a strong dark shadow on hero cards (`rgba(0,0,0,0.8) 0 6px 16px`).
- **Buttons** are flat rectangles with 5px radius and no shadow.

## Components observed (cross-page)
- **Primary CTA (yellow):** `#FFCC00` background, `#000` text, 5px radius, bold uppercase label.
- **Service tiles** (6-up on home, also on /service/, /service/field-service/): yellow icomoon icon over title, two-line description.
- **Finance cards:** white card on white background with subtle drop shadow.
- **Stat row:** "18 / 75 / 24" pattern on home; similar three-stat treatments on /about/history/, /about/.
- **Partner-logo strip:** monochrome trade partner logos in horizontal row (home + /about/).
- **Branch-list + map:** Google Maps embed plus 18-row branch list on /about/locations/ and /home/.
- **Dark utility bar:** thin band above the main header (every page).
- **Equipment cards** on /new/, /used-equipment/, /rental/*: image + Roboto-Condensed model name + yellow CTA.
- **Form cards** on /contact-us/, /credit-application/, /request-service/, /machine-quote-request/: white panel with stacked labelled inputs (5px radius), submit button in yellow.
- **Footer cross-promo block** (`QUICK LINKS · CONTACT US · CONNECT WITH US`): identical on all 26 pages — the most load-bearing site-wide repeated block.

## System chrome (now cross-page evidence)
The header / dark-utility-bar / footer surfaced from home-only data are confirmed across all 26 extracted pages. The footer's three-column QUICK LINKS / CONTACT US / CONNECT WITH US block additionally registers as a cross-promo strip (anchor heading "QUICK LINKS" with full cluster overlap on every page) — a redesign that swaps the footer rewrites the most reused block on the site.

## Motion
Not captured (`prefers-reduced-motion: reduce` during extract).

## Note on aggregation
- 25 new pages live-rendered with Playwright (medium wait mode, avg 5.1s, all HTTP 200).
- Home record is already approved (variant A-rich) and was preserved without re-extraction.
- Cross-page system-component detection now meets the ≥3-page threshold; the v0.1 single-page caveat in DESIGN.md has been removed.
