"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

export default function Banner() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 40]);
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8">
      <div ref={ref} className="overflow-hidden rounded-[2rem] border border-line">
        <motion.img style={{ y, scale: 1.12 }} src="/img/hero-banner.webp" width="1672" height="941" loading="lazy"
          alt="A white All Weather Driving School car and a motorcycle parked above Okanagan Lake with the Kelowna hills behind" className="aspect-[16/9] w-full object-cover md:aspect-[21/9]" />
      </div>
    </section>
  );
}
