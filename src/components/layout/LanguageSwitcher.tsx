"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const base =
    "px-2 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-full transition-colors";

  return (
    <div
      className="flex shrink-0 items-center gap-0.5 rounded-full border border-line/15 bg-surface/80 p-0.5 shadow-sm backdrop-blur-sm"
      role="group"
      aria-label={t("Language")}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`${base} ${
          language === "en"
            ? "bg-night text-white shadow-xs"
            : "text-ink-soft hover:text-ink hover:bg-night/5"
        }`}
      >
        EN
      </button>
      <span className="h-3 w-px bg-line/15" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLanguage("km")}
        aria-pressed={language === "km"}
        className={`${base} ${
          language === "km"
            ? "bg-night text-white shadow-xs"
            : "text-ink-soft hover:text-ink hover:bg-night/5"
        }`}
      >
        ខ្មែរ
      </button>
    </div>
  );
};
