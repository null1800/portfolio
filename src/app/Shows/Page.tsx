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
}); // <-- Fixed: removed extra parenthesis

// Example show data
const shows = [
  { date: "Sep 30, 2025", venue: "The Arena, Lusaka, Zambia", city: "Lusaka", link: "#" },
  { date: "Oct 15, 2025", venue: "Zambezi Hall, Livingstone, Zambia", city: "Livingstone", link: "#" },
  { date: "Nov 5, 2025", venue: "Victoria Hall, Kitwe, Zambia", city: "Kitwe", link: "#" },
];

export default function UpcomingShows() {
  return (
    <section
      id="shows"
      className={`py-20 sm:py-28 bg-[#35281e] text-white ${inter.variable} ${playfair.variable}`}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-playfair)] text-amber-400 mb-12 drop-shadow-xl"
        >
          Upcoming Shows
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {shows.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="bg-[#2a1e16] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-amber-400 font-semibold text-lg sm:text-xl">{show.date}</p>
              <h3 className="text-white font-bold text-xl sm:text-2xl mt-2">{show.venue}</h3>
              <p className="text-gray-300 text-base sm:text-lg mt-1">{show.city}</p>
              <a
                href={show.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-full bg-amber-400 text-[#35281e] font-semibold hover:bg-yellow-400 transition-colors duration-300"
              >
                Buy Tickets
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}