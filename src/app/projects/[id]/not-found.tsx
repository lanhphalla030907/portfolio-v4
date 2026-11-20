import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ProjectNotFound() {
  return (
    <div className="relative min-h-screen flex flex-col bg-paper">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 pt-32 pb-20">
        <div className="w-full max-w-xl cut-corner-md border border-line/10 bg-surface p-8 sm:p-12 text-center shadow-xs">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
            ERROR // FILE NOT FOUND
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
            Project not found.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            This project file doesn&apos;t exist in the archive. Head back to the
            work index to explore the full collection.
          </p>
          <Link
            href="/#projects"
            className="mt-8 inline-flex items-center gap-2 cut-corner-sm bg-night px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-accent hover:text-night"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
