import { Link } from "react-router-dom";
import { PageHero, Section } from "../components/Page";
import Team from "../sections/Team";
import Proof from "../sections/Proof";
import { Reveal, Button } from "../ui";
import { REGISTER } from "../data";

export default function About() {
  return (
    <>
      <PageHero title="A relaxed classroom, a patient instructor, and a road you can trust." trail={[{ label: "About Us" }]}
        intro="We started as a Kelowna home based business in 2000 and moved into our Kent Rd building in February 2022. We take pride in the safety and comfort of our students."
        image="/img/storefront.webp" imageAlt="All Weather Driving School storefront" />
      <Section narrow>
        <Reveal>
          <p className="text-xl leading-relaxed text-muted">
            Our five relaxed, outgoing teachers have over 60 years of combined knowledge in the driving industry. We have an extremely high success rate and take pride that our students not only have the skills to pass their road test but to be safe drivers for life.
          </p>
        </Reveal>
      </Section>
      <Proof />
      <Team />
      <Section>
        <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-line bg-surface p-8">
          <p className="max-w-xl text-2xl font-semibold tracking-tight">Ready to learn with someone who has seen every kind of nervous?</p>
          <div className="flex gap-3"><Button href={REGISTER}>Sign up today</Button><Button href="/what-we-offer" variant="ghost">What we offer</Button></div>
        </Reveal>
      </Section>
    </>
  );
}
