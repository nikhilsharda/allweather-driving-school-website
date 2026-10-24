import { PageHero, Section } from "../components/Page";
import { Reveal, Button } from "../ui";
import { GLP_FEES, GLP_STAGES, REGISTER } from "../data";

export default function Glp() {
  return (
    <>
      <PageHero title="Graduated licensing program." trail={[{ label: "Resources" }, { label: "GLP Info" }]}
        intro="Anyone applying for a first driver's licence, teen or adult, enters the program. It eases new drivers onto the road in two stages." />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {[["36 months", "in the program, or 30 months with an ICBC approved course"], ["2 credits", "toward BC high school graduation with an approved course"], ["6 months", "off your Novice stage when you complete the course and stay violation free"]].map(([n, t], i) => (
            <Reveal key={n} delay={i * 0.06} className="rounded-3xl bg-surface2 p-7"><p className="font-mono text-4xl font-medium tracking-tighter">{n}</p><p className="mt-3 text-sm leading-relaxed text-muted">{t}</p></Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">Your three stages</h2>
        <ol className="mt-8 space-y-4">
          {GLP_STAGES.map((s, i) => (
            <Reveal as="li" key={s.title} className="grid gap-6 rounded-3xl border border-line bg-surface p-7 md:grid-cols-[180px_1fr]">
              <p className="font-mono text-5xl font-medium tracking-tighter text-accent-text">{s.stage}</p>
              <div><h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm text-muted md:grid-cols-2">{s.points.map((p) => <li key={p} className="border-l-2 border-accent pl-3">{p}</li>)}</ul></div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 max-w-[64ch] text-sm text-muted">New drivers are almost twice as likely to cause a collision as experienced drivers, and one in five is in a crash within two years. Moving up in stages gives you time in different seasons and conditions. If you hold a licence from another jurisdiction, contact ICBC Driver Services at 1-800-950-1498.</p>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">ICBC licensing fees</h2>
        <dl className="mt-8 grid gap-x-10 rounded-3xl border border-line bg-surface px-7 py-3 md:grid-cols-2">
          {GLP_FEES.map(([n, p]) => <div key={n} className="flex justify-between gap-4 border-b border-line py-3 last:border-0"><dt className="text-muted">{n}</dt><dd className="font-mono font-medium">{p}</dd></div>)}
        </dl>
        <p className="mt-3 text-sm text-muted">Licence fees apply when a road test is passed. If you fail, fees are paid again and you wait 24 hours to rebook.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button href={REGISTER}>Sign up today</Button><Button href="/course-outline" variant="ghost">Course outline</Button></div>
      </Section>
    </>
  );
}
