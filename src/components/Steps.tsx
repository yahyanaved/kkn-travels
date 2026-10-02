/** A numbered sequence. Used only where the order matters. */
export function Steps({ steps }: { steps: { title: string; detail: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((step) => (
        <li key={step.title}>
          <h3 className="subhead">{step.title}</h3>
          <p className="mt-2 max-w-[34ch] text-ink-soft">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
