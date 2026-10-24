"use client";
import { useState } from "react";
import { PageHero, Section } from "../components/Page";
import { Reveal } from "../ui";
import { LICENCES } from "../data";

export default function Licence() {
  const [tab, setTab] = useState("Private");
  const list = LICENCES.filter((l) => l.group === tab);
  return (
    <>
      <PageHero title="Licence classes in B.C." trail={[{ label: "Resources" }, { label: "License Classes" }]} intro="Which class you need depends on what you want to drive. Minimum ages shown for each class." />
      <Section>
        <div role="tablist" aria-label="Licence group" className="mb-6 flex gap-2">
          {["Private", "Professional"].map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
              className={`rounded-full px-6 py-3 text-sm font-semibold ${tab === t ? "bg-accent text-accent-ink" : "border border-line text-muted hover:text-ink"}`}>{t}</button>
          ))}
        </div>
        {tab === "Professional" && <p className="mb-6 max-w-[60ch] text-muted">Classes 1 to 4 are professional licences for buses, taxis and large trucks. An air brake endorsement is needed for any vehicle with air brakes, other than a construction vehicle.</p>}
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((l, i) => (
            <Reveal key={l.cls} delay={i * 0.06} className="rounded-3xl border border-line bg-surface p-7">
              <div className="flex items-baseline justify-between"><h2 className="text-2xl font-semibold tracking-tight">{l.cls}</h2><p className="font-mono text-sm text-muted">Min. age {l.age}</p></div>
              <p className="mt-4 text-sm font-medium text-accent-text">You may operate</p>
              <ul className="mt-2 space-y-1.5 text-muted">{l.can.map((c) => <li key={c}>{c}</li>)}</ul>
              {l.not && <p className="mt-4 text-sm text-muted"><span className="font-medium text-ink">Not included:</span> {l.not}</p>}
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">For details on driver licensing in British Columbia, see the Driver Licensing section of the ICBC website.</p>
      </Section>
    </>
  );
}
