"use client";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretDown, List, X, Phone, EnvelopeSimple, MapPin, LinkedinLogo, InstagramLogo, Clock, ArrowUpRight } from "@phosphor-icons/react";
import Logo from "../Logo";
import { ADDRESS, EMAIL, NAV, PHONE, REGISTER, SOCIAL, SITE, THEORY_2026, THEORY_2027 } from "../data";
import { ease } from "../ui";
import { pageview } from "../analytics";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => { pageview(pathname + (hash || "")); }, [pathname]);
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Dropdown({ group }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button aria-expanded={open} onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface2 hover:text-ink">
        {group.label} <CaretDown size={12} weight="bold" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease }}
            className="absolute left-0 top-full z-50 mt-1 w-64 rounded-2xl border border-line bg-surface p-2 shadow-[var(--shadow)]">
            {group.items.map((i) => (
              <li key={i.to}>
                <NavLink to={i.to} className={({ isActive }) => `block rounded-xl px-3.5 py-2.5 text-sm hover:bg-surface2 ${isActive ? "font-semibold text-accent-text" : ""}`}>{i.label}</NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc.pathname]);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 rounded-full border border-line bg-surface/85 pl-4 pr-2 sm:pl-5 backdrop-blur-xl">
        <Link to="/" aria-label="All Weather Driving School, home"><span className="sm:hidden"><Logo compact /></span><span className="hidden sm:inline-block"><Logo /></span></Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => n.items ? <Dropdown key={n.label} group={n} /> : (
            <li key={n.to}><NavLink to={n.to} className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface2 hover:text-ink">{n.label}</NavLink></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link to={REGISTER} className="inline-flex whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-[13px] font-semibold sm:px-5 sm:text-sm text-accent-ink transition-transform active:scale-[0.97]">Sign up today</Link>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-full hover:bg-surface2 lg:hidden">
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25, ease }}
            className="mx-auto mt-2 max-h-[75dvh] max-w-6xl overflow-y-auto rounded-3xl border border-line bg-surface p-4 lg:hidden">
            {NAV.map((n) => n.items ? (
              <div key={n.label} className="mb-3">
                <p className="px-3 pb-1 pt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">{n.label}</p>
                {n.items.map((i) => <Link key={i.to} to={i.to} className="block rounded-xl px-3 py-2.5 hover:bg-surface2">{i.label}</Link>)}
              </div>
            ) : <Link key={n.to} to={n.to} className="block rounded-xl px-3 py-2.5 font-medium hover:bg-surface2">{n.label}</Link>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function InfoStrip() {
  return (
    <section aria-label="Office hours and motorcycle theory" className="mx-auto max-w-6xl px-4 pb-4">
      <div className="grid gap-4 rounded-3xl border border-line bg-surface p-6 md:grid-cols-3 md:p-8">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold"><Clock size={18} weight="bold" className="text-accent-text" /> Office hours</p>
          <p className="mt-2 text-sm text-muted">Monday to Friday, 9:00 AM to 5:00 PM</p>
        </div>
        <div>
          <p className="text-sm font-semibold">GLP theory calendar</p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <a href={THEORY_2026} className="inline-flex items-center gap-1 text-accent-text hover:underline">2026 dates <ArrowUpRight size={14} weight="bold" /></a>
            <a href={THEORY_2027} className="inline-flex items-center gap-1 text-accent-text hover:underline">2027 dates <ArrowUpRight size={14} weight="bold" /></a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Motorcycle theory</p>
          <p className="mt-2 text-sm text-muted">Weekday evenings, 5:30 to 9:30 PM. On-road training when weather permits. Call <a href={`tel:${PHONE.replace(/-/g, "")}`} className="font-medium text-ink hover:underline">{PHONE}</a> to book your seat.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-8 pt-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo footer />
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-muted">Cars, automatic and standard, and motorcycles. Serving Kelowna, BC since 2000.</p>
          <div className="mt-5 flex gap-3">
            <a aria-label="All Weather Driving School on LinkedIn" href={SOCIAL.linkedin} target="_blank" rel="noopener" className="grid size-11 place-items-center rounded-full border border-line hover:bg-surface2"><LinkedinLogo size={20} /></a>
            <a aria-label="All Weather Driving School on Instagram" href={SOCIAL.instagram} target="_blank" rel="noopener" className="grid size-11 place-items-center rounded-full border border-line hover:bg-surface2"><InstagramLogo size={20} /></a>
          </div>
        </div>
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex items-start gap-2"><MapPin size={18} className="mt-0.5 shrink-0" />{ADDRESS}</li>
          <li><a href={`tel:${PHONE.replace(/-/g, "")}`} className="flex items-center gap-2 hover:text-ink"><Phone size={18} />{PHONE}</a></li>
          <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-ink"><EnvelopeSimple size={18} />{EMAIL}</a></li>
        </ul>
        {NAV.filter((n) => n.items).slice(0, 2).map((g) => (
          <ul key={g.label} className="space-y-3 text-sm text-muted">
            <li className="font-semibold text-ink">{g.label}</li>
            {g.items.map((i) => <li key={i.to}><Link className="hover:text-ink" to={i.to}>{i.label}</Link></li>)}
          </ul>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 text-xs text-muted">&copy; {new Date().getFullYear()} All Weather Driving School Ltd. 1931 Kent Rd, Kelowna.</p>
    </footer>
  );
}

export default function Layout() {
  const reduce = useReducedMotion();
  const loc = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main key={loc.pathname} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <InfoStrip />
      <Footer />
    </>
  );
}
