import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-shadow duration-200 ${className}`}
      {...rest}
    />
  );
}
