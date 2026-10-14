"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth 3D tilt tracking for immersive depth
  const springX = useSpring(mouseX, { stiffness: 45, damping: 16 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 16 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const bgTranslateX = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const bgTranslateY = useTransform(springY, [-0.5, 0.5], [-35, 35]);

  // Generates randomized, highly visible glowing pure white background particles
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3.5 + 1.5, // Bold and easily visible sizes
      delay: Math.random() * -12,
      duration: Math.random() * 8 + 5,
    }));
    setParticles(generated);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center bg-[#010204] overflow-hidden select-none px-4 pt-20"
      style={{ perspective: 1000 }}
    >
      {/* ===== 1. ABSOLUTE DEEP BLACK & HEAVILY VISIBLE PURE WHITE PARTICLES BACKGROUND ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          rotateX,
          rotateY,
          x: bgTranslateX,
          y: bgTranslateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle, Minimal Grid Overlay */}
        <div
          className="absolute inset-[-30%] opacity-[0.05] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(circle at 50% 50%, black, transparent)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, black, transparent)",
          }}
        />

        {/* Soft Cyber Backlight Accent (very faint so it remains deep dark but textured) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-100/[0.03] rounded-full blur-[140px] pointer-events-none" />

        {/* Cinematic Drifting Highly Visible Glowing Pure WHITE Dots / Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#ffffff]" // Changed color to Pure White
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)", // Glowing White outer effect
            }}
            animate={{
              y: ["0px", "-70px", "0px"],
              opacity: [0.35, 0.95, 0.35],
              scale: [0.85, 1.25, 0.85],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* ===== 2. MAIN PORTFOLIO CONTENT LAYER ===== */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Bright Pure WHITE / SILVER Circular Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-6"
        >
          {/* Intense Outer White Glow Ring */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-white via-slate-300 to-slate-400 opacity-80 blur-md animate-pulse" />
          
          {/* Ceramic Pure White Inner Circle Base */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#f8fafc] border-2 border-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.45)]">
            {/* Dark & Metallic Glow Laptop Icon */}
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#030712] drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" fill="currentColor" fillOpacity={0.05} />
              <path d="M2 18h20" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-800/80 bg-slate-900/40 backdrop-blur-md mb-8 hover:border-slate-500/35 hover:bg-slate-800/50 transition-all cursor-pointer shadow-sm group"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            Available for new projects
          </span>
        </motion.a>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-white tracking-tight mb-6"
        >
          Hi. I’m Daniel.
        </motion.h1>

        {/* Bio Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          I specialize in transforming designs into functional, high-performance,
          scalable websites and web applications.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-white text-slate-950 font-semibold text-sm sm:text-base hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
          >
            Explore My Work &darr;
          </a>

          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md text-slate-300 font-medium text-sm sm:text-base hover:bg-slate-800/80 transition-colors"
          >
            <svg
              className="w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
