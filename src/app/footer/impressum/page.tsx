import PageSection from "@/lib/components/molecules/PageSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – ADTV Tanzschule Lambertz",
  description:
    "Angaben gemäß § 5 TMG zur ADTV Tanzschule Lambertz in Aachen. Inhaberin: Astrid Lambertz, Mitglied im ADTV.",
  alternates: {
    canonical: "https://www.tanzschule-lambertz.de/footer/impressum",
  },
  openGraph: {
    title: "Impressum – ADTV Tanzschule Lambertz",
    description:
      "Offizielle Anbieterkennzeichnung der ADTV Tanzschule Lambertz in Aachen gemäß § 5 TMG.",
    url: "https://www.tanzschule-lambertz.de/footer/impressum",
    siteName: "ADTV Tanzschule Lambertz",
    type: "website",
    locale: "de_DE",
  },
};

export default function Impressum() {
  const variant = "neutral";

  return (
    <PageSection title="Impressum" variant={variant}>
      <p>
        zur Homepage des{" "}
        <Link
          href="https://www.adtv.de"
          className="link link-neutral"
          target="_blank"
        >
          Allgemeinen Deutschen Tanzlehrerverbands e.V.
        </Link>
      </p>

      <div>
        <p>ADTV Tanzschule Lambertz</p>
        <p>Astrid Lambertz</p>
        <p>Soerser Weg 90</p>
        <p>52070 Aachen</p>
        <p>Telefon: 0241 4465225</p>
        <p>Mobil: 0163 1976380</p>
        <p>
          E-Mail:{" "}
          <Link
            href="mailto:info@tanzschule-lambertz.de"
            className="link link-neutral"
          >
            info@tanzschule-lambertz.de
          </Link>
        </p>
      </div>

      <p>
        Die Tanzschule Lambertz ist Mitglied im ADTV <br />
        (Allgemeiner Deutscher Tanzlehrerverband e.V.)
      </p>

      <p>
        <Link href="/footer/agb" className="link link-neutral">
          Allgemeine Geschäftsbedingungen der ADTV Tanzschule Lambertz
        </Link>
      </p>

      <div>
        <p className="font-semibold">Bankverbindung:</p>
        <p>IBAN: DE09 3906 0180 1423 3250 26</p>
        <p>BIC: GENODED1AAC (Aachener Bank)</p>
      </div>

      <div>
        <p className="font-semibold">Haftungsausschluss:</p>
        <p>
          Alle Inhalte auf unserer Internetseite wurden mit größter Sorgfalt
          erstellt. Wir übernehmen jedoch keine Gewähr für die Aktualität,
          Richtigkeit und Vollständigkeit der Inhalte.
        </p>
        <p>
          Unser Angebot enthält Verweise („Hyperlinks“) zu externen
          Internetseiten. Auf die Inhalte und Urheberschaft der verlinkten
          Seiten haben wir weder jetzt, noch in Zukunft Einfluss. Hierfür ist
          allein der jeweilige Anbieter oder Betreiber der Seiten verantwortlich
          bzw. haftbar. Bei Bekanntwerden von Rechtsverstößen werden diese Links
          umgehend entfernt.
        </p>
      </div>

      <div>
        <p className="font-semibold">Aphorismus:</p>
        <p>
          Die Verwendung des Sinnspruchs im Kopfbereich dieser Internetseite
          erfolgt mit freundlicher Genehmigung des Urhebers Herrn Klaus Ender.
          Ohne das ausdrückliche Einverständnis des Autors ist eine
          Weiterverwendung dieses Zitats nicht gestattet.
        </p>
      </div>

      <div>
        <p className="font-semibold">Design & Realisation:</p>
        <p>
          Julius Haring - Data Analytics
          <br />
          Web- und AI-Entwickler
        </p>
        <p>
          E-Mail:{" "}
          <Link
            href="mailto:info@juliusharing.com"
            className="link link-neutral"
          >
            info@juliusharing.com
          </Link>
        </p>
      </div>
    </PageSection>
  );
}
