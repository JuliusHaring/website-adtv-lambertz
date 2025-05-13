"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ferienCalendar.css";
import { closedDates } from "@/lib/data/feries";

export default function FerienKalender() {
  const isClosed = (date: Date) => {
    const day = new Date(date);
    day.setHours(0, 0, 0, 0);
    return closedDates.some(({ from, to }) => day >= from && day <= to);
  };

  return (
    <Calendar
      locale="de-DE"
      tileClassName={({ date }) =>
        isClosed(date) ? "holiday-tile" : undefined
      }
      formatDay={(_, date) => date.getDate().toString()}
      selectRange={false}
    />
  );
}
