<!-- stardust:provenance
  writtenBy:           stardust:prototype/shape (equipment-detail-new template)
  writtenAt:           2026-05-31T17:30:00Z
  page:                equipment-detail-new (template for 249 pages)
  representative:      /new/machines/large-wheel-loaders/988-wheel-loader/
  pageType:            listing (Cat catalog detail page — deep specs)
  againstDirection:    stardust/direction.md (A-rich approved as site direction)
  consumedBy:          impeccable:craft, then stardust:aem-import (Mode A — from-prototype)
  readArtifacts:
    - /tmp/988-deep.json (deep content extract of representative)
    - stardust/current/pages/new__machines__large-wheel-loaders__988-wheel-loader.json
    - stardust/prototypes/equipment-detail-used-shape.md (sibling template, USED variant)
    - stardust/prototypes/home-A-rich-shape.md (chrome inheritance)
  surprise:            low (Cat catalog shape is canonical; visual treatment is the variance)
  substrateTransitions: { default: white, exceptions: [warm-stone @ specs-deep, white @ gallery, dark @ related-cta-bar] }
-->
---
slug:           equipment-detail-new
url:            https://wheelercat.com/new/machines/<category>/<model>/
register:       brand
pageType:       listing (Cat catalog detail)
coverage:       249 pages (from cat_new_machine-sitemap.xml)
inheritsChrome: A-rich + equipment-detail-used (Wheeler brand chrome + cascade-layer scaffold)
ia-fidelity:    verbatim (Cat-canonical spec content preserved byte-exact)
surprise:       low
---

# Page shape: equipment-detail-new

## Bet for this template

Render Cat's deep catalog spec pages with the Wheeler chrome
(yellow utility / 4-verb header / dept-row / footer / Lenis) wrapped
around the Cat-canonical content (deep specs grouped by category +
YouTube media gallery + Related Attachments + Related Products
cross-sell).

The CONTENT IS CAT'S — every spec value, every related-product label,
every CTA href comes from the captured page byte-exact. The DESIGN is
Wheeler's — substrate transitions, button styling, type system, chrome
inheritance all match the equipment-detail-used template's language.

The template handles all 249 new-machine pages by parameterizing:
- Model identity (model name, category)
- Hero photo (Cat-canonical CDN URL)
- Spec categories (Engine / Hydraulic / Transmission / etc. — variable count per machine)
- Spec rows within each category (label/value pairs — variable count per category)
- YouTube media gallery (variable count, may be empty)
- Related Attachments (3 typical, may vary)
- Related Products (3 typical, may vary)

## Sections (in render order)

