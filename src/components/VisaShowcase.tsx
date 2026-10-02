import Link from "next/link";
import { getDictionary, getService, servicePath } from "@/content";
import { localePath, type Locale } from "@/i18n/config";
import { Chevron } from "./Chevron";
import { Facts } from "./Facts";

/**
 * The home page's two visa sections: the countries handled for travel abroad,
 * with what every application includes, then the Dubai and UAE visas.
 */
export function VisaShowcase({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const abroad = getService(locale, "international-visa-assistance");
  const uae = getService(locale, "uae-visa-services");
  if (!abroad || !uae) return null;

  const abroadPath = localePath(locale, servicePath(abroad.slug));
  const uaePath = localePath(locale, servicePath(uae.slug));
  // The home page shows the visas people ask for by name; the rest are on the UAE visas page.
  const uaeItems = uae.items.filter((item) => item.id);

  return (
    <>
      <section className="band-paper section" aria-labelledby="visas-title">
        <div className="shell">
          <div className="grid gap-x-[8%] gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
            <h2 id="visas-title" className="section-title max-w-[16em]">
              {t.home.visasHeading}
            </h2>
            <p className="max-w-[46ch] text-ink-soft">{t.home.visasIntro}</p>
          </div>

          <ul className="country-grid mt-12">
            {abroad.items.map((item) => (
              <li key={item.name}>
                <Link href={`${abroadPath}${item.id ? `#${item.id}` : ""}`} className="country">
                  <span className="country-name">{item.name}</span>
                  <span className="country-detail">{item.detail}</span>
                  <Chevron className="row-chevron" />
                </Link>
              </li>
            ))}
          </ul>

          {abroad.highlights ? (
            <div className="mt-16 lg:mt-20">
              <h3 className="subhead-lg mb-8">{abroad.highlightsHeading}</h3>
              <Facts items={abroad.highlights} />
            </div>
          ) : null}

          <Link href={abroadPath} className="pill mt-12">
            {t.home.visasCta}
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="uae-title">
        <div className="shell grid gap-x-[8%] gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 id="uae-title" className="section-title">
              {t.home.uaeHeading}
            </h2>
            <p className="mt-4 max-w-[40ch] text-ink-soft">{t.home.uaeIntro}</p>
            <Link href={uaePath} className="text-link mt-6 inline-block">
              {t.home.uaeCta}
            </Link>
          </div>
          <ul className="rows">
            {uaeItems.map((item) => (
              <li key={item.name}>
                <Link href={`${uaePath}#${item.id}`} className="row-link">
                  <span className="subhead">
                    {item.name}
                    {item.tag ? <span className="tag">{item.tag}</span> : null}
                  </span>
                  <span className="max-w-[58ch] text-ink-soft">{item.detail}</span>
                  <Chevron className="row-chevron" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
