"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { ProjectImage } from "@/data/portfolioData";
import { useLanguage } from "@/i18n/LanguageProvider";

type ProjectGalleryProps = {
  images: ProjectImage[];
  projectTitle: string;
};

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const { t } = useLanguage();
  const title = t(projectTitle);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const count = images.length;

  const close = useCallback(() => setActiveIndex(null), []);
  const goTo = useCallback(
    (index: number) => setActiveIndex(((index % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") goTo(activeIndex + 1);
      if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, goTo]);

  if (count === 0) return null;

  const active = activeIndex === null ? null : images[activeIndex];
  const frameNumber = (index: number) => String(index + 1).padStart(2, "0");
  const totalFrames = String(count).padStart(2, "0");

  return (
    <section className="border-b border-line/10 bg-paper-light py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal-on-scroll mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accentText">
                {t("01 // Visual Documentation")}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              {t("Inside the build")}
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-ink-soft">
              {t(
                "A closer look at the interfaces, workflows, and screens behind this project."
              )}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 cut-corner-sm border border-line/10 bg-surface px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-soft">
            {totalFrames} {t("Frames")}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${t("Open")} ${t(image.label)} ${t("in full screen")}`}
              className="reveal-on-scroll group relative block w-full cut-corner-md overflow-hidden border border-line/10 bg-night text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-light"
              data-delay={(index % 2) * 100}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-night">
                <img
                  src={image.src}
                  alt={`${title} — ${t(image.label)}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/90 via-night/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute left-4 top-4 cut-corner-sm border border-white/20 bg-night/70 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-white/85 backdrop-blur-sm">
                  {t("FIG.")} {frameNumber(index)}
                </span>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center cut-corner-sm border border-white/20 bg-night/70 text-white/85 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" />
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-brand-accent">
                        {t(image.label)}
                      </p>
                      <p className="mt-1 max-h-0 overflow-hidden text-xs leading-relaxed text-slate-300 opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:opacity-100 sm:group-focus-visible:max-h-12 sm:group-focus-visible:opacity-100">
                        {t(image.caption)}
                      </p>
                    </div>
                    <span className="mb-0.5 h-0.5 w-0 bg-brand-accent transition-all duration-300 group-hover:w-10" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} ${t("image gallery")}`}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm sm:p-10"
        >
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-4 sm:inset-x-8 sm:top-6">
            <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">
              {title} // {t("Frame")} {frameNumber(activeIndex)} {t("of")} {totalFrames}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={t("Close gallery")}
              className="flex h-10 w-10 shrink-0 items-center justify-center cut-corner-sm border border-white/20 bg-white/5 text-white transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-night"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goTo(activeIndex - 1);
            }}
            aria-label={t("Previous image")}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center cut-corner-sm border border-white/20 bg-night/70 text-white transition-colors hover:border-brand-accent hover:text-brand-accent sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <figure
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-5xl animate-[lightbox-in_.35s_cubic-bezier(.16,1,.3,1)_both]"
          >
            <div className="cut-corner-md overflow-hidden border border-white/10 bg-night shadow-2xl">
              <img
                src={active.src}
                alt={`${title} — ${t(active.label)}`}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-3 px-1">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-accent">
                  {t("FIG.")} {frameNumber(activeIndex)} — {t(active.label)}
                </p>
                <p className="mt-1.5 max-w-xl text-sm text-slate-300">{t(active.caption)}</p>
              </div>
              <div className="flex items-center gap-1.5">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`${t("Show")} ${t(image.label)}`}
                    aria-current={index === activeIndex}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-7 bg-brand-accent"
                        : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goTo(activeIndex + 1);
            }}
            aria-label={t("Next image")}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center cut-corner-sm border border-white/20 bg-night/70 text-white transition-colors hover:border-brand-accent hover:text-brand-accent sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
