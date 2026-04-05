"use client";

import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className={`py-20 sm:py-28 bg-[#35281e] text-white ${inter.variable} ${playfair.variable}`}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-playfair)] text-amber-400 mb-6 font-extrabold drop-shadow-lg"
        >
          Join the Newsletter
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-300 text-lg sm:text-xl mb-12 max-w-2xl mx-auto"
        >
          Stay updated with Blake’s latest releases, shows, and exclusive
          content. Sign up and never miss an update!
        </motion.p>

        {/* Newsletter Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-full bg-[#2a1e16] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition text-lg"
          />
          <button
            type="submit"
            className="bg-amber-400 text-[#35281e] font-extrabold rounded-full px-8 py-4 text-lg sm:text-xl hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-2xl"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
