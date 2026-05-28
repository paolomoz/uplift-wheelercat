---
_provenance:
  writtenBy: stardust:uplift
  writtenAt: 2026-05-27T21:51:21Z
  againstInput: https://wheelercat.com/
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/home.json
    - stardust/current/brand-review.html
---

# Improvements — https://wheelercat.com/

Five specific weaknesses in the captured Wheeler Cat homepage. These
are the brief variant A applies on top of the faithful brand surface.

1. **[dated-pattern]** Slick.js finance carousel above the fold reads as a 2018-era WordPress dealer template — the hero promo creative sits inside a draggable slider component (`.js-image-button.fx-slider` with `.slick-track` / `.slick-current`) requiring interaction to see the next two finance offers; modern equivalent is a 3-up card grid with all deals visible at once and no carousel chrome. (Source: `pages/home.json` — `body.home > article > div:nth-of-type(2) > section.image-buttons:nth-of-type(3)` contains a slick-init wrapper for three sibling `.slick-slide` finance cards.)

2. **[ia-clutter]** "WE PROUDLY SUPPORT THE ONES WHO BUILD OUR WORLD" lands as an h5 at 20px with `letter-spacing: 2px` — a section-heading-sized sentiment that reads as an orphan between the service tile row and the partner logo strip with no narrative bridge; the IA between "YOUR HEAVY MACHINERY EXPERTS" → service tiles → support sentiment → partner strip → stat row → branch map jumps four times without grouping. Direct should collapse "support sentiment + partner strip" into one band and let "stat row + branch map" stand together as a locations band. (Source: `pages/home.json` — h5 at level 5, but visually sized like a section head, breaking the heading-rhythm contract.)

3. **[contrast-or-density]** Heading sizes 42 / 40 / 30 / 29 / 22 / 20 / 18 px form an ad-hoc scale with ratios 1.05 / 1.33 / 1.03 / 1.32 / 1.10 / 1.11 — no consistent ratio — and 53% of headings are ALL-CAPS with mixed `letter-spacing` (1.8px on h4, 2px on h5, normal on h3). The combination of ALL-CAPS + ad-hoc scale + inconsistent tracking is loud without hierarchical guidance: scanning the page, every heading reads as a peer because the size jumps don't telegraph relative weight. Direct should adopt a modular scale (1.250 or 1.333) and pin tracking by display-cap weight. (Source: `_brand-extraction.json § type.scaleAudit` — `kind: "ad-hoc"`.)

4. **[cliché]** The "18 / 75 / 24" stat row (locations / years / hours of service) is the tired industrial-marketing convention — three big numbers floating without context, ALL-CAPS labels underneath, no narrative connecting the three claims. A more modern equivalent is a single hero-grade narrative number ("75 years building Utah") OR three claims rewritten as scannable proofs ("18 branches · same-day field service across Utah · 24/7 phone support since 1951"). Direct should retire the floating-numerals pattern. (Source: `_brand-extraction.json § motifs.patterns` — pattern `stat-row` with evidence `"18 / 75 / 24" stats row under DEPENDABLE AND RELIABLE`.)

5. **[missed-opportunity]** Cat Yellow `#FFCC00` is one of the most distinctive brand colors in industrial America — Caterpillar's protected dealer identity — but the captured surface uses it exclusively as a button background and 1-pixel border accent (71,464 occurrences vs `#272727` surface-dark at 705,892 and `#E5E3DF` warm stone at 616,032; yellow is 10× under-deployed). The page never lets yellow become a primary surface, a typographic accent, a structural frame, or a hero ground. Direct should reweight: yellow is the brand's signature gesture, not a CTA pigment. (Source: `_brand-extraction.json § palette` — Cat Yellow `usedAs: ["background", "border"]` only.)

## Bonus observations (not load-bearing for A's brief)

- **64% of images carry empty alt text** (103 of 160). Accessibility issue; direct should require captioned alt text on the hero, service tiles, partner strip, and branch map. (Source: `pages/home.json § media.images[].alt`; Tension T-img-alt-empty surfaced.)
- **Single logo variant captured** (color PNG only). Direct should plan a monochrome / inverted / SVG variant set so a dark-ground or yellow-ground hero has a usable logo treatment. (Source: T-logo-variants.)
