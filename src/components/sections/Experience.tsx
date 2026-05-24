"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Full-bleed BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image
          src="/images/g4.png"
          alt="The Obsidian VIP Lounge"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/95 via-[var(--color-ink)]/70 to-[var(--color-ink)]/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 py-40 grid lg:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)]">
              The Experience
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-ivory)] mb-8 leading-tight">
            An Oasis <br />
            <em className="text-[var(--color-gold-lt)]">of Masculine</em> <br />
            Luxury
          </h2>

          <p className="font-sans text-sm text-[var(--color-ash)] leading-loose mb-12 max-w-md">
            Step beyond the ordinary. Our private suites and VIP lounges exist as sanctuaries — spaces where time is yours alone, the whiskey is fine, the music is low, and the craft is extraordinary.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-12">
            {[
              ["Private Suites", "Complete discretion"],
              ["Select Spirits", "Complimentary bar"],
              ["Hot Towel Ritual", "Every service"],
              ["Premium Products", "Keune · Aveda · Oribe"],
            ].map(([title, sub]) => (
              <div key={title} className="border border-[var(--color-slate)] p-5 hover:border-[var(--color-gold)]/30 transition-colors duration-400">
                <p className="font-display text-base text-[var(--color-ivory)] mb-1">{title}</p>
                <p className="font-sans text-[10px] tracking-[0.15em] text-[var(--color-ash)] uppercase">{sub}</p>
              </div>
            ))}
          </div>

          <a
            href="#book"
            data-hover
            className="inline-flex items-center gap-4 px-9 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[var(--color-gold-pale)] transition-colors duration-400"
          >
            Reserve the Suite
          </a>
        </div>
      </div>
    </section>
  );
}
