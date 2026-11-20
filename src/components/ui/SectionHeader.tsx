import React from "react";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  theme = "light",
  align = "left",
  className = "",
}) => {
  const isDark = theme === "dark";
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignClass} ${className}`}>
      {/* Monospace Architectural Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 bg-brand-accent cut-corner-sm" />
        <span
          className={`text-xs font-mono tracking-widest uppercase font-semibold ${
            isDark ? "text-brand-accent" : "text-accentText"
          }`}
        >
          {tag}
        </span>
      </div>

      {/* Section Title */}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08] ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
