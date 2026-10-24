import { PageHero, Section } from "../components/Page";
import Pricing from "../sections/Pricing";
import { Reveal } from "../ui";
import { MOTO_PRICES } from "../data";

export default function Packages() {
  return (
    <>
      <PageHero title="Course packages." trail={[{ label: "Our Courses" }, { label: "Course Packages" }]}
        intro="Lesson packages for car and motorcycle. All prices include GST." />
      <Pricing />
      <Section>
        <Reveal className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-line bg-surface p-7"><h3 className="text-lg font-semibold">Every lesson is 90 minutes</h3><p className="mt-2 text-sm leading-relaxed text-muted">With at least 80 minutes of practice time, plus 5 minutes at the start and end to preview and review.</p></div>
          <div className="rounded-3xl border border-line bg-surface p-7"><h3 className="text-lg font-semibold">Best package price, always</h3><p className="mt-2 text-sm leading-relaxed text-muted">If you take extra lessons later, we adjust the price so you get the best package price possible.</p></div>
          <div className="rounded-3xl border border-line bg-surface p-7"><h3 className="text-lg font-semibold">GLP vs Young Drivers</h3><p className="mt-2 text-sm leading-relaxed text-muted">$1,750 with All Weather against $1,800 at Young Drivers, and our car for your road test is included.</p></div>
        </Reveal>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">Motorcycle prices and fees</h2>
        <dl className="mt-8 divide-y divide-line rounded-3xl border border-line bg-surface">
          {MOTO_PRICES.map((m) => (
            <div key={m.name} className="flex flex-wrap items-baseline justify-between gap-2 px-7 py-5">
              <div><dt className="font-medium">{m.name}</dt><dd className="mt-1 text-sm text-muted">{m.note}</dd></div>
              <p className="font-mono text-2xl font-medium tracking-tight">{m.price}</p>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
