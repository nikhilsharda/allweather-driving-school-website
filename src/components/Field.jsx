export function Field({ id, label, error, hint, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm font-medium text-[#c2410c] dark:text-[#fb923c]">{error}</p>}
    </div>
  );
}

export const inputCls = (err) =>
  `w-full rounded-xl border bg-bg px-4 py-3.5 text-base text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus:border-accent focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_30%,transparent)] ${err ? "border-[#c2410c]" : "border-line"}`;
