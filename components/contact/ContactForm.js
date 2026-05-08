"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Plane, Phone, Mail, MapPin, MessageCircle,
  Headphones, ShieldCheck, Zap, HelpCircle, Plus, Minus, ArrowRight,
  User, FileText, Send, CheckCircle2, Sparkles
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Magnetic } from "@/components/shared/Animated";

const faqs = [
  {
    q: "How can I book a Meet & Greet service?",
    a: "Fill out the booking form on our website, or contact us via phone or WhatsApp. Our team will confirm your reservation and provide all details for a smooth experience."
  },
  {
    q: "What information do I need to provide?",
    a: "Your full name, contact details, flight number, travel date and time, airport, and any special requirements."
  },
  {
    q: "How do I modify or cancel my booking?",
    a: "Reach out via phone or WhatsApp at least 4 hours before the scheduled service. We'll handle the rest."
  },
  {
    q: "Do you serve airports outside India?",
    a: "Yes, our network covers major international airports across 12 countries. Share your destination and we'll confirm availability."
  }
];

const subjects = [
  "VIP Meet & Greet Booking",
  "Fast Track Immigration",
  "Lounge Access",
  "Porter Service",
  "Group / Corporate Booking",
  "General Enquiry"
];

export default function ContactForm() {
  const [open, setOpen] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
  };

  return (
    <section id="contact-form" className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-b from-[#eeedea] to-[#f5f3ee]">
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-violetx-200/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-electric-200/15 rounded-full blur-[100px]" />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

        {/* LEFT — FAQ + mini cards */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violetx-300/60 bg-white/40 backdrop-blur-sm">
              <Plane className="w-3 h-3 text-violetx-600 -rotate-12" />
              <span className="text-[10px] tracking-[0.3em] text-violetx-700 uppercase font-bold">Get in Touch</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.0] tracking-tight mt-3 text-navy-950 font-medium">
              We're Here,{" "}
              <span className="bg-gradient-to-r from-violetx-600 to-violetx-700 bg-clip-text text-transparent italic font-light">
                24/7 for You.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-navy-700/70 text-[13px] leading-relaxed mt-2 max-w-sm">
              Our team is available round-the-clock for bookings, questions, or special requests.
            </p>
          </Reveal>

          {/* Mini cards */}
          <Reveal delay={0.3}>
            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {[
                { icon: Headphones, title: "Quick Reply", sub: "Within 1 day", bg: "bg-violetx-50", color: "text-violetx-600" },
                { icon: ShieldCheck, title: "Secure", sub: "100% protected", bg: "bg-electric-50", color: "text-electric-600" },
                { icon: Zap, title: "24/7 Support", sub: "Always here", bg: "bg-emerald-50", color: "text-emerald-600" }
              ].map((c) => (
                <div key={c.title} className="rounded-[14px] bg-white border border-navy-900/5 p-3 shadow-softer">
                  <div className={`w-7 h-7 rounded-lg ${c.bg} flex items-center justify-center mb-2`}>
                    <c.icon className={`w-3.5 h-3.5 ${c.color}`} />
                  </div>
                  <div className="font-bold text-navy-950 text-[12px]">{c.title}</div>
                  <div className="text-navy-700/55 text-[10.5px] mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* FAQ */}
          <Reveal delay={0.4}>
            <div className="mt-6 rounded-[18px] bg-white/95 border border-navy-900/5 shadow-softer p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-violetx-50 flex items-center justify-center">
                    <HelpCircle className="w-3.5 h-3.5 text-violetx-600" />
                  </span>
                  <span className="font-bold text-navy-950 text-[13.5px]">FAQs</span>
                </div>
                <a href="#faq" className="text-[11px] text-violetx-600 font-semibold inline-flex items-center gap-1 hover:text-violetx-700">
                  View all <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-2">
                {faqs.map((f, i) => (
                  <div key={f.q} className={`rounded-[12px] transition-all duration-300 ${open === i ? "bg-violetx-50 border border-violetx-200/60" : "bg-[#fafbff] border border-navy-900/5"}`}>
                    <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left">
                      <span className={`font-semibold text-[12.5px] ${open === i ? "text-violetx-700" : "text-navy-900"}`}>{f.q}</span>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${open === i ? "bg-violetx-100 text-violetx-700" : "bg-white border border-navy-900/8 text-navy-700"}`}>
                        {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-3 text-navy-700/70 text-[12px] leading-relaxed">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — Premium Contact Form */}
        <Reveal variant="right" delay={0.2} className="lg:col-span-7">
          <div className="relative rounded-[24px] glass-card-strong p-6 md:p-7 overflow-hidden">
            {/* Ambient orb */}
            <div className="absolute -top-28 -right-28 w-64 h-64 bg-violetx-200/35 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-electric-200/30 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-4 pb-5 border-b border-navy-900/8 mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-violetx-500 to-violetx-700 flex items-center justify-center shadow-[0_8px_22px_-8px_rgba(124,58,237,0.55)] flex-shrink-0">
                  <Send className="w-4 h-4 text-white -rotate-45" />
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
                </div>
                <div>
                  <h3 className="font-display text-[20px] md:text-[22px] text-navy-950 font-bold leading-tight">Send Us a Message</h3>
                  <p className="text-navy-700/60 text-[12px] mt-0.5">Fill the form — our team replies within 1 business day.</p>
                </div>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-ring text-emerald-500" />
                <span className="text-[9.5px] tracking-[0.18em] uppercase text-emerald-700 font-bold">Live</span>
              </div>
            </div>

            <form onSubmit={onSubmit} className="relative space-y-4">
              {/* First + Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <FloatField
                  id="first"
                  label="First Name"
                  required
                  icon={User}
                  focused={focused === "first"}
                  onFocus={() => setFocused("first")}
                  onBlur={() => setFocused("")}
                />
                <FloatField
                  id="last"
                  label="Last Name"
                  icon={User}
                  focused={focused === "last"}
                  onFocus={() => setFocused("last")}
                  onBlur={() => setFocused("")}
                />
              </div>

              {/* Email */}
              <FloatField
                id="email"
                type="email"
                label="Email Address"
                required
                icon={Mail}
                focused={focused === "email"}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
              />

              {/* Phone */}
              <FloatField
                id="phone"
                type="tel"
                label="Phone / Mobile"
                placeholder="+91 12345 67890"
                icon={Phone}
                focused={focused === "phone"}
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused("")}
              />

              {/* Subject — chip selector */}
              <div>
                <label className="block text-[11.5px] font-bold text-navy-900 mb-2.5 tracking-wide">
                  How can we help? <span className="text-rose-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <SubjectChip key={s} label={s} />
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="msg" className="block text-[11.5px] font-bold text-navy-900 mb-2 tracking-wide">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <div className={`relative rounded-2xl bg-white border transition-all duration-300 ${focused === "msg" ? "border-violetx-400 shadow-[0_0_0_4px_rgba(124,58,237,0.08)]" : "border-navy-900/10"}`}>
                  <FileText className={`absolute left-4 top-4 w-4 h-4 ${focused === "msg" ? "text-violetx-500" : "text-navy-400"} transition-colors`} />
                  <textarea
                    id="msg"
                    required
                    rows={4}
                    placeholder="Tell us about your trip — flight, dates, airport, special requests…"
                    onFocus={() => setFocused("msg")}
                    onBlur={() => setFocused("")}
                    className="w-full bg-transparent pl-11 pr-4 py-4 text-[13.5px] outline-none resize-none placeholder:text-navy-400/70 text-navy-950"
                  />
                </div>
              </div>

              {/* Submit row */}
              <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
                <div className="inline-flex items-center gap-2 text-[11px] text-navy-700/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-medium">Your data is 100% secure</span>
                </div>

                <Magnetic strength={0.22}>
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-between gap-3 pl-6 pr-2 py-2.5 rounded-full bg-gradient-to-r from-violetx-600 via-violetx-500 to-electric-600 hover:from-violetx-700 hover:to-electric-700 text-white font-bold text-[13px] shadow-[0_14px_36px_-12px_rgba(124,58,237,0.55)] hover:shadow-[0_18px_44px_-12px_rgba(58,95,248,0.65)] transition-all duration-500 overflow-hidden min-w-[180px]"
                  >
                    <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="w-3.5 h-3.5 -rotate-45" />
                      Submit Form
                    </span>
                    <span className="relative z-10 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-500">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </Magnetic>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[13px]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Message received — thank you!</div>
                      <div className="text-emerald-700/85 text-[12px] mt-0.5">Our concierge will reach out shortly.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Quick connect strip */}
            <div className="relative mt-7 pt-5 border-t border-navy-900/8">
              <div className="text-[10px] tracking-[0.28em] uppercase text-navy-700/55 font-bold mb-3">Or connect directly</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <QuickRow icon={Phone} label="Call Us" value="+91 95368 96071" bg="from-violetx-500 to-violetx-700" href="tel:+919536896071" />
                <QuickRow icon={MessageCircle} label="WhatsApp" value="+91 95368 96071" bg="from-emerald-500 to-emerald-700" href="https://wa.me/919536896071" />
                <QuickRow icon={Mail} label="Email" value="sales@vipassistindia.com" bg="from-gold-400 to-gold-600" href="mailto:sales@vipassistindia.com" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatField({ id, label, type = "text", required, icon: Icon, placeholder, focused, onFocus, onBlur }) {
  const [val, setVal] = useState("");
  const isActive = focused || val.length > 0;
  return (
    <div className="relative">
      <div
        className={`relative rounded-2xl bg-white border transition-all duration-300 ${
          focused ? "border-violetx-400 shadow-[0_0_0_4px_rgba(124,58,237,0.08)]" : "border-navy-900/10"
        }`}
      >
        <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-colors ${focused ? "text-violetx-500" : "text-navy-400"}`} />
        <label
          htmlFor={id}
          className={`absolute left-11 transition-all duration-300 pointer-events-none font-medium ${
            isActive
              ? "top-1.5 text-[10px] tracking-[0.16em] uppercase text-violetx-600"
              : "top-1/2 -translate-y-1/2 text-[13px] text-navy-400"
          }`}
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        <input
          id={id}
          type={type}
          required={required}
          placeholder={isActive ? placeholder : ""}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full bg-transparent pl-11 pr-4 pt-5 pb-2 text-[13.5px] outline-none placeholder:text-navy-400/60 text-navy-950"
        />
      </div>
    </div>
  );
}

function SubjectChip({ label }) {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setActive((s) => !s)}
      className={`px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-violetx-600 to-violetx-700 text-white shadow-[0_6px_18px_-6px_rgba(124,58,237,0.5)]"
          : "bg-white border border-navy-900/10 text-navy-700 hover:border-violetx-300 hover:text-violetx-700"
      }`}
    >
      {label}
    </button>
  );
}

function QuickRow({ icon: Icon, label, value, bg, href }) {
  return (
    <a href={href} className="group flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-navy-900/5 hover:border-violetx-200 hover:shadow-[0_6px_18px_-8px_rgba(124,58,237,0.25)] transition-all duration-300">
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${bg} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-3 h-3 text-white" />
      </div>
      <div className="leading-tight min-w-0 flex-1">
        <div className="text-navy-950 font-bold text-[11.5px] group-hover:text-violetx-700 transition-colors">{label}</div>
        <div className="text-navy-700/55 text-[10px] truncate">{value}</div>
      </div>
    </a>
  );
}
