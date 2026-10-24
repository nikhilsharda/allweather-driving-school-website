"use client";
import { motion, useReducedMotion } from "motion/react";
import { Car, Motorcycle, SteeringWheel, Exam, ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { PHONE } from "../data";
import { Reveal, ease } from "../ui";

function Tile({ className = "", children, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.8, delay, ease }}
      className={`group relative overflow-hidden rounded-3xl border border-line p-7 md:p-8 ${className}`}
    >
      {children}
    </motion.article>
  );
}

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">Pick the lessons that fit where you are.</h2>
        <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
          First time behind the wheel, nervous before a road test, or ready for two wheels. We teach all of it.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
        <Tile className="bg-accent text-accent-ink md:col-span-4 md:row-span-1 md:min-h-[340px]">
          <Car size={40} weight="duotone" />
          <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">Automatic and standard cars</h3>
          <p className="mt-3 max-w-[44ch] text-base leading-relaxed opacity-80">
            Class 5 and 7 lessons in a school vehicle. Choose automatic or learn to drive a manual with a transmission specialist.
          </p>
          <Link to="/course-packages" className="mt-6 inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline">
            See lesson pricing <ArrowUpRight size={18} weight="bold" />
          </Link>
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-64 rounded-full border-[28px] border-black/10" />
        </Tile>

        <Tile delay={0.08} className="bg-surface md:col-span-2">
          <Exam size={36} weight="duotone" className="text-accent-text" />
          <h3 className="mt-12 text-2xl font-semibold tracking-tight">Road test preparation</h3>
          <p className="mt-3 leading-relaxed text-muted">
            One or two lessons before test day is often all it takes. With the GLP course, the school vehicle for your test is free.
          </p>
        </Tile>

        <Tile delay={0.04} className="bg-surface2 md:col-span-2">
          <SteeringWheel size={36} weight="duotone" className="text-accent-text" />
          <h3 className="mt-12 text-2xl font-semibold tracking-tight">Graduated Licensing course</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Theory plus 14 hours in the car. Earns two high school credits and a possible 6 month cut to your N stage.
          </p>
          <Link to="/glp-info" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline">
            GLP details <ArrowUpRight size={16} weight="bold" />
          </Link>
        </Tile>

        <Tile
          delay={0.12}
          className="bg-[#0f1517] text-[#eef1f0] md:col-span-4"
        >
          <div aria-hidden className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(115deg,transparent_0_26px,rgb(242_182_61/0.18)_26px_28px)]" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <Motorcycle size={40} weight="duotone" className="text-[#f5c400]" />
              <h3 className="mt-10 text-3xl font-semibold tracking-tight md:text-4xl">Motorcycle training</h3>
              <p className="mt-3 max-w-[46ch] leading-relaxed text-[#b4c0c3]">
                The ICBC Motorcycle Skills Assessment course. Theory runs on weekday evenings from 5:30 to 9:30 PM, and on-road training happens when weather permits.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/motorcycle-training" className="inline-flex items-center gap-1.5 rounded-full bg-[#f5c400] px-5 py-3 text-sm font-semibold text-[#15110a]">
                  Motorcycle course
                </Link>
                <a href={`tel:${PHONE.replace(/-/g, "")}`} className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold">
                  Book a seat: {PHONE}
                </a>
              </div>
            </div>
            <p className="font-mono text-6xl font-medium tracking-tighter text-[#f5c400] md:text-7xl">$1000</p>
          </div>
        </Tile>
      </div>
    </section>
  );
}
