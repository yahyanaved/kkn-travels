import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BringTabs } from "@/components/BringTabs";
import { EnquiryBand } from "@/components/EnquiryBand";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { PhotoBand } from "@/components/PhotoBand";
import { Steps } from "@/components/Steps";
import { VisaShowcase } from "@/components/VisaShowcase";
import { getDictionary, getServices, servicePath } from "@/content";
import { destinations } from "@/content/destinations";
import { hasLocale, localePath } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({ locale, path: "/", title: t.meta.homeTitle, description: t.meta.homeDescription });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  const services = getServices(locale);

  const bringTabs = services.map((service) => ({
    slug: service.slug,
    label: service.label,
    heading: service.bringHeading,
    items: service.bring,
    note: service.bringNote,
    href: localePath(locale, servicePath(service.slug)),
  }));

  return (
    <>
      <Hero locale={locale} />

      <VisaShowcase locale={locale} />

      <section className="band-paper section" aria-labelledby="bring-title">
        <div className="shell">
          <h2 id="bring-title" className="section-title">
            {t.home.bringHeading}
          </h2>
          <p className="mt-3 mb-12 max-w-[52ch] text-ink-soft">{t.home.bringIntro}</p>
          <BringTabs tabs={bringTabs} label={t.home.bringHeading} cta={t.home.bringCta} />
        </div>
      </section>

      <section className="section" aria-labelledby="steps-title">
        <div className="shell">
          <h2 id="steps-title" className="section-title">
            {t.home.stepsHeading}
          </h2>
          <p className="mt-3 mb-12 max-w-[52ch] text-ink-soft">{t.home.stepsIntro}</p>
          <Steps steps={t.home.steps} />
          <PhotoBand
            locale={locale}
            ids={["london", "istanbul", "maldives"]}
            framed={false}
            className="mt-16 lg:mt-20"
          />
        </div>
      </section>

      <section className="band-paper section" aria-labelledby="audiences-title">
        <div className="shell grid items-start gap-x-[8%] gap-y-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <figure className="photo photo-captioned aspect-[4/3] max-lg:order-last lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:aspect-[4/5]">
            <Image
              src={destinations.santorini.src}
              alt={t.destinations.santorini.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <figcaption className="strip-caption">
              <span className="strip-name">{t.destinations.santorini.name}</span>
            </figcaption>
          </figure>
          <div>
            <h2 id="audiences-title" className="section-title mb-10">
              {t.home.audiencesHeading}
            </h2>
            <ul className="rows">
              {t.home.audiences.map((audience) => (
                <li key={audience.name}>
                  <h3 className="subhead">{audience.name}</h3>
                  <p className="mt-2 max-w-[52ch] text-ink-soft">{audience.detail}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                    {audience.slugs.map((slug) => {
                      const service = services.find((item) => item.slug === slug)!;
                      return (
                        <li key={slug}>
                          <Link href={localePath(locale, servicePath(slug))} className="text-link">
                            {service.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection locale={locale} heading={t.home.faqHeading} items={t.home.faqs} />

      <EnquiryBand locale={locale} heading={t.enquiry.heading} intro={t.home.visitIntro} />
    </>
  );
}
