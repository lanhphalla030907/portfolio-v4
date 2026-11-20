import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { EducationSection } from "@/components/education/EducationSection";
import { CertificatesSection } from "@/components/certificates/CertificatesSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-paper">
      <ScrollProgress />
      <ScrollReveal />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
      </main>
      <Footer />
    </div>
  );
}
