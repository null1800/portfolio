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

export default function About() {
  return (
    <section
      id="about"
      className={`py-20 sm:py-28 bg-[#2a1e16] text-white ${inter.variable} ${playfair.variable}`}
    >
      <div className="container mx-auto px-4 flex flex-col items-center gap-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="max-w-3xl space-y-8"
        >
          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-playfair)] text-amber-400 drop-shadow-xl"
          >
            About Blake Zambia
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-200 font-[var(--font-inter)] text-lg sm:text-xl md:text-2xl leading-relaxed"
          >
            Blake Zambia is a multi-talented recording artist blending soulful
            melodies with contemporary beats. With over 10 million streams
            across major platforms, he has carved a unique space in the music
            industry. His journey is defined by passion, creativity, and
            dedication to delivering unforgettable music.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-300 font-[var(--font-inter)] text-lg sm:text-xl md:text-2xl leading-relaxed"
          >
            From intimate live performances to chart-topping hits, Blake
            continues to inspire fans worldwide. His music merges modern
            production with timeless storytelling, creating a signature sound
            that resonates with audiences of all ages.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}