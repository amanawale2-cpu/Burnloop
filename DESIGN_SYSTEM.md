# BurnLoop — Figma Design System & Brand Guidelines
> Version 1.0 · Based on live product screenshots · Figma-ready token format

---

## 1. 🎨 COLOR STYLES (Figma Tokens)

### Base Palette (Raw Values)

| Swatch | Token Name | HEX | RGB | Usage |
|--------|-----------|-----|-----|-------|
| 🟣 | `Color/Brand/DeepPurple` | `#3B1D8A` | rgb(59, 29, 138) | Section headers, snapshot cards, dark banners |
| 🔵 | `Color/Brand/Violet` | `#7C3AED` | rgb(124, 58, 237) | Rings, progress arcs, primary button fill |
| 💜 | `Color/Brand/AccentViolet` | `#9B40D6` | rgb(155, 64, 214) | Tappable text (Skip / Save / picker labels) |
| 🟠 | `Color/Brand/Orange` | `#F97316` | rgb(249, 115, 22) | Flame icon, calorie numbers, energy indicators |
| 🩷 | `Color/Brand/HotPink` | `#C026D3` | rgb(192, 38, 211) | Gradient mid-stop only |

### Gradient Tokens

```
Color/Gradient/Brand
  Stop 0%  → #F97316   (Orange)
  Stop 50% → #C026D3   (Hot pink)
  Stop 100%→ #6D28D9   (Deep violet)
  Angle: 135°
  Applied on: selected goal tiles, premium upsell cards

Color/Gradient/PageWash
  Stop 0%  → #F5F0FF   (light lavender)
  Stop 100%→ #FFFFFF   (white)
  Angle: 180°
  Applied on: workout-complete and summary screen backgrounds
```

### Background Tokens

| Token | HEX | RGB | Usage |
|-------|-----|-----|-------|
| `Color/Background/Default` | `#FAFAF9` | rgb(250, 250, 249) | Root app background (warm off-white) |
| `Color/Background/Card` | `#F3F4F6` | rgb(243, 244, 246) | Cards, input containers, goal tiles (unselected) |
| `Color/Background/Lavender` | `#F0EDFB` | rgb(240, 237, 251) | Goal grid section, profile form background wash |
| `Color/Background/InputField` | `#EEEEEE` | rgb(238, 238, 238) | Stepper container, picker rows |
| `Color/Background/Dark` | `#3B1D8A` | rgb(59, 29, 138) | Dark header banners, BurnLoop snapshot card |
| `Color/Background/Elevated` | `#EDE9FE` | rgb(237, 233, 254) | BMI "Elevated" badge background |
| `Color/Background/Overlay` | `rgba(0,0,0,0.35)` | — | Modal backdrop overlay |

### Text Tokens

| Token | HEX | RGB | Usage |
|-------|-----|-----|-------|
| `Color/Text/Primary` | `#111827` | rgb(17, 24, 39) | Headings, body text, all dark-on-light |
| `Color/Text/Secondary` | `#6B7280` | rgb(107, 114, 128) | Captions, unit labels ("years", "lb"), subtitles |
| `Color/Text/OnDark` | `#FFFFFF` | rgb(255, 255, 255) | All text on deep purple surfaces |
| `Color/Text/OnDarkMuted` | `#C4B5FD` | rgb(196, 181, 253) | Subtitles inside dark banners |
| `Color/Text/Accent` | `#9B40D6` | rgb(155, 64, 214) | Interactive/tappable text links |
| `Color/Text/Energy` | `#F97316` | rgb(249, 115, 22) | Calorie totals, flame metrics |

### Border Tokens

| Token | HEX | Usage |
|-------|-----|-------|
| `Color/Border/Subtle` | `#E5E7EB` | Dividers, separator lines |
| `Color/Border/Input` | `#D1D5DB` | Input field outlines (inactive) |
| `Color/Border/Focus` | `#7C3AED` | Input field outlines (focused) |
| `Color/Border/Card` | `transparent` | Cards rely on background fill only |

