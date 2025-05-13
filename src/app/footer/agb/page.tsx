"use client";

import Headline from "@/lib/components/atoms/Headline";
import PageSection from "@/lib/components/molecules/PageSection";

export default function AGB() {
  return (
    <PageSection title="Allgemeine Geschäftsbedingungen" variant="secondary">
      <div className="no-print">
        <button onClick={() => window.print()} className="btn btn-secondary">
          Als PDF speichern
        </button>
      </div>

      <p>
        Die Tanzschule Lambertz verpflichtet sich, bei rechtzeitiger und
        schriftlich vollständig ausgefüllter Anmeldung, einen Platz in dem
        gewünschten Kurs/Club/Tanzkreis zu reservieren.
      </p>

      <p>
        Sollte die gewählte Veranstaltung besetzt sein oder nicht stattfinden,
        erfolgt eine sofortige Benachrichtigung. In diesem Fall entfällt die
        Zahlungsverpflichtung, sofern von dem Kursteilnehmer nicht eine andere
        Veranstaltung als Ersatz gewählt wird.
      </p>

      <Headline level={3} variant="secondary">
        Fälligkeit des Honorars
      </Headline>

      <p>
        Bei zeitlich begrenzten Kursen fällt eine einmalige Kursgebühr an. Diese
        ist, sofern nicht anders vereinbart, spätestens am zweiten
        Veranstaltungstermin fällig. Bei fortlaufenden Kursen ist die monatliche
        Gebühr zu Beginn eines jeden Monats fällig. Die Zahlung kann bar, per
        Überweisung/Dauerauftrag oder per Lastschriftverfahren erfolgen. Die für
        Rücklastschriften anfallenden Bankgebühren trägt der Kursteilnehmer.
      </p>

      <p>
        Die Kursgebühr ist auch bei Nichtteilnahme z.B. wegen Urlaub oder
        Krankheit zu entrichten. In diesem Fall kann der versäumte Unterricht
        vorgezogen oder nachgeholt werden. Es liegt im Ermessen der Tanzschule
        Lambertz, ob in Einzelfällen eine Gutschrift erteilt wird, oder die
        bereits gezahlte Kursgebühr in bar zurückgezahlt wird.
      </p>

      <p>
        Innerhalb der Schulferien in Nordrhein-Westfalen findet kein Unterricht
        oder ein reduziertes Kursangebot statt. Bei fortlaufenden Kursen ist die
        Kursgebühr auch für die Dauer der unterrichtsfreien Zeit zu entrichten.
      </p>

      <Headline level={3} variant="secondary">
        Kündigungsbedingungen
      </Headline>

      <p>
        Eine Kündigung der fortlaufenden Tanzkurse ist nur in schriftlicher Form
        (Brief oder E-Mail) wirksam. Eine Kündigung muss spätestens 4 Wochen zum
        Monatsende eingehen. Wird die Frist nicht gewahrt, so gilt die
        Kündigungserklärung für den nächstmöglichen Kündigungstermin.
      </p>

      <Headline level={3} variant="secondary">
        Sonstiges
      </Headline>

      <p>
        Die Gestaltung des Unterrichtes und die Auswahl der Unterrichtsräume
        stehen der Tanzschule Lambertz frei.
      </p>

      <p>
        Die Tanzschule Lambertz ist stets bemüht, bei Einzelanmeldungen passende
        Tanzpartner zu finden. Dies ist jedoch keine Verpflichtung. Bei
        Nichtgelingen ist der Kursteilnehmer von der Honorarpflicht entbunden.
      </p>
    </PageSection>
  );
}
