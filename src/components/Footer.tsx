import Link from "next/link";
import { site, whatsappLink } from "@/config/site";
import { getDictionary, getServices, servicePath } from "@/content";
import { localePath, type Locale } from "@/i18n/config";
import { LanguageSwitch } from "./LanguageSwitch";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const services = getServices(locale);
  const linkClass = "transition-colors duration-200 hover:text-burgundy";

  return (
    <footer className="band-paper border-t border-rule">
      <div className="shell grid gap-x-10 gap-y-12 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,5fr)_minmax(0,3fr)_minmax(0,2fr)_minmax(0,3fr)]">
        <div>
          <Link href={localePath(locale)} className="font-display text-[2.0625rem] leading-none font-semibold tracking-[-0.02em] text-burgundy rtl:text-[1.875rem]">
            {locale === "ar" ? site.nameAr : site.name}
          </Link>
          <p className="mt-5 max-w-[30ch] text-ink-soft">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.servicesHeading}>
          <h2 className="field-label !text-ink-soft">{t.footer.servicesHeading}</h2>
          <ul className="mt-4 grid gap-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={localePath(locale, servicePath(service.slug))} className={linkClass}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.footer.companyHeading}>
          <h2 className="field-label !text-ink-soft">{t.footer.companyHeading}</h2>
          <ul className="mt-4 grid gap-2.5">
            <li>
              <Link href={localePath(locale, "/services")} className={linkClass}>
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/about")} className={linkClass}>
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/contact")} className={linkClass}>
                {t.nav.contact}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/privacy")} className={linkClass}>
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <LanguageSwitch locale={locale} label={t.nav.switchTo} className={linkClass} />
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="field-label !text-ink-soft">{t.footer.contactHeading}</h2>
          <ul className="mt-4 grid gap-2.5">
            <li>
              <a href={whatsappLink()} className={linkClass} target="_blank" rel="noopener">
                {t.contact.whatsapp} <span dir="ltr">{site.mobile.display}</span>
              </a>
            </li>
            <li>
              <a href={site.phone.href} className={linkClass}>
                {t.nav.call} <span dir="ltr">{site.phone.display}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                {site.email}
              </a>
            </li>
            <li className="text-ink-soft">
              {site.address[locale].line1}, {site.address[locale].line2}
            </li>
          </ul>
        </div>
      </div>

      <div className="shell">
        <div className="flex flex-wrap justify-between gap-x-10 gap-y-3 border-t border-rule py-6 text-[0.875rem] text-ink-soft">
          <p>
            © {new Date().getFullYear()} {locale === "ar" ? site.nameAr : site.name}. {t.footer.rights}
          </p>
          <p className="max-w-[62ch]">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
