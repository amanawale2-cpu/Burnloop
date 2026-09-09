import SwiftUI

// MARK: - BurnLoop Design System — Color Palette  v1.1
//
// Brand Identity: AI-powered fitness coach
// Personality: Energetic, trustworthy, medically aware
//
// Primary brand axis:   Deep purple (authority + calm) ↔ Orange (energy + heat)
// Interactive axis:     Violet-magenta (tappable elements, links, CTAs)
// Semantic axis:        Standard status colors (success, warning, danger)
//
// v1.1 additions: Home dashboard, Walking workout tracker,
//                 AI Meal Analysis card, tab bar, streak card.

extension Color {

    // MARK: - Brand Core

    /// Deep indigo — section headers, profile banners, BurnLoop snapshot cards.
    static let blDeepPurple      = Color(hex: "#3B1D8A")

    /// Mid violet — rings, progress indicators, primary CTA buttons, tab bar active.
    static let blViolet          = Color(hex: "#7C3AED")

    /// Bright violet-magenta — tappable text (Skip / Save / picker labels).
    static let blAccentViolet    = Color(hex: "#9B40D6")

    /// AI Meal Analysis card fill — medium purple, sits between violet and deep purple.
    static let blMealCardPurple  = Color(hex: "#7B5CB6")

    /// Nested metric tile fill inside the Meal Analysis card (slightly deeper).
    static let blMealTilePurple  = Color(hex: "#6B4E9C")

    /// Energetic orange — flame icon, calorie numbers, Pause button, notification badge.
    static let blOrange          = Color(hex: "#F97316")

    // MARK: - Gradient Stops

    // Goal tile / premium card gradient (135° diagonal)
    static let blGradientOrange  = Color(hex: "#F97316")   // start — warm orange
    static let blGradientMid     = Color(hex: "#C026D3")   // bridge — hot pink
    static let blGradientPurple  = Color(hex: "#6D28D9")   // end — deep violet

    // Energy ring arc gradient (conic/angular, clockwise from right)
    // Used on the Home dashboard calorie progress ring
    static let blRingOrange      = Color(hex: "#F97316")   // 0°  — consumed start
    static let blRingCoral       = Color(hex: "#F43F5E")   // 90° — bottom
    static let blRingPink        = Color(hex: "#EC4899")   // 180° — left
    static let blRingViolet      = Color(hex: "#7C3AED")   // 270° — top (end)
    static let blRingTrack       = Color(hex: "#E5E7EB")   // empty arc track

    // MARK: - Backgrounds

    /// Root app background — off-white with a warm tone.
    static let blBgPrimary       = Color(hex: "#FAFAF9")

    /// Standard card / tile fill (light gray, unselected states).
    static let blBgCard          = Color(hex: "#F3F4F6")

    /// Lavender wash — goal grid, profile section backgrounds.
    static let blBgLavender      = Color(hex: "#F0EDFB")

    /// Input field container and stepper backgrounds.
    static let blBgInputField    = Color(hex: "#EEEEEE")

    /// Dark surface — profile banners, BurnLoop snapshot cards.
    static let blBgDark          = Color(hex: "#3B1D8A")

    /// BMI "Elevated" badge background.
    static let blBgElevated      = Color(hex: "#EDE9FE")

    /// Streak card warm peach tint.
    static let blBgStreak        = Color(hex: "#FFF3E4")

    /// Workout metric stat tile fill (dark charcoal).
    static let blBgMetricTile    = Color(hex: "#3D3D3D")

    /// Modal / sheet backdrop.
    static let blBgOverlay       = Color(red: 0, green: 0, blue: 0, opacity: 0.35)

    // MARK: - Text

    /// Primary heading and body text.
    static let blTextPrimary     = Color(hex: "#111827")

    /// Secondary captions, unit labels, subtitles.
    static let blTextSecondary   = Color(hex: "#6B7280")

    /// Text on any dark purple surface.
    static let blTextOnDark      = Color(hex: "#FFFFFF")

