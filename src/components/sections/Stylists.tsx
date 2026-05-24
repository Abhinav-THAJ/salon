"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ARTISANS = [
  {
    name: "Arthur Pendleton",
    title: "Founder & Master Artisan",
    specialty: "Classic Cuts · Straight Razor",
    bio: "Trained in the finest Mayfair barber academies before establishing Obsidian in 2010. Arthur's touch is unmistakable — architectural, unhurried, timeless.",
    image: "/images/s1.png",
  },
  {
    name: "Julian Cross",
    title: "Senior Artisan",
    specialty: "Skin Fades · Beard Sculpting",
    bio: "A graduate of the Dubai Grooming Institute, Julian brings razor-sharp precision and an artist's eye to every appointment.",
    image: "/images/s2.png",
  },
  {
    name: "Marcus Vance",
    title: "Grooming Specialist",
    specialty: "Texture · Color · Restoration",
    bio: "Marcus elevated colour as a craft. His techniques draw from Parisian ateliers and Los Angeles editorial studios alike.",
    image: "/images/s3.png",
  },
];

export default function Stylists() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="artisans" className="bg-[var(--color-carbon)] py-28 lg:py-40 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="gold-line" />
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)]">
            The Artisans
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <h2 className="font-display text-5xl md:text-6xl text-[var(--color-ivory)]">
            Masters of <em className="text-[var(--color-gold-lt)]">Their Craft</em>
          </h2>
          <a
            href="#book"
            data-hover
            className="flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-[var(--color-ash)] hover:text-[var(--color-gold)] transition-colors group w-fit"
          >
            <span>Book Any Artisan</span>
            <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-500 block" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {ARTISANS.map((a, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative group overflow-hidden aspect-[3/4] bg-[var(--color-void)]"
              data-hover
            >
              <Image
                src={a.image}
                alt={a.name}
                fill
                className="object-cover object-top transition-all duration-1000 group-hover:scale-105"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent" />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-4 h-px bg-[var(--color-gold)] block" />
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)]">
                    {a.specialty}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[var(--color-ivory)] mb-1">{a.name}</h3>
                <p className="font-sans text-xs tracking-[0.1em] text-[var(--color-ash)]">{a.title}</p>

                {/* Bio reveal on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 12 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 font-sans text-xs leading-loose text-[var(--color-pearl)]"
                >
                  {a.bio}
                </motion.div>

                <motion.a
                  href="#book"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 8 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="mt-5 inline-block px-6 py-3 text-[10px] tracking-[0.25em] uppercase bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold hover:bg-[var(--color-gold-pale)] transition-colors"
                >
                  Book {a.name.split(" ")[0]}
                </motion.a>
              </div>

              {/* Corner ornament */}
              <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-[var(--color-gold)]/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
