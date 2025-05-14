"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Image } from "@/lib/components/atoms/Image";

const NAV_ITEMS = [
  { title: "Philosophie", href: "/philosophie", className: "btn-primary" },
  { title: "Kursprogramm", href: "/kursprogramm", className: "btn-secondary" },
  { title: "Unser Team", href: "/unserteam", className: "btn-accent" },
  { title: "Tanzschule", href: "/tanzschule", className: "btn-info" },
  { title: "Ferien", href: "/ferien", className: "btn-warning" },
  { title: "Kontakt", href: "/kontakt", className: "btn-primary" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("lambertz");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "lambertz" ? "light" : "lambertz"));
  };

  const titleClass = "lg:text-3xl text-2xl font-bold text-primary";

  return (
    <div className="navbar bg-base-100 shadow-md px-4 no-print">
      <div className="flex-1">
        <Link href="/" className={titleClass}>
          <span className="flex items-center gap-2">
            <Image
              clickToOpen={false}
              alt="Logo"
              width={30}
              height={30}
              src="/logo_transparent.png"
            />
            ADTV Tanzschule Lambertz
          </span>
        </Link>
      </div>

      <div className="hidden lg:flex gap-2 items-center">
        {NAV_ITEMS.map(({ title, href, className }) => (
          <Link key={href} href={href} className={`btn btn-ghost ${className}`}>
            {title}
          </Link>
        ))}
        <div className="flex items-center gap-2 ml-2">
          <span className="text-sm">Theme:</span>
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              className="toggle toggle-info"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
          </label>
        </div>
      </div>

      <div className="flex-none lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="btn btn-square btn-ghost"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-base-100 z-40 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 shadow-md">
          <Link href="/" onClick={() => setOpen(false)} className={titleClass}>
            ADTV Tanzschule Lambertz
          </Link>
          <button onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-4">
          {NAV_ITEMS.map(({ title, href, className }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`btn btn-ghost ${className} text-xl`}
            >
              {title}
            </Link>
          ))}
          <div className="place-items-center gap-2 mt-4">
            <span className="text-sm">Theme:</span>
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                className="toggle toggle-info"
                checked={theme === "light"}
                onChange={toggleTheme}
              />
            </label>
          </div>
        </nav>
      </div>
    </div>
  );
}
