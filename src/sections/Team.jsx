"use client";
import { useState } from "react";
import { TEAM } from "../data";
import { Reveal } from "../ui";

function Bio({ t, wide }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="article" className={`flex flex-col overflow-hidden rounded-3xl border border-line bg-surface ${wide ? "md:col-span-3" : "md:col-span-2"}`}>
      <img src={t.photo} alt={`${t.name} next to a school vehicle`} loading="lazy" width="800" height="600"
        className="aspect-[4/3] w-full object-cover" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{t.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent-text">{t.role}</p>
        <p className="mt-1 text-xs text-muted">Licensed: {t.licences}</p>
        <p className={`mt-4 text-sm leading-relaxed text-muted ${open ? "" : "line-clamp-4"}`}>{t.bio}</p>
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="mt-3 self-start text-sm font-semibold text-accent-text hover:underline">
          {open ? "Show less" : "Read bio"}
        </button>
      </div>
    </Reveal>
  );
}

export default function Team() {
  const [lead, ...rest] = TEAM;
  return (
    <section id="instructors" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">Patient teachers who have seen every kind of nervous.</h2>
        <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
          Relaxed, outgoing instructors with over 60 years of combined experience. Each one adapts to your strengths and to what you find hard.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-6">
        <Reveal as="article" className="grid overflow-hidden rounded-3xl border border-line bg-surface2 md:col-span-6 md:grid-cols-[1.1fr_0.9fr]">
          <img src={lead.photo} alt={`${lead.name}, manager, next to a school vehicle`} width="800" height="600" className="h-full min-h-64 w-full object-cover" />
          <div className="flex flex-col justify-center p-7 md:p-10">
            <h3 className="text-3xl font-semibold tracking-tight">{lead.name}</h3>
            <p className="mt-1 font-medium text-accent-text">{lead.role}</p>
            <p className="mt-1 text-sm text-muted">Licensed: {lead.licences}</p>
            <p className="mt-5 leading-relaxed text-muted">{lead.bio}</p>
          </div>
        </Reveal>
        {rest.map((t, i) => <Bio key={t.name} t={t} wide={i >= 3} />)}
      </div>
    </section>
  );
}
