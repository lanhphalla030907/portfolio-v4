"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Layers3,
  Sparkles,
} from "lucide-react";
import type { Project } from "@/data/portfolioData";
import { ProjectGallery } from "./ProjectGallery";
import { useLanguage } from "@/i18n/LanguageProvider";
import { usePortfolioData } from "@/i18n/usePortfolioData";

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 pb-4 border-b border-line/10 last:border-0 last:pb-0">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
        {label}
      </dt>
      <dd className="text-right text-sm font-mono font-semibold text-ink">
        {value}
      </dd>
    </div>
  );
}

type ProjectDetailContentProps = {
  project: Project;
  index: number;
};

export function ProjectDetailContent({
  project,
  index,
}: ProjectDetailContentProps) {
  const { t } = useLanguage();
  const data = usePortfolioData();

  const projects = data.projects;
  const item = projects[index];
  const nextIndex = (index + 1) % projects.length;
  const nextProject = projects[nextIndex];
  const otherProjects = projects
    .filter((_, i) => i !== index && i !== nextIndex)
    .slice(0, 3);

  const liveUrl = project.liveUrl?.startsWith("http") ? project.liveUrl : null;
  const githubUrl = project.githubUrl?.startsWith("http")
    ? project.githubUrl
    : null;

  return (
    <article>
      {/* Breadcrumb / archive index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-line/10">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-ink-soft hover:text-accentText transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{t("All Projects")}</span>
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            {t("PROJECT FILE")} // {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Project hero — clean editorial */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-14">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="inline-flex items-center gap-2 cut-corner-sm border border-brand-accent/25 bg-brand-accent/[0.07] px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
            <span className="w-1.5 h-1.5 bg-brand-accent cut-corner-sm" />
            {item.category}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            {item.year}
          </span>
          {item.featured && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-soft">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              {t("Featured Build")}
            </span>
          )}
          <span className="ml-auto hidden font-mono text-[11px] uppercase tracking-widest text-ink-light sm:block">
            {t("Case Study")} / {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tighter text-ink">
          {item.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-ink-soft">
          {item.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-line/10 pt-6">
          <dl className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-light">
                {t("Discipline")}
              </dt>
              <dd className="mt-1 font-mono text-xs font-semibold text-ink">
                {item.category}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-light">
                {t("Release")}
              </dt>
              <dd className="mt-1 font-mono text-xs font-semibold text-ink">
                {item.year}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-light">
                {t("Stack")}
              </dt>
              <dd className="mt-1 font-mono text-xs font-semibold text-ink">
                {item.tags.length} {t("technologies")}
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 cut-corner-sm bg-brand-accent px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-night transition-colors hover:bg-brand-accentHover"
              >
                {t("Visit Live Site")}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 cut-corner-sm border border-line/20 bg-surface px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:border-line hover:bg-night hover:text-white"
              >
                <Github className="w-4 h-4" />
                {t("View Repository")}
              </a>
            )}
            {!liveUrl && !githubUrl && (
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 cut-corner-sm border border-line/20 bg-surface px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:border-line hover:bg-night hover:text-white"
              >
                {t("Discuss a similar build")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Project hero visual */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <figure className="cut-corner-md overflow-hidden border border-line/10 bg-night shadow-xs">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={item.image}
              alt={`${item.title} ${t("project preview")}`}
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-night px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-white/60">
            <span>
              {t("FIG.")} 01 — {item.title}
            </span>
            <span>{t("System Preview")}</span>
          </figcaption>
        </figure>
      </div>

      {/* Project image gallery */}
      {item.gallery && item.gallery.length > 0 && (
        <ProjectGallery images={item.gallery} projectTitle={item.title} />
      )}

      {/* Detail body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-14">
          <section className="reveal-on-scroll">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                {t("02 // Architecture & Impact")}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              {t("System Architecture & Impact")}
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-soft">
              {item.description}
            </p>
          </section>

          <section className="reveal-on-scroll" data-delay="100">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                {t("03 // Technology Stack")}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              {t("Technology Stack")}
            </h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {item.tags.map((tag, tagIndex) => (
                <div
                  key={tag}
                  className="group flex items-center gap-3 cut-corner-sm border border-line/10 dark:border-line/25 bg-surface dark:bg-white/[0.04] p-4 transition-all hover:border-brand-accent/50 hover:shadow-xs"
                >
                  <span className="font-mono text-[10px] text-ink-light dark:text-ink-soft">
                    {String(tagIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm font-semibold text-ink transition-colors group-hover:text-accentText">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Specification sidebar */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bracket-card reveal-on-scroll cut-corner-md border border-line/10 bg-surface p-6 shadow-xs sm:p-7">
            <div className="mb-6 flex items-center gap-2">
              <Layers3 className="w-4 h-4 text-accentText" />
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                {t("Project Specification")}
              </h2>
            </div>
            <dl className="space-y-5">
              <SpecRow label={t("Classification")} value={item.category} />
              <SpecRow label={t("Release Year")} value={item.year} />
              <SpecRow
                label={t("Status")}
                value={t("Shipped / Production")}
              />
              <SpecRow
                label={t("Core Stack")}
                value={`${item.tags.length} ${t("Technologies")}`}
              />
              <SpecRow
                label={t("Access")}
                value={
                  project.liveUrl && project.githubUrl
                    ? t("Demo & Source")
                    : project.liveUrl
                      ? t("Live Demo")
                      : t("Source Code")
                }
              />
            </dl>
          </div>

          <div
            className="reveal-on-scroll relative overflow-hidden cut-corner-md bg-night p-6 text-white sm:p-7"
            data-delay="100"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <div className="relative">
              <span className="font-mono text-[11px] uppercase tracking-widest text-brand-accent">
                {t("OPEN FOR COLLABORATION")}
              </span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                {t("Need a build like this?")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {t(
                  "Let's turn your next ambitious idea into a production-ready system."
                )}
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 cut-corner-sm bg-brand-accent px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-night transition-colors hover:bg-brand-accentHover"
              >
                {t("Start a Conversation")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* What this project includes */}
      {item.includes && item.includes.length > 0 && (
        <section className="border-y border-line/10 bg-paper-light py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="reveal-on-scroll mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                    {t("04 // Project Scope")}
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                  {t("What this project includes")}
                </h2>
                <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
                  {t(
                    "The core features and capabilities delivered in this build."
                  )}
                </p>
              </div>
              <span className="cut-corner-sm border border-line/10 bg-surface px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-soft">
                {String(item.includes.length).padStart(2, "0")} {t("Features")}
              </span>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {item.includes.map((feature, itemIndex) => (
                <li
                  key={feature}
                  data-delay={(itemIndex % 3) * 60}
                  className="reveal-on-scroll group flex items-start gap-4 cut-corner-sm border border-line/10 bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-brand-accent/50 hover:shadow-xs"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center cut-corner-sm bg-brand-accent/10 text-accentText">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-light">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-sm sm:text-base leading-relaxed text-ink">
                      {t(feature)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="border-t border-line/10 bg-paper-light py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
              {t("NEXT IN THE ARCHIVE")}
            </span>
          </div>
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                {t("Next Project")} // {nextProject.year}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-accentText">
                {nextProject.title}
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink transition-colors group-hover:text-accentText">
              {t("View Case Study")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* More work */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
              {t("MORE FROM THE ARCHIVE")}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherProjects.map((other) => (
              <Link
                key={other.id}
                href={`/projects/${other.id}`}
                className="group cut-corner-md overflow-hidden border border-line/10 bg-surface transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-night">
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accentText">
                      {other.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-ink transition-colors group-hover:text-accentText">
                      {other.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-ink-soft transition-colors group-hover:text-accentText" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
