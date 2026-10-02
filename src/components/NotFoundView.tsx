"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

type Copy = { heading: string; body: string; home: string };

/** A not-found page receives no params, so the language is read from the URL on the client. */
export function NotFoundView({ copy }: { copy: Record<string, Copy> }) {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && copy[params.locale] ? params.locale : "en";
  const t = copy[locale];

  return (
    <section className="shell pt-20 pb-28">
      <h1 className="headline max-w-[12em]">{t.heading}</h1>
      <p className="lede mt-5 max-w-[52ch]">{t.body}</p>
      <Link href={`/${locale}`} className="pill mt-9">
        {t.home}
      </Link>
    </section>
  );
}