### Status / Semantic Tokens

| Token | HEX | RGB | Usage |
|-------|-----|-----|-------|
| `Color/Status/Success` | `#10B981` | rgb(16, 185, 129) | Streak completed, positive feedback |
| `Color/Status/Warning` | `#F59E0B` | rgb(245, 158, 11) | Calorie budget warning |
| `Color/Status/Danger` | `#EF4444` | rgb(239, 68, 68) | Allergy alerts, over-budget |
| `Color/Status/ElevatedFg` | `#7C3AED` | rgb(124, 58, 237) | BMI "Elevated" badge text |
| `Color/Status/ElevatedBg` | `#EDE9FE` | rgb(237, 233, 254) | BMI "Elevated" badge fill |

### Light Mode (default) — Dark Mode note
> Dark mode is **not visible** in the provided screens. The system is defined in Light mode.  
> For dark mode: invert background hierarchy, keep brand colors, shift text to white/`#F9FAFB`.

---

## 2. 🔤 TYPOGRAPHY STYLES

> **Font Family**: Helvetica (design system reference font)  
> On iOS devices, map to **SF Pro Display** (Display sizes) / **SF Pro Text** (Body sizes)  
> Fallback stack: `Helvetica, -apple-system, BlinkMacSystemFont, sans-serif`

### Type Scale

#### Display

| Figma Style | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------------|------|--------|------|-------------|----------------|-------|
| `Text/Display/Hero` | Helvetica | Black (900) | 72px | 80px (111%) | −1.5px | Calorie/metric numbers ("101") |
| `Text/Display/Large` | Helvetica | Bold (700) | 40px | 48px (120%) | −1.0px | "Great Job!" celebration heading |
| `Text/Display/Medium` | Helvetica | Bold (700) | 32px | 40px (125%) | −0.5px | Screen-level page titles |

#### Headings

| Figma Style | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------------|------|--------|------|-------------|----------------|-------|
| `Text/H1` | Helvetica | Bold (700) | 28px | 36px (129%) | −0.3px | Section primary heading |
| `Text/H2` | Helvetica | Semibold (600) | 22px | 30px (136%) | −0.2px | Card headers ("Body basics") |
| `Text/H3` | Helvetica | Semibold (600) | 18px | 26px (144%) | 0px | Subsection labels ("Gender", "Height") |

#### Body

| Figma Style | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------------|------|--------|------|-------------|----------------|-------|
| `Text/Body/Large` | Helvetica | Medium (500) | 17px | 26px (153%) | 0px | Goal tile titles, form field values |
| `Text/Body/Regular` | Helvetica | Regular (400) | 15px | 22px (147%) | 0px | General body copy, descriptions |
| `Text/Body/Small` | Helvetica | Regular (400) | 13px | 20px (154%) | 0.1px | Supplementary text, goal subtitles |

#### Labels & Utility

| Figma Style | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------------|------|--------|------|-------------|----------------|-------|
| `Text/Label/Large` | Helvetica | Semibold (600) | 15px | 20px | 0.1px | Button labels, nav actions (Skip/Save) |
| `Text/Label/Medium` | Helvetica | Medium (500) | 13px | 18px | 0.2px | Badge text ("Elevated"), tags |
| `Text/Label/Small` | Helvetica | Regular (400) | 11px | 16px | 0.3px | Timestamps, minor metadata |
| `Text/Caption` | Helvetica | Regular (400) | 12px | 18px (150%) | 0.2px | Units ("years", "lb", "in") |

---

## 3. 📐 SPACING SYSTEM

> **Base grid**: **8pt** (iOS HIG standard)  
> All spacing values are multiples or halves of 8

### Spacing Scale

