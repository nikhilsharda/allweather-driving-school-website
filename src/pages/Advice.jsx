import { Check } from "@phosphor-icons/react";
import { PageHero, Section } from "../components/Page";
import { Reveal, Button } from "../ui";
import { ADVICE } from "../data";

export default function Advice() {
  return (
    <>
      <PageHero title="Driving advice." trail={[{ label: "Resources" }, { label: "Driving Advice" }]}
        intro="Practical habits from working instructors for busy roads, stressful days and Okanagan weather." />
      <Section>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.9fr_1fr]">
          {ADVICE.map((g, i) => (
            <Reveal key={g.h} delay={i * 0.08} className="rounded-3xl border border-line bg-surface p-7">
              <h2 className="text-2xl font-semibold tracking-tight">{g.h}</h2>
              <ul className="mt-5 space-y-3">
                {g.items.map((x) => <li key={x} className="flex gap-3 text-muted"><Check size={18} weight="bold" className="mt-1 shrink-0 text-accent-text" />{x}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-[60ch] text-muted">Unsure in rain, fog, ice or snow? A confidence-building lesson with one of our instructors can help.</p>
        <div className="mt-6"><Button href="/student-registration">Sign up today</Button></div>
      </Section>
    </>
  );
}
