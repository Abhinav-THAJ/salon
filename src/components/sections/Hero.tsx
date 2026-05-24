"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sentence = "Obsidian · Luxury Grooming · Est. 2010 · Dubai · London · New York · ";

export default function Hero() {
  const chairRef    = useRef<HTMLDivElement>(null);
  const marqRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* Parallax on image */
    if (chairRef.current) {
      gsap.to(chairRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: chairRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[var(--color-ink)] noise">
      {/* BG Image */}
      <div ref={chairRef} className="absolute inset-0 w-full h-[115%] -top-[8%]">
        <Image
          src="/images/hero.png"
          alt="Luxury Obsidian Barbershop Chair"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-[var(--color-ink)]/40" />
        <div className="absolute inset-0 bg-[var(--color-ink)]/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 lg:px-16 max-w-screen-xl mx-auto">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="gold-line" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)]">
              The Gentleman's Atelier
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.92] text-[var(--color-ivory)]"
            >
              Crafting
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="font-display italic text-6xl md:text-8xl lg:text-[7rem] leading-[0.92] text-[var(--color-gold-lt)]"
            >
              Confidence
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.92] text-[var(--color-ivory)]"
            >
              Through Luxury
            </motion.h1>
          </div>

          {/* Sub + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
          >
            <a
              href="#book"
              data-hover
              className="px-9 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[var(--color-gold-pale)] transition-colors duration-400"
            >
              Book Now
            </a>
            <a
              href="#services"
              data-hover
              className="flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-[var(--color-pearl)] hover:text-[var(--color-gold)] transition-colors group"
            >
              <span>Explore Services</span>
              <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-500 block" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute right-8 lg:right-16 bottom-12 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[var(--color-ash)] rotate-90 origin-center mb-6">
            Scroll
          </span>
          <div className="w-px h-20 bg-[var(--color-slate)] relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              className="absolute inset-x-0 top-0 h-1/2 bg-[var(--color-gold)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Marquee ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-3 border-t border-[var(--color-slate)] bg-[var(--color-ink)]/80 backdrop-blur-sm overflow-hidden">
        <div ref={marqRef} className="flex whitespace-nowrap">
          <div className="marquee-track flex gap-0">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="font-sans text-[10px] tracking-[0.3em] uppercase text-[var(--color-ash)] px-8"
              >
                {sentence}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stats top-right — glass cards for readability */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute top-28 right-8 lg:right-16 hidden lg:flex flex-col gap-3"
      >
        {[["15+", "Years Mastery"], ["3K+", "Clients Served"], ["12", "Expert Artisans"]].map(([num, label]) => (
          <div
            key={label}
            className="flex items-center gap-4 pl-5 pr-7 py-4"
            style={{
              background: "rgba(8,8,8,0.80)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderLeft: "2px solid var(--color-gold)",
              borderTop: "1px solid rgba(184,150,62,0.15)",
              borderBottom: "1px solid rgba(184,150,62,0.15)",
            }}
          >
            <div>
              <div className="font-display text-3xl leading-none text-[var(--color-gold-lt)]">{num}</div>
              <div className="font-sans text-[9px] tracking-[0.25em] uppercase text-[var(--color-ivory)] opacity-70 mt-1.5 whitespace-nowrap">{label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
