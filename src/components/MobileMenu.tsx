"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

type Item = { href: string; label: string };

type Props = {
  items: Item[];
  secondary: Item[];
  labels: { menu: string; close: string; primary: string };
  children?: React.ReactNode;
};

/** The navigation for screens too narrow for the link row. */
export function MobileMenu({ items, secondary, labels, children }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // Escape closes the panel; following a link closes it too (see onClick below).
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="font-display text-[0.9375rem] font-medium underline decoration-1 underline-offset-[0.3em]"
      >
        {open ? labels.close : labels.menu}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-rule bg-paper shadow-[0_24px_40px_-24px_rgb(23_27_36/0.35)]"
      >
        <nav aria-label={labels.primary} className="shell py-4">
          <ul>
            {items.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <Link href={item.href} className="block py-3.5 font-display text-xl font-semibold" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-[0.9375rem] text-ink-soft">
            {secondary.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {children ? <div className="pt-5 pb-2">{children}</div> : null}
        </nav>
      </div>
    </div>
  );
}
