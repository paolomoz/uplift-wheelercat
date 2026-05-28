<!-- stardust:provenance
  writtenBy: stardust:uplift / prototype phase 5
  writtenAt: 2026-05-28T00:00:00Z
  page: home
  variant: A
  pageUrl: https://wheelercat.com/
  againstDirection: stardust/direction.md
  readArtifacts:
    - stardust/current/pages/home.json
    - stardust/current/_brand-extraction.json
    - DESIGN.md
    - DESIGN-A.md
    - stardust/uplift-improvements.md
  capturedSourceLineage:
    - section: header        ; source: pages/home.json#landmarks[header] + voice.navItems
    - section: hero          ; source: voice.heroHeadline + voice.heroImage + voice.primaryCTALabel
    - section: finance       ; source: pages/home.json#headings[FINANCE eyebrow + 3 titles]
    - section: services      ; source: pages/home.json#headings[FIELD/SHOP/PARTS.CAT.COM/MAINTENANCE/EQUIPMENT REBUILDS/REQUEST SERVICE ONLINE]
    - section: support-partners ; source: pages/home.json#headings[WE PROUDLY SUPPORT...] + Campbell Companies citation
    - section: locations-proof ; source: pages/home.json#landmarks (15 captured branch labels) + direction-authorized narrative proof
    - section: footer        ; source: pages/home.json#landmarks[footer] + captured address 4901 W 2100 S
  antiTemplatePass:
    - pattern: slick-finance-carousel ; alts considered: 3-up grid (picked), tabbed deck, vertical stack ; rationale: improvement #1 retires draggable carousel
    - pattern: stat-row-floating-numerals ; alts considered: narrative proof (picked), single hero numeral, retire entirely ; rationale: improvement #4
    - pattern: orphan-sentiment-h5 ; alts considered: merge into partner band (picked), promote standalone, drop ; rationale: improvement #2
  substrateTransitions:
    default: white-page
    exceptions:
      - hero photographic (with overlay) → finance white → services white-page-with-dark-tiles → partner warm-stone → locations white → footer dark
    note: 2 substrate changes within content (warm-stone, dark footer); within cap
  voiceClassification:
    - section: hero ; classification: captured-verbatim + 1 direction-authorized supporting line ; copy: "FINANCING DEALS & SPECIAL OFFERS" (verbatim) + "Cat finance offers, fuel-payback programs, and the CVA bonus — current incentives across our fleet." (direction-authorized rewrite)
    - section: finance ; classification: captured-verbatim ; copy: 3 eyebrows "FINANCE" + 3 titles verbatim
    - section: services ; classification: captured-verbatim ; copy: "YOUR HEAVY MACHINERY EXPERTS" + 6 tile labels verbatim
    - section: support-partners ; classification: captured-verbatim sentiment + PLACEHOLDER · brand-logo for partner marks
    - section: locations-proof ; classification: direction-authorized narrative proof ("18 branches across...") + captured branch labels
    - section: footer ; classification: captured-verbatim
  surpriseTier: low
  dominantDimension: composition/improvements-list-applied
  compositionDelta_vs_B:
    - hero ground: photographic (A) vs yellow (B)
    - finance band ground: white (A) vs dark (B)
    - service-tile ground: dark with yellow glyph (A) vs yellow with dark glyph (B)
  compositionDelta_vs_C:
    - motion register: none (A) vs kinetic-display (C-cinematic)
    - hero load: static (A) vs monogram unmask (C-cinematic)
    - numerals: static (A) vs split-flap + count-up (C-cinematic)
-->
---
slug: home
variant: A
url: https://wheelercat.com/
register: brand
surprise: low
dominantDimension: composition/improvements-list-applied
---

# Page shape: home — Variant A (faithful + improvements)

## Sections (in render order)

1. **header** (`data-section="header"` `data-intent="navigate"` `data-layout="full-width-dark"`) — dark utility bar (Sponsorships left, phone right) + main header (logo left, 6-link nav: NEW EQUIPMENT / USED EQUIPMENT / RENT NOW / REQUEST SERVICE / CREDIT APP + yellow phone CTA right). Mobile collapses to hamburger ≤ 768px.

