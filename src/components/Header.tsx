import Link from "next/link";
import { site, whatsappLink } from "@/config/site";
import { getDictionary, getServices, servicePath, type ServiceSlug } from "@/content";
import { localePath, type Locale } from "@/i18n/config";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";

/** The services named in the navigation row, in order. Hidden services drop out on their own. */
const navSlugs: ServiceSlug[] = [
  "uae-visa-services",
  "international-visa-assistance",
  "flight-tickets",
  "document-attestation",
  "typing-services",
  "holidays-and-umrah",
];

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const services = getServices(locale);
  const navItems = navSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [{ href: localePath(locale, servicePath(slug)), label: service.nav }] : [];
  });
  const secondary = [
    { href: localePath(locale, "/services"), label: t.nav.services },
    { href: localePath(locale, "/about"), label: t.nav.about },
    { href: localePath(locale, "/contact"), label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper">
      <div className="shell relative flex h-(--header-height) items-center gap-3 sm:gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href={localePath(locale)}
          className="me-auto font-display text-[clamp(1.3125rem,6.6vw,1.75rem)] leading-none font-semibold tracking-[-0.02em] whitespace-nowrap text-burgundy lg:me-0 lg:text-[2.0625rem] rtl:text-[clamp(0.9375rem,4.9vw,1.3125rem)] rtl:lg:text-[1.875rem]"
        >
          {locale === "ar" ? site.nameAr : site.name}
        </Link>

        <nav aria-label={t.nav.primary} className="hidden lg:block">
          <ul className="flex gap-9 font-display text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors duration-200 hover:text-burgundy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 lg:justify-self-end lg:gap-7">
          <LanguageSwitch
            locale={locale}
            label={t.nav.switchTo}
            className="font-display text-sm font-medium transition-colors duration-200 hover:text-burgundy max-lg:hidden"
          />
          <a href={whatsappLink()} className="pill pill-small max-sm:px-3.5" target="_blank" rel="noopener">
            <span className="sm:hidden">{t.nav.whatsappShort}</span>
            <span className="max-sm:hidden">{t.nav.whatsapp}</span>
          </a>
          <MobileMenu
            items={navItems}
            secondary={secondary}
            labels={{ menu: t.nav.menu, close: t.nav.close, primary: t.nav.primary }}
          >
            <LanguageSwitch locale={locale} label={t.nav.switchTo} className="text-link font-display" />
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
