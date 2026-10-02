/** The site's only icon: a small chevron. It mirrors itself in right-to-left layouts via CSS. */
export function Chevron({ className }: { className?: string }) {
  return (
    <svg className={className} width="9" height="16" viewBox="0 0 9 16" fill="none" aria-hidden="true">
      <path d="M1.25 1.25 7.75 8l-6.5 6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
