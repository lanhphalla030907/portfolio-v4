import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "pill";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  cutCorner?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  cutCorner = true,
  children,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-mono tracking-wider",
    md: "px-5 py-2.5 text-sm font-mono tracking-wider",
    lg: "px-7 py-3.5 text-base font-mono tracking-wider font-semibold",
  }[size];

  const variantClasses = {
    primary:
      "bg-night text-white hover:bg-brand-accent hover:text-night transition-all duration-300 shadow-sm active:scale-[0.98]",
    secondary:
      "bg-surface text-ink border border-line/15 hover:border-brand-accent hover:text-accentText transition-all duration-300 active:scale-[0.98]",
    outline:
      "border border-line/20 text-ink hover:bg-night hover:text-white transition-all duration-300 active:scale-[0.98]",
    pill: "rounded-full bg-night text-white hover:bg-brand-accent hover:text-night transition-all duration-300 active:scale-[0.98]",
  }[variant];

  const cutClass = cutCorner && variant !== "pill" ? "cut-corner-sm" : "";

  const combinedClasses = `inline-flex items-center justify-center gap-2 select-none uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${sizeClasses} ${variantClasses} ${cutClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
