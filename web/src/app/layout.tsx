import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://burnloopai.com"),
  title: {
    default: "BurnLoop — Personalized Meal Guidance for Your Health Condition",
    template: "%s · BurnLoop",
  },
  description:
    "Know what to eat and what to avoid with personalized meal guidance based on your health condition — diabetes, cholesterol, heart health, and more. Free to start.",
  openGraph: {
    title: "BurnLoop — Personalized Meal Guidance for Your Health Condition",
    description:
      "Know what to eat and what to avoid with personalized guidance based on your health condition. Free to start.",
    siteName: "BurnLoop",
    type: "website",
  },
  icons: {
    icon: "/logo/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
    >
      <body className="bg-background font-body text-foreground">{children}</body>
    </html>
  );
}
