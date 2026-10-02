import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryBand } from "@/components/EnquiryBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PhotoBand } from "@/components/PhotoBand";
import { ServiceIndex } from "@/components/ServiceIndex";
import { Steps } from "@/components/Steps";
import { site, whatsappLink } from "@/config/site";
import { activeServiceSlugs, getDictionary, getService, servicePath, type ServiceSlug } from "@/content";
import { serviceDestination } from "@/content/destinations";
import type { DestinationId } from "@/content/types";
import { hasLocale } from "@/i18n/config";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

/** The second photograph beside each service's own. */
const companion: Record<ServiceSlug, DestinationId> = {
  "uae-visa-services": "dubai-museum",
  "international-visa-assistance": "paris",
  "flight-tickets": "london",
  "document-attestation": "dubai",
  "typing-services": "dubai-creek",
  "holidays-and-umrah": "makkah",
};

/** Which enquiry option each service page preselects (index into enquiry.needOptions). */
const needIndex: Record<ServiceSlug, number> = {
  "uae-visa-services": 0,
  "international-visa-assistance": 3,
  "flight-tickets": 4,
  "document-attestation": 7,
  "typing-services": 5,
  "holidays-and-umrah": 6,
};

export function generateStaticParams() {
  return activeServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const service = getService(locale, slug);
  if (!service) return {};
  return pageMetadata({
    locale,
    path: servicePath(service.slug),
    title: service.metaTitle,
    description: service.metaDescription,
  });
}

export default async function ServicePage({ params }: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const service = getService(locale, slug);
  if (!service) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <PhotoBand locale={locale} ids={[serviceDestination[service.slug], companion[service.slug]]} lead />

      <section className="shell pt-8 pb-16 lg:pb-20">
        <Breadcrumbs
          locale={locale}
          label={t.common.breadcrumb}
          trail={[
            { name: t.common.breadcrumbHome, path: "/" },
            { name: t.common.breadcrumbServices, path: "/services" },
            { name: service.name, path: servicePath(service.slug) },
          ]}
        />
        <div className="mt-8 grid gap-x-[8%] gap-y-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <h1 className="headline max-w-[14em]">{service.title}</h1>
            <p className="mt-6 text-[0.9375rem] text-ink-soft">
              {t.services.whoFor}: {service.whoFor}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-[2.6875rem] gap-y-4">
              <a
                href={whatsappLink(`${t.common.serviceEnquiry} ${service.name}`)}
                className="pill"
                target="_blank"
                rel="noopener"
              >
                {t.common.askOnWhatsApp}
              </a>
              <a href={site.phone.href} className="text-link">
                {t.hero.call} <span dir="ltr">{site.phone.display}</span>
              </a>
            </div>
          </div>
          <div className="grid content-start gap-5 lg:pt-3">
            {service.intro.map((paragraph) => (
              <p key={paragraph} className="prose-measure">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="band-paper section" aria-labelledby="items-title">
        <div className="shell">
          <h2 id="items-title" className="section-title mb-10">
            {service.itemsHeading}
          </h2>
          <dl className="rows">
            {service.items.map((item) => (
              <div key={item.name} className="grid gap-x-[8%] gap-y-2 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                <dt className="subhead">{item.name}</dt>
                <dd className="prose-measure text-ink-soft">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="bring-title">
        <div className="shell grid gap-x-[8%] gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 id="bring-title" className="section-title">
              {service.bringHeading}
            </h2>
            <p className="mt-5 max-w-[46ch] text-ink-soft">{service.bringNote}</p>
          </div>
          <ul className="checklist">
            {service.bring.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-paper section" aria-labelledby="steps-title">
        <div className="shell">
          <h2 id="steps-title" className="section-title mb-12">
            {t.services.stepsHeading}
          </h2>
          <Steps steps={service.steps} />
        </div>
      </section>

      <FaqSection locale={locale} heading={t.services.faqHeading} items={service.faqs} />

      <EnquiryBand
        locale={locale}
        heading={t.services.askHeading}
        intro={t.services.askIntro}
        defaultNeed={t.enquiry.needOptions[needIndex[service.slug]]}
      />

      <section className="band-paper section" aria-labelledby="other-title">
        <div className="shell">
          <h2 id="other-title" className="section-title mb-6">
            {t.services.otherHeading}
          </h2>
          <ServiceIndex locale={locale} exclude={service.slug} label={t.services.otherHeading} />
        </div>
      </section>

      <JsonLd data={serviceJsonLd(locale, service)} />
    </>
  );
}
