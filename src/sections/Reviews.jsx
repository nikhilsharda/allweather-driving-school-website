"use client";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quotes } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { REVIEWS } from "../data";
import { Eyebrow, Reveal } from "../ui";

export default function Reviews() {
  const track = useRef(null);
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  return (
    <section id="students" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Student comments</Eyebrow>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">Passed first time, and not scared anymore.</h2>
          </div>
          <div className="flex gap-2">
            <button aria-label="Previous comments" onClick={() => scroll(-1)} className="grid size-12 place-items-center rounded-full border border-line hover:bg-surface2"><ArrowLeft size={20} /></button>
            <button aria-label="Next comments" onClick={() => scroll(1)} className="grid size-12 place-items-center rounded-full border border-line hover:bg-surface2"><ArrowRight size={20} /></button>
          </div>
        </Reveal>
      </div>
      <ul ref={track} tabIndex={0} aria-label="Student comments" className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(1rem,calc((100vw-72rem)/2+1rem))] pb-2">
        {REVIEWS.map((r) => (
          <li key={r.name} className="w-[82vw] max-w-[360px] shrink-0 snap-start rounded-3xl border border-line bg-surface p-7">
            <Quotes size={28} weight="fill" className="text-accent" />
            <blockquote className="mt-5 text-xl font-medium leading-snug tracking-tight">{`“${r.quote}”`}</blockquote>
            <p className="mt-6 text-sm text-muted">{r.name}, student</p>
          </li>
        ))}
        <li className="grid w-[60vw] max-w-[260px] shrink-0 snap-start place-items-center rounded-3xl bg-accent p-7 text-accent-ink">
          <Link to="/what-past-student-have-to-say" className="text-lg font-semibold underline-offset-4 hover:underline">Read all 13 comments</Link>
        </li>
      </ul>
    </section>
  );
}
