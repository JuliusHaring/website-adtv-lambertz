import Headline from "@/lib/components/atoms/Headline";
import Card from "@/lib/components/molecules/Card";
import PageSection from "@/lib/components/molecules/PageSection";
import Link from "next/link";

export const metadata = {
  title: "Kursprogramm – ADTV Tanzschule Lambertz",
  description:
    "Unser Kursprogramm für Einsteiger – mit Walzer, Discofox, Salsa und mehr. Flexible Laufzeiten, faire Preise, Einstieg jederzeit möglich.",
  alternates: {
    canonical: "https://www.tanzschule-lambertz.de/kursprogramm",
  },
  openGraph: {
    title: "Kursprogramm – ADTV Tanzschule Lambertz",
    description:
      "Entdecken Sie unser Einsteiger-Kursprogramm: Walzer, Discofox, Salsa & mehr. Flexible Laufzeit und transparente Konditionen.",
    url: "https://www.tanzschule-lambertz.de/kursprogramm",
    siteName: "ADTV Tanzschule Lambertz",
    type: "website",
    locale: "de_DE",
  },
};

export default function Kursprogramm() {
  const variant = "secondary";

  const kurse = [
    {
      kurs: "Grundkurs Einsteiger",
      wochentag: "Donnerstag",
      uhrzeit: "19:30 Uhr",
      beginn: "09.01.2025",
    },
    {
      kurs: "Grundkurs Einsteiger",
      wochentag: "Sonntag",
      uhrzeit: "15:30 Uhr",
      beginn: "12.01.2025",
    },
  ];

  return (
    <PageSection title="Einsteiger" variant={variant}>
      <p>
        Mit viel Musik und guter Laune lernen Sie, gemäß unserer Philosophie,
        die folgende Tänze kennen: Wiener Walzer, Langsamer Walzer, Discofox,
        Foxtrott, Boogie, Tango, Cha Cha Cha, Rumba, Salsa.
      </p>
      <p>
        Sie bestimmen die Länge des Kurses. Durch die monatliche Zahlweise in
        Kombination mit unseren kurzen Kündigungsfristen (
        <Link className="link link-secondary" href="/footer/agb">
          AGB
        </Link>
        ) entscheiden Sie selber, ob Ihr Kurs 4 Wochen oder 3 Monate dauert.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {kurse.map(({ kurs, wochentag, uhrzeit, beginn }) => (
          <Card hover={false} key={`${wochentag}-${uhrzeit}`}>
            <p className="text-lg font-semibold">{wochentag}</p>
            <p>
              <span className="font-medium">Uhrzeit:</span> {uhrzeit}
            </p>
            <p>
              <span className="font-medium">Beginn:</span> ab {beginn}
            </p>
            <Link
              href={`/kursprogramm/anmelden?kurs=${encodeURIComponent(kurs)}&wochentag=${encodeURIComponent(
                wochentag,
              )}&uhrzeit=${encodeURIComponent(uhrzeit)}&beginn=${encodeURIComponent(beginn)}`}
              className="btn btn-secondary btn-sm mt-2"
            >
              Anmelden →
            </Link>
          </Card>
        ))}
      </div>
      <Headline level={3} variant={variant}>
        Konditionen
      </Headline>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-4">
          <p className="font-semibold">Kosten</p>
          <p>33,- € pro Person und Monat</p>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">Studententarif</p>
          <p>25,- € pro Person und Monat (mit Studierendenausweis)</p>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">Regelunterricht</p>
          <p>
            Mindestens 1x pro Woche außer in Schließzeiten und an Feiertagen
          </p>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">Nachholtermine</p>
          <p>Bei Ausfall durch Urlaub oder Krankheit</p>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">Parallelkurse</p>
          <p>Teilnahme an Kursen derselben Stufe kostenlos</p>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">Schnupperstunde</p>
          <p>Kostenlos nach Absprache</p>
        </Card>
        <Card className="p-4 sm:col-span-2">
          <p className="font-semibold">Kündigung</p>
          <p>4 Wochen zum Monatsende möglich</p>
        </Card>
      </div>{" "}
    </PageSection>
  );
}
