import { kmProjectsA } from "./kmProjectsA";
import { kmProjectsB } from "./kmProjectsB";
import { kmContent } from "./kmContent";
import { kmContentB } from "./kmContentB";
import { kmUiA } from "./kmUiA";
import { kmUiB } from "./kmUiB";

/**
 * Complete Khmer (ខ្មែរ) translation dictionary.
 *
 * Keys are the exact English strings already present in the portfolio. The
 * English source content is never edited — this dictionary only adds the
 * Khmer equivalents. Technical names, URLs, emails, dates and identifiers are
 * intentionally omitted so they remain unchanged in both languages.
 */
export const kmTranslations: Record<string, string> = {
  ...kmContent,
  ...kmContentB,
  ...kmProjectsA,
  ...kmProjectsB,
  ...kmUiA,
  ...kmUiB,
};
