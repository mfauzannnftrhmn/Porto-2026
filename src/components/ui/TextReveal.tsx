"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "words" | "lines" | "chars";
  staggerDelay?: number;
}

export default function TextReveal({
  children,
  as: Tag = "p",
  className = "",
  delay = 0,
  splitBy = "words",
  staggerDelay = 0.03,
}: TextRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const items = useMemo(() => {
    if (splitBy === "chars") return children.split("");
    if (splitBy === "lines") return children.split("\n");
    return children.split(" ");
  }, [children, splitBy]);

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>} className={className}>
      {items.map((item, i) => (
        <span key={i} className="inline-block overflow-clip">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: easeSmooth,
              delay: delay + i * staggerDelay,
            }}
          >
            {item}
            {splitBy === "words" && i < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
