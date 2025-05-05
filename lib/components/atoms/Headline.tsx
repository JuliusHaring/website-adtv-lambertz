import { JSX } from "react";
import { DaisyVariants } from "../../types";

type HeadlineProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: DaisyVariants;
  children: React.ReactNode;
};

const variantClasses: Record<DaisyVariants, string> = {
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
  children,
}: HeadlineProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const sizeClass = {
    1: "text-3xl",
    2: "text-2xl",
    3: "text-xl",
    4: "text-lg",
    5: "text-md",
    6: "text-base",
  }[level];

  return (
    <Tag className={`${sizeClass} font-bold ${variantClasses[variant]} my-6`}>
      {children}
    </Tag>
  );
}