1. **utility-strip** — A-rich verbatim
2. **main-header** — A-rich verbatim; **BUY verb is-active** (new equipment is a BUY context)
3. **dept-row** — A-rich verbatim
4. **breadcrumb** — `Home › New Equipment › <Category> › <Model>`. Per page from URL parse.
5. **hero-listing** — 2-col, same shape as equipment-detail-used (reuse `.hero.listing.block`):
   - LEFT (5/12): model name in Oswald display ("988 WHEEL LOADER"), key-fact strip (Engine Model / Engine Power / Bucket Capacity / Operating Weight), single primary CTA "Request a Quote" (yellow pill), secondary actions (Print / Share)
   - RIGHT (7/12): main image (Cat-canonical CDN URL, e.g., `https://s7d2.scene7.com/.../CM<id>?wid=916&hei=574`)
   - White substrate. **No price band** (Cat catalog pages don't display prices — different from used-equipment).
6. **specs-deep** — warm-stone substrate band. Section heading "Specifications". Per spec category emit a sub-section:
   - H3 = category name (Engine, Operating Specifications, Hydraulic System, Transmission, Cab, Dimensions, Service Refill Capacities, Sound Performance, Axles, Brakes, etc.)
   - Below each H3: a 2-col grid of label/value pairs (same structure as the hero's key-facts grid but vertical-flowing, full-width). The number of categories varies per machine (10–18 typically).
   - Authoring shape: `<ul><li><p>Label</p><p>Value</p></li>...</ul>` per category (lessons learned from §1 `<dl>` lottery — author the ul/li/p shape directly).
   - Notes: each category may have an additional "Note (N)" row with prose text — treat as a final list item with longer value text.
7. **media-gallery** — white substrate. Section heading "Media Gallery". Variable: YouTube video thumbnails in a 4-up grid (each thumb is a clickable card opening the video in a lightbox/new tab). May also include product photos if present (separate row below videos).
8. **standard-equipment** + **optional-equipment** — warm-stone substrate band. Two parallel H3 sections with bullet lists of standard/optional inclusions (3-col grid, same pattern as equipment-detail-used's features list).
9. **related-attachments** — white substrate. Section heading "Related Attachments". 3-up photo-card grid (reuse `.cards.photos.three` from CVA blocks theme): each card is image + product name + "VIEW DETAILS" CTA linking to the attachment's detail page.
10. **related-products** — white substrate. Section heading "Related Products". Same shape as related-attachments — 3-up photo-card grid for similar/comparable machines.
11. **cta-bar** — dark substrate. Single CTA "Request a Quote" (large yellow pill) + secondary "Order Parts" + "Request Service" (outlined). Reuse `.cta-bar.triple` from equipment-detail-used.
12. **site-footer** — A-rich verbatim

## Slot map (for the fill-script)

| Slot | Source in extracted page |
|---|---|
| `model.name` | h1 (e.g., "988 Wheel Loader") |
| `model.modelNumber` | parse from h1 (`/^(\d+[A-Z\-]*)/`) |
| `category.label` | parse from URL path segment 3 (e.g., "large-wheel-loaders" → "Large Wheel Loaders") |
| `category.href` | `/new/machines/<category-slug>/` |
| `hero.image` | first image with width >= 800 AND alt contains model number OR src contains "scene7.com" |
| `hero.keyFacts[]` | from "Engine" spec section — first 4 rows (Engine Model, Engine Power, Operating Weight, Bucket Capacity if available) |
| `specs[]` | per spec H3, capture label/value pairs from the section text (parser splits by newline-pair pattern) |
| `media.videos[]` | YouTube links (href pattern `youtube.com/watch?v=`) + their thumbnail images |
| `media.photos[]` | non-YouTube product images with width >= 240 (filter logos, banners, CTAs) |
| `standardEquipment[]` | bullet list under "Standard Equipment" H3 |
| `optionalEquipment[]` | bullet list under "Optional Equipment" H3 |
| `relatedAttachments[]` | items under "Related Attachments" H3 — each has name + image + "VIEW DETAILS" link |
| `relatedProducts[]` | items under "Related Products" H3 — same structure |
| `ctas.requestQuote.href` | `/machine-quote-request/?model=<slug>` |
| `ctas.orderParts.href` | `/parts/` (canonical) |
| `ctas.requestService.href` | `/request-service/` (canonical) |

**Required slots:** `model.name`, `category.label`, `hero.image`, `specs[]` (at least one category).
**Optional:** everything else. Variable per machine.

## Anti-template pass

| Captured pattern | Default reflex | Picked | Rationale |
|---|---|---|---|
| Hero with massive product image | Big banner + tagline | **2-col hero (specs + CTA left, image right)** — same as used variant | Consistency across new + used templates; user qualifies a specific machine, key facts above the fold matter. |
| Deep specs grouped by category | Single big table OR accordion | **Vertical sub-sections with H3 + label/value grid** | Cat's content is dense (50+ values per machine). Single table is unscannable; accordion hides content from search. Vertical sub-sections let users scan + browser-find. Warm-stone substrate signals "this is reference content." |
| Media gallery with YouTube + photos | Lightbox carousel | **4-up grid of thumbnails, click-to-open-video** | YouTube has its own player. Reuse the lightbox pattern from used variant for the photo strip. |
| Related Attachments + Related Products | Generic 4-up card grid | **3-up photo cards with VIEW DETAILS CTA** | Cat's pattern is exactly this — preserved. 3-up matches their grid count typically. |
| Standard / Optional Equipment lists | Single 2-col list | **Two H3 sub-sections in warm-stone band with 3-col bullet lists** | Lists are long (30+ items each). Two parallel H3s with 3-col cards reduces vertical scroll. |

## Voice classification

| Section | Element | Classification | Source |
|---|---|---|---|
| chrome | all labels | captured-verbatim | site-wide |
| breadcrumb | "Home" / "New Equipment" / `<Category>` / `<Model>` | captured-verbatim | URL + h1 |
| hero | h1 model name | captured-verbatim | `h1` |
| hero | key facts (Engine Model / Engine Power / etc.) | captured-verbatim | spec extraction |
| hero | "Request a Quote" CTA | captured-verbatim | canonical CTA |
| specs-deep | "Specifications" heading | direction-authorized chrome | composed |
| specs-deep | each H3 (category name) | captured-verbatim | spec heading |
| specs-deep | each label/value pair | captured-verbatim | spec text |
| media-gallery | "Media Gallery" heading | captured-verbatim | original h4 |
| media-gallery | YouTube video thumbnails | captured-verbatim | `<a href=youtube>` |
| standard / optional equipment | H3 names + bullet items | captured-verbatim | spec extraction |
| related-attachments / related-products | H3 + items | captured-verbatim | spec extraction |
| cta-bar | "Request a Quote" / "Order Parts" / "Request Service" | captured-verbatim | canonical CTAs |
| footer | all labels | captured-verbatim | site-wide |

**Direction-authorized:** just the "Specifications" eyebrow + "Media Gallery" eyebrow ordering. Everything else is Cat-verbatim.

## Inheritance from equipment-detail-used

- All tokens, chrome, base + responsive (identical brand chrome)
- Cascade-layer scaffold (`@layer tokens, fonts, reset, chrome, base, layout, substrate, variant, responsive`)
- `.hero.listing` variant (reuse — same 2-col, just no price band)
- `.cta-bar.triple` variant (reuse exactly)
- Sticky header with utility-strip offset (reuse)
- Lightbox motion script (extend to cover the gallery photos; YouTube opens in new tab)

## New variants this template adds

- `.specs.deep` — vertical sub-sections of label/value grids per spec category. Each sub-section is H3 + ul.
- `.cards.gallery.videos` — 4-up grid of YouTube thumbnails with hover-play overlay (or click-to-open-in-new-tab)
- `.cards.equipment.standard` + `.cards.equipment.optional` — 3-col bullet lists styled as cards in a warm-stone band (mirrors features.list from used variant but with explicit categorization)
- `.cards.related` — 3-up photo cards with VIEW DETAILS CTA (could reuse `.cards.categories` from `wheelercat-new-v2` theme if compatible)

## Hard contracts

- :root token block first content of first `<style>`
- `data-section` / `data-intent` / `data-layout` on every section
- Provenance block first child of `<head>`
- Self-contained except local Lenis paths
- AAA contrast
- Mobile breakpoints at 640 / 768 / 1024 / 1100
- Hamburger nav at ≤ 768
- No price band on the hero (key differentiator from used variant)

## Open questions

1. **YouTube embed vs link**: should the gallery embed the player inline (lightbox-style) or just link to YouTube? Inline embed is heavier but better UX. Link is lighter but breaks the flow.
2. **Spec presentation**: should each category be in its own warm-stone band (visual grouping) or all under ONE band with sub-sections? One band reduces vertical noise; per-category bands give stronger visual hierarchy.
3. **Standard/Optional Equipment in same band as specs, or separate?** Per shape brief default: separate warm-stone band. Reconsidering: maybe inline in the specs section as the last two categories.
4. **Related Attachments + Related Products — keep both or merge?** Could merge into a single "Related" cross-sell band with 6 items (3 attachments + 3 products). Or keep parallel for clarity.

After approval, I'll render via impeccable:craft (static prototype) OR jump straight to EDS following the equipment-detail-used precedent.
