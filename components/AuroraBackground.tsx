"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute left-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute bottom-[-150px] right-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

    </div>
  );
}
