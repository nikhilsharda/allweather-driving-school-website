import Hero from "../sections/Hero";
import Proof from "../sections/Proof";
import Services from "../sections/Services";
import Included from "../sections/Included";
import Weather from "../sections/Weather";
import Pricing from "../sections/Pricing";
import TeamPreview from "../sections/TeamPreview";
import Visit from "../sections/Visit";
import Reviews from "../sections/Reviews";
import Resources from "../sections/Resources";
import { Link } from "react-router-dom";
import { Reveal } from "../ui";
import { REGISTER } from "../data";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Services />
      <Included />
      <Weather />
      <Pricing />
      <TeamPreview />
      <Visit />
      <Reviews />
      <Resources />
      <section className="px-4 pb-12 pt-8">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-accent p-8 text-accent-ink md:p-14">
          <div aria-hidden className="absolute -right-24 -top-24 size-96 rounded-full border-[48px] border-black/10" />
          <h2 className="relative max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tighter md:text-6xl">Your road to success starts here.</h2>
          <Link to={REGISTER} className="relative mt-8 inline-flex rounded-full bg-[#15110a] px-7 py-4 text-[15px] font-semibold text-[#f5c400] transition-transform hover:-translate-y-0.5 active:scale-[0.98]">Sign up today</Link>
        </Reveal>
      </section>
    </>
  );
}
