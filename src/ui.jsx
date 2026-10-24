"use client";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

export const ease = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </Tag>
  );
}

/* Magnetic pill button: pulls toward the pointer using motion values, no React state. */
export function Button({ href, children, variant = "primary", className = "", ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const reset = () => { x.set(0); y.set(0); };
  const styles = {
    primary: "bg-accent text-accent-ink hover:brightness-105",
    ghost: "border border-line text-ink hover:bg-surface2",
  }[variant];
  const internal = typeof href === "string" && href.startsWith("/");
  const Comp = internal ? MotionLink : motion.a;
  const target = internal ? { to: href } : { href };
  return (
    <Comp
      ref={ref}
      {...target}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors ${styles} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({ children }) {
  return <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-accent-text">{children}</p>;
}
