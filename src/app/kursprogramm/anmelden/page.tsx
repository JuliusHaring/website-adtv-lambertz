import AnmeldenForm from "@/lib/components/forms/AnmeldenForm";
import { Suspense } from "react";

export const metadata = {
  title: "Anmeldung – ADTV Tanzschule Lambertz",
  description:
    "Melden Sie sich jetzt online für Ihren gewünschten Tanzkurs bei der ADTV Tanzschule Lambertz an. Einfach, schnell und verbindlich.",
  alternates: {
    canonical: "https://www.tanzschule-lambertz.de/kursprogramm/anmelden",
  },
  openGraph: {
    title: "Anmeldung – ADTV Tanzschule Lambertz",
    description:
      "Nutzen Sie unser Onlineformular zur Anmeldung für Tanzkurse bei der ADTV Tanzschule Lambertz in Aachen.",
    url: "https://www.tanzschule-lambertz.de/kursprogramm/anmelden",
    siteName: "ADTV Tanzschule Lambertz",
    type: "website",
    locale: "de_DE",
  },
};

export default function AnmeldenPage() {
  return (
    <Suspense fallback={<div className="p-6">Lade Anmeldeformular...</div>}>
      <AnmeldenForm />
    </Suspense>
  );
}
