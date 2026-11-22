import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetailContent } from "@/components/projects/ProjectDetailContent";
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

  const title = `${project.title} — Project Case Study | Lanh Phalla`;
  const socialTitle = `${project.title} — Project Case Study`;

  return {
    title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: socialTitle,
      description: project.summary,
      images: [project.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  const index = portfolioData.projects.findIndex((item) => item.id === project.id);

  return (
    <div className="relative min-h-screen flex flex-col bg-paper">
      <ScrollProgress />
      <ScrollReveal />
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36">
        <ProjectDetailContent project={project} index={index} />
      </main>

      <Footer />
    </div>
  );
}
