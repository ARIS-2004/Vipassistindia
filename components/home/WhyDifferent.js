"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  MapPin,
  Headphones,
  Star,
  Crown,
  Users,
  Globe2,
  ThumbsUp,
  Award
} from "lucide-react";
import AirportBackground from "@/components/shared/AirportBackground";
import { Reveal, StaggerChildren, StaggerItem, RevealWords } from "@/components/shared/Reveal";
import { Tilt, CountUp, ShineSweep } from "@/components/shared/Animated";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted & Verified Concierges",
    desc: "All our airport assistants are background-verified, professionally trained, and fully licensed to operate at Indian and international airports.",
    iconBg: "from-violetx-500 to-violetx-700",
    underline: "bg-violetx-500",
    pillBg: "bg-violetx-50",
    pillText: "text-violetx-600",
    softNum: "text-violetx-200"
  },
  {
    icon: Clock,
    title: "Punctual. Always. Guaranteed.",
    desc: "We monitor your flight in real-time. Whether your flight is delayed, early, or on time — your greeter is always there waiting for you.",
    iconBg: "from-emerald-500 to-emerald-700",
    underline: "bg-emerald-500",
    pillBg: "bg-emerald-50",
    pillText: "text-emerald-600",
    softNum: "text-emerald-200"
  },
  {
    icon: Sparkles,
    title: "Personalized for Every Traveler",
    desc: "No two travelers are the same. We customize every service — from wheelchair support to VIP lounge access — based on your unique needs.",
    iconBg: "from-violetx-400 to-violetx-600",
    underline: "bg-violetx-400",
    pillBg: "bg-violetx-50",
    pillText: "text-violetx-500",
    softNum: "text-violetx-200"
  },
  {
    icon: Zap,
    title: "Instant Online Booking",
    desc: "Book your VIP service in under 2 minutes via our website, WhatsApp, or phone. Confirmation is immediate and modifications are always welcome.",
    iconBg: "from-gold-400 to-gold-600",
    underline: "bg-gold-500",
    pillBg: "bg-gold-50",
    pillText: "text-gold-600",
    softNum: "text-gold-200"
  },
  {
    icon: MapPin,
    title: "91+ Airports Across India",
    desc: "From metro hubs like Delhi, Mumbai, and Bangalore to tier-2 cities and international airports — we operate everywhere you fly.",
    iconBg: "from-rose-500 to-rose-700",
    underline: "bg-rose-500",
    pillBg: "bg-rose-50",
    pillText: "text-rose-600",
    softNum: "text-rose-200"
  },
  {
    icon: Headphones,
    title: "24/7 Round-the-Clock Support",
    desc: "Flights happen at all hours. Our support team is available 24 hours a day, 7 days a week via call, WhatsApp, and email — no matter the time zone.",
    iconBg: "from-electric-500 to-electric-700",
    underline: "bg-electric-500",
    pillBg: "bg-electric-50",
    pillText: "text-electric-600",
    softNum: "text-electric-200"
  }
];

const stats = [
  { count: 5900, suffix: "+", label: "Happy Clients", sub: "And counting", icon: Users, bg: "from-violetx-500 to-violetx-700" },
  { count: 12, suffix: "+", label: "Countries", sub: "Global trust", icon: Globe2, bg: "from-emerald-500 to-emerald-700" },
  { count: 98, suffix: "%", label: "Customer Satisfaction", sub: "Consistently high ratings", icon: ThumbsUp, bg: "from-gold-400 to-gold-600" },
  { count: 100, suffix: "%", label: "Commitment", sub: "To your comfort & safety", icon: Award, bg: "from-rose-500 to-rose-700" }
];

