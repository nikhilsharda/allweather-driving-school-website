import { PageHero, Section } from "../components/Page";
import { Reveal, Button } from "../ui";
import { MSA_PARTS, MOTO_PRICES, RIDE_SKILLS, PHONE, REGISTER } from "../data";
import { Motorcycle as Moto, Broadcast } from "@phosphor-icons/react";

export default function Motorcycle() {
  return (
    <>
      <PageHero title="Motorcycle training in Kelowna." trail={[{ label: "Motorcycle Training" }]}
        intro="Daphne, Gene and Daryle are our motorcycle instructors. They are knowledgeable, patient, kind and love to teach." />
      <Section>
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-3xl bg-[#0f1517] p-8 text-[#eef1f0] md:p-10">
            <Moto size={40} weight="duotone" className="text-[#f5c400]" />
            <h2 className="mt-8 text-3xl font-semibold tracking-tight">ICBC Motorcycle Skills Assessment course</h2>
            <p className="mt-2 font-mono text-5xl font-medium tracking-tighter text-[#f5c400]">$1,000</p>
            <p className="mt-4 max-w-[48ch] leading-relaxed text-[#b4c0c3]">A unique riding course combining the best of both ways of teaching: group theory and individual training. Bike included for the skills assessment.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button href={REGISTER}>Sign up today</Button><Button href={`tel:${PHONE.replace(/-/g, "")}`} variant="ghost" className="!border-white/25 !text-white">{PHONE}</Button></div>
          </Reveal>
          <ol className="grid gap-4">
            {MSA_PARTS.map((p, i) => (
              <Reveal as="li" key={p.h} delay={i * 0.08} className="rounded-3xl border border-line bg-surface p-7">
                <span className="font-mono text-sm text-accent-text">Part {i + 1}</span>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{p.h}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.p}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>
      <Section>
        <Reveal className="grid items-center gap-8 rounded-3xl bg-accent p-8 text-accent-ink md:grid-cols-[auto_1fr] md:p-12">
          <Broadcast size={56} weight="duotone" />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">One on one, and never alone.</h2>
            <p className="mt-3 max-w-[64ch] leading-relaxed">Our bike-to-bike Bluetooth communication lets you talk to your instructor as you need to. We correct mistakes as they happen, with no waiting for others and no one else watching. We are the only school in the Okanagan with this system. Training is built around your schedule, in two hour blocks on weekdays and weekends.</p>
          </div>
        </Reveal>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">What you will practise</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.9fr_1fr]">
          {RIDE_SKILLS.map((g, i) => (
            <Reveal key={g.h} delay={i * 0.08} className="rounded-3xl border border-line bg-surface p-7">
              <h3 className="text-xl font-semibold tracking-tight">{g.h}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">{g.items.map((x) => <li key={x} className="border-l-2 border-accent pl-3">{x}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">Prices and fees</h2>
        <dl className="mt-8 divide-y divide-line rounded-3xl border border-line bg-surface">
          {MOTO_PRICES.map((m) => (
            <div key={m.name} className="flex flex-wrap items-baseline justify-between gap-2 px-7 py-5">
              <div><dt className="font-medium">{m.name}</dt><dd className="mt-1 text-sm text-muted">{m.note}</dd></div>
              <p className="font-mono text-2xl font-medium tracking-tight">{m.price}</p>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-muted">Tests are done separately. The skills test usually takes about 15 minutes and the road test about an hour.</p>
      </Section>
    </>
  );
}
