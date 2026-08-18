# BurnLoop app flows (from Figma)

Source: https://www.figma.com/design/QOWi4LJNoltBTyIZGl6kcG/Burnloop-export
(page "website"). Three flows are documented as iPhone mockup sequences.

## 1. Scan flow (section "scan flow", node 3:4)

The core meal-scan loop, six screens:

1. **Home** — top coach card ("You had a heavy meal. Let's balance it out today."
   + short explanation + "Generate plan now" CTA), "Your Next Action" card (e.g.
   "Go for a 15-min walk" with a Start button), "Today's Health" stat row (Energy /
   Sugar Spike / Fullness, each a 0–100 score), and a Recent Meal card with risk
   tags (e.g. "High Sugar Spike", "High Sodium").
2. **Your Energy Loop** (partially covered by an "Add your meal" bottom sheet) —
   a circular calorie-balance ring (consumed / burned / left) and a "Take Action"
   section; the sheet itself offers **Take photo / Library / Manual** entry
   methods.
3. **Review your meal** — photos added (thumbnails), a "Detected Meal" list with
   per-item calorie estimates (e.g. "pepperoni pizza ~230 cal"), option to add a
   food manually, and an "Analyze meal" primary CTA (gradient pill button).
4. **Meal Review — good case** — "Great choice for you" banner (green check),
   three risk pills (Sodium Stress / Sugar Spike / Energy Impact, all "Low/Good"),
   a "Here's what this meal means for you" explanation block, a "What we suggest"
   list (log the meal, hydration tip, add vegetables), a "Why we're suggesting
   this" block tying advice back to the user's condition, then **Log Meal**
   (primary) / **Skip this meal** (secondary) actions.
5. **Meal Review — caution case** — same layout, but the top banner reads
   "Caution: Not ideal for you" (warning icon) with pills flipped to High/Medium
   risk, still followed by the same suggestion/reasoning/action structure.
6. **Home (updated)** — same home layout reflecting the newly logged meal.

Bottom tab bar across screens: **Home / Progress / Scan Meal (center, elevated) /
History / Settings**.

## 2. Exercise flow (section "exercise flow", node 3:173)

Three screens, triggered from the "burn it off" recommendation:

1. **"Burn now or later"** — activity picker list (Walking, Biking, Running,
   Swimming, Yoga, Health Training), each row showing an estimated time to hit
   the day's remaining movement target (e.g. "Walking — ~44 min, recommended
   based on today's target").
2. **Active workout timer** — selected activity header ("Walking"), live Time +
   Burned stats, a large circular progress ring ("0 / 175 cal"), estimated time
   to burn the target, and Start / Pause / Stop controls.
3. **Completion screen** — flame mark in a radial glow, "Great Job!" headline,
   "Keep the momentum!" encouragement card, a 3-up stat summary (Time / Calories
   Burned / Activity), a supportive closing line, and a **Done** primary CTA.

## 3. Generate-plan flow (section "Section 53" / "Generate plan", node 3:192)

Four states, labeled directly on the mockup:

- **A. Home (Coach Card entry point)** — the same coach card from the scan flow,
  with "Generate plan now" as the entry point into this flow.
- **B. Generate Plan — input sheet** — shows the user's saved goal (e.g. "Lose
  Weight", editable), a free-text "Tell the coach your focus" field (e.g. "Gain
  5kg within 1 month"), an optional constraints field (diet prefs/schedule/
  injuries), a note that the plan will be built around Energy/Sugar Spike/
  Fullness, and a **Generate Plan** CTA.
- **C. Goal Conflict — confirmation state** — appears when the typed focus
  conflicts with the saved goal; shows both goals side by side and offers
  **"Just for today"** (one-off plan, saved goal unchanged) vs. **"Update my
  goal"** (persists the new goal), plus a reassurance note that the goal can
  always be changed later in Settings.
- **D. Generated Plan (Today)** — tab switcher (Today / Week "Coming soon" /
  Month "Coming soon"), a target summary row (Energy/Sugar Spike/Fullness), a
  full meal-by-meal plan (Breakfast/Lunch/Snack/Dinner, each with items, a
  per-meal "why" tag like "Supports Energy"/"Helps Balance Sugar"), a "Tips for
  Today" list, and **Save Plan** (primary) / **Regenerate** (secondary) actions.

## Cross-flow patterns

- Bottom-sheet and full-screen modal patterns both appear (e.g. "Add your meal"
  sheet vs. "Generate Plan" full-screen flow) — mixed intentionally by depth of
  interaction.
- Every AI-generated recommendation is paired with an explicit "why" — a
  condition-linked reasoning block, never a bare instruction.
- Status/risk is consistently expressed as labeled pills (Low/Medium/High or
  Good/Stable) rather than raw numbers alone, with color coding (green = good,
  amber = medium, red = high risk).
