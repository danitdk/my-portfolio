"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-4 bg-[#010204] text-white overflow-hidden select-none"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Header Title with Circular Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          {/* Circular accent icon */}
          <div className="w-5 h-5 rounded-full bg-slate-800/80 border border-white/25 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>

          {/* Serif Bold Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* 3. Balanced Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-sans"
        >
          Dedicated to software craftsmanship, clean architecture, and continuous self-mastery. I build systems that don&apos;t just work—they perform effortlessly.
        </motion.p>

        {/* 4. Minimalist Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-white/20 bg-[#06080d]/80 backdrop-blur-md p-7 hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all shadow-md group"
          >
            <div className="w-10 h-10 rounded-xl border border-white/20 bg-slate-900 flex items-center justify-center text-white mb-5 group-hover:border-white/40 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-colors">
              <span className="font-mono font-bold text-sm">&lt;/&gt;</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2.5">
              Software Builder &amp; CS Scholar
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              As a Computer Science student and software builder, I thrive at the intersection of complex problem-solving and modern web engineering. I transform abstract logic and architectural demands into high-performing, intuitive digital solutions.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="rounded-2xl border border-white/20 bg-[#06080d]/80 backdrop-blur-md p-7 hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all shadow-md group"
          >
            <div className="w-10 h-10 rounded-xl border border-white/20 bg-slate-900 flex items-center justify-center text-white mb-5 group-hover:border-white/40 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-mono text-xs tracking-wider text-slate-400 uppercase font-semibold block mb-1">
              MINDSET &amp; PHILOSOPHY
            </span>
            <h3 className="text-xl font-serif font-bold text-white mb-2.5">
              Disciplined Focus. Relentless Execution.
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Combining a martial arts mindset with software engineering. High performance comes from relentless practice, calculated design decisions, and calm focus under pressure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
