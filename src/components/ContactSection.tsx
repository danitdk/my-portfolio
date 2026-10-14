"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      setLoading(true);
      const response = await fetch("https://formspree.io/f/xaeqpwwr", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 px-4 bg-[#010204] text-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Centered Typography Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center gap-3.5 mb-5">
            <div className="w-5 h-5 rounded-full bg-slate-800/80 border border-slate-600 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
              Get In Touch
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-sans font-light">
            Whether you have a project in mind, need technical collaboration, or simply want to connect.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
          {/* Left: Interactive Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card */}
            <a
              href="mailto:danielteshome335@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#080c14]/60 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase">Email Direct</span>
                <span className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  danielteshome335@gmail.com
                </span>
              </div>
            </a>

            {/* Telegram Card (Official Telegram Icon Added) */}
            <a
              href="https://t.me/daniTKD3"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#080c14]/60 border border-slate-800 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-950/40 border border-violet-800/40 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                {/* Official Telegram Airplane Icon */}
                <svg className="w-5.5 h-5.5 transform -translate-x-[1px] translate-y-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2L2 9.3l7 3.2 4.2-4.2 1 1-4.2 4.2 3.2 7L21 2z" />
                </svg>
              </div>
              <div>
                <span className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase">Telegram</span>
                <span className="text-white font-medium text-sm sm:text-base group-hover:text-violet-300 transition-colors">
                  @daniTKD3
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+251935368595"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#080c14]/60 border border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase">Phone / Call</span>
                <span className="text-white font-medium text-sm sm:text-base group-hover:text-emerald-300 transition-colors">
                  0935368595
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#080c14]/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase">Location</span>
                <span className="text-white font-medium text-sm sm:text-base">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Right: Modern Connected Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#080c14]/70 border border-slate-800 p-7 sm:p-8 backdrop-blur-md relative">
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#080c14] rounded-3xl p-8 flex flex-col items-center justify-center text-center z-20"
              >
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm mb-6">
                  Thank you, Danny will get back to you at danielteshome335@gmail.com soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-3 rounded-xl bg-[#050810] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#050810] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  name="_subject"
                  required
                  placeholder="Project Inquiry / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[#050810] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about your project goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050810] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
