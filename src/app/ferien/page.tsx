import { Metadata } from "next";
import Headline from "@/lib/components/atoms/Headline";
import PageSection from "@/lib/components/molecules/PageSection";
import FerienKalender from "@/lib/components/organisms/FerienCalender";
import { closedDates } from "@/lib/data/feries";

export const metadata: Metadata = {
  title: "Ferienkalender – ADTV Tanzschule Lambertz",
  description:
    "Alle Schließzeiten der ADTV Tanzschule Lambertz auf einen Blick. Feiertage und Ferienzeiten bequem im Kalender einsehen.",
  alternates: {
    canonical: "https://www.tanzschule-lambertz.de/ferien",
  },
  openGraph: {
    title: "Ferienkalender – ADTV Tanzschule Lambertz",
    description:
      "Alle Schließzeiten der Tanzschule übersichtlich im Kalenderformat – inklusive Ferien, Feiertagen und Sonderterminen.",
    url: "https://www.tanzschule-lambertz.de/ferien",
    siteName: "ADTV Tanzschule Lambertz",
    type: "website",
    locale: "de_DE",
  },
};

export default function Ferien() {
  const variant = "warning";

  const formatDate = (date: Date) =>
    date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  return (
    <PageSection title="Ferienkalender" variant={variant}>
      <p>Die unten hervorgehobenen Tage sind Schließzeiten der Tanzschule.</p>

      <div className="flex justify-center">
        <div className="w-full max-w-sm lg:max-w-md shadow-xl p-3 rounded-lg">
          <FerienKalender />
        </div>
      </div>

      <p className="text-sm italic text-center">
        An allen markierten Tagen findet kein Unterricht statt.
      </p>

      <div>
        <Headline level={3} variant={variant}>
          Übersicht der Schließzeiten
        </Headline>
        <ul>
          {closedDates.map(({ from, to, label }, i) => (
            <li key={i}>
              {formatDate(from)}
              {from.getTime() !== to.getTime() && ` bis ${formatDate(to)}`}
              {label && ` – ${label}`}
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
