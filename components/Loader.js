"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const FLIGHT_PATH = "M 60 110 Q 220 20 360 70 T 740 30";

// Animation timeline (s)
const T_LINE_START   = 0.4;   // when trail starts drawing
const T_LINE_DURATION = 1.6;  // trail draws over this period (ends at 2.0s)
const T_PLANE_START  = T_LINE_START + T_LINE_DURATION; // plane starts when line is done (2.0s)
const T_PLANE_DURATION = 1.6; // plane traverses (ends at 3.6s)
const T_DEST_FLASH   = T_PLANE_START + T_PLANE_DURATION - 0.05; // 3.55s
const DURATION = (T_PLANE_START + T_PLANE_DURATION + 0.6) * 1000; // ~4200ms total

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Always show on full page load. (Spa nav doesn't remount layout, so it
    // only fires on initial document load — exactly what we want.)
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), DURATION);
    return () => clearTimeout(t);
  }, []);

  // Restore scroll once exit animation finishes
  const onExitComplete = () => {
    document.documentElement.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {show && (
        <motion.div
          key="vip-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-[#faf6ee] via-[#f5f1e8] to-[#efe9da] overflow-hidden"
        >
          {/* Ambient drifting blobs */}
          <motion.div
            className="absolute -top-32 -left-20 w-[520px] h-[520px] bg-violetx-300/35 rounded-full blur-[110px]"
            animate={{ scale: [1, 1.18, 1], x: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 -right-20 w-[480px] h-[480px] bg-electric-300/25 rounded-full blur-[110px]"
            animate={{ scale: [1.1, 1, 1.1], x: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gold-200/40 rounded-full blur-[100px]"
            animate={{ opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Subtle grain */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
          />

          {/* Floating particles */}
          {Array.from({ length: 16 }).map((_, i) => {
            const seed = (i * 9301 + 49297) % 233280;
            const r = seed / 233280;
            const left = (r * 100).toFixed(0);
            const top = (((seed * 7) % 233280) / 233280 * 100).toFixed(0);
            return (
              <motion.span
                key={i}
                className="absolute w-1 h-1 rounded-full bg-violetx-500/55"
                style={{ left: `${left}%`, top: `${top}%` }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 0.9, 0], y: [-12, 12] }}
                transition={{
                  duration: 3 + r * 2,
                  delay: i * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}

          {/* MAIN STAGE */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* COMPANY LOGO */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-2"
            >
              <div className="relative w-[240px] h-[72px] md:w-[300px] md:h-[88px] lg:w-[340px] lg:h-[100px]">
                <Image
                  src="/companylogo.png"
                  alt="VIP Assist India"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Soft glow under logo */}
              <div className="absolute inset-0 -z-10 bg-violetx-300/30 blur-3xl rounded-full" />
            </motion.div>

            {/* Flight-path SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 800 160"
              className="w-[88vw] max-w-[640px] h-auto mt-4"
              aria-hidden
            >
              <defs>
                <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                  <stop offset="40%" stopColor="#7c3aed" stopOpacity="0.55" />
                  <stop offset="80%" stopColor="#3a5ff8" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#3a5ff8" />
                </linearGradient>
                <filter id="trailGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="planeGlow">
                  <feGaussianBlur stdDeviation="2" />
                </filter>
              </defs>

              {/* Static guide path (very faint) — also referenced by mpath */}
              <path
                id="vip-flight-path"
                d={FLIGHT_PATH}
                fill="none"
                stroke="rgba(13,27,52,0.06)"
                strokeWidth="1"
                strokeDasharray="3 4"
              />

              {/* Glow halo trail — draws FIRST */}
              <motion.path
                d={FLIGHT_PATH}
                fill="none"
                stroke="#7c3aed"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.22"
                filter="url(#trailGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: T_LINE_DURATION, delay: T_LINE_START, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Crisp gradient trail — draws FIRST */}
              <motion.path
                d={FLIGHT_PATH}
                fill="none"
                stroke="url(#trailGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: T_LINE_DURATION, delay: T_LINE_START, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Origin marker */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <circle cx="60" cy="110" r="8" fill="#7c3aed" opacity="0.18" />
                <circle cx="60" cy="110" r="4" fill="#7c3aed" />
              </motion.g>

              {/* Destination marker — flashes when plane arrives */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [0, 1.7, 1] }}
                transition={{ delay: T_DEST_FLASH, duration: 0.7, times: [0, 0.6, 1] }}
              >
                <circle cx="740" cy="30" r="14" fill="#fbbf24" opacity="0.22" filter="url(#planeGlow)" />
                <circle cx="740" cy="30" r="6" fill="#fbbf24" />
                <circle cx="740" cy="30" r="2" fill="#fff" />
              </motion.g>

              {/* Plane — proper airliner silhouette, traverses path via animateMotion */}
              <g opacity="0">
                {/* Fade in just before motion begins */}
                <animate
                  attributeName="opacity"
                  values="0;1"
                  keyTimes="0;1"
                  begin={`${T_PLANE_START - 0.05}s`}
                  dur="0.15s"
                  fill="freeze"
                />

                {/* Soft motion-blur halo behind */}
                <ellipse cx="-12" cy="0" rx="24" ry="4" fill="#7c3aed" opacity="0.32" filter="url(#planeGlow)" />

                {/* MAIN WINGS — swept-back delta */}
                <path d="M -2 -2 L -10 -16 L -16 -16 L -8 -2 Z" fill="url(#planeGrad)" />
                <path d="M -2 2 L -10 16 L -16 16 L -8 2 Z" fill="url(#planeGrad)" />

                {/* TAIL WINGS — smaller delta near rear */}
                <path d="M -15 -1.5 L -19 -8 L -22 -8 L -19 -1.5 Z" fill="url(#planeGrad)" />
                <path d="M -15 1.5 L -19 8 L -22 8 L -19 1.5 Z" fill="url(#planeGrad)" />

                {/* FUSELAGE — long body */}
                <ellipse cx="0" cy="0" rx="20" ry="3" fill="url(#planeGrad)" />

                {/* NOSE CONE — pointed front */}
                <path d="M 14 -2.5 L 24 0 L 14 2.5 Z" fill="url(#planeGrad)" />

                {/* COCKPIT WINDOW highlight */}
                <ellipse cx="14" cy="0" rx="4" ry="1.2" fill="#ffffff" opacity="0.85" />

                {/* TAIL VERTICAL FIN (subtle dark strip) */}
                <path d="M -16 -0.5 L -22 -4 L -22 -0.5 Z" fill="#4c1d95" opacity="0.55" />

                {/* WINGTIP LIGHTS (tiny accents) */}
                <circle cx="-13" cy="-15" r="0.8" fill="#fbbf24" />
                <circle cx="-13" cy="15" r="0.8" fill="#fbbf24" />

                {/* Native SVG path-following animation */}
                <animateMotion
                  dur={`${T_PLANE_DURATION}s`}
                  begin={`${T_PLANE_START}s`}
                  rotate="auto"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0;1"
                  keyPoints="0;1"
                  keySplines="0.4 0 0.2 1"
                >
                  <mpath xlinkHref="#vip-flight-path" href="#vip-flight-path" />
                </animateMotion>
              </g>
            </svg>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="-mt-2 flex items-center gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-violetx-500"
                  animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.1, 0.85] }}
                  transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
                />
              ))}
            </motion.div>

            {/* Bottom airport-board status */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-[0_4px_20px_-8px_rgba(13,27,52,0.12)]"
            >
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-navy-700">
                Boarding Your VIP Experience
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
