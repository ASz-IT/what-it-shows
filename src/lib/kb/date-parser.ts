import { dayFirst } from '#lib/kb/causes';

export type DateParts = { year: number; month: number; day: number };

// The shared parser used to read every numeric date month first. A day-first
// locale writes the day first, so the day and the month were swapped. The fix
// follows the locale: day first when the locale writes the day first.
export function parseNumericDate(input: string, locale: string): DateParts | null {
  const match = input.trim().match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  if (!match) return null;
  const first = Number(match[1]);
  const second = Number(match[2]);
  const year = Number(match[3]);
  const day = dayFirst(locale) ? first : second;
  const month = dayFirst(locale) ? second : first;
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  return { year, month, day };
}
