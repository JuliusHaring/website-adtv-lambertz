"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link
          href="/"
          className="btn text-xl font-bold px-4 py-2 border-none rounded-xl bg-gradient-to-br from-primary via-secondary via-accent via-info to-warning text-white shadow-md hover:brightness-110 transition"
        >
          ADTV Tanzschule Lambertz
        </Link>
      </div>

      <div className="flex-none lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`flex-col lg:flex-row lg:flex gap-2 items-center ${open ? "flex absolute top-16 right-4 bg-base-100 shadow-md p-4 rounded-lg z-50" : "hidden"} lg:static lg:bg-transparent lg:shadow-none`}
      >
        <Link className="btn btn-ghost btn-primary" href="/philosophie">
          Philosophie
        </Link>
        <Link className="btn btn-ghost btn-secondary" href="/kursprogramm">
          Kursprogramm
        </Link>
        <Link className="btn btn-ghost btn-accent" href="/unserteam">
          Unser Team
        </Link>
        <Link className="btn btn-ghost btn-info" href="/tanzschule">
          Tanzschule
        </Link>
        <Link className="btn btn-ghost btn-warning" href="/ferien">
          Ferien
        </Link>
        <Link className="btn btn-ghost btn-primary" href="/kontakt">
          Kontakt
        </Link>
      </div>
    </div>
  );
}
