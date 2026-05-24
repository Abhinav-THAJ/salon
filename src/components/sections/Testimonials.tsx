"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Walking into Obsidian feels like entering a different world. The level of craft, the atmosphere, the precision — nothing compares.",
    author: "James M.",
    location: "London, UK",
    service: "The Royal Shave",
  },
  {
    quote: "I've been to the finest barbers in Paris and New York. Obsidian is not just a haircut — it is a statement.",
    author: "Alexander R.",
    location: "Dubai, UAE",
    service: "VIP Private Suite",
  },
  {
    quote: "Arthur transformed not just my hair, but my entire perception of what a grooming experience can be.",
    author: "Marcus T.",
    location: "New York, USA",
    service: "Signature Cut",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[var(--color-carbon)] py-28 lg:py-40 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="gold-line" />
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)]">
            Client Voices
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--color-slate)]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative bg-[var(--color-carbon)] p-10 lg:p-14 flex flex-col justify-between group hover:bg-[var(--color-void)] transition-colors duration-500"
              data-hover
            >
              {/* Decorative quote mark */}
              <div className="font-display text-[8rem] leading-none text-[var(--color-slate)] absolute top-4 left-8 select-none pointer-events-none group-hover:text-[var(--color-mist)] transition-colors duration-500">
                "
              </div>

              <div className="relative z-10">
                <p className="font-display text-xl italic leading-relaxed text-[var(--color-pearl)] mb-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="relative z-10 border-t border-[var(--color-slate)] pt-6 flex items-end justify-between">
                <div>
                  <p className="font-sans text-sm font-medium text-[var(--color-ivory)]">{t.author}</p>
                  <p className="font-sans text-xs text-[var(--color-ash)] mt-1">{t.location}</p>
                </div>
                <span className="text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 border border-[var(--color-gold)]/30 text-[var(--color-gold)]">
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
