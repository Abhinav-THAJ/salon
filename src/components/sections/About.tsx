"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const MANIFESTO = [
  "Precision is not a technique.",
  "It is a philosophy.",
  "Every line. Every edge. Every detail.",
  "Crafted with intention.",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const imageY  = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textX   = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[var(--color-void)] py-32 lg:py-48 overflow-hidden noise"
    >
      {/* Big background letterform */}
      <div className="pointer-events-none select-none absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[30vw] leading-none text-[var(--color-carbon)] opacity-60 z-0">
        O
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left – Image */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-0 h-[115%] -top-[8%] w-full">
            <Image
              src="/images/about.png"
              alt="Straight razor — precision craft"
              fill
              className="object-cover object-center"
            />
          </motion.div>
          {/* Gold border accent */}
          <div className="absolute inset-0 border border-[var(--color-gold)]/15 pointer-events-none" />
          {/* Corner marks */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[var(--color-gold)] opacity-60" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[var(--color-gold)] opacity-60" />
        </div>

        {/* Right – Content */}
        <motion.div style={{ x: textX }}>
          <div className="flex items-center gap-4 mb-10">
            <span className="gold-line" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)]">
              Our Philosophy
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl leading-tight text-[var(--color-ivory)] mb-12">
            Where Tradition <br />
            <em className="text-[var(--color-gold-lt)]">Meets Modern</em> <br />
            Precision
          </h2>

          {/* Manifesto lines */}
          <div className="space-y-4 mb-12 border-l border-[var(--color-slate)] pl-6">
            {MANIFESTO.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className={`font-display text-xl italic ${i % 2 === 1 ? "text-[var(--color-gold-lt)]" : "text-[var(--color-pearl)]"}`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <p className="font-sans text-sm leading-loose text-[var(--color-ash)] mb-10">
            Founded in 2010 with a single chair and an unbreakable vision, Obsidian has grown into the most sought-after grooming atelier across Dubai, London, and New York. Our master artisans blend time-honored barbering traditions with a relentlessly modern aesthetic.
          </p>

          <a
            href="#artisans"
            data-hover
            className="inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] group"
          >
            <span>Meet the Artisans</span>
            <span className="w-8 h-px bg-[var(--color-gold)] group-hover:w-16 transition-all duration-500 block" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
