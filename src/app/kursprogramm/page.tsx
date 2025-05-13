import Headline from "@/lib/components/atoms/Headline";
import Link from "next/link";

export default function Kursprogramm() {
  const pageVariant = "secondary";

  const kurse = [
    { wochentag: "Donnerstag", uhrzeit: "19:30 Uhr", beginn: "ab 09.01.25" },
    { wochentag: "Sonntag", uhrzeit: "15:30 Uhr", beginn: "ab 12.01.25" },
  ];

  return (
    <section>
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
        Kombination mit unseren kurzen Kündigungsfristen (zu den{" "}
        <a className="link link-secondary" href="/footer/agb">
          AGB
        </a>
        ) entscheiden Sie selber, ob Ihr Kurs 4 Wochen oder 3 Monate dauert.
      </p>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Wochentag</th>
              <th>Uhrzeit</th>
              <th>Kursbeginn</th>
              <th>Anmeldung</th>
            </tr>
          </thead>
          <tbody>
            {kurse.map(({ wochentag, uhrzeit, beginn }) => (
              <tr key={`${wochentag}-${uhrzeit}`}>
                <td>{wochentag}</td>
                <td>{uhrzeit}</td>
                <td>{beginn}</td>
                <td>
                  <Link href="/kontakt" className="btn btn-secondary btn-sm">
                    Anmelden →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
