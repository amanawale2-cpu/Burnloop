# BurnLoop brand guidelines (from Figma)

Source: https://www.figma.com/design/QOWi4LJNoltBTyIZGl6kcG/Burnloop-export
(page "website", section "Burnloop guidels and Logos", node 1:6)

> Note: this file's real (Figma-native) brand purple supersedes the magenta/pink
> guessed from the earlier marketing-deck ad creatives in `docs/marketing/`. Treat
> this document as the authoritative palette/logo source.

## Logo

Mark: a stylized flame/droplet glyph, purple gradient (light violet at the tip
fading to deep indigo at the base) on a white circular badge. Wordmark: "BurnLoop"
(one word, capital B and L), paired to the right of the mark.

Two lockups exist in the file:
- **Frame 14** (node 1:7) — mark + wordmark in solid white, meant for dark/colored
  backgrounds.
- **Frame 12** (node 1:11) — mark in the purple gradient + wordmark in near-black,
  inside a light rounded card, meant for light backgrounds.

(Actual PNG/SVG exports could not be downloaded into this repo — this session's
network proxy blocks direct fetches to figma.com. Pull the exports manually from
the Figma file, or re-run the Figma MCP `download_assets` call from an environment
that allows it, and drop them in `docs/brand/logo/`.)

## Brand color palette ("Blue" swatch group — 10-step purple scale)

| Token | Hex | RGB |
|---|---|---|
| Light | `#f1eef9` | rgb(241, 238, 249) |
| Light :hover | `#eae6f6` | rgb(234, 230, 246) |
| Light :active | `#d3cced` | rgb(211, 204, 237) |
| **Normal** (primary brand color) | `#7259c5` | rgb(114, 89, 197) |
| Normal :hover | `#6750b1` | rgb(103, 80, 177) |
| Normal :active | `#5b479e` | rgb(91, 71, 158) |
| Dark | `#564394` | rgb(86, 67, 148) |
| Dark :hover | `#443576` | rgb(68, 53, 118) |
| Dark :active | `#332859` | rgb(51, 40, 89) |
| Darker | `#281f45` | rgb(40, 31, 69) |

`Normal` (`#7259c5`) is the primary brand purple used for CTAs and accents; `Light`
tones are for tinted backgrounds/surfaces, `Dark`/`Darker` for dark-mode surfaces
and high-contrast text/icons.

## Secondary tokens observed in a feature mockup (lower confidence)

A "Generate Plan" flow mockup (section "Section 53", node 3:192) includes its own
embedded design-token reference panel. Screen resolution in this sandbox was too
low to transcribe with full certainty, but the legible values were:

- `--color-accent: #6946BE` (close to, but not identical to, the master `Normal`
  purple above — confirm which is canonical before implementation)
- `--color-alert-bg: #FDEAEA`, `--color-alert-text: #CD392B` (risk/caution states)
- `--color-medium-bg: #FDF3E3` (medium-risk pill background)
- `--color-surface: #F6F5F7`-ish, `--text-primary: #1A1A1A`, `--text-muted: #8A8A8A`
  (approximate — re-verify against the source file)
- Typography: screen title 24px/700, card title 20px/700, section label 12px/500
  uppercase, body 15px/400, meta 13px/400
- Spacing: 8pt scale — 4/8/12/16/24/32/48px, all paddings/margins/gaps as
  multiples of 8px
- Radius: large cards/coach card 24px, standard cards/inputs 20px, buttons 16px,
  pills/chips 999px (full pill)
- Shadow: `0px 4px 12px rgba(0,0,0,0.06)` applied to all cards
- **Gradient rule:** gradient fills are reserved for exactly two elements
  app-wide — the coach message card and the "Scan Meal" CTA. Nothing else should
  use a gradient.

These secondary values should be treated as directional (from a lower-res render)
and re-confirmed against the live Figma file before being hard-coded.
