import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none px-4 py-2.5";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-ink-900 border border-ink-100 hover:border-brand-300 hover:-translate-y-0.5 active:translate-y-0 shadow-soft",
  ghost: "text-ink-500 hover:text-ink-900 hover:bg-ink-100",
};

export function Button({
  variant = "secondary",
  icon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {icon}
      {children}
    </button>
  );
}
