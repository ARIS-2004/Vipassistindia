"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  Sparkles,
  Plane
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/shared/Animated";

const navItems = [
  { label: "Home", href: "/" }
];

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ===== TOP UTILITY STRIP (collapses on scroll) ===== */}
      <motion.div
        initial={false}
        animate={{
          height: scrolled ? 0 : "auto",
          opacity: scrolled ? 0 : 1
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-gradient-to-r from-violetx-700 via-violetx-600 to-electric-600 text-white relative"
      >
        {/* shine line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 h-9 flex items-center justify-between text-[11px]">
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+919536896071" className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors group">
              <Phone className="w-3 h-3 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold tracking-wide">+91 95368 96071</span>
            </a>
            <span className="w-px h-3 bg-white/25" />
            <a href="mailto:sales@vipassistindia.com" className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors group">
              <Mail className="w-3 h-3 group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">sales@vipassistindia.com</span>
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-4 mx-auto md:mx-0">
            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.28em] uppercase font-bold">
              <Sparkles className="w-3 h-3 text-gold-300 fill-gold-300 animate-twinkle" />
              India's Most Trusted VIP Airport Concierge
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/919536896071" className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors group">
              <MessageCircle className="w-3 h-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">WhatsApp</span>
            </a>
            <span className="w-px h-3 bg-white/25" />
            <div className="flex items-center gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/70 hover:text-gold-300 transition-colors"
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== MAIN NAV ===== */}
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0)"
        }}
        transition={{ duration: 0.5 }}
        className={`relative ${scrolled ? "backdrop-blur-2xl shadow-[0_10px_40px_-15px_rgba(13,27,52,0.15)]" : ""}`}
      >
        {/* Animated gradient bottom border when scrolled */}
        <motion.div
          aria-hidden
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violetx-500/50 to-transparent"
        />

        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 h-16 md:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <div className="relative h-11 w-40 md:h-14 md:w-52 lg:h-[58px] lg:w-60 group-hover:scale-[1.03] transition-transform duration-500">
              <Image
                src="/companylogo.png"
                alt="VIP Assist India"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            {/* subtle glow on hover */}
            <span className="absolute -inset-2 bg-violetx-300/0 group-hover:bg-violetx-300/15 blur-2xl rounded-full transition-colors duration-500 -z-10" />
          </Link>

          {/* Desktop nav — pill container with sliding indicator */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="relative flex items-center gap-1 px-1.5 py-1.5 rounded-full border border-navy-900/8 bg-white/60 backdrop-blur-md shadow-[0_6px_20px_-10px_rgba(13,27,52,0.1)]">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-5 py-1.5 text-[13px] font-semibold tracking-wide rounded-full transition-colors ${
                      active ? "text-white" : "text-navy-800 hover:text-violetx-700"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violetx-600 to-violetx-700 shadow-[0_4px_14px_-4px_rgba(124,58,237,0.5)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className={`relative px-5 py-1.5 text-[13px] font-semibold tracking-wide rounded-full transition-colors ${
                  pathname === "/contact" ? "text-white" : "text-navy-800 hover:text-violetx-700"
                }`}
              >
                {pathname === "/contact" && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violetx-600 to-violetx-700 shadow-[0_4px_14px_-4px_rgba(124,58,237,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Contact</span>
              </Link>
            </div>
          </nav>

          {/* Right cluster: phone + Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone pill */}
            <a
              href="tel:+919536896071"
              className="group relative flex items-center gap-2.5 pl-1 pr-4 py-1 rounded-full border border-navy-900/8 bg-white/70 backdrop-blur-md hover:border-violetx-300 transition-colors duration-500"
            >
              <span className="relative w-9 h-9 rounded-full bg-gradient-to-br from-violetx-600 to-violetx-700 flex items-center justify-center shadow-[0_6px_18px_-6px_rgba(124,58,237,0.55)]">
                <Phone className="w-3.5 h-3.5 text-white" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white pulse-ring text-emerald-500" />
              </span>
              <div className="leading-tight">
                <div className="text-[9px] tracking-[0.22em] uppercase text-navy-700/55 font-semibold">24/7 Hotline</div>
                <div className="text-[12.5px] font-bold text-navy-950 group-hover:text-violetx-700 transition-colors">+91 95368 96071</div>
              </div>
            </a>

            {/* Contact Us magnetic button */}
            <Magnetic strength={0.22}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full overflow-hidden bg-gradient-to-r from-violetx-600 via-violetx-500 to-electric-600 hover:from-violetx-700 hover:to-electric-700 text-white text-[13px] font-bold shadow-[0_10px_30px_-10px_rgba(124,58,237,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(58,95,248,0.6)] transition-all duration-500"
              >
                {/* shine sweep */}
                <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
                {/* outer glow ring */}
                <span className="absolute -inset-px rounded-full bg-gradient-to-r from-violetx-400/0 via-violetx-400/40 to-electric-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
                <span className="relative z-10 tracking-wide">Book Now</span>
                <span className="relative z-10 w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:rotate-[-45deg] transition-all duration-500">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden relative w-11 h-11 rounded-full border border-navy-900/10 bg-white/85 backdrop-blur-md shadow-[0_4px_14px_-4px_rgba(13,27,52,0.15)] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
                  <X className="w-5 h-5 text-navy-900" />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.25 }}>
                  <Menu className="w-5 h-5 text-navy-900" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* ===== MOBILE DRAWER ===== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 top-0 bg-navy-950/40 backdrop-blur-sm z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ y: "-110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-110%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden absolute top-full inset-x-3 mt-2 rounded-3xl bg-white shadow-[0_30px_70px_-20px_rgba(13,27,52,0.3)] border border-navy-900/8 overflow-hidden z-50"
            >
              <div className="relative p-6">
                {/* Decorative gradient orb */}
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-violetx-200/40 rounded-full blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="text-[9px] tracking-[0.32em] uppercase font-bold text-violetx-600 mb-3 flex items-center gap-2">
                    <Plane className="w-3 h-3 -rotate-12" /> Menu
                  </div>

                  <nav className="space-y-1">
                    {[...navItems, { label: "Contact", href: "/contact" }].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between px-4 py-3.5 rounded-2xl text-navy-900 font-semibold hover:bg-violetx-50 transition-colors"
                        >
                          <span className="font-display text-[20px]">{item.label}</span>
                          <ArrowUpRight className="w-4 h-4 text-violetx-500 group-hover:rotate-45 transition-transform duration-500" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-navy-900/8">
                    <div className="text-[9px] tracking-[0.32em] uppercase font-bold text-navy-700/60 mb-3">Get In Touch</div>
                    <div className="space-y-2.5">
                      <a href="tel:+919536896071" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-violetx-50 hover:bg-violetx-100 transition-colors">
                        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-violetx-600 to-violetx-700 flex items-center justify-center">
                          <Phone className="w-3.5 h-3.5 text-white" />
                        </span>
                        <div className="leading-tight">
                          <div className="text-[10px] tracking-[0.2em] uppercase text-navy-700/60 font-bold">Call Us</div>
                          <div className="text-[14px] font-bold text-navy-950">+91 95368 96071</div>
                        </div>
                      </a>
                      <a href="https://wa.me/919536896071" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
                        <span className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center">
                          <MessageCircle className="w-3.5 h-3.5 text-white" />
                        </span>
                        <div className="leading-tight">
                          <div className="text-[10px] tracking-[0.2em] uppercase text-navy-700/60 font-bold">WhatsApp</div>
                          <div className="text-[14px] font-bold text-navy-950">+91 95368 96071</div>
                        </div>
                      </a>
                      <a href="mailto:sales@vipassistindia.com" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gold-50 hover:bg-gold-100 transition-colors">
                        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                          <Mail className="w-3.5 h-3.5 text-white" />
                        </span>
                        <div className="leading-tight">
                          <div className="text-[10px] tracking-[0.2em] uppercase text-navy-700/60 font-bold">Email</div>
                          <div className="text-[13px] font-bold text-navy-950 break-all">sales@vipassistindia.com</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="group relative mt-6 flex items-center justify-between gap-3 pl-6 pr-2 py-3 rounded-full overflow-hidden bg-gradient-to-r from-violetx-600 to-electric-600 text-white font-bold shadow-[0_10px_30px_-10px_rgba(124,58,237,0.5)]"
                  >
                    <span className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
                    <span className="relative z-10 tracking-wide">Book VIP Service</span>
                    <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>

                  {/* Socials */}
                  <div className="mt-5 flex items-center justify-center gap-3">
                    {socials.map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-9 h-9 rounded-full border border-navy-900/8 flex items-center justify-center text-navy-700 hover:text-violetx-600 hover:border-violetx-300 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
