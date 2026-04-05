"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-visible">
      {/* Main Artist Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[420px] xl:h-[420px] drop-shadow-2xl"
      >
        <Image
          src="/1.jpg"
          alt="Artist Photo"
          fill
          priority
          quality={100}
          className="object-cover rounded-full border-[4px] border-[#d1a655]/40"
        />

        {/* Warm golden tint overlay */}
        <div className="absolute inset-0 rounded-full bg-[#d1a655]/10 mix-blend-soft-light pointer-events-none" />
      </motion.div>

      {/* Animated glowing ring */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="absolute rounded-full"
      >
        <div
          className="
            w-[340px] h-[340px]
            sm:w-[380px] sm:h-[380px]
            xl:w-[500px] xl:h-[500px]
            rounded-full
            border-[1.5px]
            border-[#d1a655]/40
            shadow-[0_0_70px_12px_rgba(209,166,85,0.25)]
            animate-pulse
          "
        ></div>
      </motion.div>

      {/* Soft glowing background aura */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="
          absolute w-[500px] h-[500px] xl:w-[650px] xl:h-[650px]
          rounded-full
          bg-[#d1a655]/20 blur-3xl
          pointer-events-none
        "
      ></motion.div>
    </div>
  );
}

export default Photo;