export default function WhyDifferent() {
  return (
    <section className="relative py-14 lg:py-18 overflow-hidden">
      <AirportBackground variant="right" intensity={0.22} />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10">
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-navy-900/8 shadow-softer">
            <Star className="w-3 h-3 fill-violetx-500 text-violetx-500" />
            <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-violetx-700 uppercase font-bold">Why We Are Different</span>
          </div>

          <h2 className="font-display text-[34px] sm:text-5xl lg:text-[60px] text-navy-950 mt-5 leading-[1.0]">
            <RevealWords text="The Reasons Travelers" />
            <br />
            Choose{" "}
            <span className="bg-gradient-to-r from-violetx-600 to-violetx-700 bg-clip-text text-transparent font-semibold">VIP Assist India</span>
            <br />
            <RevealWords text="Again & Again" delay={0.3} />
          </h2>

          <Reveal delay={0.4} className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-14 bg-gold-400" />
            <Crown className="w-4 h-4 text-gold-500 fill-gold-400" />
            <span className="h-px w-14 bg-gold-400" />
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-navy-700/75 text-[14px] md:text-[15.5px] mt-5 leading-relaxed max-w-2xl mx-auto">
              Over 5,900 happy clients across 12 countries trust us to make every airport experience extraordinary.
              Here is what sets us apart.
            </p>
          </Reveal>
        </Reveal>

        {/* Reasons grid */}
        <StaggerChildren stagger={0.08} className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <StaggerItem key={r.title} variant="up">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[24px] bg-white border border-navy-900/5 p-7 shadow-[0_12px_40px_-20px_rgba(13,27,52,0.15)] hover:shadow-[0_30px_70px_-25px_rgba(124,58,237,0.25)] transition-all duration-500 overflow-hidden h-full flex flex-col"
              >
                {/* Big ghost number background */}
                <div className={`absolute -top-4 -right-3 font-display text-[110px] font-bold leading-none ${r.softNum} opacity-40 group-hover:opacity-70 transition-opacity duration-700 select-none pointer-events-none`}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Animated corner glow on hover */}
                <div className={`absolute -top-20 -left-20 w-44 h-44 rounded-full bg-gradient-to-br ${r.iconBg} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700`} />

                {/* Top accent bar on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${r.underline} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`} />

                {/* Icon — neumorphism inset cushion */}
                <div className="relative">
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${r.iconBg} flex items-center justify-center shadow-[0_10px_24px_-8px_rgba(124,58,237,0.4)] group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500`}>
                    <r.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    {/* Inner highlight ring */}
                    <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-5 flex-1 flex flex-col">
                  <h3 className="font-display text-[19px] md:text-[21px] font-bold text-navy-950 leading-[1.15]">
                    {r.title}
                  </h3>
                  <div className={`h-0.5 w-10 mt-3 ${r.underline} group-hover:w-16 transition-all duration-500`} />

                  <p className="text-navy-700/70 text-[13px] md:text-[13.5px] mt-4 leading-relaxed flex-1">
                    {r.desc}
                  </p>
                </div>

                {/* Bottom row: subtle accent + step indicator (no "Premium") */}
                <div className="relative mt-6 pt-5 border-t border-navy-900/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`font-display text-[11px] tracking-[0.3em] uppercase font-bold ${r.pillText}`}>
                      Reason
                    </span>
                    <span className={`w-1 h-1 rounded-full ${r.underline}`} />
                    <span className={`font-display text-[13px] font-bold ${r.pillText}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <motion.span
                    aria-hidden
                    className={`w-7 h-7 rounded-full ${r.pillBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  >
                    <span className={`block w-1.5 h-1.5 rounded-full ${r.underline}`} />
                  </motion.span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Stats strip — glassmorphism + CountUp */}
        <Reveal delay={0.2} className="mt-6">
          <div className="relative rounded-[22px] glass-card-strong px-6 md:px-8 py-6 md:py-7 grid grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {/* ambient orb */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-violetx-200/30 blur-3xl pointer-events-none" />
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -3 }}
                className={`relative flex items-center gap-4 ${i !== 0 ? "lg:border-l lg:border-navy-900/8 lg:pl-6" : ""}`}
              >
                <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${s.bg} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <s.icon className="w-5 h-5 text-white" />
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-white/30" />
                </div>
                <div>
                  <CountUp to={s.count} suffix={s.suffix} className="font-display text-2xl md:text-[28px] font-bold text-navy-950 leading-none" />
                  <div className="font-semibold text-navy-900 text-[12.5px] mt-1">{s.label}</div>
                  <div className="text-navy-700/55 text-[10.5px]">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
