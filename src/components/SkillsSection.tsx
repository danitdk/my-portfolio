"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const categories = [
    {
      title: "Frontend & Interface",
      description: "Modern, responsive & interactive UI systems.",
      accent: "from-cyan-500/10 to-transparent",
      iconBg: "bg-cyan-950/40 text-cyan-400 border-cyan-800/30",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
    },
    {
      title: "Logic, Architecture & State",
      description: "Performant backends & clean data modeling.",
      accent: "from-violet-500/10 to-transparent",
      iconBg: "bg-violet-950/40 text-violet-400 border-violet-800/30",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M12 3v18m0-18l-3 3m3-3l3 3m-6 12l-3 3m3-3l3 3" />
        </svg>
      ),
      skills: ["Node.js", "RESTful APIs", "State Management", "Data Modeling", "Client-Side Routing"]
    },
    {
      title: "Development Tools & Ecosystem",
      description: "High-efficiency developer tooling & deployment.",
      accent: "from-blue-500/10 to-transparent",
      iconBg: "bg-blue-950/40 text-blue-400 border-blue-800/30",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Git & GitHub", "Cursor AI", "VS Code", "Vite", "Vercel / Netlify", "GlideOS"]
    }
  ];

  return (
    <section id="skills" className="relative w-full py-28 px-4 bg-[#010204] text-white overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Centered Typography Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-5 h-5 rounded-full bg-slate-800/80 border border-white/25 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
              Tools &amp; Architecture
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-sans font-light">
            A modern arsenal optimized for performance, scalability, and robust developer experience.
          </p>
        </div>

        {/* Spacious side-by-side card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-9">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl border border-white/20 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-[#080c14]/60 backdrop-blur-md p-8 overflow-hidden transition-all flex flex-col justify-between"
            >
              {/* Top ambient glow on hover */}
              <div className={`absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-tr ${cat.accent} rounded-full blur-2xl opacity-40`} />

              <div>
                {/* Visual Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-11 h-11 rounded-2xl border border-white/20 ${cat.iconBg} flex items-center justify-center`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                    <p className="text-[11px] sm:text-[12px] text-slate-400 font-sans mt-0.5 leading-snug">{cat.description}</p>
                  </div>
                </div>

                {/* Grid Skills Rounded Tag Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2 relative z-10">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium bg-[#0c111f]/90 border border-white/15 text-slate-200 px-3.5 py-2 rounded-full hover:border-white/35 hover:shadow-[0_0_10px_rgba(255,255,255,0.08)] transition-all"
                    >
                      <span className="text-[10px] text-slate-400">✦</span> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
