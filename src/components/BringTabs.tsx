"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { Chevron } from "./Chevron";

export type BringTab = {
  slug: string;
  label: string;
  heading: string;
  items: string[];
  note: string;
  href: string;
};

/** Pick an errand, see what to bring. Follows the WAI-ARIA tabs pattern with arrow-key movement. */
export function BringTabs({ tabs, label, cta }: { tabs: BringTab[]; label: string; cta: string }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") move(index + 1);
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") move(index - 1);
    else if (event.key === "Home") move(0);
    else if (event.key === "End") move(tabs.length - 1);
    else return;
    event.preventDefault();
  };

  return (
    <div className="grid gap-x-[8%] gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div role="tablist" aria-label={label} aria-orientation="vertical" className="self-start border-b border-rule">
        {tabs.map((tab, index) => (
          <button
            key={tab.slug}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`${baseId}-panel-${index}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className="tab"
          >
            {tab.label}
            <Chevron className="tab-chevron" />
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.slug}
          role="tabpanel"
          id={`${baseId}-panel-${index}`}
          aria-labelledby={`${baseId}-tab-${index}`}
          hidden={active !== index}
          className="tab-panel"
        >
          <h3 className="subhead">{tab.heading}</h3>
          <ul className="checklist mt-6">
            {tab.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-[62ch] text-[0.9375rem] text-ink-soft">{tab.note}</p>
          <Link href={tab.href} className="text-link mt-6 inline-block">
            {cta}
          </Link>
        </div>
      ))}
    </div>
  );
}