2. **hero** (`data-section="hero"` `data-intent="promo-finance"` `data-layout="full-bleed"` `data-media="image"`) — full-bleed `SC_Hero-292cc4.jpg` background + dark overlay `rgba(18,18,18,0.5)` + display headline "FINANCING DEALS & SPECIAL OFFERS" + direction-authorized supporting line + yellow primary CTA "BROWSE MORE SERVICES".

3. **finance** (`data-section="finance"` `data-intent="promo-offers"` `data-layout="grid"` `data-items="3"`) — 3-up white card grid above the fold. NO carousel. Cards: eyebrow "FINANCE" + titles `0% FOR UP TO 60 MONTHS + $500 TOWARD CVA` / `FINANCING & FUEL PAYBACK OFFERS` / `CAT® CARD IS NOW CAT® COMMERCIAL ACCOUNT`. Each card has CTA "LEARN MORE" (direction-authorized rewrite).

4. **services** (`data-section="services"` `data-intent="service-tiles"` `data-layout="grid"` `data-items="6"`) — eyebrow "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" promoted? No — that sentiment is merged into section 5. Section 4 header: eyebrow "YOUR HEAVY MACHINERY EXPERTS"; 6-up dark tile row with yellow icomoon glyphs + titles FIELD SERVICE / SHOP SERVICE / PARTS.CAT.COM / MAINTENANCE SERVICE / EQUIPMENT REBUILDS / REQUEST SERVICE ONLINE.

5. **support-partners** (`data-section="support-partners"` `data-intent="brand-proof"` `data-layout="stack"` `data-items="5"`) — MERGED band (improvement #2). Warm stone `#E5E3DF` ground. Headline "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" + partner-logo strip. Partners: Campbell Companies (captured), JLG, Monson, Gardner, SFS (captured). Rendered as text-as-logo with PLACEHOLDER · brand-logo on each.

6. **locations-proof** (`data-section="locations-proof"` `data-intent="locations-stats"` `data-layout="stack"` `data-items="15"`) — narrative-proof line + sub-heading "FIND YOUR NEAREST BRANCH" + 15 captured branch names rendered in a 3-column grid: Salt Lake City (HQ), Lindon, Sandy, Cedar City, Ely, Hurricane, Kaysville, Logan, Moab, Ogden, Park City, Salina, Tooele, Vernal, West Valley. Three additional branches noted ("plus 3 more").

7. **footer** (`data-section="footer"` `data-intent="navigate"` `data-layout="mega"`) — dark `#272727`. Three columns: QUICK LINKS (SALES / RENTALS / CAT PARTS / SERVICE / LOCATIONS / CONTACT / ABOUT / SPONSORSHIP) / CONTACT US (address "4901 West 2100 South, Salt Lake City, UT 84120" + phone "801-436-3672") / CONNECT WITH US (icomoon social glyphs).

## Layout strategy

- Container max 1400px, 24px gutter, padding 64px desktop / 48px tablet / 32px mobile.
- Hero ≥ 560px tall desktop; collapses to 480px mobile.
- Finance grid: 3 cols desktop, 2 cols tablet, 1 col mobile.
- Service tiles: 6 cols desktop, 3 cols tablet, 2 cols mobile.

## Data attributes

- `<header data-section="header" data-intent="navigate" data-layout="full-width-dark" data-nav-collapse="hamburger">`
- `<section data-section="hero" data-intent="promo-finance" data-layout="full-bleed" data-media="image">`
- `<section data-section="finance" data-intent="promo-offers" data-layout="grid" data-items="3">`
- `<section data-section="services" data-intent="service-tiles" data-layout="grid" data-items="6">`
- `<section data-section="support-partners" data-intent="brand-proof" data-layout="stack" data-items="5">`
- `<section data-section="locations-proof" data-intent="locations-stats" data-layout="stack" data-items="15">`
- `<footer data-section="footer" data-intent="navigate" data-layout="mega">`

## Unsourced content (placeholder list)

- partner logos (×5) — Campbell Companies, JLG, Monson, Gardner, SFS — names captured but image assets unmatched in `assets/media/`; render text-as-logo with `data-placeholder-type="brand-logo"`.
