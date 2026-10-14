"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      id: "01",
      title: "Kedame Betoch Gebeya",
      location: "Ethiopia",
      category: "Full-Stack Web Platform",
      description: "A modern bilingual property discovery and brokerage platform featuring high-performance filtering, dynamic listings, and responsive mobile-first ergonomics.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      glowColor: "border-cyan-500/80 shadow-[0_0_18px_rgba(6,182,212,0.25)]",
      buttonStyle: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "02",
      title: "Corporate Enterprise Web Portal",
      location: "International",
      category: "Secure Enterprise Solution",
      description: "A high-security, robust portal designed for enterprise-level resource management, secure transactions, and seamless inter-departmental workflows.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      glowColor: "border-emerald-400/80 shadow-[0_0_18px_rgba(52,211,153,0.25)]",
      buttonStyle: "bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section id="projects" className="relative w-full py-24 px-4 bg-[#010204] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">Selected Works</h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A curated selection of robust platforms, interactive user interfaces, and data-driven solutions built with precision.
          </p>
        </div>

        {/* side-by-side grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col rounded-2xl bg-[#090d16]/95 border-2 ${project.glowColor} overflow-hidden p-5 md:p-6 transition-all duration-300`}
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[16/10] bg-[#03060c] rounded-xl overflow-hidden mb-6 border border-slate-800/60">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-slate-950/80 border border-slate-800/80 text-cyan-400 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Title and details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-bold font-serif text-white">{project.title}</h3>
                    <span className="text-xs font-medium text-slate-400">— {project.location}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* check it out Buttons */}
                <div className="flex gap-4 pt-2">
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm ${project.buttonStyle} transition-all`}
                  >
                    Check It Out
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
