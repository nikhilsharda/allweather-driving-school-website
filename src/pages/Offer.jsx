import { Check, Motorcycle, UsersThree } from "@phosphor-icons/react";
import { PageHero, Section } from "../components/Page";
import { Reveal, Button } from "../ui";
import { OFFER, REGISTER } from "../data";

export default function Offer() {
  return (
    <>
      <PageHero title="What we offer." trail={[{ label: "About Us", to: "/about-us" }, { label: "What We Offer" }]}
        intro="Lessons for every age and stage, in a car or on a bike, in whatever weather Kelowna sends." />
      <Section>
        <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
          {OFFER.map((o, i) => (
            <Reveal as="li" key={o} delay={(i % 2) * 0.05} className="flex items-start gap-3 border-b border-line pb-4 text-lg">
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent text-accent-ink"><Check size={16} weight="bold" /></span>{o}
            </Reveal>
          ))}
        </ul>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-surface2 p-8">
            <UsersThree size={36} weight="duotone" className="text-accent-text" />
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">Small GLP classes</h2>
            <p className="mt-3 leading-relaxed text-muted">All GLP classes have no more than 15 students for more individualized attention, and every GLP student is taught highway and night driving during their program.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-[#0f1517] p-8 text-[#eef1f0]">
            <Motorcycle size={36} weight="duotone" className="text-[#f5c400]" />
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">Motorcycle training, one on one</h2>
            <p className="mt-3 leading-relaxed text-[#b4c0c3]">Train one on one with the instructor. Our radio and Bluetooth communication is the only one in Kelowna.</p>
            <div className="mt-6"><Button href="/motorcycle-training">Motorcycle courses</Button></div>
          </Reveal>
        </div>
        <div className="mt-10"><Button href={REGISTER}>Sign up today</Button></div>
      </Section>
    </>
  );
}
