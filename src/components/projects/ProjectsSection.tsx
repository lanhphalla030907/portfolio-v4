"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { ArrowUpRight, Github, Code, Sparkles } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "FULL-STACK", "SYSTEMS", "AI & TOOLS"];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "FULL-STACK") return p.category.toLowerCase().includes("full-stack") || p.category.toLowerCase().includes("ui");
    if (filter === "SYSTEMS") return p.category.toLowerCase().includes("systems") || p.category.toLowerCase().includes("storage");
    if (filter === "AI & TOOLS") return p.category.toLowerCase().includes("ai") || p.category.toLowerCase().includes("devsecops") || p.category.toLowerCase().includes("creative");
    return true;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 relative bg-paper border-t border-line/8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-on-scroll">
          <SectionHeader
            tag="CURATED WORK // 03"
            title="Featured projects & production platforms."
            subtitle="Engineered systems, distributed tools, and digital experiences built for performance and durability."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-surface border border-line/10 rounded-full self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full transition-all ${
                  filter === cat
                    ? "bg-night text-white font-semibold shadow-xs"
                    : "text-ink-soft hover:text-ink hover:bg-night/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-delay={(idx % 2) * 120}
              className="reveal-zoom bg-surface border border-line/10 cut-corner-md overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Banner Thumbnail with Chamfered Frame & Hover Zoom */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 cut-corner-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Corner Badges */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-night/80 backdrop-blur-sm text-white rounded-sm border border-white/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-brand-yellow text-night font-bold rounded-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 text-[10px] font-mono text-white/90 bg-black/40 backdrop-blur-sm rounded-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Thumbnail Title Strip */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white">
                    <Link href={`/projects/${project.id}`} className="group/title">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover/title:text-brand-accent transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6">
                  <p className="text-sm text-ink-soft leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-paper border border-line/8 text-ink-soft rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-line/8 mt-4 flex items-center justify-between">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-xs font-mono font-semibold uppercase tracking-wider text-ink hover:text-accentText transition-colors flex items-center gap-1.5"
                >
                  <span>Architecture Details</span>
                  <Code className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-ink-soft hover:text-ink rounded-sm hover:bg-paper transition-colors"
                      title="View GitHub Source"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cut-corner-sm px-3.5 py-1.5 bg-night text-white hover:bg-brand-accent hover:text-night font-mono text-xs uppercase tracking-wider font-semibold transition-all inline-flex items-center gap-1.5"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
