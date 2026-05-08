"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * Tilt — 3D mouse-reactive tilt + glow on hover.
 * Wrap any card to give it premium depth.
 */
export function Tilt({ children, className = "", intensity = 6, glare = true }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 22 });
  const sy = useSpring(my, { stiffness: 150, damping: 22 });
  const rotateX = useTransform(sy, [-50, 50], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-50, 50], [-intensity, intensity]);
  const glareX = useTransform(sx, [-50, 50], ["0%", "100%"]);
  const glareY = useTransform(sy, [-50, 50], ["0%", "100%"]);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-[inherit] pointer-events-none mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.4), transparent 50%)`,
            "--gx": glareX,
            "--gy": glareY
          }}
        />
      )}
    </motion.div>
  );
}

/**
 * Magnetic — element follows cursor by a fraction.
 */
export function Magnetic({ children, strength = 0.3, className = "" }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 250, damping: 18 });
  const sy = useSpring(my, { stiffness: 250, damping: 18 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left - r.width / 2) * strength);
    my.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * CountUp — animated number when in view.
 * Pass `to` (number), `prefix`, `suffix`, optional `duration`.
 */
export function CountUp({ to, prefix = "", suffix = "", duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const target = Number(to);
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) requestAnimationFrame(tick);
      else setN(target);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  // Format with commas
  const display = Math.round(n).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/**
 * ParallaxY — translates child on scroll within section.
 */
export function ParallaxY({ children, distance = 60, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * ShineSweep — adds a one-shot diagonal light sweep across child on hover.
 * Wrap a button/card with relative+overflow-hidden and place this inside.
 */
export function ShineSweep({ className = "" }) {
  return (
    <span
      className={`pointer-events-none absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ${className}`}
    />
  );
}

/**
 * MarqueeRow — infinite seamless horizontal scroll. Pass children twice
 * for true seamless effect — or just pass once and we duplicate.
 */
export function MarqueeRow({ children, speed = 35, className = "", reverse = false }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`flex gap-8 whitespace-nowrap`}
        style={{
          animation: `tickerSlide ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

/**
 * GlowOrb — animated gradient blob; floats subtly.
 */
export function GlowOrb({ className = "", color = "from-violetx-300/50 to-electric-300/40", size = "w-[420px] h-[420px]" }) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full blur-[100px] bg-gradient-to-br ${color} ${size} pointer-events-none animate-blob-slow ${className}`}
    />
  );
}
