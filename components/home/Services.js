"use client";

import { motion } from "framer-motion";
import {
  PlaneLanding,
  PlaneTakeoff,
  Repeat,
  ShieldCheck,
  Clock,
  Gem,
  Headphones,
  ArrowRight,
  Diamond,
  Crown,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import AirportBackground from "@/components/shared/AirportBackground";
import { Reveal, StaggerChildren, StaggerItem, RevealWords } from "@/components/shared/Reveal";

const services = [
  {
    num: "01",
    tag: "ARRIVAL CONCIERGE",
    title: "Arrival Meet & Assist",
    sub: "Priority Fast Track & Porter Support",
    icon: PlaneLanding,
    badge: "VIP ARRIVAL",
    accent: "violetx",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80",
    items: ["Gate Greeting", "Fast Track Immigration", "Baggage Porter", "Buggy Transit", "Driver Handover"],
    cta: "Book Arrival VIP Service",
    btnGrad: "from-violetx-600 to-violetx-700",
    badgeGrad: "from-violetx-500 to-violetx-700",
    numColor: "text-violetx-600",
    tagColor: "text-violetx-700",
    iconColor: "text-violetx-600",
    bullet: "text-violetx-600"
  },
  {
    num: "02",
    tag: "DEPARTURE CONCIERGE",
    title: "Departure Meet & Greet",
    sub: "Curbside to Gate Executive Escort",
    icon: PlaneTakeoff,
    badge: "VIP DEPARTURE",
    accent: "emerald",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=900&q=80",
    items: ["Curbside Meet", "VIP Porter", "Priority Entry", "Lounge Access", "Boarding Escort"],
    cta: "Book Departure VIP Service",
    btnGrad: "from-emerald-600 to-emerald-700",
    badgeGrad: "from-emerald-500 to-emerald-700",
    numColor: "text-emerald-600",
    tagColor: "text-emerald-700",
    iconColor: "text-emerald-600",
    bullet: "text-emerald-600"
  },
  {
    num: "03",
    tag: "TRANSIT CONCIERGE",
    title: "Transit Meet & Greet",
    sub: "Effortless Gate-to-Gate Connection",
    icon: Repeat,
    badge: "VIP TRANSIT",
    accent: "orange",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    items: ["Gate Welcome", "Connection Support", "Buggy Transfer", "Baggage Assist", "Transit Lounge"],
    cta: "Book Transit VIP Service",
    btnGrad: "from-orange-500 to-orange-600",
    badgeGrad: "from-orange-400 to-orange-600",
    numColor: "text-orange-500",
    tagColor: "text-orange-600",
    iconColor: "text-orange-500",
    bullet: "text-orange-500"
  }
];

const trust = [
  { icon: ShieldCheck, t: "Dedicated Professionals", s: "Trained & verified concierge team" },
  { icon: Clock, t: "Time-Saving", s: "Skip queues and save valuable time" },
  { icon: Gem, t: "Premium Experience", s: "Luxury, comfort & personalized care" },
  { icon: Headphones, t: "24/7 Support", s: "We're here, whenever you need us" }
];

export default function Services() {
  return (
    <section id="services" className="relative py-10 lg:py-14 overflow-hidden">
      <AirportBackground variant="left" intensity={0.18} />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10">
        {/* Heading */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violetx-100/60 border border-violetx-200/50">
            <Diamond className="w-3 h-3 text-violetx-600 fill-violetx-600" />
            <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-violetx-700 uppercase font-bold">What We Offer</span>
          </div>

          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[48px] text-navy-950 mt-2 leading-[1.05]">
            <RevealWords text="World-Class" />
            <span className="bg-gradient-to-r from-violetx-600 to-violetx-700 bg-clip-text text-transparent"> Airport Meet & Greet</span>
            <br />
            <RevealWords text="Tailored for Every Journey" delay={0.2} />
          </h2>

          <Reveal delay={0.4} className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-10 bg-gold-400" />
            <Crown className="w-3.5 h-3.5 text-gold-500 fill-gold-400" />
            <span className="h-px w-10 bg-gold-400" />
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-navy-700/75 text-[13px] md:text-[14px] mt-2 leading-relaxed max-w-2xl mx-auto">
              Whether you are arriving, departing, or connecting — our dedicated concierge team is at your side
              every step of the way. Stress-free travel starts here.
            </p>
          </Reveal>
        </Reveal>

        {/* Cards grid */}
        <StaggerChildren stagger={0.13} className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" delay={0.1}>
          {services.map((s) => (
            <StaggerItem key={s.title} variant="up">
              <motion.article
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group relative rounded-[22px] bg-white shadow-[0_18px_50px_-25px_rgba(13,27,52,0.18)] hover:shadow-[0_30px_70px_-25px_rgba(124,58,237,0.25)] transition-shadow duration-700 overflow-hidden h-full flex flex-col"
              >
                {/* Image header */}
                <div className="relative h-36 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30" />

                  {/* Badge top-right */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${s.badgeGrad} text-white text-[9px] tracking-[0.2em] uppercase font-bold px-2.5 py-1 rounded-md shadow-[0_4px_12px_-4px_rgba(0,0,0,0.4)]`}>
                    {s.badge}
                  </div>
                </div>

                {/* Big number, overlapping image */}
                <div className="absolute top-24 left-5 z-10">
                  <div className="bg-white rounded-t-xl px-3 pt-2 shadow-[0_-4px_12px_-4px_rgba(13,27,52,0.08)]">
                    <div className={`font-display text-3xl font-bold ${s.numColor} leading-none`}>{s.num}</div>
                    <div className={`mt-1 h-0.5 w-6 ${s.bullet === "text-violetx-600" ? "bg-violetx-500" : s.bullet === "text-emerald-600" ? "bg-emerald-500" : "bg-orange-500"}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-5 pt-6">
                  <div className={`flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold ${s.tagColor}`}>
                    <s.icon className={`w-3.5 h-3.5 ${s.iconColor}`} />
                    {s.tag}
                  </div>
                  <h3 className="font-display text-[22px] text-navy-950 font-bold leading-tight mt-2">{s.title}</h3>
                  <p className="text-navy-700/55 text-[13px] mt-1">{s.sub}</p>

                  {/* List */}
                  <ul className="mt-3 space-y-2 flex-1">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-navy-800 text-[13.5px]">
                        <CheckCircle2 className={`w-4 h-4 ${s.iconColor} flex-shrink-0`} />
                        {it}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className={`mt-4 group/btn relative flex items-center justify-between rounded-2xl px-5 py-3 text-white text-[13px] font-semibold bg-gradient-to-r ${s.btnGrad} hover:brightness-110 transition-all duration-500 overflow-hidden`}
                  >
                    <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] -translate-x-full group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                    <span className="relative z-10">{s.cta}</span>
                    <span className="relative z-10 w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-500">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Trust strip */}
        <Reveal delay={0.2} className="mt-6">
          <div className="rounded-[20px] glass-card-strong px-5 md:px-7 py-4 md:py-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
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
