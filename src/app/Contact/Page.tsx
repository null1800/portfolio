"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-lg mx-auto p-8 rounded-2xl shadow-2xl space-y-5 
                 bg-[#2a1f17] border border-[#4a362a] text-white 
                 backdrop-blur-sm"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-amber-400 text-center"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-gray-300 text-center"
      >
        Have a question or just want to say hi? Drop me a message!
      </motion.p>

      <motion.input
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-3 rounded-lg bg-[#403227] text-white 
                   placeholder-gray-400 focus:outline-none 
                   focus:ring-2 focus:ring-amber-400"
        required
      />

      <motion.input
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-3 rounded-lg bg-[#403227] text-white 
                   placeholder-gray-400 focus:outline-none 
                   focus:ring-2 focus:ring-amber-400"
        required
      />

      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full p-3 rounded-lg bg-[#403227] text-white 
                   placeholder-gray-400 focus:outline-none 
                   focus:ring-2 focus:ring-amber-400"
        rows={4}
        required
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="w-full py-3 rounded-lg font-semibold 
                   bg-amber-400 text-black 
                   hover:bg-amber-500 transition duration-200"
      >
        Send Message
      </motion.button>

      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-center text-sm text-gray-300"
        >
          {status}
        </motion.p>
      )}
    </motion.form>
  );
}
