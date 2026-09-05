"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Award, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { orgExperiences } from "@/lib/data";
import MorphSlider from "@/components/animations/MorphSlider";

export default function OrganizationSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="organization" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
      <SectionHeading number="04" title="Pengalaman Organisasi & Kepanitiaan" />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
        {orgExperiences.map((org, index) => {
          const validImages = (
            org.images && org.images.length > 0
              ? org.images
              : org.image
              ? [org.image]
              : []
          ).filter((img) => Boolean(img && img.trim()));

          return (
            <motion.div
              key={index}
              className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl liquid-glass flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: easeSmooth }}
            >
              {/* Top Liquid Specular Rim */}
              <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <div>
                {/* Photo/Documentation Preview with MorphSlider */}
                {validImages.length > 0 && (
                  <div className="mb-4 sm:mb-5 rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] border border-border group-hover:border-accent/50 shadow-xs group-hover:shadow-lg transition-all duration-500 relative bg-muted/10">
                    <MorphSlider
                      items={validImages.map((img) => ({ image: img }))}
                      duration={0.8}
                      aberration={0.4}
                      autoplay={false}
                      showCaptions={false}
                      showControls={true}
                      showIndicators={true}
                      radius={16}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white z-20 pointer-events-none">
                      <p className="text-xs font-bold truncate drop-shadow-md">{org.organization}</p>
                      <p className="text-[10px] text-white/90 truncate">Dokumentasi Kegiatan</p>
                    </div>
                  </div>
                )}

              {/* Badges */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 flex-wrap">
                <span
                  className={`px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border ${
                    org.category === "Organisasi"
                      ? "bg-accent/15 text-accent-dark border-accent/40"
                      : "bg-[#06B6D4]/15 text-[#0891B2] border-[#06B6D4]/40"
                  }`}
                >
                  {org.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-muted bg-background/60 px-2 sm:px-2.5 py-0.5 rounded-full border border-border">
                  <Calendar size={11} className="text-accent" />
                  {org.period}
                </span>
              </div>

              {/* Title & Role */}
              <h3 className="text-base sm:text-xl font-serif text-foreground font-semibold group-hover:text-accent transition-colors duration-300 leading-snug">
                {org.organization}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-accent-dark mt-0.5 mb-3 sm:mb-4">
                {org.role}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/80">
                {org.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
    </section>
  );
}
