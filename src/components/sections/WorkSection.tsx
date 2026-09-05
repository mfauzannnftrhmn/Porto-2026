"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { easeSmooth } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

const projectColorThemes = [
  {
    accent: "#76C457",
    bgHover: "from-[#76C457]/10 via-white/50 to-transparent",
    badgeBg: "bg-[#76C457]/10",
    badgeText: "text-[#478730]",
    badgeBorder: "border-[#76C457]/30",
    arrowBg: "group-hover:bg-[#76C457]",
    arrowBorder: "group-hover:border-[#76C457]",
    titleHover: "group-hover:text-[#478730]",
    dot: "bg-[#76C457]",
  },
  {
    accent: "#10B981",
    bgHover: "from-[#10B981]/10 via-white/50 to-transparent",
    badgeBg: "bg-[#10B981]/10",
    badgeText: "text-[#059669]",
    badgeBorder: "border-[#10B981]/30",
    arrowBg: "group-hover:bg-[#10B981]",
    arrowBorder: "group-hover:border-[#10B981]",
    titleHover: "group-hover:text-[#059669]",
    dot: "bg-[#10B981]",
  },
  {
    accent: "#8B5CF6",
    bgHover: "from-[#8B5CF6]/10 via-white/50 to-transparent",
    badgeBg: "bg-[#8B5CF6]/10",
    badgeText: "text-[#7C3AED]",
    badgeBorder: "border-[#8B5CF6]/30",
    arrowBg: "group-hover:bg-[#8B5CF6]",
    arrowBorder: "group-hover:border-[#8B5CF6]",
    titleHover: "group-hover:text-[#7C3AED]",
    dot: "bg-[#8B5CF6]",
  },
  {
    accent: "#06B6D4",
    bgHover: "from-[#06B6D4]/10 via-white/50 to-transparent",
    badgeBg: "bg-[#06B6D4]/10",
    badgeText: "text-[#0891B2]",
    badgeBorder: "border-[#06B6D4]/30",
    arrowBg: "group-hover:bg-[#06B6D4]",
    arrowBorder: "group-hover:border-[#06B6D4]",
    titleHover: "group-hover:text-[#0891B2]",
    dot: "bg-[#06B6D4]",
  },
  {
    accent: "#FF9E2C",
    bgHover: "from-[#FF9E2C]/10 via-white/50 to-transparent",
    badgeBg: "bg-[#FF9E2C]/10",
    badgeText: "text-[#D97706]",
    badgeBorder: "border-[#FF9E2C]/30",
    arrowBg: "group-hover:bg-[#FF9E2C]",
    arrowBorder: "group-hover:border-[#FF9E2C]",
    titleHover: "group-hover:text-[#D97706]",
    dot: "bg-[#FF9E2C]",
  },
  {
    accent: "#FF6B8B",
    bgHover: "from-[#FF6B8B]/10 via-white/50 to-transparent",
    badgeBg: "bg-[#FF6B8B]/10",
    badgeText: "text-[#E11D48]",
    badgeBorder: "border-[#FF6B8B]/30",
    arrowBg: "group-hover:bg-[#FF6B8B]",
    arrowBorder: "group-hover:border-[#FF6B8B]",
    titleHover: "group-hover:text-[#E11D48]",
    dot: "bg-[#FF6B8B]",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const theme = projectColorThemes[index % projectColorThemes.length];

  return (
    <motion.div
      ref={ref}
      className="group relative liquid-glass p-4 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl transition-all duration-500 mb-5 sm:mb-8 overflow-hidden hover:-translate-y-1"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        ease: easeSmooth,
        delay: index * 0.1,
      }}
    >
      {/* Top Liquid Specular Rim */}
      <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

      {/* Ambient glass color bloom on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme.bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center relative z-10">
        {/* Left Column: Project Info */}
        <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
              <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${theme.dot}`} />
              <span className="text-[10px] sm:text-xs font-mono text-muted bg-white px-2 py-0.5 rounded-full border border-border">
                {project.year}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <h3 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif text-foreground ${theme.titleHover} transition-colors duration-300 leading-snug font-semibold`}>
              {project.title}
            </h3>

            <p className="text-xs font-mono font-medium text-accent-dark mt-0.5 sm:mt-1">
              {project.subtitle}
            </p>

            <p className="text-muted text-xs sm:text-sm md:text-base mt-2.5 sm:mt-4 leading-relaxed">
              {project.description}
            </p>

            {/* Bullet Points from CV */}
            <ul className="mt-3 sm:mt-4 space-y-1.5 text-xs sm:text-sm text-foreground/85">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 shrink-0">✓</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} shadow-2xs`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Project Image Showcase */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border group-hover:border-accent/50 shadow-sm group-hover:shadow-xl transition-all duration-500 bg-white">
            {/* Top browser bar mockup */}
            <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white/95 border-b border-border flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B8B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9E2C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#76C457]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-muted tracking-wider truncate max-w-[130px] min-[400px]:max-w-[180px] sm:max-w-[240px]">
                {project.link ? project.link.replace(/^https?:\/\//, "") : `${project.id}.preview`}
              </span>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 sm:w-5 sm:h-5 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors group/link shrink-0"
                  title="Buka Website"
                >
                  <ArrowUpRight size={12} className="text-accent group-hover/link:text-white transition-colors" />
                </a>
              ) : (
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <ArrowUpRight size={12} className="text-accent" />
                </div>
              )}
            </div>

            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover background colorful glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${theme.bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl`} />
    </motion.div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
      <SectionHeading number="02" title="Projek Pilihan" />

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
