"use client";

import Link from "next/link";

const QUICK_LINKS = ["Services", "Artisans", "Gallery", "Atelier", "Reserve"];
const LOCATIONS   = ["Dubai, UAE", "London, UK", "New York, USA"];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] border-t border-[var(--color-carbon)] relative overflow-hidden">
      {/* Giant Background wordmark */}
      <div className="pointer-events-none select-none absolute bottom-0 left-0 right-0 font-display font-bold text-[18vw] leading-none text-[var(--color-carbon)] tracking-tighter text-center opacity-50 translate-y-1/3">
        OBSIDIAN
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group" data-hover>
              <div className="w-6 h-6 border border-[var(--color-gold)] rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
              <span className="font-display text-3xl tracking-[0.2em] text-[var(--color-ivory)] uppercase">Obsidian</span>
            </Link>
            <p className="font-sans text-sm text-[var(--color-ash)] leading-loose max-w-sm mb-8">
              A sanctuary of precision and refinement. The premier luxury grooming atelier for the discerning gentleman — Dubai, London, New York.
            </p>
            <div className="flex gap-6">
              {["IG", "FB", "X", "YT"].map(s => (
                <a
                  key={s}
                  href="#"
                  data-hover
                  className="font-sans text-[10px] tracking-[0.2em] text-[var(--color-ash)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-[var(--color-gold)] mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {QUICK_LINKS.map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    data-hover
                    className="font-sans text-sm text-[var(--color-ash)] hover:text-[var(--color-ivory)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-[var(--color-gold)] mb-6">
              Contact
            </p>
            <ul className="space-y-3 font-sans text-sm text-[var(--color-ash)]">
              <li className="hover:text-[var(--color-ivory)] transition-colors">
                <a href="tel:+97141234567" data-hover>+971 4 123 4567</a>
              </li>
              <li className="hover:text-[var(--color-ivory)] transition-colors">
                <a href="mailto:concierge@obsidian.com" data-hover>concierge@obsidian.com</a>
              </li>
              {LOCATIONS.map(l => (
                <li key={l} className="text-[var(--color-mist)]">{l}</li>
              ))}
            </ul>

            <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-[var(--color-gold)] mt-8 mb-4">
              Hours
            </p>
            <ul className="space-y-2 font-sans text-xs text-[var(--color-ash)]">
              <li className="flex justify-between gap-4"><span>Mon – Fri</span><span>9AM – 9PM</span></li>
              <li className="flex justify-between gap-4"><span>Saturday</span><span>10AM – 8PM</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-carbon)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] tracking-[0.15em] text-[var(--color-mist)]">
            &copy; {new Date().getFullYear()} Obsidian Grooming Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Accessibility"].map(l => (
              <a key={l} href="#" data-hover className="font-sans text-[10px] text-[var(--color-mist)] hover:text-[var(--color-ash)] transition-colors tracking-widest uppercase">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
