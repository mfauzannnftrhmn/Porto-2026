"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  strength = 0.3,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const innerContent = (
    <motion.span
      className="inline-flex items-center justify-center w-full h-full pointer-events-none"
      style={{ x: springX, y: springY }}
    >
      <span className="pointer-events-auto contents">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={containerRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={`relative inline-flex items-center justify-center cursor-pointer ${className}`.trim()}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <div
      ref={containerRef as React.Ref<HTMLDivElement>}
      className={`relative inline-flex items-center justify-center cursor-pointer ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {innerContent}
    </div>
  );
}
