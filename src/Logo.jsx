/* The supplied brand logos, with transparent backgrounds so they sit directly on the page.
   The white-and-yellow version is used automatically in dark mode. */
function Pic({ full, className, alt }) {
  const base = full ? "logo" : "mark";
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={`/brand/${base}-dark.png`} />
      <img src={`/brand/${base}-light.png`} alt={alt} className={className} decoding="async" />
    </picture>
  );
}

export default function Logo({ compact = false, className = "", footer = false }) {
  if (compact) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <Pic className="h-9 w-auto shrink-0" alt="" />
        <span className="whitespace-nowrap text-[15px] font-extrabold uppercase leading-none tracking-tight">All Weather</span>
      </span>
    );
  }
  return (
    <span className={`inline-flex ${className}`}>
      <Pic full className={footer ? "h-14 w-auto" : "h-11 w-auto"} alt="All Weather Driving School" />
    </span>
  );
}
