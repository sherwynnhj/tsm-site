import type { Metadata } from "next";
import { Fraunces, DM_Sans, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

// Display — soft, rounded, warm high-contrast serif (MATON direction)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Body / UI — clean, warm humanist sans
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TSMFood — Singapore's Leading Asian Dessert Manufacturer",
  description:
    "Tan Soon Mui Food Industries — heritage, natural, healthier. Singapore's biggest grass jelly (Chin Chow / 仙草) producer since 1974.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${notoSansSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Concept-piece disclaimer — shown site-wide */}
        <div className="bg-forest text-cream/80 text-center px-4 py-1.5 font-sans text-[11px] sm:text-xs tracking-wide">
          Concept redesign — an unofficial design study, not affiliated with Tan Soon Mui Food Industries. No real products or orders.
        </div>
        {children}
      </body>
    </html>
  );
}
