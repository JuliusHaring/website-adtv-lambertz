import { JSX } from "react";
import { DaisyVariants } from "@/lib/types";

type HeadlineProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: DaisyVariants;
  className?: string;
  children: React.ReactNode;
};

export const variantClasses: Record<DaisyVariants, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  neutral: "text-neutral",
};

export default function Headline({
  level = 1,
  variant = "primary",
  className,
  children,
}: HeadlineProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const sizeClass =
    {
      1: "text-3xl",
      2: "text-2xl",
      3: "text-xl",
      4: "text-lg",
      5: "text-md",
      6: "text-base",
    }[level] ?? "text-base";

  const variantClass = variantClasses[variant] ?? "text-primary";

  return (
    <Tag
      className={`${sizeClass} font-bold ${variantClass} my-6 ${className && className}`}
    >
      {children}
    </Tag>
  );
}
