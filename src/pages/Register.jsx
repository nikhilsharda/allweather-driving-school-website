"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Car, Check, Copy, Motorcycle, PencilSimple, SteeringWheel, Bank, Money, Envelope, PaperPlaneTilt } from "@phosphor-icons/react";
import { PageHero } from "../components/Page";
import { Field, inputCls } from "../components/Field";
import { COURSES, PAY_EMAIL, PHONE } from "../data";
import { submitForm } from "../submit";
import { ease } from "../ui";

const STEPS = ["Course", "About you", "Address", "Start and payment", "Review"];
const ICONS = { steering: SteeringWheel, car: Car, moto: Motorcycle };
const PAYMENTS = [
  { id: "Cash", icon: Money, text: "Pay at the office" },
  { id: "Cheque", icon: Bank, text: "Drop off or mail in" },
  { id: "E-Transfer", icon: Envelope, text: PAY_EMAIL },
];
const EMPTY = { course: "", first: "", last: "", email: "", phone: "", street: "", line2: "", city: "Kelowna", province: "BC", postal: "", payment: "", asap: false, start: "", notes: "", website: "" };
const KEY = "awds-registration-draft";

const iso = (d) => d.toISOString().slice(0, 10);
const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d; };
const nextMonday = () => { const d = new Date(); d.setDate(d.getDate() + ((8 - d.getDay()) % 7 || 7)); return d; };

function validate(step, d) {
  const e = {};
  if (step === 0 && !d.course) e.course = "Choose a course to continue.";
  if (step === 1) {
    if (!d.first.trim()) e.first = "Enter your first name.";
    if (!d.last.trim()) e.last = "Enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) e.email = "Enter a valid email, like name@example.com.";
    if (d.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10 digit phone number.";
  }
  if (step === 2) {
    if (!d.street.trim()) e.street = "Enter your street address.";
    if (!d.city.trim()) e.city = "Enter your city.";
    if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(d.postal.trim())) e.postal = "Use a Canadian postal code, like V1Y 7S6.";
  }
  if (step === 3) {
    if (!d.payment) e.payment = "Choose how you will pay.";
    if (!d.asap && !d.start) e.start = "Pick a start date, or choose As soon as possible.";
    if (!d.asap && d.start && d.start < iso(new Date())) e.start = "Choose today or a later date.";
  }
  return e;
}

