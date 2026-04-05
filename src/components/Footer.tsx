"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
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

export default function Footer() {
  return (
    <footer className={`bg-[#0f0a08] text-white py-12 ${inter.variable} ${playfair.variable}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-700 pb-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="text-3xl font-[var(--font-playfair)] font-extrabold text-amber-400 drop-shadow-lg"
          >
            BZ<span className="text-yellow-400">.</span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 font-[var(--font-inter)] text-gray-300 text-lg"
        >
          <Link href="#home" className="hover:text-amber-400 transition">Home</Link>
          <Link href="#about" className="hover:text-amber-400 transition">About</Link>
          <Link href="#music" className="hover:text-amber-400 transition">Music</Link>
          <Link href="#videos" className="hover:text-amber-400 transition">Videos</Link>
          <Link href="#contact" className="hover:text-amber-400 transition">Contact</Link>
        </motion.nav>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex gap-6 text-2xl text-gray-300"
        >
          <Link href="https://facebook.com" target="_blank" className="hover:text-amber-400 transition">
            <CiFacebook />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-amber-400 transition">
            <CiInstagram />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-amber-400 transition">
            <CiTwitter />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="hover:text-amber-400 transition">
            <CiYoutube />
          </Link>
        </motion.div>
      </div>

      {/* By Part */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-6 text-center text-gray-400 text-sm"
      >
        Designed & Developed by <span className="text-amber-400 font-semibold">Ray Mtonga</span>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="mt-2 text-center text-gray-500 text-sm"
      >
        &copy; {new Date().getFullYear()} Blake Zambia. All rights reserved.
      </motion.div>
    </footer>
  );
}
