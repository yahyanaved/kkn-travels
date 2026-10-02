import { site, whatsappLink } from "@/config/site";
import { getDictionary } from "@/content";
import type { Locale } from "@/i18n/config";
import { DestinationStrip } from "./DestinationStrip";
import { ServiceIndex } from "./ServiceIndex";

/** The first screen: destinations, one sentence about the desk, and every service. */
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section aria-labelledby="hero-title">
      <DestinationStrip locale={locale} />

      <div className="shell grid gap-x-12 gap-y-10 pt-8 pb-14 lg:grid-cols-[minmax(0,6fr)_minmax(0,7fr)] lg:pt-[1.9375rem] lg:pb-16">
        <div className="lg:pt-[0.8125rem]">
          <h1 id="hero-title" className="headline max-w-[9.8em]">
            {t.hero.headline}
          </h1>
          <p className="lede mt-5 max-w-[32.5rem]">{t.hero.lede}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-[2.6875rem] gap-y-4">
            <a href={whatsappLink()} className="pill" target="_blank" rel="noopener">
              {t.common.startOnWhatsApp}
            </a>
            <a href={site.phone.href} className="text-link">
              {t.hero.call} <span dir="ltr">{site.phone.display}</span>
            </a>
          </div>
        </div>

        <ServiceIndex locale={locale} label={t.footer.servicesHeading} />
      </div>
    </section>
  );
}
