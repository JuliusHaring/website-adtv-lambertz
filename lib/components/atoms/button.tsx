import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { DaisyVariants } from "../../types";

type BaseProps = {
  variant?: DaisyVariants;
  href?: string;
};

export type ButtonProps = BaseProps &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  return <button className={`btn btn-${variant}`} {...props} />;
}
