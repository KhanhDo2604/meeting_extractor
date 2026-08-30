interface FormatDateOptions {
  includeYear?: boolean;
}

export function formatDate(iso: string, options?: FormatDateOptions): string;
export function formatDate(
  iso: string | null,
  options?: FormatDateOptions,
): string | null;
export function formatDate(
  iso: string | null,
  { includeYear = true }: FormatDateOptions = {},
) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    ...(includeYear && { year: "numeric" }),
  });
}
