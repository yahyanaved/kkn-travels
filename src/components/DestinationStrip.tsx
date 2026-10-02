import Image from "next/image";
import Link from "next/link";
import { getDictionary, servicePath } from "@/content";
import { destinations, stripOrder } from "@/content/destinations";
import { localePath, type Locale } from "@/i18n/config";

const LEAD = "paris";

/**
 * Five destination photographs across the full width. Each links to the
 * service that gets you there; the one in hand widens and names that service.
 */
export function DestinationStrip({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <div className="strip-frame">
      <ul className="strip" aria-label={t.hero.stripLabel}>
      {stripOrder.map((id, index) => {
        const destination = destinations[id];
        const copy = t.destinations[id];
        const lead = id === LEAD;
        return (
          <li key={id} className="strip-slice" data-lead={lead} style={{ "--i": index } as React.CSSProperties}>
            <Link href={localePath(locale, servicePath(destination.slug))} className="strip-link">
              <Image
                src={destination.src}
                alt={copy.alt}
                fill
                sizes={lead ? "(min-width: 768px) 42vw, 72vw" : "(min-width: 768px) 30vw, 72vw"}
                loading="eager"
                fetchPriority={lead ? "high" : "auto"}
                style={destination.frame && { scale: destination.frame.scale, transformOrigin: destination.frame.origin }}
              />
              <span className="strip-caption">
                <span className="strip-name">{copy.name}</span>
                <span className="strip-note">{copy.caption}</span>
              </span>
            </Link>
          </li>
        );
      })}
      </ul>
    </div>
  );
}
