import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { LogoMarquee } from "./LogoMarquee";
import { Layout, Server, Database, Wrench, CheckCircle2 } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const columnIcons = [Layout, Server, Database, Wrench];

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 relative bg-paper border-t border-line/8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-on-scroll">
          <SectionHeader
            tag="TECHNICAL ARSENAL // 02"
            title="Engineered for scale, resilience, and performance."
            subtitle="A comprehensive toolkit refined across modern frontend platforms, high-concurrency microservices, databases, and production devops."
          />
        </div>

        {/* Top tech logo loop */}
        <div className="reveal-on-scroll mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-accentText font-semibold">
              Stack in Rotation
            </span>
          </div>
          <LogoMarquee />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((category, idx) => {
            const IconComp = columnIcons[idx % columnIcons.length];

            return (
              <div
                key={category.title}
                data-delay={idx * 100}
                className="reveal-on-scroll bg-surface border border-line/10 cut-corner-md p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 cut-corner-sm bg-night flex items-center justify-center text-white shrink-0">
                      <IconComp className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-ink tracking-tight">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-accentText uppercase tracking-wider font-semibold">
                        Pillar 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-ink-soft mb-5 leading-relaxed min-h-[36px]">
                    {category.subtitle}
                  </p>

                  {/* Skills List with Official Icons */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-2 rounded-sm bg-paper/60 hover:bg-paper border border-line/8 hover:border-brand-accent/40 transition-colors group"
                      >
                        <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                          {skill.icon ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                              loading="lazy"
                            />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                          )}
                        </div>

                        <span className="font-mono text-xs font-semibold text-ink group-hover:text-accentText transition-colors tracking-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Architectural Rule */}
                <div className="mt-6 pt-3.5 border-t border-line/10 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accentText" />
                    <span>Verified</span>
                  </span>
                  <span>{category.skills.length} Techs</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom tech logo loop */}
        <div className="reveal-on-scroll mt-12 sm:mt-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-accentText font-semibold">
              Tools in Motion
            </span>
          </div>
          <LogoMarquee reverse duration={42} />
        </div>
      </div>
    </section>
  );
};
