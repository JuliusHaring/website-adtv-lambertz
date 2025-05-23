import Headline from "@/lib/components/atoms/Headline";
import PageSection from "@/lib/components/molecules/PageSection";
import { Image } from "@/lib/components/atoms/Image";
import MapEmbed from "@/lib/components/molecules/MapEmbed";

export const metadata = {
  title: "Unsere Tanzschule – ADTV Tanzschule Lambertz",
  description:
    "Besuchen Sie unsere Tanzschule in Aachen-Soers. Lernen Sie uns und unsere Räumlichkeiten kennen und erfahren Sie, wie Sie uns am besten erreichen.",
  alternates: {
    canonical: "https://www.tanzschule-lambertz.de/tanzschule",
  },
  openGraph: {
    title: "Unsere Tanzschule – ADTV Tanzschule Lambertz",
    description:
      "Einblicke in die Räumlichkeiten und Lage der ADTV Tanzschule Lambertz in Aachen. Mit Wegbeschreibung und Fotogalerie.",
    url: "https://www.tanzschule-lambertz.de/tanzschule",
    siteName: "ADTV Tanzschule Lambertz",
    type: "website",
    locale: "de_DE",
  },
};

export default function Tanzschule() {
  const variant = "info";

  return (
    <PageSection title="ADTV Tanzschule Aachen" variant={variant}>
      <a
        href="https://maps.app.goo.gl/u5ojGbRLVU5ArwpX7"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold leading-relaxed hover:underline block"
      >
        ADTV Tanzschule Lambertz
        <br />
        Soerser Weg 90
        <br />
        52070 Aachen
      </a>

      <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.011691628047!2d6.0917201!3d50.7938919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0991250eeb539%3A0x2f83c16d2705a4fa!2sADTV%20dance%20school%20Lambertz!5e0!3m2!1sen!2sde!4v1746440384720!5m2!1sen!2sde" />

      <p>
        Seit Januar 2010 befindet sich der Hauptstandort der ADTV Tanzschule
        Lambertz mitten in der grünen Aachener Soers. Die Tische rund um die
        Tanzfläche laden dazu ein, vor oder nach dem Unterricht ins Gespräch zu
        kommen oder beim Unterricht zuzuschauen. Parkplätze sind in
        ausreichender Anzahl vorhanden.
      </p>

      <Headline level={3} variant={variant}>
        Fotogalerie
      </Headline>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Image
            key={i}
            src={`/tanzschule/ts_0${i}.jpg`}
            alt={`Foto ${i}`}
            width={800}
            height={800}
            className="object-cover aspect-square"
          />
        ))}
      </div>

      <Headline level={3} variant={variant}>
        Wegbeschreibung
      </Headline>

      <div>
        <Headline level={4} variant={variant}>
          Aus Aachen Innenstadt kommend (Alleenring)
        </Headline>
        <ul className="list-disc list-inside text-sm">
          <li>Abbiegen in die Krefelder Straße (B57)</li>
          <li>Erste Möglichkeit links in den Soerser Weg</li>
          <li>Ca. 1 km folgen (Ortsausgangsschild passieren)</li>
          <li>Die Tanzschule befindet sich auf der rechten Seite</li>
        </ul>
      </div>

      <div>
        <Headline level={4} variant={variant}>
          Von der Autobahn A4 kommend
        </Headline>
        <ul className="list-disc list-inside text-sm">
          <li>Ausfahrt: Aachen Zentrum</li>
          <li>Auf die B57 Richtung Aachen</li>
          <li>Nach ca. 0,5 km rechts in den Eulersweg (L244)</li>
          <li>Nach ca. 0,7 km links in den Soerser Weg</li>
          <li>
            Nach ca. 0,5 km befindet sich die Tanzschule auf der linken Seite
          </li>
        </ul>
      </div>
    </PageSection>
  );
}
