"use client";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../ui";

function Count({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export default function Proof() {
  const reduce = useReducedMotion();
  const stats = [
    { n: 60, s: "+", l: "years of combined teaching experience" },
    { n: 2000, s: "", l: "the year we started teaching in Kelowna" },
    { n: 90, s: "", l: "minutes per lesson, with time to preview and review" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
        {/* Award: large, on the page itself with only a soft light behind it, no box or patch */}
        <div className="relative mx-auto grid place-items-center">
          <div aria-hidden className="absolute size-[120%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_45%,transparent),transparent)] blur-2xl" />
          <motion.img
            src="/img/award-2021.png" alt="Consumer Choice Award 2021, Kelowna"
            width="578" height="680" loading="lazy"
            animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-64 w-auto drop-shadow-[0_24px_30px_rgb(0_0_0/0.35)] md:h-80"
          />
        </div>
        <div>
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-tighter md:text-4xl">Kelowna&rsquo;s Consumer Choice Award winner for 2021.</h2>
          <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-5xl font-medium tracking-tighter"><Count to={s.n} suffix={s.s} /></dt>
                <dd className="mt-2 max-w-[22ch] text-sm leading-relaxed text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
