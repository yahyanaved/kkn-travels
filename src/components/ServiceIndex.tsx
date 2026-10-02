import Link from "next/link";
import { getServices, servicePath, type ServiceSlug } from "@/content";
import { localePath, type Locale } from "@/i18n/config";
import { Chevron } from "./Chevron";

/** Every service as a title on a hairline, two columns wide. */
export function ServiceIndex({ locale, exclude, label }: { locale: Locale; exclude?: ServiceSlug; label: string }) {
  const services = getServices(locale).filter((service) => service.slug !== exclude);

  return (
    <nav aria-label={label}>
      <ul className="svc-index">
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={localePath(locale, servicePath(service.slug))} className="svc">
              <span className="svc-title">{service.label}</span>
              <span className="svc-short">{service.short}</span>
              <Chevron className="svc-chevron" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
