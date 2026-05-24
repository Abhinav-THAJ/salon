"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services",  href: "#services"  },
  { label: "Artisans",  href: "#artisans"  },
  { label: "Gallery",   href: "#gallery"   },
  { label: "Atelier",   href: "#about"     },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrollDir,   setScrollDir]   = useState<"up"|"down">("up");
  const [lastY,       setLastY]       = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setScrollDir(y > lastY && y > 120 ? "down" : "up");
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      <motion.header
        animate={{ y: scrollDir === "down" && scrolled && !menuOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" data-hover>
            <div className="w-7 h-7 border border-[var(--color-gold)] rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
            <span className="font-display text-2xl tracking-[0.25em] text-[var(--color-ivory)] uppercase">
              Obsidian
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                data-hover
                className="relative font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-ash)] hover:text-[var(--color-ivory)] transition-colors duration-300 group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-gold)] group-hover:w-full transition-all duration-400" />
              </a>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-6">
            <a
              href="#book"
              data-hover
              className="hidden lg:block px-7 py-3 text-xs tracking-[0.25em] uppercase font-medium border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-all duration-400"
            >
              Reserve
            </a>

            <button
              data-hover
              onClick={() => setMenuOpen(o => !o)}
              className="flex flex-col gap-[5px] w-8 lg:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                className="block w-full h-px bg-[var(--color-ivory)] origin-center transition-all"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 10 : 0 }}
                className="block w-2/3 h-px bg-[var(--color-ivory)]"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                className="block w-full h-px bg-[var(--color-ivory)] origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-ink)] flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-5xl italic text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors"
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#book"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className="mt-8 px-10 py-4 text-xs tracking-[0.25em] uppercase border border-[var(--color-gold)] text-[var(--color-gold)]"
            >
              Reserve
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
