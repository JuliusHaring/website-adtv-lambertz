"use client";

import { useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Headline from "@/lib/components/atoms/Headline";
import "./calendar.css";

export default function Ferien() {
  const variant = "warning";

  const closedDates = useMemo(
    () => [
      { from: "2024-12-23", to: "2025-01-06", label: "Weihnachtsferien" },
      { from: "2025-02-27", to: "2025-03-04", label: "Karneval" },
      { from: "2025-03-20", to: "2025-03-20" },
      { from: "2025-03-30", to: "2025-03-30" },
      { from: "2025-04-07", to: "2025-04-21" },
      { from: "2025-05-01", to: "2025-05-01", label: "Maifeiertag" },
      { from: "2025-05-21", to: "2025-05-21" },
      { from: "2025-05-29", to: "2025-06-01", label: "Christi Himmelfahrt" },
      { from: "2025-06-08", to: "2025-06-09", label: "Pfingsten" },
      { from: "2025-06-19", to: "2025-06-19", label: "Fronleichnam" },
      { from: "2025-06-30", to: "2025-07-18" },
      { from: "2025-07-26", to: "2025-07-27" },
      { from: "2025-09-08", to: "2025-09-21", label: "Sommerurlaub" },
      {
        from: "2025-10-03",
        to: "2025-10-03",
        label: "Tag der Deutschen Einheit",
      },
      { from: "2025-11-01", to: "2025-11-01", label: "Allerheiligen" },
      { from: "2025-11-03", to: "2025-11-16" },
      { from: "2025-12-22", to: "2026-01-06", label: "Weihnachtsferien" },
    ],
    [],
  );

  const isClosed = (date: Date) => {
    return closedDates.some(({ from, to }) => {
      const start = new Date(from);
      const end = new Date(to);
      return date >= start && date <= end;
    });
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  return (
    <section>
      <Headline level={2} variant={variant}>
        Ferienkalender
      </Headline>

      <p className="text-base">
        Die unten hervorgehobenen Tage sind Schließzeiten der Tanzschule.
      </p>

      <div className="my-10 flex justify-center">
        <div className="bg-base-100 rounded-lg shadow p-4 w-full md:w-auto">
          <Calendar
            tileClassName={({ date }) =>
              isClosed(date) ? "holiday-tile" : undefined
            }
            selectRange={false}
          />
        </div>
      </div>

      <p className="text-sm text-gray-500 italic text-center">
        An allen markierten Tagen findet kein Unterricht statt.
      </p>

      <div className="mt-10 space-y-3">
        <Headline level={3} variant={variant}>
          Übersicht der Schließzeiten
        </Headline>
        <ul className="list-disc list-inside space-y-1 text-base-content/80">
          {closedDates.map(({ from, to, label }, i) => (
            <li key={i}>
              {formatDate(from)}
              {from !== to && ` bis ${formatDate(to)}`}
              {label && ` – ${label}`}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
