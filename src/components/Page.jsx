"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { ease } from "../ui";

export function PageHero({ title, intro, trail = [], image, imageAlt = "" }) {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 pt-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface2">
        <div className={`grid items-center ${image ? "md:grid-cols-[1.2fr_0.8fr]" : ""}`}>
          <div className="p-8 pb-12 md:p-14 md:pb-16">
            {trail.length > 0 && (
              <p className="mb-5 flex flex-wrap gap-x-2 text-sm text-muted">
                <Link to="/" className="hover:text-ink">Home</Link>
                {trail.map((t) => <span key={t.label} className="flex gap-2"><span aria-hidden>/</span>{t.to ? <Link to={t.to} className="hover:text-ink">{t.label}</Link> : <span className="text-ink">{t.label}</span>}</span>)}
              </p>
            )}
            <motion.h1 initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
              className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tighter md:text-6xl">{title}</motion.h1>
            {intro && <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted">{intro}</p>}
          </div>
          {image && <img src={image} alt={imageAlt} className="hidden h-full min-h-72 w-full object-cover md:block" />}
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1.5 overflow-hidden"><div data-fx className="lane-h h-full w-[calc(100%+48px)]" /></div>
      </div>
    </section>
  );
}

export function Section({ children, className = "", narrow = false }) {
  return <section className={`mx-auto ${narrow ? "max-w-3xl" : "max-w-6xl"} px-4 py-12 ${className}`}>{children}</section>;
}

export function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-surface">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3>
              <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium tracking-tight md:px-8">
                {it.q}
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease }} className="shrink-0 text-accent-text"><Plus size={22} weight="bold" /></motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }} className="overflow-hidden">
                  <div className="px-6 pb-6 md:px-8">
                    <p className="max-w-[64ch] leading-relaxed text-muted">{it.a}</p>
                    {it.to && <Link to={it.to} className="mt-4 inline-block text-sm font-semibold text-accent-text hover:underline">{it.cta}</Link>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
