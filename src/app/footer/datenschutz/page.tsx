import Headline from "@/lib/components/atoms/Headline";
import PageSection from "@/lib/components/molecules/PageSection";
import Link from "next/link";

export default function Datenschutz() {
  const variant = "neutral";

  return (
    <PageSection title="Datenschutz" variant={variant}>
      <p className="font-semibold">
        Information über die Erhebung personenbezogener Daten und Kontaktdaten
        des Verantwortlichen
      </p>

      <p>
        Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für
        Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit
        Ihren personenbezogenen Daten bei Nutzung unserer Website.
      </p>

      <p>
        Verantwortlicher im Sinne der DSGVO ist:
        <br />
        <strong>ADTV Tanzschule Lambertz</strong>
        <br />
        Astrid Lambertz
        <br />
        Soerser Weg 90
        <br />
        52070 Aachen
        <br />
        Tel. 0241 4465225
        <br />
        <Link
          href="mailto:info@tanzschule-lambertz.de"
          className="link link-neutral"
        >
          E-Mail an die ADTV Tanzschule Lambertz versenden
        </Link>
      </p>

      <p>
        Diese Website nutzt aus Sicherheitsgründen eine
        SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an
        „https://“ und dem Schloss-Symbol in der Browserzeile.
      </p>

      <Headline level={3} variant={variant}>
        Datenerfassung beim Besuch unserer Website
      </Headline>

      <p>
        Beim rein informatorischen Besuch unserer Website erheben wir nur
        serverseitige Logdaten:
      </p>
      <ul>
        <li>Unsere besuchte Website</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Menge der gesendeten Daten in Byte</li>
        <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
        <li>Verwendeter Browser und Betriebssystem</li>
        <li>Verwendete IP-Adresse (ggf. anonymisiert)</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO zur
        Verbesserung der Stabilität und Funktionalität der Website.
      </p>

      <Headline level={3} variant={variant}>
        Kontaktaufnahme
      </Headline>
      <p>
        Bei Kontaktaufnahme (z.B. per E-Mail) verarbeiten wir Ihre Angaben zur
        Bearbeitung der Anfrage. Art. 6 Abs. 1 lit. f und ggf. lit. b DSGVO
        dienen als Rechtsgrundlage.
      </p>

      <Headline level={3} variant={variant}>
        Kundenkonto & Vertragsabwicklung
      </Headline>
      <p>
        Personenbezogene Daten zur Vertragsabwicklung oder Kontoerstellung
        werden gemäß Art. 6 Abs. 1 lit. b DSGVO verarbeitet und nach
        gesetzlichen Aufbewahrungsfristen gelöscht.
      </p>

      <Headline level={3} variant={variant}>
        Direktwerbung
      </Headline>
      <p>
        Wir nutzen Ihre Anschrift und ggf. Titel, Beruf o. Ä. auf Basis von Art.
        6 Abs. 1 lit. f DSGVO zur postalischen Werbung. Widerspruch jederzeit
        möglich.
      </p>

      <Headline level={3} variant={variant}>
        Bestellabwicklung
      </Headline>
      <p>
        Für Bestellungen übermitteln wir notwendige Daten an Transport- und
        Zahlungsdienstleister gemäß Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <Headline level={3} variant={variant}>
        Ihre Rechte
      </Headline>
      <ul>
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung (Art. 18 DSGVO)</li>
        <li>Unterrichtung (Art. 19 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerruf (Art. 7 Abs. 3 DSGVO)</li>
        <li>Beschwerde bei Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>

      <Headline level={3} variant={variant}>
        Widerspruchsrecht
      </Headline>
      <p>
        Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen, wenn
        diese auf berechtigtem Interesse basiert. Bei Direktwerbung beenden wir
        diese Verarbeitung nach Widerspruch.
      </p>

      <Headline level={3} variant={variant}>
        Speicherdauer
      </Headline>
      <p>
        Die Speicherdauer richtet sich nach gesetzlichen Fristen. Nach Ablauf
        erfolgt Löschung, sofern keine weitere Nutzung gerechtfertigt ist.
      </p>
    </PageSection>
  );
}
