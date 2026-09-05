import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import GlowCursor from "@/components/animations/GlowCursor";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import OrganizationSection from "@/components/sections/OrganizationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <GlowCursor
        className="hidden md:block fixed inset-0 pointer-events-none z-50 w-full h-full"
        color="#76C457"
        secondaryColor="#06B6D4"
        trailLength={22}
        trailWidth={4}
        trailTaper={0.7}
        followSpeed={0.22}
        glowIntensity={1.3}
        glowSpread={0.7}
        brightness={1.3}
        hotspot={0.7}
        blendMode="normal"
        opacity={0.9}
      />
      <Navbar />
      <main className="overflow-x-clip w-full">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <OrganizationSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
