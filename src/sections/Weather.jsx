"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Sun, CloudRain, Snowflake, CloudFog } from "@phosphor-icons/react";
import { WEATHER } from "../data";
import { Eyebrow, Reveal, ease } from "../ui";
import WeatherFX from "./WeatherFX";

const ICON = { sun: Sun, rain: CloudRain, snow: Snowflake, fog: CloudFog };
/* Backdrops per condition. Where a generated video exists it plays under the canvas effects. */
const BG = {
  sun: "linear-gradient(180deg, #4aa3df 0%, #8fcbee 38%, #f6d78b 70%, #c98b2e 100%)",
  rain: "linear-gradient(180deg, #2b3947 0%, #3a4a58 40%, #1c262e 100%)",
  snow: "linear-gradient(180deg, #6d7e8c 0%, #aebbc5 45%, #dfe6ea 100%)",
  fog: "linear-gradient(180deg, #7b878b 0%, #a3adb0 50%, #6f7a7e 100%)",
};
const VIDEO = { sun: "/video/sun.mp4" };

export default function Weather() {
  const [id, setId] = useState("sun");
  const reduce = useReducedMotion();
  const current = WEATHER.find((w) => w.id === id);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <Eyebrow>Why we are called All Weather</Eyebrow>
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">
          Your road test will not wait for a sunny day. Neither do we.
        </h2>
      </Reveal>

      <Reveal className="mt-12">
        <div role="tablist" aria-label="Driving conditions" className="mb-4 flex flex-wrap gap-2">
          {WEATHER.map((w) => {
            const Icon = ICON[w.id];
            const active = w.id === id;
            return (
              <button key={w.id} role="tab" aria-selected={active} onClick={() => setId(w.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${active ? "bg-accent text-accent-ink" : "border border-line text-muted hover:text-ink"}`}>
                <Icon size={18} weight={active ? "fill" : "regular"} /> {w.label}
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-line">
          <AnimatePresence mode="popLayout">
            <motion.div key={id} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease }} className="absolute inset-0 overflow-hidden" style={{ background: BG[id] }}>
              {VIDEO[id] && (
                <video src={VIDEO[id]} autoPlay muted loop playsInline preload="metadata" aria-hidden
                  className="absolute inset-0 h-full w-full object-cover" />
              )}
              {!reduce && <WeatherFX kind={id} />}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            </motion.div>
          </AnimatePresence>
          <div className="relative flex min-h-[420px] flex-col justify-end p-7 text-[#eef1f0] md:p-12">
            <AnimatePresence mode="wait">
              <motion.div key={id} initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45, ease }} role="tabpanel">
                <h3 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">{current.title}</h3>
                <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-[#d4dcde]">{current.tip}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
