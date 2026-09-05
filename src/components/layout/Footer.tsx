"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";
import { personalInfo, navLinks, socialLinks } from "@/lib/data";
import AnimatedLink from "@/components/ui/AnimatedLink";

export default function Footer() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="border-t border-border bg-white/40 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeSmooth }}
          >
            <p className="font-serif text-xl sm:text-2xl italic text-foreground mb-2 sm:mb-3 font-semibold">
              {personalInfo.lastName}
              <span className="text-accent">.</span>
            </p>
            <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with purpose, precision, and a touch of personality.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.1 }}
          >
            <p className="text-[11px] sm:text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3 sm:mb-6">Navigation</p>
            <div className="flex flex-col gap-2 sm:gap-3">
              {navLinks.map((link) => (
                <AnimatedLink
                  key={link.label}
                  href={link.href}
                  className="text-foreground/90 font-medium text-xs sm:text-sm hover:text-accent transition-colors duration-300 w-fit"
                >
                  {link.label}
                </AnimatedLink>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.2 }}
          >
            <p className="text-[11px] sm:text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3 sm:mb-6">Connect</p>
            <div className="flex flex-col gap-2 sm:gap-3">
              {socialLinks.map((link) => (
                <AnimatedLink
                  key={link.label}
                  href={link.href}
                  className="text-foreground/90 font-medium text-xs sm:text-sm hover:text-accent transition-colors duration-300 w-fit"
                  external
                >
                  {link.label}
                </AnimatedLink>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col-reverse sm:flex-row items-center justify-between mt-8 sm:mt-16 pt-5 sm:pt-8 border-t border-border gap-4 text-center sm:text-left"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted text-[11px] sm:text-xs tracking-wider">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white border border-accent/30 text-muted font-medium text-xs tracking-wider hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 group shadow-xs cursor-pointer active:scale-95"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp
              size={13}
              className="group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
