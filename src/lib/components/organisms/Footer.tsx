export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-5xl mx-auto w-full">
        <div className="flex flex-col space-y-2">
          <span className="footer-title">Tanzschule</span>
          <a
            href="https://maps.app.goo.gl/u5ojGbRLVU5ArwpX7"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            ADTV Tanzschule Lambertz <br />
            Soerser Weg 90 <br />
            52070 Aachen
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="footer-title">Kontakt</span>
          <p>
            Telefon:{" "}
            <a href="tel:02414465225" className="link link-hover">
              0241 4465225
            </a>{" "}
            <br />
            Mobil:{" "}
            <a href="tel:01631976380" className="link link-hover">
              0163 1976380
            </a>{" "}
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@tanzschule-lambertz.de"
              className="link link-hover"
            >
              info@tanzschule-lambertz.de
            </a>
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="footer-title">Rechtliches</span>
          <a className="link link-hover" href="/footer/impressum">
            Impressum
          </a>
          <a className="link link-hover" href="/footer/datenschutz">
            Datenschutz
          </a>
          <a className="link link-hover" href="/footer/agb">
            AGB
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-base-content/60">
        Powered by{" "}
        <a
          href="https://www.juliusharing.com"
          className="link link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.juliusharing.com
        </a>
      </div>
    </footer>
  );
}
