import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Github,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/data/portfolioData";

type ProjectPageProps = {
  params: { id: string };
};

const getProject = (id: string) =>
  portfolioData.projects.find((project) => project.id === id);

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.id);

  if (!project) {
    return { title: "Project Not Found | Lanh Phalla" };
  }

  return {
    title: `${project.title} — Project Case Study | Lanh Phalla`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Project Case Study`,
      description: project.summary,
      images: [project.image],
      type: "article",
    },
  };
}

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

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  const projects = portfolioData.projects;
  const index = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(index + 1) % projects.length];
  const otherProjects = projects
    .filter((item) => item.id !== project.id && item.id !== nextProject.id)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen flex flex-col bg-paper">
      <ScrollProgress />
      <ScrollReveal />
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36">
        <article>
          {/* Breadcrumb / archive index */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-line/10">
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-ink-soft hover:text-accentText transition-colors"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>All Projects</span>
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                PROJECT FILE // {String(index + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Project hero copy */}
          <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-10 sm:pb-12">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 cut-corner-sm bg-brand-accent/10 border border-brand-accent/25 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 cut-corner-sm border border-line/10 bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 cut-corner-sm border border-brand-yellow/50 bg-brand-yellow px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-night">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Build
                </span>
              )}
            </div>

            <h1 className="max-w-5xl font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tighter text-ink">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-ink-soft">
              {project.summary}
            </p>
          </header>

          {/* Project hero visual */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative aspect-[16/9] w-full cut-corner-md overflow-hidden border border-line/10 bg-night shadow-xl">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
              <span className="absolute top-4 right-5 sm:top-6 sm:right-8 font-mono text-[10px] uppercase tracking-widest text-white/80 sm:text-xs">
                SYSTEM PREVIEW
              </span>
              <span className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8 font-mono text-[10px] uppercase tracking-widest text-white/85 sm:text-xs">
                FIG. 01 — {project.title}
              </span>
            </div>
          </div>

          {/* Detail body */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-14">
              <section className="reveal-on-scroll">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                    01 // Architecture & Impact
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                  System Architecture &amp; Impact
                </h2>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-soft">
                  {project.description}
                </p>
              </section>

              <section className="reveal-on-scroll" data-delay="100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                    02 // Technology Stack
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                  Technology Stack
                </h2>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tag}
                      className="group flex items-center gap-3 cut-corner-sm border border-line/10 bg-surface p-4 transition-all hover:border-brand-accent/50 hover:shadow-xs"
                    >
                      <span className="font-mono text-[10px] text-ink-light">
                        {String(tagIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-sm font-semibold text-ink transition-colors group-hover:text-accentText">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal-on-scroll flex flex-wrap items-center gap-4 pt-2" data-delay="150">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 cut-corner-sm border border-line/20 bg-surface px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:border-line hover:bg-night hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 cut-corner-sm bg-brand-accent px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-night transition-colors hover:bg-brand-accentHover"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </section>
            </div>

            {/* Specification sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="bracket-card reveal-on-scroll cut-corner-md border border-line/10 bg-surface p-6 shadow-xs sm:p-7">
                <div className="mb-6 flex items-center gap-2">
                  <Layers3 className="w-4 h-4 text-accentText" />
                  <h2 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                    Project Specification
                  </h2>
                </div>
                <dl className="space-y-5">
                  <SpecRow label="Classification" value={project.category} />
                  <SpecRow label="Release Year" value={project.year} />
                  <SpecRow label="Status" value="Shipped / Production" />
                  <SpecRow
                    label="Core Stack"
                    value={`${project.tags.length} Technologies`}
                  />
                  <SpecRow
                    label="Access"
                    value={
                      project.liveUrl && project.githubUrl
                        ? "Demo & Source"
                        : project.liveUrl
                          ? "Live Demo"
                          : "Source Code"
                    }
                  />
                </dl>
              </div>

              <div className="reveal-on-scroll relative overflow-hidden cut-corner-md bg-night p-6 text-white sm:p-7" data-delay="100">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <div className="relative">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-brand-accent">
                    OPEN FOR COLLABORATION
                  </span>
                  <h2 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                    Need a build like this?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Let&apos;s turn your next ambitious idea into a production-ready system.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-6 inline-flex items-center gap-2 cut-corner-sm bg-brand-accent px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-night transition-colors hover:bg-brand-accentHover"
                  >
                    Start a Conversation
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Next project */}
          <section className="border-t border-line/10 bg-paper-light py-14 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                  NEXT IN THE ARCHIVE
                </span>
              </div>
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex flex-col sm:flex-row sm:items-end justify-between gap-6"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                    Next Project // {nextProject.year}
                  </p>
                  <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-accentText">
                    {nextProject.title}
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink transition-colors group-hover:text-accentText">
                  View Case Study
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
                  MORE FROM THE ARCHIVE
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {otherProjects.map((item) => (
                  <Link
                    key={item.id}
                    href={`/projects/${item.id}`}
                    className="group cut-corner-md overflow-hidden border border-line/10 bg-surface transition-all hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-night">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
                    </div>
                    <div className="flex items-start justify-between gap-3 p-5">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-accentText">
                          {item.category}
                        </p>
                        <h3 className="mt-1.5 font-display text-lg font-bold text-ink transition-colors group-hover:text-accentText">
                          {item.title}
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
      </main>

      <Footer />
    </div>
  );
}
