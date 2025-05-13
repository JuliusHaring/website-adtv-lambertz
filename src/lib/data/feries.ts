export type ClosedDate = {
  from: Date;
  to: Date;
  label?: string;
};

const parseLocalDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0);
};

export const closedDates: ClosedDate[] = [
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
  { from: "2025-10-03", to: "2025-10-03", label: "Tag der Deutschen Einheit" },
  { from: "2025-11-01", to: "2025-11-01", label: "Allerheiligen" },
  { from: "2025-11-03", to: "2025-11-16" },
  { from: "2025-12-22", to: "2026-01-06", label: "Weihnachtsferien" },
].map(({ from, to, label }) => ({
  from: parseLocalDate(from),
  to: parseLocalDate(to),
  label,
}));
