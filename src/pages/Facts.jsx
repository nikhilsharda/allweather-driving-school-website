"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowsClockwise } from "@phosphor-icons/react";
import { PageHero, Section } from "../components/Page";
import { Reveal, ease } from "../ui";
import { FACTS } from "../data";

export default function Facts() {
  const [i, setI] = useState(0);
  return (
    <>
      <PageHero title="Fun driving and car facts." trail={[{ label: "FAQ", to: "/faq" }, { label: "Fun Driving & Car Facts" }]} intro="Pass the time at the next red light." />
      <Section narrow>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent p-8 text-accent-ink md:p-12">
          <p className="font-mono text-sm font-semibold">{i + 1} of {FACTS.length}</p>
          <div className="mt-6 min-h-[9rem]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, ease }}
                className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{FACTS[i]}</motion.p>
            </AnimatePresence>
          </div>
          <button onClick={() => setI((i + 1) % FACTS.length)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#15110a] px-6 py-3.5 text-[15px] font-semibold text-[#f5c400] transition-transform active:scale-[0.97]">
            <ArrowsClockwise size={18} weight="bold" /> Next fact
          </button>
        </div>
      </Section>
      <Section narrow>
        <ul className="divide-y divide-line">
          {FACTS.map((f, idx) => (
            <Reveal as="li" key={f} className="py-4"><button onClick={() => { setI(idx); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-left text-muted hover:text-ink">{f}</button></Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
