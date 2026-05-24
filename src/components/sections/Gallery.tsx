"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GALLERY_ITEMS = [
  { src: "/images/g1.png", alt: "Obsidian Barbershop Interior",  span: "lg:col-span-2 lg:row-span-2", aspect: "aspect-square" },
  { src: "/images/g2.png", alt: "Precision fade haircut",        span: "lg:col-span-1 lg:row-span-1", aspect: "aspect-[4/3]" },
  { src: "/images/g3.png", alt: "Premium barber tools",          span: "lg:col-span-1 lg:row-span-1", aspect: "aspect-[4/3]" },
  { src: "/images/g4.png", alt: "VIP lounge experience",         span: "lg:col-span-2 lg:row-span-1", aspect: "aspect-[21/9]" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="gallery" ref={sectionRef} className="bg-[var(--color-void)] py-28 lg:py-40 overflow-hidden noise">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)]">
                The Portfolio
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-[var(--color-ivory)]">
              Visual <em className="text-[var(--color-gold-lt)]">Excellence</em>
            </h2>
          </div>
          <a
            href="#"
            data-hover
            className="flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-[var(--color-ash)] hover:text-[var(--color-gold)] transition-colors group w-fit"
          >
            <span>View on Instagram</span>
            <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-500 block" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className={`relative overflow-hidden group ${item.span} ${item.aspect}`}
              data-hover
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-1200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--color-ink)] opacity-40 group-hover:opacity-0 transition-opacity duration-700" />

              {/* Caption overlay */}
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[var(--color-pearl)] bg-[var(--color-ink)]/70 px-3 py-2 backdrop-blur-sm">
                  {item.alt}
                </span>
              </div>

              {/* Border corners */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[var(--color-gold)] opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[var(--color-gold)] opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
