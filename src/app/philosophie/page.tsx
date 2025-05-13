import PageSection from "@/lib/components/molecules/PageSection";
import { Metadata } from "next";
import { Image } from "@/lib/components/atoms/Image";
import Headline from "@/lib/components/atoms/Headline";
import Link from "next/link";

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
      <div className="text-center mt-4">
        <p className="italic">
          „Dieses nonverbale Zwiegespräch wie selbstverständlich im Unterricht
          zu vermitteln ist mein tägliches Bestreben.“
          <br />
          <span className="not-italic font-semibold">
            – Ihre Astrid Lambertz
          </span>
        </p>
        <Headline level={3}>
          Ausgebildet beim ADTV – mit Leidenschaft und Professionalität.
        </Headline>
        <div className="mt-4 inline-block">
          <Link
            href={"https://adtv.de/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              clickToOpen={false}
              src="/philosophie/adtv.png"
              alt="ADTV Logo"
              width={200}
              height={100}
              className="mx-auto"
            />
          </Link>
        </div>
      </div>
    </PageSection>
  );
}