export default function Register() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [d, setD] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("form"); // form | sending | done
  const [result, setResult] = useState(null);
  const [failed, setFailed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try { const s = localStorage.getItem(KEY); if (s) setD({ ...EMPTY, ...JSON.parse(s) }); } catch {}
  }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} }, [d]);

  const course = COURSES.find((c) => c.id === d.course);
  const set = (k) => (e) => { setD((p) => ({ ...p, [k]: e.target.value })); if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined })); };
  const pick = (patch) => { setD((p) => ({ ...p, ...patch })); setErrors({}); };

  const go = (to) => { setDir(to > step ? 1 : -1); setStep(to); window.scrollTo({ top: 120, behavior: reduce ? "auto" : "smooth" }); };
  const next = () => {
    const e = validate(step, d);
    setErrors(e);
    if (Object.keys(e).length === 0) go(step + 1);
  };

  const fields = useMemo(() => ({
    Course: course?.title, Name: `${d.first} ${d.last}`.trim(), Email: d.email, Phone: d.phone,
    Address: [d.street, d.line2, d.city, d.province, d.postal.toUpperCase()].filter(Boolean).join(", "),
    "Payment method": d.payment, "Start date": d.asap ? "As soon as possible" : d.start, Notes: d.notes,
  }), [d, course]);

  const send = async () => {
    for (let s = 0; s < 4; s++) { const e = validate(s, d); if (Object.keys(e).length) { setErrors(e); go(s); return; } }
    if (d.website) return; // honeypot
    setState("sending"); setFailed(false);
    try {
      const r = await submitForm({ subject: `Student registration: ${fields.Name} (${course.title})`, fields });
      setResult(r); setState("done");
      try { localStorage.removeItem(KEY); } catch {}
    } catch { setFailed(true); setState("form"); }
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(result.body); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  };

  if (state === "done") {
    return (
      <>
        <PageHero title={`You are on the road, ${d.first || "driver"}.`} trail={[{ label: "Student Registration" }]} />
        <section className="mx-auto max-w-3xl px-4 py-10">
          <motion.div initial={reduce ? false : { scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="rounded-[2rem] border border-line bg-surface p-8 md:p-12">
            <div className="relative mb-6 grid size-20 place-items-center">
              {[0, 1].map((i) => <motion.span key={i} aria-hidden className="absolute inset-0 rounded-full border-2 border-accent" initial={{ scale: 0.6, opacity: 0.8 }} animate={{ scale: 1.8, opacity: 0 }} transition={{ duration: 1.6, delay: i * 0.5, repeat: reduce ? 0 : 2, ease: "easeOut" }} />)}
              <span className="grid size-20 place-items-center rounded-full bg-accent text-accent-ink"><Check size={40} weight="bold" /></span>
            </div>
            {result.mode === "sent" ? (
              <p className="text-lg text-muted">Your registration has reached the office. We will confirm your start date by phone or email during office hours, Monday to Friday, 9 to 5.</p>
            ) : (
              <p className="text-lg text-muted">Your email app should have opened with everything filled in. <strong className="text-ink">Press send in that email to finish registering.</strong> If nothing opened, use the buttons below.</p>
            )}
            <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {Object.entries(fields).filter(([, v]) => v).map(([k, v]) => (
                <div key={k}><dt className="text-xs uppercase tracking-wide text-muted">{k}</dt><dd className="mt-0.5 font-medium">{v}</dd></div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              {result.mode === "email" && <a href={result.href} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-accent-ink"><PaperPlaneTilt size={18} weight="bold" /> Open email again</a>}
              <button onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[15px] font-semibold hover:bg-surface2"><Copy size={18} />{copied ? "Copied" : "Copy details"}</button>
              <a href={`tel:${PHONE.replace(/-/g, "")}`} className="inline-flex items-center rounded-full border border-line px-6 py-3.5 text-[15px] font-semibold hover:bg-surface2">Call {PHONE}</a>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  const variants = { enter: (x) => ({ opacity: 0, x: reduce ? 0 : 40 * x }), center: { opacity: 1, x: 0 }, exit: (x) => ({ opacity: 0, x: reduce ? 0 : -40 * x }) };
  const progress = (step / (STEPS.length - 1)) * 100;

  return (
    <>
      <PageHero title="Register for your lessons." trail={[{ label: "Student Registration" }]}
        intro="Five quick steps. Your answers save as you go, so you can come back to finish." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-[2rem] border border-line bg-surface p-6 md:p-10">
          {/* Road progress: the car drives along the lane as you complete steps */}
          <div className="mb-10" aria-label={`Step ${step + 1} of ${STEPS.length}: ${STEPS[step]}`}>
            <div className="relative h-10">
              <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-surface2" />
              <motion.div className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-accent" initial={false} animate={{ width: `${progress}%` }} transition={{ type: "spring", stiffness: 90, damping: 18 }} />
              <motion.span className="absolute top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-ink shadow-md" initial={false}
                animate={{ left: `calc(${progress}% - ${progress * 0.4}px)` }} transition={{ type: "spring", stiffness: 90, damping: 18 }}><Car size={22} weight="fill" /></motion.span>
            </div>
            <ol className="mt-3 hidden justify-between text-xs sm:flex">
              {STEPS.map((s, i) => <li key={s} className={i <= step ? "font-semibold text-ink" : "text-muted"}>{s}</li>)}
            </ol>
          </div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div key={step} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease }}
              onKeyDown={(e) => { if (e.key === "Enter" && e.target.tagName !== "TEXTAREA" && step < 4) { e.preventDefault(); next(); } }}>
              {step === 0 && (
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">What would you like to learn?</h2>
                  <div role="radiogroup" aria-label="Course" className="mt-6 grid gap-3 sm:grid-cols-2">
                    {COURSES.map((c) => {
                      const Icon = ICONS[c.icon]; const on = d.course === c.id;
                      return (
                        <button key={c.id} role="radio" aria-checked={on} onClick={() => pick({ course: c.id })}
                          className={`relative rounded-2xl border p-5 text-left transition-colors ${on ? "border-accent bg-accent/15" : "border-line hover:bg-surface2"}`}>
                          <span className="flex items-start justify-between">
                            <Icon size={30} weight="duotone" className="text-accent-text" />
                            {on && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="grid size-6 place-items-center rounded-full bg-accent text-accent-ink"><Check size={14} weight="bold" /></motion.span>}
                          </span>
                          <span className="mt-4 block text-lg font-semibold tracking-tight">{c.title}</span>
                          <span className="mt-1 block font-mono text-sm">{c.price} <span className="text-muted">{c.sub}</span></span>
                          <span className="mt-2 block text-sm leading-relaxed text-muted">{c.text}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.course && <p role="alert" className="mt-3 text-sm font-medium text-[#c2410c] dark:text-[#fb923c]">{errors.course}</p>}
                </div>
              )}
              {step === 1 && (
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Who is learning?</h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Field id="first" label="First name" error={errors.first}><input id="first" autoFocus autoComplete="given-name" value={d.first} onChange={set("first")} className={inputCls(errors.first)} aria-invalid={!!errors.first} /></Field>
                    <Field id="last" label="Last name" error={errors.last}><input id="last" autoComplete="family-name" value={d.last} onChange={set("last")} className={inputCls(errors.last)} aria-invalid={!!errors.last} /></Field>
                    <Field id="email" label="Email" error={errors.email}><input id="email" type="email" inputMode="email" autoComplete="email" value={d.email} onChange={set("email")} className={inputCls(errors.email)} aria-invalid={!!errors.email} /></Field>
                    <Field id="phone" label="Phone" error={errors.phone} hint="We call or text to confirm your start."><input id="phone" type="tel" inputMode="tel" autoComplete="tel" value={d.phone} onChange={set("phone")} className={inputCls(errors.phone)} aria-invalid={!!errors.phone} /></Field>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Where do you live?</h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Field id="street" label="Street address" error={errors.street} className="sm:col-span-2"><input id="street" autoFocus autoComplete="address-line1" value={d.street} onChange={set("street")} className={inputCls(errors.street)} aria-invalid={!!errors.street} /></Field>
                    <Field id="line2" label="Address line 2 (optional)" className="sm:col-span-2"><input id="line2" autoComplete="address-line2" value={d.line2} onChange={set("line2")} className={inputCls()} /></Field>
                    <Field id="city" label="City" error={errors.city}><input id="city" autoComplete="address-level2" value={d.city} onChange={set("city")} className={inputCls(errors.city)} /></Field>
                    <Field id="province" label="Province"><select id="province" value={d.province} onChange={set("province")} className={inputCls()}>{["BC", "AB", "SK", "MB", "ON", "QC", "NB", "NS", "PE", "NL", "YT", "NT", "NU"].map((p) => <option key={p}>{p}</option>)}</select></Field>
                    <Field id="postal" label="Postal code" error={errors.postal}><input id="postal" autoComplete="postal-code" value={d.postal} onChange={set("postal")} className={`${inputCls(errors.postal)} uppercase`} aria-invalid={!!errors.postal} /></Field>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">When do you want to start?</h2>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[["Next Monday", () => pick({ asap: false, start: iso(nextMonday()) })], ["In two weeks", () => pick({ asap: false, start: iso(addDays(14)) })], ["In a month", () => pick({ asap: false, start: iso(addDays(30)) })], ["As soon as possible", () => pick({ asap: true, start: "" })]].map(([l, fn]) => {
                      const on = l === "As soon as possible" ? d.asap : false;
                      return <button key={l} onClick={fn} aria-pressed={on} className={`rounded-full px-5 py-2.5 text-sm font-semibold ${on ? "bg-accent text-accent-ink" : "border border-line hover:bg-surface2"}`}>{l}</button>;
                    })}
                  </div>
                  <Field id="start" label="Or choose a date" error={errors.start} className="mt-5 max-w-xs">
                    <input id="start" type="date" min={iso(new Date())} value={d.start} onChange={(e) => pick({ start: e.target.value, asap: false })} className={inputCls(errors.start)} aria-invalid={!!errors.start} />
                  </Field>
                  <p id="pay-l" className="mb-3 mt-8 text-sm font-medium">How will you pay?</p>
                  <div role="radiogroup" aria-labelledby="pay-l" className="grid gap-3 sm:grid-cols-3">
                    {PAYMENTS.map((p) => {
                      const on = d.payment === p.id; const Icon = p.icon;
                      return (
                        <button key={p.id} role="radio" aria-checked={on} onClick={() => pick({ payment: p.id })} className={`rounded-2xl border p-4 text-left ${on ? "border-accent bg-accent/15" : "border-line hover:bg-surface2"}`}>
                          <Icon size={26} weight="duotone" className="text-accent-text" />
                          <span className="mt-3 block font-semibold">{p.id}</span>
                          <span className="mt-0.5 block break-words text-xs text-muted">{p.text}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.payment && <p role="alert" className="mt-3 text-sm font-medium text-[#c2410c] dark:text-[#fb923c]">{errors.payment}</p>}
                  <Field id="notes" label="Anything we should know? (optional)" className="mt-8"><textarea id="notes" rows={3} value={d.notes} onChange={set("notes")} placeholder="Nervous driver, prefer manual, preferred times" className={inputCls()} /></Field>
                  <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={d.website} onChange={set("website")} className="absolute -left-[9999px] h-0 w-0 opacity-0" name="website" />
                </div>
              )}
              {step === 4 && (
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Check and send.</h2>
                  <dl className="mt-6 divide-y divide-line rounded-2xl border border-line">
                    {[["Course", fields.Course, 0], ["Name", fields.Name, 1], ["Email", fields.Email, 1], ["Phone", fields.Phone, 1], ["Address", fields.Address, 2], ["Start date", fields["Start date"], 3], ["Payment", fields["Payment method"], 3], ["Notes", fields.Notes, 3]].filter(([, v]) => v).map(([k, v, s]) => (
                      <div key={k} className="flex items-start justify-between gap-4 px-5 py-3.5">
                        <div><dt className="text-xs uppercase tracking-wide text-muted">{k}</dt><dd className="mt-0.5 font-medium">{v}</dd></div>
                        <button onClick={() => go(s)} aria-label={`Edit ${k}`} className="grid size-9 shrink-0 place-items-center rounded-full hover:bg-surface2"><PencilSimple size={18} /></button>
                      </div>
                    ))}
                  </dl>
                  {failed && <p role="alert" className="mt-4 rounded-xl border border-[#c2410c] p-4 text-sm">Something went wrong sending your registration. Please try again, or call {PHONE}.</p>}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <button onClick={() => go(step - 1)} disabled={step === 0} className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted hover:text-ink disabled:invisible"><ArrowLeft size={18} weight="bold" /> Back</button>
            {step < 4 ? (
              <button onClick={next} className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-accent-ink transition-transform active:scale-[0.97]">Continue <ArrowRight size={18} weight="bold" /></button>
            ) : (
              <button onClick={send} disabled={state === "sending"} className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-accent-ink transition-transform active:scale-[0.97] disabled:opacity-70">
                {state === "sending" ? "Sending" : "Send registration"} <PaperPlaneTilt size={18} weight="bold" />
              </button>
            )}
          </div>
        </div>

        <aside className="h-fit rounded-[2rem] border border-line bg-surface2 p-7 lg:sticky lg:top-28">
          <h2 className="text-lg font-semibold tracking-tight">Your registration</h2>
          <AnimatePresence mode="wait">
            <motion.div key={d.course} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="mt-4">
              {course ? (<><p className="text-xl font-semibold tracking-tight">{course.title}</p><p className="mt-1 font-mono text-3xl font-medium tracking-tighter">{course.price}</p><p className="text-sm text-muted">{course.sub}</p></>) : <p className="text-sm text-muted">Pick a course to see the price.</p>}
            </motion.div>
          </AnimatePresence>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {[["Contact details", d.first && d.email && d.phone], ["Address", d.street && d.postal], ["Start date", d.asap || d.start], ["Payment", d.payment]].map(([l, ok]) => (
              <li key={l} className="flex items-center gap-2"><span className={`grid size-5 place-items-center rounded-full ${ok ? "bg-accent text-accent-ink" : "border border-line"}`}>{ok && <Check size={12} weight="bold" />}</span>{l}</li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-5 text-sm text-muted">Prefer to talk? Call <a className="font-medium text-ink hover:underline" href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>, Monday to Friday, 9 to 5.</p>
        </aside>
      </section>
    </>
  );
}
