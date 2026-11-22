"use client";

import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

type Theme = "light" | "dark";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

export const ThemeToggle: React.FC = () => {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.style.setProperty("--toggle-x", `${x}px`);
    root.style.setProperty("--toggle-y", `${y}px`);
    root.style.setProperty("--toggle-r", `${radius}px`);

    const applyTheme = () => {
      root.classList.toggle("dark", next === "dark");
      root.style.colorScheme = next;
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch {
        // Storage can be unavailable in private browsing modes.
      }
    };

    const doc = document as ViewTransitionDocument;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (doc.startViewTransition && !reducedMotion) {
      // Pause the global colour transitions while the reveal plays, otherwise
      // every element animates twice and the switch feels laggy.
      root.classList.add("theme-vt");
      const transition = doc.startViewTransition(() => {
        flushSync(() => setTheme(next));
        applyTheme();
      });
      void transition.finished.then(
        () => root.classList.remove("theme-vt"),
        () => root.classList.remove("theme-vt")
      );
      return;
    }

    setTheme(next);
    applyTheme();
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark ? t("Switch to light mode") : t("Switch to dark mode")
      }
      title={isDark ? t("Switch to light mode") : t("Switch to dark mode")}
      style={{ ["viewTransitionName" as string]: "theme-toggle" }}
      className="relative flex h-9 w-[68px] shrink-0 items-center justify-between rounded-full border border-line/15 bg-surface/80 px-1.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-accent/50 active:scale-95"
    >
      <span
        className={`absolute left-1 top-1 h-7 w-7 rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "translate-x-8 bg-brand-accent" : "translate-x-0 bg-night"
        }`}
      />
      <Sun
        className={`relative z-10 h-4 w-4 transition-all duration-500 ${
          isDark ? "-rotate-90 text-ink-muted" : "rotate-0 text-white"
        }`}
      />
      <Moon
        className={`relative z-10 h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-0 text-night" : "rotate-90 text-ink-muted"
        }`}
      />
    </button>
  );
};
