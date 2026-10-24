import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { PageHero, Section, Accordion } from "../components/Page";
import { Reveal } from "../ui";
import { FAQ } from "../data";

export default function Faq() {
  return (
    <>
      <PageHero title="Frequently asked questions." trail={[{ label: "FAQ" }]} intro="Quick answers about insurance, your N stage and defensive driving." />
      <Section narrow><Accordion items={FAQ} /></Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {[["/faq/road-safety-myths", "Road safety myths", "Ten common beliefs about crashes, tested against the facts."],
            ["/faq/fun-driving-car-facts", "Fun driving and car facts", "Thirteen things you did not know about cars and roads."]].map(([to, t, d], i) => (
            <Reveal key={to} delay={i * 0.08}>
              <Link to={to} className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-8 transition-colors hover:bg-surface2">
                <div><h2 className="text-2xl font-semibold tracking-tight">{t}</h2><p className="mt-3 text-muted">{d}</p></div>
                <ArrowUpRight size={28} className="mt-10 text-accent-text transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
