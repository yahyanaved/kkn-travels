import type { MetadataRoute } from "next";
import { activeServiceSlugs } from "@/content";
import { localePath, locales } from "@/i18n/config";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  ...activeServiceSlugs.map((slug) => ({ path: `/services/${slug}`, priority: 0.8 })),
  { path: "/contact", priority: 0.7 },
  { path: "/about", priority: 0.5 },
  { path: "/privacy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
