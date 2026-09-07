"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { easeSmooth } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

import dynamic from "next/dynamic";
import MaskedHeading from "@/components/animations/MaskedHeading";
import SplitText from "@/components/animations/SplitText";

const Lanyard = dynamic(() => import("@/components/animations/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="h-[480px] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-accent border-t-transparent animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeSmooth,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full pt-20 sm:pt-26 md:pt-32 pb-10 sm:pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10 w-full">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-4 sm:gap-6"
        >
          {/* Name - Masked Heading with media masking & parallax */}
          <div className="w-full">
            <MaskedHeading
              text={personalInfo.name}
              mediaType="image"
              src="https://images.unsplash.com/photo-1500673587002-1d2548cfba1b?q=80&w=1600&auto=format&fit=crop"
              tag="h1"
              align="left"
              weight={700}
              tracking={-0.03}
              lineHeight={1.04}
              textScale={0.088}
              reveal="rise"
              parallax={26}
              drift={18}
              className="font-serif tracking-tight"
            />
          </div>

          {/* Role - SplitText with Elastic Ease */}
          <div className="overflow-visible">
            <SplitText
              text={personalInfo.role}
              duration={2}
              ease="elastic.out(1, 0.3)"
              delay={25}
              className="text-base sm:text-lg md:text-2xl font-semibold text-foreground/85 max-w-2xl leading-snug"
              tag="p"
              textAlign="left"
            />
          </div>

          {/* Tagline */}
          <div className="overflow-clip">
            <motion.p
              variants={lineVariants}
              className="text-xs sm:text-sm md:text-base text-muted max-w-xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            variants={lineVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-1 sm:mt-4 w-full sm:w-auto"
          >
            <MagneticButton href="#work" className="w-full sm:w-auto">
              <span className="w-full sm:w-auto text-center px-5 sm:px-7 py-3 sm:py-3.5 bg-accent text-white font-semibold rounded-full text-xs sm:text-sm hover:bg-accent-dark transition-all duration-300 tracking-wide shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 block">
                Lihat Projek & Pengalaman
              </span>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Interactive Lanyard ID Card (Desktop only) */}
        <motion.div
          className="hidden lg:flex lg:col-span-5 w-full flex-col items-center justify-start relative lg:min-h-[660px] lg:-mt-36 z-20"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeSmooth, delay: 0.2 }}
        >
          {isDesktop && (
            <Lanyard
              position={[0, 0, 14.2]}
              gravity={[0, -40, 0]}
              frontImage="/fauzan-profile.jpg"
              backImage="/fauzan-profile.jpg"
              lanyardImage="/lanyard.png"
              cardGlbUrl="/card.glb"
              lanyardWidth={2.6}
              transparent={true}
            />
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs font-semibold text-accent tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>

      {/* Background colorful ambient glow orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] pointer-events-none gpu-blur" />
      <div className="absolute bottom-1/4 -left-20 w-[420px] h-[420px] bg-[#FF6B8B]/18 rounded-full blur-[140px] pointer-events-none gpu-blur" />
      <div className="absolute -top-12 left-1/3 w-[360px] h-[360px] bg-[#06B6D4]/15 rounded-full blur-[150px] pointer-events-none gpu-blur" />
      <div className="absolute top-2/3 right-1/4 w-[320px] h-[320px] bg-[#FF9E2C]/15 rounded-full blur-[130px] pointer-events-none gpu-blur" />
    </section>
  );
}
