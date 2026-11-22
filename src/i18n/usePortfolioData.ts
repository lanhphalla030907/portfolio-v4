"use client";

import { useMemo } from "react";
import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "./LanguageProvider";

/**
 * Keys that must never be translated: identifiers, URLs, file paths, dates
 * and personal/brand names. Everything else is looked up in the dictionary
 * so the original English data file stays exactly as it is.
 */
const SKIP_KEYS = new Set([
  "id",
  "name",
  "shortName",
  "image",
  "src",
  "icon",
  "logoUrl",
  "verifyUrl",
  "liveUrl",
  "githubUrl",
  "email",
  "github",
  "facebook",
  "telegram",
  "year",
  "date",
  "period",
  "credentialId",
  "level",
  "href",
  "url",
]);

function translateValue(
  value: unknown,
  key: string | null,
  t: (text: string) => string
): unknown {
  if (key && SKIP_KEYS.has(key)) return value;
  if (typeof value === "string") return t(value);
  if (Array.isArray(value)) {
    return value.map((item) => translateValue(item, null, t));
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([childKey, childValue]) => [
        childKey,
        translateValue(childValue, childKey, t),
      ])
    );
  }
  return value;
}

/** Returns the existing portfolio data with Khmer strings when selected. */
export function usePortfolioData() {
  const { t } = useLanguage();

  return useMemo(
    () => translateValue(portfolioData, null, t) as typeof portfolioData,
    [t]
  );
}
