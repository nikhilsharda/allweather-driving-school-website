"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { PACKAGES, REGISTER } from "../data";
import { Reveal, Button } from "../ui";

const fmt = (n) => n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

export default function Pricing({ showTitle = true }) {
  const [i, setI] = useState(2);
  const reduce = useReducedMotion();
  const p = PACKAGES[i];
  const perLesson = p.price / p.lessons;
  const saved = 170 * p.lessons - p.price;

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">Clear prices. GST already included.</h2>
        <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
          Each lesson is 90 minutes. Add lessons later and we adjust your price to the best package.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal className="rounded-3xl border border-line bg-surface p-7 md:p-10">
          <p id="pk-label" className="text-sm font-medium text-muted">How many lessons?</p>
          <div role="radiogroup" aria-labelledby="pk-label" className="mt-4 flex flex-wrap gap-2">
            {PACKAGES.map((x, idx) => (
              <button key={x.lessons} role="radio" aria-checked={idx === i} onClick={() => setI(idx)}
                className={`min-w-14 rounded-full px-5 py-3 font-mono text-sm font-medium transition-colors ${idx === i ? "bg-accent text-accent-ink" : "border border-line text-muted hover:text-ink"}`}>
                {x.lessons}
              </button>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-end justify-between gap-6" aria-live="polite">
            <div>
              <motion.p key={p.price} initial={reduce ? false : { y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="font-mono text-6xl font-medium tracking-tighter md:text-8xl">
                {fmt(p.price)}
              </motion.p>
              <p className="mt-3 text-muted">
                {p.lessons} {p.lessons === 1 ? "lesson" : "lessons"}, {p.hours} hours behind the wheel
              </p>
            </div>
            <div className="text-right text-sm text-muted">
              <p>{fmt(Math.round(perLesson))} per lesson</p>
              {saved > 0 && <p className="mt-1 font-semibold text-accent-text">You save {fmt(saved)}</p>}
            </div>
          </div>
          <div className="mt-10"><Button href={REGISTER}>Sign up today <ArrowRight size={18} weight="bold" /></Button></div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={0.08} className="rounded-3xl border border-line bg-surface2 p-7">
            <h3 className="text-xl font-semibold tracking-tight">Full GLP driving course</h3>
            <p className="mt-2 font-mono text-4xl font-medium tracking-tighter">$1,750</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              18 hours of theory, 8 private lessons and a 2 hour highway lesson. Tax exempt. School vehicle for your road test is free.
            </p>
            <Link to="/course-packages" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline">
              Full details <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
          <Reveal delay={0.16} className="rounded-3xl border border-line bg-surface p-7">
            <h3 className="text-xl font-semibold tracking-tight">Motorcycle bike rental</h3>
            <p className="mt-2 font-mono text-4xl font-medium tracking-tighter">$300</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              For your skills test or road test, including a 45 minute warm-up.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
