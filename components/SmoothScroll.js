"use client";

import { useEffect } from "react";

/**
 * Lenis-powered smooth scroll. Tuned for buttery, premium feel:
 *  - longer duration + bezier easing curve for inertia
 *  - reduced touchMultiplier so mobile feels natural
 *  - disabled on prefers-reduced-motion for accessibility
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion preference
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let lenis;
    let raf;

    (async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({
          duration: 1.6,                                 // longer = smoother glide
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // gentle ease-out
          smoothWheel: true,
          wheelMultiplier: 0.9,                          // a touch slower per tick
          touchMultiplier: 1.6,
          syncTouch: false,                              // native momentum on touch
          lerp: 0.08,                                    // interpolation factor
          orientation: "vertical",
          gestureOrientation: "vertical"
        });

        const tick = (time) => {
          lenis.raf(time);
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        // Hash-link smooth scroll
        const onHash = (e) => {
          const t = e.target;
          if (!(t instanceof HTMLAnchorElement)) return;
          const href = t.getAttribute("href");
          if (href && href.startsWith("#") && href.length > 1) {
            const el = document.querySelector(href);
            if (el && lenis) {
              e.preventDefault();
              lenis.scrollTo(el, { offset: -90, duration: 1.4 });
            }
          }
        };
        document.addEventListener("click", onHash);

        // store cleanup ref via closure
        lenis._cleanup = () => document.removeEventListener("click", onHash);
      } catch (e) {
        // Silent fallback to native scroll
      }
    })();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (lenis) {
        try { lenis._cleanup && lenis._cleanup(); } catch {}
        lenis.destroy();
      }
    };
  }, []);

  return null;
}
