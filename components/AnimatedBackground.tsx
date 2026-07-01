"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 35,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 35,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 18);
      mouseY.set((e.clientY - window.innerHeight / 2) / 18);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">

      {/* Blob 1 */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-[-150px] h-[550px] w-[550px] rounded-full bg-violet-600/20 blur-[140px]"
      />

      {/* Blob 2 */}

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 60, -80, 0],
          scale: [1, .9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] right-[-180px] h-[650px] w-[650px] rounded-full bg-cyan-500/15 blur-[170px]"
      />

      {/* Blob 3 */}

      <motion.div
        animate={{
          x: [-60, 50, -80, -60],
          y: [40, -50, 80, 40],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[150px]"
      />

      {/* Blob 4 */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[20%] bottom-[15%] h-[350px] w-[350px] rounded-full bg-indigo-500/15 blur-[120px]"
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
