import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Announcement } from "@/components/Announcement";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/config/site";
import { getDictionary } from "@/content";
import { direction, hasLocale, locales } from "@/i18n/config";
import { businessJsonLd, websiteJsonLd } from "@/lib/seo";
import { fontVariables } from "../fonts";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.homeTitle, template: t.meta.titleTemplate },
    description: t.meta.homeDescription,
    applicationName: t.meta.siteTitle,
    formatDetection: { telephone: false },
    robots: site.allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html lang={locale} dir={direction[locale]} className={fontVariables}>
      <body className="flex min-h-dvh flex-col bg-ground text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          {t.nav.skip}
        </a>
        <Announcement locale={locale} />
        <Header locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <JsonLd data={[businessJsonLd(locale), websiteJsonLd(locale)]} />
      </body>
    </html>
  );
}
