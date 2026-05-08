"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Users, Crown, Diamond, Check, ShieldCheck, Zap, Headphones, Gem } from "lucide-react";
import AirportBackground from "@/components/shared/AirportBackground";
import { Reveal, StaggerChildren, StaggerItem, RevealWords } from "@/components/shared/Reveal";

const items = [
  {
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    icon: Briefcase,
    tag: "Corporate & Business Travel",
    title: "Precision Business Assistance",
    desc:
      "Optimized airport travel for executives and teams. Zero downtime, maximum professionalism — from the moment you land to the moment you board.",
    perks: ["Executive Fast-Track", "Punctuality Guaranteed", "Dedicated Concierge"],
    iconBg: "from-violetx-500 to-electric-600",
    softBg: "bg-violetx-50",
    text: "text-violetx-700",
    bottomGrad: "from-electric-500 via-violetx-500 to-electric-500"
  },
  {
    img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=900&q=80",
    icon: Users,
    tag: "Families & Groups",
    title: "Effortless Family Journeys",
    desc:
      "Traveling with little ones or elderly parents? We handle every detail — luggage, navigation, and check-in — so you focus purely on the joy of travel.",
    perks: ["Child Support", "Elder Assistance", "Group Coordination"],
    iconBg: "from-violetx-600 to-pink-500",
    softBg: "bg-violetx-50",
    text: "text-violetx-700",
    bottomGrad: "from-violetx-500 via-pink-500 to-violetx-500"
  },
  {
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=80",
    icon: Diamond,
    tag: "Elite Class",
    title: "Bespoke VIP Solutions",
    desc:
      "For the discerning traveler who accepts nothing less than extraordinary. Private lounge access, bespoke transfers, and curated luxury — crafted entirely around you.",
    perks: ["Curated Luxury", "Private Lounge", "Bespoke Transfer"],
    iconBg: "from-gold-400 to-gold-600",
    softBg: "bg-gold-50",
    text: "text-gold-700",
    bottomGrad: "from-gold-400 via-gold-500 to-gold-400"
  }
];

const trust = [
  { icon: ShieldCheck, t: "Trusted & Secure", s: "Your safety is our priority" },
  { icon: Zap, t: "Instant Response", s: "We're always one step ahead" },
  { icon: Headphones, t: "24/7 Concierge", s: "Round-the-clock support" },
  { icon: Gem, t: "Premium Experience", s: "Luxury in every detail" }
];

export default function ForEveryTraveler() {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      <AirportBackground variant="right" intensity={0.22} />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10">
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-navy-900/8 shadow-softer">
            <Diamond className="w-3 h-3 text-gold-600 fill-gold-500" />
            <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-gold-700 uppercase font-bold">For Every Traveller</span>
          </div>

          <h2 className="font-display text-[34px] sm:text-5xl lg:text-[60px] text-navy-950 mt-3 leading-[1.05]">
            Premier{" "}
            <span className="bg-gradient-to-r from-violetx-500 to-violetx-700 bg-clip-text text-transparent">Airport Assistance</span>
            <br />
            <RevealWords text="Designed for Everyone" delay={0.15} />
          </h2>

          <Reveal delay={0.4} className="flex items-center justify-center gap-3 mt-3">
            <span className="h-px w-14 bg-gold-400" />
            <Crown className="w-4 h-4 text-gold-500 fill-gold-400" />
            <span className="h-px w-14 bg-gold-400" />
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-navy-700/75 text-[14px] md:text-[15.5px] mt-3 leading-relaxed max-w-2xl mx-auto">
              From high-powered executives to families traveling together, our personalized airport assistance
              wraps around your unique needs. Every traveler deserves the VIP treatment.
            </p>
          </Reveal>
        </Reveal>

        {/* 3 cards */}
        <StaggerChildren stagger={0.13} className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it) => (
            <StaggerItem key={it.title} variant="up">
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[22px] bg-white shadow-[0_18px_50px_-25px_rgba(13,27,52,0.18)] hover:shadow-[0_30px_70px_-25px_rgba(124,58,237,0.25)] transition-shadow duration-700 overflow-hidden h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 md:h-44 overflow-hidden">
                  <Image src={it.img} alt={it.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
                </div>

                {/* Floating icon overlapping image */}
                <div className="relative -mt-6 mx-7">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${it.iconBg} flex items-center justify-center shadow-[0_10px_24px_-8px_rgba(124,58,237,0.5)]`}>
                    <it.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-6 pt-3 pb-6">
                  <div className={`text-[10px] tracking-[0.25em] uppercase font-bold ${it.text}`}>
                    {it.tag}
                  </div>
                  <h3 className="font-display text-[22px] text-navy-950 font-bold leading-tight mt-2">{it.title}</h3>

                  {/* Underline accent */}
                  <div className={`h-0.5 w-12 mt-2 bg-gradient-to-r ${it.bottomGrad}`} />

                  <p className="text-navy-700/70 text-[13.5px] leading-relaxed mt-3 flex-1">{it.desc}</p>

                  {/* Perk chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {it.perks.map((p) => (
                      <span
                        key={p}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md ${it.softBg} ${it.text} text-[11.5px] font-semibold`}
                      >
                        <Check className="w-3 h-3" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${it.bottomGrad}`} />
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Trust */}
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
