import PageSection from "@/lib/components/molecules/PageSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophie – ADTV Tanzschule Lambertz",
  description:
    "Unsere Philosophie: Tanzen als nonverbale Sprache voller Vertrauen, Freude und Rücksichtnahme. Erfahren Sie, was unsere Kurse besonders macht.",
  alternates: {
    canonical: "https://www.tanzschule-lambertz.de/philosophie",
  },
  openGraph: {
    title: "Philosophie – ADTV Tanzschule Lambertz",
    description:
      "Tanzen ist mehr als Bewegung: Unsere Philosophie basiert auf Vertrauen, Freude und gegenseitiger Rücksichtnahme.",
    url: "https://www.tanzschule-lambertz.de/philosophie",
    siteName: "ADTV Tanzschule Lambertz",
    type: "website",
    locale: "de_DE",
  },
};

export default function Philosophie() {
  return (
    <PageSection
      title="Sprechen Sie Walzer?"
      variant="primary"
      titleClass="text-center"
    >
      <p className="text-lg leading-relaxed text-center">
        Tanzen ist eine Sprache, die keine Grenzen kennt – eine Sprache, die
        jeder sprechen sollte. Rücksichtnahme, Vertrauen und Freude stehen im
        Mittelpunkt jedes Tanzkurses.
      </p>
      <p className="italic text-center">
        „Dieses nonverbale Zwiegespräch wie selbstverständlich im Unterricht zu
        vermitteln ist mein tägliches Bestreben.“
        <br />
        <span className="not-italic font-semibold">– Ihre Astrid Lambertz</span>
      </p>
    </PageSection>
  );
}
