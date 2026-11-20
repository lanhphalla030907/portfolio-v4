"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Award, BadgeCheck, ExternalLink, Maximize2 } from "lucide-react";

export const CertificatesSection: React.FC = () => {
  const certificates = portfolioData.certificates;

  return (
    <section
      id="certificates"
      className="bg-paper-light py-24 sm:py-32 px-4 sm:px-6 border-t border-line/8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            tag="CREDENTIALS & CERTIFICATIONS // 05"
            title="Certifications that back the craft."
            subtitle="Verified credentials across cloud architecture, engineering, data, and machine learning."
            className="mb-0"
          />
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft shrink-0">
            {String(certificates.length).padStart(2, "0")} Credentials
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.id}
              data-delay={(index % 3) * 90}
              className="reveal-zoom group flex flex-col overflow-hidden rounded-xl border border-line/10 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg"
            >
              {/* Certificate image preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-night">
                {certificate.image ? (
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                    aria-label={`View full image of ${certificate.title} certificate`}
                  >
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-50" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-sm bg-night/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm">
                      <Maximize2 className="h-3 w-3" />
                      View
                    </span>
                  </a>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-night to-night-card">
                    <Award className="h-10 w-10 text-brand-accent/70" />
                  </div>
                )}

                <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
                  {certificate.featured && (
                    <span className="rounded-sm bg-brand-yellow px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-night">
                      Featured
                    </span>
                  )}
                </div>
                <span className="absolute right-3 top-3 z-10 rounded-sm bg-black/40 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm">
                  {certificate.date}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-accentText">
                  {certificate.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">{certificate.issuer}</p>
                <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-ink-soft">
                  {certificate.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {certificate.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-soft"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/10 pt-5">
                  <span className="truncate font-mono text-[10px] text-ink-muted">
                    ID · {certificate.credentialId}
                  </span>
                  {certificate.verifyUrl && (
                    <a
                      href={certificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-accentText transition-colors hover:text-accentTextHover"
                      aria-label={`Verify ${certificate.title}`}
                    >
                      <BadgeCheck className="h-4 w-4" />
                      Verify
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
