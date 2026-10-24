import { PageHero, Section, Accordion } from "../components/Page";
import { TESTING } from "../data";

export default function Testing() {
  return (
    <>
      <PageHero title="Testing advice." trail={[{ label: "Resources" }, { label: "Testing Advice" }]}
        intro="What to bring and what to expect when you get your learner's licence. Questions? Call 250-763-6562." />
      <Section narrow><Accordion items={TESTING.map((t) => ({ q: t.h, a: t.p }))} /></Section>
    </>
  );
}
