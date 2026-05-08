"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, HandshakeIcon, Briefcase, Hotel, Plane, Check, Sparkles } from "lucide-react";

const services = [
  {
    img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1100&q=80",
    tag: "Airport Meet and Greet Services",
    icon: HandshakeIcon,
    title: "Airport Meet and Greet Service",
    desc:
      "Airport Meet and Greet service is a premium service where a professional greeter meets you upon your arrival at the airport, assists with immigration and customs procedures, and ensures a seamless transition to your transportation. To book this exceptional service with VIP Assist India, select your destination and travel date, choose the Meet and Greet service option, and provide your flight details.",
    perks: ["Professional Greeter", "Immigration Assistance", "Seamless Transit", "Arrival & Departure"],
    accent: "from-electric-500 to-electric-700",
    soft: "bg-electric-50",
    text: "text-electric-700"
  },
  {
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1100&q=80",
    tag: "Luggage handling by VIP Assist India",
    icon: Briefcase,
    title: "Airport Porter Service",
    desc:
      "Our porter service simplifies your airport experience. For departing flights, we'll collect your luggage from your vehicle and transport it to the check-in counter. Upon arrival, we'll retrieve your bags from the baggage claim and assist you to your onward vehicle. Please indicate the number of bags when booking. Note that a porter service fee may apply at select airports.",
    perks: ["Vehicle to Check-in", "Baggage Retrieval", "Trained Porters", "Multi-Bag Support"],
    accent: "from-violetx-500 to-violetx-700",
    soft: "bg-violetx-50",
    text: "text-violetx-700",
    reverse: true
  },
  {
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1100&q=80",
    tag: "Premium accommodation",
    icon: Hotel,
    title: "Airport Hotels Bookings",
    desc:
      "Airport Hotels: These offer accommodation located either within the airport terminal, on airport property, or within a short distance (often with shuttle service). Transit Hotels: A specific type of airport hotel situated within the international terminal's transit zone. They cater to passengers with layovers of several hours (typically six or more), allowing them to rest without leaving the airport's secure area.",
    perks: ["Inside Terminal", "Transit Zone Stay", "Shuttle Included", "Layover Comfort"],
    accent: "from-gold-400 to-gold-600",
    soft: "bg-gold-50",
    text: "text-gold-700"
  }
];

export default function ServicesList() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-72 h-72 bg-electric-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violetx-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gold-100 shadow-softer">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-[11px] tracking-[0.3em] text-gold-700 uppercase font-semibold">List of our Services</span>
          </div>

          <h2 className="font-display text-[34px] sm:text-5xl lg:text-[60px] text-navy-900 mt-6 leading-[1.05]">
            VIP Assist India's <span className="gradient-text font-semibold italic">Services</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="h-px w-14 bg-navy-300" />
            <Plane className="w-4 h-4 text-gold-500 -rotate-12" />
            <span className="h-px w-14 bg-navy-300" />
          </div>

          <p className="text-navy-700/70 text-[15px] md:text-[17px] mt-6 leading-relaxed">
            Experience effortless travel with VIP Assist India's premier airport meet and greet service.
            Forget the stress and let our dedicated team take care of every detail upon your arrival at the
            airport. Our full escort service ensures you and your guests are guided seamlessly through all
            procedures. Need extra support? Our airport assistance service caters to passengers with special
            needs, young individuals, and first-time travelers. With our airport meet and greet service,
            you'll benefit from complete assistance with airport formalities, optional hand baggage trolleys,
            and the convenience of a priority buggy car transfer (subject to availability). Enjoy expedited
            processing through Immigration with fast track, dedicated escort through security, and
            comprehensive support for all airport requirements. Choose VIP Assist India for a truly relaxed
            airport meet and greet service.
          </p>
        </motion.div>

        {/* Detailed cards */}
        <div className="space-y-12 lg:space-y-20">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                s.reverse ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:col-span-6 relative [direction:ltr]">
                <div className="relative aspect-[5/4] rounded-[36px] overflow-hidden border border-white shadow-soft group">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/30 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] tracking-[0.2em] uppercase font-semibold text-navy-700 border border-white shadow-softer">
                    {s.tag}
                  </div>

                  {/* Floating gradient orb */}
                  <div className={`absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br ${s.accent} opacity-30 blur-3xl`} />
                </div>

                {/* Decorative number */}
                <div className="absolute -top-6 -left-2 lg:-left-6 z-10">
                  <div className="font-display text-7xl md:text-8xl font-bold text-navy-900/8 leading-none">0{i + 1}</div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 [direction:ltr]">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-lg`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>

                <div className={`mt-5 inline-block text-[10px] tracking-[0.3em] uppercase font-semibold px-2.5 py-1 rounded ${s.soft} ${s.text}`}>
                  {s.title.replace(" Service", "").toUpperCase()}
                </div>

                <h3 className="font-display text-3xl md:text-4xl lg:text-[44px] text-navy-900 font-semibold mt-4 leading-tight">
                  {s.title}
                </h3>

                <p className="text-navy-700/70 text-[15px] md:text-[16px] mt-5 leading-relaxed">{s.desc}</p>

                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {s.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <span className={`w-7 h-7 rounded-lg ${s.soft} ${s.text} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-navy-900 text-[13px] font-medium">{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-8 group inline-flex items-center gap-3 pl-6 pr-2 py-3 rounded-full bg-gradient-to-r from-electric-600 to-violetx-600 text-white font-semibold shadow-[0_18px_50px_-12px_rgba(58,95,248,0.5)] hover:shadow-[0_22px_55px_-12px_rgba(124,58,237,0.6)] transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">Book Now</span>
                  <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-[-45deg] transition-transform duration-500">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
