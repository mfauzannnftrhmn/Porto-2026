"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { easeSmooth } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Floating Liquid Glass Header Container */}
      <motion.header
        className="fixed top-2.5 sm:top-5 left-0 right-0 z-50 px-2.5 sm:px-6 md:px-8 max-w-6xl mx-auto w-full pointer-events-none"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeSmooth }}
      >
        {/* Liquid Glass Capsule */}
        <div className="relative pointer-events-auto">
          {/* Ambient Liquid Backlight Glow */}
          <div
            className={`absolute -inset-1 rounded-full blur-xl transition-all duration-500 pointer-events-none -z-10 ${
              isScrolled
                ? "bg-gradient-to-r from-accent/25 via-[#06B6D4]/20 to-[#FF6B8B]/20 opacity-90 scale-98"
                : "bg-gradient-to-r from-accent/15 via-[#06B6D4]/10 to-transparent opacity-60 scale-95"
            }`}
          />

          <nav
            className={`relative w-full rounded-full transition-all duration-500 overflow-hidden flex items-center justify-between ${
              isScrolled
                ? "h-13 sm:h-16 px-3.5 sm:px-6 md:px-7 bg-white/75 backdrop-blur-2xl backdrop-saturate-200 border border-white/80 shadow-[0_12px_36px_-6px_rgba(118,196,87,0.18),0_4px_16px_-2px_rgba(22,36,25,0.06),inset_0_1px_2px_0_rgba(255,255,255,0.95)]"
                : "h-14 sm:h-17 px-3.5 sm:px-6 md:px-8 bg-white/55 backdrop-blur-xl backdrop-saturate-150 border border-white/60 shadow-[0_8px_24px_-4px_rgba(118,196,87,0.1),inset_0_1px_2px_0_rgba(255,255,255,0.85)]"
            }`}
          >
            {/* Top Liquid Rim Light (Specular Reflection) */}
            <div className="absolute top-0 inset-x-8 sm:inset-x-12 h-[1.5px] bg-gradient-to-r from-transparent via-white/95 to-transparent pointer-events-none" />

            {/* Bottom Refractive Colored Edge */}
            <div className="absolute bottom-0 inset-x-12 sm:inset-x-20 h-[1px] bg-gradient-to-r from-transparent via-accent/35 to-transparent pointer-events-none" />

            {/* Brand Logo */}
            <a
              href="#"
              className="text-foreground font-serif text-lg sm:text-xl md:text-2xl italic tracking-tight hover:text-accent transition-colors duration-300 group flex items-center gap-1.5 relative z-10"
            >
              <span className="font-semibold">{personalInfo.lastName}</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-[0_0_8px_rgba(118,196,87,0.8)]"></span>
              </span>
            </a>

            {/* Desktop Navigation with Liquid Glass Pill Hover */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 relative z-10">
              {navLinks.map((link) => {
                const isHovered = hoveredLink === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-3.5 lg:px-4 py-2 text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors duration-300 text-foreground/80 hover:text-accent-dark"
                  >
                    {/* Liquid Hover Pill Background */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          layoutId="liquidNavPill"
                          className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_4px_12px_rgba(118,196,87,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] -z-10"
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      )}
                    </AnimatePresence>
                    {link.label}
                  </a>
                );
              })}

              {/* Liquid Glass CTA Button */}
              <div className="ml-3 lg:ml-4">
                <MagneticButton href="#contact">
                  <span className="relative inline-flex items-center gap-1.5 px-5 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold text-white tracking-wide overflow-hidden bg-gradient-to-r from-accent via-[#6DBA50] to-accent shadow-[0_4px_18px_rgba(118,196,87,0.4),inset_0_1px_1px_rgba(255,255,255,0.65)] hover:shadow-[0_6px_24px_rgba(118,196,87,0.6),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:scale-105 active:scale-98 transition-all duration-300">
                    <span className="absolute top-0 inset-x-0 h-[1px] bg-white/70" />
                    <span>Let&apos;s Talk</span>
                    <ArrowUpRight size={14} className="opacity-90" />
                  </span>
                </MagneticButton>
              </div>
            </div>

            {/* Mobile Menu Trigger with Frosted Glass Button */}
            <button
              className="md:hidden text-foreground p-2 z-[60] rounded-full bg-white/60 border border-white/80 backdrop-blur-md shadow-xs hover:bg-white/90 active:scale-95 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-accent" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Liquid Glass Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/85 backdrop-blur-3xl backdrop-saturate-180 flex flex-col items-center justify-start sm:justify-center px-5 sm:px-6 pt-24 pb-8 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Liquid Light Orbs */}
            <div className="absolute w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none -top-10 -left-10" />
            <div className="absolute w-72 h-72 rounded-full bg-[#06B6D4]/15 blur-3xl pointer-events-none -bottom-10 -right-10" />

            <div className="w-full max-w-sm flex flex-col gap-2.5 sm:gap-3 relative z-10 my-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="w-full text-center py-3.5 px-6 rounded-2xl bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] text-xl font-serif font-medium text-foreground hover:text-accent hover:bg-white/85 active:scale-98 transition-all duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.35,
                    ease: easeSmooth,
                    delay: i * 0.06,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                className="mt-2 w-full text-center py-4 px-6 rounded-2xl bg-gradient-to-r from-accent to-[#5EA843] text-white font-semibold text-base shadow-[0_6px_22px_rgba(118,196,87,0.45),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-98 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.35,
                  ease: easeSmooth,
                  delay: navLinks.length * 0.06,
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
