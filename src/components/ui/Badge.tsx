import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "yellow" | "dark" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const variantClasses = {
    default: "bg-night/5 text-ink border border-line/10",
    accent: "bg-brand-accent/10 text-accentText border border-brand-accent/25",
    yellow: "bg-brand-yellow text-night border border-brand-yellow/40 font-semibold",
    dark: "bg-night/10 text-slate-200 border border-white/15",
    outline: "bg-transparent text-ink/70 border border-line/15",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase rounded-sm select-none ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
