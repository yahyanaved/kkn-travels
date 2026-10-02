import type { Locale } from "@/i18n/config";
import { ar } from "./ar";
import { en } from "./en";
import { servicesAr } from "./services.ar";
import { servicesEn } from "./services.en";
import { hiddenServices, serviceSlugs, type Dictionary, type Service, type ServiceSlug } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, ar };
const services: Record<Locale, Service[]> = { en: servicesEn, ar: servicesAr };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

/** The services on offer, in display order. Hidden services are left out. */
export const getServices = (locale: Locale): Service[] =>
  serviceSlugs
    .filter((slug) => !hiddenServices.includes(slug))
    .flatMap((slug) => services[locale].filter((service) => service.slug === slug));

export const getService = (locale: Locale, slug: string): Service | undefined =>
  getServices(locale).find((service) => service.slug === slug);

/** Slugs of the services on offer, for static params and the sitemap. */
export const activeServiceSlugs: ServiceSlug[] = serviceSlugs.filter((slug) => !hiddenServices.includes(slug));

export const servicePath = (slug: ServiceSlug): string => `/services/${slug}`;

export type { Dictionary, Faq, Service, ServiceSlug } from "./types";
export { hiddenServices, serviceSlugs } from "./types";