| Token | Value | Usage Context |
|-------|-------|---------------|
| `Space/2` | 2px | Micro-gap, icon-to-label tight pairing |
| `Space/4` | 4px | Inner padding for badges and chips |
| `Space/8` | 8px | Tight spacing between related elements |
| `Space/12` | 12px | Spacing between label and input value |
| `Space/16` | 16px | Standard inner card padding (horizontal) |
| `Space/20` | 20px | Section internal vertical padding |
| `Space/24` | 24px | Spacing between card groups |
| `Space/32` | 32px | Major section separation |
| `Space/40` | 40px | Header-to-content gap |
| `Space/48` | 48px | Large breathing room / bottom safe area |
| `Space/64` | 64px | Hero element vertical centering offset |

### Padding Rules

```
Card inner padding:      Space/16 horizontal, Space/20 vertical
Screen edge margin:      Space/20 (20px from screen edges)
Section gap (vertical):  Space/24 between card groups
Button padding:          Space/16 vertical, Space/24 horizontal
Input stepper padding:   Space/12 all sides
```

### Safe Areas (iOS)
```
Status bar top:   ~50px (dynamic — use safeAreaInsets)
Home indicator:   Space/32 bottom padding above home bar
```

---

## 4. 🧱 COMPONENTS

### Component/Button/Primary
> "Done", primary form submission, CTAs

```
Name:    Component/Button/Primary
Variants:
  - Size:  Large | Medium | Small
  - State: Default | Pressed | Disabled

Large:
  Width:    Fill container (full-width pill)
  Height:   56px
  Padding:  16px top/bottom, 24px left/right
  Radius:   Radius/Full (28px — true pill)
  Fill:     Color/Brand/Violet (#7C3AED)
  Label:    Text/Label/Large · Color/Text/OnDark · center aligned

Medium:
  Height:   44px
  Radius:   Radius/Full (22px)
  Fill:     Color/Brand/Violet

Small:
  Height:   36px
  Radius:   Radius/Full (18px)
  Fill:     Color/Brand/Violet

States:
  Default:   Fill = Color/Brand/Violet
  Pressed:   Fill = Color/Brand/DeepPurple (#3B1D8A), opacity 95%
  Disabled:  Fill = Color/Background/Card (#F3F4F6), label = Color/Text/Secondary
```

### Component/Button/Text (Ghost)
> Skip, Save, inline text actions

```
Name:    Component/Button/Text
States:  Default | Pressed | Disabled

Default:
  Background: Color/Background/Card (#F3F4F6)
  Height:     44px
  Radius:     Radius/Full (22px)
  Padding:    12px vertical, 20px horizontal
  Label:      Text/Label/Large · Color/Text/Accent (#9B40D6)

Pressed:
  Background: slightly darker, opacity 80%

Disabled:
  Label color: Color/Text/Secondary
```

### Component/Stepper
> Age and Weight input controls

```
Name:    Component/Stepper
Size:    Fixed width (fills half card width minus Space/8 gap)
Height:  96px
Radius:  Radius/Medium (16px)
Fill:    Color/Background/InputField (#EEEEEE)

Layout (vertical stack):
  Top:    Label text (e.g. "Age") · Text/Caption · Color/Text/Secondary · top Space/12
  Middle: Value + Unit (e.g. "30 years") · Text/Body/Large bold · center
  Bottom: [−] | [+] stepper row · Space/8 bottom

Stepper row:
  Divider:    1px · Color/Border/Subtle
  Buttons:    Text/H3 · Color/Text/Primary · tap target 44×44px each
```

### Component/Card/Section
> White rounded card wrapping a form section

```
Name:    Component/Card/Section
Radius:  Radius/Large (20px)
Fill:    Color/Background/Default (#FAFAF9)
Shadow:  Elevation/1
Padding: Space/20 all sides

Usage: "Body basics" card, health context card
```

### Component/Card/Dark (Snapshot/Banner)
> Deep purple brand card

```
Name:    Component/Card/Dark
Radius:  Radius/Large (20px)
Fill:    Color/Background/Dark (#3B1D8A)
Padding: Space/20

Title:   Text/H2 · Color/Text/OnDark
Body:    Text/Body/Regular · Color/Text/OnDarkMuted (#C4B5FD)
```

