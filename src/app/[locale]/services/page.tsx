import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chevron } from "@/components/Chevron";
import { EnquiryBand } from "@/components/EnquiryBand";
import { getDictionary, getServices, servicePath } from "@/content";
import { destinations, serviceDestination } from "@/content/destinations";
import { hasLocale, localePath } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/services",
    title: t.meta.servicesTitle,
    description: t.meta.servicesDescription,
  });
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  const services = getServices(locale);

  return (
    <>
      <section className="shell pt-10 pb-14 lg:pt-14">
        <Breadcrumbs
          locale={locale}
          label={t.common.breadcrumb}
          trail={[
            { name: t.common.breadcrumbHome, path: "/" },
            { name: t.common.breadcrumbServices, path: "/services" },
          ]}
        />
        <h1 className="headline mt-8 max-w-[14em]">{t.services.heading}</h1>
        <p className="lede mt-5 max-w-[52ch]">{t.services.intro}</p>
      </section>

      <section className="band-paper pb-20">
        <ul className="shell">
          {services.map((service) => {
            const id = serviceDestination[service.slug];
            return (
              <li key={service.slug} className="border-b border-rule">
                <Link
                  href={localePath(locale, servicePath(service.slug))}
                  className="svc grid items-center gap-x-[5%] gap-y-5 !py-8 sm:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,4fr)]"
                >
                  <span className="photo block aspect-[3/2]">
                    <Image
                      src={destinations[id].src}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 24vw, 100vw"
                    />
                  </span>
                  <span className="grid gap-2">
                    <span className="svc-title !text-[1.75rem] !leading-tight">{service.name}</span>
                    <span className="max-w-[46ch] text-ink-soft">{service.summary}</span>
                  </span>
                  <span className="text-[0.9375rem] text-ink-soft max-lg:hidden">
                    {t.services.whoFor}: {service.whoFor}
                  </span>
                  <Chevron className="svc-chevron !top-1/2" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <EnquiryBand locale={locale} heading={t.enquiry.heading} intro={t.services.askIntro} />
    </>
  );
}
