"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#76C457] via-[#06B6D4] via-[#8B5CF6] to-[#FF6B8B] z-[100] origin-left shadow-sm shadow-[#76C457]/40"
      style={{ scaleX }}
    />
  );
}
