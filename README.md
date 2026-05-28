# Uplift · Wheeler Cat

A presales redesign study of [wheelercat.com](https://wheelercat.com/) — a regional Caterpillar equipment dealer covering 18 branches across Utah, Arizona, Nevada, and Wyoming.

Built with [Stardust](https://github.com/pbakaus/impeccable) — a website-redesign pipeline that captures the current state, explores variant directions, prototypes proposed redesigns, and approves a canonical version.

## What's in here

```
.
├── PRODUCT.md / DESIGN.md / DESIGN.json    # target spec (Mode A — brand-faithful)
├── DESIGN-A.md/json ... DESIGN-I.md/json   # 9 variant exploration specs
├── DESIGN-A-rich.md/json                   # APPROVED variant spec
├── stardust/
│   ├── state.json                          # project state machine
│   ├── direction.md                        # resolved redesign direction + approved variant
│   ├── uplift-improvements.md              # 5 named weaknesses fixed in variant A
│   ├── uplift-questions.md                 # 8 candidate "what if…" directions explored
│   ├── current/                            # 26-page capture of wheelercat.com (--cap 25 crawl)
│   │   ├── PRODUCT.md / DESIGN.md          # descriptive snapshot of the current site
│   │   ├── brand-review.html               # visual review of the captured brand surface
│   │   ├── _brand-extraction.json          # consolidated palette, type, motifs, voice
│   │   ├── pages/                          # per-page JSON capture
│   │   └── assets/                         # captured fonts, logo, media, screenshots
│   └── prototypes/                         # 13 rendered HTML prototypes + shape briefs
│       ├── home-A-rich-proposed.html       # APPROVED home prototype
│       ├── home-A-proposed.html            # variant A · faithful + 5 improvements
│       ├── home-B-proposed.html            # variant B · yellow as primary surface
│       ├── home-C-proposed.html            # variant C · static fallback
│       ├── home-C-cinematic.html           # variant C · kinetic-display motion
│       ├── home-D-proposed.html            # variant D · display-typography amplification
│       ├── home-E-proposed.html            # variant E · photography re-foregrounding
│       ├── home-F-proposed.html            # variant F · Cat-triangle signature gesture
│       ├── home-G-proposed.html            # variant G · dark as primary surface
│       ├── home-H-proposed.html            # variant H · renters-first IA reframe
│       ├── home-I-proposed.html            # variant I · spec-sheet primitive
│       ├── home-A-verbatim-proposed.html   # variant A · IA + content verbatim
│       ├── nav-explorations.html           # header IA exploration mock (4 patterns)
│       └── nav-pattern-a-strategies.html   # Pattern A · 3 strategies for "other links"
```

## Approved redesign

**Home page → variant `A-rich`** at [`stardust/prototypes/home-A-rich-proposed.html`](stardust/prototypes/home-A-rich-proposed.html).

A-rich composes the strongest moves from multiple variants:
- A's improvements list (carousel → 3-up finance grid, modular type scale, locations consolidation)
- B's palette-inverse white pill CTA
- C-cinematic's Lenis motion runtime (scroll-reveal + split-flap finance numerals)
- G's yellow-eyebrow + dark-page locations composition
- H's Compact Track Loader hero photo
- User-directed: "Redefining Commitment" services-commitment narrative + Pattern A 4-verb nav + 4-up Field Notes blog cards + real partner logo strip

Full audit trail in [`DESIGN-A-rich.md`](DESIGN-A-rich.md) and [`stardust/direction.md`](stardust/direction.md).

## Site capture summary

| Metric | Value |
|---|---|
| Origin crawled | https://wheelercat.com/ |
| Pages discovered | 253 (sitemap.xml) |
| Pages captured | 26 (home + 25 IA-priority via `--cap 25`) |
| Brand palette | 7 captured colors led by Cat Yellow `#FFCC00` |
| Type families | Roboto Condensed (display), Roboto (body), Oswald (display-tall, used in approved hero), icomoon (icons) |
| Captured photography | 52 images |
| Wait-mode reliability | 25/25 medium-wait, no fallbacks, 0 failures |

## Reproducing

This project was built incrementally through chat-driven iteration with Claude Code + Stardust + Impeccable plugins. To explore the prototypes, open any `.html` file in `stardust/prototypes/` directly in a browser — every file is self-contained except for the captured-font references (which resolve to `stardust/current/assets/fonts/`) and Lenis (which resolves to a local copy in the same directory).

## Brand-faithful Mode A

Every prototype renders under the same hard pins from the captured brand surface:

- **Palette:** white `#FFFFFF`, Cat Yellow `#FFCC00`, surface-dark `#272727`, warm stone `#E5E3DF`, body text `#454545`, hero overlay `rgba(18,18,18,0.5)`
- **Type:** Roboto Condensed (display) + Roboto (body) + icomoon (icons) + Oswald (display-tall, captured but originally unused; restored in A-rich hero)
- **AAA contrast** on every text-on-substrate pair
- **No invented colors, no invented fonts** — every literal value traces to the captured page or is direction-authorized (classified in the per-file provenance block)

## License + attribution

Captured content (copy, photography, fonts) belongs to Wheeler Machinery Co. and is included for redesign-study purposes only. The redesign work itself (HTML prototypes, design specs, direction reasoning) is the author's. See individual files' provenance blocks for sourcing detail.
