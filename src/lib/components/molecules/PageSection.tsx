import Headline from "@/lib/components/atoms/Headline";
import { DaisyVariants } from "@/lib/types";
import { ReactNode } from "react";

type Props = {
  title: string;
  variant: DaisyVariants;
  children: ReactNode;
};

export default function PageSection({ title, variant, children }: Props) {
  return (
    <section className=" space-y-6">
      <Headline level={2} variant={variant}>
        {title}
      </Headline>
      {children}
    </section>
  );
}
