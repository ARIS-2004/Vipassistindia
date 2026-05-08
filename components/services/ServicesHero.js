"use client";

import { motion } from "framer-motion";
import {
  Zap,
  HandshakeIcon,
  Crown,
  HandPlatter,
  Car,
  Briefcase,
  Plane,
  ArrowRight
} from "lucide-react";

const quick = [
  { icon: Zap, t: "Fast Track", s: "We offer Fast Track services at many major airports", color: "from-electric-500 to-electric-700", soft: "bg-electric-50" },
  { icon: HandPlatter, t: "Airport Concierge", s: "We are offering Airport concierge services", color: "from-violetx-500 to-violetx-700", soft: "bg-violetx-50" },
  { icon: Crown, t: "VIP Assistance", s: "Travel like a VIP with us and skip all the airport queues", color: "from-gold-400 to-gold-600", soft: "bg-gold-50" },
  { icon: HandshakeIcon, t: "Meet and Greet Service", s: "Enjoy seamless airport meet and greet service", color: "from-emerald-400 to-emerald-600", soft: "bg-emerald-50" },
  { icon: Car, t: "Airport Transfers", s: "Standard to luxury choice for airport transfers", color: "from-rose-400 to-rose-600", soft: "bg-rose-50" },
  { icon: Briefcase, t: "Airport Porter", s: "We will handle your luggage for your smooth travel", color: "from-sky-400 to-sky-600", soft: "bg-sky-50" }
];

export default function ServicesHero() {
  return (
    <section className="relative pt-32 md:pt-36 pb-20 overflow-hidden bg-gradient-to-b from-white via-[#fafbff] to-white">
      <div className="absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,_black_25%,_transparent_70%)]" />
      <div className="absolute -top-20 left-0 w-[420px] h-[420px] bg-electric-200/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-violetx-200/30 rounded-full blur-3xl" />

      <svg className="absolute top-32 left-1/3 w-96 text-electric-300/30 pointer-events-none hidden md:block" viewBox="0 0 400 100" fill="none">
        <path d="M0 80 Q 200 0 380 30" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 8" />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-electric-50 border border-electric-100">
            <Plane className="w-3.5 h-3.5 text-electric-600 -rotate-12" />
            <span className="text-[11px] tracking-[0.3em] text-electric-700 uppercase font-semibold">Our Services</span>
          </div>

          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[80px] text-navy-900 mt-6 leading-[1.0] tracking-tight">
            What are <span className="gradient-text font-semibold italic">our services</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="h-px w-14 bg-navy-300" />
            <Plane className="w-4 h-4 text-gold-500 -rotate-12" />
            <span className="h-px w-14 bg-navy-300" />
          </div>

          <p className="text-navy-700/70 text-[15px] md:text-lg mt-6 leading-relaxed">
            From fast-track immigration to luxury concierge support — explore the full range of premium
            airport services VIP Assist India offers across India and worldwide.
          </p>
        </motion.div>

        {/* 6-card mini grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {quick.map((q, i) => (
            <motion.div
              key={q.t}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-white border border-navy-900/5 p-6 shadow-softer hover:shadow-soft transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${q.color} flex items-center justify-center shadow-md mb-4`}>
                <q.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-navy-900 leading-tight">{q.t}</h3>
              <p className="text-navy-700/65 text-[13px] mt-2 leading-relaxed">{q.s}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-electric-600 text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
