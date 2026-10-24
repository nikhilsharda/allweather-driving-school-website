"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone } from "@phosphor-icons/react";
import { PHONE, REGISTER } from "../data";
import { Button, ease } from "../ui";

const WORDS = ["Learn", "to", "drive", "in", "every", "kind", "of", "weather."];
const HI = new Set(["every", "kind", "of", "weather."]);

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.14]);

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden bg-[#0d1012] text-white">
      {/* Full-bleed photo: car on the Okanagan road at sunset. Scrim keeps the left side readable. */}
      <motion.img
        style={{ y, scale }}
        src="/img/hero-sunset.webp" alt="An All Weather Driving School car on a wet mountain road above Okanagan Lake at sunset"
        width="1448" height="1086" fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_50%]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(8_10_12/0.88)_0%,rgb(8_10_12/0.7)_38%,rgb(8_10_12/0.1)_72%)] max-md:bg-[linear-gradient(180deg,rgb(8_10_12/0.82)_0%,rgb(8_10_12/0.55)_55%,rgb(8_10_12/0.15)_100%)]" />

      <div className="mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-4 pb-20 pt-28 md:pt-24">
        <h1 className="max-w-3xl text-[2.6rem] font-semibold leading-[1.02] tracking-tighter sm:text-5xl lg:text-[4.5rem]">
          {WORDS.map((w, i) => (
            <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-1 align-bottom">
              <motion.span className={`inline-block ${HI.has(w) ? "text-[#f5c400]" : ""}`}
                initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease }}>
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75, ease }}
          className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/85">
          Car and motorcycle lessons in Kelowna, taught by instructors with 60+ years of combined experience.
        </motion.p>
        <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease }}
          className="mt-9 flex flex-wrap gap-3">
          <Button href={REGISTER}>Sign up today</Button>
          <Button href={`tel:${PHONE.replace(/-/g, "")}`} variant="ghost" className="!border-white/40 !text-white hover:!bg-white/10">
            <Phone size={18} weight="bold" /> {PHONE}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
