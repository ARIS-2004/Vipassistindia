"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accessibility,
  Briefcase,
  Crown,
  Zap,
  Car,
  Headphones,
  Diamond,
  ArrowUpRight,
  Plane,
  ShieldCheck,
  Eye,
  Sparkles,
  Gem
} from "lucide-react";
import AirportBackground from "@/components/shared/AirportBackground";
import { Reveal, StaggerChildren, StaggerItem, RevealWords } from "@/components/shared/Reveal";

const items = [
  {
    icon: Accessibility,
    title: "Wheelchair Assistance",
    desc: "Dignified, seamless mobility support for passengers who need that extra care. We ensure complete comfort from curbside to seat.",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    iconBg: "from-violetx-500 to-violetx-700",
    accent: "violetx",
    learnColor: "text-violetx-600",
    underline: "bg-violetx-500"
  },
  {
    icon: Briefcase,
    title: "Dedicated Porter Service",
    desc: "Travelling with extra luggage? Our trained porters handle every bag, trolley, and suitcase so your hands stay free and your journey stays smooth.",
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80",
    iconBg: "from-electric-500 to-electric-700",
    accent: "electric",
    learnColor: "text-electric-600",
    underline: "bg-electric-500"
  },
  {
    icon: Crown,
    title: "Premium Lounge Access",
    desc: "Turn waiting time into relaxation time. We arrange access to world-class airport lounges with complimentary food, Wi-Fi, and serene surroundings.",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    iconBg: "from-gold-400 to-gold-600",
    accent: "gold",
    learnColor: "text-gold-600",
    underline: "bg-gold-500"
  },
  {
    icon: Zap,
    title: "Fast Track Immigration",
    desc: "No more standing in endless queues. Our fast-track service cuts through check-in, security, and immigration so you arrive at your gate with ease.",
    img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80",
    iconBg: "from-emerald-500 to-emerald-700",
    accent: "emerald",
    learnColor: "text-emerald-600",
    underline: "bg-emerald-500"
  },
  {
    icon: Car,
    title: "Buggy & Terminal Transfer",
    desc: "Long terminals become effortless. Our battery-car escorts glide you between gates, terminals, and drop-off zones with speed and comfort.",
    img: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=800&q=80",
    iconBg: "from-sky-500 to-sky-700",
    accent: "sky",
    learnColor: "text-sky-600",
    underline: "bg-sky-500"
  },
  {
    icon: Headphones,
    title: "24/7 Live Support",
    desc: "Travel doesn't keep office hours — and neither do we. Our dedicated team is available around the clock to assist, reassure, and resolve anything that arises.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    iconBg: "from-rose-500 to-rose-700",
    accent: "rose",
    learnColor: "text-rose-600",
    underline: "bg-rose-500"
  }
];

const trust = [
  { icon: ShieldCheck, t: "Trusted & Reliable", s: "Your journey, in safe hands" },
  { icon: Eye, t: "Attention to Detail", s: "Because every detail matters" },
  { icon: Sparkles, t: "Personalized Service", s: "Tailored to your unique needs" },
  { icon: Gem, t: "Seamless Experience", s: "Smooth, stress-free travel" }
];

export default function SpecialServices() {
  return (
    <section className="relative py-14 lg:py-18 overflow-hidden">
      <AirportBackground variant="right" intensity={0.25} />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-navy-900/8 shadow-softer">
              <Diamond className="w-3 h-3 text-gold-600 fill-gold-500" />
              <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-gold-700 uppercase font-bold">More Than Meets the Eye</span>
            </div>

            <h2 className="font-display text-[36px] sm:text-5xl lg:text-[60px] text-navy-950 mt-5 leading-[1.0]">
              <span className="block bg-gradient-to-r from-violetx-600 to-electric-600 bg-clip-text text-transparent font-semibold">
                Special Airport Services
              </span>
              <span className="block italic font-light text-navy-950 mt-1">We Go Above & Beyond</span>
            </h2>

            <Reveal delay={0.3} className="flex items-center gap-3 mt-5 max-w-[260px]">
              <span className="h-px w-16 bg-gold-400" />
              <Plane className="w-4 h-4 text-gold-500 -rotate-12" />
              <span className="h-px w-12 bg-gold-300" />
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-navy-700/75 text-[14px] md:text-[15.5px] leading-relaxed mt-5 max-w-xl">
                We are more than a VIP airport assistance company. Our extended services cover every possible
                need — because great travel leaves no detail unattended.
              </p>
            </Reveal>
          </Reveal>

          <Reveal variant="right" delay={0.3}>
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-3 pl-7 pr-2 py-2.5 rounded-full bg-gradient-to-r from-violetx-600 to-electric-600 hover:from-violetx-700 hover:to-electric-700 text-white font-semibold shadow-[0_18px_50px_-15px_rgba(124,58,237,0.55)] hover:shadow-[0_24px_60px_-15px_rgba(58,95,248,0.6)] transition-all duration-500 overflow-hidden"
            >
              <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10">View All Services</span>
              <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </Reveal>
        </div>

        {/* Grid */}
        <StaggerChildren stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <StaggerItem key={it.title} variant="up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[22px] bg-white border border-navy-900/5 p-5 shadow-softer hover:shadow-soft transition-shadow duration-500 overflow-hidden h-full"
              >
                {/* Soft corner glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br ${it.iconBg}`} />

                <div className="relative grid grid-cols-[110px,1fr] gap-4 items-start">
                  {/* Square image */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image src={it.img} alt={it.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/30 to-transparent" />
                  </div>

                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${it.iconBg} flex items-center justify-center mb-3 shadow-md`}>
                      <it.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-display text-[18px] md:text-[20px] font-bold text-navy-950 leading-tight">{it.title}</h3>
                    <div className={`h-0.5 w-8 mt-1.5 ${it.underline}`} />
                  </div>
                </div>

                <p className="relative text-navy-700/70 text-[12.5px] mt-4 leading-relaxed">{it.desc}</p>

                <div className="relative mt-4 flex items-center justify-between">
                  <a className={`${it.learnColor} text-[12px] font-semibold flex items-center gap-1.5 group/link`} href="/contact">
                    Learn More
                    <ArrowUpRight className="w-3 h-3 group-hover/link:rotate-45 transition-transform" />
                  </a>
                  <span className="font-display text-2xl text-navy-900/8 font-bold">0{idx + 1}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Trust strip */}
        <Reveal delay={0.2} className="mt-6">
          <div className="rounded-[20px] glass-card-strong px-6 md:px-8 py-5 md:py-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {trust.map((t) => (
              <div key={t.t} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-violetx-50 flex items-center justify-center flex-shrink-0">
                  <t.icon className="w-4 h-4 text-violetx-600" />
                </div>
                <div className="leading-tight">
                  <div className="font-bold text-navy-950 text-[13.5px]">{t.t}</div>
                  <div className="text-navy-700/60 text-[11.5px] mt-0.5">{t.s}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
