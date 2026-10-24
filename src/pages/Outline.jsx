import { PageHero, Section } from "../components/Page";
import { Reveal, Button } from "../ui";
import { OUTLINE, REGISTER } from "../data";

export default function Outline() {
  return (
    <>
      <PageHero title="Course outline." trail={[{ label: "Our Courses" }, { label: "Course Outline" }]}
        intro="The in-class theory of our GLP course: six lessons, forty-one topics, from risk perception to your ICBC competency test." />
      <Section>
        <ol className="relative space-y-6 border-l border-line pl-6 md:pl-10">
          {OUTLINE.map((l) => (
            <Reveal as="li" key={l.lesson} className="relative">
              <span className="absolute -left-[2.15rem] top-1 grid size-9 place-items-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-ink md:-left-[3.15rem]">{l.lesson}</span>
              <div className="rounded-3xl border border-line bg-surface p-7">
                <h2 className="text-2xl font-semibold tracking-tight">Lesson {l.lesson}</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {l.topics.map((t) => <li key={t} className="rounded-full border border-line bg-surface2 px-4 py-2 text-sm">{t}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-3"><Button href={REGISTER}>Sign up today</Button><Button href="/course-packages" variant="ghost">Course packages</Button></div>
      </Section>
    </>
  );
}
