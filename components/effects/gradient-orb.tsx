"use client";

import { motion } from "framer-motion";

export default function GradientOrb() {
  return (
    <motion.div
      animate={{
        x: [0, 40, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        top-1/3
        left-1/2
        -translate-x-1/2
        h-[28rem]
        w-[28rem]
        rounded-full
        bg-gradient-to-r
        from-purple-600/20
        to-cyan-500/10
        blur-3xl
        -z-10
      "
    />
  );
}