    /// Muted text on dark surfaces (subtitles inside banners).
    static let blTextOnDarkMuted = Color(hex: "#C4B5FD")

    /// Tappable / accent text links (Skip, Save, pickers).
    static let blTextAccent      = Color(hex: "#9B40D6")

    /// Calorie totals, flame metric numbers.
    static let blTextEnergy      = Color(hex: "#F97316")

    // MARK: - Borders

    static let blBorderSubtle    = Color(hex: "#E5E7EB")   // dividers
    static let blBorderInput     = Color(hex: "#D1D5DB")   // inactive inputs
    static let blBorderFocus     = Color(hex: "#7C3AED")   // focused inputs

    // MARK: - Status / Semantic

    /// BMI "Elevated" badge foreground.
    static let blStatusElevatedFg = Color(hex: "#7C3AED")
    /// BMI "Elevated" badge background.
    static let blStatusElevatedBg = Color(hex: "#EDE9FE")

    /// Burned calories indicator dot (green).
    static let blStatusBurned    = Color(hex: "#22C55E")   // green-500

    /// Consumed calories indicator dot (orange — same as blOrange).
    static let blStatusConsumed  = Color(hex: "#F97316")

    /// Streak / positive achievement.
    static let blSuccess         = Color(hex: "#10B981")   // emerald-500

    /// Calorie budget approaching limit.
    static let blWarning         = Color(hex: "#F59E0B")   // amber-500

    /// Over-budget / Stop action / allergy alert.
    static let blDanger          = Color(hex: "#EF4444")   // red-500

    // MARK: - Interactive (buttons)

    /// Primary CTA fill — "Done", "Connect Health", full-width pill buttons.
    static let blButtonPrimary   = Color(hex: "#8B3FD9")   // violet shifted warm

    /// Workout Pause button fill.
    static let blButtonPause     = Color(hex: "#F97316")   // brand orange

    /// Workout Stop button fill.
    static let blButtonStop      = Color(hex: "#EF4444")   // red-500

    /// Workout Start / neutral action button fill.
    static let blButtonNeutral   = Color(hex: "#4B5563")   // charcoal gray

    /// Divider / separator.
    static let blDivider         = Color(hex: "#E5E7EB")

    // MARK: - Hex initialiser

    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let r, g, b, a: UInt64
        switch hex.count {
        case 6:
            (r, g, b, a) = ((int >> 16) & 0xFF, (int >> 8) & 0xFF, int & 0xFF, 255)
        case 8:
            (r, g, b, a) = ((int >> 24) & 0xFF, (int >> 16) & 0xFF, (int >> 8) & 0xFF, int & 0xFF)
        default:
            (r, g, b, a) = (0, 0, 0, 255)
        }
        self.init(
            .sRGB,
            red:     Double(r) / 255,
            green:   Double(g) / 255,
            blue:    Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

// MARK: - Gradient Helpers

extension LinearGradient {

    /// Signature BurnLoop diagonal gradient — goal tiles, premium cards.
    static let blBrand = LinearGradient(
        colors: [.blGradientOrange, .blGradientMid, .blGradientPurple],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )

    /// Tagline gradient ("Scan it. Know it. Burn it.") — leading to trailing.
    static let blTagline = LinearGradient(
        colors: [.blOrange, .blGradientMid, .blViolet],
        startPoint: .leading,
        endPoint: .trailing
    )

    /// Subtle lavender-to-white page wash — workout complete, summary screens.
    static let blPageWash = LinearGradient(
        colors: [Color(hex: "#F5F0FF"), Color(hex: "#FFFFFF")],
        startPoint: .top,
        endPoint: .bottom
    )
}

// MARK: - Angular Gradient (Energy Ring)

extension AngularGradient {

    /// Home dashboard calorie progress ring — conic sweep, clockwise from right.
    /// Apply to the filled arc of the circular progress view.
    static let blEnergyRing = AngularGradient(
        colors: [.blRingOrange, .blRingCoral, .blRingPink, .blRingViolet],
        center: .center,
        startAngle: .degrees(0),
        endAngle: .degrees(360)
    )
}
