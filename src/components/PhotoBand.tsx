import Image from "next/image";
import { getDictionary } from "@/content";
import { destinations } from "@/content/destinations";
import type { DestinationId } from "@/content/types";
import type { Locale } from "@/i18n/config";

/**
 * The inner pages' version of the home page strip: two or three photographs
 * across the full width, the first one wide, each named at the bottom corner.
 * Pass `lead` when the band opens the page: it then loads at once and plays
 * the entrance. Further down a page it loads lazily and stays still.
 */
type Props = {
  locale: Locale;
  ids: DestinationId[];
  lead?: boolean;
  /** Extra classes for the wrapper, for example spacing above the band. */
  className?: string;
  /** Set to false when the band already sits inside a centred column. */
  framed?: boolean;
};

export function PhotoBand({ locale, ids, lead: opensPage = false, className = "", framed = true }: Props) {
  const t = getDictionary(locale);

  return (
    <div className={`${framed ? "strip-frame" : ""} ${className}`.trim()}>
      <div className="strip strip-static" data-quiet={opensPage ? undefined : true}>
      {ids.map((id, index) => {
        const destination = destinations[id];
        const copy = t.destinations[id];
        const lead = index === 0;
        return (
          <figure key={id} className="strip-slice" data-lead={lead} style={{ "--i": index } as React.CSSProperties}>
            <div className="strip-link">
              <Image
                src={destination.src}
                alt={copy.alt}
                fill
                sizes={lead ? "(min-width: 768px) 62vw, 72vw" : "(min-width: 768px) 38vw, 72vw"}
                loading={opensPage ? "eager" : "lazy"}
                fetchPriority={opensPage && lead ? "high" : "auto"}
              />
              <figcaption className="strip-caption">
                <span className="strip-name">{copy.name}</span>
              </figcaption>
            </div>
          </figure>
        );
      })}
      </div>
    </div>
  );
}
