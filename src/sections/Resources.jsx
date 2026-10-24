"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { RESOURCES } from "../data";
import { Reveal, ease } from "../ui";

export default function Resources() {
  const [open, setOpen] = useState(0);
  return (
    <section id="resources" className="mx-auto max-w-4xl px-4 py-20">
      <Reveal>
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">Questions before you book?</h2>
      </Reveal>
      <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-surface">
        {RESOURCES.map((r, i) => {
          const isOpen = open === i;
          return (
            <div key={r.q}>
              <h3>
                <button aria-expanded={isOpen} aria-controls={`rs-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium tracking-tight md:px-8">
                  {r.q}
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease }} className="shrink-0 text-accent-text"><Plus size={22} weight="bold" /></motion.span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div id={`rs-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease }} className="overflow-hidden">
                    <div className="px-6 pb-6 md:px-8">
                      <p className="max-w-[60ch] leading-relaxed text-muted">{r.a}</p>
                      <Link to={r.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline">{r.cta} <ArrowUpRight size={16} weight="bold" /></Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
