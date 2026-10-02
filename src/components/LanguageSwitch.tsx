"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languageTag, otherLocale, type Locale } from "@/i18n/config";

/** Links to the same page in the other language. */
export function LanguageSwitch({ locale, label, className }: { locale: Locale; label: string; className?: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  const target = otherLocale(locale);
  const rest = pathname.split("/").slice(2).join("/");
  const href = `/${target}${rest ? `/${rest}` : ""}`;

  return (
    <Link href={href} hrefLang={languageTag[target]} lang={target} className={className}>
      {label}
    </Link>
  );
}
