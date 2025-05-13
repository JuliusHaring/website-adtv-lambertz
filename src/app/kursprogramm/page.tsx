import Headline from "@/lib/components/atoms/Headline";
import PageSection from "@/lib/components/molecules/PageSection";
import Link from "next/link";

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
          <div
            key={`${wochentag}-${uhrzeit}`}
            className="bg-base-100 border border-base-200 rounded-lg p-4 shadow-md"
          >
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
          </div>
        ))}
      </div>

      <Headline level={3} variant={variant}>
        Konditionen
      </Headline>

      <ul>
        <li>Kosten: 33,- € pro Person und Monat</li>
        <li>
          Studententarif: 25,- € pro Person und Monat (mit Studierendenausweis)
        </li>
        <li>
          Mindestens 1x pro Woche Unterricht außer in Schließzeiten und an
          Feiertagen
        </li>
        <li>Nachholtermine bei Ausfall durch Urlaub oder Krankheit</li>
        <li>Teilnahme an Parallelkursen derselben Stufe kostenlos</li>
        <li>Kostenlose Schnupperstunde nach Absprache möglich</li>
        <li>Kündigung 4 Wochen zum Monatsende möglich</li>
      </ul>
    </PageSection>
  );
}