### Component/Card/Goal/Unselected
> Unselected goal tile in the goal grid

```
Name:    Component/Card/Goal/Unselected
Width:   (50% container - Space/8) flexible
Min height: 100px
Radius:  Radius/Large (20px)
Fill:    Color/Background/Card (#F3F4F6)
Padding: Space/16

Layout:
  Top-left: Icon (24px, Color/Text/Primary)
  Title:    Text/Body/Large · Semibold · Color/Text/Primary
  Subtitle: Text/Body/Small · Color/Text/Secondary
```

### Component/Card/Goal/Selected (Gradient)
> "Stay Healthy" — active goal selection state

```
Name:    Component/Card/Goal/Selected
Same dimensions as unselected
Fill:    Color/Gradient/Brand (135° orange → hot-pink → deep violet)
Title:   Text/Body/Large · Bold · Color/Text/OnDark (#FFFFFF)
Subtitle: Text/Body/Small · Color/Text/OnDark opacity 85%
Icon:    Color/Text/OnDark
```

### Component/Card/Motivational
> Post-workout motivational message card

```
Name:    Component/Card/Motivational
Radius:  Radius/Large (20px)
Fill:    Color/Background/Card (#F3F4F6)
Padding: Space/16 horizontal, Space/20 vertical
Width:   Fill screen minus Space/20 horizontal margin

Row 1: emoji icon + bold title · Text/Body/Large · Semibold
Row 2: body copy · Text/Body/Regular · Color/Text/Secondary · center
```

### Component/Badge/Status
> "Elevated" BMI badge

```
Name:    Component/Badge/Elevated
Height:  28px
Radius:  Radius/Full (14px)
Fill:    Color/Background/Elevated (#EDE9FE)
Label:   Text/Label/Medium · Color/Status/ElevatedFg (#7C3AED)
Padding: Space/8 horizontal, Space/4 vertical
```

### Component/SegmentedPicker
> ft/in vs cm, Female / Male / Prefer not to say

```
Name:    Component/SegmentedPicker
Height:  36px
Radius:  Radius/Full (18px)
Track fill:  Color/Background/InputField (#EEEEEE)

Selected segment:
  Fill:   Color/Background/Default (#FFFFFF)
  Shadow: Elevation/1
  Label:  Text/Label/Medium · Color/Text/Primary · Semibold

Unselected segment:
  Fill:   transparent
  Label:  Text/Label/Medium · Color/Text/Secondary

Note: "Prefer not to say" selected state shows Color/Text/Accent (#9B40D6)
```

### Component/Logo/AppIcon
> The flame icon used in app icon and workout complete screen

```
Name:     Component/Logo/AppIcon
Variants: CircleRing | Square | Standalone

CircleRing:
  Outer ring:  stroke 4px · Color/Brand/Violet (#7C3AED)
  Inner card:  rounded square, fill #FFFFFF, slight shadow
  Icon:        Flame SVG · fill Color/Brand/Orange (#F97316)
  Overall size: 120px recommended on summary screens

Square (App Icon):
  Rounded square (iOS icon radius)
  Background: #FFFFFF or very light gray
  Flame: centered, Color/Brand/Orange
```

### Component/Navigation/SheetHeader
> Skip / Save row at top of modal sheets

```
Name:    Component/Navigation/SheetHeader
Height:  64px
BG:      Color/Background/Default
Padding: Space/16 horizontal

Left:  Component/Button/Text label "Skip"
Right: Component/Button/Text label "Save"
Both:  Text/Label/Large · Color/Text/Accent
```

### Component/Picker/List (iOS)
> Health condition dropdown

```
Name:    Component/Picker/List
Style:   iOS native UIPickerView / Menu style
BG:      Color/Background/Default (#FFFFFF)
Row height: 52px
Divider:   Color/Border/Subtle
Label:     Text/Body/Regular · Color/Text/Primary
Checkmark: Color/Brand/AccentViolet (#9B40D6) — selected item
```

