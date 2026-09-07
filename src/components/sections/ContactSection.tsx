"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";
import { personalInfo, socialLinks } from "@/lib/data";

function InstagramIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { ref: socialsRef, isInView: socialsInView } = useInView({ threshold: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden"
    >
      {/* Background colorful ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[160px] pointer-events-none gpu-blur" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#FF6B8B]/15 rounded-full blur-[150px] pointer-events-none gpu-blur" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#06B6D4]/15 rounded-full blur-[160px] pointer-events-none gpu-blur" />

      <div className="relative z-10 max-w-5xl mx-auto text-center liquid-glass rounded-2xl sm:rounded-[40px] p-5 sm:p-12 md:p-16 overflow-hidden">
        {/* Top Liquid Specular Rim */}
        <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

        {/* Ambient inner card glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none gpu-blur" />
        <div className="absolute -bottom-24 right-10 w-72 h-72 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none gpu-blur" />

        <div className="relative z-10">
          {/* Label */}
          <motion.p
            className="text-[10px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-8 inline-block px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/90 shadow-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeSmooth }}
          >
            Get in touch
          </motion.p>

          {/* Giant heading */}
          <div className="overflow-clip">
            <motion.h2
              className="text-[clamp(1.9rem,7.5vw,6.5rem)] font-serif leading-[1] text-foreground mb-1.5 sm:mb-4 font-normal"
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : { y: "100%" }}
              transition={{ duration: 0.8, ease: easeSmooth, delay: 0.1 }}
            >
              Let&apos;s work
            </motion.h2>
          </div>

          <div className="overflow-clip">
            <motion.h2
              className="text-[clamp(1.9rem,7.5vw,6.5rem)] font-serif leading-[1] italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#25A77B] to-[#06B6D4] mb-4 sm:mb-8 font-normal"
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : { y: "100%" }}
              transition={{ duration: 0.8, ease: easeSmooth, delay: 0.2 }}
            >
              together<span className="text-foreground">.</span>
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-muted text-xs sm:text-base md:text-lg max-w-md mx-auto mb-6 sm:mb-12 leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.4 }}
          >
            Have a project in mind? Let&apos;s create something extraordinary together.
          </motion.p>

          {/* Email and Instagram Contact Badges */}
          <motion.div
            className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 max-w-md sm:max-w-none mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.5 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl liquid-glass-subtle text-xs sm:text-base text-foreground hover:text-accent-dark hover:-translate-y-1 transition-all duration-300 group font-medium relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300 shrink-0">
                <Mail size={14} className="text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="truncate max-w-[210px] min-[400px]:max-w-[260px] sm:max-w-none">{personalInfo.email}</span>
            </a>

          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mb-8 sm:mb-14"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.6 }}
          >
            <MagneticButton href={`mailto:${personalInfo.email}`} strength={0.2} className="w-full sm:w-auto inline-block">
              <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-accent via-[#6DBA50] to-accent text-white rounded-full text-xs sm:text-base font-semibold shadow-[0_6px_25px_rgba(118,196,87,0.4),inset_0_1px_1px_rgba(255,255,255,0.7)] hover:shadow-[0_8px_30px_rgba(118,196,87,0.6)] hover:scale-105 active:scale-98 transition-all duration-300 tracking-wide">
                Start a Conversation
                <ArrowUpRight size={16} />
              </span>
            </MagneticButton>
          </motion.div>

          {/* Social Links as liquid glass pills with icons */}
          <motion.div
            ref={socialsRef}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            initial={{ opacity: 0 }}
            animate={socialsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map((link) => {
              const getIcon = (label: string) => {
                switch (label.toLowerCase()) {
                  case "instagram":
                    return <InstagramIcon size={14} className="text-[#E1306C]" />;
                  case "linkedin":
                    return <LinkedinIcon size={14} className="text-[#0A66C2]" />;
                  case "email":
                    return <Mail size={14} className="text-accent" />;
                  default:
                    return null;
                }
              };

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full liquid-glass-subtle hover:scale-105 transition-all text-xs sm:text-sm font-semibold text-foreground/85 hover:text-accent-dark group"
                >
                  {getIcon(link.label)}
                  <span>{link.label}</span>
                  <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
