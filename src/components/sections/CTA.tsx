"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="book" className="relative bg-[var(--color-ink)] py-0 overflow-hidden">
      {/* Split layout */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left – Image */}
        <div className="relative order-2 lg:order-1 h-80 lg:h-auto overflow-hidden">
          <Image
            src="/images/g2.png"
            alt="Reserve your appointment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-ink)] hidden lg:block" />
        </div>

        {/* Right – Copy + Form */}
        <div className="order-1 lg:order-2 flex flex-col justify-center px-6 lg:px-20 py-24 bg-[var(--color-void)] noise">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="gold-line" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)]">
                Reserve Your Place
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-ivory)] mb-6 leading-tight">
              Elevate Your <br />
              <em className="text-[var(--color-gold-lt)]">Grooming</em>
            </h2>

            <p className="font-sans text-sm text-[var(--color-ash)] leading-loose mb-12 max-w-sm">
              Luxury grooming tailored for the modern gentleman. Limited appointments available each week.
            </p>

            {/* Booking form */}
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-ash)] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-[var(--color-slate)] px-4 py-3 text-sm text-[var(--color-ivory)] focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-mist)]"
                    placeholder="James"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-ash)] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-[var(--color-slate)] px-4 py-3 text-sm text-[var(--color-ivory)] focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-mist)]"
                    placeholder="Mitchell"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-ash)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-[var(--color-slate)] px-4 py-3 text-sm text-[var(--color-ivory)] focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-mist)]"
                  placeholder="james@company.com"
                />
              </div>
              <div>
                <label className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[var(--color-ash)] mb-2">
                  Service
                </label>
                <select className="w-full bg-[var(--color-void)] border border-[var(--color-slate)] px-4 py-3 text-sm text-[var(--color-ash)] focus:outline-none focus:border-[var(--color-gold)] transition-colors">
                  <option value="">Select a service</option>
                  <option>The Signature Cut — $95</option>
                  <option>Luxury Beard Architecture — $65</option>
                  <option>The Royal Shave — $80</option>
                  <option>Skin Fade Masterclass — $85</option>
                  <option>Hair Spa Ritual — $120</option>
                  <option>VIP Private Suite — $220</option>
                </select>
              </div>
              <button
                type="submit"
                data-hover
                className="w-full py-4 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[var(--color-gold-pale)] transition-colors duration-400 mt-4"
              >
                Confirm Reservation
              </button>
            </form>

            <p className="font-sans text-[9px] text-[var(--color-mist)] tracking-wider mt-6 text-center">
              Or call our concierge: <a href="tel:+97141234567" className="text-[var(--color-gold)] hover:underline">+971 4 123 4567</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
