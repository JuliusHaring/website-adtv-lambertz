"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
  const titleClass =
    "lg:text-3xl text-2xl  font-bold bg-gradient-to-br from-primary via-secondary via-accent via-info to-warning bg-clip-text text-transparent";

  return (
    <div className="navbar bg-base-100 shadow-md px-4 no-print">
      <div className="flex-1">
        <Link href="/" className={titleClass}>
          ADTV Tanzschule Lambertz
        </Link>
      </div>

      {/* Mobile toggle */}
      <div className="flex-none lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="btn btn-square btn-ghost"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex gap-2 items-center">
        {NAV_ITEMS.map(({ title, href, className }) => (
          <Link key={href} href={href} className={`btn btn-ghost ${className}`}>
            {title}
          </Link>
        ))}
      </div>

      {/* Mobile sidenav */}
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
        </nav>
      </div>
    </div>
  );
}
