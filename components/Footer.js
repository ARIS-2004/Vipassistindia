"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  Users,
  Sparkles,
  Zap,
  PlaneTakeoff,
  HandshakeIcon,
  Crown,
  ShieldCheck,
  Headphones,
  Gem
} from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Blog", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Indian Airports", href: "/#airports" },
  { label: "International Airports", href: "/#airports" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/contact" }
];

const popularServices = [
  { label: "Book Meet and Greet at Delhi", icon: Users, href: "/contact" },
  { label: "Airport Concierge Service", icon: HandshakeIcon, href: "/services" },
  { label: "Book Fast Track Service", icon: Zap, href: "/services" },
  { label: "Airport Meet and Greet", icon: PlaneTakeoff, href: "/services" },
  { label: "Meet and Assist Service", icon: Sparkles, href: "/services" },
  { label: "Airport VIP Assistance", icon: Crown, href: "/services" }
];

const trust = [
  { icon: ShieldCheck, t: "Trusted & Secure", s: "Your safety and privacy are our top priority." },
  { icon: Zap, t: "Instant Confirmation", s: "Quick bookings with real-time confirmation." },
  { icon: Headphones, t: "24/7 Support", s: "We're here, anytime you need us." },
  { icon: Gem, t: "Premium Experience", s: "Luxury, comfort & care at every step." }
];

export default function Footer() {
  return (
    <footer className="relative pt-16 lg:pt-20 overflow-hidden bg-[#070b1f] text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(124,58,237,0.18),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(58,95,248,0.12),_transparent_50%)]" />

      {/* Subtle dot grid bottom-left */}
      <div className="absolute bottom-32 left-10 w-44 h-32 hidden md:block opacity-50">
        <div className="grid grid-cols-12 gap-2 w-full h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-violetx-400/30" />
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        {/* Top: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="leading-tight">
                <div className="font-display text-2xl font-semibold tracking-tight">
                  VIP ASSIST <span className="bg-gradient-to-r from-violetx-400 to-electric-400 bg-clip-text text-transparent">INDIA</span>
                </div>
                <div className="text-[9px] tracking-[0.22em] uppercase text-white/55 font-medium mt-0.5">
                  Airport Meet & Greet Service Provider
                </div>
              </div>
            </Link>

            <div className="h-0.5 w-12 bg-violetx-500 my-4" />

            <p className="text-white/55 leading-relaxed text-[13.5px] max-w-md">
              Premium Meet & Assist services across India's airports. Travel with comfort, style, and unmatched professionalism.
            </p>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <a
                href="https://wa.me/919536896071"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-violetx-600 to-electric-600 hover:from-violetx-700 hover:to-electric-700 text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(124,58,237,0.5)] transition-all duration-500 overflow-hidden"
              >
                <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
                <MessageCircle className="relative z-10 w-4 h-4" />
                <span className="relative z-10">WhatsApp Us</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-violetx-400/60 hover:bg-violetx-500/10 text-white text-sm font-semibold transition-colors"
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-[12px] tracking-[0.22em] uppercase text-white font-bold">Quick Links</h4>
            <div className="h-0.5 w-10 bg-violetx-500 mt-2 mb-5" />
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/65 hover:text-white text-[13.5px] inline-flex items-center gap-2 group transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-violetx-400 group-hover:translate-x-1 transition-transform" />
                    <span className="link-underline">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="text-[12px] tracking-[0.22em] uppercase text-white font-bold">Popular Services</h4>
            <div className="h-0.5 w-10 bg-violetx-500 mt-2 mb-5" />
            <ul className="space-y-3">
              {popularServices.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/65 hover:text-white text-[13.5px] inline-flex items-center gap-2.5 group transition-colors">
                    <l.icon className="w-3.5 h-3.5 text-violetx-400 flex-shrink-0" />
                    <span className="link-underline">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="text-[12px] tracking-[0.22em] uppercase text-white font-bold">Contact Info</h4>
            <div className="h-0.5 w-10 bg-violetx-500 mt-2 mb-5" />

            <ul className="space-y-5">
              <li className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-violetx-500/15 border border-violetx-400/25 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-violetx-300" />
                </div>
                <div className="leading-tight pt-0.5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-bold">Call Us</div>
                  <a href="tel:+919536896071" className="text-white font-semibold text-[15px] hover:text-violetx-300 transition-colors mt-1 block">+91 95368 96071</a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                </div>
                <div className="leading-tight pt-0.5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-bold">WhatsApp</div>
                  <a href="https://wa.me/919536896071" className="text-white font-semibold text-[15px] hover:text-emerald-300 transition-colors mt-1 block">+91 95368 96071</a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gold-400/15 border border-gold-400/25 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold-300" />
                </div>
                <div className="leading-tight pt-0.5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-bold">Email Us</div>
                  <a href="mailto:sales@vipassistindia.com" className="text-white font-semibold text-[15px] hover:text-gold-300 transition-colors mt-1 block break-all">sales@vipassistindia.com</a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Trust strip — outlined card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-[20px] border border-white/10 bg-white/[0.02] backdrop-blur-sm px-6 md:px-8 py-5 md:py-6 grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
        >
          {trust.map((t) => (
            <div key={t.t} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-violetx-400/25 bg-violetx-500/10 flex items-center justify-center flex-shrink-0">
                <t.icon className="w-4.5 h-4.5 text-violetx-300" strokeWidth={1.5} />
              </div>
              <div className="leading-snug">
                <div className="font-bold text-white text-[14px]">{t.t}</div>
                <div className="text-white/55 text-[11.5px] mt-1">{t.s}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/50">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-violetx-300 font-semibold">VIP Assist India</span>. All Rights Reserved. <span className="hidden md:inline">| </span>
            <span className="text-white/40">VIP Assist India is a Brand of Travel Blooper</span>
          </p>
          <div className="flex items-center gap-3 text-white/45">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/25">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-white/25">•</span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <span className="text-white/25">•</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
