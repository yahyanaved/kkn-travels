import type { Metadata } from "next";
import { site } from "@/config/site";
import type { Faq, Service } from "@/content";
import { defaultLocale, languageTag, localePath, locales, type Locale } from "@/i18n/config";

export const absoluteUrl = (path: string): string => `${site.url}${path}`;

/** hreflang map for a path that exists in every locale. */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[languageTag[locale]] = absoluteUrl(localePath(locale, path));
  languages["x-default"] = absoluteUrl(localePath(defaultLocale, path));
  return languages;
}

type PageMeta = { locale: Locale; path: string; title: string; description: string };

/** Title, description, canonical, hreflang and social cards for one page. */
export function pageMetadata({ locale, path, title, description }: PageMeta): Metadata {
  const url = absoluteUrl(localePath(locale, path));
  // A page that sets its own Open Graph block has to name the share image again.
  const image = { url: absoluteUrl(localePath(locale, "/opengraph-image")), width: 1200, height: 630, alt: title };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: locale === "ar" ? site.nameAr : site.name,
      locale: languageTag[locale].replace("-", "_"),
      alternateLocale: locales.filter((l) => l !== locale).map((l) => languageTag[l].replace("-", "_")),
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

const businessId = `${site.url}/#business`;

/** The office as a schema.org TravelAgency, shared by every page. */
export function businessJsonLd(locale: Locale) {
  const address = site.address[locale];
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": businessId,
    name: locale === "ar" ? site.nameAr : site.name,
    alternateName: locale === "ar" ? site.name : site.nameAr,
    url: absoluteUrl(localePath(locale)),
    telephone: site.phone.display,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    hasMap: site.address.mapUrl,
    ...(site.confirmed.coordinates ? { geo: { "@type": "GeoCoordinates", ...site.address.geo } } : {}),
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    ...(site.confirmed.hours
      ? {
          openingHoursSpecification: site.hours.schema.map((slot) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: slot.days,
            opens: slot.opens,
            closes: slot.closes,
          })),
        }
      : {}),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.mobile.display,
    },
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: locale === "ar" ? site.nameAr : site.name,
    inLanguage: languageTag[locale],
    publisher: { "@id": businessId },
  };
}

export function serviceJsonLd(locale: Locale, service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    serviceType: service.name,
    url: absoluteUrl(localePath(locale, `/services/${service.slug}`)),
    provider: { "@id": businessId },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.itemsHeading,
      itemListElement: service.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.name, description: item.detail },
      })),
    },
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbJsonLd(locale: Locale, trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(localePath(locale, crumb.path)),
    })),
  };
}
