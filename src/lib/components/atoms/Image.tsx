"use client";

import { useEffect, useState } from "react";
import NextImage, { ImageProps } from "next/image";

type Props = ImageProps & {
  className?: string;
  clickToOpen?: boolean;
};

export function Image({ className, clickToOpen = true, ...props }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const baseClass =
    "rounded-xl transition-transform duration-300 ease-in-out hover:scale-105";
  const clickableClass = clickToOpen ? " cursor-zoom-in" : "";
  const finalClass = `${baseClass}${clickableClass} ${className ?? ""}`.trim();

  const openProps = { ...props };
  delete openProps.fill;

  return (
    <>
      <NextImage
        {...props}
        className={finalClass}
        onClick={clickToOpen ? () => setIsOpen(true) : undefined}
      />

      {clickToOpen && isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="max-w-4xl w-full px-4">
            <NextImage
              {...openProps}
              width={800}
              height={800}
              className="w-full h-auto rounded-xl cursor-zoom-out"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
