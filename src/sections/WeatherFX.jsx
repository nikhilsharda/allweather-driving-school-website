"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/* Canvas weather: depth-layered particles drawn on one canvas, paused when off screen.
   rain: slanted streaks plus splashes and windshield droplets; snow: soft blurred flakes with wind drift;
   fog: slow drifting noise banks; sun: rays and floating dust motes. */
export default function WeatherFX({ kind }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let w = 0, h = 0, raf = 0, visible = true, t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = cv.getBoundingClientRect();
      w = r.width; h = r.height;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(cv);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 }); io.observe(cv);

    const rnd = (a, b) => a + Math.random() * (b - a);
    const N = { rain: 170, snow: 140, fog: 7, sun: 46 }[kind];
    const parts = Array.from({ length: N }, () => {
      const z = Math.random(); // 0 far, 1 near
      return { x: rnd(0, 1), y: rnd(0, 1), z, s: rnd(0.6, 1.4), p: rnd(0, 6.28) };
    });
    const drops = []; // windshield droplets (rain)
    const splashes = [];
    const noise = (() => { // soft fog sprite
      const c = document.createElement("canvas"); c.width = c.height = 256;
      const g = c.getContext("2d");
      for (let i = 0; i < 26; i++) {
        const x = rnd(40, 216), y = rnd(60, 196), r = rnd(40, 90);
        const gr = g.createRadialGradient(x, y, 0, x, y, r);
        gr.addColorStop(0, "rgba(255,255,255,0.16)"); gr.addColorStop(1, "rgba(255,255,255,0)");
        g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
      }
      return c;
    })();

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible || document.hidden) return;
      t += 1 / 60;
      ctx.clearRect(0, 0, w, h);

      if (kind === "rain") {
        // far-to-near streaks
        for (const p of parts) {
          const speed = (18 + p.z * 26) * p.s;
          p.y += speed / h; p.x -= (speed * 0.22) / w;
          if (p.y > 1) { p.y = -0.05; p.x = rnd(0, 1.25);
            if (p.z > 0.7 && Math.random() < 0.5) splashes.push({ x: p.x * w, y: h * rnd(0.82, 0.98), r: 1, a: 0.5 }); }
          if (p.x < -0.05) p.x = 1.1;
          const len = 10 + p.z * 34;
          ctx.strokeStyle = `rgba(215,228,240,${0.12 + p.z * 0.4})`;
          ctx.lineWidth = 0.6 + p.z * 1.4;
          ctx.beginPath(); ctx.moveTo(p.x * w, p.y * h); ctx.lineTo(p.x * w + len * 0.22, p.y * h - len); ctx.stroke();
        }
        for (let i = splashes.length - 1; i >= 0; i--) {
          const s = splashes[i]; s.r += 0.7; s.a -= 0.035;
          if (s.a <= 0) { splashes.splice(i, 1); continue; }
          ctx.strokeStyle = `rgba(220,232,245,${s.a})`; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.ellipse(s.x, s.y, s.r * 2.2, s.r * 0.6, 0, 0, 6.28); ctx.stroke();
        }
        // droplets on the glass that grow and slide
        if (Math.random() < 0.22 && drops.length < 38) drops.push({ x: rnd(0, w), y: rnd(0, h * 0.7), r: rnd(1.5, 4.5), v: 0, life: 1 });
        for (let i = drops.length - 1; i >= 0; i--) {
          const d = drops[i];
          if (Math.random() < 0.012) d.v = rnd(0.4, 1.6);
          d.y += d.v; d.v *= 0.985; d.life -= 0.0022;
          if (d.life <= 0 || d.y > h) { drops.splice(i, 1); continue; }
          const g = ctx.createRadialGradient(d.x - d.r * 0.3, d.y - d.r * 0.3, 0, d.x, d.y, d.r);
          g.addColorStop(0, `rgba(255,255,255,${0.55 * d.life})`); g.addColorStop(1, `rgba(180,205,230,${0.12 * d.life})`);
          ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(d.x, d.y, d.r * 0.8, d.r, 0, 0, 6.28); ctx.fill();
          if (d.v > 0.3) { ctx.strokeStyle = `rgba(200,220,240,${0.14 * d.life})`; ctx.lineWidth = d.r * 0.5; ctx.beginPath(); ctx.moveTo(d.x, d.y - d.v * 9); ctx.lineTo(d.x, d.y); ctx.stroke(); }
        }
      } else if (kind === "snow") {
        const wind = Math.sin(t * 0.35) * 0.35 + 0.25;
        for (const p of parts) {
          const sp = (0.0007 + p.z * 0.0022) * p.s;
          p.y += sp * 60 / 60 * 16; p.x += (wind * (0.0004 + p.z * 0.0009)) * 16 + Math.sin(t * 1.3 + p.p) * 0.0006;
          if (p.y > 1.05) { p.y = -0.05; p.x = rnd(-0.1, 1.1); }
          if (p.x > 1.1) p.x = -0.1;
          const r = 1 + p.z * 4.2;
          const g = ctx.createRadialGradient(p.x * w, p.y * h, 0, p.x * w, p.y * h, r * 1.8);
          const a = 0.35 + p.z * 0.6;
          g.addColorStop(0, `rgba(255,255,255,${a})`); g.addColorStop(0.5, `rgba(255,255,255,${a * 0.6})`); g.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x * w, p.y * h, r * 1.8, 0, 6.28); ctx.fill();
        }
      } else if (kind === "fog") {
        ctx.globalCompositeOperation = "screen";
        parts.forEach((p, i) => {
          const size = Math.max(w, h) * (0.9 + p.z * 0.9);
          const x = ((p.x + t * (0.004 + p.z * 0.006) * (i % 2 ? 1 : -1)) % 1.4 + 1.4) % 1.4 - 0.2;
          ctx.globalAlpha = 0.42 + p.z * 0.25;
          ctx.drawImage(noise, x * w - size / 2, p.y * h * 0.8 + h * 0.1 - size / 3, size, size * 0.7);
        });
        ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
      } else {
        // sun: slow-rotating god rays from the top right plus drifting dust
        ctx.globalCompositeOperation = "screen";
        const cx = w * 0.82, cy = -h * 0.08;
        for (let i = 0; i < 9; i++) {
          const a = 1.9 + i * 0.16 + Math.sin(t * 0.25 + i) * 0.035;
          const g = ctx.createLinearGradient(cx, cy, cx + Math.cos(a) * h * 1.5, cy + Math.sin(a) * h * 1.5);
          g.addColorStop(0, `rgba(255,236,170,${0.2 + 0.06 * Math.sin(t * 0.6 + i)})`); g.addColorStop(1, "rgba(255,236,170,0)");
          ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(a - 0.05) * h * 1.6, cy + Math.sin(a - 0.05) * h * 1.6);
          ctx.lineTo(cx + Math.cos(a + 0.05) * h * 1.6, cy + Math.sin(a + 0.05) * h * 1.6); ctx.fill();
        }
        for (const p of parts) {
          p.x += (0.0003 + p.z * 0.0006); p.y -= 0.00015 * p.s; if (p.x > 1.05) p.x = -0.05; if (p.y < -0.05) p.y = 1.05;
          const r = 0.8 + p.z * 2.2;
          ctx.fillStyle = `rgba(255,244,205,${0.2 + p.z * 0.5 * (0.6 + 0.4 * Math.sin(t * 2 + p.p))})`;
          ctx.beginPath(); ctx.arc(p.x * w, p.y * h, r, 0, 6.28); ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";
      }
    };
    if (!reduce) draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [kind, reduce]);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}
