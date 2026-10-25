"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/15 py-10 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm relative z-10 gap-4">
      {/* Left */}
      <div className="font-mono text-xs text-slate-400">
        &copy; {2026} Daniel Teshome. All rights reserved.
      </div>

      {/* Center */}
      <div className="text-xs text-slate-400 text-center">
        Built with Next.js, Tailwind CSS &amp; Framer Motion.
      </div>

      {/* Right */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        <span>Back to top</span>
        <div className="p-2 rounded-full border border-white/20 bg-slate-900 group-hover:border-white/40 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all">
          <ArrowUp className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
        </div>
      </button>
    </footer>
  );
}
