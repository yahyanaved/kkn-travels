/** Short titled facts side by side, each on its own hairline. Not a sequence, so not numbered. */
export function Facts({ items }: { items: { title: string; detail: string }[] }) {
  return (
    <ul className="facts">
      {items.map((item) => (
        <li key={item.title}>
          <h3 className="subhead">{item.title}</h3>
          <p className="mt-2 text-ink-soft">{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}
