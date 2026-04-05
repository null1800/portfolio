"use client";

import { motion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import Socials from "@/components/ui/Socials";
import Footer from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

import AboutSection from "@/app/About/Page";
import ShowsSection from "@/app/Shows/Page";
import NewsSection from "@/app/News/Page";
import ContactSection from "@/app/Contact/Page";
import VideoStrip from "@/components/sections/VideoStrip";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-playfair" });

export default function Page() {
  return (
    <div className={`${inter.variable} ${playfair.variable} bg-[#35281e] text-[#0c0c0c]`}>
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 bg-gradient-radial from-[#35281e] via-[#2a1e16] to-[#1a120d]"
      >
        <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse xl:flex-row items-center justify-between gap-8 xl:gap-12 xl:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center xl:text-left space-y-5 max-w-xl w-full"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="uppercase tracking-widest text-amber-400 text-sm sm:text-base font-[var(--font-inter)]"
            >
              Recording Artist
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="font-[var(--font-playfair)] leading-tight text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
            >
              BLAKE ZAMBIA
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Singer, Songwriter & Recording Artist
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="text-amber-300 font-[var(--font-inter)] text-base sm:text-lg"
            >
              Over 10 Million Streams Across Platforms
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-slate-200 max-w-lg"
            >
              Delivering soulful performances and chart-topping hits, blending modern production with timeless storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex gap-4 justify-center xl:justify-start pt-4"
            >
              <Socials />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg flex justify-center xl:justify-end"
          >
            <Photo />
          </motion.div>
        </div>
      </section>

      {/* Imported Sections */}
      <AboutSection />
      <VideoStrip />
      <ShowsSection />
      <NewsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
