import type { Faq as FaqItem } from "@/content";
import { Chevron } from "./Chevron";

/** Questions that open in place. Native <details>, so it works without JavaScript. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <Chevron />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
