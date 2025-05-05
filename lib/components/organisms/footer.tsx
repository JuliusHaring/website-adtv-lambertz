export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content px-10 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-8 max-w-4xl mx-auto w-full">
        <div className="flex flex-col space-y-2">
          <span className="footer-title">Tanzschule</span>
          <a className="link link-hover">Über uns</a>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="footer-title">Rechtliches</span>
          <a className="link link-hover" href="/footer/impressum">
            Impressum
          </a>
          <a className="link link-hover" href="/footer/datenschutz">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
