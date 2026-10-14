"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);

  // Motion values for raw mouse coordinates (initial position offscreen)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Ultra-smooth spring trailing physics
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Fixed background radial mesh aura following the cursor coordinates
  const auraBackground = useMotionTemplate`radial-gradient(650px circle at ${cursorXSpring}px ${cursorYSpring}px, rgba(34, 211, 238, 0.12), rgba(168, 85, 247, 0.05), transparent 70%)`;

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Background radial mesh aura */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-40 hidden md:block"
        style={{ background: auraBackground }}
      />

      {/* Outer subtle cyan ring */}
      <motion.div
        className="w-8 h-8 rounded-full border border-cyan-400/70 -translate-x-1/2 -translate-y-1/2 pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />

      {/* Inner glowing point */}
      <motion.div
        className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] -translate-x-1/2 -translate-y-1/2 pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}
