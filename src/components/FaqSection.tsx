import { whatsappLink } from "@/config/site";
import { getDictionary, type Faq as FaqItem } from "@/content";
import type { Locale } from "@/i18n/config";
import { faqJsonLd } from "@/lib/seo";
import { Faq } from "./Faq";
import { JsonLd } from "./JsonLd";

/** Questions on the right; on the left the heading, a line of help and a way to ask something else. */
export function FaqSection({ locale, heading, items }: { locale: Locale; heading: string; items: FaqItem[] }) {
  const t = getDictionary(locale);

  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="shell grid gap-x-[8%] gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <h2 id="faq-title" className="section-title">
            {heading}
          </h2>
          <p className="mt-4 max-w-[34ch] text-ink-soft">{t.home.faqIntro}</p>
          <a href={whatsappLink()} className="text-link mt-6 inline-block" target="_blank" rel="noopener">
            {t.common.askOnWhatsApp}
          </a>
        </div>
        <Faq items={items} />
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  );
}
