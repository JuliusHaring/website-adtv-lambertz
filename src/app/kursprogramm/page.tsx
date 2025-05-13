import Headline from "@/lib/components/atoms/Headline";
import Link from "next/link";

export default function Kursprogramm() {
  const pageVariant = "secondary";

  const kurse = [
    { wochentag: "Donnerstag", uhrzeit: "19:30 Uhr", beginn: "ab 09.01.25" },
    { wochentag: "Sonntag", uhrzeit: "15:30 Uhr", beginn: "ab 12.01.25" },
  ];

  return (
    <section className="text-base-content px-4 w-full max-w-3xl mx-auto space-y-6">
      <Headline level={2} variant={pageVariant}>
        Einsteiger
      </Headline>

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
        {kurse.map(({ wochentag, uhrzeit, beginn }) => (
          <div
            key={`${wochentag}-${uhrzeit}`}
            className="bg-base-100 border border-base-200 rounded-xl p-4 shadow-md space-y-2"
          >
            <p className="text-lg font-semibold text-base-content">
              {wochentag}
            </p>
            <p>
              <span className="font-medium">Uhrzeit:</span> {uhrzeit}
            </p>
            <p>
              <span className="font-medium">Beginn:</span> {beginn}
            </p>
            <Link href="/kontakt" className="btn btn-secondary btn-sm mt-2">
              Anmelden →
            </Link>
          </div>
        ))}
      </div>

      <Headline level={3} variant={pageVariant}>
        Konditionen
      </Headline>

      <ul className="list-disc list-inside space-y-2">
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
    </section>
  );
}
