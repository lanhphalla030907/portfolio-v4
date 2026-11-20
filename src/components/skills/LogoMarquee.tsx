import React from "react";
import { portfolioData } from "@/data/portfolioData";

interface LogoMarqueeProps {
  reverse?: boolean;
  duration?: number;
}

const LogoGroup: React.FC<{ hidden?: boolean }> = ({ hidden = false }) => {
  const skills = portfolioData.skills
    .flatMap((category) => category.skills)
    .filter((skill) => skill.icon);

  return (
    <div
      className="flex shrink-0 items-center gap-3 pr-3"
      aria-hidden={hidden || undefined}
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-2.5 rounded-lg border border-line/10 bg-surface px-3.5 py-2.5 shadow-xs"
        >
          <img
            src={skill.icon}
            alt=""
            className="h-5 w-5 object-contain"
            loading="lazy"
          />
          <span className="whitespace-nowrap font-mono text-xs font-semibold text-ink-soft">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  reverse = false,
  duration = 36,
}) => {
  return (
    <div
      className={`logo-marquee${reverse ? " logo-marquee--reverse" : ""}`}
      role="region"
      aria-label="Technologies and tools I work with"
    >
      <div
        className="logo-marquee__track"
        style={{ animationDuration: `${duration}s` }}
      >
        <LogoGroup />
        <LogoGroup hidden />
      </div>
    </div>
  );
};
