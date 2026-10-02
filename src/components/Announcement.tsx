import Link from "next/link";
import { getDictionary, servicePath } from "@/content";
import { localePath, type Locale } from "@/i18n/config";

/** One line of news above the navigation. It scrolls away with the page. */
export function Announcement({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <div className="bg-ink text-paper">
      <p className="shell flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 py-2 text-center text-[0.875rem]">
        <span className="font-display font-semibold">{t.announce.text}</span>
        <Link
          href={`${localePath(locale, servicePath("uae-visa-services"))}#family-visa`}
          className="underline transition-colors duration-200 hover:text-blush"
        >
          {t.announce.cta}
        </Link>
      </p>
    </div>
  );
}
