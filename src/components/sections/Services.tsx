"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "The Signature Cut",
    tagline: "Your silhouette, perfected.",
    detail: "A fully bespoke haircut — consultation, precision cut, scalp massage, and a hand-finished style using premium pomades. 60 mins.",
    price: "$95",
    tag: "Most Popular",
  },
  {
    num: "02",
    title: "Luxury Beard Architecture",
    tagline: "Sculpted. Defined. Unmistakable.",
    detail: "Hot-towel preparation, artisan beard sculpting, straight razor line-up, conditioning balm, and facial massage. 45 mins.",
    price: "$65",
    tag: "",
  },
  {
    num: "03",
    title: "The Royal Shave",
    tagline: "An ancient ritual, reimagined.",
    detail: "Full pre-shave oil ritual, steamed hot towels, traditional lather, straight razor shave, cold compress, and aftershave treatment. 50 mins.",
    price: "$80",
    tag: "Signature",
  },
  {
    num: "04",
    title: "Skin Fade Masterclass",
    tagline: "Seamless. Surgical. Stunning.",
    detail: "Graduate fades blended to perfection by our senior artisans using professional-grade clippers and finishing tools. 50 mins.",
    price: "$85",
    tag: "",
  },
  {
    num: "05",
    title: "Hair Spa Ritual",
    tagline: "Restoration from root to tip.",
    detail: "Deep-cleanse scalp treatment, argan oil mask, infrared heat therapy, and a luxury blow-dry finish. 75 mins.",
    price: "$120",
    tag: "",
  },
  {
    num: "06",
    title: "VIP Private Suite",
    tagline: "Reserved for the discerning few.",
    detail: "Exclusive private suite experience — haircut, beard, shave, facial, welcome whiskey or espresso. By appointment only. 120 mins.",
    price: "$220",
    tag: "VIP",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="bg-[var(--color-ink)] py-28 lg:py-40">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)]">
                The Repertoire
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-[var(--color-ivory)]">
              Curated <em className="text-[var(--color-gold-lt)]">Services</em>
            </h2>
          </div>
          <p className="font-sans text-sm text-[var(--color-ash)] max-w-xs leading-loose">
            Every service is a ceremony. Each appointment, a ritual of self-mastery.
          </p>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-[var(--color-carbon)]">
          {SERVICES.map((svc, i) => (
            <div key={i}>
              <button
                data-hover
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center gap-6 lg:gap-10 py-7 text-left group"
              >
                <span className="font-display text-sm text-[var(--color-mist)] w-8 shrink-0">{svc.num}</span>
                <span className="font-display text-2xl md:text-3xl text-[var(--color-ivory)] group-hover:text-[var(--color-gold-lt)] transition-colors flex-1">
                  {svc.title}
                </span>
                {svc.tag && (
                  <span className="hidden sm:block px-3 py-1 text-[9px] tracking-[0.25em] uppercase border border-[var(--color-gold)]/40 text-[var(--color-gold)] shrink-0">
                    {svc.tag}
                  </span>
                )}
                <span className="font-display text-xl text-[var(--color-gold)] shrink-0 ml-auto">{svc.price}</span>
                <motion.span
                  animate={{ rotate: active === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--color-gold)] text-2xl leading-none shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-[3.5rem] lg:pl-[5.5rem] pb-8 pr-4 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                      <div>
                        <p className="font-display italic text-[var(--color-gold-lt)] mb-3">{svc.tagline}</p>
                        <p className="font-sans text-sm text-[var(--color-ash)] leading-loose max-w-xl">{svc.detail}</p>
                      </div>
                      <a
                        href="#book"
                        data-hover
                        className="shrink-0 px-7 py-3 text-xs tracking-[0.25em] uppercase border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-all duration-300"
                      >
                        Reserve
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
