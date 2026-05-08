"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  ArrowRight,
  Plane,
  Crown,
  Briefcase,
  Globe2,
  MapPin,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { Magnetic } from "@/components/shared/Animated";

const features = [
  { icon: Plane, title: "Fast Track", sub: "Save time at every step" },
  { icon: Crown, title: "VIP Lounge Access", sub: "Relax in comfort" },
  { icon: Briefcase, title: "Personal Assistance", sub: "Dedicated support" },
  { icon: Globe2, title: "Global Coverage", sub: "Major airports worldwide" }
];

const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Kolkata", "Chennai", "Goa"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="relative pt-32 md:pt-36 lg:pt-40 pb-6 md:pb-8 overflow-hidden bg-[#f5f1e8]">
      {/* Cream gradient + ambient blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf6ee] via-[#f5f1e8] to-[#efe9da]" />
      <div className="absolute top-0 -left-32 w-[420px] h-[420px] bg-violetx-200/35 rounded-full blur-[100px]" />
      <div className="absolute top-32 -right-20 w-[380px] h-[380px] bg-gold-200/35 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-electric-100/30 rounded-full blur-[80px]" />

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Decorative wave lines bottom-left */}
      <svg className="absolute bottom-12 -left-4 w-56 h-24 text-navy-300/15 pointer-events-none hidden md:block" viewBox="0 0 300 100" fill="none">
        <path d="M0 90 Q 100 50 200 70 T 300 50" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 70 Q 100 30 200 50 T 300 30" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 50 Q 100 10 200 30 T 300 10" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 relative z-10 order-2 lg:order-1">
          {/* Outlined pill badge with crown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 pl-1.5 pr-5 py-1.5 rounded-full border-[1.5px] border-violetx-300/70 bg-white/30 backdrop-blur-sm"
          >
            <span className="w-6 h-6 rounded-full bg-gold-100/80 flex items-center justify-center">
              <Crown className="w-3 h-3 text-gold-600 fill-gold-500" />
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-violetx-700 uppercase font-bold">
              Airport Meet & Greet · Since 2014
            </span>
          </motion.div>

          {/* Headline — tighter scale */}
          <h1 className="font-display font-medium text-[34px] sm:text-[46px] lg:text-[58px] leading-[0.95] tracking-tight mt-3 text-navy-950">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Treat yourself.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block italic font-light"
              >
                Like a{" "}
                <span className="not-italic font-semibold relative inline-block">
                  <span className="bg-gradient-to-r from-violetx-600 via-pink-500 to-gold-500 bg-clip-text text-transparent">VIP</span>
                  <Sparkles className="absolute -right-9 sm:-right-12 top-1.5 sm:top-2.5 w-5 h-5 sm:w-7 sm:h-7 text-gold-500 fill-gold-400" />
                </span>
              </motion.span>
            </span>
          </h1>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="origin-left mt-3 mb-3 flex items-center gap-2.5 max-w-[280px]"
          >
            <span className="h-px flex-1 bg-navy-900/20" />
            <Plane className="w-3.5 h-3.5 text-gold-500 -rotate-12" />
            <span className="h-px flex-1 bg-navy-900/10" />
          </motion.div>

          {/* Body copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="max-w-lg text-navy-800/70 text-[13px] md:text-[14px] leading-relaxed"
          >
            <p>
              Book our airport meet and greet services at Indian airports like Delhi, Mumbai, Bangalore, Hyderabad,
              and globally at major international airports. Enjoy fast-track check-ins, priority immigration,
              porter assistance, and VIP lounge access — all with 24/7 support.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <Magnetic strength={0.25}>
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-br from-violetx-600 to-violetx-700 hover:from-violetx-500 hover:to-violetx-700 text-white font-semibold text-[14px] shadow-[0_8px_32px_-8px_rgba(124,58,237,0.5)] hover:shadow-[0_12px_40px_-8px_rgba(124,58,237,0.65)] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 tracking-wide">Book Now</span>
                <span className="relative z-10 w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </Magnetic>

            <a
              href="tel:+919536896071"
              className="group flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-navy-900/10 hover:border-violetx-300/60 shadow-[0_4px_20px_-8px_rgba(13,27,52,0.12)] hover:shadow-[0_8px_28px_-8px_rgba(124,58,237,0.2)] transition-all duration-300"
            >
              <span className="w-9 h-9 rounded-xl bg-violetx-50 border border-violetx-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 text-violetx-600" />
              </span>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.2em] uppercase text-navy-500/70 font-medium">Call us anytime</div>
                <div className="text-navy-950 font-bold text-[14.5px] mt-0.5">+91 95368 96071</div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Image + floating feature cards */}
        <div className="lg:col-span-5 relative z-10 order-1 lg:order-2">
          <motion.div style={{ y: imgY }} className="relative">
            {/* Image card */}
            <div className="relative aspect-[4/3.2] rounded-[28px] overflow-hidden shadow-[0_24px_70px_-20px_rgba(13,27,52,0.25)]">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1100&q=85"
                alt="VIP Travel Experience"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/40 pointer-events-none" />
            </div>

            {/* Decorative corner dots */}
            <span className="absolute -top-1.5 left-1.5 w-2 h-2 rounded-full bg-violetx-500" />
            <span className="absolute -bottom-1.5 -right-1.5 w-2 h-2 rounded-full bg-violetx-500" />

            {/* Floating glass feature cards */}
            <div className="absolute right-0 sm:-right-3 lg:-right-6 top-6 space-y-2.5 hidden sm:block z-20">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                  whileHover={{ x: -3, scale: 1.02 }}
                  className="neu-pill rounded-2xl pl-1.5 pr-4 py-2 flex items-center gap-2.5 min-w-[210px] hover:shadow-[0_18px_42px_-14px_rgba(124,58,237,0.32)] transition-all duration-500"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violetx-50 to-violetx-100/70 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-3.5 h-3.5 text-violetx-600" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-navy-950 font-semibold text-[13px]">{f.title}</div>
                    <div className="text-navy-700/55 text-[10.5px] mt-0.5">{f.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom cities bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10 mt-5 md:mt-6"
      >
        <div className="relative rounded-full glass-card-strong px-5 md:px-7 py-3 md:py-3.5 overflow-hidden">
          <div className="relative flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-2 text-[12px] md:text-[13.5px]">
            <div className="flex items-center gap-2 pr-3 md:pr-4 border-r border-navy-900/10">
              <span className="w-6 h-6 rounded-full bg-violetx-50 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-violetx-600" />
              </span>
              <span className="text-violetx-700 font-bold tracking-[0.18em] uppercase text-[10px] md:text-[11px]">
                Airport Meet & Greet At
              </span>
            </div>
            {cities.map((c, idx) => (
              <span key={c} className="flex items-center gap-2 md:gap-3">
                {idx > 0 && <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />}
                <span className="text-navy-900 font-semibold">{c}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
