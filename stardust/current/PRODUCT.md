<!-- stardust:provenance
  writtenBy: stardust:extract
  writtenAt: 2026-05-28T13:30:00Z
  readArtifacts:
    - stardust/current/pages/*.json (25 pages)
    - stardust/current/_brand-extraction.json
  synthesizedInputs: []
  stardustVersion: 0.10.0
  notes: |
    Cross-page run (25 new + 1 already approved). Audience pillars now
    include rental, parts catalog, careers, and industries — surfaces
    not present in the home-only sample.
-->
---
register: brand
---

# PRODUCT — Wheeler Machinery Co. (current state)

## Register
**brand** — full marketing / lead-generation / commerce hybrid. Home is multi-audience; interior pages route to (a) sales (new, used, certified-used), (b) rental (15+ rental category pages), (c) service & parts programs, (d) financing & offers, (e) industry vertical landings, and (f) lead-capture forms.

## Users
_provenance: inferred from page copy and IA — refined cross-page._

- **Contractors and fleet operators** — primary buyers/renters of Cat heavy equipment. Touch points: /new/, /used-equipment/, /cat-certified-used/, /machine-quote-request/, /credit-application/, /customer-value-agreements/.
- **Renters & short-term users** — the rental tree is the deepest sub-section (15+ category pages: excavators, loaders, compactors, dozers, generators, light towers, aerial lifts, trench shields). Distinct audience from purchase: needs availability, day rates, branch pickup.
- **Service customers (existing equipment owners)** — /service/, /request-service/, /service/field-service/, /customer-value-agreements/. Reach the site for scheduled maintenance, undercarriage work, rebuilds, hydraulic repair.
- **Parts buyers** — /parts/, /parts/shop-by-category/* (14 sub-categories: filters, fluids, batteries, belts, hardware, hose-and-couplings, undercarriage, etc.) plus the Cat Central / Parts.cat.com integration.
- **Operators in the field** — phone-first interface (the dark utility bar surfaces a phone number above all chrome on every page).
- **Industry verticals** — /industries/* lists 13 named sectors (heavy construction, paving, oil & gas, mining, microgrid, agriculture, governmental, landscaping, landfill, material handling, etc.) — each its own landing.
- **Job seekers** — /careers/ (a real careers landing with application form, not just a nav link).
- **Sponsorship / community** — /sponsorships/.

## Product Purpose
A regional Caterpillar dealer's flagship site spanning Utah / parts of Arizona / Nevada / Wyoming (18 branches). The site simultaneously runs four parallel commerce / lead funnels:

1. **Equipment sales** — new / used / certified used / quote forms.
2. **Rental** — 15+ category pages + rental terms + air compressors / generators / aerial lifts.
3. **Service & rebuilds** — six service lines, customer-value-agreements, request-service.
4. **Parts** — 14-category catalog + the Parts.cat.com integration.

Layered with brand storytelling (history, sponsorships, industries served) and financing promotions (specials, offers, financing partnerships).

## Brand Personality
_provenance: inferred from voice samples and visual treatment across 25 pages._

- **Bold, blue-collar, direct** — "YOUR HEAVY MACHINERY EXPERTS", "DEPENDABLE AND RELIABLE", "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD." All-caps Roboto Condensed display headlines (**90% of headings uppercase** across the crawl — sharper signal than the 53% home-only metric).
- **Caterpillar-aligned** — Cat Yellow (#FFCC00), black, and warm stone neutrals; condensed-sans typography typical of industrial-trade marketing. Every page wears the same chrome.
- **Promotion-led but program-deep** — financing deal hero rotator above the fold; the program / service / rental pages then go into specific detail (terms, eligibility, what's included, locations).
- **Local and tactile** — branch-list framing, Google Maps embed, partner logos (Campbell Companies, JLG, Monson, Gardner, SFS), 18-location footprint emphasized.
- **Form-heavy** — credit-application, request-service, machine-quote-request, careers all carry real WordPress / WPForms forms with 6–15 fields. The site converts via forms, not via a shopping cart (parts pickup excluded — that lives behind Parts.cat.com).

## Anti-references
_provenance: inferred — what this site is visibly NOT trying to look like._

- Soft-tech SaaS marketing (no gradient hero, no glassmorphism).
- Lifestyle brand-storytelling (no editorial photography hero, no atmospheric typography).
- E-commerce catalog grids on the marketing surface (the inventory lives behind nav links + the Cat Central integration; equipment cards on /new/, /used-equipment/, /rental/* are listing-summary cards, not browse-and-buy).
- Modern card-with-shadow design language. The site is square-cornered (5px radius, mostly flat surfaces).

## Content Pillars
- **Promotional finance** — front-loaded on home; full /specials/, /offers/, /about/financing/, /customer-value-agreements/ pages.
- **Service** — six-tile service row on home; /service/* tree of 18+ service pages.
- **Rental** — 15+ rental category landings; /rental/ index + per-category pages.
- **Parts** — 14 shop-by-category landings; parts reference guides; Cat Central integration.
- **Locations** — embedded map + 18-row branch list (/about/locations/).
- **Trust / scale** — stat row (18 / 75 / 24), partner logo strip, history page, testimonials.
- **Industries served** — 13 industry vertical landings.

## Design Principles
_provenance: inferred — implicit, not stated._

- Promotion comes first; brand storytelling is implicit in the chrome (yellow + condensed-sans + stat rows).
- Density over whitespace; every page is information-rich and scrollable.
- Every section ends in a yellow rectangular CTA.
- Imagery shows hardware and job-sites, not people.
- ALL-CAPS Roboto Condensed for every heading is the brand signature; mixed case is rare.
- The same dark utility bar / dark header / dark footer chrome wraps every page — strong brand consistency, low experimental risk.

## Photography / Imagery
- **Hero**: `https://wheelercat.com/wp-content/uploads/2025/05/SC_Hero.jpg` (1440×496) — a finance/sales offer creative on the home hero.
- **Equipment / category tiles**: `Compact_Track_Loader`, `Excavators`, `Wheeler_Campus`, `aerial_resource` and similar on /new/, /used-equipment/, /rental/*.
- **Service icons**: 6 icomoon glyphs (`icon-new`, `icon-used`, `icon-rent`, `icon-order`, `icon-service`, `icon-phone`) rendered in yellow on dark.
- **Partner logos**: monochrome JPGs/PNGs of Campbell Companies, JLG, Monson, Gardner, SFS shown on home + /about/.

## Site-wide repeated block
The footer block `QUICK LINKS · CONTACT US · CONNECT WITH US` is present on all 26 pages crawled and meets the cross-promo threshold. The redesign target needs to consciously decide whether to keep, restructure, or kill it — it's the single most reused chunk on the site.
