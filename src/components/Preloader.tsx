"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const welcomeLetters = ["W", "e", "l", "c", "o", "m", "e"];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [stage, setStage] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Stage 1: Ultra-smooth spin into place
    const t1 = setTimeout(() => setStage(2), 2600);
    // Stage 2: Smooth lid raise
    const t2 = setTimeout(() => setStage(3), 5200);
    // Stage 3: Letters type out smoothly and pause
    const t3 = setTimeout(() => setStage(4), 8600);
    // Stage 4: Massive zoom into screen & finish
    const t4 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
      document.body.style.overflow = "unset";
    }, 10200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none"
        style={{ perspective: 1200 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
      >
        {/* Main Laptop Wrapper with hardware acceleration */}
        <motion.div
          className="relative flex flex-col items-center justify-center will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
          animate={
            stage === 4
              ? {
                  scale: 32,
                  z: 1200,
                  transition: { duration: 1.4, ease: [0.65, 0, 0.35, 1] },
                }
              : {}
          }
        >
          {/* Laptop Screen Lid */}
          <motion.div
            className="relative w-[320px] h-[200px] sm:w-[460px] sm:h-[290px] bg-neutral-950 rounded-t-xl border border-neutral-700/80 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex items-center justify-center overflow-hidden will-change-transform"
            style={{
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
            initial={{ rotateX: -92, opacity: 0 }}
            animate={
              stage === 1
                ? {
                    rotateX: -92,
                    rotateY: [-140, 0],
                    rotateZ: [-10, 0],
                    scale: [0.35, 1],
                    opacity: 1,
                    transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
                  }
                : stage >= 2
                ? {
                    rotateX: 0,
                    opacity: 1,
                    transition: { duration: 2.3, ease: [0.2, 0.9, 0.3, 1] },
                  }
                : {}
            }
          >
            {/* Subtle Display Glow & Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-neutral-950 to-slate-400/[0.03] pointer-events-none" />
            <div className="absolute w-44 h-44 bg-white/[0.04] rounded-full blur-2xl pointer-events-none" />

            {/* Smooth WELCOME Character Reveal (Matching Hero Typography) */}
            {stage >= 3 && (
              <div className="relative z-10 flex items-center justify-center font-serif font-bold text-white tracking-tight text-4xl sm:text-6xl md:text-7xl">
                {welcomeLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 14, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.2,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="inline-block drop-shadow-[0_0_30px_rgba(255,255,255,0.45)] will-change-transform"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Laptop Base (Fades out seamlessly during zoom) */}
          <motion.div
            className="w-[340px] h-[14px] sm:w-[490px] sm:h-[18px] bg-neutral-800 rounded-b-lg border-t border-neutral-700 shadow-2xl will-change-opacity"
            animate={stage === 4 ? { opacity: 0, transition: { duration: 0.3 } } : { opacity: 1 }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
