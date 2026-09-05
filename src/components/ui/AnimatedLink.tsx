"use client";

import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function AnimatedLink({
  href,
  children,
  className = "",
  external = false,
}: AnimatedLinkProps) {
  return (
    <motion.a
      href={href}
      className={`relative inline-block group ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover="hover"
    >
      <span className="relative">
        {children}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-px bg-current origin-left"
          initial={{ scaleX: 0 }}
          variants={{
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.4, ease: easeSmooth }}
        />
      </span>
    </motion.a>
  );
}
