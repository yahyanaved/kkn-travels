import { site, whatsappLink } from "@/config/site";
import { getDictionary } from "@/content";
import type { Locale } from "@/i18n/config";

/** Address, hours and ways to reach the office, as rows on hairlines. */
export function OfficeDetails({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const address = site.address[locale];
  const hours = site.hours[locale];

  return (
    <dl className="rows">
      <div className="grid gap-1 sm:grid-cols-[9rem_1fr]">
        <dt className="field-label">{t.contact.whatsapp}</dt>
        <dd>
          <a href={whatsappLink()} className="text-link" target="_blank" rel="noopener" dir="ltr">
            {site.mobile.display}
          </a>
        </dd>
      </div>
      <div className="grid gap-1 sm:grid-cols-[9rem_1fr]">
        <dt className="field-label">{t.contact.phone}</dt>
        <dd>
          <a href={site.phone.href} className="text-link" dir="ltr">
            {site.phone.display}
          </a>
        </dd>
      </div>
      <div className="grid gap-1 sm:grid-cols-[9rem_1fr]">
        <dt className="field-label">{t.contact.email}</dt>
        <dd>
          <a href={`mailto:${site.email}`} className="text-link break-all">
            {site.email}
          </a>
        </dd>
      </div>
      <div className="grid gap-1 sm:grid-cols-[9rem_1fr]">
        <dt className="field-label">{t.contact.address}</dt>
        <dd>
          <address className="not-italic">
            {address.line1}
            <br />
            {address.line2}
          </address>
          <a href={site.address.mapUrl} className="text-link mt-2 inline-block" target="_blank" rel="noopener">
            {t.contact.directions}
          </a>
        </dd>
      </div>
      <div className="grid gap-1 sm:grid-cols-[9rem_1fr]">
        <dt className="field-label">{t.contact.hours}</dt>
        <dd>
          {site.confirmed.hours ? (
            <ul className="grid gap-1">
              {hours.map((slot) => (
                <li key={slot.days} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6">
                  <span>{slot.days}</span>
                  <span>{slot.time}</span>
                </li>
              ))}
            </ul>
          ) : (
            t.contact.hoursPending
          )}
        </dd>
      </div>
    </dl>
  );
}
