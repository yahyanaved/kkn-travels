import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryBand } from "@/components/EnquiryBand";
import { PhotoBand } from "@/components/PhotoBand";
import { getDictionary } from "@/content";
import { hasLocale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({ locale, path: "/about", title: t.meta.aboutTitle, description: t.meta.aboutDescription });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <PhotoBand locale={locale} ids={["dubai-creek", "dubai-museum", "dubai"]} lead />

      <section className="shell pt-8 pb-16 lg:pb-20">
        <Breadcrumbs
          locale={locale}
          label={t.common.breadcrumb}
          trail={[
            { name: t.common.breadcrumbHome, path: "/" },
            { name: t.nav.about, path: "/about" },
          ]}
        />
        <div className="mt-8 grid gap-x-[8%] gap-y-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <h1 className="headline max-w-[12em]">{t.about.heading}</h1>
          <div className="grid content-start gap-5 lg:pt-3">
            {t.about.intro.map((paragraph) => (
              <p key={paragraph} className="prose-measure">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="band-paper section" aria-labelledby="principles-title">
        <div className="shell">
          <h2 id="principles-title" className="section-title mb-10">
            {t.about.principlesHeading}
          </h2>
          <dl className="rows">
            {t.about.principles.map((principle) => (
              <div key={principle.title} className="grid gap-x-[8%] gap-y-2 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                <dt className="subhead">{principle.title}</dt>
                <dd className="prose-measure text-ink-soft">{principle.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="scope-title">
        <div className="shell grid gap-x-[8%] gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <h2 id="scope-title" className="section-title">
            {t.about.scopeHeading}
          </h2>
          <ul className="checklist">
            {t.about.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <EnquiryBand locale={locale} heading={t.enquiry.heading} intro={t.home.visitIntro} />
    </>
  );
}
