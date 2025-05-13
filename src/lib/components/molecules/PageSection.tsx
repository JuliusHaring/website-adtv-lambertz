import Headline from "@/lib/components/atoms/Headline";
import { DaisyVariants } from "@/lib/types";
import { ReactNode } from "react";

type Props = {
  title: string;
  titleClass?: string;
  variant: DaisyVariants;
  children: ReactNode;
};

export default function PageSection({
  title,
  titleClass,
  variant,
  children,
}: Props) {
  return (
    <section className="space-y-6">
      <Headline level={1} variant={variant} className={titleClass}>
        {title}
      </Headline>
      {children}
    </section>
  );
}
