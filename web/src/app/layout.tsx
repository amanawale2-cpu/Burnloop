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
    default: "BurnLoop — The AI health coach that knows your condition",
    template: "%s · BurnLoop",
  },
  description:
    "BurnLoop scans your meals with AI and flags what's unsafe for your specific health condition — diabetes, kidney disease, heart health, and more — before you eat.",
  openGraph: {
    title: "BurnLoop — The AI health coach that knows your condition",
    description:
      "Snap a photo of any meal and get an instant, condition-aware health alert. Free to start.",
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
