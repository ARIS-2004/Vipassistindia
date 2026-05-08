"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Plane,
  CheckCircle2,
  Users,
  Globe2,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  Star,
  Shield,
  Sparkles
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { CountUp, Magnetic } from "@/components/shared/Animated";

const stats = [
  { count: 5900, suffix: "+", label: "Happy Clients", icon: Users, soft: "bg-violetx-50", color: "text-violetx-600", grad: "from-violetx-500 to-violetx-700" },
  { count: 12, suffix: "+", label: "Countries", icon: Globe2, soft: "bg-emerald-50", color: "text-emerald-600", grad: "from-emerald-500 to-emerald-700" },
  { count: 91, suffix: "+", label: "Airports", icon: MapPin, soft: "bg-electric-50", color: "text-electric-600", grad: "from-electric-500 to-electric-700" },
  { num: "24/7", label: "Support", icon: Clock, soft: "bg-gold-50", color: "text-gold-600", grad: "from-gold-400 to-gold-600" }
];

const promises = [
  "Personalized assistance every step of the way",
  "Trusted by thousands of happy travelers",
  "Available at 91+ airports across India"
];

export default function ContactHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative pt-32 md:pt-36 lg:pt-40 pb-10 md:pb-12 overflow-hidden bg-[#f5f1e8]">
      {/* Layered cream gradient + ambient blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf6ee] via-[#f5f1e8] to-[#efe9da]" />
      <motion.div
        className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-violetx-300/25 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-32 -right-16 w-[380px] h-[380px] bg-electric-200/30 rounded-full blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1], x: [0, -15, 0], y: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[200px] bg-gold-200/20 rounded-full blur-[100px]" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* Decorative wave lines */}
      <svg className="absolute bottom-12 -left-4 w-56 h-24 text-navy-300/15 pointer-events-none hidden md:block" viewBox="0 0 300 100" fill="none">
        <path d="M0 90 Q 100 50 200 70 T 300 50" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 70 Q 100 30 200 50 T 300 30" stroke="currentColor" strokeWidth="0.8" />
        <path d="M0 50 Q 100 10 200 30 T 300 10" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-6 relative z-10 order-2 lg:order-1">
          {/* Premium status pill */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 pl-1.5 pr-5 py-1.5 rounded-full border-[1.5px] border-violetx-300/70 bg-white/40 backdrop-blur-sm">
              <span className="relative w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-ring text-emerald-500" />
              </span>
              <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-violetx-700 uppercase font-bold flex items-center gap-2">
                Concierge Online
                <span className="w-1 h-1 rounded-full bg-violetx-400" />
                <span className="text-emerald-700">Replies in 2 min</span>
              </span>
            </div>
          </Reveal>

          {/* Headline with split-line drop reveal */}
          <h1 className="font-display font-medium text-[40px] sm:text-[58px] lg:text-[72px] leading-[0.95] tracking-tight mt-5 text-navy-950">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                We're Here to
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Help You,
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="block italic font-light"
              >
                <span className="not-italic font-medium relative inline-block">
                  <span className="bg-gradient-to-r from-violetx-600 via-pink-500 to-gold-500 bg-clip-text text-transparent">Anytime</span>
                  <Sparkles className="absolute -right-7 sm:-right-9 top-1.5 sm:top-2 w-4 h-4 sm:w-5 sm:h-5 text-gold-500 fill-gold-400 animate-twinkle" />
                </span>
                <span className="text-navy-950/90">, Anywhere.</span>
              </motion.span>
            </span>
          </h1>

          {/* Decorative plane line */}
          <Reveal delay={0.5} className="origin-left mt-5 mb-5 flex items-center gap-3 max-w-[280px]">
            <span className="h-px flex-1 bg-navy-900/20" />
            <Plane className="w-3.5 h-3.5 text-gold-500 -rotate-12" />
            <span className="h-px flex-1 bg-navy-900/10" />
          </Reveal>

          {/* Body */}
          <Reveal delay={0.55}>
            <p className="text-navy-800/75 text-[14px] md:text-[15px] leading-relaxed max-w-md">
              Our dedicated concierge desk is available 24/7 to assist with bookings, questions, or special
              requests. <span className="text-navy-900/80">Your comfort and peace of mind are our priority.</span>
            </p>
          </Reveal>

          {/* Promises list — premium gradient bullets */}
          <Reveal delay={0.65}>
            <ul className="mt-5 space-y-2.5">
              {promises.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                  className="flex items-center gap-3 text-navy-800/85 text-[13px] md:text-[14px]"
                >
                  <span className="relative w-5 h-5 rounded-full bg-gradient-to-br from-violetx-500 to-violetx-700 flex items-center justify-center shadow-[0_4px_10px_-3px_rgba(124,58,237,0.4)] flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </span>
                  {p}
                </motion.li>
              ))}
            </ul>
          </Reveal>

          {/* CTAs — magnetic + premium */}
          <Reveal delay={0.85}>
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Magnetic strength={0.25}>
                <a
                  href="#contact-form"
                  className="group relative inline-flex items-center justify-between gap-3 pl-6 pr-2 py-2.5 rounded-full bg-gradient-to-r from-violetx-600 via-violetx-500 to-electric-600 hover:from-violetx-700 hover:to-electric-700 text-white font-semibold text-[14px] shadow-[0_14px_40px_-12px_rgba(124,58,237,0.55)] hover:shadow-[0_18px_50px_-12px_rgba(58,95,248,0.65)] transition-all duration-500 overflow-hidden min-w-[210px]"
                >
                  <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-4 h-4 -rotate-45" />
                    Send Us a Message
                  </span>
                  <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-500">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </Magnetic>

              <a
                href="https://wa.me/919536896071"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border-2 border-emerald-400/50 bg-white/70 backdrop-blur-sm text-emerald-700 font-semibold text-[13.5px] hover:bg-emerald-50 hover:border-emerald-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Trust micro-row */}
          <Reveal delay={1}>
            <div className="mt-7 flex items-center gap-5 text-[11px]">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-navy-700/70 font-medium">100% Secure</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-navy-400/50" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
                ))}
                <span className="ml-1.5 text-navy-700/70 font-medium">4.9 / 5 · 1,200+ reviews</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — Premium image card with floating glass elements */}
        <div className="lg:col-span-6 relative z-10 order-1 lg:order-2">
          <Reveal variant="scale" duration={1}>
            <motion.div style={{ y: imgY }} className="relative">
              {/* Outer gradient glow */}
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-violetx-300/40 via-electric-200/30 to-gold-200/40 blur-2xl opacity-70 pointer-events-none" />

              {/* Image container with gradient border */}
              <div className="relative rounded-[28px] p-[2px] bg-gradient-to-br from-violetx-400/60 via-pink-300/50 to-gold-400/60 shadow-[0_30px_80px_-25px_rgba(13,27,52,0.35)]">
                <div className="relative aspect-[16/12] md:aspect-[5/4] rounded-[26px] overflow-hidden bg-navy-950">
                  <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                    <Image
                      src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=85"
                      alt="Airport Lounge"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  {/* Cinematic dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/45 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />

                  {/* Top-left tag — desktop only */}
                  <div className="hidden md:inline-flex absolute top-5 left-5 items-center gap-2 pl-1 pr-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                    <span className="w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center">
                      <Plane className="w-2.5 h-2.5 text-navy-950 -rotate-12" strokeWidth={2.5} />
                    </span>
                    <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-white">Your Journey, Our Priority</span>
                  </div>

                  {/* MOBILE — minimal centered tagline only */}
                  <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-4">
                      <Plane className="w-2.5 h-2.5 text-gold-400 -rotate-12" />
                      <span className="text-[8.5px] tracking-[0.3em] uppercase font-bold text-white">VIP Assist India</span>
                    </span>
                    <h2 className="font-display text-[22px] leading-[1.1] text-white font-medium tracking-tight">
                      Seamless airport <br />
                      assistance{" "}
                      <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent font-semibold animate-text-shimmer">
                        worldwide
                      </span>.
                    </h2>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-px w-8 bg-gold-400/70" />
                      <Plane className="w-3 h-3 text-gold-400 -rotate-12" />
                      <span className="h-px w-8 bg-gold-400/70" />
                    </div>
                  </div>

                  {/* DESKTOP — full overlay text */}
                  <div className="hidden md:flex absolute inset-0 p-8 flex-col justify-center max-w-[64%]">
                    <h2 className="font-display text-[28px] md:text-[32px] lg:text-[38px] leading-[1.05] text-white font-medium tracking-tight">
                      Seamless airport assistance{" "}
                      <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent font-semibold animate-text-shimmer">
                        across India
                      </span>{" "}
                      &amp; worldwide.
                    </h2>

                    <div className="mt-4 mb-1 flex items-center gap-2 max-w-[140px]">
                      <span className="h-px flex-1 bg-gold-400/70" />
                      <Plane className="w-3 h-3 text-gold-400 -rotate-12" />
                    </div>

                    <p className="text-white/70 text-[12px] md:text-[13px] mt-2 leading-relaxed">
                      24/7 dedicated concierge · Fast-track immigration · Premium lounge access
                    </p>
                  </div>

                  {/* Floating glass card — Rating (desktop only) */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hidden md:block absolute top-5 right-5 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 px-3.5 py-2.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]"
                  >
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <div className="text-white text-[11px] font-bold leading-none">4.9 Rating</div>
                    <div className="text-white/65 text-[9.5px] mt-0.5">1,200+ reviews</div>
                  </motion.div>

                  {/* Floating glass card — VIP brand (desktop only) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.75 }}
                    className="hidden md:block absolute bottom-5 right-5 rounded-xl bg-navy-950/80 backdrop-blur-xl border border-white/10 px-4 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                  >
                    <Plane className="w-3.5 h-3.5 text-gold-400 mb-1 mx-auto -rotate-12" />
                    <div className="text-white font-display font-bold text-[13px] tracking-tight leading-none text-center">
                      VIP ASSIST
                    </div>
                    <div className="text-gold-300 text-[8.5px] tracking-[0.3em] mt-1 font-bold text-center">INDIA</div>
                  </motion.div>

                  {/* Floating glass card — Live concierge (desktop only) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="hidden md:inline-flex absolute bottom-5 left-5 items-center gap-2.5 rounded-full bg-white/12 backdrop-blur-xl border border-white/20 pl-1 pr-4 py-1 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
                  >
                    <span className="relative w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
                    </span>
                    <span className="text-white text-[11px] font-semibold">Live Concierge Online</span>
                  </motion.div>

                  {/* MOBILE — single bottom Live indicator */}
                  <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                    <span className="relative w-2 h-2 rounded-full bg-emerald-500">
                      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
                    </span>
                    <span className="text-white text-[10px] font-semibold tracking-wide">Live · 4.9 ★</span>
                  </div>

                  {/* Inner border highlight */}
                  <div className="absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/15 pointer-events-none" />
                </div>
              </div>

              {/* Decorative accent dots */}
              <span className="absolute -top-2 left-3 w-2.5 h-2.5 rounded-full bg-violetx-500 shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
              <span className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(214,138,19,0.6)]" />
            </motion.div>
          </Reveal>
        </div>
      </div>

      {/* Premium stats card */}
      <Reveal delay={0.5} className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10 mt-10 md:mt-12">
        <div className="relative rounded-[22px] glass-card-strong px-5 md:px-8 py-5 md:py-6 grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-violetx-200/30 blur-3xl pointer-events-none" />
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -3 }}
              className={`relative flex items-center gap-3.5 ${i !== 0 ? "lg:border-l lg:border-navy-900/8 lg:pl-5" : ""}`}
            >
              <div className={`relative w-11 h-11 rounded-2xl bg-gradient-to-br ${s.grad} flex items-center justify-center shadow-md flex-shrink-0`}>
                <s.icon className="w-4 h-4 text-white" />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
              </div>
              <div className="leading-none">
                {s.num ? (
                  <div className="font-display text-[22px] md:text-[24px] font-bold text-navy-950">{s.num}</div>
                ) : (
                  <CountUp to={s.count} suffix={s.suffix} className="font-display text-[22px] md:text-[24px] font-bold text-navy-950" />
                )}
                <div className={`font-bold text-[12px] mt-1 ${s.color}`}>{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
