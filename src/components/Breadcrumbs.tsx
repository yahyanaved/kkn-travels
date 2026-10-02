import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

type Crumb = { name: string; path: string };

/** A visible trail plus the matching structured data. The last crumb is the current page. */
export function Breadcrumbs({ locale, trail, label }: { locale: Locale; trail: Crumb[]; label: string }) {
  return (
    <nav aria-label={label}>
      <ol className="breadcrumb">
        {trail.map((crumb, index) => (
          <li key={crumb.path}>
            {index === trail.length - 1 ? (
              <span aria-current="page">{crumb.name}</span>
            ) : (
              <Link href={localePath(locale, crumb.path)}>{crumb.name}</Link>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={breadcrumbJsonLd(locale, trail)} />
    </nav>
  );
}
