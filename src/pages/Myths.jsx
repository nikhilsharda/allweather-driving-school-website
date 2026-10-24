"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PageHero, Section } from "../components/Page";
import { Reveal } from "../ui";
import { MYTHS, SKID_RULES } from "../data";

function Card({ n, myth, fact }) {
  const [flip, setFlip] = useState(false);
  const reduce = useReducedMotion();
  return (
    <button onClick={() => setFlip(!flip)} aria-pressed={flip} aria-label={`Myth ${n}. ${flip ? "Showing the fact" : "Tap to reveal the fact"}`}
      className="relative h-full min-h-[260px] w-full text-left [perspective:1200px]">
      <motion.span animate={{ rotateY: flip && !reduce ? 180 : 0 }} transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative block h-full min-h-[260px] [transform-style:preserve-3d]">
        <span className={`absolute inset-0 flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 [backface-visibility:hidden] ${flip && reduce ? "hidden" : ""}`}>
          <span className="font-mono text-sm text-accent-text">Myth {n}</span>
          <span className="text-xl font-medium leading-snug tracking-tight">{myth}</span>
          <span className="text-sm text-muted">Tap for the fact</span>
        </span>
        <span className={`absolute inset-0 flex flex-col justify-between rounded-3xl bg-accent p-7 text-accent-ink [backface-visibility:hidden] ${reduce ? (flip ? "" : "hidden") : "[transform:rotateY(180deg)]"}`}>
          <span className="font-mono text-sm font-semibold">Fact</span>
          <span className="text-lg leading-snug">{fact}</span>
          <span className="text-sm opacity-70">Tap to flip back</span>
        </span>
      </motion.span>
    </button>
  );
}

export default function Myths() {
  return (
    <>
      <PageHero title="Common myths about road safety." trail={[{ label: "FAQ", to: "/faq" }, { label: "Road Safety Myths" }]} intro="Tap each card to see what the facts say." />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MYTHS.map(([m, f], i) => <li key={i}><Card n={i + 1} myth={m} fact={f} /></li>)}
        </ul>
      </Section>
      <Section narrow>
        <Reveal className="rounded-3xl border border-line bg-surface2 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Three things every driver should know about skidding</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 leading-relaxed text-muted">{SKID_RULES.map((r) => <li key={r}>{r}</li>)}</ol>
          <p className="mt-5 text-muted">With superior observation, intelligent braking and gentle steering, most skids are avoided.</p>
        </Reveal>
      </Section>
    </>
  );
}
