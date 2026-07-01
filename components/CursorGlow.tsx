"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 350,
    damping: 28,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 350,
    damping: 28,
    mass: 0.5,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[99999]"
    >
      {/* Glow */}
      <div className="absolute -left-8 -top-8 h-16 w-16 rounded-full bg-violet-500/30 blur-2xl animate-pulse" />

      {/* Emoji */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/40 bg-black/30 text-xl shadow-[0_0_30px_rgba(168,85,247,0.7)] backdrop-blur-md">
        ⚡
      </div>
    </motion.div>
  );
}
