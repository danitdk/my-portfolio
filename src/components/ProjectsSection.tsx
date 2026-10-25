"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  technologies: string[];
  tags?: string[];
  glowColor?: string;
  buttonStyle?: string;
  imageUrl: string;
  image?: string;
  fallbackImageUrl?: string;
  link?: string;
  github?: string;
}

function ProjectCardImage({ project }: { project: Project }) {
  const primarySrc = project.imageUrl || project.image || "";
  const fallbackSrc =
    project.fallbackImageUrl ||
    "/images/paulos-zenebe.svg";
  const emergencySrc =
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80";

  const [currentSrc, setCurrentSrc] = useState<string>(primarySrc || fallbackSrc);
  const [errorCount, setErrorCount] = useState<number>(0);

  useEffect(() => {
    if (!primarySrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }

    // Verify if local/remote image can be fetched successfully
    const img = new Image();
    img.src = primarySrc;
    img.onload = () => {
      setCurrentSrc(primarySrc);
    };
    img.onerror = () => {
      // Primary failed (e.g. 404 missing local file), switch to fallback
      setCurrentSrc(fallbackSrc);
    };
  }, [primarySrc, fallbackSrc]);

  const handleImgError = () => {
    if (errorCount === 0) {
      setErrorCount(1);
      setCurrentSrc(fallbackSrc);
    } else if (errorCount === 1) {
      setErrorCount(2);
      setCurrentSrc(emergencySrc);
    }
  };

  return (
    <div className="relative w-full aspect-[16/10] bg-[#03060c] rounded-xl overflow-hidden mb-6 border border-white/15">
      <img
        src={currentSrc}
        alt={project.title}
        onError={handleImgError}
        className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />
      <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-slate-950/80 border border-white/20 text-white px-3 py-1 rounded-full">
        {project.category}
      </span>
    </div>
  );
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "01",
      title: "Kedame Betoch Gebeya",
      location: "Ethiopia",
      category: "Full-Stack Web Platform",
      description: "A modern bilingual property discovery and brokerage platform featuring high-performance filtering, dynamic listings, and responsive mobile-first ergonomics.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      glowColor: "border-cyan-500/80 shadow-[0_0_18px_rgba(6,182,212,0.25)]",
      buttonStyle: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "02",
      title: "Corporate Enterprise Web Portal",
      location: "International",
      category: "Secure Enterprise Solution",
      description: "A high-security, robust portal designed for enterprise-level resource management, secure transactions, and seamless inter-departmental workflows.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      glowColor: "border-emerald-400/80 shadow-[0_0_18px_rgba(52,211,153,0.25)]",
      buttonStyle: "bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "03",
      title: "Paulos Zenebe Import & Export",
      location: "Ethiopia",
      category: "Medical Equipment Platform",
      description: "Medical equipment import and export platform. Optimized frontend visual assets, overhauled the five stages showcase, and resolved TypeScript build issues for production deployment.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      glowColor: "border-sky-400/80 shadow-[0_0_18px_rgba(56,189,248,0.25)]",
      buttonStyle: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold",
      imageUrl: "/images/paulos-zenebe.png",
      image: "/images/paulos-zenebe.png",
      fallbackImageUrl: "/images/paulos-zenebe.svg",
      link: "https://hospital-property.vercel.app",
      github: "https://github.com/itsyaba/paulos-zenebe",
    }
  ];

  return (
    <section id="projects" className="relative w-full py-24 px-4 bg-[#010204] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 rounded-full bg-slate-800/80 border border-white/25 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">Selected Works</h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A curated selection of robust platforms, interactive user interfaces, and data-driven solutions built with precision.
          </p>
        </div>

        {/* side-by-side grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col rounded-2xl bg-[#090d16]/95 border border-white/20 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden p-5 md:p-6 transition-all duration-300 h-full"
            >
              {/* Image Preview Container with Smart Fallback */}
              <ProjectCardImage project={project} />

              {/* Title and details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col gap-1.5 mb-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-snug flex-1 min-w-[190px]">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono font-medium text-slate-400 shrink-0 whitespace-nowrap self-start pt-0.5">
                        — {project.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.technologies || project.tags || []).map((tech) => (
                      <span key={tech} className="text-xs font-mono bg-slate-900/80 border border-white/15 text-slate-300 px-2.5 py-1 rounded hover:border-white/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.link || "#"}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm ${project.buttonStyle || "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold"} transition-all`}
                  >
                    Check It Out
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm border border-white/20 bg-slate-900/80 text-slate-300 hover:text-white hover:border-white/40 hover:bg-slate-800 transition-all font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
