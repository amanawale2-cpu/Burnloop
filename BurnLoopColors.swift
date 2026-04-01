import SwiftUI

// MARK: - BurnLoop Design System — Color Palette
//
// Brand Identity: AI-powered fitness coach
// Personality: Energetic, trustworthy, medically aware
//
// Primary brand axis: Deep purple (authority + calm) ↔ Orange (energy + heat)
// Interactive axis:   Violet-magenta (tappable elements, links, CTAs)
// Semantic axis:      Standard status colors (success, warning, danger)

extension Color {

    // MARK: Brand Core

    /// Deep indigo used for section headers, banners, and BurnLoop snapshot cards.
    /// Communicates authority and trust.
    static let blDeepPurple     = Color(hex: "#3B1D8A")

    /// Mid-range violet used for rings, progress indicators, and primary buttons.
    static let blViolet         = Color(hex: "#7C3AED")

    /// Bright violet-magenta for interactive text: Skip / Save / picker labels.
    /// This is the "tappable purple" users learn to tap.
    static let blAccentViolet   = Color(hex: "#9B40D6")

    /// Energetic orange for the flame icon, calorie numbers, and heat indicators.
    /// The "energy" color — always used on content that represents effort or output.
    static let blOrange         = Color(hex: "#F97316")

    // MARK: Gradients
    //
    // Usage:  LinearGradient(colors: [.blGradientOrange, .blGradientPurple],
    //                        startPoint: .topLeading, endPoint: .bottomTrailing)
    //
    // Applied on: selected goal tiles ("Stay Healthy"), premium upsell cards.

    static let blGradientOrange = Color(hex: "#F97316")   // warm start
    static let blGradientMid    = Color(hex: "#C026D3")   // hot-pink bridge
    static let blGradientPurple = Color(hex: "#6D28D9")   // deep end

    // MARK: Backgrounds

    /// Main app background — near-white with a barely-there lavender tint.
    /// Keeps screens feeling light while reinforcing the purple brand.
    static let blBgPrimary      = Color(hex: "#FAFAF9")   // off-white (warm neutral)

    /// Secondary background for cards, input rows, and list containers.
    static let blBgCard         = Color(hex: "#F3F4F6")   // cool light gray

    /// Subtle lavender wash used behind goal grids and profile sections.
    static let blBgLavender     = Color(hex: "#F0EDFB")   // very light purple

    /// Dark surface for the BurnLoop snapshot card and deep header banners.
    static let blBgDark         = Color(hex: "#3B1D8A")   // same as blDeepPurple

    // MARK: Text

    /// Primary body and heading text.
    static let blTextPrimary    = Color(hex: "#111827")

    /// Secondary / caption text (labels like "years", "lb", picker subtitles).
    static let blTextSecondary  = Color(hex: "#6B7280")

    /// Text on dark (deep purple) surfaces — always white.
    static let blTextOnDark     = Color(hex: "#FFFFFF")

    /// Muted text on dark surfaces (subtitles inside the BurnLoop snapshot).
    static let blTextOnDarkMuted = Color(hex: "#C4B5FD")  // light violet

    // MARK: Status / Semantic

    /// BMI "Elevated" badge background.
    static let blBadgeElevatedBg   = Color(hex: "#EDE9FE")  // lavender-100
    /// BMI "Elevated" badge foreground.
    static let blBadgeElevatedFg   = Color(hex: "#7C3AED")  // violet

    /// Positive / streak / success state.
    static let blSuccess        = Color(hex: "#10B981")   // emerald-500

    /// Warning state (calorie budget getting close).
    static let blWarning        = Color(hex: "#F59E0B")   // amber-500

    /// Danger / over-budget / allergy alert.
    static let blDanger         = Color(hex: "#EF4444")   // red-500

    // MARK: Interactive

    /// Primary CTA button fill — the "Done" / "Save" purple pill button.
    static let blButtonPrimary  = Color(hex: "#8B3FD9")   // violet-600 shifted warm

    /// Destructive or deselected button fill.
    static let blButtonNeutral  = Color(hex: "#E5E7EB")   // gray-200

    /// Separator / divider line.
    static let blDivider        = Color(hex: "#E5E7EB")   // gray-200

    // MARK: Hex initialiser (internal)

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
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue:  Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

// MARK: - Gradient Helpers

extension LinearGradient {

    /// Signature BurnLoop gradient — used on selected goal tiles and premium cards.
    static let blBrand = LinearGradient(
        colors: [.blGradientOrange, .blGradientMid, .blGradientPurple],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )

    /// Subtle lavender page-wash gradient for modal / summary screens (e.g. workout done).
    static let blPageWash = LinearGradient(
        colors: [Color(hex: "#F5F0FF"), Color(hex: "#FFFFFF")],
        startPoint: .top,
        endPoint: .bottom
    )
}
