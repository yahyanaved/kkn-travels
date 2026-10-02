import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getDictionary } from "@/content";
import { hasLocale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/privacy",
    title: t.meta.privacyTitle,
    description: t.meta.privacyDescription,
  });
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <section className="shell pt-10 pb-24 lg:pt-14">
      <Breadcrumbs
        locale={locale}
        label={t.common.breadcrumb}
        trail={[
          { name: t.common.breadcrumbHome, path: "/" },
          { name: t.footer.privacy, path: "/privacy" },
        ]}
      />
      <h1 className="headline mt-8">{t.privacy.heading}</h1>
      <p className="mt-4 text-[0.9375rem] text-ink-soft">{t.privacy.updated}</p>

      <div className="rows mt-12 max-w-[60rem]">
        {t.privacy.sections.map((section) => (
          <div key={section.title} className="grid gap-x-[8%] gap-y-3 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
            <h2 className="subhead">{section.title}</h2>
            <div className="grid gap-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="prose-measure">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
