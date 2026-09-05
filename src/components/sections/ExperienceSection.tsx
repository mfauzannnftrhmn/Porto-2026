"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { workExperiences } from "@/lib/data";
import MorphSlider from "@/components/animations/MorphSlider";

export default function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
      <SectionHeading number="03" title="Pengalaman Kerja & Magang" />

      <div ref={ref} className="space-y-6 sm:space-y-8 mt-6">
        {workExperiences.map((exp, index) => {
          const validImages = (
            exp.images && exp.images.length > 0
              ? exp.images
              : [exp.image]
          ).filter((img) => Boolean(img && img.trim()));

          const hasImages = validImages.length > 0;

          return (
            <motion.div
              key={exp.id}
              className="p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl liquid-glass transition-all duration-500 group relative overflow-hidden hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: easeSmooth }}
            >
              {/* Top Liquid Specular Rim */}
              <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <div className={`grid grid-cols-1 ${hasImages ? "lg:grid-cols-12" : ""} gap-5 sm:gap-8 items-center`}>
                {/* Left details */}
                <div className={`${hasImages ? "lg:col-span-7" : "lg:col-span-12"} flex flex-col justify-between order-2 lg:order-1`}>
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2.5 mb-2 sm:mb-2.5 flex-wrap">
                      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold border ${exp.badgeColor || "bg-[#FF9E2C]/15 text-[#D97706] border-[#FF9E2C]/40"}`}>
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] sm:text-xs font-mono text-muted bg-background px-2 sm:px-2.5 py-0.5 rounded-full border border-border">
                        <Calendar size={11} className="text-accent" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted font-medium">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl md:text-3xl font-serif text-foreground font-semibold group-hover:text-accent transition-colors duration-300 leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-accent-dark mt-0.5">
                      {exp.company}
                    </p>

                    <p className="text-muted text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements / Points from CV */}
                    <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
                      <p className="text-[11px] sm:text-xs font-bold text-foreground/80 uppercase tracking-wider">
                        Tanggung Jawab & Capaian:
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/80">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right preview image with MorphSlider (rendered only if images exist) */}
                {hasImages && (
                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border group-hover:border-accent/50 shadow-sm group-hover:shadow-xl transition-all duration-500">
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted/10">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
                        <div className="absolute bottom-2.5 sm:bottom-3 left-3 right-3 text-white z-20 pointer-events-none">
                          <p className="text-xs sm:text-sm font-bold truncate drop-shadow-md">
                            {exp.company}
                          </p>
                          <p className="text-[10px] sm:text-[11px] text-white/90 truncate">
                            Dokumentasi & Bukti Kerja
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