---

## 5. 🔲 EFFECT STYLES

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `Radius/XSmall` | 6px | Tiny chips, inner elements |
| `Radius/Small` | 10px | Small buttons, tags |
| `Radius/Medium` | 14px | Input fields, steppers |
| `Radius/Large` | 20px | Cards, section containers |
| `Radius/XLarge` | 28px | Sheet headers, modal cards |
| `Radius/Full` | 9999px | Pill buttons, badges, toggles |

### Shadows (Elevation)

| Token | CSS Value | Figma Drop Shadow | Usage |
|-------|-----------|-------------------|-------|
| `Elevation/0` | none | none | Flat surfaces |
| `Elevation/1` | `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)` | X:0 Y:1 B:3 Spread:0 · #000 8% | Cards, white stepper container |
| `Elevation/2` | `0 4px 12px rgba(59,29,138,0.15)` | X:0 Y:4 B:12 Spread:0 · #3B1D8A 15% | Floating elements, active pickers |
| `Elevation/3` | `0 8px 24px rgba(59,29,138,0.20)` | X:0 Y:8 B:24 · #3B1D8A 20% | Modals, bottom sheets |

### Ring / Progress Arc
```
Effect/Ring/Brand
  Stroke width:  4px
  Stroke color:  Color/Brand/Violet (#7C3AED)
  Cap:           Round
  Type:          Circular, no fill
  Applied on:    workout-complete logo ring
```

---

## 6. 🧭 GRID & LAYOUT

### Mobile Grid (iOS · 390px viewport reference)

```
Screen width:     390px (iPhone 14 Pro base)
Columns:          4
Column width:     ~75px
Gutter:           16px
Margin:           20px left + 20px right
Content width:    350px

Two-column grid (goal tiles, steppers):
  Column width:   (350 - 12) / 2 = 169px
  Gap:            12px
```

### Container Sizes

```
Full-bleed card:    390px wide, no horizontal margin
Standard card:      350px (screen - 2 × Space/20)
Compact element:    fit-content, max 200px
Button (full-width): 350px
```

### Vertical Rhythm

```
Screen top safe area:  ~50px
First section top:     Space/24 below safe area or header
Between sections:      Space/24
Bottom safe area:      Space/48 + home indicator (~34px)
Sticky button bottom:  Space/16 above safe area bottom
```

### Responsive Behavior
```
iPhone SE (375px):  Maintain 20px margins, compress inner spacing by 10%
iPhone Pro Max (430px): Increase margins to 24px, cards scale up naturally
iPad (future):        Switch to 12-column, max content width 680px, centered
```

---

## 7. 🎯 DESIGN PRINCIPLES

### 1. Energy Through Contrast
> Pair the high-energy orange (effort, calories, flame) against the calm deep purple (medical authority) to create visual tension that communicates: "we take your health seriously, but we're exciting."

### 2. Trust-First Hierarchy
> Medical content (conditions, BMI, health context) is always displayed on the deep purple surface or with the Elevated badge — visually signaling that this information is validated and important.

### 3. Progressive Disclosure
> Complex health data (body fat %, conditions, goals) is revealed across scrollable sections. Use card groupings to segment information density. Never overwhelm — show one decision at a time.

### 4. Tactile Feedback
> Every interactive element has a distinct pressed state using shade shifts and opacity. Steppers, segment pickers, and goal tiles all communicate tappability. The brand ring on the workout-complete screen animates to celebrate.

### 5. Minimal Chrome, Maximum Content
> Navigation is reduced to two ghost buttons (Skip / Save). No heavy navigation bars. The content is the UI. Let the data breathe with consistent `Space/24` section gaps.

---

## 8. 🧩 FIGMA ORGANIZATION

### Pages Structure

