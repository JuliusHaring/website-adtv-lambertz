import { ReactNode } from "react";

export default function Card({
  title,
  className,
  children,
  hover = true,
}: {
  title?: string;
  className?: string;
  children: ReactNode;
  hover?: boolean;
}) {
  return (
    <div
      className={`bg-base-100 border border-base-200 px-12 pb-10 pt-4 rounded-lg space-y-3 ${
        hover
          ? "transition-transform duration-300 ease-in-out hover:scale-105"
          : ""
      } ${className || ""}`}
    >
      {title && (
        <>
          <h3 className="text-2xl font-semibold text-base-content">{title}</h3>
          <hr className="text-base-300" />
        </>
      )}
      <div className="text-base text-base-content/80">{children}</div>
    </div>
  );
}
