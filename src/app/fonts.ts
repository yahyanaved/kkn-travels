import { Alexandria, Noto_Sans_Arabic, Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";

export const display = Wix_Madefor_Display({
  subsets: ["latin"],
  variable: "--font-wix-display",
  display: "swap",
});

export const text = Wix_Madefor_Text({
  subsets: ["latin"],
  variable: "--font-wix-text",
  display: "swap",
});

// The Arabic faces are only needed on the Arabic edition, so they are not preloaded.
export const arabicDisplay = Alexandria({
  subsets: ["arabic"],
  variable: "--font-alexandria",
  display: "swap",
  preload: false,
});

export const arabicText = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  preload: false,
});

export const fontVariables = [display, text, arabicDisplay, arabicText].map((font) => font.variable).join(" ");
