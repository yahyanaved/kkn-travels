import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnquiryBand } from "@/components/EnquiryBand";
import { FaqSection } from "@/components/FaqSection";
import { PhotoBand } from "@/components/PhotoBand";
import { getDictionary } from "@/content";
import { hasLocale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const t = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/contact",
    title: t.meta.contactTitle,
    description: t.meta.contactDescription,
  });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <EnquiryBand locale={locale} heading={t.contact.heading} intro={t.contact.intro} as="h1" />
      <PhotoBand locale={locale} ids={["dubai", "dubai-creek", "dubai-museum"]} className="md:!pt-20" />

      <FaqSection locale={locale} heading={t.home.faqHeading} items={t.home.faqs} />
    </>
  );
}
