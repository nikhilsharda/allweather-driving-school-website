"use client";
import { Car, UsersThree, MapPinArea, Wallet, Gear, Motorcycle, Heart, Gift } from "@phosphor-icons/react";
import { INCLUDED } from "../data";
import { Reveal } from "../ui";

const ICONS = { car: Car, users: UsersThree, pin: MapPinArea, wallet: Wallet, gear: Gear, moto: Motorcycle, senior: Heart, gift: Gift };

export default function Included() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">The small things that make learning easier.</h2>
          <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-muted">Local since 2000, and set up for how people actually learn to drive.</p>
        </Reveal>
        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {INCLUDED.map((x, i) => {
            const Icon = ICONS[x.icon];
            return (
              <Reveal as="li" key={x.title} delay={(i % 2) * 0.08} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-ink"><Icon size={24} weight="duotone" /></span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{x.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{x.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
