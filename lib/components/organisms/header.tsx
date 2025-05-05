import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Tanzschule
        </Link>
      </div>
      <div className="flex-none">
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
      </div>
    </div>
  );
}
