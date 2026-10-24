"use client";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { TEAM } from "../data";
import { Reveal, Button } from "../ui";

/* Six instructors, six cells: one lead tile spanning two rows, then 2 + 3 beside it. */
const SPANS = [
  "col-span-2 md:col-span-6 md:row-span-2",
  "md:col-span-3", "md:col-span-3",
  "md:col-span-2", "md:col-span-2", "col-span-2 md:col-span-2",
];

export default function TeamPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">Patient teachers who have seen every kind of nervous.</h2>
        <Button href="/about-us" variant="ghost">Read their stories <ArrowRight size={18} weight="bold" /></Button>
      </Reveal>
      <ul className="mt-12 grid grid-cols-2 gap-4 md:auto-rows-[250px] md:grid-cols-12">
        {TEAM.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 0.05} className={`${SPANS[i]} min-h-[190px]`}>
            <Link to="/about-us" className="group relative block h-full overflow-hidden rounded-3xl border border-line">
              <img src={t.photo} alt={`${t.name}, ${t.role.toLowerCase()}`} loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "object-[30%_30%]" : i < 3 ? "object-[25%_25%]" : "object-[12%_22%]"}`} />
              <span className="absolute inset-x-0 bottom-0 block bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-14 text-white">
                <span className="block text-base font-semibold leading-tight">{t.name}</span>
                <span className="block text-xs text-white/75">{t.role}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
