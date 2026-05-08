"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  PlaneTakeoff,
  ArrowRight,
  Zap,
  User,
  Sofa,
  Briefcase,
  Bus,
  Heart,
  Users,
  Crown,
  Luggage,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  Gem
} from "lucide-react";
import AirportBackground from "@/components/shared/AirportBackground";
import { Reveal, StaggerChildren, StaggerItem, RevealWords } from "@/components/shared/Reveal";

const destinations = [
  {
    code: "DEL", city: "New Delhi",
    airport: "Indira Gandhi International Airport",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    badges: [{ icon: Zap, label: "Fast Track" }, { icon: User, label: "VIP Porter" }, { icon: Sofa, label: "Lounge" }]
  },
  {
    code: "BOM", city: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",
    badges: [{ icon: Briefcase, label: "Baggage Assist" }, { icon: Bus, label: "Buggy Service" }]
  },
  {
    code: "HYD", city: "Hyderabad",
    airport: "Rajiv Gandhi International Airport",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    badges: [{ icon: Zap, label: "Fast Track Entry" }, { icon: Sofa, label: "Lounge Booking" }]
  },
  {
    code: "BLR", city: "Bangalore",
    airport: "Kempegowda International Airport",
    img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80",
    badges: [{ icon: Heart, label: "Senior Support" }, { icon: Users, label: "Family Care" }]
  },
  {
    code: "GOX", city: "Goa",
    airport: "Manohar International Airport",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    badges: [{ icon: Users, label: "Group Booking" }, { icon: Crown, label: "Limo Transfer" }]
  },
  {
    code: "CCU", city: "Kolkata",
    airport: "Netaji Subhas Chandra Bose International",
    img: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=900&q=80",
    badges: [{ icon: Sofa, label: "Elite Lounge" }, { icon: Luggage, label: "Priority Bags" }]
  }
];

const trust = [
  { icon: ShieldCheck, t: "Secure Booking", s: "100% safe & reliable" },
  { icon: Zap, t: "Instant Confirmation", s: "Receive booking instantly" },
  { icon: Headphones, t: "24/7 Support", s: "We're here, always" },
  { icon: Gem, t: "Premium Experience", s: "Luxury, comfort & care" }
];

export default function Destinations() {
  return (
    <section id="airports" className="relative py-10 lg:py-14 overflow-hidden">
      <AirportBackground variant="left" intensity={0.18} />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10">
        {/* Heading */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-300/60 shadow-softer">
            <MapPin className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-gold-700 uppercase font-bold">Top Destinations</span>
          </div>

          <h2 className="font-display text-[28px] sm:text-[38px] lg:text-[48px] text-navy-950 mt-2 leading-[1.05]">
            Book{" "}
            <span className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent font-semibold">
              VIP Meet & Greet
            </span>{" "}
            Online
            <br />
            <RevealWords text="Across India & Worldwide" delay={0.15} />
          </h2>

          <Reveal delay={0.4} className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-10 bg-gold-400" />
            <Crown className="w-3.5 h-3.5 text-gold-500 fill-gold-400" />
            <span className="h-px w-10 bg-gold-400" />
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-navy-700/75 text-[13px] md:text-[14px] mt-2 leading-relaxed max-w-2xl mx-auto">
              Fast-track immigration, luxury lounge access, and personalized concierge at India's busiest
              international airports — all bookable in minutes.
            </p>
          </Reveal>
        </Reveal>

        {/* Cards */}
        <StaggerChildren stagger={0.1} className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {destinations.map((d) => (
            <StaggerItem key={d.code} variant="up">
              <motion.a
                href="/contact"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group relative block rounded-[22px] overflow-hidden shadow-[0_18px_50px_-25px_rgba(13,27,52,0.25)] hover:shadow-[0_30px_70px_-25px_rgba(124,58,237,0.3)] transition-shadow duration-700"
              >
                <div className="relative h-52 md:h-60">
                  <Image src={d.img} alt={d.city} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                  {/* Code chip */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-violetx-600 text-white text-[11px] font-bold tracking-[0.15em] shadow-[0_4px_12px_-4px_rgba(0,0,0,0.4)]">
                    {d.code}
                  </div>

                  {/* Arrow circle */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-violetx-600 text-white flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(0,0,0,0.4)] group-hover:rotate-45 transition-transform duration-500">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Body */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-white font-display text-2xl md:text-[28px] font-bold mb-1.5 leading-tight">{d.city}</h3>
                    <div className="flex items-center gap-1.5 text-white/75 text-[12.5px] mb-3.5">
                      <MapPin className="w-3 h-3" />
                      <span>{d.airport}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {d.badges.map((b) => (
                        <span
                          key={b.label}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium"
                        >
                          <b.icon className="w-3 h-3" />
                          {b.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* CTA button */}
        <Reveal delay={0.2} className="mt-7 flex justify-center">
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-3 pl-7 pr-2 py-2.5 rounded-full bg-gradient-to-r from-navy-900 to-navy-950 hover:from-navy-950 hover:to-black text-white font-semibold shadow-[0_18px_50px_-15px_rgba(13,27,52,0.6)] hover:shadow-[0_24px_60px_-15px_rgba(13,27,52,0.7)] transition-all duration-500 overflow-hidden"
          >
            <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
            <PlaneTakeoff className="relative z-10 w-4 h-4 -rotate-12 text-violetx-300" />
            <span className="relative z-10">View All 51+ Indian Airports</span>
            <span className="relative z-10 w-9 h-9 rounded-full bg-violetx-600 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-500">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={0.3} className="mt-6">
          <div className="rounded-[20px] glass-card-strong px-5 md:px-7 py-4 md:py-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trust.map((t) => (
              <div key={t.t} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                  <t.icon className="w-4 h-4 text-gold-600" />
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
