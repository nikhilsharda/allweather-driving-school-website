"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, EnvelopeSimple, MapPin, PaperPlaneTilt, Phone, LinkedinLogo, InstagramLogo, Clock } from "@phosphor-icons/react";
import { PageHero } from "../components/Page";
import { Field, inputCls } from "../components/Field";
import { ADDRESS, EMAIL, PHONE, SOCIAL } from "../data";
import { submitForm } from "../submit";
import { ease } from "../ui";

const TOPICS = ["Car lessons", "GLP course", "Motorcycle", "Road test", "Something else"];

export default function Contact() {
  const [d, setD] = useState({ first: "", last: "", email: "", topic: "", message: "", website: "" });
  const [err, setErr] = useState({});
  const [state, setState] = useState("form");
  const [res, setRes] = useState(null);
  const set = (k) => (e) => { setD((p) => ({ ...p, [k]: e.target.value })); setErr((x) => ({ ...x, [k]: undefined })); };

  const send = async (e) => {
    e.preventDefault();
    const x = {};
    if (!d.first.trim()) x.first = "Enter your first name.";
    if (!d.last.trim()) x.last = "Enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) x.email = "Enter a valid email address.";
    if (d.message.trim().length < 5) x.message = "Tell us how we can help.";
    setErr(x);
    if (Object.keys(x).length || d.website) return;
    setState("sending");
    try {
      const r = await submitForm({ subject: `Website message from ${d.first} ${d.last}${d.topic ? `: ${d.topic}` : ""}`, fields: { Name: `${d.first} ${d.last}`, Email: d.email, Topic: d.topic, Message: d.message },
        form: "contact", course: d.topic,
        lead: { first: d.first.trim(), last: d.last.trim(), email: d.email.trim(), description: `WEBSITE ENQUIRY${d.topic ? ` (${d.topic})` : ""}\n${d.message}` } });
      setRes(r); setState("done");
    } catch { setState("form"); setErr({ message: `Could not send. Please email ${EMAIL} or call ${PHONE}.` }); }
  };

  return (
    <>
      <PageHero title="Let us help you get started." trail={[{ label: "Contact Us" }]} intro="Ask a question, check a start date or tell us what worries you about driving." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-line bg-surface p-6 md:p-10">
          <AnimatePresence mode="wait">
            {state === "done" ? (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 140, damping: 16 }}>
                <span className="grid size-16 place-items-center rounded-full bg-accent text-accent-ink"><Check size={32} weight="bold" /></span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight">Thanks, {d.first}.</h2>
                <p className="mt-3 max-w-[50ch] text-lg text-muted">{res.mode === "sent" ? "Your message has reached the office. We reply during office hours, Monday to Friday, 9 to 5." : "Your email app should have opened with your message ready. Press send in that email to finish."}</p>
                {res.mode === "email" && <a href={res.href} className="mt-6 inline-flex rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-accent-ink">Open email again</a>}
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={send} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease }}>
                <p id="topic-l" className="mb-3 text-sm font-medium">What is this about?</p>
                <div role="radiogroup" aria-labelledby="topic-l" className="flex flex-wrap gap-2">
                  {TOPICS.map((t) => <button type="button" key={t} role="radio" aria-checked={d.topic === t} onClick={() => setD((p) => ({ ...p, topic: p.topic === t ? "" : t }))}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${d.topic === t ? "bg-accent text-accent-ink" : "border border-line hover:bg-surface2"}`}>{t}</button>)}
                </div>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <Field id="c-first" label="First name" error={err.first}><input id="c-first" autoComplete="given-name" value={d.first} onChange={set("first")} className={inputCls(err.first)} /></Field>
                  <Field id="c-last" label="Last name" error={err.last}><input id="c-last" autoComplete="family-name" value={d.last} onChange={set("last")} className={inputCls(err.last)} /></Field>
                  <Field id="c-email" label="Email" error={err.email} className="sm:col-span-2"><input id="c-email" type="email" autoComplete="email" value={d.email} onChange={set("email")} className={inputCls(err.email)} /></Field>
                  <Field id="c-msg" label="Message" error={err.message} className="sm:col-span-2"><textarea id="c-msg" rows={5} value={d.message} onChange={set("message")} className={inputCls(err.message)} /></Field>
                </div>
                <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={d.website} onChange={set("website")} className="absolute -left-[9999px] h-0 w-0 opacity-0" name="website" />
                <button type="submit" disabled={state === "sending"} className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-accent-ink transition-transform active:scale-[0.97] disabled:opacity-70">
                  {state === "sending" ? "Sending" : "Send message"} <PaperPlaneTilt size={18} weight="bold" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
        <aside className="grid gap-4 self-start">
          <div className="rounded-[2rem] bg-accent p-7 text-accent-ink">
            <ul className="space-y-4 font-medium">
              <li className="flex gap-3"><MapPin size={22} weight="bold" className="mt-0.5 shrink-0" />{ADDRESS}</li>
              <li><a className="flex gap-3 hover:underline" href={`tel:${PHONE.replace(/-/g, "")}`}><Phone size={22} weight="bold" className="mt-0.5 shrink-0" />{PHONE}</a></li>
              <li><a className="flex gap-3 break-all hover:underline" href={`mailto:${EMAIL}`}><EnvelopeSimple size={22} weight="bold" className="mt-0.5 shrink-0" />{EMAIL}</a></li>
              <li className="flex gap-3"><Clock size={22} weight="bold" className="mt-0.5 shrink-0" />Monday to Friday, 9:00 AM to 5:00 PM</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-line"><img src="/img/office.png" alt="The All Weather Driving School front office" loading="lazy" className="aspect-[4/3] w-full object-cover" /></div>
          <div className="flex gap-3 rounded-[2rem] border border-line bg-surface p-5">
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold hover:bg-surface2"><LinkedinLogo size={20} /> LinkedIn</a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold hover:bg-surface2"><InstagramLogo size={20} /> Instagram</a>
          </div>
        </aside>
      </section>
    </>
  );
}
