"use client";

import { motion } from "framer-motion";
import { Award, Code2, Palette, Database, Sparkles, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

const categoryIcons = [
  <Code2 key="code" size={20} className="text-[#76C457]" />,
  <Database key="db" size={20} className="text-[#06B6D4]" />,
  <Palette key="design" size={20} className="text-[#FF6B8B]" />,
  <Sparkles key="sparkles" size={20} className="text-[#8B5CF6]" />,
];

export default function ServicesSection() {
  const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.2 });
  const { ref: certRef, isInView: certInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
      <SectionHeading number="05" title="Keahlian & Sertifikasi" />

      {/* Skills Categories Grid */}
      <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-10 sm:mb-16">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.name}
            className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl liquid-glass hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: easeSmooth }}
          >
            {/* Top Liquid Specular Rim */}
            <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/90 border border-white shadow-xs flex items-center justify-center mb-3 sm:mb-3.5">
                {categoryIcons[i % categoryIcons.length]}
              </div>

              <h3 className="text-base sm:text-lg font-serif font-semibold text-foreground mb-2.5 sm:mb-4">
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-white/75 border border-white/90 text-foreground hover:border-accent hover:text-accent transition-colors duration-200 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}
