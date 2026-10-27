"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarCheck, Download, Moon, Sun } from "@phosphor-icons/react";
import { PageHero, Section } from "../components/Page";
import { Button, ease } from "../ui";
import { PHONE, REGISTER, THEORY, THEORY_2026, THEORY_2027, THEORY_TIMES } from "../data";

const parse = (iso) => new Date(`${iso}T12:00:00`);
const fmt = (iso, o) => parse(iso).toLocaleDateString("en-CA", o);
const monthKey = (iso) => fmt(iso, { month: "long", year: "numeric" });

function Card({ c, past }) {
  const evening = c.t === "e";
  const unavailable = c.full || past;
  return (
    <motion.li layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }}
      className={`rounded-3xl border border-line p-6 ${unavailable ? "bg-surface2/60" : "bg-surface"}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted">Starts</p>
          <h3 className="text-2xl font-semibold tracking-tight">{fmt(c.d[0], { weekday: "long", month: "long", day: "numeric" })}</h3>
        </div>
        <span className={`rounded-full px-4 py-1.5 text-sm font-semibold ${c.full ? "border border-line text-muted" : past ? "border border-line text-muted" : "bg-accent text-accent-ink"}`}>
          {c.full ? "Full" : past ? "Started" : "Seats open"}
        </span>
      </div>
      <p className="mt-3 flex items-center gap-2 text-sm text-muted">
        {evening ? <Moon size={18} weight="duotone" className="text-accent-text" /> : <Sun size={18} weight="duotone" className="text-accent-text" />}
        {evening ? "Six evenings" : "Three full days"}, {THEORY_TIMES[c.t]}
      </p>
      <ol className={`mt-5 grid gap-2 ${evening ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-3"}`}>
        {c.d.map((d, i) => (
          <li key={d} className="rounded-2xl border border-line px-3.5 py-2.5 text-sm">
            <span className="block font-mono text-xs text-muted">{evening ? `Class ${i + 1}` : `Classes ${i * 2 + 1} and ${i * 2 + 2}`}</span>
            <span className="font-medium">{fmt(d, { weekday: "short", month: "short", day: "numeric" })}</span>
          </li>
        ))}
      </ol>
      {!unavailable && (
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={REGISTER} className="!px-5 !py-3 !text-sm">Sign up today</Button>
          <Button href={`tel:${PHONE.replace(/-/g, "")}`} variant="ghost" className="!px-5 !py-3 !text-sm">{PHONE}</Button>
        </div>
      )}
    </motion.li>
  );
}

export default function GlpCalendar() {
  const [year, setYear] = useState(() => (new Date().getFullYear() >= 2027 ? 2027 : 2026));
  const [type, setType] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  const list = useMemo(() => THEORY[year]
    .filter((c) => (type === "all" || c.t === type))
    .filter((c) => showAll || (!c.full && c.d[0] >= today)), [year, type, showAll, today]);
  const groups = useMemo(() => {
    const m = new Map();
    list.forEach((c) => { const k = monthKey(c.d[0]); m.set(k, [...(m.get(k) || []), c]); });
    return [...m.entries()];
  }, [list]);

  const chip = (on) => `rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${on ? "bg-accent text-accent-ink" : "border border-line text-muted hover:text-ink"}`;

  return (
    <>
      <PageHero title="GLP theory calendar." trail={[{ label: "Resources" }, { label: "GLP Theory Calendar" }]}
        intro="In-class theory dates for the Graduated Licensing Program. Pick daytime or evening classes. Classes are capped at 15 students, so seats go quickly." />
      <Section>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div role="tablist" aria-label="Year" className="flex gap-2">
            {[2026, 2027].map((y) => <button key={y} role="tab" aria-selected={year === y} onClick={() => setYear(y)} className={chip(year === y)}>{y}</button>)}
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Class type">
            {[["all", "All classes"], ["d", "Daytime"], ["e", "Evenings"]].map(([v, l]) => <button key={v} aria-pressed={type === v} onClick={() => setType(v)} className={chip(type === v)}>{l}</button>)}
          </div>
        </div>
        <label className="mt-5 flex w-fit cursor-pointer items-center gap-3 text-sm">
          <input type="checkbox" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} className="size-5 accent-[var(--accent)]" />
          Also show full and past courses
        </label>

        <div className="mt-10 space-y-12">
          <AnimatePresence mode="popLayout">
            {groups.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-line p-8">
                <CalendarCheck size={36} weight="duotone" className="text-accent-text" />
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">No open courses match.</h2>
                <p className="mt-2 max-w-[56ch] text-muted">Try another year or class type, or call {PHONE} and we will tell you when the next course opens.</p>
              </motion.div>
            ) : groups.map(([month, courses]) => (
              <motion.section key={`${year}-${month}`} layout>
                <h2 className="mb-4 text-lg font-semibold tracking-tight text-muted">{month}</h2>
                <ul className="grid gap-4 md:grid-cols-2">
                  {courses.map((c) => <Card key={c.d[0]} c={c} past={c.d[0] < today} />)}
                </ul>
              </motion.section>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3 rounded-3xl bg-surface2 p-6">
          <p className="mr-auto max-w-[44ch] font-medium">Prefer the printed schedule? Download the official PDF for each year.</p>
          <a href={THEORY_2026} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold hover:bg-surface"><Download size={18} weight="bold" /> 2026 dates</a>
          <a href={THEORY_2027} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold hover:bg-surface"><Download size={18} weight="bold" /> 2027 dates</a>
        </div>
      </Section>
    </>
  );
}
