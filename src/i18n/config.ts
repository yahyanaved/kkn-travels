export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const direction: Record<Locale, "ltr" | "rtl"> = { en: "ltr", ar: "rtl" };

/** BCP 47 tags used for hreflang and Open Graph. */
export const languageTag: Record<Locale, string> = { en: "en-AE", ar: "ar-AE" };

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "ar" : "en");

/** Prefixes an internal path with the locale: ("ar", "/contact") -> "/ar/contact". */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
