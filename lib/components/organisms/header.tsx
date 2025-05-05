export default function Header() {
    return (
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Tanzschule</a>
        </div>
        <div className="flex-none">
          <a className="btn btn-ghost btn-primary" href="#philosophie">Philosophie</a>
          <a className="btn btn-ghost btn-secondary" href="#kursprogramm">Kursprogramm</a>
          <a className="btn btn-ghost btn-accent" href="#team">Unser Team</a>
          <a className="btn btn-ghost btn-info" href="#schule">Tanzschule</a>
          <a className="btn btn-ghost btn-warning" href="#ferien">Ferien</a>
        </div>
      </div>
    );
  }
  