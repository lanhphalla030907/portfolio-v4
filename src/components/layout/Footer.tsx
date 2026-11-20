import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-night text-white pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Main Invitation Column */}
          <div className="lg:col-span-7 reveal-on-scroll">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-brand-accent cut-corner-sm" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
                INITIATE CONTACT // 08
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase">
              {portfolioData.contact.heading}
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              {portfolioData.contact.subheading}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="cut-corner-sm px-6 py-3.5 bg-brand-accent text-night hover:bg-brand-accentHover font-mono text-sm uppercase tracking-wider font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-brand-accent/20"
              >
                <span>Write Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-slate-400 bg-surface/5 border border-white/10 px-4 py-3 rounded-sm">
                Status: {portfolioData.personal.status}
              </span>
            </div>
          </div>

          {/* Social Channels & Links Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 reveal-on-scroll" data-delay="150">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                  Channels
                </h4>
                <ul className="space-y-3 font-mono text-sm">
                  <li>
                    <a
                      href={portfolioData.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-brand-accent transition-colors flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={portfolioData.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-brand-accent transition-colors flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={portfolioData.contact.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-brand-accent transition-colors flex items-center gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter / X</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                  Location & Time
                </h4>
                <p className="text-sm text-slate-300 font-mono">
                  {portfolioData.contact.location}
                </p>
                <p className="mt-2 text-xs text-slate-400 font-mono">
                  Available globally for remote engineering engagements.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-surface/5 border border-white/10">
              <p className="text-xs font-mono text-slate-400">
                Direct Inquiries:{" "}
                <span className="text-slate-200 select-all font-semibold">
                  {portfolioData.contact.email}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Imprint */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-slate-500">
            Engineered with Next.js, TypeScript, Tailwind CSS & Three.js.
          </p>
        </div>
      </div>
    </footer>
  );
};
