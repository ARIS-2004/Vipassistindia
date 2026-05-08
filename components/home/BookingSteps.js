"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, FileText, PartyPopper, ArrowRight, MessageCircle, Zap, Crown, ShieldCheck, CheckCircle2, Headphones } from "lucide-react";
import AirportBackground from "@/components/shared/AirportBackground";
import { Reveal, StaggerChildren, StaggerItem, RevealWords } from "@/components/shared/Reveal";

const steps = [
  {
    n: "01",
    icon: MapPin,
    title: "Choose Your Airport",
    desc: "Select from 91+ Indian airports and major international hubs worldwide.",
    iconBg: "from-violetx-500 to-violetx-700",
    accent: "violetx",
    underline: "bg-violetx-500",
    numColor: "text-violetx-700"
  },
  {
    n: "02",
    icon: Briefcase,
    title: "Pick Your Service",
    desc: "Arrival, departure, or transit — select the package that fits your journey.",
    iconBg: "from-violetx-400 to-violetx-600",
    accent: "violetx",
    underline: "bg-violetx-400",
    numColor: "text-violetx-600"
  },
  {
    n: "03",
    icon: FileText,
    title: "Share Your Details",
    desc: "Enter your flight info, travel data, and any special requirements you have.",
    iconBg: "from-gold-400 to-gold-600",
    accent: "gold",
    underline: "bg-gold-500",
    numColor: "text-gold-600"
  },
  {
    n: "04",
    icon: PartyPopper,
    title: "Relax & Travel VIP",
    desc: "Our concierge greets you at the airport — your stress-free journey begins.",
    iconBg: "from-emerald-400 to-emerald-600",
    accent: "emerald",
    underline: "bg-emerald-500",
    numColor: "text-emerald-600"
  }
];

const trust = [
  { icon: ShieldCheck, t: "Secure & Trusted", s: "Your data is safe with us" },
  { icon: CheckCircle2, t: "Instant Confirmation", s: "Quick bookings, no delays" },
  { icon: Headphones, t: "24/7 Expert Support", s: "We're here, always" }
];

export default function BookingSteps() {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      <AirportBackground variant="right" intensity={0.25} />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10">
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violetx-100/60 border border-violetx-200/50">
            <Zap className="w-3.5 h-3.5 text-violetx-600 fill-violetx-500" />
            <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-violetx-700 uppercase font-bold">Simple & Quick</span>
          </div>

          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[48px] text-navy-950 mt-2 leading-[1.0]">
            Booking Your{" "}
            <span className="bg-gradient-to-r from-violetx-600 to-violetx-700 bg-clip-text text-transparent font-semibold">VIP</span>
            <br />
            <span className="bg-gradient-to-r from-violetx-600 to-electric-600 bg-clip-text text-transparent font-semibold">Airport Experience</span>
            <br />
            <RevealWords text="Takes Just 4 Steps" delay={0.2} />
          </h2>

          <Reveal delay={0.4} className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-10 bg-gold-400" />
            <Crown className="w-3.5 h-3.5 text-gold-500 fill-gold-400" />
            <span className="h-px w-10 bg-gold-400" />
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-navy-700/75 text-[13px] md:text-[14px] mt-2 leading-relaxed max-w-2xl mx-auto">
              No complicated forms. No long wait times. Just a few simple steps and your entire airport
              experience is handled by our expert team.
            </p>
          </Reveal>
        </Reveal>

        {/* Steps grid */}
        <div className="relative mt-6">
          <StaggerChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {steps.map((s, i) => (
              <StaggerItem key={s.n} variant="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="relative group h-full"
                >
                  <div className={`relative rounded-[22px] bg-white border border-navy-900/5 p-6 shadow-softer hover:shadow-soft transition-shadow duration-500 text-center h-full overflow-hidden`}>
                    {/* Step number top-right */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-navy-900/8 shadow-softer flex items-center justify-center">
                      <span className={`font-display text-sm font-bold ${s.numColor}`}>{s.n}</span>
                    </div>

                    {/* Round icon */}
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.iconBg} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${s.iconBg} p-[2px] shadow-md flex items-center justify-center`}>
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${s.iconBg} flex items-center justify-center shadow-md`}>
                            <s.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-display text-[18px] md:text-[19px] font-bold text-navy-950 leading-tight">{s.title}</h3>
                    <div className={`h-0.5 w-10 ${s.underline} mx-auto mt-2 mb-3`} />
                    <p className="text-navy-700/70 text-[12.5px] leading-relaxed">{s.desc}</p>
                  </div>

                  {/* Connecting arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 items-center">
                      <svg className="w-6 h-6 text-violetx-400/60" viewBox="0 0 24 24" fill="none">
                        <path d="M2 12h18m-4-5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* CTAs */}
        <Reveal delay={0.2} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-between gap-3 pl-7 pr-2 py-3 rounded-full bg-gradient-to-r from-violetx-600 via-electric-600 to-violetx-600 bg-[length:200%_100%] hover:bg-[position:100%_0%] text-white font-semibold shadow-[0_18px_50px_-15px_rgba(124,58,237,0.55)] transition-all duration-700 overflow-hidden min-w-[260px]"
          >
            <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
            <span className="relative z-10">Book My VIP Service Now</span>
            <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-500">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <a
            href="https://wa.me/919536896071"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full border-2 border-emerald-400/60 bg-white text-emerald-600 font-semibold hover:bg-emerald-50 hover:border-emerald-500 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={0.3} className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trust.map((t) => (
            <div key={t.t} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violetx-50 flex items-center justify-center">
                <t.icon className="w-4 h-4 text-violetx-600" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-navy-950 text-[13px]">{t.t}</div>
                <div className="text-navy-700/60 text-[11px]">{t.s}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
