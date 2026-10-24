"use client";
import { Clock, MapPin, Phone } from "@phosphor-icons/react";
import { ADDRESS, PHONE } from "../data";
import { Reveal } from "../ui";

function Photo({ src, alt, className, imgClass = "h-full w-full object-cover" }) {
  return (
    <Reveal className={`overflow-hidden rounded-3xl border border-line ${className}`}>
      <img src={src} alt={alt} loading="lazy" className={imgClass} />
    </Reveal>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">Come and see where you will learn.</h2>
        <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
          Our Kent Rd building has a bright classroom, a front office and a wall of instructor certificates.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-6">
        {/* Natural aspect ratio so the full sign and logo are always visible, never cropped */}
        <Photo src="/img/storefront.webp" alt="The All Weather Driving School storefront on Kent Rd" className="md:col-span-4 md:row-span-2" imgClass="block aspect-[783/598] w-full object-contain" />
        <Reveal className="flex flex-col justify-center rounded-3xl bg-accent p-7 text-accent-ink md:col-span-2">
          <ul className="space-y-4 text-[15px] font-medium">
            <li className="flex gap-3"><MapPin size={22} weight="bold" className="mt-0.5 shrink-0" />{ADDRESS}</li>
            <li className="flex gap-3"><Clock size={22} weight="bold" className="mt-0.5 shrink-0" />Monday to Friday, 9:00 AM to 5:00 PM</li>
            <li><a href={`tel:${PHONE.replace(/-/g, "")}`} className="flex gap-3 hover:underline"><Phone size={22} weight="bold" className="mt-0.5 shrink-0" />{PHONE}</a></li>
          </ul>
        </Reveal>
        <Photo src="/img/classroom.png" alt="The classroom with road signs on the wall and desks for up to 15 students" className="min-h-56 md:col-span-2" />
        <Photo src="/img/credentials.png" alt="Wall of framed instructor certificates and awards" className="md:col-span-3" imgClass="aspect-[4/3] w-full object-cover" />
        <Photo src="/img/office.png" alt="The front office where lessons and registration are booked" className="md:col-span-3" imgClass="aspect-[4/3] w-full object-cover" />
      </div>
    </section>
  );
}
