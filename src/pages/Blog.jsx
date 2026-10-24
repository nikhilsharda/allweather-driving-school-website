import { ArrowUpRight } from "@phosphor-icons/react";
import { PageHero, Section } from "../components/Page";
import { POST } from "../data";

export default function Blog() {
  return (
    <>
      <PageHero title={POST.title} trail={[{ label: "Resources" }, { label: "Blogs & News" }]} />
      <Section narrow>
        <article className="space-y-6 text-lg leading-relaxed text-muted">
          {POST.paras.map((p) => <p key={p}>{p}</p>)}
          <a href={POST.sourceUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-base font-semibold text-accent-text hover:underline">Originally reported by {POST.source} <ArrowUpRight size={16} weight="bold" /></a>
        </article>
      </Section>
    </>
  );
}
