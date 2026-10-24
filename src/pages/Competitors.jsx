import { Check } from "@phosphor-icons/react";
import { PageHero, Section } from "../components/Page";
import { Reveal, Button } from "../ui";
import { COMPARE, REGISTER } from "../data";

export default function Competitors() {
  return (
    <>
      <PageHero title="How we compare." trail={[{ label: "Our Courses" }, { label: "Our Competitors" }]}
        intro="Our 60+ years of combined knowledge will keep you safe and give you the confidence you need. Quality service equals quality results." />
      <Section>
        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="hidden grid-cols-[1fr_1.3fr_1fr] bg-surface2 px-7 py-4 text-sm font-semibold md:grid">
            <span>What matters</span><span className="text-accent-text">All Weather</span><span className="text-muted">Typical elsewhere</span>
          </div>
          {COMPARE.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.04} className="grid gap-1 border-t border-line px-7 py-5 first:border-t-0 md:grid-cols-[1fr_1.3fr_1fr] md:gap-4">
              <p className="font-medium">{r.label}</p>
              <p className="flex items-start gap-2"><Check size={18} weight="bold" className="mt-1 shrink-0 text-accent-text" />{r.us}</p>
              <p className="text-muted">{r.them}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">Comparisons use regular published prices and may change. Always confirm with each school.</p>
        <div className="mt-10"><Button href={REGISTER}>Sign up today</Button></div>
      </Section>
    </>
  );
}
