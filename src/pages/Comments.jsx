import { Quotes } from "@phosphor-icons/react";
import { PageHero, Section } from "../components/Page";
import { Reveal, Button } from "../ui";
import { COMMENTS, REGISTER } from "../data";

export default function Comments() {
  return (
    <>
      <PageHero title="What past students have to say." trail={[{ label: "Student Comments" }]}
        intro="Thirteen of our students, in their own words. Many passed first try." />
      <Section>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3 [&>*]:mb-4">
          {COMMENTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.05} className="break-inside-avoid rounded-3xl border border-line bg-surface p-7">
              <Quotes size={26} weight="fill" className="text-accent" />
              <p className="mt-4 text-lg leading-snug tracking-tight">{`“${c.text}”`}</p>
              <p className="mt-5 text-sm text-muted">{c.name}, {c.date}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={REGISTER}>Sign up today</Button>
          <Button href="/contact-us" variant="ghost">Share your own story</Button>
        </div>
      </Section>
    </>
  );
}
