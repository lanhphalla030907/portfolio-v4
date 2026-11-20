import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { GraduationCap, Award, BookOpen, Check } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 relative bg-paper border-t border-line/8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-on-scroll">
          <SectionHeader
            tag="ACADEMIC BACKGROUND // 04"
            title="Theoretical foundations in systems & computation."
            subtitle="Rigorous academic training in computer science, distributed algorithms, and algorithmic complexity."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={edu.id}
              data-delay={idx * 100}
              className="reveal-on-scroll lg:col-span-12 bg-surface border border-line/10 cut-corner-md p-8 sm:p-10 shadow-xs relative"
            >
              {/* Corner Bracket Detail */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-accent" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-accent" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-line/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 cut-corner-sm bg-night flex items-center justify-center text-white shrink-0">
                    <GraduationCap className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-accentText font-semibold">
                      DEGREE PROGRAM
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-ink-soft font-mono mt-1">
                      {edu.institution} · {edu.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-3 py-1.5 bg-paper text-ink font-mono text-xs uppercase tracking-wider font-semibold rounded-sm border border-line/10">
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Education Content & Highlights */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-accentText" />
                    <span>Academic Specialization</span>
                  </h4>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accentText" />
                    <span>Key Milestones & Leadership</span>
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <span className="w-4 h-4 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-accentText" />
                        </span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
