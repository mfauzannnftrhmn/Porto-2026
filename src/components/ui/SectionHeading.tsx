"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ number, title, className = "" }: SectionHeadingProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className={`flex items-center gap-2.5 sm:gap-4 mb-10 sm:mb-14 md:mb-16 ${className}`}>
      <motion.span
        className="text-xs sm:text-sm font-mono font-bold text-accent tracking-wider bg-white/90 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-accent/20 shadow-xs shrink-0"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, ease: easeSmooth }}
      >
        ({number})
      </motion.span>

      <motion.div
        className="h-[2px] bg-gradient-to-r from-accent/60 via-border to-accent/20 flex-1 origin-left rounded-full min-w-[20px]"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: easeSmooth, delay: 0.2 }}
      />

      <motion.span
        className="text-[10px] sm:text-xs md:text-sm text-foreground/85 uppercase tracking-[0.08em] sm:tracking-[0.22em] font-bold text-right shrink-1 sm:shrink-0"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.6, ease: easeSmooth, delay: 0.3 }}
      >
        {title}
      </motion.span>
    </div>
  );
}
