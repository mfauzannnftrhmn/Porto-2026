"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import TextReveal from "@/components/ui/TextReveal";
import { aboutBio, stats, personalInfo, educationList } from "@/lib/data";

export default function AboutSection() {
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useInView({ threshold: 0.2 });
  const { ref: eduRef, isInView: eduInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
      <SectionHeading number="01" title="Tentang Saya" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Left Column: Visual Profile Card */}
        <motion.div
          ref={imageRef}
          className="lg:col-span-5 relative liquid-glass rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-7 md:p-8 flex flex-col justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: easeSmooth }}
        >
          {/* Top Liquid Specular Rim */}
          <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

          {/* Colorful background ambient glows */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-[#FF6B8B]/10 pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#06B6D4]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top badge */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/90 text-[11px] sm:text-xs font-semibold text-foreground shadow-xs">
              <MapPin size={12} className="text-accent" />
              {personalInfo.location}
            </span>
          </div>

          {/* Center Graphic with real extracted CV photo */}
          <div className="relative z-10 my-auto text-center py-4 sm:py-6">
            <div className="relative inline-block">
              <div className="p-1.5 rounded-2xl bg-gradient-to-tr from-accent via-[#06B6D4] to-[#FF6B8B] shadow-xl shadow-accent/20 inline-block">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-28 h-38 sm:w-36 sm:h-48 md:w-40 md:h-52 object-cover object-top rounded-xl shadow-inner bg-white"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-accent text-white text-[10px] sm:text-[11px] font-bold shadow-md flex items-center gap-1">
                <span>✓</span> Verified
              </div>
            </div>

            <h4 className="mt-3.5 sm:mt-4 font-serif text-lg sm:text-2xl md:text-3xl text-foreground font-semibold">
              {personalInfo.name}
            </h4>
            <p className="text-accent-dark font-semibold text-[11px] sm:text-xs tracking-wider uppercase mt-1">
              {personalInfo.role}
            </p>
            <p className="text-muted text-xs mt-1.5 font-mono">
              Universitas Buana Perjuangan Karawang
            </p>
          </div>

          {/* Bottom Card Footer */}
          <div className="relative z-10 pt-3.5 border-t border-accent/20 flex items-center justify-between text-xs text-muted">
            <span className="font-medium text-foreground">S1 Teknik Informatika</span>
          </div>

          {/* Decorative corner lines */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-accent/40 rounded-tl-sm pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent/40 rounded-br-sm pointer-events-none" />
        </motion.div>

        {/* Right Column: Bio & Education */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <TextReveal
            as="h2"
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-snug sm:leading-tight text-foreground mb-3 sm:mb-6 font-medium"
          >
            Membangun Pengalaman Digital yang Bermakna & Fungsional
          </TextReveal>

          <div className="space-y-3 sm:space-y-3.5 text-muted text-xs sm:text-sm md:text-base leading-relaxed">
            {aboutBio.map((text, i) => (
              <p key={i}>
                {text}
              </p>
            ))}
          </div>

          {/* Education Highlights */}
          <div ref={eduRef} className="mt-5 sm:mt-8 space-y-3 sm:space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold text-accent uppercase tracking-widest flex items-center gap-2">
              <GraduationCap size={16} /> Riwayat Pendidikan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl liquid-glass-subtle hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-xs sm:text-sm text-foreground">{edu.school}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-accent-dark">{edu.degree}</p>
                  <p className="text-[11px] sm:text-xs font-mono text-muted mt-0.5 sm:mt-1">{edu.period}</p>
                  <div className="mt-2 inline-block px-2 sm:px-2.5 py-0.5 rounded-md bg-accent/15 border border-accent/30 text-[11px] sm:text-xs font-bold text-accent-dark">
                    {edu.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-5 sm:mt-8 pt-5 sm:pt-6 border-t border-border"
          >
            {stats.map((stat, i) => {
              const colors = ["text-accent", "text-[#06B6D4]", "text-[#FF6B8B]", "text-[#8B5CF6]"];
              return (
                <motion.div
                  key={stat.label}
                  className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl liquid-glass-subtle hover:scale-[1.03] transition-all duration-300 text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6,
                    ease: easeSmooth,
                    delay: i * 0.1,
                  }}
                >
                  <div className="absolute top-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
                  <p className={`text-xl sm:text-2xl md:text-3xl font-serif font-bold ${colors[i % colors.length]} mb-0.5`}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-muted uppercase tracking-wider font-semibold">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