```
📄 Page 1: 🎨 Foundations
  ├── Color Styles Frame
  │   ├── Brand Palette swatches
  │   ├── Gradient previews
  │   ├── Background swatches
  │   ├── Text color swatches
  │   └── Status/Semantic swatches
  ├── Typography Specimens Frame
  │   ├── Display scale
  │   ├── Heading scale
  │   ├── Body scale
  │   └── Label/Caption scale
  ├── Spacing System Frame
  │   └── Visual spacing ruler with all tokens
  └── Effects Frame
      ├── Border radius showcase
      └── Shadow/elevation showcase

📄 Page 2: 🧱 Components
  ├── Buttons (all variants + states)
  ├── Inputs (stepper, segmented picker)
  ├── Cards (section, dark, goal, motivational)
  ├── Badges & Tags
  ├── Navigation (sheet header)
  └── Logo / Icon variants

📄 Page 3: 📱 Screens
  ├── Workout Complete
  ├── Profile Setup — Body Basics
  ├── Profile Setup — Goal Selection
  ├── Profile Setup — Health Context
  └── Health Condition Picker (overlay)

📄 Page 4: 📐 Grids & Annotations
  ├── Mobile grid overlay (390px)
  ├── Spacing annotations
  └── Component anatomy callouts
```

### Figma Style Naming Conventions

```
Color Styles:
  Color/[Group]/[Variant]
  Examples:
    Color/Brand/Violet
    Color/Background/Card
    Color/Text/Secondary
    Color/Status/Danger
    Color/Gradient/Brand

Text Styles:
  Text/[Category]/[Variant]
  Examples:
    Text/Display/Hero
    Text/H2
    Text/Body/Regular
    Text/Label/Large
    Text/Caption

Effect Styles:
  Elevation/[Level]       → Elevation/1, Elevation/2
  Radius/[Size]           → Radius/Large (use as variable, not effect style)
```

### Component Naming Conventions

```
Figma Component Naming:
  Component/[Type]/[Variant]/[State]
  Examples:
    Component/Button/Primary/Default
    Component/Button/Primary/Pressed
    Component/Button/Primary/Disabled
    Component/Card/Goal/Selected
    Component/Card/Goal/Unselected
    Component/Badge/Elevated
    Component/Stepper/Default
    Component/SegmentedPicker/Default
    Component/Navigation/SheetHeader

Icon Naming:
  Icon/[Name]/[Size]
  Examples:
    Icon/Flame/24
    Icon/Target/24
    Icon/Person/24
    Icon/Heart/24
    Icon/Lightning/16
```

### Variable Collections (Figma Variables)

```
Collection 1: Primitives
  → Raw hex values (never used directly in designs)
  → prefix: primitive/

Collection 2: Semantic (Light Mode)
  → Maps primitives to semantic roles
  → e.g., background/default → primitive/gray-50

Collection 3: Component Tokens
  → Specific component overrides
  → e.g., button/primary/fill → semantic/brand/violet
```

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────┐
│              BURNLOOP BRAND QUICK REF               │
├────────────────┬────────────────────────────────────┤
│ Deep Purple    │ #3B1D8A  — authority, headers       │
│ Violet         │ #7C3AED  — primary, rings, buttons  │
│ Accent Violet  │ #9B40D6  — tappable text            │
│ Orange         │ #F97316  — energy, calories, flame  │
│ Gradient       │ Orange → HotPink → DeepViolet 135°  │
├────────────────┼────────────────────────────────────┤
│ BG Default     │ #FAFAF9  — app root                 │
│ BG Card        │ #F3F4F6  — cards, tiles             │
│ BG Lavender    │ #F0EDFB  — section wash             │
├────────────────┼────────────────────────────────────┤
│ Text Primary   │ #111827                             │
│ Text Secondary │ #6B7280                             │
│ Text On Dark   │ #FFFFFF                             │
├────────────────┼────────────────────────────────────┤
│ Font           │ Helvetica / SF Pro (iOS)            │
│ Base grid      │ 8pt                                 │
│ Screen margin  │ 20px                                │
│ Card radius    │ 20px                                │
│ Button shape   │ Full pill (Radius/Full)             │
└────────────────┴────────────────────────────────────┘
```
