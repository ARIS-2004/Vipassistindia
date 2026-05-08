"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/**
 * Shared light airport interior background.
 * Adds parallax on the image + drifting plane silhouette + animated dot grid + glow blobs.
 */
export default function AirportBackground({
  variant = "right",
  intensity = 0.22,
  dots = true,
  plane = true
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const planeX = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const planeY = useTransform(scrollYProgress, [0, 1], [16, -20]);
  const planeRot = useTransform(scrollYProgress, [0, 1], [-12, -2]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f1ea] via-[#f7f5ef] to-[#eef0f7]" />

      {/* Image side with parallax */}
      {(variant === "right" || variant === "split") && (
        <motion.div
          style={{ y: imgY, opacity: intensity }}
          className="absolute top-0 right-0 w-[55%] h-[110%]"
        >
          <Image
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="55vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-white" />
        </motion.div>
      )}
      {(variant === "left" || variant === "split") && (
        <motion.div
          style={{ y: imgY, opacity: intensity }}
          className="absolute top-0 left-0 w-[45%] h-[110%]"
        >
          <Image
            src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1400&q=80"
            alt=""
            fill
            className="object-cover scale-x-[-1]"
            sizes="45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white" />
        </motion.div>
      )}

      {/* Soft white veil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-white/60" />

      {/* Animated gradient blobs */}
      <div className="absolute top-10 -left-20 w-[420px] h-[420px] rounded-full blur-[100px] bg-violetx-200/30 animate-blob-slow" />
      <div className="absolute bottom-10 right-0 w-[380px] h-[380px] rounded-full blur-[100px] bg-electric-200/25 animate-blob" />

      {/* Drifting plane silhouette */}
      {plane && (
        <motion.svg
          style={{ x: planeX, y: planeY, rotate: planeRot }}
          className="absolute top-12 left-8 w-12 h-12 text-navy-900/20 hidden md:block"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 16.5v-2L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-9 5.5v2l9-2.5v5l-2 1.5v1.5l3.5-1L15 22v-1.5L13 19v-5l9 2.5z" />
        </motion.svg>
      )}

      {/* Animated dot pattern */}
      {dots && (
        <div className="absolute top-20 right-10 w-32 h-32 hidden md:block opacity-60">
          <div className="grid grid-cols-7 gap-2 w-full h-full">
            {Array.from({ length: 49 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-violetx-400/30"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{
                  duration: 3 + (i % 5) * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 7) * 0.18
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Top + bottom soft fades for seamless section blending */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </div>
  );
}
