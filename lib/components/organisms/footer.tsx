export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Tanzschule</span>
        <a className="link link-hover">Über uns</a>
        <a className="link link-hover">Kontakt</a>
      </div>
      <div>
        <span className="footer-title">Rechtliches</span>
        <a className="link link-hover" href="/footer/impressum">
          Impressum
        </a>
        <a className="link link-hover" href="/footer/datenschutz">
          Datenschutz
        </a>
      </div>
    </footer>
  );
}
