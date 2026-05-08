"use client";

import { motion } from "framer-motion";

/**
 * Reveal — premium animated reveal wrapper.
 * Variants: "up", "down", "left", "right", "fade", "stagger"
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  amount = 0.2,
  once = true
}) {
  const variants = {
    up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
    scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ children, className = "", delay = 0, stagger = 0.1, once = true }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", variant = "up" }) {
  const variants = {
    up: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } },
    scale: { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } },
    fade: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
  };
  return (
    <motion.div variants={variants[variant]} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word stagger reveal for headings.
 * Pass children as plain string OR pass `text` prop.
 */
export function RevealWords({ text, className = "", delay = 0, stagger = 0.06, once = true }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" style={{ marginRight: "0.25em" }}>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
