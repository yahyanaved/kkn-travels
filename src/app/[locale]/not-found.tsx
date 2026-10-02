import { NotFoundView } from "@/components/NotFoundView";
import { getDictionary } from "@/content";
import { locales } from "@/i18n/config";

export default function NotFound() {
  const copy = Object.fromEntries(locales.map((locale) => [locale, getDictionary(locale).notFound]));
  return <NotFoundView copy={copy} />;
}
